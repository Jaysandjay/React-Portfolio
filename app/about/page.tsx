"use client";
import IconCard1 from "@/components/about/IconCard1";
import IconCard2 from "@/components/about/IconCard2";

export default function about() {
  return (
    <div className="flex flex-col items-center mt-15 ">
        <div className="flex justify-around w-screen">
        <IconCard1/>
            <img 
            src="/images/profile_pic.jpg"
            className="h-50 rounded-full object-cover"
            />
            <IconCard2/>
        </div>
      <div className="mx-auto max-w-[98vw] h-fit shadow-lg rounded-lg overflow-hidden p-3 bg-white mt-10">
        <p>
          Hi, I’m Jasmine Sanders, a student in the Computer Programming program at Humber College graduating in April 2026. 
          With five years of experience in the trades, I bring a unique perspective to software development by combining a disciplined and hands
           on approach to problem solving with a passion for building efficient digital systems. I thrive on tackling complex technical challenges 
           and am constantly expanding my expertise to build reliable software solutions. 
          I enjoy learning new technologies and am eager to apply my troubleshooting skills and practical thinking to any area of the development process.
        </p>
        <div className="flex text-sm justify-center mt-5">
          <div className="flex ">
            <h1 className="font-bold">[<span className="font-normal">{"{"}</span>Languages:</h1>
              <p>["JavaScript","Java","Python]{"},{"}</p>
          </div>
          <div className="flex">
            <h1 className="font-bold">Frameworks/Libraries:</h1>
              <p>["React","Vue","Express","Django"]{"},{"}</p>
          </div>
          <div className="flex">
            <h1 className="font-bold">Databases/ODMs:</h1>
              <p>["PostgreSQL","Mongoose"]{"}"}<span className="font-bold">]</span></p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center w-screen">
        <IconCard1 />
      </div> */}
    </div>
  );
}
