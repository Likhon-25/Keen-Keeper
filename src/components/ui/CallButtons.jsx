"use client";
import { frContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { PiChatText, PiVideoCameraBold } from "react-icons/pi";
import { toast } from "react-toastify";

const CallButtons = ({ friend }) => {
  const { friendData, setFriendData } = useContext(frContext);
  //   console.log(friendData, setFriendData);
  // console.log(friend)

  const handleCall = (type) => {
    const newEntry = {
      id: Date.now(),
      friend,
      type,
      timestamp: new Date().getTime(),
    };
    setFriendData([...friendData, newEntry]);

    toast.success(`${newEntry.type} ${newEntry.friend.name}`,{
      position:"top-center",
      autoClose:1500
      
    });
  };
  //   console.log(friendData);

  return (
    <div>
      <div className="grid grid-cols-3  gap-4">
        <div
          onClick={() => handleCall("audio")}
          className="flex flex-col items-center border border-zinc-200 rounded-md p-2 md:p-5 cursor-pointer transition-all duration-500 hover:scale-105 select-none"
        >
          <FiPhoneCall className="text-xl font-bold" />
          <p>Call</p>
        </div>
        <div
          onClick={() => handleCall("text")}
          className="flex flex-col items-center border border-zinc-200 rounded-md p-2 md:p-5 cursor-pointer transition-all duration-500 hover:scale-105 select-none"
        >
          <PiChatText className="text-xl font-bold" />
          <p>Text</p>
        </div>
        <div
          onClick={() => handleCall("video")}
          className="flex flex-col items-center border border-zinc-200 rounded-md p-2 md:p-5 cursor-pointer transition-all duration-500 hover:scale-105 select-none"
        >
          <PiVideoCameraBold className="text-xl font-bold" />
          <p>Video</p>
        </div>
      </div>
    </div>
  );
};

export default CallButtons;
