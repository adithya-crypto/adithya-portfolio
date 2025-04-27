"use client";
import ButtonHeader from "@/components/shared/buttons/ButtonHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPrimary2 from "@/components/shared/buttons/ButtonPrimary2";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import indexingAndActiveLink from "@/libs/indexingAndActiveLink";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = ({ isActiveMobileMenu, setIsActiveMobileMenu, isSticky }) => {
	const { isIndexPage, isInnerPage, isResumeBtn, headerType } =
		useHeaderContext();
	const navItems = getNavItems();
	useEffect(() => {
		// mobileMenuController();
		indexingAndActiveLink();
	}, []);

	return (
		<nav>
			<ul
				className={`nav flex items-center  xl:gap-30px  ${
					headerType === 5
						? "gap-x-25px lg:gap-x-10px xl:gap-x-15px 2xl:gap-x-25px"
						: headerType === 4 || headerType === 6
						? `gap-x-5  2xl:gap-x-35px lg:px-10 rounded-full ${
								headerType === 6
									? "lg:bg-cream-light-color lg:dark:bg-black-color"
									: "lg:border lg:border-primary-color "
						  } `
						: ` gap-x-5 2xl:gap-x-45px`
				}`}
			>
				{navItems?.length
					? navItems?.map(({ name, path, path2 }, idx) => (
							<li key={idx} className="nav_item group relative hidden lg:block">
								<Link
									href={isIndexPage ? path : path2}
									className={`text-size-15 font-medium  ${
										isInnerPage && !isSticky
											? "text-white-color"
											: headerType === 5 || headerType === 6
											? ""
											: "text-seondary-color dark:text-white-color"
									} capitalize relative z-0  ${
										headerType === 5 ? "" : "py-10px "
									}  ${
										headerType === 5 || headerType === 6
											? ` text-seondary-color hover:text-primary-color dark:text-gray-color-4 dark:hover:text-white-color ${
													headerType === 6
														? "py-10px md:py-14px lg:py-14px 2xl:py-14px"
														: "px-14px py-3px border border-transparent hover:border-primary-color rounded-full"
											  }   `
											: headerType === 4
											? `  md:py-14px lg:py-14px 2xl:py-14px `
											: `md:py-15px lg:py-25px 2xl:py-30px  after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full`
									}`}
								>
									{name}
								</Link>
							</li>
					  ))
					: ""}

				{/* <!-- action button --> */}
				{headerType === 5 ? (
					<li className="menu-bar lg:hidden">
						<ButtonHeader />
					</li>
				) : headerType === 3 || headerType === 4 ? (
					""
				) : (
					<li
						className={`${headerType === 6 ? "hidden sm:block lg:hidden" : ""}`}
					>
						{isResumeBtn ? (
							<ButtonPrimary2 url={"#"}>Resume</ButtonPrimary2>
						) : (
							<ButtonPrimary
								isIcon={headerType === 6 ? true : false}
								url={"mailto:adithyas042@gmail.com"}
							>
								{headerType === 6 ? "Lets Talk" : "Contact Me"}
							</ButtonPrimary>
						)}
					</li>
				)}
				{/* <!-- open mobile menu button --> */}
				<li className="menu-bar lg:hidden">
					<div className="menu-bar">
						<button
							className={isActiveMobileMenu ? `active` : ""}
							onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
						>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
