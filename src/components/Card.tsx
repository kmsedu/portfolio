import { CardProps } from "../types";

export function Card({
  imageUrl,
  name,
  description,
  sourceUrl,
  liveUrl,
}: CardProps) {
  return (
    <figure className="flex flex-col border border-red-500 bg-white">
      <h3>{name}</h3>
      <img
        src={imageUrl}
        alt={name}
        className="object-cover object-top relative max-h-[200px] flex"
      />
      <figcaption>
        <p>{description}</p>
      </figcaption>
      <menu className="flex justify-evenly">
        <p>{sourceUrl}</p>
        <p>{liveUrl}</p>
      </menu>
    </figure>
  );
}
