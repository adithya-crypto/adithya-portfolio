"use client";

import clsx from "clsx";
import { useEffect } from "react";
import progressBar from "@/libs/progressBar";
import Marquee from "react-fast-marquee";

const skills = [
  { title: "Python", percent: 95, desc: "Built ML models, ETL pipelines, and data analysis tools.", icon: "/img/icons/python.png" },
  { title: "Java", percent: 90, desc: "Developed backend services and academic projects.", icon: "/img/icons/java.png" },
  { title: "C/C++", percent: 80, desc: "Built IoT device control programs and system-level code.", icon: "/img/icons/c++.png" },
  { title: "JavaScript", percent: 85, desc: "Frontend scripting for dynamic React apps.", icon: "/img/icons/javascript.png" },
  { title: "SQL", percent: 90, desc: "Database design and querying for analytics projects.", icon: "/img/icons/sql.png" },
  { title: "TensorFlow", percent: 80, desc: "Implemented ML models for ResumeGenius and security analysis.", icon: "/img/icons/tensorflow.png" },
  { title: "scikit-learn", percent: 85, desc: "Trained predictive models for portfolio datasets.", icon: "/img/icons/scikit-learn.png" },
  { title: "Keras", percent: 80, desc: "Built deep learning prototypes and neural networks.", icon: "/img/icons/keras.png" },
  { title: "Pandas", percent: 90, desc: "Data wrangling for ETL and analysis pipelines.", icon: "/img/icons/pandas.png" },
  { title: "NumPy", percent: 90, desc: "Scientific computing for data transformations.", icon: "/img/icons/numpy.png" },
  { title: "Matplotlib", percent: 85, desc: "Visualized machine learning results and statistics.", icon: "/img/icons/Matplotlib.png" },
  { title: "Seaborn", percent: 80, desc: "Generated heatmaps, correlations, and insights.", icon: "/img/icons/seaborn.png" },
  { title: "OOP", percent: 90, desc: "Designed scalable object-oriented software systems.", icon: "/img/icons/OOP.png" },
  { title: "Algorithms", percent: 85, desc: "Optimized search and sort operations in real projects.", icon: "/img/icons/algorithms.png" },
  { title: "Unit Testing", percent: 75, desc: "Wrote automated tests for production-ready code.", icon: "/img/icons/Unit-Testing.png" },
];

const Skills2 = ({ type, title }) => {
  useEffect(() => {
    progressBar();
  }, []);

  return (
    <section
      id="skills"
      className={clsx(
        "pb-20 md:pb-100px xl:pb-30 relative after:absolute after:top-1/2 after:translate-y-1/2 after:right-5 after:w-650px after:h-550px after:blur-[150px] after:rounded-50% after:bg-gradient-circle-2 after:-z-1 after:translate-x-1/2 after:opacity-60",
        type === 2 && "dark:bg-black-color"
      )}
    >
      <div className="">
        <div className="container">
          {/* Section Heading */}
          <div
            className={clsx(
              "mb-10 md:mb-50px xl:mb-60px",
              type === 2 && "text-center flex flex-col items-center"
            )}
          >
            <div className="mb-25px">
              <span
                className={clsx(
                  "text-xs uppercase relative inline-block wow fadeInRight",
                  type === 2
                    ? "text-primary-color font-medium"
                    : "py-10px px-5 bg-primary-color dark:bg-seondary-color text-white-color rounded-full font-semibold"
                )}
                data-wow-delay=".3s"
              >
                SKILLS
              </span>
            </div>
            <h2
              className={clsx(
                "text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 inline-block text-seondary-color dark:text-white-color leading-1.2",
                type === 2
                  ? "font-semibold -tracking-0.02em w-full wow fadeInUp"
                  : "tj-char-animation font-medium"
              )}
              data-wow-delay={type === 2 ? ".4s" : "0"}
            >
              {title ? title : "My Top Skills"}
            </h2>
          </div>

          {/* Skills Scroll Section */}
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            <div className="flex">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "rounded-25px relative overflow-hidden pt-30px pb-35px lg:pt-35px lg:pb-10 2xl:pt-45px 2xl:pb-50px px-15px 2xl:pl-35px 2xl:pr-30px backdrop-blur-[40px] group transition-all duration-500 w-72 min-w-72 flex-shrink-0 wow fadeInUp mx-3",
                    type === 2
                      ? "border-2 border-cream-light-color bg-cream-light-color dark:bg-transparent dark:border-bg-color-2 rounded-20px"
                      : "bg-cream-light-color dark:bg-bg-color-6 rounded-25px"
                  )}
                  data-wow-delay={`0.${idx + 3}s`}
                >
                  {/* Skill Icon + Title */}
                  <div className="mb-15px flex items-center gap-18px sm:gap-15px md:gap-18px lg:gap-15px xl:gap-18px">
                    <div
                      className={clsx(
                        "flex-shrink-0 w-60px h-60px sm:w-46px sm:h-46px md:w-20 md:h-20 lg:w-46px lg:h-46px xl:w-20 xl:h-20 inline-flex justify-center items-center leading-1",
                        type === 2
                          ? "bg-white-color dark:bg-primary-color-light rounded-100%"
                          : "bg-dark-color dark:bg-transparent rounded-lg"
                      )}
                    >
                      <img
                        className="w-30px md:w-10 lg:w-30px xl:w-10"
                        src={skill.icon || "/img/icons/placeholder.svg"}
                        alt={skill.title}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-size-22 lg:text-2xl mb-15px leading-1.2 font-medium text-seondary-color dark:text-white-color">
                        {skill.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skill Description and Progress Bar */}
                  <div>
                    <p className="text-primary-color-light dark:text-body-color mb-0">
                      {skill.desc}
                    </p>
                    <div className="tj-progress-bar">
                      <div className="progress_bar">
                        <div className="progress-item mt-50px relative">
                          <div className="item_value font-medium text-seondary-color dark:text-white-color absolute right-0 top-[-30px] tracking-[2px]">
                            {skill.percent}%
                          </div>
                          <div className="item_bar h-1 rounded-full bg-dark-color dark:bg-white-color-3 w-full relative z-0">
                            <div
                              className="progress h-full rounded-full bg-primary-color dark:bg-white-color absolute left-0 top-0 z-1"
                              style={{ width: `${skill.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Skills2;
