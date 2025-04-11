import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";

export default function Navbar() {
    return (
        <Container>
            <nav className="bg-sky-50 flex w-full h-20 items-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={44}
                    height={44}
                    className="ml-2.5"
                />
                <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
                    IC Candle
                </h1>
                <Link href="#" className="flex ml-2.5 font-bold text-gray-500 hover:text-blue-500 selection:text-blue-500">Home</Link>
                <Link href="#" className="flex ml-2.5 font-bold text-gray-500 hover:text-blue-500 selection:text-blue-500">Features</Link>
                <Link href="#" className="flex ml-2.5 font-bold text-gray-500 hover:text-blue-500 selection:text-blue-500">Pricing</Link>
                <button className="group relative flex items-center px-6 py-3 rounded-full bg-white cursor-pointer ml-auto hover:shadow-lg transition-all duration-500 ease-in-out space-x-3 overflow-hidden">

    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0"></div>

    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full group-hover:translate-x-full transition-transform duration-500 ease-in-out z-10">
        <Image
            src="/icc/Frame 19.svg" 
            alt="Circular Icon"
            width={40}
            height={40}
            className="m-auto transition-opacity duration-500 ease-in-out group-hover:opacity-0" // Smoothly fade out on hover
        />
        <Image
            src="/icc/Frame 18.svg"
            alt="Circular Icon Hover"
            width={40}
            height={40}
            className="m-auto absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" // Smoothly fade in on hover
        />
    </div>

    <span className="relative z-10 font-bold text-gray-700 group-hover:text-white transition-colors duration-500 ease-in-out">
        Book demo
    </span>
</button>
            </nav>
        </Container>
    );
}