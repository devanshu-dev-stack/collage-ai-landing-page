export const SITE_NAME = "Collage AI";

export const SITE_DESCRIPTION =
  "Collage AI, Inc. Human Centered teaching, amplified by AI. Our mission is to empower faculty to easily design, deliver, and assess adaptive, personalized learning experiences that improve student learning outcomes.";

export const COMPANY_NAME = "Collage AI, Inc.";
export const COMPANY_ADDRESS = "20 Holyoke St, Cambridge, MA 02138";
export const COMPANY_TAGLINE =
  "A Public Benefit Corporation dedicated to simplifying teaching and personalizing education at scale with AI";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Case Study", href: "/#case-study" },
] as const;

export const CTA_LABEL = "Stay Updated";
export const CTA_HREF = "/#stay-updated";

export interface FooterColumn {
  title: string;
  links: readonly NavLink[];
}

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Case Studies", href: "/case-study" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#stay-updated" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;
