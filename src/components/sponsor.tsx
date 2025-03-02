import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="text-white flex flex-col text-center items-center my-28 h-auto px-4 md:px-0">
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D]">
        SPONSORS
      </h2>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        <Image
          src="/jindal-logo.png"
          alt="Jindal Logo"
          width={450}
          height={300} 
          className="w-full max-w-[350px] h-auto mt-10"
        />
      </div>
    </div>
  );
}
