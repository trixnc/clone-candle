import React from "react";
import Container from "../Container";

export default function Title() {
  return (
      <div>
          <div className="pt-20 w-full text-center space-x-3 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-800">Insight Unleashed{' '}</h1>
              <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white text-3xl px-5 py-2 rounded-full">
                  AI-Powered,
              </span>
          </div>
          <div className="pb-20 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-800 mt-2">Data-Driven Decisions</h1>
              <p className="mt-2 text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
          </div>
      </div>
  );
}