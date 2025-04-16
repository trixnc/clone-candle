'use client';

import React from 'react';
import Container from '../components/Container';
import { Button } from "@/components/ui/button"
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
    const videoPath = `/videos/tab-${index + 1}.mp4`;

    try {
      return new URL(videoPath, window.location.origin).toString();
    } catch (error) {
      console.error("Invalid video URL:", videoPath);
      return "";
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center pt-10">
        <div className="flex gap-2 bg-white p-2 rounded-xl shadow-md mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg border text-sm font-medium flex items-center gap-2 ${
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
        <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-0 h-0 border-t-100 border-t-blue-800 border-r-100 border-r-transparent z-10" />
          <div className="p-8">
            <div className="mt-4">
              <video
                className="w-full h-full rounded-lg"
                src={getVideoSrc(activeTab)}
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