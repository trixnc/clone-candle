'use client';

import React from 'react';
import Container from '../Container';
import Image from "next/image";

export default function Board() {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    { name: "Candle Predictor", icon: "/icon/presentation-chart-01.svg" },
    { name: "Candle Signal", icon: "/icon/icon.svg" },
    { name: "News Impact Analyze", icon: "/icon/icon (1).svg" },
    { name: "Mr.Candle", icon: "/icon/robot.svg" },
  ];

  const getVideoSrc = (index: number) => {
    return `/videos/tab-${index + 1}.mp4`;
  };

  return (
    <Container>
      <div className="flex flex-col items-center pt-20">
        <div className="flex gap-2 bg-white p-5 rounded-xl border">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-15 py-10 rounded-lg border text-xl font-medium flex items-center gap-2 ${
                activeTab === index
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={tab.icon}
                alt={`${tab.name} Icon`}
                width={20}
                height={20}
                className="object-contain"
              />
              {tab.name}
            </button>
          ))}
        </div>
        <div className="relative w-full h-full bg-white rounded-xl border overflow-hidden">
          <div className="p-8">
            <div className="mt-4">
              <video
                className="w-full h-full rounded-lg"
                src={getVideoSrc(activeTab)}  
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}