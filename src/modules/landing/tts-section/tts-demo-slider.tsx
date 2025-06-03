'use client';

import { cn } from '@/config/cn';
import { colors } from '@/utils/colors';
import { Carousel } from 'antd';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

export type voicesType = { img: string; name: string; audio: string; text: string };

export const voices: voicesType[] = [
	{
		img: '/landing/person-1.svg',
		name: 'Gabby',
		audio: '/landing/gab.mp3',
		text: '"Let\'s face it, you\'re ready for a change. Join our crew for an adventure..."',
	},
	{
		img: '/landing/person-2.svg',
		name: 'Lara',
		audio: '/landing/gab-3.mp3',
		text: '"Embark on a journey filled with excitement, curiosity and discovery..."',
	},
	{
		img: '/landing/person-3.svg',
		name: 'Zara',
		audio: '/landing/gab.mp3',
		text: '"Let\'s face it, you\'re ready for a change. Join our crew for an adventure..."',
	},
	{
		img: '/landing/person-5.svg',
		name: 'John',
		audio: '/landing/gab.mp3',
		text: '"Let\'s face it, you\'re ready for a change. Join our crew for an adventure..."',
	},
	{
		img: '/landing/person-4.svg',
		name: 'Jack',
		audio: '/landing/gab-3.mp3',
		text: '"Embark on a journey filled with excitement, curiosity and discovery..."',
	},
	{
		img: '/landing/person-5.svg',
		name: 'John',
		audio: '/landing/gab.mp3',
		text: '"Let\'s face it, you\'re ready for a change. Join our crew for an adventure..."',
	},
];

const sliderSettings = {
	centerMode: true,
	infinite: true,
	dots: false,
	speed: 300,
	slidesToShow: 5,
	centerPadding: '0',
	swipeToSlide: true,
	focusOnSelect: true,
	arrows: false,
};

const TTSDemoSlider: FC = () => {
	const [selectedVoice, setSelectedVoice] = useState<number>(0);
	const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [refreshWaveSurfer, setRefreshWaveSurfer] = useState<number>(0);

	useEffect(() => {
		if (waveSurfer) {
			waveSurfer.on('play', () => {
				setIsPlaying(true);
			});
			waveSurfer.on('pause', () => {
				setIsPlaying(false);
			});
			waveSurfer.on('finish', () => {
				setIsPlaying(false);
				waveSurfer.seekTo(0);
				setRefreshWaveSurfer((prev) => prev + 1);
			});
		}
	}, [waveSurfer, refreshWaveSurfer]);

	useEffect(() => {
		if (waveSurfer) {
			waveSurfer.destroy();
		}
		const newWaveSurfer = WaveSurfer.create({
			container: '#ttsdemo',
			waveColor: '#daccef',
			progressColor: colors.white,
			cursorColor: colors.white,
			barWidth: 2,
			barGap: 0,
			height: 50,
			width: 'auto-fit',
		});
		setWaveSurfer(newWaveSurfer);

		return () => {
			newWaveSurfer.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		(async () => {
			if (waveSurfer) {
				await waveSurfer.load(voices[selectedVoice].audio);
			}
		})();
	}, [waveSurfer, selectedVoice]);

	return (
		<Fragment>
			<div className="flex">
				<div className={'max-w-[300px] lg:max-w-[400px]'}>
					<Carousel {...sliderSettings}>
						{voices.map((voice, index) => {
							return (
								<div
									key={index}
									role={'button'}
									onClick={() => {
										setSelectedVoice(index);
										if (waveSurfer) {
											waveSurfer.seekTo(0);
										}
									}}
									className={cn('rounded-full transition-transform duration-300', {
										'opacity-100': selectedVoice === index,
										'scale-75 transform opacity-70': selectedVoice !== index,
									})}
								>
									<Image
										src={voice.img}
										alt="selected voice"
										width={96}
										height={96}
										className={'size-16 rounded-full md:size-24'}
									/>
								</div>
							);
						})}
					</Carousel>
				</div>
			</div>

			<div className="pt-12" />

			<div className="flex items-center gap-4">
				<button
					onClick={async () => {
						if (waveSurfer) {
							await waveSurfer.playPause();
						}
					}}
					className={'z-20'}
				>
					{isPlaying ? (
						<Image
							src={'/landing/pause-circle.svg'}
							alt={'pause_circle'}
							width={56}
							height={56}
							className={'size-8 lg:size-14'}
						/>
					) : (
						<Image
							src={'/landing/play-circle.svg'}
							alt={'play_circle'}
							width={56}
							height={56}
							className={'size-8 lg:size-14'}
						/>
					)}
				</button>

				<div
					id="ttsdemo"
					className={'w-[17rem] lg:w-[32rem]'}
				/>
			</div>

			<div className="pt-12" />

			<div className={'z-20 w-full text-center text-2xl text-white lg:w-[571px]'}>{voices[selectedVoice].text}</div>

			<div className="pt-7" />

			<div className={'text-center text-lg font-normal text-white'}>Spoken by {voices[selectedVoice].name}</div>
		</Fragment>
	);
};

export default TTSDemoSlider;
