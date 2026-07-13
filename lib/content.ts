import type { Testimonial } from "@/components/testimonial-carousel";

// ---------------------------------------------------------------------------
// Hero (copy verbatim from live site)
// ---------------------------------------------------------------------------
export const HERO_HEADING = "Human-centered teaching, amplified by AI";
export const HERO_SUBHEAD =
  "Helping empower faculty members to easily design, deliver, and assess educational experiences that are adaptive, personalized, and improve student learning outcomes";

// ---------------------------------------------------------------------------
// Partner institution logo marquee (assets from the Framer export)
// ---------------------------------------------------------------------------
export interface PartnerLogo {
  name: string;
  src: string;
}

export const PARTNER_LOGOS: readonly PartnerLogo[] = [
  { name: "University of Haifa", src: "/images/logo-haifa.png" },
  { name: "Duke University", src: "/images/logo-duke.png" },
  { name: "Ariel University", src: "/images/logo-ariel.png" },
  { name: "The Academy of Tel Aviv-Yafo", src: "/images/logo-academy-tel-aviv.png" },
  { name: "The College of Management Academic Studies", src: "/images/logo-college-of-management.png" },
  { name: "Harvard University", src: "/images/logo-harvard.png" },
] as const;

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const ABOUT_KICKER = "About Us";
export const ABOUT_HEADING = "A Public Benefit Corporation";
export const ABOUT_PARAGRAPHS: readonly string[] = [
  "Collage AI is on a mission to empower teaching, enhance learning, and personalize education at scale through artificial intelligence.",
  "We believe that by reducing the administrative burden on educators and providing intelligent support to students, we can unlock unprecedented potential in higher education.",
] as const;

// ---------------------------------------------------------------------------
// Release Features — sticky-note board (copy verbatim from the Framer export)
// ---------------------------------------------------------------------------
export const FEATURES_HEADING = "Release Features";
export const FEATURES_SUBHEAD =
  "Launch-ready capabilities designed to transform teaching and learning from day one";

export type NoteColor = "green" | "yellow" | "gold" | "blue" | "purple" | "lavender";

export interface FeatureNote {
  title: string;
  text: string;
  color: NoteColor;
  rotate: number;
}

export const FEATURE_NOTES: readonly FeatureNote[] = [
  {
    title: "Native LMS Integration",
    text: "Seamlessly integrate Collage AI into your learning management system with strong data security and cybersecurity",
    color: "green",
    rotate: -5,
  },
  {
    title: "AI-driven Courses",
    text: "Empower faculty to create scalable digital course content to support any desired learning objectives and enhance existing course content with AI-native capabilities",
    color: "yellow",
    rotate: 3,
  },
  {
    title: "Library",
    text: "Foster institutional knowledge sharing through a repository of faculty contributed projects and cases",
    color: "gold",
    rotate: -4,
  },
  {
    title: "AI as Extension of Faculty",
    text: "Deliver personalized teaching to every student based on their learning profile through a faculty customizable AI tutor with full context of the course",
    color: "blue",
    rotate: 0,
  },
  {
    title: "Dynamic Analytics",
    text: "Unlock previously unobtainable student insights derived from all student touchpoints and leverage them through a dashboard with AI queries and custom metrics",
    color: "purple",
    rotate: 0,
  },
  {
    title: "AI Grading and Feedback",
    text: "Provide students with immediate, reviewable evaluation and feedback based on instructor grading criteria to enable time-intensive teaching techniques that were previously impossible at scale",
    color: "lavender",
    rotate: -4,
  },
] as const;

// ---------------------------------------------------------------------------
// Collage in Action — process map (copy from the live site screenshot)
// ---------------------------------------------------------------------------
export const PROCESS_HEADING = "Collage in Action";
export const PROCESS_SUBHEAD =
  "Design smarter, deliver faster, and assess your impact without the extra workload";

export interface ProcessStep {
  title: string;
  text: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Design",
    text: "Faculty can quickly transform source materials or existing content into scalable digital courses. Content is easily generated and modified through AI covering many modalities including videos, mind maps, flashcards, and more.",
  },
  {
    title: "Deliver",
    text: "Provide an engaging learning experience with 24/7 tutor support customized by faculty. Students stay on track, while questions and interactive AI chats expand the faculty toolkit without adding time to workloads.",
  },
  {
    title: "Assess",
    text: "Instant grading does the heavy lifting while faculty easily review and edit scores and feedback. By capturing every touchpoint, faculty can go beyond simple scores and gain a holistic understanding of how students learn, struggle, and succeed in real time.",
  },
] as const;

// ---------------------------------------------------------------------------
// Case study (stats verbatim from the Framer export)
// ---------------------------------------------------------------------------
export const CASE_STUDY_CAPTION = "Case Study";
export const CASE_STUDY_HEADING =
  "Quantifying platform impact on student learning outcomes.";
export const CASE_STUDY_INSTITUTION = "Harvard University";
export const CASE_STUDY_DEPARTMENT = "Department of Physics";
export const CASE_STUDY_CREST_SRC = "/images/harvard-crest.png";
export const CASE_STUDY_BODY =
  "Collage AI was deployed for an entire semester in a large, introductory physics course. Students learned content asynchronously and applied knowledge with in-classroom project-based learning. Collage AI replaced the two platforms previously used for the asynchronous component.";
export const CASE_STUDY_CHART_SRC = "/images/case-study-chart.png";
export const CASE_STUDY_CHART_ALT =
  "Bar chart of mean normalized gain: 0.26 in the semester without Collage AI versus 0.42 in the semester with Collage AI";

export interface CaseStudyStat {
  value: string;
  suffix?: string;
  label: string;
}

export const CASE_STUDY_STATS: readonly CaseStudyStat[] = [
  { value: "62", suffix: "%", label: "Increase in learning gains over baseline semester" },
  { value: "0.42", label: "Mean normalized gain with Collage AI" },
] as const;

// ---------------------------------------------------------------------------
// Testimonials — "Voices from the Classroom"
// ---------------------------------------------------------------------------
export const TESTIMONIALS_HEADING = "Voices from the Classroom";
export const TESTIMONIAL_CITE = "up & up only →";

// Quotes verbatim from the live site
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: "Adaptive feedback helped me understand key concepts.",
    author: "A Student",
    role: "",
    rating: 5,
  },
  {
    quote: "So many different ways of teaching you.",
    author: "A Student",
    role: "",
    rating: 5,
  },
] as const;

// ---------------------------------------------------------------------------
// Signup
// ---------------------------------------------------------------------------
export const SIGNUP_HEADING = "Stay Updated";
export const SIGNUP_SUBHEAD = "Be the first to know about releases and updates";
export const SIGNUP_ART_SRC = "/images/collage-bookmark.png";
