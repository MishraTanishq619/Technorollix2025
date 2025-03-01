import Image from "next/image";

const teamSections = [
  {
    title: "Information, Publicity & Invitation",
    members: [
      {
        name: "Amit Sharma",
        contact: "+91 9876543210",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Priya Verma",
        contact: "+91 8765432109",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Design, Print & Media",
    members: [
      {
        name: "Rahul Mehta",
        contact: "+91 9123456789",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Sneha Patel",
        contact: "+91 9234567890",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Registration & Reception",
    members: [
      {
        name: "Vikram Singh",
        contact: "+91 8345678921",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Anjali Nair",
        contact: "+91 8456789012",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Accommodation",
    members: [
      {
        name: "Rohan Kapoor",
        contact: "+91 7567890123",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Kavita Iyer",
        contact: "+91 7678901234",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Stage, Light, Sound & Stall",
    members: [
      {
        name: "Siddharth Tiwari",
        contact: "+91 6789012345",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Meera Choudhary",
        contact: "+91 6890123456",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Catering",
    members: [
      {
        name: "Harsh Vardhan",
        contact: "+91 7901234567",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Ayesha Khan",
        contact: "+91 7012345678",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Venue Preparation",
    members: [
      {
        name: "Manish Gupta",
        contact: "+91 6123456789",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Ritika Sharma",
        contact: "+91 6234567890",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Transportation",
    members: [
      {
        name: "Deepak Joshi",
        contact: "+91 5345678901",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Nidhi Agarwal",
        contact: "+91 5456789012",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Hospitality",
    members: [
      {
        name: "Abhishek Rao",
        contact: "+91 4567890123",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Shruti Menon",
        contact: "+91 4678901234",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Website Maintenance",
    members: [
      {
        name: "Tarun Chatterjee",
        contact: "+91 3789012345",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Pooja Sinha",
        contact: "+91 3890123456",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Certificate & Prize",
    members: [
      {
        name: "Rakesh Yadav",
        contact: "+91 2901234567",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Sanya Bansal",
        contact: "+91 2012345678",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Discipline",
    members: [
      {
        name: "Aditya Deshmukh",
        contact: "+91 1123456789",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Komal Saxena",
        contact: "+91 1234567890",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Stationery & Logistics",
    members: [
      {
        name: "Sandeep Malhotra",
        contact: "+91 9345678901",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Neha Rastogi",
        contact: "+91 9456789012",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
  {
    title: "Health & First Aid",
    members: [
      {
        name: "Varun Bhatia",
        contact: "+91 8567890123",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
      {
        name: "Simran Kaur",
        contact: "+91 8678901234",
        image: "/teams/website-maintenance/nikhil.jpg",
      },
    ],
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      {/* Centered Content with Left & Right Margin */}
      <div className="mx-auto max-w-6xl">
        {/* Main Heading */}
        <h1 className="text-7xl font-medium font-['Poppins'] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] mb-24 mt-24">
          Team Behind Technorollix
        </h1>

        {/* Team Sections */}
        {teamSections.map((section, index) => (
          <div
            key={index}
            className={`flex font-['Poppins'] flex-col md:flex-row items-center md:items-start mb-48 gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Section Title - Positioned to Align with Cards */}
            <h2 className="text-4xl md:text-5xl uppercase font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFAE3D] via-[#FFD188] to-[#A6660D] md:w-1/2 w-full text-center md:text-left flex items-center justify-center md:justify-start md:pl-8 break-words whitespace-normal">
              {section.title}
            </h2>

            {/* Profile Cards - Positioned to Align with Next Section Title */}
            <div className="grid md:grid-cols-2 gap-10 md:w-2/3 md:pr-8">
              {section.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-3xl p-8 shadow-xl border-4 border-yellow-500 w-72 h-96 flex flex-col items-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={170}
                    height={170}
                    className="rounded-2xl mb-4"
                  />
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-md text-gray-400 mt-2">
                    Contact: {member.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
