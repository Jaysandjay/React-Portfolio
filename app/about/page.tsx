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
      <div className="mx-auto max-w-[90vw] h-fit shadow-lg rounded-lg overflow-hidden p-3 bg-white mt-10">
        <p>
          Hello! My name is Jasmine Sanders, and I am an aspiring software
          developer. I am 29 years old and have 5 years of experience in the
          trades, which has given me a strong foundation in problem-solving and
          practical thinking. I am currently studying computer programming at
          Humber College and have experience with Python, JavaScript, and Java.
          I enjoy tackling challenges creatively, learning new technologies, and
          am eager to expand my knowledge and experience in all aspects of
          software development.
        </p>
      </div>
      {/* <div className="flex justify-center w-screen">
        <IconCard1 />
      </div> */}
    </div>
  );
}
