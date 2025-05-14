"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

export const Navbar = (): React.ReactElement => {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container>
            <nav
                className={`container sticky top-0 w-full h-25 flex items-center z-50 px-2 sm:px-6 lg:px-3 border rounded-2xl transition-all duration-300 ${
                    isScrolled ? "bg-sky-50" : "bg-transparent"
                }`}
            >
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={44}
                        height={44}
                        className="mr-3"
                    />
                    <a
                        href="/#"
                        className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-bold mr-7"
                    >
                        IC Candle
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="hidden sm:flex space-x-4">
                    <Link
                        href="/features"
                        className="font-bold text-gray-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text transition-all duration-300"
                    >
                        Features
                    </Link>
                    <Link
                        href="/Pricing"
                        className="font-bold text-gray-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text transition-all duration-300"
                    >
                        Pricing
                    </Link>
                </div>
                {/* Button Section */}
<button
  className="group relative flex items-center px-6 py-3 rounded-full bg-white cursor-pointer ml-auto hover:shadow-lg transition-all duration-500 ease-in-out overflow-hidden"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Background Animation */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0"></div>

  {/* "Try now" Button */}
  <span
    className={`px-3 text-lg transition-all duration-500 z-20 ${
      isHovered ? "opacity-0 -translate-x-[20px]" : "opacity-100 translate-x-0"
    }`}
  >
    Try now
  </span>

  {/* "Sign in" Button */}
  <span
    className={`absolute block text-lg text-white transition-all duration-500 z-20 ${
      isHovered ? "opacity-100 translate-x-[10px]" : "opacity-0 translate-x-0"
    }`}
  >
    Sign in
  </span>
</button>
            </nav>
        </Container>
    );
};