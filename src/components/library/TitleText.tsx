import { cn } from '@/config/cn';
import { FC } from 'react';

type TitleTextProps = {
	title: string;
	extraClassNames?: string;
	mode?: 'light' | 'dark';
};

const TitleText: FC<TitleTextProps> = (props) => {
	return (
		<h1
			className={cn(
				'text-center text-4xl font-semibold leading-[40px] sm:text-5xl sm:leading-[4rem] md:text-6xl md:leading-[80px]',
				props.extraClassNames,
				{
					'text-white': props.mode === 'dark',
					'text-black': props.mode === 'light',
				},
			)}
		>
			{props.title}
		</h1>
	);
};

export default TitleText;
