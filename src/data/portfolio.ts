export const personalInfo = {
  name: "E Sai Krishna",
  title: "Senior Software Engineer | AWS Certified Developer Associate",
  bio: "8+ years of experience building scalable .NET backends and cloud-native services on AWS. Leverages AI-assisted development (Claude, GitHub Copilot) and drives architecture and delivery improvements.",
  email: "krishnas1433@gmail.com",
  phone: "+91-9908866642",
  linkedin: "https://linkedin.com/in/ekrishnas",
  github: "https://github.com/ekrishnas",
  stackoverflow: "https://stackoverflow.com/users/5826312/krishna422",
  // path to a resume file placed in the public folder; update as needed
  // The uploaded file name contains spaces/special chars — URL-encode for the href
  resume: "/Eswarabhatla%20Sai%20Krishna%20.NET%20Resume%20-%20June%202026.pdf",
};

export const experience = [
  {
    id: 1,
    company: "EPAM Systems",
    position: "Senior Software Engineer",
    duration: "Jan 2026 - Present",
    description: "Acting team lead leveraging AI pair programming (Claude Code) to accelerate migration from legacy systems to high-performance data access services with RESTful APIs.",
    highlights: [
      "Lead migration initiatives from legacy systems to modern, performant data access services",
      "Collaborate with development teams and clients on architectural improvements",
      "Leverage LLMs and Model Context Protocol (MCP) for AI-assisted applications",
      "Use AI agents (GitHub Copilot, Claude) to accelerate development",
      "Mentor 6 engineers",
    ],
    technologies: [".NET Core", "AWS", "Claude Code", "Git"],
  },
  {
    id: 2,
    company: "EPAM Systems",
    position: "Senior Software Engineer",
    duration: "Jan 2025 - Dec 2025",
    description: "Architected and implemented migration of legacy batching system to Hangfire background jobs for improved performance and reliability.",
    highlights: [
      "Worked on system modernization and automation initiatives",
      "Migrated background batch jobs to Hangfire for reliability",
      "Designed performant queueing system improving reliability",
      "Investigated WCF service outage that blocked the Hangfire job queue",
      "Authored Batch migration design and led production rollout without scaling issues",
      "Performed RCA and recommended a targeted revert to recover a production outage",
      "Implemented WebSocket for real-time progress notifications",
      "Refactored applications for performance improvements",
    ],
    technologies: ["Hangfire", ".NET", "Windows Services", "WebSocket", "WCF"],
  },
  {
    id: 3,
    company: "EPAM Systems",
    position: "Senior Software Engineer",
    duration: "Jul 2024 - Dec 2024",
    description: "Addressed architectural debt and performance bottlenecks in complex corporate tax platform through systematic analysis and optimization.",
    highlights: [
      "Debugged complex .NET systems for performance issues",
      "Designed solutions using ASP.NET, .NET Core, Angular, PostgreSQL",
      "Authored design document to migrate data-access services to REST targeting ~50% performance improvement",
      "Analyzed codebase and proposed performance mitigation strategies",
      "Evaluated AWS infrastructure for application performance",
      "Collaborated with teams on architectural alignment",
    ],
    technologies: ["ASP.NET", ".NET Framework", "Angular", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    company: "ValueMomentum",
    position: "Engineer, Team Lead",
    duration: "Sep 2019 - Jun 2024",
    description: "Scaled insurance product to meet business demand through infrastructure optimization, microservices migration, and CI/CD implementation.",
    highlights: [
      "Proposed infrastructure changes resolving bulk quote conversion issues, increasing revenue by 60%",
      "Pioneered CI/CD with GitHub Actions achieving 50% efficiency improvement",
      "Orchestrated microservices transition reducing errors by 40%",
      "Implemented event-driven architecture with pub-sub communication",
      "Automated batch jobs saving service team 2 days/week",
      "Mentored 5 engineers in team",
    ],
    technologies: ["C#", ".NET", "AWS", "GitHub Actions", "DynamoDB"],
  },
  {
    id: 5,
    company: "ValueMomentum",
    position: "Software Engineer",
    duration: "2019 - 2022",
    description: "Developed insurance-based product using APIs, third-party integrations, and complex payment workflows.",
    highlights: [
      "Designed APIs for Socotra Policy Administration System integration",
      "Implemented quote pricing with automated underwriting approval (<5s)",
      "Optimized document generation (−5s)",
      "Built mapping layer and stored procedures for integrations",
      "Authored API documentation for Stripe and third-party integrations",
      "Prototyped and implemented webhook-based payment flow to decouple order processing from payment, improving UX",
      "Integrated Stripe payment workflows",
    ],
    technologies: ["C#", ".NET", "GraphQL", "Stripe", "Socotra API"],
  },
  {
    id: 6,
    company: "HashtagHyderabad",
    position: "Director",
    duration: "2017 - 2019",
    description: "Event management company designing and executing corporate and personal events.",
    highlights: [
      "Conducted meetings with clients converting leads to business",
      "Coordinated with vendors across diverse backgrounds",
      "Orchestrated corporate and personal events",
    ],
    technologies: ["Technology Career Break", "Event Management", "Business Development"],
  },
  {
    id: 7,
    company: "HCLTech",
    position: "Product Support Engineer",
    duration: "2017",
    description: "Provided technical support for Google's DoubleClick for Publisher.",
    highlights: [
      "Diagnosed issues for major clients (Microsoft, Motorola, Samsung, Apple)",
      "Documented software defects in JIRA",
      "Provided technical assistance through investigation and diagnostics",
    ],
    technologies: ["JavaScript", "JIRA", "Support", "Troubleshooting"],
  },
  {
    id: 8,
    company: "Tata Consultancy Services",
    position: "Automation Test Engineer",
    duration: "2016",
    description: "Telecom domain testing and automation of CRM and Order Processing.",
    highlights: [
      "Writing and executing test cases, automating tests using Selenium and NUnit",
    ],
    technologies: ["C#", ".Net", "NUnit", "Selenium", "JIRA", "Test Automation"],
  },
];

export const skills = {
  languages: ["C#", ".NET", "JavaScript", "Python", "HTML", "CSS"],
  cloud: ["AWS Lambda", "AWS DynamoDB", "AWS SNS/SQS", "AWS CloudWatch", "AWS IAM", "AWS EC2"],
  architecture: ["Microservices", "Event-Driven Architecture", "RESTful APIs", "Pub-Sub", "SOLID Principles"],
  devops: ["Git", "GitHub Actions", "CI/CD", "Docker", "Feature Management"],
  databases: ["SQL Server", "PostgreSQL", "DynamoDB", "NoSQL"],
  integrations: ["Stripe", "GraphQL", "Webhooks", "WCF", "Message Brokers"],
  tools: ["Visual Studio", "VS Code", "JIRA", "Confluence", "Slack Apps"],
};

export const certifications = [
  {
    title: "Claude Certified Architect - Foundations",
    issuer: "Anthropic",
    date: "Apr 2026",
    issued: "Apr 2026",
    expires: "Oct 2026",
    credentialId: "94scecxkigmy",
    link: "https://verify.skilljar.com/c/94scecxkigmy",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "Sep 2025",
    issued: "Sep 2025",
    expires: "Sep 2028",
    credentialId: "3a89d537c74c4066b7b8c83fccf89042",
    link: "https://www.credly.com/badges/24c246a7-187a-4111-92ad-8148e8f3e18c/linked_in_profile",
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Aug 2025",
    issued: "Aug 2025",
    expires: "Aug 2028",
    credentialId: "9d4eb105fdb6463683f4f05510c9376c",
    link: "https://www.credly.com/badges/b773f8ce-81e1-419f-84b7-b2bf2766b663/public_url",
  },
  {
    title: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "",
    link: "",
  },
  {
    title: "Google Cloud: Generative AI Leader",
    issuer: "Google Cloud",
    date: "Jun 2025",
    issued: "Jun 2025",
    expires: "Jun 2026",
    credentialId: "4718300066ce4c4196eef2aa78f6f464",
    link: "https://www.credly.com/badges/2290cd1e-91ab-412e-a693-14ed54a8c6c4/public_url",
  },
  {
    title: "AWS Partner: Technical Accredited",
    issuer: "Amazon Web Services",
    date: "August 2024",
    issued: "Aug 2024",
    link: "https://www.credly.com/badges/f5b353ba-f4c3-4ca5-bbcb-7b9a9488b394/public_url",
  },
  {
    title: "Certified Technical Interviewer",
    issuer: "Internal / Account",
    date: "",
    link: "",
  },
];

export const awards = [
  {
    title: "Highflier of the Quarter - Innovation",
    company: "ValueMomentum",
    year: 2021,
  },
  {
    title: "Made a Difference - Annual Award",
    company: "ValueMomentum",
    year: 2022,
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communications",
    university: "Keshav Memorial Institute of Technology",
    year: 2015,
    university_full: "Jawaharlal Nehru Technological University",
  },
  {
    degree: "Board of Intermediate",
    field: "Intermediate",
    university: "Sri Chaitanya Junior College",
    year: 2011,
    university_full: "Sri Chaitanya Junior College",
  },
  {
    degree: "School of Secondary",
    field: "Secondary School Certificate",
    university: "Don Bosco High School",
    year: 2009,
    university_full: "Don Bosco High School",
  },
];

export const achievements = [
  {
    metric: "Engineers Mentored",
    value: "11",
    description: "6 at EPAM, 5 at ValueMomentum",
  },
  {
    metric: "Years of Experience",
    value: "8+",
    description: "In software engineering and cloud services",
  },
  {
    metric: "Revenue Impact",
    value: "60%",
    description: "Increased through infrastructure optimization",
  },
  {
    metric: "Performance Gain",
    value: "40%",
    description: "Reduced errors via event-driven architecture",
  },
  {
    metric: "Engineering Quality",
    value: "",
    description: "Added Verify end-to-end integration tests and updated .editorconfig to improve code standards",
  },
  {
    metric: "CI / Release Improvements",
    value: "",
    description: "Added build verification steps, Flyway DB migration checks in CI/Git hooks, and a release branching strategy using GitHub Actions",
  },
  {
    metric: "AI Maturity",
    value: "Level 3",
    description: "Introduced agents, skills, a MCP server and tools; GenAI hackathon solution implemented",
  },
  {
    metric: "Organizational Contributions",
    value: "",
    description: "Referrals, technical interviews, and knowledge-sharing sessions",
  },
];

