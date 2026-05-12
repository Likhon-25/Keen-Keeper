import React from "react";

const GlobalLoading = () => {
  return (
    <div className="fixed flex flex-col items-center justify-center inset-0 z-[9999]">
      <div className="flex items-center justify-center select-none">
        <div className="bg-white/80 h-20 w-20 p-2 backdrop:blur-2xl rounded-full relative border-4 border-zinc-100 border-t-green-600 animate-spin "></div>
        <div className="w-10 h-10 absolute flex items-center justify-center bg-green-600 shadow-xl shadow-green-200  rounded-full">
          <p className="text-white font-bold">KK</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="tracking-tight animate-pulse text-zinc-800 font-semibold font-lg">
          KeenKeeper is Loading
        </span>
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-green-800  rounded-full animate-[bounce_1s_infinite_100ms]"></span>
          <span className="w-2 h-2 bg-green-800  rounded-full animate-[bounce_1s_infinite_300ms]"></span>
          <span className="w-2 h-2 bg-green-800  rounded-full animate-[bounce_1s_infinite_300ms]"></span>
        </div>
      </div>

      <p className="absolute bottom-10 text-zinc-400 text-sm font-medium tracking-widest uppercase">
        Preparing your connections
      </p>
    </div>
  );
};

export default GlobalLoading;
