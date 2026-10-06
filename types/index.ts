export interface ProductMiniAppRow {
  label: string;
  value: string;
  isPositive?: boolean;
}

export interface Product {
  id: string;
  name: string;
  status: string;
  sector: string;
  tagline: string;
  desc: string;
  features: string[];
  note: string;
  url: string;
  cta: string;
  previewBgGradient?: string;
  miniApp: {
    title: string;
    rows: ProductMiniAppRow[];
  };
}

export interface CaseStudy {
  id: string;
  name: string;
  sector: string;
  title: string;
  challenge: string;
  approach: string;
  validation: string;
  status: string;
  disclosure: string;
}

export interface AiPattern {
  id: number;
  numberStr: string;
  tabTitle: string;
  tabSub: string;
  title: string;
  desc: string;
  jargon: string;
  engine: string;
}

export interface SignalNode {
  id: string;
  label: string;
  subLabel: string;
  detail: string;
  side: "left" | "right";
  order: string;
}

export interface MethodStep {
  numberStr: string;
  title: string;
  description: string;
}

export interface NavSection {
  id: string;
  index: number;
  label: string;
  eyebrow?: string;
}
