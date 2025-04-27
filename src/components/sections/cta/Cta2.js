import Link from "next/link";

const Cta2 = () => {
	return (
		<section className="pb-20 md:pb-100px xl:pb-30 ">
			<div className="container">
				<div className="flex flex-col items-center bg-[url('/img/shapes/h4-cta.jpg')] bg-cover bg-no-repeat bg-center py-75px md:py-20 lg:py-95px px-15px lg:px-25px rounded-25px text-center">
					
					{/* No image block here anymore */}

					<h2 className="text-size-35 sm:text-size-40 md:text-size-45 lg:text-size-50 xl:text-size-58 inline-block text-white-color leading-1.2 font-medium tj-char-animation mb-25px">
						Let's Collaborate on Your Next Opportunity
					</h2>

					<p
						className="text-white-color font-medium mb-25px wow fadeInUp"
						data-wow-delay=".4s"
					>
						Interested in working together? I'm excited to contribute my skills to your team and projects.
					</p>

					<div className="wow fadeInUp" data-wow-delay=".5s">
						<a
							href="mailto:adithyas042@gmail.com"
							className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
						>
							Contact Me
						</a>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default Cta2;
