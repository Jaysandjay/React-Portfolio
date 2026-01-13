"use client";

import { useState } from "react";

interface RepoUrl {
    type: string,
    url: string
}

interface FlipCardProps {
  title: string;
  description: string;
  background?: string,
  logos?: string[];
  siteUrl: string;
  repoUrls?: RepoUrl[]
  textColor?: string,
  backgroundColor?: string
}

export default function FlipCard({
  title,
  description,
  background,
  logos = [],
  siteUrl,
  repoUrls = [],
  textColor,
  backgroundColor="bg-white"
}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-80 h-115 perspective group">
    <div
      className="w-80 h-115 perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`group-hover:rotate-y-180 relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div 
        className={`${backgroundColor} bg-center bg-cover absolute inset-0 rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden`}
        style={{ backgroundImage: background ? `url(${background})` : undefined }}
        >
        
          <h2 className={`${textColor && textColor} text-3xl font-bold mb-4`}>{title}</h2>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 bg-gray-700 text-white rounded-xl shadow-lg p-5 backface-hidden rotate-y-180 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>

          <div className="w-full flex justify-center">
            <a href={siteUrl}>
                <button  className="px-4 py-2 bg-blue-700 text-white rounded-md cursor-pointer">View Deployment</button>
            </a>
          </div>

          {logos.length > 0 && (
            <div className="flex justify-center gap-3 my-3">
              {logos.map((logo, i) => (
                <img key={i} src={logo} className="w-8 h-8 object-contain" />
              ))}
            </div>
          )}

          {repoUrls.length > 0 && (
            <div className="flex justify-between">
                {repoUrls.map((repo, i) => (
                    <a key={i} href={repo.url}>
                        <button className="px-4 py-2 bg-blue-900 text-white min-w-30 rounded-md cursor-pointer">
                            {repo.type}
                        </button>
                    </a>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
