import React from 'react'
import bgImage from '../assets/img.jfif';

export default function About() {
  return (
    <> <br /><br /><br />
    <section className="relative h-[500px]  max-w-8xl mx-auto overflow-hidden">
  <div
   style={{
    backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.6), rgba(0,0,0,0)), url(${bgImage})`,
  }}
  className="absolute inset-0 bg-cover bg-top opacity-90 brightness-45 z-0"/>

  <div className="relative z-10 h-full flex items-center justify-end pr-10">
    <h2 className="text-white text-4xl font-bold drop-shadow-xl">
      SIVARAMAN S <br /><p className='text-lg text-center'>Full Stack Developer</p>
    </h2>
  </div>
</section>
    <div id='about' className=" flex flex-col md:flex-row items-center gap-6 w-full max-w-6xl lg:mx-auto pt-20">

  <div className="text-gray-800 max-w-md max-auto">
    <h2 className="text-2xl font-bold mb-2 text-gray-700">About</h2>
    <p className="text-lg lg:w-270 sm:mx-auto leading-relaxed text-gray-500">
    Highly skilled Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) and proficiency in HTML, CSS, JS and Tailwind CSS. Proficient in API testing with Postman and version control with GitHub. Recent Master's degree graduate (2025) with a strong foundation in software development, ready to leverage technical skills to drive innovative solutions and deliver high-quality applications.
    </p>
  </div>
</div>
    </>
  )
}
