"use client";
import { frContext } from "@/context/FriendContext";
import { notFound } from "next/navigation";
import { useContext, useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { PiChatCircleTextLight } from "react-icons/pi";
import SearchNotFound from "./SearchNotFound";

const TimeLine = () => {
  const { friendData } = useContext(frContext);

  const [filterType, setFilterType] = useState("all");

  const [searchTerm, setSearchTerm] = useState();

  const filteredData = friendData.filter((item) => {
    const matchesType = filterType === "all" || item.type == filterType;

    const name = item.friend.name || "";
    const matchesSearch = name
      .toLowerCase()
      .includes(searchTerm || "".toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto my-5 md:my-10">

      <div className="flex flex-col md:flex-row justify-between  mx-2 lg:mx-0 gap-3 mb-2">
            <select
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-zinc-200  select outline-none w-full md:max-w-xs p-2 rounded-md"
            >
              <option value="all">All</option>
              <option value="audio">Audio Calls</option>
              <option value="video">Video Calls</option>
              <option value="text">Text Messages</option>
            </select>
            <div>
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="search"
                name="search"
                id=""
                placeholder="search your friend"
                className="border border-zinc-200 p-2 rounded-md outline-none w-full lowercase"
              />
            </div>
          </div>
  
    {  friendData.length > 0 ? (
      <div>
        {filteredData.length>0 ? 
        <div className="grid gap-2  py-5">
          
          {filteredData.length > 0
            ? filteredData.map((friend) => (
                <div 
                  className="border p-2 md:p-4 border-zinc-200 rounded-xl flex items-center gap-4 mx-2 lg:mx-0"
                  key={friend.id}
                >
                  <div className="bg-zinc-100 p-2 rounded-full shadow-md">
                    {friend.type === "audio" ? (
                      <BiSolidPhoneCall className="text-2xl md:text-4xl" />
                    ) : friend.type === "text" ? (
                      <PiChatCircleTextLight className="text-2xl md:text-4xl" />
                    ) : friend.type === "video" ? (
                      <FaVideo className="text-2xl md:text-4xl" />
                    ) : (
                      notFound()
                    )}
                  </div>
                  <div>
                    <p className="flex gap-1">
                      <span className="font-bold">{friend.type} </span>
                      <span>with</span>
                      <span>{friend?.friend?.name}</span>
                    </p>
                    <p>
                      {" "}
                      {new Date(friend.timestamp).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))
            : ""}
        </div>:<SearchNotFound />
        }
      </div>
    ) : (
      notFound()
    )}
    </div>
  )
    
};

export default TimeLine;
