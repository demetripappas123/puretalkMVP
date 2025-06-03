'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
//deleted the cookie import from public 
import { useCookieConsentStore } from '@/store/cookie-consent-store';
import { useEffect } from 'react';

const modalVariants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: '100%' },
};

const CookieConsent = () => {
	const { open, setOpen, setConsent, consentGiven } = useCookieConsentStore();

	useEffect(() => {
		const timer = setTimeout(() => {
			if (!consentGiven) setOpen(true);
		}, 4000);

		return () => clearTimeout(timer);
	}, [consentGiven, setOpen]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial="closed"
					animate="open"
					exit="closed"
					variants={modalVariants}
					transition={{ duration: 0.5 }}
					className="fixed inset-x-0 bottom-4 z-50 mx-auto max-w-[95%] rounded-xl border bg-white p-5 shadow-sm lg:max-w-3xl"
				>
					<div className={'flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-between md:text-start'}>
						<div className={'w-fit'}>
							<Image
								src='/images/c-consent.svg'
                                //added changes from original
								alt={'cookie-consent'}
								width={70}
								height={70}
							/>
						</div>

						<div className={'flex-1'}>
							<div className={'text-base font-semibold'}>Cookies!</div>

							<div className={'font-normal'}>
								We use cookies in order to personalize your site experience. By using our site you consent cookies.{' '}
								<Link
									href={'/'}
									target={'_blank'}
									className={'text-primary'}
								>
									Learn more
								</Link>
							</div>
						</div>

						<div className={'flex w-fit items-center gap-3'}>
							<button
								onClick={() => {
									setOpen(false);
									setConsent(true);
								}}
								className={'rounded-full border-2 px-4 py-1.5 font-medium text-green-600'}
							>
								Allow
							</button>

							<button
								onClick={() => {
									setOpen(false);
									setConsent(true);
								}}
								className={'rounded-full border-2 px-4 py-1.5 font-medium text-red-600'}
							>
								Decline
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default CookieConsent;
