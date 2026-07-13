import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { TERMS_OF_SERVICE } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return <LegalPage document={TERMS_OF_SERVICE} stickySidebar={false} />;
}
