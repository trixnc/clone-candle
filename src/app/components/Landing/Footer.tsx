"use client";

import { useState } from 'react';
import Link from 'next/link';
import Container from '../Container';
import Image from 'next/image';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <Container>
        <footer className="sticky bottom-0 py-4">
            <div className="container mx-auto text-center">
                <h1 className="bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl font-bold"> News impact analysis </h1>
                {/* slider card */}
                <div className='mt-4 p-3 w-125 h-95 border-l-indigo-500 border rounded-xl bg-white'>
                     <div className="flex flex-row">
                                    <Image
                                    src="./icc/lightning-01.svg"
                                    alt="Logo"
                                    width={25}
                                    height={25}
                                    className="mr-3 m-2"
                                    />
                    <div className='pr-50 mt-2 text-lg'>Stock</div>
                    <div className='border rounded-xl h-full p-1 bg-yellow-50 text-green-400'>Confidence score: 90%</div>
                    </div>
                    <div className='flex flex-col items-start font-bold mb-2'>Gold Rises for 2nd Session</div>
                    <div className='flex flex-col items-start mb-2'>Summary:</div>
                    <div className='text-sm text-neutral-500'>Gold drifted toward $2,800 per ounce on Friday, reaching its all-time high as investors sought safety after US President Donald Trump reiterated tariff threats.</div>
                    <div className='flex flex-col items-start mb-2'>Market impact</div>
                    <div className='text-sm text-neutral-500 mb-2'>Gold drifted toward $2,800 per ounce on Friday, reaching its all-time high as investors sought safety after US President Donald Trump reiterated tariff threats. </div>
                    <div className='flex flex-row justify-between text-neutral-500 mb-2'>1 hour
                    <div className=''>Source:ikon.mn</div>
                    </div>
                    <div className='flex flex-row mx-5 items-center'>
                        <div className='flex flex-row border p-2 mr-5 rounded-xl'>
                            <img
                            src="./icc/US.png"
                            alt="Logo"
                            width={20}
                            height={20}
                            className="mr-3 m-2"
                            />
                    <div className='flex items-center'>USD Bullish</div>
                    </div>
                    <div className='flex flex-row border w-30 p-2 rounded-xl '>  
                         <img
                            src="./icc/icon.png"
                            alt="Logo"
                            width={20}
                            height={20}
                            className="mr-3 m-2"
                            />
                    <div className='flex items-center'>Risk-off</div>
                    </div>
                    </div>
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