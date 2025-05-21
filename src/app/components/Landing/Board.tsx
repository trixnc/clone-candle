'use client';

import React from 'react';
import Container from '../Container';
import Image from "next/image";

export function Board() {
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
      <div
        className="flex flex-col items-center justify-center pt-5 space-y-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('bg-hero-2-webp')", // Replace with your image path
        }}
      >
        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center gap-4 bg-white p-5 rounded-xl border">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg border text-lg font-medium flex flex-col items-center gap-2 ${
                activeTab === index
                  ? "bg-white border-blue-600 text-blue-800"
                  : "bg-white border-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <Image
                src={tab.icon}
                alt={`${tab.name} Icon`}
                width={25}
                height={25}
                className="object-contain"
              />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-4xl bg-white rounded-xl border overflow-hidden">
          <div className="p-8">
            <video
              className="w-full h-auto rounded-lg"
              src={getVideoSrc(activeTab)}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </Container>
  );
}