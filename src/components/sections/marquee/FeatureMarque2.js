"use client";
import MarqueeSingle from "@/components/shared/marquee/MarqueeSingle";
const FeatureMarque2 = ({ type }) => {
	return (
		<section className="dark:bg-black-color pb-90px md:pb-100px xl:pb-30 overflow-x-hidden">
			<MarqueeSingle />
			<MarqueeSingle isRtl={true} isBlack={true} />
		</section>
	);
};

export default FeatureMarque2;
