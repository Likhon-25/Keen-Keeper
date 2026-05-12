import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendCart = ({ friend }) => {
  
  const { id, name, status, picture, days_since_contact, tags } = friend;

  const statusBg = {
    "almost due": "bg-[#EFAD44]",
    "on-track": "bg-[#244D3F]",
    overdue: "bg-[#EF4444]",
  };

  return (
    <Link href={`/friends/${id}`}>
      <div className="relative group p-[3px] overflow-hidden rounded-2xl bg-zinc-100 h-full mx-4 lg:mx-0">
        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_0deg,transparent_25%,#22c55e,transparent_75%)] animate-border-rotate md:opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative border-2 border-zinc-100 rounded-xl p-6 flex flex-col items-center justify-center space-y-3 h-full bg-white z-8">
          <Image
            className="rounded-full  shadow-green-500 
          border-2 border-transparent
          backdrop-blur-2xl 
          bg-white/10
          transition-all
          duration-500 
          hover:border-green-500
          hover:shadow-green-500/40
          hover:scale-95 
          hover:border-2 
          hover:shadow-xl"
            width={100}
            height={100}
            src={picture}
            alt={name}
          />
          <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
          <p>{days_since_contact}d ago</p>
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="bg-[#CBFADB] px-2 py-1 text-[12px] rounded-full font-bold"
              >
                {tag}
              </p>
            ))}
          </div>
          <p
            className={`${statusBg[status]} px-2 py-1 rounded-full text-white text-[12px] font-bold `}
          >
            {status}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FriendCart;
