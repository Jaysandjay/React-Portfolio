"use client";
import IconCard1 from "@/components/about/IconCard1";
import IconCard2 from "@/components/about/IconCard2";

export default function About() {
  return (
    <div className="flex flex-col items-center mt-10 px-4 md:px-0">
      
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-7xl gap-6">
        <IconCard1 />

        <img
          src="/images/profile_pic.jpg"
          alt="Profile Picture"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover"
        />

        <IconCard2 />
      </div>

     
      <div className="mx-auto mt-10 mb-5 w-full max-w-400 bg-white shadow-lg rounded-lg p-6 sm:px-8 px-4">
        <p className="text-base md:text-lg leading-relaxed font-sans">
          Hi, I am Jasmine Sanders, a student in the Computer Programming program at Humber College graduating in April 2026. 
          With five years of experience in the trades, I bring a unique perspective to software development by combining a disciplined and hands-on approach to problem solving with a passion for building efficient digital systems. 
          I thrive on tackling complex technical challenges and am constantly expanding my expertise to build reliable software solutions. 
          I enjoy learning new technologies and am eager to apply my troubleshooting skills and practical thinking to any area of the development process.
        </p>

     
        <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-6 text-sm">
          <div className="flex flex-col md:flex-row gap-1">
            <span className="font-bold">Languages:</span>
            <span className="ml-1">["JavaScript", "Java", "Python"]</span>
          </div>

          <div className="flex flex-col md:flex-row gap-1">
            <span className="font-bold">Frameworks/Libraries:</span>
            <span className="ml-1">["React", "Vue", "Express", "Django"]</span>
          </div>

          <div className="flex flex-col md:flex-row gap-1">
            <span className="font-bold">Databases/ODMs:</span>
            <span className="ml-1">["PostgreSQL", "Mongoose"]</span>
          </div>
        </div>
      </div>

        <div className="mx-auto mb-2 w-full max-w-[90rem] flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://drive.google.com/file/d/your_resume_link/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition font-medium text-center"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}
