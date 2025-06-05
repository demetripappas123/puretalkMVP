import TitleText from '@/components/library/TitleText';
import { Badge } from '@/components/library/badge';
import TTSDemoSlider from './tts-demo-slider';
import Image from 'next/image';
import { colors } from '@/utils/colors';

type CardData = {
	image: string;
	title: string;
	description: string;
};

const card_data: CardData[] = [
	{
		image: '/landing/card-image-1.svg',
		title: 'Human-Like Speech',
		description:
			'Turn text into lifelike audio across 29 languages and 120 voices. Ideal for digital creators, get high-quality TTS streaming instantly.',
	},
	{
		image: '/landing/card-image-2.svg',
		title: 'Precision Tuning',
		description:
			'Adjust voice outputs effortlessly through an intuitive interface. Opt for a blend of vocal clarity and stability, or amplify vocal styling for more animated delivery.',
	},
	{
		image: '/landing/card-image-3.svg',
		title: 'Online Text Reader',
		description: 'Use our deep learning-powered tool to read any text aloud, from brief emails to full PDFs, while cutting costs and time.',
	},
	{
		image: '/landing/card-image-4.svg',
		title: 'Custom Voice Creation',
		description: "Develop unique, brand-specific voices that match your company's identity. Tailor voice characteristics to create a distinctive auditory experience for your audience.",
	},
];

const TTSDemo = () => {
	return (
		<div className="relative w-full bg-[#18181b]">
			<div className="absolute inset-0 w-full h-full pointer-events-none">
				<Image
					src={'/landing/tts-bg-grid.png'}
					alt={'tts_bg_grid'}
					width={1920}
					height={1000}
					className={'h-full w-full object-cover opacity-10 mix-blend-multiply'}
					style={{ filter: 'brightness(0.5) grayscale(1)' }}
				/>
			</div>
			<div className="mx-auto max-w-6xl px-4 pb-20 pt-0 xl:px-0">
				<div className="flex h-full flex-col items-center justify-center">
					<div className="text-xs font-semibold text-indigo-300 tracking-widest uppercase mb-2">AI Text to Speech</div>
					<div className="text-2xl md:text-3xl font-bold text-white mb-1">Create with the most powerful</div>
					<div className="text-xl md:text-2xl font-bold text-white mb-4">AI Text to Speech</div>

					<div className="pt-10" />

					<TTSDemoSlider />

					<div className="pt-10" />

					<div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6'}>
						{card_data.map((card: CardData, index: number) => (
							<div
								className={'h-fit rounded-xl bg-[#23232a] px-3 py-3'}
								key={index}
							>
								<div className="flex flex-col gap-2 items-center text-center">
									<Image
										src={card.image}
										alt={'card_image'}
										width={40}
										height={40}
									/>
									<h3 className={'text-base font-semibold text-white'}>{card.title}</h3>
									<p className={'text-xs font-normal text-gray-300'}>{card.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="pt-6" />
					<div className="flex-1 text-center text-base text-gray-200 lg:text-start mb-2">
						Generate lifelike speech in any language and voice with the most powerful text to speech (TTS) technology that combines advanced AI with emotive capabilities.
					</div>
					<button className={'rounded-full bg-[#23232a] px-10 py-2 text-white text-sm font-semibold border border-gray-700 hover:bg-[#282834] transition lg:w-fit'}>Try for Free</button>
				</div>
			</div>
		</div>
	);
};

export default TTSDemo;
