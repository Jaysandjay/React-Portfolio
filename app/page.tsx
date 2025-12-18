"use client"

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const typed = new Typed(ref.current!, {
      strings: ["Jasmine Sanders"],
      loop: true,
      typeSpeed: 80,
      backSpeed: 50
    })
    return () => typed.destroy()
  }, [])
  return (
    <div>
      <div className=" flex flex-col justify-center fixed inset-0 -z-10 items-center">
        <div className="text-7xl">
          <span ref={ref}/>
        </div>
        <div className="text-2xl w-full flex justify-center mt-5">
          <p>Computer Programming Student</p>
        </div>
      </div>
    </div>
  );
}
