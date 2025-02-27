import React from 'react';
//import EventConclusion from '@/components/sub-component/event-conclusion';
import EventIntro from '@/components/sub-component/event-intro';
import ManagerCard from '@/components/sub-component/manager-card'; // Ensure this is the correct path

const page = () => {
  return (
    <div className="">
      <EventIntro
        imageUrl=""
        title="Among-us" // Updated title
        registrations={300}
        pricepool={89000}
        time='8 am'
        venue='MP hall'
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
              Group Stage + Knockout (Fast & Fair)<br/><br/>
             🕒Duration: 3 Rounds<br/><br/>

              ✅Round 1: Group Stage
             Teams are divided into groups of 4.
             Each group plays one match (10 players: 2 teams in each match).
              Top 2 teams from each group (highest wins/points) advance.<br/><br/>

              ✅Round 2: Semi-Finals
             Winning teams from Round 1 face off in 2 semi-final matches.
             Top 2 teams (winners of each match) advance to the finals.<br/><br/>

             ✅Round 3: Grand Finale
             The final 2 teams play the last match to determine the champion.



              </p>
            </div>
          </section>
          <section className="mb-20">
            <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
            EVALUATION PROCESS:-  
            </h2>
            <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <p className="text-2xl uppercase tracking-[6.72px]">
              Impostor Team Points:
Each successful elimination: +10 points
Winning the match (if impostors eliminate enough crewmates): +20 points
Each impostor surviving till the end: +5 points
Fooling crewmates in meetings (if no impostor is voted out in a meeting): +5 points<br/><br/>

  Crewmate Team Points:
Each completed task: +5 points per task
Winning the match (if all tasks are completed or impostors are ejected): +20 points
Successfully voting out an impostor: +10 points
Each crewmate surviving till the end: +5 points<br/><br/>




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
            🥇Winner (1st Place Team): ₹5,000<br/><br/>
            🥈Runner-Up (2nd Place Team): ₹3,000<br/><br/>
            🥉3rd Place Team: ₹2,000<br/><br/>
            🏅Special Awards: ₹1000 (Best Impostor, Best Crewmate, or Survivor Award)
          </p>
          
          </div>
        </div><br/><br/>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          VENUE: Open Theatre 
          </div><br/><br/>
          <div className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">

          Day 1:- round 1 & round 2<br/><br/>
          Day 2:-  remaining round 2 semifinal & final

          </div>
        </div>
      </div><br/>

      {/* Event Managers */}
      <div className="text-center text-[#ffad3c] text-5xl font-medium uppercase">
        EVENT MANAGERS
      </div><br/>
      <div className="text-center text-white text-2xl font-normal">
        For any queries regarding the event, feel free to reach out to any of the managers listed below.
      </div>

      {/* Manager Images */}
      <div className="flex justify-center space-x-4 mt-6">
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
        <img src="/Group 37147.png" alt="profile" />
      </div>
      </div>

  );
};

export default page;