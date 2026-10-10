import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ===============================
// FIREBASE CONFIGURATION
// ===============================

const firebaseConfig = {
  apiKey: "AIzaSyBjPuZNMklnafd6TsAmMBBe9jV6iYD-PrI",
  authDomain: "ai-placement-trainer.firebaseapp.com",
  projectId: "ai-placement-trainer",
  storageBucket: "ai-placement-trainer.firebasestorage.app",
  messagingSenderId: "993598688827",
  appId: "1:993598688827:web:b8699daea411791bfd961e",
  measurementId: "G-5YRVJVCCM1"
};


// ===============================
// INITIALIZE FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


// ===============================
// ANONYMOUS AUTHENTICATION
// ===============================

const authReady = signInAnonymously(auth)
  .then((result) => {
    console.log("Anonymous authentication successful");
    console.log("User ID:", result.user.uid);

    return result.user;
  })
  .catch((error) => {
    console.error("Anonymous authentication failed:", error);

    throw error;
  });


// ===============================
// GLOBAL VARIABLES
// ===============================

let unsubscribeRoom = null;
let liveFriendTimer = null;


// ===============================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ===============================

window.createGDRoom = createGDRoom;
window.joinGDRoom = joinGDRoom;
window.sendGDMessage = sendGDMessage;
window.startFriendGDTimer = startFriendGDTimer;
window.finishFriendGD = finishFriendGD;


// ===============================
// AUTO ROOM CODE GENERATOR
// ===============================

function generateRoomCode() {

  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "GD-";

  for (let i = 0; i < 6; i++) {

    code += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );

  }

  return code;
}


// ===============================
// CREATE ROOM
// ===============================

async function createGDRoom() {

  const nameEl = document.getElementById("gdUserName");
  const topicEl = document.getElementById("gdFriendTopic");
  const roomInputEl = document.getElementById("gdRoomCode");
  const statusEl = document.getElementById("gdRoomStatus");

  const userName = nameEl.value.trim();
  const topic = topicEl.value.trim();

  if (!userName || !topic) {

    statusEl.innerText =
      "Enter your name and discussion topic.";

    return;
  }

  try {

    // Wait until anonymous authentication is complete
    await authReady;

    const roomCode = generateRoomCode();

    const roomRef = doc(
      db,
      "gdRooms",
      roomCode
    );

    await setDoc(roomRef, {

      roomCode: roomCode,

      topic: topic,

      participants: [
        userName
      ],

      messages: [],

      timer: 120,

      started: false,

      createdAt: Date.now()

    });

    if (roomInputEl) {

      roomInputEl.value = roomCode;

    }

    statusEl.innerText =
      "Room created successfully. Share the room code with your friend.";

    attachRoomListener(roomCode);

  } catch (error) {

    console.error("Create room error:", error);

    statusEl.innerText =
      "Unable to create room. Please try again.";

  }
}


// ===============================
// JOIN ROOM
// ===============================

async function joinGDRoom() {

  const nameEl = document.getElementById("gdUserName");
  const roomEl = document.getElementById("gdRoomCode");
  const statusEl = document.getElementById("gdRoomStatus");

  const userName = nameEl.value.trim();

  const roomCode =
    roomEl.value.trim().toUpperCase();

  if (!userName || !roomCode) {

    statusEl.innerText =
      "Enter your name and room code.";

    return;
  }

  try {

    // Wait for authentication
    await authReady;

    const roomRef = doc(
      db,
      "gdRooms",
      roomCode
    );

    const roomSnap =
      await getDoc(roomRef);

    if (!roomSnap.exists()) {

      statusEl.innerText =
        "Room not found.";

      return;
    }

    const roomData =
      roomSnap.data();

    if (
      !roomData.participants.includes(userName)
    ) {

      await updateDoc(roomRef, {

        participants:
          arrayUnion(userName)

      });

    }

    statusEl.innerText =
      "Joined room successfully.";

    attachRoomListener(roomCode);

  } catch (error) {

    console.error("Join room error:", error);

    statusEl.innerText =
      "Unable to join room. Please try again.";

  }
}


// ===============================
// START FRIEND GD TIMER
// ===============================

