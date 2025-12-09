import React from 'react';
import { Link } from 'react-router-dom';

function Fourth() {
  return (
    <div className="w-full bg-black text-white p-4 md:p-9 flex flex-col items-center gap-10">
      <div className="text-center md:text-left max-w-6xl w-full">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight capitalize">
          Stay inspired with our latest <span className="px-2 pb-0.5 text-purple-500">insights</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tempore excepturi doloremque ullam.
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center md:justify-between gap-6 max-w-6xl">
        {[1, 2, 3].map((item, idx) => (
          <div key={idx} className=" w-full sm:w-[45%] md:w-[30%] rounded-2xl border border-white shadow-xs flex flex-col items-center overflow-hidden">
            
            <div className="w-full flex justify-center p-4">
              <video
                src="https://v1.pinimg.com/videos/mc/720p/64/80/1a/64801a84c6168a98454d3ab104c3d09a.mp4"
                className="w-full sm:w-56 h-auto object-cover rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="p-6 text-center">
              <p className="text-sm sm:text-base md:text-base text-white">
                {idx === 0
                  ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum inventore vero dignissimos repellendus placeat maiores aperiam, amet, quo accusamus culpa doloribus soluta quis tempora ipsam, nemo beatae officiis sapiente. Beatae."
                  : idx === 1
                  ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi accusantium nostrum dolorem mollitia quos. Amet laborum culpa accusantium! Molestias dolorum ipsum quasi nobis ad recusandae ex cum, porro consequatur natus."
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima vitae labore obcaecati officiis, excepturi blanditiis, asperiores dignissimos perspiciatis iusto maxime tempore consequuntur amet ratione aperiam culpa velit alias enim."
                }
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center p-5">
          <Link to="/chat">
          
        <button className="px-6 py-2 text-white border-purple-600 rounded-2xl hover:text-black hover:bg-purple-500 capitalize border-2 font-bold">
          get started
        </button>
          
          
          </Link>
      </div>
    </div>
  );
}

export default Fourth;