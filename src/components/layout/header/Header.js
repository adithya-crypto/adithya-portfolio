"use client";
import ButtonHeader from "@/components/shared/buttons/ButtonHeader";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Socials4 from "@/components/shared/socials/Socials4";
import Socials5 from "@/components/shared/socials/Socials5";
import { useHeaderContext } from "@/context_api/HeaderContext";
import stickyHeader from "@/libs/stickyHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = ({ isSticky }) => {
	const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
	const { isInnerPage, headerType, isIndexPage } = useHeaderContext();
	useEffect(() => {
		stickyHeader();
	}, []);

	return (
		<header
			className={`header-area ${
				headerType === 6 ? "header-6" : headerType === 5 ? "header-5  " : ""
			} ${isSticky ? "header-2 header-sticky" : "header-absolute"} `}
		>
			<div
				className={`${
					isSticky ? "py-10px" : "pt-15px xl:pt-5 pb-5 md:pb-30px xl:pb-5"
				} relative`}
			>
				<div
					className={`${
						headerType === 5 || headerType === 6
							? "px-15px xl:px-35px 2xl:px-65px"
							: "container"
					}`}
				>
					<div className="flex flex-wrap justify-between items-center">
						{/* <!-- logo and contact email --> */}
						<div
							className={
								headerType === 4 || headerType === 6
									? `max-w-205px lg:max-w-130px xl:max-w-205px w-full`
									: ""
							}
						>
							<ul
								className={`flex items-center ${
									headerType === 5 ? "gap-x-25px" : "gap-x-15px xl:gap-x-35px"
								}`}
							>
								<li>
									<Logo isSticky={isSticky} />
								</li>
								{headerType === 3 ||
								headerType === 4 ||
								headerType === 5 ||
								headerType === 6 ? (
									""
								) : (
									<li className="hidden md:block">
										<Link
											href="mailto:adithyas042@gmail.com"
											className={`text-size-15 font-medium ${
												isInnerPage && !isSticky
													? "text-white-color"
													: "text-seondary-color dark:text-white-color"
											} `}
										>
											adithyas042@gmail.com
										</Link>
									</li>
								)}
							</ul>
						</div>
						{/* <!-- main menu --> */}
						<Navbar
							isActiveMobileMenu={isActiveMobileMenu}
							setIsActiveMobileMenu={setIsActiveMobileMenu}
							isSticky={isSticky}
						/>
						{/* <!-- social button --> */}
						{headerType === 3 ||
						headerType === 4 ||
						headerType === 5 ||
						headerType === 6 ? (
							<div
								className={`hidden ${
									headerType === 5
										? "lg:flex items-center gap-25px"
										: "lg:block "
								}`}
							>
								{headerType === 6 ? (
									<ButtonPrimary
										isIcon={headerType === 6 ? true : false}
										url={"mailto:adithyas042@gmail.com"}
									>
										{headerType === 6 ? "Lets Talk" : "Contact Me"}
									</ButtonPrimary>
								) : headerType === 5 ? (
									<>
										<Socials5 />
										<ButtonHeader />
									</>
								) : (
									<Socials4 />
								)}
							</div>
						) : (
							""
						)}
					</div>
				</div>
				{/* <!-- mobile menu --> */}
				<MobileMenu isActiveMobileMenu={isActiveMobileMenu} />
			</div>
		</header>
	);
};

export default Header;
