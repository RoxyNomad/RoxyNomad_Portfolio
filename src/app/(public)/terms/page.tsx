// src/app/(public)/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutzungsbedingungen | RoxyNomad",
};

export default function TermsPage() {
  return (
    <div className="container">
      <h1>Nutzungsbedingungen</h1>
      <p>Durch die Nutzung dieser Website stimmst du den folgenden Bedingungen zu...</p>
    </div>
  );
}