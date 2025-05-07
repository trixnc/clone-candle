"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <footer className="sticky bottom-0 py-4">
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is IC Candle?</AccordionTrigger>
                <AccordionContent>
                  IC Candle is an AI-powered trading platform that helps you
                  analyze market patterns, forecast news impact, and make
                  smarter trading decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How does News Impact Analyze help my trading?
                </AccordionTrigger>
                <AccordionContent>
                  News Impact Analyze provides insights into how economic news
                  and events affect market trends, helping you adjust your
                  strategies accordingly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I backtest with IC Candle?</AccordionTrigger>
                <AccordionContent>
                  Yes, IC Candle allows you to backtest your strategies using
                  historical data to improve confidence and accuracy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How does the Candle Signal feature work?
                </AccordionTrigger>
                <AccordionContent>
                  The Candle Signal feature identifies high-probability entry
                  and exit points using proven candlestick formations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do I need trading experience to use IC Candle?
                </AccordionTrigger>
                <AccordionContent>
                  No, IC Candle is designed for both beginners and experienced
                  traders, offering tools and insights to suit all skill levels.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Is IC Candle compatible with my trading tools?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, IC Candle integrates seamlessly with popular trading
                  platforms and tools to enhance your trading experience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

            {/* Ready to Try Section */}
            <div className="h-full max-w-[1400px] mt-12 mb-12 bg-gradient-to-r from-blue-900 to-sky-600 text-white rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">Ready to Try?</h2>
            <p className="text-lg">Start scan & analyze</p>
          </div>
          <div className="text-right">
            <p className="text-sm mb-4">Boost Your Trading using AI-powered analytic tools</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-md hover:shadow-lg transition">
                Get Started
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full shadow-md hover:bg-white hover:text-blue-900 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navbar */}
        <div className="flex items-center bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text text-xl font-semibold text-center py-2">
          <img src="/logo.png" alt="Logo" className="h-20 w-20 mr-4" />
          <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text font-bold text-2xl mr-280">
            IC Candle
          </span>
          <Link
            href="/product"
            className="hover:underline hover:shadow-md hover:shadow-blue-500 mx-4"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="hover:underline hover:shadow-md hover:shadow-blue-500 mx-4"
          >
            Pricing
          </Link>
          <Link
            href="/about-us"
            className="hover:underline hover:shadow-md hover:shadow-blue-500 mx-4"
          >
            About Us
          </Link>
        </div>
        <div className="flex justify-around my-10 text-lg text-gray-600">
          <p className="flex justify-around mr-200">
            © 2025 IC Candle ai, Inc. All rights reserved.
          </p>
          <p>
            <a
              href="/privacy-policy"
              className="underline hover:shadow-md hover:shadow-blue-500 hover:text-gray-800"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href="/terms-of-service"
              className="underline hover:shadow-md hover:shadow-blue-500 hover:text-gray-800"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </footer>
    </Container>
  );
};