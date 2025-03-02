import React from 'react';

interface RulesAndRegulationProps {
  rules: string[];
}

const RulesAndRegulation: React.FC<RulesAndRegulationProps> = ({ rules }) => {
  return (
    <div className='text-white my-40'>
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] font-medium font-['Poppins'] tracking-[2.88px] text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        RULES & REGULATION
      </h2>
      <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto ">
        <ul className="list-decimal pl-5 text-2xl space-y-4 font-['Inter']  leading-10 tracking-[3.75px]">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RulesAndRegulation;