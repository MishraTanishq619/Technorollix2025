import React from 'react'

interface WhyParticipateProps {
    reasons: string[];
  }

const WhyParticipate: React.FC<WhyParticipateProps> = ({ reasons }) => {
  return (
    <div className='text-white'>
      <h2 className="text-5xl text-[#ffad3c] font-medium text-center mb-14 [text-shadow:_0px_4px_10px_rgb(0_0_0_/_0.78)]">
        WHY PARTICIPATE
      </h2>
      <div className="bg-[#33010140] p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <ul className="list-disc pl-5 text-2xl space-y-2 uppercase font-['Inter'] leading-[29.08px] tracking-[6.72px]">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyParticipate;