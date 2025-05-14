import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Container";

export const FeaturePage = () => {
  const testimonials = [
    {
      title: "Simplifies complex strategies.",
      text: `"As a beginner, I found trading overwhelming. IC Candle breaks down complex patterns into understandable insights, making my trading journey smoother."`,
      name: "Brian H.",
      role: "Stock Market Analyst",
    },
    {
      title: "Reliable and user-friendly.",
      text: `"The interface is intuitive, and the AI-driven analyses are spot-on. IC Candle has become an indispensable tool in my trading toolkit."`,
      name: "Emily B.",
      role: "Forex/Exchange Trader",
    },
    {
      title: "Revolutionized my trading.",
      text: `"IC Candle has revolutionized the way I trade. The insights are accurate, and the tools are incredibly easy to use."`,
      name: "John D.",
      role: "Crypto Enthusiast",
    },
    {
      title: "Transformed my trading approach!",
      text: `"Since integrating IC Candle into my routine, I've gained clearer insights into market trends. The candle predictor feature is remarkably accurate, helping me make informed decisions effortlessly."`,
      name: "Alex J.",
      role: "Crypto Enthusiast",
    },
    {
      title: "A must-have for traders.",
      text: `"IC Candle's news predictor keeps me updated on relevant events that could impact my investments. It's like having a personal trading assistant available 24/7."`,
      name: "Samantha L.",
      role: "Crypto Enthusiast",
    },
    {
      title: "Revolutionized my trading.",
      text: `"IC Candle has revolutionized the way I trade. The insights are accurate, and the tools are incredibly easy to use."`,
      name: "John D.",
      role: "Crypto Enthusiast",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  // Auto-change slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">
        More Than Just Patterns
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Stay Ready for Every Opportunity. Automatically detect price action
        patterns, save your favorite market setups, and get real-time
        notifications when new opportunities appear.
      </p>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Content Block 1 */}
        <div className="bg-white border rounded-lg shadow-md p-6">
          <video
            src="tab-1.mp4"
            controls
            loop
            muted
            autoPlay
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Double Top / Double Bottom
          </h3>
          <p className="text-gray-600 mb-4">
            These patterns form when price tests the same level twice and fails
            to break through. It shows that the market is losing momentum in one
            direction.
          </p>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
            Price Action Pattern
          </button>
        </div>
        <div className="bg-white border rounded-lg shadow-md p-6">
          <video
            src="tab-2.mp4"
            controls
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Bearish Flag / Bullish Flag
          </h3>
          <p className="text-gray-600 mb-4">
            A brief pause or consolidation after a strong move. Once it breaks
            out of the flag, the trend often continues in the same direction.
          </p>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
            Price Action Pattern
          </button>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <video
              src="tab-3.mp4"
              controls
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Head and Shoulders
            </h3>
            <p className="text-gray-600 mb-4">
              A reversal pattern that signals a change in trend direction. It
              consists of three peaks: a higher peak between two lower peaks.
            </p>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition">
              Price Action Pattern
            </button>
          </div>
        </div>

      {/* Testimonials Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Hear From Our Customers...
        </h2>
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            {/* Dots for Navigation */}
            <div className="flex justify-center mr-5 space-x-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  className={`w-3 h-3 rounded-full ${
                    Math.floor(currentIndex / 2) === index
                      ? "bg-blue-900"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex h-10 space-x-4">
              <button
                onClick={handlePrev}
                className="px-2 py-2 border rounded-sm text-black"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="px-2 py-2 border rounded-sm text-black"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Testimonial Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg shadow-md p-6 transition-all duration-500 ease-in-out"
                >
                  <p className="font-bold text-black mb-2">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-600 mb-4">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      src={`https://via.placeholder.com/40`}
                      alt={`${testimonial.name}'s avatar`}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-bold text-blue-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400 italic">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};