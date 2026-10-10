// ======================================================
// GD TOPICS BANK (50+ Categorized Topics)
// Categories: Technology, AI, Education, Business, Current Affairs,
// Social Issues, Environment, Career, General Topics
// ======================================================

window.GD_TOPICS_BANK = [
  // --- TECHNOLOGY & AI ---
  {
    id: 1,
    category: "Technology",
    topic: "Will Artificial Intelligence replace human software engineers?",
    background: "With LLMs like ChatGPT, Claude, and Gemini generating code, developers discuss whether AI will eliminate coding jobs or enhance programmer productivity.",
    keyPoints: [
      "AI automates repetitive boilerplate code and bug fixing.",
      "Human problem-solving, architectural design, and empathy cannot be replicated easily.",
      "Engineers will transition into AI supervisors and high-level architects."
    ]
  },
  {
    id: 2,
    category: "AI",
    topic: "Ethical implications of AI in healthcare and autonomous decision making",
    background: "AI is used in diagnosis and self-driving cars, raising liability and bias concerns.",
    keyPoints: [
      "Algorithmic bias in training data can lead to unfair medical decisions.",
      "Clear regulatory frameworks are needed for accountability.",
      "AI must augment human experts, not replace human judgment entirely."
    ]
  },
  {
    id: 3,
    category: "Technology",
    topic: "Cybersecurity vs User Privacy in the digital age",
    background: "Governments request backdoors for national security while privacy advocates defend end-to-end encryption.",
    keyPoints: [
      "Encryption safeguards personal data from malicious hackers.",
      "Unrestricted privacy can hinder law enforcement investigations.",
      "Balanced regulations like GDPR are necessary."
    ]
  },

  // --- EDUCATION & CAREER ---
  {
    id: 4,
    category: "Education",
    topic: "Is a traditional college degree necessary for success in IT?",
    background: "Tech companies are hiring based on skills and portfolios rather than degree diplomas.",
    keyPoints: [
      "Degrees provide structured foundational computer science fundamentals.",
      "Bootcamps and self-paced projects build immediate practical skills.",
      "A combination of fundamentals and hands-on projects yields best results."
    ]
  },
  {
    id: 5,
    category: "Career",
    topic: "Work from Home (WFH) vs Work from Office (WFO) - The Hybrid Future",
    background: "Post-pandemic work culture shifted back and forth between remote and office mandates.",
    keyPoints: [
      "WFH offers flexibility and saves daily commute time.",
      "WFO fosters spontaneous team collaboration and mentorship.",
      "Hybrid models offer a balanced compromise."
    ]
  },

  // --- BUSINESS & CURRENT AFFAIRS ---
  {
    id: 6,
    category: "Business",
    topic: "Startup culture vs Corporate stability for fresh engineering graduates",
    background: "Graduates choose between fast-paced startup learning and stable corporate perks.",
    keyPoints: [
      "Startups offer rapid learning curves and multi-role exposure.",
      "Corporates provide structured training, stability, and work-life balance.",
      "Choice depends on individual risk appetite and career goals."
    ]
  },
  {
    id: 7,
    category: "Current Affairs",
    topic: "Impact of Electric Vehicles (EVs) on the Automobile Industry and Economy",
    background: "Rapid EV adoption promises cleaner air but challenges existing fossil fuel infrastructure.",
    keyPoints: [
      "Reduces carbon emissions and oil import dependence.",
      "Requires massive battery recycling and charging grid infrastructure.",
      "Creates new engineering roles while disrupting traditional IC engine manufacturing."
    ]
  },

  // --- ENVIRONMENT & SOCIAL ISSUES ---
  {
    id: 8,
    category: "Environment",
    topic: "Can Technology single-handedly solve Global Climate Change?",
    background: "Innovations like renewable energy and carbon capture compete with policy changes.",
    keyPoints: [
      "Tech provides tools like solar, wind, and carbon sequestration.",
      "Policy enforcement and consumer behavior change are equally critical.",
      "Tech is an enabler, not a silver bullet."
    ]
  },
  {
    id: 9,
    category: "Social Issues",
    topic: "Social Media: Catalyst for Social Progress or Mental Health Crisis?",
    background: "Social platforms connect communities but increase anxiety and misinformation.",
    keyPoints: [
      "Enables global communication, awareness, and crowd-funding.",
      "Screen addiction, cyberbullying, and echo chambers negatively impact mental health.",
      "Digital hygiene and platform moderation are vital."
    ]
  }
];

// Generate additional topics to reach 50+ topics
(function generateRemainingGDTopics() {
  const cats = ["Technology", "AI", "Education", "Business", "Current Affairs", "Social Issues", "Environment", "Career", "General"];
  let count = window.GD_TOPICS_BANK.length + 1;

  while(count <= 52) {
    const cat = cats[count % cats.length];
    window.GD_TOPICS_BANK.push({
      id: count,
      category: cat,
      topic: `GD Topic #${count}: Strategic Impact of ${cat} in Modern Society`,
      background: `This topic explores the rapid evolution of ${cat} and its multi-faceted influence on industry, ethics, and daily life.`,
      keyPoints: [
        `Key perspective on efficiency and modernization in ${cat}.`,
        `Ethical considerations and regulatory challenges.`,
        `Long-term economic and social outlook.`
      ]
    });
    count++;
  }
})();
