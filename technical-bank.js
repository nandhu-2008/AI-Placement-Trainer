// ======================================================
// TECHNICAL QUESTION BANK (200+ Questions)
// Categories: C, C++, Java, Python, Data Structures, Algorithms, OOP, DBMS, SQL,
// Operating Systems, Computer Networks, Software Engineering, Basic CS,
// and Engineering Departments (CSE, IT, ECE, EEE, Mech, Civil, AIDS, AIML, CSBS, BME)
// ======================================================

window.TECHNICAL_BANK = [
  // --- CORE CS: PROGRAMMING LANGUAGES (C, C++, JAVA, PYTHON) ---
  {
    id: 1,
    department: "cse",
    category: "C Programming",
    difficulty: "Easy",
    question: "What is the size of 'int' data type in C on a 32-bit architecture system?",
    options: ["2 Bytes", "4 Bytes", "8 Bytes", "Depends on compiler"],
    correctAnswer: 1,
    explanation: "On standard 32-bit architectures, 'int' occupies 4 bytes (32 bits)."
  },
  {
    id: 2,
    department: "cse",
    category: "C Programming",
    difficulty: "Medium",
    question: "Which keyword in C is used to keep a variable value persistent across function calls?",
    options: ["extern", "auto", "static", "register"],
    correctAnswer: 2,
    explanation: "'static' variables retain their value across multiple invocations of the function where they are declared."
  },
  {
    id: 3,
    department: "cse",
    category: "C++",
    difficulty: "Easy",
    question: "Which feature of C++ allows a function to have the same name but different parameters?",
    options: ["Function Overriding", "Function Overloading", "Virtual Functions", "Encapsulation"],
    correctAnswer: 1,
    explanation: "Function overloading allows multiple functions in the same scope to share the same name with different signatures."
  },
  {
    id: 4,
    department: "cse",
    category: "C++",
    difficulty: "Medium",
    question: "What is a 'vptr' in C++?",
    options: ["Pointer to void", "Pointer to a virtual table (vtable)", "Pointer to vector", "Pointer to dynamic memory"],
    correctAnswer: 1,
    explanation: "A 'vptr' (virtual pointer) points to the class virtual function table (vtable) used to implement dynamic polymorphism."
  },
  {
    id: 5,
    department: "cse",
    category: "Java",
    difficulty: "Easy",
    question: "Which memory area in Java JVM stores objects created using the 'new' keyword?",
    options: ["Stack", "Heap", "Method Area", "Program Counter Register"],
    correctAnswer: 1,
    explanation: "All objects in Java are dynamically allocated memory on the JVM Heap."
  },
  {
    id: 6,
    department: "cse",
    category: "Java",
    difficulty: "Medium",
    question: "Why is String immutable in Java?",
    options: ["Security and String Pool optimization", "To prevent compilation", "Java doesn't support pointers", "Strings are primitives"],
    correctAnswer: 0,
    explanation: "String immutability allows String pool sharing, thread safety, security in class loading and networking, and caching hashcodes."
  },
  {
    id: 7,
    department: "cse",
    category: "Python",
    difficulty: "Easy",
    question: "Which data type in Python is ordered and immutable?",
    options: ["List", "Set", "Dictionary", "Tuple"],
    correctAnswer: 3,
    explanation: "Tuples in Python preserve element order and cannot be mutated after creation."
  },
  {
    id: 8,
    department: "cse",
    category: "Python",
    difficulty: "Medium",
    question: "What is the time complexity of looking up a key in a Python dictionary (hashmap) on average?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    correctAnswer: 0,
    explanation: "Python dictionaries use hash tables, giving O(1) average time complexity for lookup operations."
  },

  // --- DATA STRUCTURES & ALGORITHMS ---
  {
    id: 9,
    department: "cse",
    category: "Data Structures",
    difficulty: "Easy",
    question: "Which data structure operates on LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1,
    explanation: "Stack uses Last-In, First-Out (LIFO) order for push and pop operations."
  },
  {
    id: 10,
    department: "cse",
    category: "Data Structures",
    difficulty: "Medium",
    question: "What is the worst-case time complexity of searching in a Binary Search Tree (BST) of height h?",
    options: ["O(1)", "O(log N)", "O(h)", "O(N^2)"],
    correctAnswer: 2,
    explanation: "Searching in a BST traverses down the height of the tree, taking O(h) time, which is O(N) if unbalanced."
  },
  {
    id: 11,
    department: "cse",
    category: "Algorithms",
    difficulty: "Easy",
    question: "What is the average time complexity of Quick Sort algorithm?",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(log N)"],
    correctAnswer: 1,
    explanation: "Quick Sort has an average-case time complexity of O(N log N)."
  },
  {
    id: 12,
    department: "cse",
    category: "Algorithms",
    difficulty: "Hard",
    question: "Which algorithm is used to find the shortest path from a single source to all other vertices in a weighted graph with non-negative edge weights?",
    options: ["Kruskal's Algorithm", "Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm"],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm efficiently computes single-source shortest paths for non-negative edge weights."
  },

  // --- OOP & DBMS & SQL ---
  {
    id: 13,
    department: "cse",
    category: "OOP",
    difficulty: "Easy",
    question: "Which OOP concept hides internal implementation details and shows only functionality to the user?",
    options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    correctAnswer: 1,
    explanation: "Abstraction exposes essential features while hiding internal complexity."
  },
  {
    id: 14,
    department: "cse",
    category: "DBMS",
    difficulty: "Medium",
    question: "What does the ACID property 'Atomicity' guarantee in a database transaction?",
    options: ["All operations succeed or none are applied", "Data remains consistent", "Multiple transactions execute concurrently without interference", "Committed data persists indefinitely"],
    correctAnswer: 0,
    explanation: "Atomicity ensures that a transaction is 'all or nothing'."
  },
  {
    id: 15,
    department: "cse",
    category: "SQL",
    difficulty: "Easy",
    question: "Which SQL clause is used to filter records after aggregation (with GROUP BY)?",
    options: ["WHERE", "HAVING", "ORDER BY", "WHERE GROUP"],
    correctAnswer: 1,
    explanation: "HAVING is used to filter aggregated results produced by GROUP BY."
  },
  {
    id: 16,
    department: "cse",
    category: "SQL",
    difficulty: "Medium",
    question: "Which command in SQL removes all rows from a table without logging individual row deletions?",
    options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
    correctAnswer: 1,
    explanation: "TRUNCATE removes all rows from a table quickly by deallocating pages rather than logging row deletions."
  },

  // --- OPERATING SYSTEMS & NETWORKS & SOFTWARE ENGINEERING ---
  {
    id: 17,
    department: "it",
    category: "Operating Systems",
    difficulty: "Easy",
    question: "What is a 'Deadlock' in an operating system?",
    options: ["CPU running at 100% load", "Two or more processes waiting indefinitely for resources held by each other", "A corrupted hard disk sector", "Unsaved cache memory"],
    correctAnswer: 1,
    explanation: "Deadlock occurs when processes are blocked waiting for resources locked by each other in a circular wait."
  },
  {
    id: 18,
    department: "it",
    category: "Operating Systems",
    difficulty: "Medium",
    question: "Which page replacement algorithm suffers from Belady's Anomaly?",
    options: ["LRU (Least Recently Used)", "FIFO (First In First Out)", "Optimal Page Replacement", "LFU (Least Frequently Used)"],
    correctAnswer: 1,
    explanation: "FIFO page replacement can exhibit Belady's Anomaly where increasing frame count leads to more page faults."
  },
  {
    id: 19,
    department: "it",
    category: "Computer Networks",
    difficulty: "Easy",
    question: "Which layer of the OSI model is responsible for routing packets across networks?",
    options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
    correctAnswer: 1,
    explanation: "The Network Layer (Layer 3) handles logical IP addressing and packet routing."
  },
  {
    id: 20,
    department: "it",
    category: "Computer Networks",
    difficulty: "Medium",
    question: "What is the primary difference between TCP and UDP?",
    options: ["TCP is connectionless while UDP is connection-oriented", "TCP is connection-oriented and reliable while UDP is connectionless and lightweight", "UDP is slower than TCP", "TCP operates at Layer 2"],
    correctAnswer: 1,
    explanation: "TCP provides guaranteed, ordered, connection-oriented delivery; UDP is connectionless and fast with no overhead."
  },
  {
    id: 21,
    department: "it",
    category: "Software Engineering",
    difficulty: "Easy",
    question: "What does SDLC stand for in Software Engineering?",
    options: ["Software Development Life Cycle", "System Design and Logic Code", "Structured Development Language Concept", "Software Data Link Control"],
    correctAnswer: 0,
    explanation: "SDLC stands for Software Development Life Cycle."
  },

  // --- ECE & EEE ---
  {
    id: 22,
    department: "ece",
    category: "Electronics",
    difficulty: "Easy",
    question: "What is the principal carrier of current in an N-type semiconductor?",
    options: ["Holes", "Free Electrons", "Protons", "Ions"],
    correctAnswer: 1,
    explanation: "In N-type semiconductors, majority charge carriers are free electrons."
  },
  {
    id: 23,
    department: "ece",
    category: "Signals & Systems",
    difficulty: "Medium",
    question: "Nyquist sampling theorem states that sampling frequency (fs) must be:",
    options: ["fs >= 2 * fm", "fs < fm", "fs = fm / 2", "fs = fm"],
    correctAnswer: 0,
    explanation: "To prevent aliasing, sampling frequency fs must be at least twice the maximum signal frequency fm."
  },
  {
    id: 24,
    department: "eee",
    category: "Electrical Machines",
    difficulty: "Easy",
    question: "Which component in a DC generator converts AC voltage generated in armature to DC?",
    options: ["Slip Rings", "Commutator", "Stator", "Transformer"],
    correctAnswer: 1,
    explanation: "The commutator acts as a mechanical rectifier converting AC inside the armature to DC output."
  },

  // --- MECHANICAL & CIVIL ---
  {
    id: 25,
    department: "mech",
    category: "Thermodynamics",
    difficulty: "Easy",
    question: "The First Law of Thermodynamics is based on the conservation of:",
    options: ["Mass", "Momentum", "Energy", "Entropy"],
    correctAnswer: 2,
    explanation: "The first law of thermodynamics states that energy can neither be created nor destroyed (Conservation of Energy)."
  },
  {
    id: 26,
    department: "civil",
    category: "Structural Engineering",
    difficulty: "Easy",
    question: "What is the standard characteristic compressive strength testing duration for concrete cubes?",
    options: ["7 days", "14 days", "28 days", "50 days"],
    correctAnswer: 2,
    explanation: "Concrete compressive strength is standardly tested after 28 days of curing."
  },

  // --- AIDS & AIML & CSBS & BME ---
  {
    id: 27,
    department: "aids",
    category: "Data Science",
    difficulty: "Easy",
    question: "Which technique is used to scale numerical features between 0 and 1?",
    options: ["Standardization", "Min-Max Normalization", "One-Hot Encoding", "Label Encoding"],
    correctAnswer: 1,
    explanation: "Min-Max normalization transforms data to scale within the range [0, 1]."
  },
  {
    id: 28,
    department: "aiml",
    category: "Machine Learning",
    difficulty: "Medium",
    question: "What is the activation function commonly used in hidden layers of Deep Neural Networks to avoid vanishing gradient?",
    options: ["Sigmoid", "Tanh", "ReLU (Rectified Linear Unit)", "Step Function"],
    correctAnswer: 2,
    explanation: "ReLU is widely used because its derivative is 1 for positive inputs, mitigating vanishing gradient issues."
  },
  {
    id: 29,
    department: "csbs",
    category: "Business Analytics",
    difficulty: "Easy",
    question: "Which chart is best suited for showing trends over continuous time intervals?",
    options: ["Pie Chart", "Line Chart", "Bar Graph", "Scatter Plot"],
    correctAnswer: 1,
    explanation: "Line charts effectively display continuous trend changes over time."
  },
  {
    id: 30,
    department: "bme",
    category: "Biomedical",
    difficulty: "Easy",
    question: "Which medical imaging modality uses non-ionizing radio waves and strong magnetic fields?",
    options: ["X-Ray", "CT Scan", "MRI (Magnetic Resonance Imaging)", "PET Scan"],
    correctAnswer: 2,
    explanation: "MRI relies on strong magnetic fields and radio frequency pulses, causing no ionizing radiation."
  }
];

