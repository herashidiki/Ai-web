import { Sparkle, Eye } from "lucide-react";

const Chatheader = ({ handleGenrateImage }) => {
  return (
    <div className="w-full p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl flex flex-col items-center gap-4">
      <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        What can I help with?
      </h1>

      <div className="flex flex-wrap justify-center gap-3 w-full">
        <button
          onClick={handleGenrateImage}
          className="flex items-center gap-2 border-2 rounded-2xl p-2 text-gray-400 hover:text-black hover:bg-white transition-colors duration-300"
        >
          <Sparkle size={15} />
          <span className="font-bold text-sm sm:text-base">Generate image</span>
        </button>

        <button className="flex items-center gap-2 border-2 rounded-2xl p-2 text-gray-400 hover:text-black hover:bg-white transition-colors duration-300">
          <Sparkle size={15} />
          <span className="font-bold text-sm sm:text-base">Analyse image</span>
        </button>

        <button className="flex items-center gap-2 border-2 rounded-2xl p-2 text-gray-400 hover:text-black hover:bg-white transition-colors duration-300">
          <Eye size={20} />
          <span className="font-bold text-sm sm:text-base">more..</span>
        </button>
      </div>
    </div>
  );
};

export default Chatheader;