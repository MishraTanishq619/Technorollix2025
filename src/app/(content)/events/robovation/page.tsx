import ButtonLanding from '@/components/sub-component/button-landing'
import EventIntro from '@/components/sub-component/event-intro'
import ManagerCard from '@/components/sub-component/manager-card'
import SubEventCard from '@/components/sub-component/sub-event-card'
import React from 'react'

const page = () => {
  return (
    <div>
      <EventIntro
        imageUrl="/antaragni.png"
        title="Robovation"
        registrations={346}
        pricepool={30000}
        description="OPJU invites you to an extraordinary culinary battleground, where flavors meet creativity and passion transforms into perfection. Step into MasterChef and let the world savor your signature taste!."
      />
       <div className="mt-16 mb-16"></div>
<h1 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          SUB EVENTS
        </h1>
        <p className="text-2xl font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white text-center max-w-4xl mx-auto">
        Robovation features three exciting sub-events. Robo Race tests speed and precision as robots navigate an obstacle-filled track. Robo Soccer challenges teams to score goals using their self-built bots. Robo War is a fierce battle where combat robots fight to dominate the arena.
        </p>
        <div className="flex justify-around m-20">
        <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="ROBO WAR"
              description="Robo war is the most exciting challenge of this event It celebrates the sport of Robotic Combat through a contest of 
battling machines. This game gives the opportunity to youngsters to design, build and control combat robots to 
demonstrate their creativity, engineering skills and driving ability. 
The most rewarding part of designing bots is that students have fun, and work together as a team."
            />
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="ROBO RACE"
              description="Design a robot wireless or Bluetooth control within the specified dimensions that can be operated 
manually and can travel through all turns of the track. The robot that will complete the specified task in the 
least time will be the winner. and not allowed to skip any obstacles or hurdles."
            />
            </div>
            <div className="flex justify-around m-20">
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="FAST LINE FOLLOWER"
              description="Team to build own autonomous robot within the specified dimensions to achieve the maximum speed on                              
given track and reach the destination in minimum time. The robot must start behind the starting point and is considered to have 
crossed the finishing line if any part of the robot crosses it in a full lap of the course. The robot must follow the black line. The 
competition area has a special place defined for the robot’s operation."
            />
            <SubEventCard
              // imageUrl="./Rectangle 197.png"
              title="ROBO SOCCER"
              description="DESCRIPTION: 
Robo soccer is one of the Famous challenges of robovation in this event teams comes with single 
robot and chase ball around the big size of arena with the aim to kick more goals than the opponent 
these games give opportunity to youngsters to solve robotic challenges, built creative bots while 
learning engineering technology. the most rewarding part of designing bots is that student have fun, 
work together as a team and robot specially design for robo soccer match. the event is aimed at 
testing the flipping, kicking maneuvering skills and control of the robot. The event mainly consists of 
ROUND 1 AND ROUND 2."
            />
            </div>
            <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          WHY TO PARTICIPATE
        </h2>
        <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
          <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px] text-white">
            <li>Showcase Innovation – Demonstrate your creativity and technical skills in robotics. </li>
            <li>Hands-on Learning – Gain practical experience in robot design, automation, and problem-solving.</li>
            <li>Competitive Edge – Test your abilities against top talents in a high-energy environment.</li>
            <li>Time & Number of Rounds: To be intimated later</li>
            <li>Networking Opportunity – Connect with like-minded enthusiasts, mentors, and industry experts.</li>
            <li>Exciting Prizes – Compete for recognition and a grand prize of ₹30,000. </li>
            <li>Real-World Exposure – Enhance your technical expertise and boost your career prospects.</li>
          </ul>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          RULES & REGULATION
        </h2>
        <div className="flex justify-around m-20">
        <SubEventCard
              // imageUrl="/Vector.svg"
              title="ROBO SOCCER"
              description="ROBOT SPECIFICATIONS: - 
• The robot should fit inside a box of 30cm*30cm*20cm. 
• Robot should not exceed 3 kg. 
• The robot can be wireless. 
• The robot should be self-powered with a supply not exceeding 12V (on board power supply). 
• Power supply (only DC) is allowed. Participants cannot draw power from outside main(220v) power 
supply. 
Only one participant should control the robot No player can be exchanged in the match 
NO. OF ROUNDS: 
ROUND 1 (Elimination): 
1 ball is placed at specified locations in the arena and 2 teams are allowed to enter the arena. 
only Selected 1 teams who scored high goals. 
Time limit is 5 minutes. 
Participants can drive, push or hit the ball into any of the goal posts (only two goal posts) 
Points = a number of goals. 
If the ball is hit out of the arena, then it will not be placed back. 
ROUND 2 
• Only one ball will be placed at the center, robots are initially placed at their respective goalposts. 
• Time limit is 5 minutes. 
• 1 no of goals = 5 points. 
• Participants should hit the ball into the opponent’s goal to score points. 
• Each participant can make as many as goals in the limited time. 
• Robot gets negative points (2 points) each time when its intentionally hits the opponent robot. 
• If the ball gets hit out of the arena, then a penalty shot will be given to the opponent team (The 
opponent team will heat the ball from where the ball was hit out of the arena). And the second team will 
defend its goal. Judging criteria for the final winner will be based on the number of goals scored 
and the time is taken.       
EVALUATION PROCESS: 
• Team can have a maximum number of four members. 
• Only one participant should control the robot. No players can be exchanged in the middle of a match. 
• A robot can push or hit the ball. It cannot withhold or grab the ball. 
• Motor should be 200rpm to 300rpm. 
• Human interference (e.g., touching the robot) during the game is not allowed. 
• If there is any technical issue in the robot a technical time-out will be given for 2 minutes. 
• Decisions of the Judges and Event Organizers shall be treated as final and binding on all and cannot be 
contested. 
• The event coordinator is the match referee. He takes all the decisions and participants have to abide by 
it. 
• No more AC/DC power supply will be provided at the sight of play. 
• Coordinators reserve the right to ask for an explanation of the robot. The coordinator can change the 
rules of the game depending on the situation. 
• Rules & Regulations may change without prior notice, by the Event organizers. 
• Positions of balls will be decided by the organizers on the particular day of the event. 
*    The robot is wireless or autonomous 
Prize Money 
Total Price for This Game: ₹10,000 
• First Prize: ₹5000 
• Second prize:₹3000 
• Third Prize:₹2000 
Venue:  BAPUJI CHOWK (OPJU) 
Date & time: 21/03/2025 & 10:00 AM 
"
            />
<SubEventCard
              // imageUrl="/Vector.svg"
              title="ROBO WAR"
              description="The most rewarding part of designing bots is that students have fun, and work together as a team. 
FIELD DIMENSION 
The Battle ring is a fully enclosed 11 feet by 6 feet rectangle raised 1 foot off the 
ground. The Battle Box door is approximately level, Arena is open at the four sides of the corner. 
Match Time Limits 
Unless a Match terminates early, the Match will last for 3 minutes of fighting time. The 
the time limit does not include any time elapsed as a result of Timeouts. 
Early Termination 
A Match can be terminated early by Forfeit, Disqualification, or Incapacitation. Tap 
Outs are not allowed. 
THE BOT 
The team must build and bring one pre-constructed, autonomous or wireless 
robot whose purpose is to push, throw, Filip, hit, drag or otherwise move the opponent out 
of the battle ring within the maximum battle time. The following section details the rules 
and specifications regarding the robot; please be sure to read them carefully 
and refer to them as you design your robot. 
ROBOT SPECIFICATION 
• The robot should fit inside a box of 50cm*50cm*30cm. 
• Robot should not exceed 5 kg. 
• Maximum no of 5 motors is used. 
• The robot is only wireless. 
• The robot should be self-powered with a supply not exceeding 12V (onboard power supply). 
• Power supply (only DC) is allowed. Participants cannot draw power from outside the main(220v) 
power supply. 
• Only one participant should control the robot and No player can be exchanged in the match. 
Duties 
 The captain asks the referee for timeouts if necessary. 
 The bot handler can substitute a bot during match play. 
 The bot handler asks the referee for permission to substitute a bot in the next stoppage and, if the 
referee agree, substitutes the bot. 
RULES AND REGULATIONS: 
• Team can have a maximum number of four members. 
• Only one participant should control the robot and No player can be exchanged in the 
middle of match. 
• A robot can push or hit the opponent and move out of the ring. 
• Motor should be 200rpm to 300rpm. 
• Human interference (e.g., touching the robot) during the game is not allowed. 
• If there is any technical issue in the robot a technical time-out will be given for 2 minutes. 
• Decisions of the Judges and Event Organizers shall be treated as final and binding on all 
and cannot be contested. 
• The event coordinator and manager and others are the match referee. He takes all the 
decisions and participants have to abide by it. 
• No more AC/DC power supply will be provided at the sight of play. 
• Coordinators and managers reserve the right to ask for an explanation of the robot. The 
coordinator and manager can change the rules of the game depending on the situation. 
• Rules & Regulations may change without prior notice, by the Event organizers. 
NO. OF ROUND: 
• THIS WILL CONSIST OF 2 ROUNDS 
• The competition is based on a time system. There will a qualifying round for each team. 
• The top team from qualifying round will make it to the final round on basis of no of times it 
moved out an opponent from the ring. 
EVALUATION PROCESS: -  
1. If any of the robots starts off before start up call, the counter would be restarted and the 
BOT will get a second chance. If repeated again then team will be disqualified. 
2. Your robot must be ready when call is made for your team. 
3. Team members will be allowed only four times to touch or reset their robots position 
during the run. However, this will lead to a time penalty and timer will not stop during 
this course of action. 
4. The robot will be judged on the basis of (in priority): - The Time taken to move out the 
opponent from the ring b) No of times move out opponent from the ring. 
5. Must not contain any readymade kits, pneumatic &hydraulic systems, IC engines. 
6. Decisions about your robot will be taken by the organizers. 
7. No team will get a second chance after completing the game. 
8. The robot is wireless or Autonomous. 
9. Certificates of Participation will be given to all the teams participating in the event, but 
not to the teams that get disqualified due to disobeying any of the competition rules. 
*Co–ordination committee reserves the right to add or update any rule."
            />
            </div>
            <div className="flex justify-around m-20">
