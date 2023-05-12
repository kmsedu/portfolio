import { CardProps } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function Card({
  imageUrl,
  name,
  description,
  sourceUrl,
  liveUrl,
}: CardProps) {
  return (
    <figure className="flex flex-col bg-white text-[#272727] hover:scale-[101%] transition-transform duration-500">
      <h3 className="font-title text-xl p-2 pt-4 bg-[#024d78] text-white shadow-sm shadow-gray-700 relative z-10">
        {name}
      </h3>
      <img
        src={imageUrl}
        alt={name}
        className="object-cover object-left-top relative max-h-[200px] flex border-b border-gray-300"
      />
      <div className="flex flex-col justify-between flex-1">
        <figcaption className="flex-1">
          <p className="font-body p-6 leading-8 text-s text-gray-600">
            {description}
          </p>
        </figcaption>
        <menu className="flex justify-evenly flex-1 items-end mb-4 text-3xl text-gray-600">
          <a
            href={liveUrl}
            target="_blank"
            className="hover:text-gray-800 transition-colors duration-500"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            className="hover:text-gray-800 transition-colors duration-500"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </menu>
      </div>
    </figure>
  );
}
