import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CookieConsentState = {
	open: boolean;
	setOpen: (value: boolean) => void;
	consentGiven: boolean;
	setConsent: (value: boolean) => void;
};

export const useCookieConsentStore = create<CookieConsentState>()(
	persist(
		(set) => ({
			open: false,
			setOpen: (value: boolean) => set({ open: value }),
			consentGiven: false,
			setConsent: (value: boolean) => set({ consentGiven: value }),
		}),
		{
			name: 'cookie-consent-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ consentGiven: state.consentGiven }),
		},
	),
);