async function startFriendGDTimer() {

  const roomEl =
    document.getElementById("gdRoomCode");

  const statusEl =
    document.getElementById("gdRoomStatus");

  const roomCode =
    roomEl.value.trim().toUpperCase();

  if (!roomCode) {

    statusEl.innerText =
      "Enter room code first.";

    return;
  }

  try {

    await authReady;

    const roomRef =
      doc(db, "gdRooms", roomCode);

    const roomSnap =
      await getDoc(roomRef);

    if (!roomSnap.exists()) {

      statusEl.innerText =
        "Room not found.";

      return;
    }

    let timeLeft =
      roomSnap.data().timer || 120;

    await updateDoc(roomRef, {

      started: true

    });

    clearInterval(liveFriendTimer);

    liveFriendTimer =
      setInterval(async () => {

        timeLeft--;

        if (timeLeft < 0) {

          clearInterval(
            liveFriendTimer
          );

          try {

            await updateDoc(
              roomRef,
              {
                timer: 0,
                started: false
              }
            );

          } catch (error) {

            console.error(
              "Timer update error:",
              error
            );

          }

          return;
        }

        try {

          await updateDoc(
            roomRef,
            {
              timer: timeLeft
            }
          );

        } catch (error) {

          console.error(
            "Timer update error:",
            error
          );

        }

      }, 1000);

    statusEl.innerText =
      "Shared GD started.";

  } catch (error) {

    console.error(
      "Start timer error:",
      error
    );

    statusEl.innerText =
      "Unable to start GD timer.";

  }
}


// ===============================
// SEND MESSAGE
// ===============================

async function sendGDMessage() {

  const nameEl =
    document.getElementById("gdUserName");

  const roomEl =
    document.getElementById("gdRoomCode");

  const inputEl =
    document.getElementById("gdMessageInput");

  const statusEl =
    document.getElementById("gdRoomStatus");

  const userName =
    nameEl.value.trim();

  const roomCode =
    roomEl.value.trim().toUpperCase();

  const message =
    inputEl.value.trim();

  if (!userName || !roomCode) {

    statusEl.innerText =
      "Join or create room first.";

    return;
  }

  if (!message) {

    statusEl.innerText =
      "Type a message first.";

    return;
  }

  try {

    await authReady;

    const roomRef =
      doc(db, "gdRooms", roomCode);

    const roomSnap =
      await getDoc(roomRef);

    if (!roomSnap.exists()) {

      statusEl.innerText =
        "Room not found.";

      return;
    }

    const roomData =
      roomSnap.data();

    const oldMessages =
      roomData.messages || [];

    oldMessages.push({

      user: userName,

      text: message,

      time:
        new Date().toLocaleTimeString()

    });

    await updateDoc(roomRef, {

      messages: oldMessages

    });

    inputEl.value = "";

  } catch (error) {

    console.error(
      "Send message error:",
      error
    );

    statusEl.innerText =
      "Unable to send message.";

  }
}


// ===============================
// LIVE LISTENER
// ===============================

async function attachRoomListener(roomCode) {

  try {

    await authReady;

    const roomRef =
      doc(db, "gdRooms", roomCode);

    if (unsubscribeRoom) {

      unsubscribeRoom();

    }

    unsubscribeRoom =
      onSnapshot(
        roomRef,
        (snapshot) => {

          if (!snapshot.exists()) {

            return;

          }

          const data =
            snapshot.data();

          const roomText =
            document.getElementById(
              "liveRoomCode"
            );

          const topicText =
            document.getElementById(
              "liveGDTopic"
            );

          const participantText =
            document.getElementById(
              "gdParticipants"
            );

          const timerText =
            document.getElementById(
              "friendGDTimer"
            );

          const chatBox =
            document.getElementById(
              "gdChatMessages"
            );


          // ROOM CODE

          if (roomText) {

            roomText.innerText =
              data.roomCode || "-";

          }


          // TOPIC

          if (topicText) {

            topicText.innerText =
              data.topic ||
              "No topic selected";

          }


          // PARTICIPANTS

          if (participantText) {

            participantText.innerText =
              (data.participants || [])
                .length;

          }


          // TIMER

          const timeLeft =
            data.timer || 0;

          const min =
            Math.floor(
              timeLeft / 60
            );

          const sec =
            timeLeft % 60;

          if (timerText) {

            timerText.innerText =
              String(min).padStart(2, "0") +
              ":" +
              String(sec).padStart(2, "0");

          }


          // CHAT MESSAGES

          const messages =
            data.messages || [];

          if (chatBox) {

            if (messages.length === 0) {

              chatBox.innerHTML =
                "<p>No discussion messages yet.</p>";

            } else {

              chatBox.innerHTML =
                messages
                  .map((msg) => `

                    <div style="
                      padding:12px;
                      margin-bottom:12px;
                      background:#ffffff;
                      color:#000000;
                      border:1px solid #d1d5db;
                      border-radius:12px;
                    ">

                      <p style="
                        margin:0;
                        color:#000000;
                      ">

                        <strong>
                          ${msg.user}
                        </strong>

                        <span style="
                          font-size:12px;
                          color:#6b7280;
                        ">

                          (${msg.time})

                        </span>

                      </p>

                      <p style="
                        margin-top:8px;
                        color:#000000;
                      ">

                        ${msg.text}

                      </p>

                    </div>

                  `)
                  .join("");

              chatBox.scrollTop =
                chatBox.scrollHeight;

            }

          }

        },
        (error) => {

          console.error(
            "Room listener error:",
            error
          );

        }
      );

  } catch (error) {

    console.error(
      "Attach listener error:",
      error
    );

  }
}


