import { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface cardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  image?: string;
  imageHeight?: string;
  listDetails?: string[];
  color?: string;
}

export default function DropdownCard({
  title,
  description,
  children,
  image,
  imageHeight,
  listDetails,
  color,
}: cardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`mx-auto max-w-[90vw] h-50 ${
        color ? color : "bg-white"
      } shadow-lg rounded-lg overflow-hidden h-fit p-5 m-5`}
    >
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {image && (
          <img
            className={`${imageHeight ? imageHeight : "h-15"} mb-5`}
            src={image}
          />
        )}

        <div className="flex">
          <h4 className="mb-2 text-xl font-semibold tracking-tight text-gray-800">
            {title}
          </h4>

          <FiChevronDown
            className={`ml-4 text-gray-600 transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            size={24}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-200 ease-in-out overflow-auto ${
          isOpen ? "max-h-150 mt-4" : "max-h-0"
        }`}
      >
        {children ? (
          children
        ) : (
          <div>
            {listDetails && (
              <ul className="mb-5">
                {listDetails.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
