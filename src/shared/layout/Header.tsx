// src/shared/layout/Header.tsx
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand__nav}>
          <Image 
            className={styles.header__logo}
            src="/images/initialenlogo-512.png"
            alt="Roxy Nomad Logo"
            width={50}
            height={50}
          />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;