import Image from "next/image";

export default function Junoon() {
  const guests = [
    {
      name: "Vaibhav Gupta",
      role: "Celeb - VAIBHAV GUPTA",
      image: "/junoon/vaibhavgupta.svg",
      description:
        "We are thrilled to announce that Vaibhav Gupta, the illustrious winner of Indian Idol Season 14, will be gracing Junoon 2025 with his presence. Hailing from Kanpur, Vaibhav's musical journey began at a young age, leading him to triumph in the 2024 season of the renowned singing reality show...",
      imageOnRight: true,
    },
    {
      name: "Aman Sahu",
      role: "Anchor - Aman Sahu",
      image: "/junoon/amansahu.svg",
      description:
        "Aman Sahu is a Raipur-based award-winning TV and event anchor/presenter. He has an enthusiastic, lively personality filled with a fine mix of confidence, wit, warmth, and talent. He has hosted for brands like Samsung, JSW, Sunburn, etc., and collaborated with Atrangi Band...",
      imageOnRight: false,
    },
    {
      name: "DJ Hemant Sahu",
      role: "Music - DJ Hemant",
      image: "/junoon/hemant.svg",
      description:
        "DJ Hemant brings a unique blend of talent and skill to any event, enhancing the atmosphere. He has great music selection, versatility, and creates memorable moments. He brings people together and has also collaborated with Atrangi Band...",
      imageOnRight: true,
    },
  ];

  return (
    <div className="w-full bg-[linear-gradient(to_right,rgba(11,8,229,0.3),rgba(255,0,191,0.3))] text-white">
      {/* Logo Section */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <Image
          src="/junoon/junoonlogo.png"
          alt="Junoon Logo"
          width={1000}
          height={1000}
          className="max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[74%] h-auto"
          priority
        />
        <div className="w-full max-w-[90%] text-center mt-4">
          <span className="text-[#a97ead] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal font-['Protest Revolution'] tracking-wide">
            One stage, one night, endless vibes.
          </span>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-10 mb-48">
        <div className="w-full lg:w-1/2">
          <Image
            src="/junoon/aboutjunoon.png"
            alt="Junoon Event"
            width={600}
            height={400}
            className="w-full rounded-lg"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E944FF] to-[#FFFFFFFA] shadow-lg mb-6">
            ABOUT JUNOON
          </h2>
          <p className="text-xl font-medium font-['Poppins']">
            OPJU Junoon is an annual cultural extravaganza hosted by the O.P. Jindal University in Chhattisgarh, India. This vibrant event showcases the diverse talents of people across various domains including music and dance. In 2018, we had Shirley Sethia. In 2020, we had Jubin Nautiyal and Sunburn, and in 2023, we had DJ Perisha.
          </p>
        </div>
      </div>

      {/* Guest Sections */}
      {guests.map((guest, index) => (
        <section
          key={index}
          className={`flex flex-col gap-14 ${guest.imageOnRight ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-center p-10 mb-64`}
        >
          <Image
            src={guest.image}
            alt={guest.name}
            width={400}
            height={400}
            className="w-1/3 rounded-lg shadow-lg"
            priority
          />
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E944FF] to-[#FFFFFFFA] shadow-lg mb-6">
              {guest.role}
            </h2>
            <p className="text-xl font-medium font-['Poppins']">{guest.description}</p>
          </div>
        </section>
        
      ))}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>

  );
}
