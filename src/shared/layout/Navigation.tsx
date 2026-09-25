// src/shared/layout/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.link__container}>
        <ul className={styles.nav__links}>
          <li>
            <Link 
              href="/" 
              className={`${styles.nav__link} ${pathname === '/' ? styles.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={`${styles.nav__link} ${pathname.startsWith('/about') ? styles.active : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio" 
              className={`${styles.nav__link} ${pathname.startsWith('/portfolio') ? styles.active : ''}`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className={`${styles.nav__link} ${pathname.startsWith('/blog') ? styles.active : ''}`}
            >
              Blog
            </Link>
          </li>
					<li>
            <Link 
              href="/contact" 
              className={`${styles.nav__link} ${pathname.startsWith('/contact') ? styles.active : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;