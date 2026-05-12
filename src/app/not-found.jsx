import React from 'react';
import Link from 'next/link';

const GlobalNotFound = () => {
    return (
        <div className="min-h-[80dvh] flex flex-col items-center justify-center text-center px-5">
            
            <h1 className="text-9xl font-extrabold text-zinc-200 tracking-widest relative animate-bounce">
                404
                <span className="absolute top-3/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl text-green-600  px-2 animate-ping">
                    Page Not Found
                </span>
            </h1>

            
            <div className="mt-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">
                    Oops! You've wandered off track.
                </h2>
                <p className="text-zinc-500 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, 
                    or is temporarily unavailable.
                </p>
            </div>

            
            <div className="mt-10">
                <Link 
                    href="/" 
                    className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block"
                >
                    Back to Home
                </Link>
            </div>

            
            <div className="mt-12 opacity-20">
                <div className="w-24 h-1 bg-zinc-300 rounded-full mx-auto"></div>
            </div>
        </div>
    );
};

export default GlobalNotFound;