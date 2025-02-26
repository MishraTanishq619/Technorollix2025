import React from 'react';

interface RulesAndRegulationProps {
  rules: string[];
}

const RulesAndRegulation: React.FC<RulesAndRegulationProps> = ({ rules }) => {
  return (
    <div className='text-white'>
      <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        RULES & REGULATION
      </h2>
      <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RulesAndRegulation;