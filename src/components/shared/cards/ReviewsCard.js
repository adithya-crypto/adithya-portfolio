"use client";

import { useEffect } from "react";

const skills = [
  { name: "Python", src: "/img/icons/python.png" },
  { name: "SQL", src: "/img/icons/sql.png" },
  { name: "React", src: "/img/icons/react.png" },
  { name: "Java", src: "/img/icons/java.png" },
];

const ReviewsCard = () => {
  useEffect(() => {
    const fillRatingsSpan = document.querySelector(".fill-ratings span");
    if (fillRatingsSpan) {
      const starRatingWidth = fillRatingsSpan.offsetWidth;
      const starRatings = document.querySelector(".star-ratings");
      if (starRatings) {
        starRatings.style.width = `${starRatingWidth}px`;
      }
    }
  }, []);

  return (
    <div className="tj-hero-4-bottom-reviews px-27px py-30px sm:px-30px lg:px-4 xl:px-30px rounded-15px bg-cream-light-color dark:bg-transparent border border-border-color dark:border-primary-color relative lg:absolute left-0 top-0 lg:top-[118px] xl:left-[-30px]">
      <div className="pb-3 mb-22px border-b border-border-color dark:border-primary-color">
        <p className="text-base sm:text-xl lg:text-base xl:text-xl font-semibold text-seondary-color dark:text-white-color mb-4 leading-1.5">
          Core Technologies
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-4 gap-3 justify-items-center items-center mb-5">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center text-center">
            <img
              src={skill.src}
              alt={skill.name}
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain mb-1"
            />
            <p className="text-xs sm:text-sm text-seondary-color dark:text-white-color">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Star Rating */}
      <div className="text-center">
        <div className="star-ratings relative inline-block text-xl tracking-[4px] leading-none text-transparent stroke-[1px] drop-shadow-[1px_1px_0_var(--tj-theme-primary)] stroke-primary-color mb-2">
          <div
            className="fill-ratings absolute top-0 left-0 z-1 overflow-hidden text-primary-color"
            style={{ width: "95%" }}
          >
            <span className="inline-block">★★★★★</span>
          </div>
          <div className="empty-ratings block z-0 text-black-color dark:text-white-color">
            <span className="inline-block">★★★★★</span>
          </div>
        </div>
        <p className="text-seondary-color dark:text-white-color text-sm sm:text-base mt-1">
          Trusted Tech Toolkit
        </p>
      </div>
    </div>
  );
};

export default ReviewsCard;
