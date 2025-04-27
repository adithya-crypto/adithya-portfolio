"use client";

import accordion from "@/libs/accordion";
import { useEffect } from "react";

const Faq2 = () => {
	useEffect(() => {
		accordion();
	}, []);

	return (
		<section id="faq" className="faq-2">
			<div className="pb-20 md:pb-100px xl:pb-30">
				<div className="container">
					{/* Section Heading */}
					<div className="mb-10 md:mb-50px xl:mb-60px text-center">
						<div className="mb-25px">
							<span className="text-xs uppercase py-10px px-5 bg-primary-color dark:bg-seondary-color text-white-color rounded-full font-semibold relative inline-block wow fadeInRight" data-wow-delay=".3s">
								FAQ
							</span>
						</div>
						<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 inline-block text-seondary-color dark:text-white-color leading-1.2 tj-char-animation font-medium">
							Your Questions and Answers
						</h2>
					</div>

					<div className="faq max-w-1120px mx-auto wow fadeInUp" data-wow-delay="0.3s">
						<div className="w-full flex flex-col gap-25px" id="accordion">
							
							{/* FAQ 1 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".3s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px open">
									<span className="text-lg font-medium">
										Are you open to relocation?
									</span>
								</button>
								<div className="accordion-content open">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											Yes, I am open to relocation based on the opportunity and project fit.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 2 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".4s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										What is your work authorization status?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											I am currently on F-1 OPT and do not require immediate sponsorship.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 3 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".5s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										What technologies are you proficient in?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											I have strong hands-on experience with Python, Java, SQL, React.js, TensorFlow, and more.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 4 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".6s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										How many real-world projects have you completed?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											I have successfully completed 8+ major projects across software development, data science, and machine learning.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 5 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".7s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										Are you available for remote roles?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											Yes, I am open to both remote and hybrid working environments.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 6 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".8s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										What are your areas of specialization?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											My focus areas include Software Engineering, Machine Learning, Data Analytics, and Full-Stack Web Development.
										</p>
									</div>
								</div>
							</div>

							{/* FAQ 7 */}
							<div className="accordion-single transition-all duration-300 border bg-cream-light-color dark:bg-transparent border-body-color dark:border-seondary-color rounded-15px wow fadeInUp" data-wow-delay=".9s">
								<button className="accordion-btn text-primary-color-light dark:text-white-color flex justify-between items-center w-full text-left text-lg md:text-xl py-4 px-15px pr-10 md:py-21px md:px-30px">
									<span className="text-lg font-medium">
										What is your expected start date?
									</span>
								</button>
								<div className="accordion-content">
									<div className="pt-5px pb-30px px-5 md:pl-30px text-gray-color dark:text-white-color">
										<p className="max-w-945px">
											I am immediately available upon receiving an offer.
										</p>
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

export default Faq2;
