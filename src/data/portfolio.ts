export const personalInfo = {
  name: "E Sai Krishna",
  title: "Senior Software Engineer | Claude Certified Architect | AWS Developer Associate",
  bio: "Senior Software Engineer and Acting Team Lead with 8+ years designing scalable backend systems, cloud-native microservices, and event-driven architectures on AWS. Architected a production MCP server and RAG pipeline (ChromaDB) for agentic SDLC automation adopted team-wide, and delivered a GenAI hackathon solution adopted by the product team — reaching AI Maturity Level 3. Proven impact: 60% revenue increase, 40% error reduction, 50% CI/CD efficiency gain. Mentors 16 engineers across EPAM and ValueMomentum.",
  email: "krishnas1433@gmail.com",
  phone: "+91-9908866642",
  linkedin: "https://linkedin.com/in/ekrishnas",
  github: "https://github.com/ekrishnas",
  stackoverflow: "https://stackoverflow.com/users/5826312/krishna422",
  // path to a resume file placed in the public folder; update as needed
  // The uploaded file name contains spaces/special chars — URL-encode for the href
  resume: "/Eswarabhatla%20Sai%20Krishna%20-%20Resume%20August%202026.pdf",
};

export const experience = [
  {
    id: 1,
    company: "EPAM Systems",
    position: "Team Lead - Software Engineering | AI Platform & System Modernization",
    duration: "Jan 2026 - Present",
    description: "Acting Team Lead architecting AI-native engineering workflows — from a production MCP server to agentic SDLC automation — while leading migration of legacy monolithic systems to high-performance microservices.",
    highlights: [
      "Architected and deployed a production MCP server exposing .NET codebase analysis as agent-consumable tools, with hallucination-resistant schemas, retry orchestration, failure containment, and CloudWatch invocation observability — adopted as the team-wide Claude Code standard",
      "Lead migration of legacy monolithic systems to high-performance RESTful microservices, improving API response times and reducing technical debt across service domains",
      "Built a RAG pipeline (ChromaDB) grounding SDLC agents in internal knowledge as part of a GenAI hackathon solution adopted by the product team; defined agent observability standards — CloudWatch tracing and quality gates in GitHub Actions CI/CD",
      "Designed tool schemas, abstraction layers, custom skills, and slash commands — reaching AI Maturity Level 3 across the team",
      "Mentor 11 engineers in .NET best practices, system design, and cloud-native development through weekly technical sessions and structured code reviews",
      "Collaborate with clients and architects on AWS infrastructure evaluation and cloud-native solution design",
    ],
    technologies: ["Claude Code", "MCP", "AI Agents", "RAG / ChromaDB", ".NET Core", "AWS", "RESTful APIs", "GitHub Actions", "Docker"],
  },
  {
    id: 2,
    company: "EPAM Systems",
    position: "Senior Software Engineer | SHA System Modernisation",
    duration: "Jan 2025 - Dec 2025",
    description: "Led design and zero-issue production rollout of a Hangfire-based workflow orchestration platform replacing a legacy batch system, with idempotency guarantees and real-time observability.",
    highlights: [
      "Authored the Batch Migration design document and led zero-issue production rollout of a Hangfire background job framework with configurable retry, idempotency guarantees, and failure containment",
      "Investigated a WCF service outage blocking the Hangfire job queue; performed RCA and recommended a targeted revert that fully recovered production",
      "Designed a high-throughput queueing system with retry policies, reducing job failure rate by 30% and eliminating manual intervention for 90% of failure scenarios",
      "Implemented WebSocket-based real-time progress notifications replacing polling, reducing server load by 25% and delivering sub-500ms user feedback",
      "Added build verification steps, Flyway DB migration checks in CI/Git hooks, and a release branching strategy using GitHub Actions",
      "Refactored legacy ASP.NET applications applying SOLID principles, reducing average response latency by 20%",
    ],
    technologies: ["Hangfire", ".NET", "WCF", "WebSocket", "Windows Services", "GitHub Actions", "Flyway", "SQL Server"],
  },
  {
    id: 3,
    company: "EPAM Systems",
    position: "Senior Software Engineer | Corporate Tax Platform",
    duration: "Jul 2024 - Dec 2024",
    description: "Authored the REST API modernisation design standard for the platform — deterministic contracts, versioning, and schema consistency — and resolved deep performance bottlenecks.",
    highlights: [
      "Authored a REST API modernisation design document with deterministic contracts, versioning, and schema consistency, targeting ~50% performance improvement; adopted as the team architectural standard",
      "Performed deep performance profiling and root-cause analysis on complex .NET systems, reducing average page load time by 40%",
      "Improved code quality standards by introducing .editorconfig conventions and Verify end-to-end integration tests, adopted across the platform",
      "Evaluated AWS infrastructure configuration, recommending RDS optimisation and Lambda concurrency adjustments resulting in 20% cost reduction",
      "Led cross-team architectural alignment sessions across ASP.NET, .NET Core, Angular, and PostgreSQL",
    ],
    technologies: ["ASP.NET", ".NET Core", "Angular", "PostgreSQL", "AWS RDS", "AWS Lambda", "Verify Tests"],
  },
  {
    id: 4,
    company: "ValueMomentum",
    position: "Senior Software Engineer & Team Lead",
    duration: "2022 - Jun 2024",
    description: "Scaled the InsurTech platform through AWS re-architecture, microservices migration, and CI/CD adoption, driving a 60% revenue increase and 40% error reduction.",
    highlights: [
      "Proposed and implemented AWS infrastructure re-architecture resolving bulk quote conversion failures — directly contributing to a 60% revenue increase within two quarters",
      "Pioneered CI/CD pipeline adoption using GitHub Actions across 5 services, reducing release cycles from 2 weeks to 3 days (50% efficiency gain)",
      "Orchestrated migration from monolithic to microservices architecture with event-driven pub-sub communication, reducing system errors by 40% and improving fault isolation",
      "Designed an automated batch job system replacing manual processes, saving the service team 2 full working days per week (104 days annually)",
      "Built a DynamoDB-backed data access layer supporting high-throughput insurance transaction processing at 99.9% availability SLA",
      "Mentored 5 engineers through structured code reviews and pair programming; 2 promoted to Senior level",
    ],
    technologies: ["C#", ".NET", "AWS Lambda", "DynamoDB", "SNS", "SQS", "GitHub Actions", "Microservices"],
  },
  {
    id: 5,
    company: "ValueMomentum",
    position: "Software Engineer",
    duration: "Sep 2019 - 2022",
    description: "Built core InsurTech platform capabilities — policy APIs, automated underwriting, and payment integrations — for a P&C insurance product.",
    highlights: [
      "Designed and built RESTful APIs for the Socotra Policy Administration System, enabling seamless data exchange across policy lifecycle stages",
      "Implemented an automated quote pricing engine with underwriting approval logic, delivering decisions in under 5 seconds and reducing manual review effort by 80%",
      "Prototyped and implemented a webhook-based payment flow decoupling order processing from payment execution, improving UX and system resilience",
      "Integrated Stripe Payment Gateway supporting refunds, adjustments, and scheduled payments; authored API documentation for Stripe and third-party integrations",
      "Optimised the document generation pipeline, reducing processing time by 5+ seconds per document for high-volume batch operations",
    ],
    technologies: ["C#", ".NET", "GraphQL", "Stripe API", "Socotra API", "Webhooks", "SQL Server"],
  },
  {
    id: 6,
    company: "HCLTech",
    position: "Product Support Engineer",
    duration: "Apr 2017 - Aug 2017",
    description: "Provided Tier-2 technical support for Google's DoubleClick for Publisher (DFP) platform, serving major enterprise clients.",
    highlights: [
      "Tier-2 technical support for enterprise clients (Microsoft, Motorola, Samsung, Apple)",
      "Documented defects in JIRA and coordinated with engineering for resolution",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "JIRA"],
  },
  {
    id: 7,
    company: "Tata Consultancy Services",
    position: "Automation Test Engineer",
    duration: "Jan 2016 - Oct 2016",
    description: "Designed and automated regression test suites for a telecom CRM and order processing platform.",
    highlights: [
      "Designed and automated regression test suites using Selenium and NUnit in C#/.NET, improving regression coverage by 60%",
    ],
    technologies: ["C#", ".NET", "Selenium", "NUnit", "SQL Server", "Oracle RODOD"],
  },
];

