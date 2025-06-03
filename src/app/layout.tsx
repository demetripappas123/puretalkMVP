import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { colors } from '@/utils/colors';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import AnnouncementBar from '@/components/layout/announcement-bar';
import { GlobalProvider } from '@/context/global-context';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import CookieConsent from '@/components/cookie-consent/cookie-consent';

// local font
const satoshiFont = localFont({
	src: [
		{
			path: 'satoshi-variable.woff2',
			weight: '100',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '200',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '300',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '400',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '500',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '600',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '700',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '800',
		},
		{
			path: 'satoshi-variable.woff2',
			weight: '900',
		},
	],
});

// title metadata
export const metadata: Metadata = {
	title: 'Puretalk AI®',
	description: 'Puretalk AI® - The best way to communicate with your customers.',
};

// antd theme
const theme = {
	token: {
		colorPrimary: colors.primary,
		fontFamily: satoshiFont.style.fontFamily,
	},
};

// Root layout
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html
			lang="en"
			className={satoshiFont.className}
			suppressHydrationWarning={true}
		>
			<body>
				<AntdRegistry>
					<GlobalProvider>
						<ConfigProvider
							theme={theme}
							wave={{ disabled: true }}
						>
							<NextTopLoader
								showSpinner={false}
								height={2}
								color={colors.primary}
							/>
							<AnnouncementBar />
							<Navbar />
							<main>{children}</main>
							<Footer />
							<CookieConsent />
						</ConfigProvider>
					</GlobalProvider>
				</AntdRegistry>
			</body>
		</html>
	);
}
