"use client";

import FlipCard from "@/components/ui/FlipCard";
import { url } from "inspector";

export default function projects() {
  return (
    <div className="w-full h-[80vh] flex justify-around items-center">
      <FlipCard
        title="Task Calendar"
        description="A school calendar to keep track of assignments and due dates. I made this personal project to
            help me stay orgainized. The front end was created with Vue using Pinia for state management. The backend
            uses Express JS to connect to a SQL database. I hosted this application using AWS."
        logos={[
          "/images/logos/vue-svgrepo-com.png",
          "images/logos/pinia-logo.png",
          "/images/logos/express-js.png",
          "/images/logos/typescript.png",
          "/images/logos/postgresql.png",
        ]}
        background="/images/backgrounds/calendar.png"
        // TBD
        siteUrl=""
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
        world—one keystroke at a time. This project was developed as part of a school assignment in collaboration with two fellow students"
        logos={["/images/logos/vanillaJS.png"]}
        repoUrls={[{type: "Repo", url: "https://github.com/BossClaw/cpan-113-group-proj"}]}
      />
    </div>
  );``
}
