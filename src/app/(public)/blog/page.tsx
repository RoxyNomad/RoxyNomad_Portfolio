// src/app/(public)/blog/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RoxyNomad",
};

export default function BlogPage() {
  return (
    <div className="container">
      <h1>Blog</h1>
    </div>
  );
}