import React from 'react';

function Thirds() {
  return (
    <div className="w-full bg-black p-4 md:p-11 flex flex-col items-center gap-10">
      <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4 w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white p-3">
          Affordable plans for <span className='text-purple-600 capitalize'>Every need</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <button className="mt-4 text-purple border-purple-400 rounded-2xl hover:bg-purple-500 border-2 font-medium text-sm px-4 py-2.5">
          Choose plan
        </button>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full max-w-6xl">
        {[1, 2, 3].map((plan, idx) => (
          <div key={idx} className="w-full sm:w-[45%] md:w-[30%] p-6 bg-neutral-800 border border-white rounded-3xl text-white flex flex-col gap-4">
            <h5 className="text-xl font-medium mb-4">Standard plan</h5>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold">$49</span>
              <span className="text-sm sm:text-base font-medium">/month</span>
            </div>
            <ul className="space-y-2 sm:space-y-4 my-4">
              <li className="flex items-center gap-2">✅ Integration help</li>
              <li className="flex items-center gap-2 line-through">❌ Sketch Files</li>
              <li className="flex items-center gap-2 line-through">❌ API Access</li>
              <li className="flex items-center gap-2 line-through">❌ 24×7 phone & email support</li>
            </ul>
            <button className="w-full text-purple border-purple-400 rounded-2xl hover:bg-purple-500 border-2 font-medium text-sm px-4 py-2.5">
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thirds;