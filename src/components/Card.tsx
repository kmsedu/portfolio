import { CardProps } from "../types";

export function Card({
  imageUrl,
  name,
  description,
  sourceUrl,
  liveUrl,
}: CardProps) {
  return (
    <figure>
      <img src={imageUrl} alt={name} className="max-w-[300px]" />
      <p>{name}</p>
      <p>{description}</p>
      <p>{sourceUrl}</p>
      <p>{liveUrl}</p>
    </figure>
  );
}