<SubEventCard
              // imageUrl="/Vector.svg"
              title="ROBO RACE"
              description="ROBOT SPECIFICATIONS: 
1. The maximum dimension of the robot can be 30cm x 30cm x20 cm (l x b x h). 
2. The robot should be wireless. 
3. Motor rpm specification 200rpm to 300 rpm. 
4. Maximum weight must not exceed 3 kg. 
5. The participants will have to provide a power supply on board (no additional power supply is 
accepted). 
6. The machine must not be made from Lego parts, or any ready-made kit, if we find a such 
machine it will be disqualified. 
7. The robot is wireless or Bluetooth Autonomous. 
BATTERIES & POWER: 
• The bots must be powered electrically only. 
• Batteries must be sealed, immobilized electrolyte type (lithium, NiCad, or dry cells). 
• The electric voltage anywhere in the bot should not be more then 12V DC at any point of time. 
GENERAL RULES:- 
1) This is a racing event so the fastest and most balanced robot will win. 
2) Robot should be as per the given specifications. 
3) Each team can have a maximum of Four members. 
4) Students from different institutes can form a team. 
5) Each member of the team must contain the identity card of his/her respective institute. 
6) The robot should not damage the arena. 
7) No test practice will be allowed in the arena. 
8) The robot must not leave behind any of its parts during the run; else it will result in disqualification. 
9) Unethical behavior could lead to disqualification. Faculty coordinators have all the rights to take 
f
 inal decisions for any matter during the event. and Judge's decision will be considered final. 
