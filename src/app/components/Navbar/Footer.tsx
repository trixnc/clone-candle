"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../Container";

export const Footer: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <Container>
      <footer className="sticky bottom-0 py-4">
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-20">
            Frequently Asked Questions
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
              id: "q1",
              question: "What is IC Candle?",
              answer:
          "IC Candle is a platform that provides AI-driven insights for traders to make informed decisions.",
              },
              {
              id: "q2",
              question: "How does IC Candle assist traders?",
              answer:
          "It offers tools like market analysis, news impact forecasting, and backtesting to enhance trading strategies.",
              },
              {
              id: "q3",
              question: "Is IC Candle suitable for beginners?",
              answer:
          "Yes, IC Candle is designed for both beginners and experienced traders, providing resources for all skill levels.",
              },
              {
              id: "q4",
              question: "What markets does IC Candle cover?",
              answer:
          "IC Candle covers a wide range of markets including stocks, forex, and cryptocurrencies.",
              },
              {
              id: "q5",
              question: "Is there a free trial available?",
              answer:
          "Yes, IC Candle offers a free trial for users to explore its features before committing to a subscription.",
              },
              {
              id: "q6",
              question: "How secure is my data with IC Candle?",
              answer:
          "IC Candle prioritizes user data security with advanced encryption and strict privacy policies.",
              },
            ].map(({ id, question, answer }) => (
              <div
              key={id}
              className="mb-4 p-4 transition rounded-lg bg-white shadow-md"
              >
              <button
          className="w-full text-left flex items-center"
          onClick={() => setOpenQuestion(openQuestion === id ? null : id)}
              >
            <span className="mr-6 text-blue-500">{openQuestion === id ? "-" : "+"}</span>
          {question}
              </button>
              {openQuestion === id && <p className="mt-2 ml-8">{answer}</p>}
              </div>
            ))}
            </div>
          </div>

          {/* Ready to Try Section */}
          <div className="w-full h-[300px] max-w-[1600px] mt-12 mb-12 bg-gradient-to-r from-blue-900 to-sky-600 text-white rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between">
            <div>
            <h2 className="text-5xl font-bold mb-4">Ready to Try?</h2>
            <p className="text-xl">Start scan & analyze</p>
            </div>
            <div className="text-right">
            <p className="text-lg mb-6">
              Boost Your Trading using AI-powered analytic tools
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-md hover:shadow-lg transition text-lg">
              Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full shadow-md hover:bg-white hover:text-blue-900 transition text-lg">
              Contact Us
              </button>
            </div>
            </div>
          </div>

          {/* Footer Navbar */}
          <footer className="flex items-center bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text text-xl font-semibold text-center py-2">
            <img src="/logo.png" alt="Logo" className="h-20 w-20 mr-4" />
            <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text font-bold text-2xl mr-280">
            IC Candle
            </span>
            <Link
            href="/product"
            className="underline mx-4"
            >
            Product
            </Link>
            <Link
            href="/pricing"
            className="underline mx-4"
            >
            Pricing
            </Link>
            <Link
            href="/about-us"
            className="underline mx-4"
            >
            About Us
            </Link>
          </footer>

          {/* Footer Bottom Section */}
          <div className="flex justify-around my-10 text-lg text-gray-600">
            <p>© 2025 IC Candle ai, Inc. All rights reserved.</p>
            <p>
            <a
              href="/privacy-policy"
              className="underline text-gray-800"
            >
              Privacy Policy
            </a>
            </p>
            <p>
            <a
              href="/terms-of-service"
              className="underline text-gray-800"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </Container>
  );
};