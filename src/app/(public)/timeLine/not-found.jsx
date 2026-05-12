import React from 'react';
import Link from 'next/link';
import { FiClock, FiCalendar, FiPlusCircle } from 'react-icons/fi';

const TimelineEmpty = () => {
    return (
        <div className="min-h-[70dvh] flex flex-col items-center justify-center px-5 text-center">
           
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="relative bg-white p-6 rounded-full border-4 border-zinc-50 shadow-xl animate-bounce duration-[3000ms]">
                    <FiClock className="text-6xl text-green-600" />
                </div>
               
                <FiCalendar className="absolute -top-2 -right-2 text-3xl text-zinc-300 animate-spin duration-[10000ms]" />
            </div>

            
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 animate-pulse">
                    Timeline is Empty
                </h2>
                <p className="text-zinc-500 max-w-sm mx-auto">
                    You haven't recorded any interactions yet. Start a conversation or log a call to see your history here!
                </p>
            </div>

            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-in fade-in zoom-in duration-1000 delay-300">
                <Link 
                    href="/" 
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:bg-green-800 transition-all 
                    duration-500
                    hover:scale-105 active:scale-95"
                >
                    <FiPlusCircle className="text-xl" />
                    <span>Log First Interaction</span>
                </Link>
                
                <Link 
                    href="/" 
                    className="px-6 py-3 border-2 border-zinc-200 text-zinc-600 font-semibold rounded-xl hover:bg-zinc-50 transition-all"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default TimelineEmpty;