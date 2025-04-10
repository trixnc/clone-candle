'use client';

import React from 'react';
import './globals.css';
import Container from './components/Container';

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0); // Fixed state variable name

  // Define the tabs array
  const tabs = [
    { name: 'Tab 1', icon: '+' },
    { name: 'Tab 2', icon: '+' },
    { name: 'Tab 3', icon: '+' },
  ];

  return (
    <Container>
      <nav className="flex w-full space-x-6 h-20 justify-around items-center bg-white">
        <img src="Frame 1261155751.png" alt="" className="h-11 w-11" />
        <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl">
          IC Candle
        </h1>
        <a href="#" className="flex text-gray-500 hover:text-blue-500 selection:text-blue-500">
          Home
        </a>
        <a href="#" className="flex text-gray-500 hover:text-blue-500 selection:text-blue-500">
          Features
        </a>
        <a href="#" className="flex text-gray-500 hover:text-blue-500 selection:text-blue-500">
          Pricing
        </a>
        <button className="flex justify-center item-center w-25 border rounded-2xl bg-white cursor-pointer">
          Get Started
        </button>
      </nav>
      <div className="py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Insight Unleashed{' '}</h1>
        <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white px-3 py-1 rounded-full">
          AI-Powered,
        </span>
        <h2 className="text-2xl font-bold text-gray-700 mt-2">Data-Driven Decisions</h2>
        <p className="mt-2 text-neutral-500">Backtest, analyze, and track the market with intelligent tools</p>
      </div>

      <div className=" min-h-screen flex flex-col items-center pt-10">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-md mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-1 ${
                activeTab === index
                  ? 'bg-blue-100 border-blue-500 text-blue-700'
                  : 'bg-white border-gray-200 text-gray-600'
              }`}
              onClick={() => setActiveTab(index)}
            >
             <span>{tab.icon}</span>
              {/* {tab.name} */}
            </button>
          ))}
        </div>
        <div className="relative w-90% max-w-4xl h-25 bg-white rounded-xl shadow-lg overflow-hidden">

  <div className="absolute top-0 left-0 w-0 h-0 border-t-3.125 border-t-blue-800 border-r-3.125 border-r-transparent z-10" />

  <div className="p-8">
    <div className="mt-4">
      <video
        className="w-full h-full rounded-lg"
        src={`/videos/tab-${activeTab + 1}.mp4`}
        autoPlay
        loop
        muted
        controls={false}
      />
    </div>
  </div>
  </div>
    </div>
    </Container>
  );
}