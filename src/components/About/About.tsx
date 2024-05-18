import { ABOUT_SECTION } from '@/data/portfolio';
import React from 'react';
import 'animate.css';

const About = () => {
  return (
    <section id="about" className="flex justify-center relative my-20 z-10 px-4 md:px-0">
      <div className="max-w-3xl flex flex-col justify-center items-center">
        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <p className="font-bold text-center text-4xl md:text-5xl lg:text-6xl leading-snug tracking-wide dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent">
            {ABOUT_SECTION.displayText}
          </p>
        </div>
        <div className="animate__animated animate__fadeIn mt-10">
          <p className="text-xl md:text-2xl lg:text-3xl text-center mb-5">
            Hey, I'm <span className="font-bold dark:bg-gradient-to-r from-[#1E2A94] to-[#999999] dark:bg-clip-text dark:text-transparent">{ABOUT_SECTION.name}</span> {ABOUT_SECTION.greeting}
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-center mb-10">
            I'm a {ABOUT_SECTION.title}.
          </p>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <p className="text-lg md:text-xl lg:text-2xl text-center px-2 mb-10 leading-relaxed dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent">
            {ABOUT_SECTION.description}
          </p>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-lg md:text-xl lg:text-2xl text-center px-2 mb-10 leading-relaxed dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent">
            {ABOUT_SECTION.about}
          </p>
        </div>
        <div className="animate__animated animate__fadeIn animate__delay-3s">
          <p className="text-lg md:text-xl lg:text-2xl text-center px-2 mb-10 leading-relaxed dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent">
            {ABOUT_SECTION.about_second}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
