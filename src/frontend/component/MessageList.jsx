import ChatMessage from "./ChatMessage";
import LoadingSkeleton from "./Skeleton";

const MessageList = ({ messages, imageUrl, handleAction, loading }) => {
  return (
    <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-4 scrollbar-none   w-full max-h-[70vh]">
      {messages.map((msg, i) => (
        <ChatMessage key={i} msg={msg} handleAction={handleAction} />
      ))}

      {loading && <LoadingSkeleton />}

      {imageUrl && (
        <div className="flex justify-start w-full overflow-x-auto ">
          <img
            src={imageUrl}
            alt="generated"
            className="max-w-[80%] sm:max-w-[70%] rounded-2xl shadow-md border"
          />
        </div>
      )}
    </div>
  );
};

export default MessageList;