"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getAPortfolio from "@/libs/getAPortfolio";
import getPortfolio from "@/libs/getPortfolio";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const PortfolioDetailsPrimary = () => {
	const portfolios = getPortfolio();
	const params = useParams();
	const id = params?.id;
	const currentId = parseInt(id);
	const prevId = currentId > 1 ? currentId - 1 : 1;
	const totalPortfolio = portfolios?.length;
	const nextId = currentId < totalPortfolio ? currentId + 1 : totalPortfolio;
	const portfolio = getAPortfolio(currentId);
	const prevPortfolio = getAPortfolio(prevId);
	const nextPortfolio = getAPortfolio(nextId);
	const {
		title,
		desc,
		desc1,
		desc2,
		img,
		descItems,
		statusItem,
		liveLink,
		githubLink
	} = portfolio || {};
	const isPrevProject = currentId > 1;
	const isNextProject = currentId < totalPortfolio;

	return (
		<section>
			<div className="py-60px md:py-20 lg:py-100px xl:py-30 dark:bg-black-color">
				<div className="container">
					<div className="group relative wow fadeInUp" data-wow-delay=".3s">
						<div className="relative overflow-hidden">
							<div className="overflow-hidden p-5 md:p-10 xl:p-60px pb-0 md:pb-0 xl:pb-0 bg-cream-light-color dark:bg-seondary-color">
								<Image src={img} alt="Project Image" className="w-full" width={2000} height={2000} />
							</div>
							<div className="pt-30px md:pt-10 lg:pt-60px">
								<div className="transition-all duration-500">
									<div className="relative z-10">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-x-50px items-start px-15px md:px-25px lg:px-10 mb-10 md:mb-50px">
											<div>
												<h3 className="mb-10px">
													<span className="text-primary-color-light dark:text-white-color capitalize text-size-35 md:text-size-40 lg:text-size-45 font-bold">
														{title}
													</span>
												</h3>
												<p className="text-primary-color-light dark:text-white-color mb-6">
													{desc}
												</p>
												<div className="flex gap-4">
													{liveLink && (
														<a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn-inline bg-gradient-primary text-white-color px-5 py-3 rounded-full hover:opacity-90 transition-all">
															Live Demo
														</a>
													)}
													{githubLink && (
														<a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-inline bg-gradient-primary text-white-color px-5 py-3 rounded-full hover:opacity-90 transition-all">
															View Code
														</a>
													)}
												</div>
											</div>
											<ul className="grid grid-cols-2 gap-x-15px lg:gap-x-5 gap-y-5 md:gap-y-30px">
												{statusItem?.map(({ title, desc }, idx) => (
													<li key={idx}>
														<p className="text-primary-color-light dark:text-white-color mb-1.5">{title}</p>
														<p className="text-primary-color-light dark:text-white-color font-medium mb-1.5">{desc}</p>
													</li>
												))}
											</ul>
										</div>

										<div className="px-15px md:px-25px lg:px-10">
											<div className="mb-10 md:mb-50px">
												<h4 className="text-size-30 text-primary-color-light dark:text-white-color font-bold mb-5">Project Description</h4>
												<p className="text-primary-color-light dark:text-white-color mb-4">{desc1}</p>
												<p className="text-primary-color-light dark:text-white-color">{desc2}</p>
											</div>

											<div className="space-y-8">
												{descItems?.map(({ title, desc }, idx) => (
													<div key={idx}>
														<h5 className="text-xl font-semibold text-primary-color-light dark:text-white-color mb-2">{title}</h5>
														<p className="text-primary-color-light dark:text-white-color">
															{desc}
														</p>
													</div>
												))}
											</div>
										</div>
										
										<div className="px-15px py-30px md:px-25px lg:px-50px lg:py-35px bg-primary-color flex justify-between flex-wrap gap-30px items-center mt-12">
											<Link href={isPrevProject ? `/portfolio/${prevId}` : "#"} className="flex gap-5 items-end group/nested">
												{isPrevProject && (
													<>
														<span className="text-xl md:text-3xl text-white rotate-45 group-hover/nested:rotate-0 transition-all duration-500">
															<i className="fal fa-arrow-left mb-2"></i>
														</span>
														<h6>
															<span className="text-white-color block">Previous Project</span>
															<span className="text-white-color capitalize text-size-25 md:text-size-35 lg:text-size-45 font-bold">{prevPortfolio?.title}</span>
														</h6>
													</>
												)}
											</Link>
											<Link href={isNextProject ? `/portfolio/${nextId}` : "#"} className="flex gap-5 items-end group/nested ml-auto">
												{isNextProject && (
													<>
														<h6>
															<span className="text-white-color block">Next Project</span>
															<span className="text-white-color capitalize text-size-25 md:text-size-35 lg:text-size-45 font-bold">{nextPortfolio?.title}</span>
														</h6>
														<span className="text-xl md:text-3xl text-white -rotate-45 group-hover/nested:rotate-0 transition-all duration-500">
															<i className="fal fa-arrow-right mb-2"></i>
														</span>
													</>
												)}
											</Link>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetailsPrimary;
