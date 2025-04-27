"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FunFact4 = () => {
	const [value1, setValue1] = useState(0);
	const [value2, setValue2] = useState(0);
	const [value3, setValue3] = useState(0);
	const [value4, setValue4] = useState(0);
	const [value5, setValue5] = useState(0);
	const [value6, setValue6] = useState(0);
	const [Odometer, setOdometer] = useState(null);

	// Intersection Observer
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.4,
	});

	useEffect(() => {
		import("react-odometerjs").then(mod => setOdometer(() => mod.default));
	}, []);

	useEffect(() => {
		if (inView) {
			const timeoutId = setTimeout(() => {
				setValue1(8);    // Hackathons
				setValue2(6);    // Certifications
				setValue3(4);    // Research Presentations
				setValue4(50);   // GitHub Contributions
				setValue5(3.5);  // GPA
				setValue6(20);   // Tools & Tech Mastered
			}, 250);
			return () => clearTimeout(timeoutId);
		}
	}, [inView]);

	return (
		<>
			{Odometer ? (
				<div className="relative flex-grow">
					<div
						ref={ref}
						className="flex flex-wrap items-center md:items-start justify-center sm:justify-start lg:justify-end gap-x-25px xl:gap-x-10 gap-y-25px xl:gap-y-35px text-primary-color dark:text-body-color"
					>
						{/* Hackathons & Competitions */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInLeft" data-wow-delay=".3s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value1} /> <span className="symbol">+</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								Hackathons & Competitions
							</div>
						</div>

						{/* Certifications Earned */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInRight" data-wow-delay=".4s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value2} /> <span className="symbol">+</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								Certifications Completed
							</div>
						</div>

						{/* Research Presentations */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInLeft" data-wow-delay=".5s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value3} /> <span className="symbol">+</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								Research Presentations
							</div>
						</div>

						{/* GitHub Contributions */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInRight" data-wow-delay=".6s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value4} /> <span className="symbol">+</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								GitHub Contributions
							</div>
						</div>

						{/* GPA */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInLeft" data-wow-delay=".7s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value5} /> <span className="symbol">/4.0</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								GPA Achieved
							</div>
						</div>

						{/* Tools & Tech Mastered */}
						<div className="funfact-item-2 flex flex-col text-start gap-1 md:gap-15px max-w-260px w-full pt-30px pb-35px px-15px bg-white-color dark:bg-primary-color-light rounded-25px wow fadeInRight" data-wow-delay=".8s">
							<div className="number text-size-40 lg:text-size-35 xl:text-5xl font-bold inline-flex items-center">
								<Odometer className="!font-sora tracking-[0.04em]" value={value6} /> <span className="symbol">+</span>
							</div>
							<div className="text leading-1 text-base text-end text-primary-color-light dark:text-body-color">
								Tools & Tech Mastered
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default FunFact4;
