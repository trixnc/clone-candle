'use client';

import React from 'react';
import Container from '../components/Container';

export default function Board() {
  const [activeTab, setActiveTab] = React.useState(0);

  // Define the tabs array
  const tabs = [
    { name: 'Candle Predictor', icon: '+' },
    { name: 'Candle Signal', icon: '+' },
    { name: 'News Impact Analyze', icon: '+' },
    { name: 'Mr.Candle', icon: '+' },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center pt-10">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-md mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`custom-button ${
                activeTab === index ? 'custom-button-active' : 'custom-button-inactive'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>


        <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-0 border-t-100 border-t-blue-800 border-r-100 border-r-transparent z-10" />
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