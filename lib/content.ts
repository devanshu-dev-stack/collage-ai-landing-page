import type { Testimonial } from "@/components/testimonial-carousel";

// ---------------------------------------------------------------------------
// Hero (copy verbatim from live site)
// ---------------------------------------------------------------------------
export const HERO_HEADING = "Human-centered teaching, amplified by AI";
export const HERO_SUBHEAD =
  "Helping empower faculty members to easily design, deliver, and assess educational experiences that are adaptive, personalized, and improve student learning outcomes";

// ---------------------------------------------------------------------------
// Partner institution logo strip
// ---------------------------------------------------------------------------
// TODO: replace text placeholders with real institution logo assets
export const PARTNER_LOGOS: readonly string[] = [
  "Indiana Online",
  "Ariel University",
  "Harvard",
  "University of Haifa",
  "Duke",
  "Mountain View",
  "The Academy",
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
// Release Features — sticky-note board
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
    text: "Seamlessly connect Collage with your LMS to automate workflows and generate course materials in context.",
    color: "green",
    rotate: -5,
  },
  {
    title: "AI-driven Courses",
    text: "Create course pages, modules, and learning activities based on your teaching goals.",
    color: "yellow",
    rotate: 3,
  },
  {
    title: "Library",
    text: "Power institutional knowledge sharing with reusable teaching resources and templates.",
    color: "gold",
    rotate: -4,
  },
  {
    title: "AI as Extension of Faculty",
    text: "Design personalized learning pathways and support materials from faculty expertise.",
    color: "blue",
    rotate: 0,
  },
  {
    title: "Dynamic Analytics",
    text: "Track engagement, performance, and student needs with practical insight loops.",
    color: "purple",
    rotate: 0,
  },
  {
    title: "AI Grading and Feedback",
    text: "Support educators with efficient, consistent feedback grounded in course context.",
    color: "lavender",
    rotate: -4,
  },
] as const;

// ---------------------------------------------------------------------------
// Collage in Action — process map
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
    text: "Faculty can quickly transform source materials or existing content into scalable digital course content.",
  },
  {
    title: "Deliver",
    text: "Provide an engaging learning experience with 24/7 tutor support, customized by faculty.",
  },
  {
    title: "Assess",
    text: "Instant grading does the heavy lifting while faculty gain feedback and visibility.",
  },
] as const;

// ---------------------------------------------------------------------------
// Case study
// ---------------------------------------------------------------------------
export const CASE_STUDY_CAPTION = "Case Study";
export const CASE_STUDY_HEADING =
  "Quantifying platform impact on student learning outcomes.";
export const CASE_STUDY_INSTITUTION = "Harvard University";
export const CASE_STUDY_DEPARTMENT = "Department of Physics";
export const CASE_STUDY_BODY =
  "Collage AI was deployed for an entire semester in a large, introductory physics course. Students learned content asynchronously and applied knowledge through project-based learning.";

export interface CaseStudyStat {
  value: string;
  label: string;
}

export const CASE_STUDY_STATS: readonly CaseStudyStat[] = [
  { value: "62%", label: "Increase in learning gains over baseline semester" },
  { value: "0.92", label: "Mean normalized gain with Collage AI" },
] as const;

// ---------------------------------------------------------------------------
// Testimonials — "Voices from the Classroom"
// ---------------------------------------------------------------------------
export const TESTIMONIALS_HEADING = "Voices from the Classroom";

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: "It transformed what my students were able to achieve.",
    author: "Physics Faculty",
    role: "Harvard University",
    rating: 5,
  },
  {
    quote:
      "Course design that used to take a full summer now takes a week — and the materials adapt to each student.",
    author: "Instructional Designer",
    role: "Indiana Online",
    rating: 5,
  },
  {
    quote:
      "The feedback loop is the real difference. My students know where they stand every single week.",
    author: "Teaching Faculty",
    role: "University of Haifa",
    rating: 5,
  },
] as const;

// ---------------------------------------------------------------------------
// Signup
// ---------------------------------------------------------------------------
export const SIGNUP_HEADING = "Stay Updated";
export const SIGNUP_SUBHEAD = "Be the first to know about releases and updates";
