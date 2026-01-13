"use client";

import FlipCard from "@/components/ui/FlipCard";
import { url } from "inspector";

export default function projects() {
  return (
    <div className="w-full h-[80vh] flex justify-around items-center">
      <FlipCard
        title="Task Calendar"
        description="A high-performance productivity tool for tracking assignments and deadlines. 
        Engineered with Vue and Pinia for centralized state management, supported by a TypeScript/Express backend and a PostgreSQL database for secure, persistent data storage"
        logos={[
          "/images/logos/vue-svgrepo-com.png",
          "/images/logos/vuetify.png",
          "images/logos/pinia-logo.png",
          "/images/logos/express-js.png",
          "/images/logos/typescript.png",
          "/images/logos/postgresql.png",
        ]}
        background="/images/backgrounds/calendar.png"
        siteUrl="https://calendar.pointw.com/"
        textColor="text-white"
        repoUrls={[{type: 'Front End',  url: "https://github.com/Jaysandjay/Calendar"}, {type: "Back End", url: "https://github.com/Jaysandjay/Calendar-Service"}]}
      />

      <FlipCard
        title="Type Defender"
        siteUrl="https://bossclaw.github.io/cpan-113-group-proj/"
        background="/images/backgrounds/typeDefender.png"
        textColor="text-white"
        description="Type Defender is a retro-style typing game where you stop digital threats by typing 
        real programming keywords. Improve your coding fluency, boost your typing speed, and save the 
        world—one keystroke at a time. This project was developed as part of a school assignment in collaboration with two fellow students using vanilla JavaScript."
        logos={["/images/logos/vanillaJS.png"]}
        repoUrls={[{type: "Repo", url: "https://github.com/BossClaw/cpan-113-group-proj"}]}
      />

      <FlipCard
        title="School Management"
        //TBD
        siteUrl=""
        backgroundColor=" bg-linear-to-b from-blue-600 to-blue-100"
        textColor="text-white"
        description="An administrative platform engineered to manage complex relational data structures for educational institutions. 
        It features a responsive React interface and a TypeScript and Express backend, 
        utilizing a PostgreSQL database to maintain data integrity across Students, Teachers, Classes, and Guardians with full CRUD functionality."
        logos={[
          "/images/logos/react.png",
          "images/logos/tailwind.png",
          "/images/logos/express-js.png",
          "/images/logos/typescript.png",
          "/images/logos/postgresql.png",
          "/images/logos/tanstack.png",
        ]}
        repoUrls={[{type: 'Front End',  url: "https://github.com/Jaysandjay/school-management-app"}, {type: "Back End", url: "https://github.com/Jaysandjay/school-management-server"}]}
      />
    
    </div>

    
  );
}
