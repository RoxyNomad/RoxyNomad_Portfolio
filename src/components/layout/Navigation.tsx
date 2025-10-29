import styles from "@/styles/components/_navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
	const router = useRouter();
	const { pathname} = router;

	return (
		<div className={styles.navbar}>
			<div className={styles.link__container}>
				<div className={styles.nav__links}>
					<Link href="/" 
						className={`${styles.nav__link} ${pathname === '/' ? styles.active : ''}`}
					>
						Home
					</Link>
					<Link href="/about" 
						className={`${styles.nav__link} ${pathname.startsWith('/about') ? styles.active : ''}`}
					>
						About
					</Link>
					<Link href="/portfolio" 
						className={`${styles.nav__link} ${pathname.startsWith('/portfolio') ? styles.active : ''}`}
					>
						Portfolio
					</Link>
					<Link href="/contact" 
						className={`${styles.nav__link} ${pathname.startsWith('/contact') ? styles.active : ''}`}
					>
						Contact
					</Link>
					<Link href="/blog" 
						className={`${styles.nav__link} ${pathname.startsWith('/blog') ? styles.active : ''}`}
					>
						Blog
					</Link>
				</div>
			</div>
		</div>
	)
};

export default Navigation;