import MessageActions from "./Message";

const ChatMessage = ({ msg, handleAction }) => {
  return (
    <div className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"} my-2 `}>
      <div
        className={`w-auto max-w-[85%] sm:max-w-[75%] md:max-w-[70%] p-3 rounded-2xl shadow-sm relative break-words ${
          msg.role === "user"
            ? "bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-br-none"
            : "bg-gray-900 text-white font-bold rounded-bl-none"
        }`}
      >
        {msg.content}

        <MessageActions msg={msg} handleAction={handleAction} />
      </div>
    </div>
  );
};

export default ChatMessage;