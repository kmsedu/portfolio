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
  return (
    <section className="p-8 bg-[#272727]">
      <h2 className="font-title text-2xl text-white">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] mt-6">
        {catCards}
      </div>
    </section>
  );
}
