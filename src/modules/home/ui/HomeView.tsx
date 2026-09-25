// src/modules/home/ui/HomeView.tsx
import { HeroSection } from "./components/HeroSection";
import { ValuePropSection } from "./components/ValuePropSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { TechStackGrid } from "./components/TechStackGrid";
import { CtaSection } from "./components/CtaSection";
import styles from "./HomeView.module.scss";

export function HomeView() {
  return (
    <div className={styles.homeContainer}>
      <HeroSection />
      <ValuePropSection />
      <FeaturedProjects />
      <TechStackGrid />
      <CtaSection />
    </div>
  );
}