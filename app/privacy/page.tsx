import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PRIVACY_POLICY } from "@/lib/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <LegalPage document={PRIVACY_POLICY} stickySidebar />;
}
