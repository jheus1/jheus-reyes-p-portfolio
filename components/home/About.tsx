import React from "react";
import Image from "next/image";
import useInView from "../hooks/useInView";

function About() {
const [ref, inView] = useInView(); // JavaScript or TypeScript-compatible now
// ✅ Removed generic

  return (
    <div
      ref={ref}
      className="flex flex-col pt-3 relative px-6 sm:top-[100px]"
    >
      {/* Section Title */}
      <div id="learnmore1" className="mb-10">
        <h2 className="text-3xl font-bold pt-5 mb-3">About Me</h2>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column: About Text */}
        <div
          className={`transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}
        >
          <p className="text-fun-gray-light text-2xl leading-relaxed">
            I’m Jheus, a recent Information Technology graduate from NEUST – San Isidro Campus. I specialize in front-end development and have experience building responsive, user-centered web applications.
          </p>
          <p className="text-fun-gray-light text-2xl mt-4 leading-relaxed">
            I’m passionate about clean design, functional layouts, and solving real-world problems with technology. I enjoy working with HTML, CSS, JavaScript, ReactJS, PHP, and Figma to bring ideas to life.
          </p>
        </div>

        {/* Right Column: Image + SVGs beneath it */}
        <div
          className={`flex justify-center md:justify-end transition-all duration-1000 ease-in-out transform ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative w-[500px] h-[500px]">
            {/* SVGs beneath the image */}
            <img
              className="absolute top-[10px] left-[300px] w-[90px] opacity-90 z-[-1]"
              src="/static/doodles/hero/html.svg"
              alt="HTML"
            />
            <img
              className="absolute top-[180px] left-[75px] w-[90px] opacity-90 z-[-1]"
              src="/static/doodles/hero/js.svg"
              alt="JavaScript"
            />
            <img
              className="absolute top-[200px] right-[40px] w-[90px] opacity-40 z-[-1]"
              src="/static/doodles/hero/code.svg"
              alt="Code"
            />

            {/* Profile image above */}
            <Image
              src="/jheus-profile.png"
              alt="Jheus profile photo"
              width={500}
              height={500}
              className="relative z-[1] rounded-xl object-cover shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_80px_rgba(0,0,0,0.8)] transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
