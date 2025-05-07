import React from "react";
import Image from "next/image";

export const IntroSection = ({
  reverse,
  showHeading,
  heading,
  description,
  smallDescription,
  imageSrc,
  features,
}: {
  reverse?: boolean;
  showHeading?: boolean;
  heading?: string;
  description?: string;
  smallDescription?: string;
  imageSrc: string;
  features: string[];
}) => {
  return (
    <div className="container mx-auto px-4 py-12">
      {showHeading && (
        <>
          <h2 className="text-center text-4xl bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text font-bold">
            {heading}
          </h2>
          <p className="text-center text-gray-600 mt-4">{description}</p>
        </>
      )}
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center mt-10 gap-8`}
      >
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={imageSrc}
            alt="Section Image"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-blue-800">{heading}</h3>
          <p className="text-gray-600">{description}</p>
          {smallDescription && (
            <p className="text-sm text-gray-500">{smallDescription}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Intro = () => {
  return (
    <div>
      <IntroSection
        showHeading
        heading="Master the Markets with AI-powered Intelligent Trading Tools"
        smallDescription="Scan markets, find patterns, and analyze probabilities."
        description="Analyze historical candlestick movements to forecast future price trends and make more informed trading decisions. Strengthen your strategies by validating them with past data, increasing both confidence and precision in your trades."
        imageSrc="/images/trading-platform.png"
        features={[
          "Scanner",
          "Real-time Alert",
          "Impact Analyze",
          "Probability Analyze",
          "Multiple Workspaces",
          "Advanced Charts",
        ]}
      />
      <IntroSection
        reverse
        heading="Candle Signal"
        smallDescription="Automatically detects price action patterns and signals potential market setups for you."
        description="Identify high probability entry and exit points using proven candlestick formations trusted by professional traders. Stay ahead of the market with real-time alerts tailored to your strategies and trading preferences."
        imageSrc="/images/candle-signal.png"
        features={["Signal Alerts", "Custom Indicators", "Market Insights"]}
      />
      <IntroSection
        heading="News Impact Analyze"
        smallDescription="Forecast and backtest forex news impact"
        description="AI-powered insights to analyze the real-time impact of economic news, events, and announcements on market price movements. Our AI detects meaningful patterns in historical candlesticks to guide smarter, forward-looking t"
        imageSrc="/images/news-impact.png"
        features={["News Scanner", "Impact Forecast", "Sentiment Analysis"]}
      />
      <IntroSection
        reverse
        heading="Mr. Candle AI Assistant"
        smallDescription="Ask Mr. Candle about trading topics, strategies, patterns, and market insights anytime"
        description="Your intelligent AI assistant, built to help you learn, interpret, and master candlestick patterns for more strategic trading. Receive personalized market insights and tailored trading education to support your growth and decision-making."
        imageSrc="/images/mr-candle.png"
        features={["AI Insights", "Trading Education", "Strategy Validation"]}
      />
    </div>
  );
};
