import { FC, ReactNode } from 'react';
import { cn } from '@/config/cn';

type BadgeProps = {
	content: ReactNode;
	extraClassNames?: string;
};

export const Badge: FC<BadgeProps> = (props) => {
	return (
		<div
			className={cn(
				'w-fit rounded-full border border-gray-200 px-4 py-1 text-base font-medium lg:text-lg lg:font-semibold',
				props.extraClassNames,
			)}
		>
			{props.content}
		</div>
	);
};
