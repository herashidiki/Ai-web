import { Copy, ThumbsUp, ThumbsDown, Globe } from "lucide-react";

const MessageActions = ({ msg, handleAction }) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-2 text-xs sm:text-sm opacity-80">
      <button
        onClick={() => handleAction(msg, "copy")}
        className="hover:opacity-100 transition"
      >
        <Copy size={18} />
      </button>

      {msg.role === "assistant" && (
        <>
          <button
            onClick={() => handleAction(msg, "like")}
            className="hover:opacity-100 transition"
          >
            <ThumbsUp size={18} />
          </button>

          <button
            onClick={() => handleAction(msg, "dislike")}
            className="hover:opacity-100 transition"
          >
            <ThumbsDown size={18} />
          </button>

          <button
            onClick={() => handleAction(msg, "search")}
            className="hover:opacity-100 transition"
          >
            <Globe size={18} />
          </button>
        </>
      )}
    </div>
  );
};

export default MessageActions;