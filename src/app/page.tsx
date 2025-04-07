import React from 'react';
import Container from './components/Container';

export default function Home() {
  return (
    <Container>
    <nav className='flex w-full space-x-6 h-20 justify-around items-center border rounded-b-xl bg-white'>
      <h1 className='bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 inline-block text-transparent bg-clip-text text-3xl'> IC Candle </h1>
      <a href='#' className='flex text-gray-600 hover:text-blue-500 selection:text-blue-500'>Home </a>
      <a href='#' className='flex text-gray-600 hover:text-blue-500 selection:text-blue-500'>Features </a>
      <a href='#' className='flex text-gray-600 hover:text-blue-500 selection:text-blue-500'>Pricing </a>
      <button className='flex justify-center item-center w-25 border rounded-2xl bg-white cursor-pointer'>Get Started</button>
    </nav>
    <div className='flex w-full space-x-3 justify-center bg-white'>
    <div className='flex items-center justify-center space-x-5 text-5xl'>Insight Unleashed</div>
    <div className='flex items-center justify-center space-x-5 text-5xl border rounded-4xl bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 text-white'> AI-Powered,</div>
    <div className='flex items-center justify-center space-x-5 text-5xl'> Data-Driven Decisons</div>
    <p className='flex item-center justify-center text-neutral-500'>Backtest, analyze, and track the market with intelligent tools</p>
    </div>
    </Container>
  );
};
