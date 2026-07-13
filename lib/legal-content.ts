// Placeholder legal copy with clear h2/h3 structure. The TOC on /privacy and
// /terms is generated from these sections. TODO: replace with counsel-approved copy.

export interface LegalSubsection {
  id: string;
  title: string;
  paragraphs: readonly string[];
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  subsections?: readonly LegalSubsection[];
}

export interface LegalDocument {
  title: string;
  updated: string;
  intro: string;
  sections: readonly LegalSection[];
}

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  updated: "Last updated: January 2026",
  intro:
    "This Privacy Policy describes how Collage AI, Inc. (“Collage AI”, “we”, “us”) collects, uses, and shares information when you use our websites and services.",
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      paragraphs: [
        "We collect information you provide directly to us, such as when you fill out a form, request updates, or contact us.",
      ],
      subsections: [
        {
          id: "information-you-provide",
          title: "1.1 Information You Provide",
          paragraphs: [
            "This includes your name, email address, institution or organization, and any message you choose to send us.",
          ],
        },
        {
          id: "information-collected-automatically",
          title: "1.2 Information Collected Automatically",
          paragraphs: [
            "When you visit our website, we may automatically collect standard log information such as browser type, pages viewed, and referring pages.",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      title: "2. How We Use Information",
      paragraphs: [
        "We use the information we collect to operate and improve our services, communicate with you about product updates, and respond to your inquiries.",
        "We do not sell your personal information.",
      ],
    },
    {
      id: "how-we-share-information",
      title: "3. How We Share Information",
      paragraphs: [
        "We may share information with service providers who perform services on our behalf, subject to appropriate confidentiality obligations, and as required by law.",
      ],
    },
    {
      id: "data-retention",
      title: "4. Data Retention",
      paragraphs: [
        "We retain personal information only as long as necessary for the purposes described in this policy, unless a longer retention period is required by law.",
      ],
    },
    {
      id: "your-rights",
      title: "5. Your Rights and Choices",
      paragraphs: [
        "Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at the address below.",
      ],
    },
    {
      id: "security",
      title: "6. Security",
      paragraphs: [
        "We use reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, or misuse.",
      ],
    },
    {
      id: "changes",
      title: "7. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. We will post the updated version on this page and revise the “Last updated” date above.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact Us",
      paragraphs: [
        "If you have questions about this Privacy Policy, contact Collage AI, Inc., 20 Holyoke St, Cambridge, MA 02138.",
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  updated: "Last updated: January 2026",
  intro:
    "These Terms of Service (“Terms”) govern your access to and use of the websites and services provided by Collage AI, Inc. By using our services, you agree to these Terms.",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing or using our services, you confirm that you can form a binding contract and that you accept these Terms.",
      ],
    },
    {
      id: "use-of-services",
      title: "2. Use of the Services",
      paragraphs: [
        "You may use the services only in compliance with these Terms and all applicable laws.",
      ],
      subsections: [
        {
          id: "acceptable-use",
          title: "2.1 Acceptable Use",
          paragraphs: [
            "You agree not to misuse the services, interfere with their normal operation, or attempt to access them using a method other than the interfaces we provide.",
          ],
        },
        {
          id: "accounts",
          title: "2.2 Accounts",
          paragraphs: [
            "If you create an account, you are responsible for safeguarding your credentials and for any activity under your account.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "3. Intellectual Property",
      paragraphs: [
        "The services and their contents are owned by Collage AI, Inc. or its licensors and are protected by intellectual property laws. These Terms do not grant you any rights to our trademarks or branding.",
      ],
    },
    {
      id: "user-content",
      title: "4. User Content",
      paragraphs: [
        "You retain ownership of content you submit. By submitting content, you grant us a limited license to use it to operate and improve the services.",
      ],
    },
    {
      id: "disclaimers",
      title: "5. Disclaimers",
      paragraphs: [
        "The services are provided “as is” without warranties of any kind, whether express or implied, to the maximum extent permitted by law.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "6. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Collage AI, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services.",
      ],
    },
    {
      id: "termination",
      title: "7. Termination",
      paragraphs: [
        "We may suspend or terminate your access to the services at any time for conduct that violates these Terms or is otherwise harmful to the services or other users.",
      ],
    },
    {
      id: "governing-law",
      title: "8. Governing Law",
      paragraphs: [
        "These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of laws principles.",
      ],
    },
    {
      id: "contact",
      title: "9. Contact Us",
      paragraphs: [
        "If you have questions about these Terms, contact Collage AI, Inc., 20 Holyoke St, Cambridge, MA 02138.",
      ],
    },
  ],
};
