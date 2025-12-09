import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThumbsUp } from "lucide-react";
import ButtonTrain from "./SecondPge";
import Thirds from "./Thirds";
import Fourth from "./Fourth";
import ChatBot from "./component/Chatbot";

function App() {
  return (
    <div className ="min-h-screen w-full bg-black " >
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[1200px] bg-black border-2 border-white rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 gap-6 overflow-hidden">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white capitalize leading-tight">
            Your AI-powered <br />
            <span className="text-purple-600 font-bold">design</span> Assistant
          </h1>

          <p className="text-white mt-4 text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            magnam in dicta rerum totam veniam iste officiis saepe. Vel illo
            commodi architecto magnam adipisci? Totam earum provident minima ad
            quae?
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button className="rounded-[10%] bg-purple-600 p-2 text-white">
              Get started
            </button>

            <button className="rounded-[10%] border border-white p-2 text-white flex items-center gap-1">
              <ThumbsUp className="h-5" /> Feedback
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <video
            src="https://v1.pinimg.com/videos/mc/720p/83/e6/f4/83e6f4689c1025201ce25e0a3225f72e.mp4"
            className="w-full h-auto max-h-[400px] md:max-h-[500px] object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mt-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ButtonTrain />
                <Thirds />
                <Fourth />
              </>
            }
          />

          <Route path ="/chat" element={<ChatBot />} />
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