10).Certificates of Participation will be given to all the teams participating in the event ,but not to the 
teams that get disqualified due to disobeying any of the competition rules.*Coordination committee 
reserves the right to add or update any rule. 
TRACK SPECIFICATION: 
The length of the Track will be approximately 28 meters. 
SAND AND STONE, RUMBLE STRIPS, WATER SPRINKLERS, SMALL HOLES COVERING ALL SIDES, SWITCH 
BRIDGES, SPEED BREAKERS, SLIPPERY, CONNECTING BRIDGES, AND MANY MORE. 
NO. OF ROUNDS: 
There will Be Two rounds: 
• First Round will be qualifying Round. 
• Second Round will be the Final Round. 
EVALUATION PROCESS: 
1. There will be a qualifying round for each team. 
2. The top team from the qualifying round makes it to the final round on basis of time trials. 
3. If any of the robots start off before start-up call, the counter would be restarted and the machines will 
get a second chance. If repeated again then team will be disqualified. 
4. Your robot must be ready when call is made for your team. 
5. Team members will be allowed only four times to touch or reset their robot’s position during the 
run. However, this will lead to a time penalty and timer will not stop during this course of action. 
6. The robot will be judged on basis of (in priority): - A Time to complete the track. b). The number 
of checkpoints cleared. 
7. Must not contain any readymade kits, pneumatic &hydraulic systems, or IC engines. 
8. Decisions about your robot will be taken by the organizers. 
9. No team will get a second chance after completing the track with a poor score.           
Prize Money:- 
Total Price for This Game: ₹10,000 
• First Prize: ₹5000 
• Second prize:₹3000 
• Third Prize:₹2000 
Venue:  VolleyBall Court (OPJU) 
Date & time: 21/03/2025 & 2:00 PM"
            />
            <SubEventCard
              // imageUrl="/Vector.svg"
              title="FAST LINE FOLLOWER"
              description="ROBOT SPECIFICATIONS: - 
