import { Card, CardContent } from "../components/ui/card";

<Card className="rounded-[39px] bg-gradient-to-b from-black to-[#1f393f]">
  <CardContent>

  </CardContent>
</Card>


export default function CharactersSection() {
  const characterCards = [
    { id: 1, className: "h-[300px]" },
    { id: 2, className: "h-[300px]" },
    { id: 3, className: "h-[300px]" },
  ];

  return (
    <section id="characters" className="w-full max-w-[1500px] sh-[1000px] mx-auto mt-32 px-4">
      <h2 className="text-[#5a878e] text-[40px] tracking-[4px] font-['Poppins-Regular',Helvetica] font-normal mb-8">
        CHARACTERS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characterCards.map((card) => (
          <Card
            key={card.id}
            className={`${card.className} rounded-[39px] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(31,57,63,1)_100%)]`}
          >
            <CardContent className="p-0" />
          </Card>
        ))}
      </div>
    </section>
  );
}


