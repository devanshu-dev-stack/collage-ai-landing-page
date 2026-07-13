import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { CaseStudySection } from "@/components/case-study-section";
import { SignupForm } from "@/components/signup-form";

export const metadata: Metadata = {
  title: "Case Study",
};

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudySection />
      <AboutSection />
      <SignupForm />
    </>
  );
}
