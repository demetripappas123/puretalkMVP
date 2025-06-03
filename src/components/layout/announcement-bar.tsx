'use client';

import axios from '@/config/axios';
import { GlobalContext } from '@/context/global-context';
import { Carousel } from 'antd';
import { useContext, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

export type Notice = {
	notice_id: string;
	title: string;
	description: string;
};

const AnnouncementBar = () => {
	const { isMobile } = useContext(GlobalContext);
	const [notices, setNotices] = useState<Notice[]>([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get('/communications/notices');
			setNotices(data.results);
		})();
	}, []);

	return notices.length > 0 ? (
		<div className="gcss_announcement_bar h-fit w-full px-4 py-1">
			{isMobile ? (
				<Marquee play>
					{notices.map((notice) => (
						<Notice
							key={notice.notice_id}
							notice={notice}
						/>
					))}
				</Marquee>
			) : (
				<div className="w-full">
					<Carousel
						autoplay
						dots={false}
						fade
					>
						{notices.map((notice) => (
							<Notice
								key={notice.notice_id}
								notice={notice}
							/>
						))}
					</Carousel>
				</div>
			)}
		</div>
	) : null;
};

export default AnnouncementBar;

const Notice = ({ notice }: { notice: Notice }) => {
	return (
		<div
			key={notice.notice_id}
			className={'flex w-full items-center justify-center gap-2 px-4'}
		>
			<div className="flex w-full justify-center gap-2">
				<h3 className="text-sm font-semibold text-white lg:text-base">{notice.title}: </h3>
				<p className="text-sm text-gray-200 lg:text-base">{notice.description}</p>
			</div>
		</div>
	);
};
