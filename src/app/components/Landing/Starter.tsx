import Link from "next/link";
import React from "react";

export const Starter = () => {
  return (
      <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="pt-15 w-full text-center space-x-3 flex items-center justify-center text-5xl font-semibold">
              <h1 className="text-gray-800">Insight Unleashed
              <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white px-7 py-2 rounded-full">
                  AI-Powered,
              </span>
              </h1>
          </div>
          <div className=" pt-10 flex flex-col items-center justify-center">
              <h1 className="pb-10 font-semibold text-gray-800 text-5xl mt-2">Data-Driven Decisions</h1>
              <p className="mt-2 text-xl text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
              <div className="border-2 ">
          </div>
          <Link href="/#" className="mt-5 flex justify-center items-center border rounded-3xl px-5 p-2 ">
          <img
                  src="video-recorder.svg"
                  alt="Demo Video"
                  className=""
                  />
              <button className="items-center justify-center ml-2 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text ">What is IC Candle?</button>
              </Link>
              </div>
              </div>
  );
}