export const skills = {
  ai: ["Claude Code", "MCP", "AI Agents", "RAG / Vector DB (ChromaDB)", "GitHub Copilot / Cline", "SDLC Automation", "LLM-Assisted Development"],
  languages: ["C#", ".NET", "JavaScript", "Python", "HTML", "CSS"],
  cloud: ["AWS Lambda", "AWS DynamoDB", "AWS SNS/SQS", "AWS CloudWatch", "AWS IAM", "AWS EC2"],
  architecture: ["Microservices", "Event-Driven Architecture", "RESTful APIs", "Pub-Sub", "SOLID Principles"],
  devops: ["Git", "GitHub Actions", "CI/CD", "Docker", "Feature Management"],
  databases: ["SQL Server", "PostgreSQL", "DynamoDB", "NoSQL"],
  integrations: ["Stripe", "GraphQL", "Webhooks", "WCF", "Message Brokers"],
  observability: ["CloudWatch Tracing", "Distributed Tracing", "SAST / SCA", "Verify / Integration Tests", "CI Quality Gates"],
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
    issuer: "Internal at EPAM",
    date: "2025",
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
  {
    title: "Client Hero - Accomplishment Award",
    company: "EPAM Systems",
    year: 2024,
  },
  {
    title: "Delivery Excellence - Accomplishment Award",
    company: "EPAM Systems",
    year: 2025,
  },
  {
    title: "Client Focus - Accomplishment Award",
    company: "EPAM Systems",
    year: 2025,
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
    value: "16",
    description: "11 at EPAM, 5 at ValueMomentum",
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
    metric: "CI/CD Efficiency Gain",
    value: "50%",
    description: "Pioneered GitHub Actions adoption; release cycles from 2 weeks to 3 days",
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

