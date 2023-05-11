import cats from "../data/projects.json";
import { Card } from "../components/Card";

export function Projects() {
  const catCards = cats.map((cat) => {
    return (
      <Card
        imageUrl={cat.imageUrl}
        name={cat.name}
        description={cat.description}
        sourceUrl={cat.sourceUrl}
        liveUrl={cat.liveUrl}
        key={cat.id}
      />
    );
  });
  return <section>{catCards}</section>;
}
