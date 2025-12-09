import { Paperclip, Mic } from "lucide-react";

const ChatInput = ({
  input,
  setInput,
  handleSend,
  handleFileClick,
  fileInputRef,
  handleFileUpload,
  handleMicClick,
  recording,
}) => {
  return (
    <div className="w-full p-2 sm:p-4 border-t">
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-2 sm:px-4">
        
        <button
          onClick={handleFileClick}
          className="text-gray-400 hover:text-gray-700 transition-colors"
        >
          <Paperclip size={18} />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />

        <button
          onClick={handleMicClick}
          className={`text-gray-400 hover:text-gray-700 transition-colors ${
            recording ? "text-red-500" : ""
          }`}
        >
          <Mic size={18} />
        </button>

        <input
          type="text"
          className="flex-1 min-w-[120px] bg-transparent outline-none p-2 text-sm sm:text-base"
          placeholder="Send a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-3 sm:px-4 py-2 rounded-2xl hover:bg-purple-700 transition text-sm sm:text-base"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatInput;