// src/app/(public)/about/page.tsx
import type { Metadata } from "next";
import { AboutView } from "@/modules/about/ui/AboutView";

export const metadata: Metadata = {
  title: "Über Mich | RoxyNomad",
  description: "Erfahre mehr über Roxy - Webentwicklerin und digitale Nomadin.",
};

export default function AboutPage() {
  return <AboutView />;
}