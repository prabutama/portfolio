export type Profile = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  openToWork: boolean;
  photo: string;
  summary: string[];
  strengths: string[];
  links: {
    github: string;
    email: string;
    linkedin?: string;
    cv?: string;
  };
};

export type ProjectSlide = {
  number: number;
  id: string;
  label: string;
  title: string;
  layout: "title" | "bullets" | "split" | "metrics" | "code";
  eyebrow?: string;
  summary?: string;
  body?: string[];
  bullets?: string[];
  metrics?: Array<{ label: string; value: string }>;
  code?: string;
  aside?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  embed?: {
    src: string;
    title: string;
    caption?: string;
    height?: number;
    zoom?: number;
  };
  gallery?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  featured?: boolean;
  links?: {
    repo?: string;
    live?: string;
    docs?: string;
  };
  slides: ProjectSlide[];
};
