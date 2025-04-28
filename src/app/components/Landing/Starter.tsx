import React from "react";

export default function Title() {
  return (
      <div>
          <div className="pt-20 w-full text-center space-x-3 flex items-center justify-center text-5xl font-semibold">
              <h1 className="text-gray-800">Insight Unleashed{' '}</h1>
              <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white px-7 py-2 rounded-full">
                  AI-Powered,
              </span>
          </div>
          <div className=" pt-10 flex flex-col items-center justify-center">
              <h1 className="pb-10 font-semibold text-gray-800 text-5xl mt-2">Data-Driven Decisions</h1>
              <p className="mt-2 text-xl text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
          </div>
          <div className="flex justify-center items-center mt-10">
          <img
                  src="video-recorder.svg"
                  alt="Demo Video"
                  className="mt-5"
                  />
              <button className="flex items-center justify-center mt-5 ml-2">Full demo video</button>
              </div>
      </div>
  );
}