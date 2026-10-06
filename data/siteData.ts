import { Product, CaseStudy, AiPattern, SignalNode, MethodStep, NavSection } from "@/types";

export const NAV_SECTIONS: NavSection[] = [
  { id: "vision", index: 0, label: "Vision", eyebrow: "AI-native. Workflow-aware. Human-guided." },
  { id: "ai", index: 1, label: "AI at the core", eyebrow: "01 / AI solution patterns" },
  { id: "portfolio", index: 2, label: "Products", eyebrow: "02 / AI-native product portfolio" },
  { id: "cases", index: 3, label: "Case studies", eyebrow: "03 / Product case studies" },
  { id: "method", index: 4, label: "How we build", eyebrow: "04 / Expert-led. User-informed." },
  { id: "contact", index: 5, label: "Let’s talk", eyebrow: "05 / Your next possibility" },
];

export const SECTION_NAMES = [
  "The vision",
  "AI at the core",
  "Product portfolio",
  "Case studies",
  "How we build",
  "Let’s talk",
];

export const SIGNAL_NODES: SignalNode[] = [
  {
    id: "a",
    label: "Real workflows",
    subLabel: "The work that needs to happen",
    detail: "Learn the complete workflow: tasks, exceptions, dependencies, and the people involved.",
    side: "left",
    order: "a",
  },
  {
    id: "b",
    label: "Domain expertise",
    subLabel: "The people who know the problem",
    detail: "Industry specialists and users shape product decisions and validation.",
    side: "left",
    order: "b",
  },
  {
    id: "c",
    label: "Context",
    subLabel: "The information that matters",
    detail: "Relevant business information gives AI a useful frame for the task.",
    side: "left",
    order: "c",
  },
  {
    id: "d",
    label: "Intelligent assistance",
    subLabel: "Practical support for real tasks",
    detail: "Apply AI to operational friction where it creates meaningful value.",
    side: "right",
    order: "d",
  },
  {
    id: "e",
    label: "Connected systems",
    subLabel: "Automation across the workflow",
    detail: "Integrations help connect information and reduce fragmented manual steps.",
    side: "right",
    order: "e",
  },
  {
    id: "f",
    label: "Human feedback",
    subLabel: "Review, learn, and improve",
    detail: "Pilots and user feedback guide refinement before wider expansion.",
    side: "right",
    order: "f",
  },
];

