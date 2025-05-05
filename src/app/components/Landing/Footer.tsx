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

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <footer className="sticky bottom-0 py-4">
        <div className="container mx-auto text-center">
          <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
            News impact analysis
          </h1>
          {/* Slider card */}
          <div className="mt-4 p-3 w-125 h-95 before:absolute before:left-0 before:top-0 before:h-95 before:w-1 before:rounded-l-xl before:bg-gradient-to-b before:from-[#3D32D5] before:to-[#32D583] bg-white">
            <div className="flex flex-row">
              <Image
                src="./icc/lightning-01.svg"
                alt="Logo"
                width={25}
                height={25}
                className="mr-3 m-2"
              />
              <div className="pr-50 mt-2 text-lg">Stock</div>
              <div className="border rounded-xl h-full p-1 bg-yellow-50 text-green-400">
                Confidence score: 90%
              </div>
            </div>
            <div className="flex flex-col items-start font-bold mb-2">
              Gold Rises for 2nd Session
            </div>
            <div className="flex flex-col items-start mb-2">Summary:</div>
            <div className="text-sm text-neutral-500">
              Gold drifted toward $2,800 per ounce on Friday, reaching its
              all-time high as investors sought safety after US President Donald
              Trump reiterated tariff threats.
            </div>
            <div className="flex flex-col items-start mb-2">Market impact</div>
            <div className="text-sm text-neutral-500 mb-2">
              Gold drifted toward $2,800 per ounce on Friday, reaching its
              all-time high as investors sought safety after US President Donald
              Trump reiterated tariff threats.{" "}
            </div>
            <div className="flex flex-row justify-between text-neutral-500 mb-2">
              1 hour
              <div className="">Source:ikon.mn</div>
            </div>
            <div className="flex flex-row mx-5 items-center">
              <div className="flex flex-row border p-2 mr-5 rounded-xl">
                <img
                  src="./icc/US.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="mr-3 m-2"
                />
                <div className="flex items-center">USD Bullish</div>
              </div>
              <div className="flex flex-row border w-30 p-2 rounded-xl ">
                <img
                  src="./icc/icon.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="mr-3 m-2"
                />
                <div className="flex items-center">Risk-off</div>
              </div>
            </div>
          </div>
          {/* Second slider card */}
          <div className="flex mt-4 w-64 h-22"></div>
        </div>

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

export default Footer;