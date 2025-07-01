import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-3xl mb-5">Hi, I'm Jheus.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-4xl tracking-tighter mb-10 font-bold heroShinyBg">
          A recent IT <span className="heroShiny1 text-fun-pink"></span>graduate and{" "}
          <span className="heroShiny2 text-fun-pink">Front-end Developer</span>.
          <br/>
          <div className="text-xl sm:text-5xl">
           I specialize in <span className="heroShiny1 text-fun-pink">designing</span> and{" "}
          <span className="heroShiny2 text-fun-pink">building</span> responsive interfaces.
          </div>
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-120px] sm:right-[120px] opacity-40"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/javascript.svg"
          />
          <img
            className="sqD bottom-[-150px] -right-1/4 sm:right-[-20%] lg:bottom-[-150px] lg:right-[100px] w-16 opacity-40"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/css.svg"
            alt="CSS doodle"
           />
          <img
            className="sqD bottom-[-150px] -right-1/4 sm:right-[-20%] lg:bottom-[-200px] lg:right-[-150px] w-16 opacity-40"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/tailwind.svg"
            alt="CSS doodle"
           />

          <img
            className="sqD hidden sm:block w-16 bottom-[50px] left-[-100px] sm:right-[-20%] opacity-30" 
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/php.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] w-16 lg:left-[120px] bottom-[-150px] opacity-30"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/python.svg"
          />
            <img
            className="sqD hidden sm:block left-[100px] w-16 lg:left-[-160px] bottom-[-200px] opacity-30"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/github.svg"
          />
          <img
            className="sqD bottom-[-270px] w-16 right-[100%] sm:right-[45%] opacity-30"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/bootstrap.svg"
          />
          <img
            className="sqD right-[-30px] lg:right-[-100px] w-16 sm:top-[20px] lg:[3%] opacity-40"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/react.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] w-16 sm:bottom-[190px] sm:left-100 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/figma.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore1"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
