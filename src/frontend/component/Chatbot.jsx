import { useState, useRef } from "react";
import MessageList from "./Messagelist";
import Chatheader from "./Chatheader";
import ChatInput from "./Chatinput";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [loading, setLoading] = useState(false);

  // SEND MESSAGE
  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
       ` https://text.pollinations.ai/${encodeURIComponent(input)}`
      );
      const reply = await res.text();
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Error talking to AI." }]);
    }
    setLoading(false);
  };

  // IMAGE GEN
  const handleGenerateImage = () => {
    if (!input.trim()) return;
    setImageUrl(`https://image.pollinations.ai/prompt/${encodeURIComponent(input)}`);
    setInput("");
  };

  // FILE
  const handleFileClick = () => fileInputRef.current.click();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file)
      setMessages((prev) => [...prev, { role: "user", content: `📎 Uploaded file: ${file.name}` }]);
  };

  // MIC
  const handleMicClick = async () => {
    if (recording) {
      mediaRecorderRef.current.stop();
      return setRecording(false);
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      mediaRecorder.onstop = () => {
        setMessages((prev) => [...prev, { role: "user", content: "🎤 Recorded audio" }]);
      };
      mediaRecorder.start();
      setRecording(true);
    } catch {
      alert("Mic not supported.");
    }
  };

  // MESSAGE ACTIONS
  const handleAction = (msg, action) => {
    if (action === "copy") navigator.clipboard.writeText(msg.content);
    if (action === "like") alert("You liked this message 👍");
    if (action === "dislike") alert("You disliked this message 👎");
    if (action === "search")
      window.open(`https://www.google.com/search?q=${encodeURIComponent(msg.content)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-3xl md:max-w-4xl lg:max-w-5xl backdrop-blur-xl shadow-xl rounded-2xl flex flex-col p-3 md:p-6 gap-4">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase p-3 mb-4">
          AI Bot
        </h1>

        <Chatheader handleGenrateImage={handleGenerateImage} />

        <MessageList
          messages={messages}
          imageUrl={imageUrl}
          handleAction={handleAction}
          loading={loading}
        />

        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          handleFileClick={handleFileClick}
          fileInputRef={fileInputRef}
          handleFileUpload={handleFileUpload}
          handleMicClick={handleMicClick}
          recording={recording}
        />
      </div>
    </div>
  );
};

export default ChatBot;