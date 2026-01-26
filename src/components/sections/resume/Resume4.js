const Resume4 = () => {
	return (
		<section
			id="resume"
			className="relative pt-30px   pb-100px xl:pb-30 after:absolute after:top-1/2 after:-translate-y-5 after:left-5 after:w-650px after:h-550px after:blur-[150px] after:rounded-50% after:bg-gradient-circle-2 after:-z-1  after:-translate-x-1/2 after:opacity-60 "
		>
			<div className="pt-60px md:pt-100px lg:pt-30">
				<div className="container">
					{/* <!-- section heading --> */}
					<div className="mb-10 md:mb-50px xl:mb-60px ">
						<h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 inline-block text-seondary-color dark:text-white-color leading-1.2 tj-char-animation font-medium ">
							Education & Work Experience
						</h2>
					</div>
					{/* <!-- resume items --> */}
					<div className=" pb-65px mb-60px last:pb-0 last:mb-0 border-b border-border-color-2 last:border-0">
						<div
							className="flex flex-col lg:flex-row gap-35px "
							data-sticky-container
						>
							{/* <!-- division --> */}
							<div className="">
								{" "}
								<span
									className="tj-sticky  text-xs  uppercase py-10px px-5 bg-primary-color dark:bg-seondary-color text-white-color rounded-full text-white-colord-full font-semibold relative  leading-1.5 "
									data-margin-top="140"
									data-sticky-for="1199"
									data-sticky-class="is-sticky"
								>
									Experience
								</span>
							
</div>
							{/* <!-- content --> */}
							<div className="max-w-1030px lg:max-w-950px 2xl:max-w-1030px ml-auto w-full ">
								{/* Mastercard — Software Engineer (moved to top) */}
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".3s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/mastercard.png" alt="Mastercard logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												AI Software Engineer
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Mastercard
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Built an internal documentation assistant using LangChain and RAG with FAISS for semantic retrieval. Developed LLM-assisted tooling for pull request reviews using OpenAI API and Hugging Face Transformers. Architected microservices-based ML inference pipelines using FastAPI and Kubernetes on AWS with sub-100ms latency. Led model monitoring infrastructure using Prometheus and Grafana with automated drift detection. Containerized services with Docker, deployed to Kubernetes, and implemented CI/CD pipelines with Jenkins and Terraform. Transitioned prototype models into production using AWS SageMaker with ETL pipelines in PySpark processing millions of records daily.
											</p>
										</div>
									</div>
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											July 2024 - Present
										</p>
									</div>
								</div>

								{/* NAU (existing, moved down) */}
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/NAU-Logo.png" alt="Northern Arizona University logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												Graduate Research Assistant – Machine Learning
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Northern Arizona University
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Developed ML models using scikit-learn, PyTorch, and TensorFlow for enrollment analysis with transfer learning and hyperparameter tuning. Built automated data pipelines using Python, PySpark, and PostgreSQL. Created student churn prediction models using Logistic Regression and Random Forest. Designed interactive dashboards with Streamlit and Plotly for enrollment trends. Contributed to LOUIE, an enterprise conversational AI chatbot on Google Dialogflow, integrating Oracle PeopleSoft, ServiceNow, and Salesforce for context-aware responses.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											Aug 2022 - May 2024
										</p>
									</div>
								</div>

								{/* Oracle — Software Engineer */}
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/Oracle.png" alt="Oracle logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												Software Developer (OCI Data Science)
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Oracle
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Supported cloud infrastructure analytics by developing Python scripts using Oracle&apos;s ADS SDK for exploratory analysis and model experimentation on OCI Data Science. Contributed to data preprocessing pipelines using PySpark and Oracle Data Flow for anomaly detection use cases. Built RESTful APIs using Flask and FastAPI to expose ML model outputs with caching and model versioning. Created data visualization components using Plotly and Matplotlib for model performance analysis and stakeholder presentations.
											</p>
										</div>
									</div>
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											Jun 2021 - May 2022
										</p>
									</div>
								</div>

								{/* RedHat (existing, delay bumped) */}
								<div className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0 border-b border-border-color-2 last:border-0 wow fadeInUp" data-wow-delay=".6s">

									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/RedHat-Logo.png" alt="Red Hat logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												Student Brand Ambassador
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												RedHat
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Led workshops on open-source tools, improved deployment reliability through CI/CD pipelines, and enhanced collaboration through comprehensive technical documentation.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											Jun 2020 - Apr 2022
										</p>
									</div>
								</div>
                                
								{/* IEEE (existing, delay bumped) */}
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".7s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/IEEE-Logo.png" alt="IEEE logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												Secretary
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												IEEE Hyderabad Section
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Organized technical workshops and conferences, managed cross-functional teams, and received multiple awards for leadership and technical contributions.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											Jan 2019 - Apr 2022
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Education Section */}
						<div className="pb-65px mb-60px last:pb-0 last:mb-0 border-b border-border-color-2 last:border-0">
						<div className="flex flex-col lg:flex-row gap-35px" data-sticky-container>
							<div>
							<span className="tj-sticky text-xs uppercase py-10px px-5 bg-primary-color dark:bg-seondary-color text-white-color rounded-full font-semibold relative leading-1.5" data-margin-top="140" data-sticky-for="1199" data-sticky-class="is-sticky">
								Education
							</span>
							</div>
							<div className="max-w-1030px lg:max-w-950px 2xl:max-w-1030px ml-auto w-full">

							{/* MS in Computer Science */}
							<div className="flex flex-col md:flex-row gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 border-b border-border-color-2 wow fadeInUp" data-wow-delay=".3s">
								<div className="flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
								<div className="w-60px flex-shrink-0">
									<img src="/img/icons/NAU-Logo.png" alt="Northern Arizona University logo" />
								</div>
								<div>
									<h4 className="text-xl leading-1.2 text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
									Master of Science in Computer Science
									</h4>
									<p className="text-primary-color dark:text-body-color text-size-15 uppercase mb-22px">
									Northern Arizona University
									</p>
									<p className="text-lg text-seondary-color dark:text-body-color">
									Specialized in software engineering, secure coding, scalable systems, and performance optimization through project-based learning.
									</p>
								</div>
								</div>
								<div className="md:flex-shrink-0">
								<p className="text-seondary-color dark:text-body-color md:ml-auto">
									Aug 2022 - May 2024
								</p>
								</div>
							</div>

							{/* B.Tech in Computer Science */}
							<div className="flex flex-col md:flex-row gap-5 lg:gap-35px 2xl:gap-95px wow fadeInUp" data-wow-delay=".4s">
								<div className="flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
								<div className="w-60px flex-shrink-0">
									<img src="/img/icons/VMEG-Logo.jpeg" alt="Vardhaman College of Engineering logo" />
								</div>
								<div>
									<h4 className="text-xl leading-1.2 text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
									Bachelor of Technology in Computer Science
									</h4>
									<p className="text-primary-color dark:text-body-color text-size-15 uppercase mb-22px">
									Vardhaman College of Engineering (JNTU Hyderabad)
									</p>
									<p className="text-lg text-seondary-color dark:text-body-color">
									Developed strong foundations in software development, debugging, and coding best practices with leadership experience in technical clubs.
									</p>
								</div>
								</div>
								<div className="md:flex-shrink-0">
								<p className="text-seondary-color dark:text-body-color md:ml-auto">
									Aug 2018 - Jun 2022
								</p>
								</div>
							</div>
							</div>
						</div>
						</div>

					<div className=" pb-65px mb-60px last:pb-0 last:mb-0 border-b border-border-color-2 last:border-0">
						<div
							className="flex flex-col lg:flex-row gap-35px "
							data-sticky-container
						>
							{/* <!-- division --> */}
							<div className="">
								{" "}
								<span
									className="tj-sticky  text-xs  uppercase py-10px px-5 bg-primary-color dark:bg-seondary-color text-white-color rounded-full text-white-colord-full font-semibold relative  leading-1.5 "
									data-margin-top="140"
									data-sticky-for="1199"
									data-sticky-class="is-sticky"
								>
									Awards
								</span>
							</div>
							{/* <!-- content --> */}
							<div className="max-w-1030px lg:max-w-950px 2xl:max-w-1030px ml-auto w-full ">
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".3s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/IEEE-Logo.png" alt="IEEE India Council logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
											 x2 Best Student Volunteer Title
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												IEEE India Council
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Awarded consecutively in 2020 and 2021 for dedication and leadership in IEEE activities and technical initiatives.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											2020 - 2021
										</p>
									</div>
								</div>
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/Hackathon.png" alt="Smart India Hackathon logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												1st Place - 36-Hour IoT Hackathon
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Smart India Hackathon
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Secured first place for building a Smart Dustbin using IoT technology during undergraduate studies.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											2019
										</p>
									</div>
								</div>
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/VMEG-Logo.jpeg" alt="Vardhaman College of Engineering logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												1st Place - Science Fair
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Vardhaman College of Engineering
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Awarded for the innovative JARVIS project showcasing AI-based personal assistant system capabilities.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											2020
										</p>
									</div>
								</div>
								<div
									className=" flex flex-col md:flex-row  gap-5 lg:gap-35px 2xl:gap-95px pb-45px mb-10 last:pb-0 last:mb-0   border-b border-border-color-2 last:border-0 wow fadeInUp"
									data-wow-delay=".6s"
								>
									<div className=" flex flex-col md:flex-row gap-30px md:gap-10 max-w-735px w-full">
										<div className=" w-60px  flex-shrink-0">
											<img src="/img/icons/VMEG-Logo.jpeg" alt="Vardhaman College of Engineering logo" />
										</div>
										<div>
											<h4 className="text-xl leading-1.2  text-seondary-color dark:text-white-color mb-15px uppercase font-medium">
												1st Place - Emerging Technologies
											</h4>
											<p className=" text-primary-color dark:text-body-color group-hover:text-white-color transition-all text-size-15 uppercase mb-22px duration-300">
												Vardhaman College of Engineering
											</p>
											<p className=" text-lg  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300">
												Recognized for delivering an outstanding presentation on Internet of Things (IoT) during a tech symposium.
											</p>
										</div>
									</div>

									{/* <!-- date --> */}
									<div className="md:flex-shrink-0">
										<p className="  text-seondary-color dark:text-body-color group-hover:text-white-color transition-all duration-300 md:ml-auto">
											2020
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

export default Resume4;