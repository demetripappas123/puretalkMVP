'use client';

import { FC, PropsWithChildren, createContext, useEffect, useState, useRef } from 'react';
import { UAParser } from 'ua-parser-js';
import { debounce } from 'lodash';

interface ContextProps {
	isMobile: boolean;
}

export const GlobalContext = createContext<ContextProps>({
	isMobile: false,
});

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);

	const checkDevice = () => {
		// Check user agent
		const parser = new UAParser();
		const result = parser.getResult();
		const deviceType = result.device.type;

		// Check window width
		const isMobileWidth = window.innerWidth <= 768;

		setIsMobile(deviceType === 'mobile' || deviceType === 'tablet' || isMobileWidth);
	};

	const debouncedCheckDevice = useRef(debounce(checkDevice, 250));

	useEffect(() => {
		// Initial check
		checkDevice();

		// Add resize listener with debounce
		window.addEventListener('resize', debouncedCheckDevice.current);

		// Cleanup
		return () => {
			window.removeEventListener('resize', debouncedCheckDevice.current);
			debouncedCheckDevice.current.cancel(); // Cancel any pending debounced calls
		};
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				isMobile,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
