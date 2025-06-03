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
		<div
			style={{
				background: colors.bgGradient,
			}}
			className={'relative'}
		>
			<div className={'absolute bottom-0 left-0 right-0 top-0 h-[64%]'}>
				<Image
					src={'/landing/tts-bg-grid.png'}
					alt={'tts_bg_grid'}
					width={1920}
					height={1000}
					className={'h-full w-full object-cover lg:object-contain'}
				/>
			</div>
			<div className="mx-auto max-w-screen-xl px-4 pb-24 pt-16 xl:px-0">
				<div className="flex h-full flex-col items-center justify-center">
					<Badge
						content="AI Text to Speech"
						extraClassNames="bg-white text-black font-medium"
					/>

					<div className="pt-10" />

					<TitleText
						title={'Create with the most powerful'}
						extraClassNames={'text-white'}
					/>

					<div className="pt-2 md:pt-0" />

					<TitleText
						title={'AI Text to Speech'}
						extraClassNames={'text-white'}
					/>

					<div className="pt-12" />

					<TTSDemoSlider />

					<div className="pt-24" />

					<div className={'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'}>
						{card_data.map((card: CardData, index: number) => (
							<div
								className={'h-fit rounded-lg border-[#0000001A] bg-white px-4 py-4'}
								key={index}
							>
								<div className="flex flex-col gap-4">
									<Image
										src={card.image}
										alt={'card_image'}
										width={50}
										height={50}
									/>

									<h3 className={'text-lg font-semibold'}>{card.title}</h3>

									<p className={'text-base font-normal'}>{card.description}</p>
								</div>
							</div>
						))}
					</div>

					<div className="pt-12" />

					<div className="flex flex-col items-center gap-5 lg:flex-row">
						<div className="flex-1 text-center text-xl text-white lg:text-start">
							Generate lifelike speech in any language and voice with the most powerful text to speech (TTS) technology that combines
							advanced AI with emotive capabilities.
						</div>
						<button className={'rounded-full bg-gray-dark-7 px-16 py-3 text-white lg:w-fit'}>Try for Free</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TTSDemo;
