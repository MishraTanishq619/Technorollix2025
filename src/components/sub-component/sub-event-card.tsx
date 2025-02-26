import React from "react";

interface SubEventCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const SubEventCard: React.FC<SubEventCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="w-96 h-[400px] bg-[#5D2019] border-4 border-#FBDA7A rounded-lg shadow-md flex flex-col justify-center">
      <img src={imageUrl} alt="subEvent" className="h-28" />
      <svg
        width="227"
        height="80"
        viewBox="0 0 227 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto pt-7"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M126.722 60.05C126.722 65.611 122.293 70.1 116.806 70.1C111.318 70.1 106.889 65.611 106.889 60.05C106.889 54.489 111.318 50 116.806 50C122.293 50 126.722 54.489 126.722 60.05ZM90.3611 70.1C84.8739 70.1 80.4444 74.589 80.4444 80.15C80.4444 85.711 84.8739 90.2 90.3611 90.2C95.8483 90.2 100.278 85.711 100.278 80.15C100.278 74.589 95.8483 70.1 90.3611 70.1ZM126.722 117L121.566 101.925H141.134L155.414 94.689C157.861 93.55 158.852 90.468 157.596 87.989C157.316 87.3934 156.922 86.8606 156.436 86.4221C155.949 85.9835 155.381 85.6482 154.765 85.4359C154.149 85.2235 153.497 85.1385 152.848 85.1857C152.198 85.233 151.565 85.4116 150.985 85.711L145.564 88.458L142.324 82.83C140.407 78.475 135.713 75.996 131.086 77.068L114.756 80.619C110.194 81.624 106.889 85.845 106.889 90.669V95.359L90.8239 106.213H90.89C90.3611 106.682 89.6339 107.285 89.2372 108.089L83.3533 119.948L71.5856 125.911C69.1394 127.05 68.1478 130.199 69.4039 132.678C70.0022 133.866 71.0407 134.766 72.2921 135.181C73.5435 135.595 74.9058 135.49 76.0811 134.889L90.7578 127.452L97.6333 113.65L106.889 123.7C100.278 143.8 54 170.6 54 170.6C54 170.6 80.4444 184 113.5 184C146.556 184 173 170.6 173 170.6C173 170.6 139.944 143.8 126.722 117ZM145.564 110.903L143.448 111.975H135.515L135.912 113.047C139.349 119.948 144.374 127.05 149.861 133.348L146.357 110.501L145.564 110.903Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.299999"
            y="0.299999"
            width="226.4"
            height="241.4"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="26.85" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="113.5"
            y1="50"
            x2="113.5"
            y2="184"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CA8920" />
            <stop offset="1" stopColor="#F9D7A1" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center text-[#ffad3c] text-3xl font-medium font-['Poppins'] uppercase tracking-[4.80px] [text-shadow:_0px_7px_10px_rgb(0_0_0_/_0.78)]">
        {title}
      </div>
      <div className="text-justify text-white text-sm p-6 font-medium font-['Poppins'] overflow-hidden overflow-y-auto custom-scrollbar" style={{ maxHeight: '6.6rem', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
        {description}
      </div>
    </div>
  );
};

export default SubEventCard;