// Dynamically generate remaining questions up to 215 questions covering all 10 departments and CS subtopics
(function generateRemainingTechnicalQuestions() {
  const depts = ["cse", "it", "ece", "eee", "mech", "civil", "aids", "aiml", "csbs", "bme"];
  const topicsMap = {
    cse: ["C Programming", "C++", "Java", "Python", "Data Structures", "Algorithms", "DBMS", "SQL", "OOP"],
    it: ["Operating Systems", "Computer Networks", "Software Engineering", "Web Tech", "Cloud Computing", "Cyber Security"],
    ece: ["Digital Electronics", "Microprocessors", "VLSI", "Signals & Systems", "Communication Systems"],
    eee: ["Circuit Theory", "Control Systems", "Power Systems", "Electrical Machines", "Power Electronics"],
    mech: ["Thermodynamics", "Fluid Mechanics", "Strength of Materials", "Manufacturing", "CAD/CAM"],
    civil: ["Building Materials", "Structural Analysis", "Geotechnical Engg", "Surveying", "Fluid Mechanics"],
    aids: ["Python Data Science", "Pandas & Numpy", "Data Visualization", "Big Data", "Data Mining"],
    aiml: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Deep Learning", "NLP"],
    csbs: ["Business Systems", "Enterprise Architecture", "Financial Management", "Data Analytics", "Agile Software"],
    bme: ["Bio-Instrumentation", "Medical Imaging", "Biomechanics", "Biosensors", "Healthcare Systems"]
  };

  const diffs = ["Easy", "Medium", "Hard"];
  let idCounter = window.TECHNICAL_BANK.length + 1;

  while (idCounter <= 215) {
    const dept = depts[idCounter % depts.length];
    const topics = topicsMap[dept];
    const cat = topics[idCounter % topics.length];
    const diff = diffs[idCounter % 3];

    let qText = "";
    let opts = [];
    let correct = 0;
    let exp = "";

    switch(cat) {
      case "DBMS":
      case "SQL":
        qText = `In SQL, which command is used to remove a table structure permanently from a database?`;
        opts = ["DROP TABLE", "DELETE TABLE", "TRUNCATE TABLE", "REMOVE TABLE"];
        correct = 0;
        exp = "DROP TABLE completely deletes the table definition and all its data.";
        break;

      case "Data Structures":
      case "Algorithms":
        qText = `Which algorithm design strategy does Merge Sort utilize?`;
        opts = ["Divide and Conquer", "Greedy Approach", "Dynamic Programming", "Backtracking"];
        correct = 0;
        exp = "Merge Sort divides the array into sub-arrays, recursively sorts them, and merges the sorted halves.";
        break;

      case "Computer Networks":
        qText = `Which protocol is primarily used for secure encrypted web traffic?`;
        opts = ["HTTPS", "HTTP", "FTP", "TELNET"];
        correct = 0;
        exp = "HTTPS uses TLS/SSL encryption to secure HTTP communications.";
        break;

      case "Operating Systems":
        qText = `What is a lightweight process that shares address space with sibling processes called?`;
        opts = ["Thread", "Kernel Module", "Daemon", "Interrupt Service Routine"];
        correct = 0;
        exp = "Threads share memory and address space of their parent process.";
        break;

      default:
        qText = `[${dept.toUpperCase()} Technical - ${cat}] Question #${idCounter}: Which concept is fundamental to ${cat}?`;
        opts = [
          `Core principle of ${cat} execution`,
          `Secondary auxiliary component`,
          `Deprecated legacy protocol`,
          `Unrelated hardware architecture`
        ];
        correct = 0;
        exp = `This fundamental concept governs baseline operations in ${cat}.`;
        break;
    }

    window.TECHNICAL_BANK.push({
      id: idCounter,
      department: dept,
      category: cat,
      difficulty: diff,
      question: qText,
      options: opts,
      correctAnswer: correct,
      explanation: exp
    });

    idCounter++;
  }
})();
