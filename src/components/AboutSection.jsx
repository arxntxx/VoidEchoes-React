import { Card, CardContent } from "../components/ui/card";

export default function AboutSection() {
  const aboutCards = [
    { id: 1, className: "h-[300px]" },
    { id: 2, className: "h-[300px]" },
    { id: 3, className: "h-[350px]" },
    { id: 4, className: "h-[350px]" },
  ];

  return (
    <section id="about" className="w-full max-w-[1150px] mx-auto mt-32 px-4">
      <div className="mb-12">
        <h2 className="text-[#5a878e] text-[36px] tracking-[3.6px] font-['Poppins-Regular',Helvetica] font-normal">
          ABOUT
        </h2>
        <p className="mt-4 text-[#5a878e] text-xl tracking-wide font-['Poppins-Regular',Helvetica] font-normal max-w-[640px]">
        Elior, a child who wakes up inside a ruined space station with no memory of how they got there. 
        The station is shrouded in a mysterious fog, 
        and the only sounds are the echoes of old recordings, ghostly murmurs, and digital distortions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutCards.map((card) => (
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



