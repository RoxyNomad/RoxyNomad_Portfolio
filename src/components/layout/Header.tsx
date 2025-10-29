import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="brand__nav">
					<Image className='header__logo'
						src="/images/initialenlogo-512.png"
						alt="Roxy Nomad Logo"
						width={50}
						height={50}
					/>
					<Navigation />
					<div className='socials'>
						<div className='social__icons'>
							<Link href="https://www.linkedin.com/in/roxynomad/" target="_blank" rel="noopener noreferrer">
								<Image
									src="/icons/linkedin-icon.png"
									alt="LinkedIn"
									width={40}
									height={40}
								/>
							</Link>
							<Link href="https://t.me/roxynomad/" target="_blank" rel="noopener noreferrer">
								<Image
									src="/icons/telegram-icon.png"
									alt="Telegram"
									width={40}
									height={40}
								/>
							</Link>
							<Link href="https://wa.me/41772831236/" target="_blank" rel="noopener noreferrer">
								<Image
									src="/icons/whatsapp-icon.png"
									alt="WhatsApp"
									width={40}
									height={40}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>

	)
};

export default Header;