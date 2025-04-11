"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import Container from "../components/Container";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>
            <nav className="bg-sky-50 sticky top-0 w-full h-20 flex items-center z-50 shadow-md px-4 sm:px-6 lg:px-8">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={44}
                        height={44}
                        className="mr-3"
                    />
                    <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-xl sm:text-2xl lg:text-3xl font-bold">
                        IC Candle
                    </h1>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden sm:flex ml-auto space-x-4">
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

                {/* <button
                    className="sm:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Image
                        src="/menu-icon.svg" // Replace with your menu icon
                        alt="Menu"
                        width={24}
                        height={24}
                    />
                </button>

                {isMenuOpen && (
                    <div className="absolute top-20 left-0 w-full bg-white shadow-md sm:hidden">
                        <div className="flex flex-col items-center space-y-4 py-4">
                            <Link
                                href="#"
                                className="font-bold text-gray-500 hover:text-blue-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="font-bold text-gray-500 hover:text-blue-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Features
                            </Link>
                            <Link
                                href="#"
                                className="font-bold text-gray-500 hover:text-blue-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                        </div>
                    </div> */}
                {/* )} */}
                <button
                    className="group relative flex items-center px-6 py-3 rounded-full bg-white cursor-pointer ml-auto hover:shadow-lg transition-all duration-500 ease-in-out space-x-3 overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0"></div>

                    <motion.div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-900 to-sky-600 z-10"
                        animate={{
                            x: isHovered ? "100%" : "0%",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        <Image
                            src="/icc/Frame 19.svg"
                            alt="Circular Icon"
                            width={40}
                            height={40}
                            className="m-auto"
                        />
                    </motion.div>

                    <span className="relative z-10 font-bold text-gray-700 group-hover:text-white transition-colors duration-500 ease-in-out">
                        Book demo
                    </span>
                </button>
            </nav>
        </Container>
    );
}