// ===============================
// FINISH GD
// ===============================

async function finishFriendGD() {

  const roomEl =
    document.getElementById(
      "gdRoomCode"
    );

  const roomCode =
    roomEl.value.trim().toUpperCase();

  if (!roomCode) {

    alert(
      "Enter room code first."
    );

    return;
  }

  try {

    await authReady;

    const roomRef =
      doc(db, "gdRooms", roomCode);

    const roomSnap =
      await getDoc(roomRef);

    if (!roomSnap.exists()) {

      alert(
        "Room not found."
      );

      return;
    }

    const data =
      roomSnap.data();

    const participants =
      data.participants || [];

    const messages =
      data.messages || [];

    const topic =
      (data.topic || "")
        .toLowerCase();

    let result = [];


    // ===============================
    // CALCULATE EACH PARTICIPANT
    // ===============================

    participants.forEach(
      (name) => {

        const userMsgs =
          messages.filter(
            (m) => m.user === name
          );

        const messageCount =
          userMsgs.length;

        let totalWords = 0;

        let relevantCount = 0;


        userMsgs.forEach(
          (msg) => {

            const words =
              msg.text
                .trim()
                .split(/\s+/)
                .length;

            totalWords += words;


            if (
              topic &&
              msg.text
                .toLowerCase()
                .includes(
                  topic.split(" ")[0]
                )
            ) {

              relevantCount++;

            }

          }
        );


        // Participation (25)

        let participation =
          Math.min(
            messageCount * 5,
            25
          );


        // Content Quality (25)

        let quality =
          Math.min(
            Math.floor(
              totalWords / 4
            ),
            25
          );


        // Topic Relevance (20)

        let relevance =
          Math.min(
            relevantCount * 5,
            20
          );


        // Communication (15)

        let communication =
          totalWords > 40
            ? 15
            : totalWords > 20
              ? 10
              : 5;


        // Activity (15)

        let activity =
          messageCount >= 5
            ? 15
            : messageCount >= 3
              ? 10
              : 5;


        const total =
          participation +
          quality +
          relevance +
          communication +
          activity;


        let feedback = "";


        if (total >= 85) {

          feedback =
            "Excellent discussion. Strong arguments and active participation.";

        }

        else if (total >= 70) {

          feedback =
            "Good discussion. Add more supporting examples.";

        }

        else {

          feedback =
            "Needs improvement. Participate more and explain your ideas clearly.";

        }


        result.push({

          name: name,

          score: total,

          participation: participation,

          quality: quality,

          relevance: relevance,

          communication: communication,

          feedback: feedback,

          messages: messageCount

        });

      }
    );


    // ===============================
    // SORT LEADERBOARD
    // ===============================

    result.sort(
      (a, b) =>
        b.score - a.score
    );


    const leaderboard =
      document.getElementById(
        "friendGDLeaderboard"
      );

    const resultBox =
      document.getElementById(
        "friendGDResult"
      );

    let html = "";


    result.forEach(
      (p, index) => {

        let medal = "🏅";

        if (index === 0) {

          medal = "🥇";

        }

        else if (index === 1) {

          medal = "🥈";

        }

        else if (index === 2) {

          medal = "🥉";

        }


        html += `

          <div style="
            background:white;
            border:1px solid #ddd;
            border-radius:12px;
            padding:15px;
            margin-bottom:15px;
          ">

            <h3>
              ${medal}
              Rank ${index + 1}
              - ${p.name}
            </h3>

            <p>
              <b>Overall Score:</b>
              ${p.score}/100
            </p>

            <p>
              Participation :
              ${p.participation}/25
            </p>

            <p>
              Content Quality :
              ${p.quality}/25
            </p>

            <p>
              Topic Relevance :
              ${p.relevance}/20
            </p>

            <p>
              Communication :
              ${p.communication}/15
            </p>

            <p>
              Messages Sent :
              ${p.messages}
            </p>

            <p style="color:green;">

              <b>AI Feedback:</b>
              <br>

              ${p.feedback}

            </p>

          </div>

        `;

      }
    );


    leaderboard.innerHTML =
      html;

    resultBox.style.display =
      "block";


    localStorage.setItem(
      "gdStatus",
      "Completed"
    );

  } catch (error) {

    console.error(
      "Finish GD error:",
      error
    );

    alert(
      "Unable to finish GD. Please try again."
    );

  }
}