"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Container>
            <nav className="bg-sky-50 sticky top-0 w-full h-20 flex items-center z-50 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
                <Image
                src="/logo.png"
                alt="Logo"
                width={44}
                height={44}
                className="mr-3"
                />
                <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-bold mr-2.5">
                IC Candle
                </h1>
            </div>

            <div className="hidden sm:flex space-x-4">
                <Link
                href="#"
                className="font-bold text-gray-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text transition-all duration-300"
                >
                Home
                </Link>
                <Link
                href="#"
                className="font-bold text-gray-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text transition-all duration-300"
                >
                Features
                </Link>
                <Link
                href="#"
                className="font-bold text-gray-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text transition-all duration-300"
                >
                Pricing
                </Link>
            </div>
            <button
                    className="group relative flex items-center px-6 py-3 rounded-full bg-white cursor-pointer ml-auto hover:shadow-lg transition-all duration-500 ease-in-out overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left z-10"></div>

                    <motion.div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-900 to-sky-600 z-20 ${
                            isHovered ? "left-auto right-4" : "left-4"
                        }`}
                        animate={{
                            x: isHovered ? "100%" : "0%",
                            opacity: isHovered ? 1 : 0.8,
                        }}
                        transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.4,
                        }}
                    >
                        {isHovered ? (
                            <Image
                                src="/icc/Frame 18.svg"
                                alt="Arrow Icon"
                                width={36}
                                height={36}
                                className="m-auto"
                            />
                        ) : (
                            <Image
                                src="/icc/Frame 19.svg"
                                alt="Circular Icon"
                                width={36}
                                height={36}
                                className="m-auto"
                            />
                        )}
                    </motion.div>

                    <motion.span
                        className={`relative z-30 font-bold text-gray-700 group-hover:text-white ${
                            isHovered ? "ml-auto mr-4" : "ml-4"
                        }`}
                        animate={{
                            color: isHovered ? "#FFFFFF" : "#4B5563",
                            scale: isHovered ? 1.1 : 1,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                    >
                        {isHovered ? "Start saving" : "Book a Demo"}
                    </motion.span>
                </button>
            </nav>
        </Container>
    );
}