export const AI_PATTERNS: AiPattern[] = [
  {
    id: 0,
    numberStr: "01",
    tabTitle: "Context-aware AI",
    tabSub: "Understand what matters.",
    title: "Context changes the answer.",
    desc: "Context-aware AI brings relevant business information into the task. Retrieval-augmented generation (RAG) is one approach: retrieve useful information, then use it to ground the response.",
    jargon: "AI vocabulary: context grounding · RAG · semantic retrieval",
    engine: "Context-aware intelligence",
  },
  {
    id: 1,
    numberStr: "02",
    tabTitle: "Agentic workflows",
    tabSub: "Coordinate purposeful steps.",
    title: "Purposeful steps, coordinated.",
    desc: "Agentic workflows use AI to reason through a task and work with tools or actions across multiple steps. The right scope, permissions, and review points matter as much as the model.",
    jargon: "AI vocabulary: agents · tool use · bounded autonomy",
    engine: "Agentic workflow design",
  },
  {
    id: 2,
    numberStr: "03",
    tabTitle: "Orchestration",
    tabSub: "Connect the whole workflow.",
    title: "Intelligence needs a workflow.",
    desc: "Orchestration coordinates tasks, data, tools, and review steps. It connects AI assistance with operational processes so the experience serves the complete workflow.",
    jargon: "AI vocabulary: orchestration · workflow intelligence · integrations",
    engine: "Connected orchestration",
  },
  {
    id: 3,
    numberStr: "04",
    tabTitle: "Human-in-the-loop",
    tabSub: "Keep expertise involved.",
    title: "Expertise stays in the loop.",
    desc: "Human-in-the-loop design keeps people involved at the points that need judgment, review, or feedback. It supports useful assistance while preserving the role of domain expertise.",
    jargon: "AI vocabulary: human oversight · review gates · feedback loops",
    engine: "Human-guided intelligence",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "insuraflow",
    name: "InsuraFlow",
    status: "Pilot live",
    sector: "Healthcare · Dental operations",
    tagline: "AI-native dental workflows. Less manual verification.",
    desc: "Automates dental insurance eligibility and benefits verification, helping teams reduce manual work and support faster treatment decisions.",
    features: [
      "Dental eligibility and benefits verification",
      "Coverage information for treatment decisions",
      "Designed around dental operational workflows",
    ],
    note: "Currently piloted in one dental clinic, with a second clinic pilot planned.",
    url: "mailto:contact@nuvsol.com?subject=InsuraFlow%20pilot%20inquiry",
    cta: "Discuss the pilot",
    miniApp: {
      title: "InsuraFlow / Coverage overview",
      rows: [
        { label: "Eligibility", value: "Active", isPositive: true },
        { label: "Preventive care", value: "100%", isPositive: true },
      ],
    },
  },
  {
    id: "podiums",
    name: "Podiums",
    status: "Pilot launching soon",
    sector: "Non-profits · Speaker operations",
    tagline: "AI-native coordination. More focus on the event.",
    desc: "A speaker management platform for non-profits, mosques, and Islamic centers. One place for the speaker database, invitations, confirmations, travel, honorariums, and 1099 coordination.",
    features: [
      "Speaker database, batch invitations, and confirmation reminders",
      "Flights, hotels, pickups, and honorarium tracking",
      "Airtable and Google Calendar integration",
      "Calendar conflict alerts and Hijri calendar support",
    ],
    note: "Preparing for its first organizational pilot.",
    url: "https://www.podiumsdemo.biz/",
    cta: "Explore the demo",
    miniApp: {
      title: "Podiums / Speaker workspace",
      rows: [
        { label: "Invitations", value: "Batch sending" },
        { label: "Calendar", value: "Conflict alerts" },
      ],
    },
  },
  {
    id: "twobs",
    name: "2Bs",
    status: "In planning",
    sector: "Retail · Store operations",
    tagline: "AI-native retail. A clearer view of the store.",
    desc: "A planned voice-enabled operating system for neighborhood retailers, designed to connect store operations with a clearer picture of performance.",
    features: [
      "Sales, inventory, and ordering",
      "Expiry and waste visibility",
      "Pricing and profitability",
      "Voice-enabled operational experience",
    ],
    note: "Currently in planning. Development has not yet started.",
    url: "mailto:contact@nuvsol.com?subject=2Bs%20inquiry",
    cta: "Talk about 2Bs",
    miniApp: {
      title: "2Bs / Store concept",
      rows: [
        { label: "Inventory", value: "Connected" },
        { label: "Ordering", value: "Voice-enabled" },
      ],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "insuraflow",
    name: "InsuraFlow",
    sector: "Dental operations",
    title: "A clearer path through dental verification.",
    challenge: "Dental teams spend time collecting eligibility and benefits information before treatment decisions.",
    approach: "InsuraFlow automates eligibility and benefits verification to reduce manual effort and make coverage information easier to use.",
    validation: "A pilot is live in one dental clinic. A second clinic pilot is planned.",
    status: "Pilot live",
    disclosure: "Early-stage product case study: the problem, approach, and current pilot stage.",
  },
  {
    id: "podiums",
    name: "Podiums",
    sector: "Speaker coordination",
    title: "Speaker coordination without the scattered work.",
    challenge: "Non-profit teams coordinate speaker records, invitations, travel, calendars, and honorariums across multiple tasks.",
    approach: "Podiums brings speaker operations together and integrates with Airtable and Google Calendar.",
    validation: "Preparing for the first organizational pilot. A product demo is available.",
    status: "Pilot launching soon",
    disclosure: "Pre-pilot product case study: the intended workflow and upcoming organizational validation.",
  },
  {
    id: "twobs",
    name: "2Bs",
    sector: "Neighborhood retail",
    title: "Connecting the everyday decisions of a small store.",
    challenge: "Neighborhood retailers need to understand sales, stock, expiry, waste, ordering, pricing, and profitability together.",
    approach: "2Bs is planned as a connected, voice-enabled operating system for store operations.",
    validation: "In planning. Development has not yet started.",
    status: "In planning",
    disclosure: "Planned product concept: development and real-world validation have not yet started.",
  },
];

export const METHOD_STEPS: MethodStep[] = [
  {
    numberStr: "01",
    title: "Find the problem",
    description: "Start with real, repetitive operational friction.",
  },
  {
    numberStr: "02",
    title: "Learn with experts",
    description: "Listen to the people doing the work.",
  },
  {
    numberStr: "03",
    title: "Map the workflow",
    description: "Understand the process and its exceptions.",
  },
  {
    numberStr: "04",
    title: "Build with purpose",
    description: "Apply integrations, automation, and AI.",
  },
  {
    numberStr: "05",
    title: "Pilot in context",
    description: "Validate in real operating environments.",
  },
  {
    numberStr: "06",
    title: "Refine and scale",
    description: "Improve with feedback before expanding.",
  },
];

export const FOUNDER_INFO = {
  name: "Karim Ebid",
  title: "Founder · Nuvsol",
  monogram: "KE",
};

export const CONTACT_INFO = {
  email: "contact@nuvsol.com",
  legal: "© 2026 Nuvsol LLC. · Virginia, USA",
  focusAreas: "Healthcare, organizations, events, and retail operations.",
  taglines: ["Built with experts.", "Designed for real users.", "AI where it makes sense."],
};
