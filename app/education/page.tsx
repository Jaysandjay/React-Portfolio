"use client";
import CompletedCourses from "@/components/education/CompletedCourses";
import InProgressCourses from "@/components/education/InProgressCourses";
import PastEducationCard from "@/components/education/PastEducationCard";

export default function education() {
  return (
    <div>
      <div className="flex w-screen justify-around my-5 ">
        <p><b>College:</b> Humber Polytechnic</p>
        <p><b>Program:</b> Computer Programming</p>
        <p><b>Credential:</b> Diploma</p>
        <p><b>GPA:</b> 4.0</p>
        <p><b>Graduation Date:</b> April 28 2026 </p>
      </div>
     <CompletedCourses/>
     <InProgressCourses/>
     <PastEducationCard/>

    </div>
  );
}
