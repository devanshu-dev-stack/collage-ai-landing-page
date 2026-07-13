import type { AccordionItem } from "@/components/accordion";
import type { FeatureComparisonItem } from "@/components/feature-comparison";
import type { Testimonial } from "@/components/testimonial-carousel";

// ---------------------------------------------------------------------------
// Hero (spec §8 — copy verbatim)
// ---------------------------------------------------------------------------
export const HERO_HEADING = "Human-centered teaching, amplified by AI";
export const HERO_SUBHEAD =
  "Helping empower faculty members to easily design, deliver, and assess educational experiences that are adaptive, personalized, and improve student learning outcomes";

// ---------------------------------------------------------------------------
// About (spec §8 — copy verbatim)
// ---------------------------------------------------------------------------
export const ABOUT_CAPTION = "About Us";
export const ABOUT_HEADING = "A Public Benefit Corporation";
export const ABOUT_BODY =
  "Collage AI is on a mission to empower teaching, enhance learning, and personalize education at scale through artificial intelligence. We believe that by reducing the administrative burden on educators and providing intelligent support to students, we can unlock unprecedented potential in higher education.";

// ---------------------------------------------------------------------------
// Feature comparison — "With it / Without it" blocks (3 items)
// ---------------------------------------------------------------------------
export const FEATURES_CAPTION = "Features";
export const FEATURES_HEADING = "Collage in Action";
export const FEATURES_SUBHEAD =
  "Design smarter, deliver faster, and assess your impact without the extra workload";

export const FEATURE_COMPARISON_ITEMS: readonly FeatureComparisonItem[] = [
  {
    title: "Design",
    withIt:
      "Faculty quickly transform source materials or existing content into scalable digital course content.",
    withoutIt:
      "Weeks of manual authoring to turn lecture notes and readings into course pages and activities.",
  },
  {
    title: "Deliver",
    withIt:
      "An engaging learning experience with 24/7 tutor support, customized by faculty.",
    withoutIt:
      "Students wait for office hours while questions pile up between class sessions.",
  },
  {
    title: "Assess",
    withIt:
      "Instant grading does the heavy lifting while faculty gain feedback and visibility.",
    withoutIt:
      "Grading backlogs delay feedback until it no longer shapes student learning.",
  },
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
// FAQ
// ---------------------------------------------------------------------------
export const FAQ_CAPTION = "FAQ";
export const FAQ_HEADING = "Frequently Asked Questions";

export const FAQ_ITEMS: readonly AccordionItem[] = [
  {
    question: "Does Collage integrate with our LMS?",
    answer:
      "Yes. Collage connects natively with your LMS to automate workflows and generate course materials in context.",
  },
  {
    question: "Who controls the AI-generated content?",
    answer:
      "Faculty do. Collage acts as an extension of faculty expertise — every pathway, activity, and piece of feedback is designed and approved by educators.",
  },
  {
    question: "How does Collage measure learning outcomes?",
    answer:
      "Dynamic analytics track engagement, performance, and student needs with practical insight loops, so faculty can see impact as the semester unfolds.",
  },
  {
    question: "Is Collage AI a for-profit company?",
    answer:
      "Collage AI, Inc. is a Public Benefit Corporation — our charter commits us to improving student learning outcomes, not just growth.",
  },
] as const;

// ---------------------------------------------------------------------------
// Case study (spec §9 — copy verbatim)
// ---------------------------------------------------------------------------
export const CASE_STUDY_CAPTION = "Case Study";
export const CASE_STUDY_HEADING =
  "Quantifying platform impact on student learning outcomes.";
