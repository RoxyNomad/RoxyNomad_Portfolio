// src/types/env.d.ts

// Typdeklaration für normale SCSS-Imports (Side-Effects wie globals.scss)
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Falls du auch normale CSS-Dateien nutzt:
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}