1. The participating bots must be wireless and autonomous. 
2. The maximum dimension of the robot can be 30cm x 30cm x20 cm (l x b x h). 
3. Batteries must be sealed, immobilized electrolyte type (gel cell, lithium, NiCad, or dry cells). 
4. Infrared light-reflecting materials must not be used on the outside. If robots are painted, they must 
be painted matte. Minor parts that reflect infrared light could be used only if other robots are not 
affected. Robots must not produce magnetic interference for other robots on the field. 
5. If a team claims that their robot is affected by the other team’s robot in any way they must 
show proof/evidence of the interference. Any interference must be confirmed by a Referee if a 
claim is placed by the other team. 
6. Robots must be constructed and programmed in a way that their movement is not limited to only 
one direction and must move in all directions. 
7. No wireless communication between the bot and the operator will be allowed. Bluetooth, RF 
Module, etc not allowed on the bot. 
8. Any robotic parts/building material can be used until the robot meets the above specifications and if 
the design and construction are primarily the original work of the team ready-made robots are not 
allowed to compete in the competition. 
TRACK SPECIFICATION: 
 
The Racing arena dimension  2*2sqm. The width of the black line will be 25mm. The surface of the 
track will be white with a black line marked on it. The track may contain crossed, curved, or 
discontinuous black lines. 
 The timing of each run will be measured by an automatic timing system. 
RULES AND REGULATIONS 
1. Team can have a maximum number of four members. 
2. The robot must be autonomous. 
3. Motor should be 200 to 400 RPM. 
4. Any robotic parts/building material can be used until the robot meets the above specifications and 
if the design and construction are primarily the original work of the team, ready-made robots are 
not allowed to compete in the competition. 
5. No more AC/DC power supply will be provided at the sight of play. 
6. Decisions of the Judges and Event Organizers shall be treated as final and binding on 
all and cannot be contested. 
7. The event coordinator manager and others are the match referee. He takes all the 
decisions and participants have to abide by it. 
8. Coordinators and managers reserve the right to ask for an explanation of the robot. The 
coordinator and manager can change the game's rules depending on the situation. 
NO. OF ROUNDS: 
• There will be one round 
• Only 3 participants will be allowed for each round. 
EVALUATION PROCESS:- 
1. Your robot must be ready when the call is made for your team. 
2. The robot will be placed at the starting point with the consent of the referee. The RACE 
CLOCK will start as soon as the robot crosses the starting point and will stop after the 
robot crosses the starting point again. 
3. The bot may restart the run if the person handling it feels the necessity. A restart can be 
requested only if the robot doesn’t follow the line has stopped halfway or has lost the 
directions/Black line. 
4. At any restart, the robot must be re-positioned back at the start point. 
5. The Robot taking the least time to complete the entire track will qualify for the next round. 
6. If no robot completes the track, the winner will be the one that covers the longest 
distance in the shortest time. 
7. It is not allowed to reprogram the robot or to add/remove parts on the robot during the 
run, but adjusting the sensors is permissible with the consent of the referee. 
8. The RACE CLOCK/RUN TIME will reset to zero on every restart. The COMPETITION 
CLOCK (maximum access time) will keep running during all restarts. 
9. If the bot is touched by a human without the consent of the referee,the bot moves out 
of the arena or the referee orders it to restart. 
 
10. Certificate of Participation will be given to all the teams participating in the events, but 
not to the teams that gets disqualified due to disobeying any of the competition rules. 
                 *Coordination committee reserves the right to add or update any rule. 
Prize Money:- 
         Total Price for This Game: ₹10,000 
• First Prize: ₹5000 
• Second prize:₹3000 
• Third Prize:₹2000 
Venue:  BAPUJI CHOWK (OPJU) 
Date & time: 22/03/2025 & 10:00 AM "
            />
          </div>
      </section>
      <section>
      <div className="flex flex-col items-center justify-center" >
        <div className="w-[577.70px] h-[85px] text-center text-[#ffad3c] text-5xl font-medium font-['Poppins'] uppercase tracking-[2.88px] [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
          EVENT MANAGERS
        </div>
        <div className="w-[1023px] text-center text-white text-2xl font-normal font-['Inter'] tracking-[5.28px]">
          For any queries regarding the event, feel free to reach out to any of
          the managers listed below. They are here to help and ensure a smooth
          experience for you!
        </div>

        <div className="flex justify-center space-x-40 items-center mt-20">
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
            <ManagerCard imageUrl="/dallE.png" name="Nikhil Patel" contact={8305216569}/>
        </div>
        <ButtonLanding label="Register Now" />
        <br />
        <br />
        <br />
        <br />
        <br />
        
      </div>
      </section>

    </div>
    
    
  )
}

export default page
