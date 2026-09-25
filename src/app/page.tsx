// src/app/page.tsx
import type { Metadata } from "next";
import { HomeView } from "@/modules/home/ui/HomeView";

export const metadata: Metadata = {
  title: "RoxyNomad | Webentwicklung, Design & Clean Architecture",
  description: "Portfolio von Roxy – Webentwicklerin für Next.js, React, DDD & CQRS.",
};

export default function HomePage() {
  return <HomeView />;
}