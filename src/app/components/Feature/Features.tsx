"use client";

import React from "react";
import Image from "next/image";

export const FeaturePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Features Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Features
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side: Feature List */}
          <div className="space-y-4">
            <button className="w-full text-left px-6 py-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition">
              Candle Scanner
            </button>
            <button className="w-full text-left px-6 py-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition">
              Candle Signal
            </button>
            <button className="w-full text-left px-6 py-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition">
              News Impact Analyze
            </button>
          </div>
          {/* Right Side: Feature Details */}
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Mr. Candle
            </h2>
            <p className="text-gray-600 mb-4">
              Ask Mr. Candle about trading topics, strategies, patterns, and
              market insights anytime.
            </p>
            <Image
              src="/images/feature-details.png"
              alt="Feature Details"
              width={600}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          More Than Just Patterns
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Stay Ready for Every Opportunity! Automatically detect price action
          patterns, save your favorite market insights, and get real-time
          notifications when new opportunities appear.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Smart Candle Pattern Analysis
            </h3>
            <p className="text-gray-600">
              Analyze candlestick patterns in past candlesticks to guide future
              decisions.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Backtesting Made Easy
            </h3>
            <p className="text-gray-600">
              Test and validate your strategies with historical data.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              AI-Powered Impact Analysis
            </h3>
            <p className="text-gray-600">
              Predict market impact through news and economic data.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Personal Trading Assistant
            </h3>
            <p className="text-gray-600">
              Get personalized insights from your AI assistant.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Chart Alerts & Notifications
            </h3>
            <p className="text-gray-600">
              Stay updated with real-time alerts and notifications.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Built-in Day Trader Tools
            </h3>
            <p className="text-gray-600">
              Access tools designed for both beginners and experienced traders.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Hear From Our Customers...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "Simplifies complex strategies. As a beginner, I found trading
              overwhelming. IC Candle breaks down complex patterns into
              understandable insights, making my trading journey smoother."
            </p>
            <p className="font-bold text-blue-900">Brian H.</p>
            <p className="text-sm text-gray-500">Stock Market Analyst</p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-4">
              "Reliable and user-friendly. The interface is intuitive, and the
              AI-driven analyses are spot-on. IC Candle has become an
              indispensable tool in my trading toolkit."
            </p>
            <p className="font-bold text-blue-900">Emily B.</p>
            <p className="text-sm text-gray-500">
              Forex/Exchange Trader
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
