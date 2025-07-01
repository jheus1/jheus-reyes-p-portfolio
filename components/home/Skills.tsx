import React, { useState, useEffect } from "react";
import { skills } from "@/data/content/home";
import SectionTitle from "../global/SectionTitle";

function Skills() {
  const initialVisible = 6;
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [isMobile, setIsMobile] = useState(false);
  const [showingAll, setShowingAll] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset when resizing from desktop to mobile
      if (mobile) {
        setVisibleCount(showingAll ? skills.length : initialVisible);
      } else {
        setVisibleCount(skills.length);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [showingAll]);

  const toggleShow = () => {
    if (showingAll) {
      setVisibleCount(initialVisible);
      setShowingAll(false);
    } else {
      setVisibleCount(skills.length);
      setShowingAll(true);
    }
  };

  const visibleSkills = isMobile ? skills.slice(0, visibleCount) : skills;

  return (
    <section className="relative py-5 px-5 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="relative mb-10 text-center md:text-left">
          <SectionTitle title="What I Code With"/>
               
          {/* Decorative Icons */}
          <img
            src="/static/doodles/skills/laptop.svg"
            alt="Laptop"
            className="sqD absolute -bottom-10 left-0 w-25 opacity-40 z-[-1]"
          />
          <img
            src="/static/doodles/skills/coding.svg"
            alt="Coding"
            className="sqD hidden md:block absolute -top-10 right-0 w-16"
          />
          {/* <img
            src="/static/doodles/skills/banner-right.svg.svg"
            alt="YouTube"
            className="sqD hidden md:block absolute top-[60px] right-10 w-10"
          /> */}
          {/* <img
            src="/static/doodles/skills/fillStar.svg"
            alt="Star"
            className="sqD absolute -top-4 right-6 w-5"
          /> */}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              title={skill.title}
              className="group backdrop-blur-md bg-white/3 border border-white/3 hover:border-white/20 shadow-inner hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                style={skill.style}
                className="w-10 h-10 mb-3 group-hover:brightness-125 transition duration-300"
              />
              <p className="text-sm font-semibold text-white opacity-80 group-hover:opacity-100 transition duration-300">
                {skill.title}
              </p>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {isMobile && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={toggleShow}
              className="mt-8 max-w-sm border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
            >
              {showingAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
