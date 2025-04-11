import React from "react";
import Container from "../components/Container";
import { Link } from "lucide-react";
import { Button } from "@/components/ui/button"


export default function Navbar() {
    return (
        <Container>
            <nav className="bg-sky-50 flex w-full h-20 items-center">
                <img src="logo§.png" alt="Logo" className="ml-2.5 h-11 w-11" />
                <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold">
                    IC Candle
                </h1>
                <Button variant="ghost">Home</Button>
                <Link to="#" className="flex ml-2.5 font-bold text-gray-500 hover:text-blue-500 selection:text-blue-500">Features</Link>
                <Link to="#" className="flex ml-2.5 font-bold text-gray-500 hover:text-blue-500 selection:text-blue-500">Pricing</Link>
                <button className="group flex items-center px-4 py-2 rounded-full bg-white cursor-pointer ml-auto hover:shadow-lg transition-shadow duration-300 space-x-2 relative overflow-hidden">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-sky-600 transform transition-transform duration-700 ease-out group-hover:translate-x-full group-hover:scale-110 absolute left-0">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 6L10 10M10 10V7M10 10H7"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <span className="font-bold text-gray-700 relative z-10 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
                        Book demo
                    </span>
                </button>
            </nav>
        </Container>
    );
}