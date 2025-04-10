import React from "react";
import Container from "../components/Container";

export default function Title() {
    return (      
    <div className="py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Insight Unleashed{' '}</h1>
        <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white px-3 py-1 rounded-full">
          AI-Powered,
        </span>
        <h2 className="text-2xl font-bold text-gray-700 mt-2">Data-Driven Decisions</h2>
        <p className="mt-2 text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
      </div>
      );
    }