import React from "react";
import EventIntro from "@/components/sub-component/event-intro";// Ensure this is the correct path
import EventManagers from "@/components/sub-component/event-managers";

const page = () => {
  const managers = [
    { imageUrl: "/dallE.png", name: "Priyanshu Dash", contact: 9078942095 },
    { imageUrl: "/dallE.png", name: "Shomya Sinha", contact: 7091799799 },
    { imageUrl: "/dallE.png", name: "Mayank Sharma", contact: 7024189586 },
  ];
  
  return (
    <div className="">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <img
          src="/background.svg"
          className="w-full h-auto opacity-150"
          alt="Scrolling Background"
        />
      </div>
      <EventIntro
        imageUrl="/techno-events-logo/amongus.png"
        title="Among-us" // Updated title
        registrations={0}
        pricepool={12000}
        time="21-03-25 , 3:00 pm"
        venue="Open Theatre"
        description="Among Us – Real Life Edition is a thrilling strategy-based event where teams of 5 players compete in real-world gameplay. Each round features two teams (10 players total), with Crewmates completing tasks while Impostors secretly eliminate them. Players hold emergency meetings to discuss suspicions and vote out potential Impostors. The winning team is determined based on task completion, eliminations, or a points-based system. The best teams will advance to the next rounds, leading to a final showdown to crown the champion."
      />

      <div className="flex flex-col items-center justify-center">
        <div className="bg-transparent text-white p-6 md:p-12">
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14">
              NUMBER OF ROUNDS:-
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="text-2xl uppercase tracking-[6.72px]">
                Group Stage + Knockout (Fast & Fair)
                <br />
                <br />
                🕒Duration: 3 Rounds
                <br />
                <br />
                ✅Round 1: Group Stage Teams are divided into groups of 4. Each
                group plays one match (10 players: 2 teams in each match). Top 2
                teams from each group (highest wins/points) advance.
                <br />
                <br />
                ✅Round 2: Semi-Finals Winning teams from Round 1 face off in 2
                semi-final matches. Top 2 teams (winners of each match) advance
                to the finals.
                <br />
                <br />
                ✅Round 3: Grand Finale The final 2 teams play the last match to
                determine the champion.
              </p>
            </div>
          </section>
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
              EVALUATION PROCESS:-
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="text-2xl  tracking-[6.72px]">
                <strong className="text-yellow-400 uppercase">
                  Impostor Team Points:{" "}
                </strong>
                <br />
                <br />
                Each successful elimination: +10 points
                <br />
                <br />
                Winning the match (if impostors eliminate enough crewmates):+20
                points <br />
                <br />
                Each impostor surviving till the end: +5 points
                <br />
                <br />
                Fooling crewmates in meetings (if no impostor is voted out in a
                meeting): +5 points
                <br />
                <br />
                <strong className="text-yellow-400 uppercase">
                  Crewmate Team Points:
                </strong>
                <br />
                <br />
                Each completed task: +5 points per task
                <br />
                <br />
                Winning the match (if all tasks are completed or impostors are
                ejected): +20 points
                <br />
                <br />
                Successfully voting out an impostor: +10 points
                <br />
                <br />
                Each crewmate surviving till the end: +5 points
                <br />
                <br />
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            PRIZE MONEY:-
          </div>
          <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
            <p className="text-2xl uppercase tracking-[6.72px] text-white">
              🥇Winner (1st Place Team): ₹5,000
              <br />
              <br />
              🥈Runner-Up (2nd Place Team): ₹3,000
              <br />
              <br />
              🥉3rd Place Team: ₹2,000
              <br />
              <br />
              <div>
                
              </div>
              🏅Special Awards: ₹1000 (Best Impostor, Best Crewmate, or Survivor
              Award)
            </p>
          </div>
        </div>
        <br />
        <br />

        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            VENUE: Open Theatre
          </div>
          <br />
          <br />
          <div className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            Day 1:- round 1 & round 2<br />
            <br />
            Day 2:- remaining round 2 semifinal & final
          </div>
        </div>
      </div>
      <br />

      {/* Event Managers */}
      <EventManagers managers={managers}/>
      
    </div>
  );
};

export default page;
