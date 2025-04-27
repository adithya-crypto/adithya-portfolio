"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import features from "../../../../public/fakedata/feature-marquee";

const MarqueeSingle = ({ isRtl, isBlack }) => {
	return (
		<div className={`tj-roll-section`}>
			<div dir={isRtl ? "rtl" : ""}>
				<Swiper
					slidesPerView="auto"
					spaceBetween={0}
					centeredSlides={true}
					speed={5000}
					loop={true}
					allowTouchMove={false}
					// disableOnInteraction={true}
					autoplay={{
						delay: 1,
					}}
					modules={[Autoplay]}
					className={`tj-marquee tj-marquee--1 py-14px md:py-6 ${
						isBlack
							? "bg-primary-color dark:bg-seondary-color-3 "
							: "bg-cream-light-color dark:bg-primary-color"
					} `}
				>
					{features?.length
						? features?.map(({ darkImg, lightImg, title }, idx) => (
								<SwiperSlide key={idx}>
									<div className="roll-icon w-5 mx-30px lg:mx-60px">
										<img
											className={`portal-icon w-full ${
												isRtl
													? "animate-animate-spin"
													: "animate-animate-spin-reverse"
											} ${isBlack ? "" : "hidden dark:inline-block"}`}
											src={darkImg}
											alt="Icon"
										/>
										{isBlack ? (
											""
										) : (
											<img
												className={`portal-icon w-full ${
													isRtl
														? "animate-animate-spin"
														: "animate-animate-spin-reverse"
												} inline-block dark:hidden`}
												src={lightImg}
												alt="Icon"
											/>
										)}
									</div>
									<div className="roll-title">
										<h5
											className={` title md:text-xl font-extrabold uppercase ${
												isBlack
													? "text-white-color"
													: "text-primary-color dark:text-white-color"
											}`}
										>
											{title}
										</h5>
									</div>
								</SwiperSlide>
						  ))
						: ""}
				</Swiper>
			</div>
		</div>
	);
};

export default MarqueeSingle;
