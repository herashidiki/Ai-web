
import React from "react";
import { LockIcon, LeafIcon, EvChargerIcon, Battery, HardDrive, MagnetIcon } from "lucide-react";
import { Download, StarIcon, Rocket } from "lucide-react";

export default function ButtonTrain() {
  const buttons = [
    { text: "Lock & protect", icon: <LockIcon /> },
    { text: "Device safety", icon: <LeafIcon /> },
    { text: "Battery saver", icon: <EvChargerIcon /> },
    { text: "Auto-update", icon: <Battery /> },
    { text: "Emergency mode", icon: <HardDrive /> },
  ];

  const repeatedButtons = [...buttons];

  return (
    <div className="w-full overflow-hidden bg-black p-4 md:p-7 mt-7">
      {/* Scroll buttons */}
      <div className="flex flex-wrap justify-center md:justify-evenly items-center animate-scroll gap-4 md:gap-5 mb-10">
        {repeatedButtons.map((btn, idx) => (
          <button
            key={idx}
            className="px-4 py-2 flex items-center gap-2 text-white rounded-lg shadow-md capitalize hover:border-2 border-white transition-colors duration-300"
          >
            {btn.icon}
            {btn.text}
          </button>
        ))}
      </div>

      {/* Creativity section */}
      <div className="h-auto w-full bg-black border-2 border-white rounded-2xl flex flex-col items-center p-5 gap-8 md:gap-10 overflow-hidden">
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-6 md:gap-10">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Unleash your <span className="text-purple-500 capitalize">creativity</span>.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
              Here at Flowbite we focus on markets where technology, innovation, and capital can unlock growth.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full">
          {[{icon: Download, title: "Generate design", text:"Here are the biggest technology acquisitions."},
            {icon: MagnetIcon, title: "Refine creation", text:"Here are the biggest technology."},
            {icon: StarIcon, title: "Refine creation", text:"Here are the biggest technology."},
            {icon: Rocket, title: "Refine creation", text:"Here are the biggest technology."}].map((card, i) => (
            <div key={i} className="bg-neutral-800 block w-full sm:w-[45%] md:w-[22%] p-6 border border-white rounded-2xl flex flex-col gap-4">
              <div className="bg-purple-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                <card.icon className="h-6 w-6" />
              </div>
              <h5 className="text-2xl sm:text-3xl font-semibold text-white">{card.title}</h5>
              <p className="text-sm sm:text-base text-white">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
