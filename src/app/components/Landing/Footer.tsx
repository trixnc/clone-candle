"use client";

import { useState } from 'react';
import Link from 'next/link';
import Container from '../Container';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <Container>
        <footer className="sticky bottom-0 py-4">
            <div className="container mx-auto text-center">
                <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold"> News impact analysis </h1>
                {/* slider card */}
                <div className='flex mt-4 w-64 h-22 border-2 shadow-lg rounded-lg bg-white'>

                </div>
                {/* secound slider card */}
                <div className="flex mt-4 w-64 h-22">
                </div>
            </div>
            {/* footer navbar */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text text-xl font-semibold text-center py-2">
                <img src="/logo.png" alt="Logo" className="h-20 w-20 mr-4" />
                <span className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-transparent bg-clip-text font-bold text-2xl ml-2">IC Candle</span>
                <Link href="/product" className="hover:underline mx-4">Product</Link>
                <Link href="/pricing" className="hover:underline mx-4">Pricing</Link>
                <Link href="/about-us" className="hover:underline mx-4">About Us</Link>
                <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">

                    </input>
                <button 
                    type="button" 
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                >
                    <span className="mr-2">Join our newsletter</span>
                    <span className="text-lg font-bold">+</span>
                </button>
            </div>
            <div className="flex justify-around mt-4 text-sm text-gray-600">
                <p>© 2024 IC Candle ai, Inc. All rights reserved.</p>
                <p>
                    <a href="/privacy-policy" className="underline hover:text-gray-800">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="underline hover:text-gray-800"> Terms of Service</a>
                </p>
            </div>
        </footer>
        </Container>
    );
};

export default Footer;