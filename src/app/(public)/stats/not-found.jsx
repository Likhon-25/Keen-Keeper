import React from 'react';
import Link from 'next/link';
import { FiUsers, FiUserPlus, FiArrowRight } from 'react-icons/fi';

const DashboardEmpty = () => {
    return (
        <div className="min-h-[75dvh] flex flex-col items-center justify-center px-6 text-center">
           
            <div className="relative mb-10">
                
                <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                
                <div className="relative bg-white p-8 rounded-3xl border border-zinc-100 shadow-2xl transform hover:rotate-3 transition-transform duration-500">
                    <FiUsers className="text-7xl text-green-700 animate-pulse" />
                    
                
                    <div className="absolute -top-4 -right-4 bg-green-600 text-white p-2 rounded-full shadow-lg animate-bounce">
                        <FiUserPlus className="text-xl" />
                    </div>
                </div>
            </div>

           
            <div className="max-w-md space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                    Your Circle is Empty
                </h2>
                <p className="text-zinc-500 text-lg leading-relaxed">
                    KeenKeeper works best when you have your friends here. Start adding your connections to nurture your relationships!
                </p>
            </div>

            
            <div className="mt-10 animate-in fade-in zoom-in duration-1000 delay-300">
                <Link 
                    href="/"
                    className="group flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl shadow-2xl hover:bg-green-700 transition-all duration-500 hover:scale-105 active:scale-95"
                >
                    <span>Add Your First Friend</span>
                    <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <p className="mt-6 text-sm text-zinc-400 font-medium">
                    Need help? <Link href="/" className="text-green-600 underline hover:text-green-700">Watch a quick tour</Link>
                </p>
            </div>
        </div>
    );
};

export default DashboardEmpty;