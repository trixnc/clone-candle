import React from "react";
import Container from "../components/Container";

export default function Title() {
  return (
      <div>
          <div className="pt-20 w-full text-center space-x-3 items-center justify-center ">
              <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold  ">Train Your AI {" "}</h1>
          </div>
          <div className="pb-20 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-800 mt-2">Agents to Think, Learn,and Act.</h1>
              <p className="mt-2 text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
          </div>
      </div>
  );
} 