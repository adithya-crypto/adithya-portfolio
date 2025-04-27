import { useEffect } from "react";

const useSticky = (selector = ".sticky-element") => {
	useEffect(() => {
		if (typeof window === "undefined") return; // SSR protection

		const initSticky = async () => {
			const { default: Sticky } = await import("sticky-js");

			const el = document.querySelector(selector);

			if (el) {
				new Sticky(selector);
			}
		};

		initSticky();
	}, [selector]);
};

export default useSticky;
