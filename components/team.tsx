// Team Structure
// ├─ Core Team
// │  ├─ Captain
// │  ├─ Vice-Captain
// │  └─ Manager
// │
// ├─ System Heads
// │  ├─ Powertrain System Head
// │  ├─ Electrical System Head
// │  ├─ Steering System Head
// │  ├─ Braking System Head
// │  └─ Sponsorship Team Head
// │
// ├─ Powertrain System
// │  └─ Members (4)
// │
// ├─ Electrical System
// │  └─ Members (1)
// │
// ├─ Steering System
// │  └─ Members (3)
// │
// ├─ Braking System
// │  └─ Members (3)
// │
// ├─ Suspension System
// │  └─ Members (4)
// │
// ├─ Design Team
// │  └─ Members (1)
// │
// └─ Sponsorship Team
//    └─ Members (4)

const members = [
  {
    name: "Méschac Irung",
    role: "Creator",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Théo Balick",
    role: "Frontend Dev",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Glodie Lukose",
    role: "Frontend Dev",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Bernard Ngandu",
    role: "Backend Dev",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];

// Core Team
const coreTeam = [
  {
    name: "Viren Pardeshi",
    role: "Captain",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Yash Kshirsagar",
    role: "Vice-Captain",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Shivam Naragude",
    role: "Manager",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
];


// System Heads
const systemHeads = [
  {
    name: "Ram Kirge",
    role: "Electrical System Head",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
  {
    name: "Rohan Bhadarge",
    role: "Steering System Head",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Akansha Salve",
    role: "Braking System Head",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Soham Mahatole",
    role: "Suspension System Head",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
];


// Powertrain System Team
const powertrainTeam = [
  {
    name: "Pooja Dhoot",
    role: "Powertrain System Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Mrunal Bhalerao",
    role: "Powertrain System Member",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Gayatri Bahudane",
    role: "Powertrain System Member",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Tanishka Chavan",
    role: "Powertrain System Member",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];

// Electrical System Team
const electricalTeam = [
  {
    name: "Shrushti Ramplurkar",
    role: "Electrical System Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Prasad Akhade",
    role: "Electrical System Member",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
];

// Steering System Team
const steeringTeam = [
  {
    name: "Kaif Pathan",
    role: "Steering System Member",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Yash Birari",
    role: "Steering System Member",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
  {
    name: "Tejas Rathod",
    role: "Steering System Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
];

// Braking System Team
const brakingTeam = [
  {
    name: "Sahil Gole",
    role: "Braking System Member",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Mohit Gawali",
    role: "Braking System Member",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Vivek Chavan",
    role: "Braking System Member",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];


// Suspension System Team
const suspensionTeam = [
  {
    name: "Sarthak Chavan",
    role: "Suspension System Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Arati Revgade",
    role: "Suspension System Member",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Rushikesh Darwante",
    role: "Suspension System Member",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Krushna Bhawar",
    role: "Suspension System Member",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];

// Design Team
const designTeam = [
  {
    name: "Design Member",
    role: "Design Team Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
];

const profTeam = [
  {
    name: "Prof. Amritpal Singh Punewala",
    role: "Faculty Advisor",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
];

// Sponsorship Team
const sponsorshipTeam = [
  {
    name: "Kulpreet Kaur Shermar",
    role: "Sponsorship Team Member",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
  {
    name: "Om Channe",
    role: "Sponsorship Team Member",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Sukanya Puranik",
    role: "Sponsorship Team Member",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Siddhi Konarde",
    role: "Sponsorship Team Member",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
];

// Autonomous Team
const autonomousTeam = [
  {
    name: "Chiranjeev Singh Sandhu",
    role: "Autonomous Developer",
    avatar: "https://avatars.githubusercontent.com/u/68236786?v=4",
  },
  {
    name: "Rohan Sable",
    role: "Autonomous Developer",
    avatar: "https://avatars.githubusercontent.com/u/99137927?v=4",
  },
  {
    name: "Member 3",
    role: "Autonomous Developer",
    avatar: "https://avatars.githubusercontent.com/u/31113941?v=4",
  },
  {
    name: "Member 4",
    role: "Autonomous Developer",
    avatar: "https://avatars.githubusercontent.com/u/47919550?v=4",
  },
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">
          Our Team
        </h2>

        <div>
          <h3 className="mb-6 text-lg font-medium">Faculty Advisor</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {profTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-medium">Core Team [ LeaderShip ]</h3>
          <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
            {coreTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">
            DepartMent Heads [ Leads ]
          </h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {systemHeads.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">
            Autonomous Team
          </h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {autonomousTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">PowerTrain Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {powertrainTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Electrical Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {electricalTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Steering Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {steeringTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Braking Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {brakingTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Suspension Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {suspensionTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">Design Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {designTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="mb-6 text-lg font-medium">SponsorShip Team</h3>
          <div
            data-rounded="full"
            className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4"
          >
            {sponsorshipTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                  <img
                    className="aspect-square rounded-full object-cover"
                    src={member.avatar}
                    alt={member.name}
                    height="460"
                    width="460"
                    loading="lazy"
                  />
                </div>
                <span className="mt-2 block text-sm">{member.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
