import CallButtons from "@/components/ui/CallButtons";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FiArchive } from "react-icons/fi";
import { MdNotificationsPaused } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export async function generateMetadata({params}) {
  const {id}=await params;
  const friends = await PromiseData() 
  const friend = friends.find(f=> f.id ==id)
  console.log(params)
  if(!friend){
    return{
      title:"Friend Not Found | KeenKeeper"
    }
  }
  return{
    title:`${friend.name} | Details`,
    description:friend.bio || `View connection details for ${friend.name}`,
    icons:{
      icon: friend.picture,
      shortcut:friend.picture,
      apple:friend.picture,
    },
    images: [
      {
        url: friend.picture,
        width: 800,
        height: 800,
      },
    ],
  }

}


const PromiseData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/amirulislambd/friends-data/refs/heads/main/friends-data",
  );
  const data = await res.json();
  return data.friends;
};
const FriendDetails = async ({ params }) => {
  const { id } = await params;
  const friends = await PromiseData();
  const friend = friends.find((friendId) => friendId.id == id);
  if (!friend) {
    notFound();
  }
 

  return (
    <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto my-5 md:my-8">
      <div className="space-y-5 lg:col-span-1 col-span-3 mx-2 lg:mx-0">
        <div className="border-2 border-zinc-100 rounded-xl p-5 flex flex-col space-y-2 items-center justify-center ">
          <Image
            className="rounded-full hover:border-2 border-green-500 hover:shadow-2xl transition-all duration-500 hover:scale-95"
            width={100}
            height={100}
            src={friend.picture}
            alt={friend.name}
          />
          <h3 className="text-xl md:text-2xl font-bold">{friend.name}</h3>
          <p>{friend.days_since_contact}d ago</p>
          <div className="flex gap-2">
            {friend.tags.map((tag, i) => (
              <p
                key={i}
                className="bg-[#CBFADB] px-3 py-1 text-[12px] rounded-full font-bold"
              >
                {tag}
              </p>
            ))}
          </div>
          <p
            className={`px-3 py-1 rounded-full font-bold text-white text-[12px]
    ${friend.status == "almost due" && "bg-[#EFAD44]"}
    ${friend.status == "on-track" && "bg-[#244D3F]"}
    ${friend.status == "overdue" && "bg-[#EF4444]"}
    
    `}
          >
            {friend.status}
          </p>

          <p className="text-center text-gray-500">{friend.bio}</p>
          <p className=" text-gray-500 font-semibold">{friend.email}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-2 md:gap-4 lg:gap-2">
          <div className="flex items-center justify-center gap-1 md:font-bold border-2  border-zinc-200 rounded-lg p-3 hover:bg-blue-100 hover:border-blue-300 transition-all shadow-sm cursor-pointer">
            <MdNotificationsPaused />
            <span className="text-center">Snooze 2 weeks</span>
          </div>
          <div className="flex text-center items-center justify-center gap-1 md:font-bold border-2  border-zinc-200 rounded-lg p-3 hover:bg-emerald-100 hover:border-emerald-300 transition-all shadow-sm cursor-pointer">
            <FiArchive />
            <span>Archive</span>
          </div>
          <div className="flex text-center items-center justify-center gap-1 md:font-bold border-2  border-zinc-200 rounded-lg p-3 text-red-500 hover:bg-red-100 hover:border-red-300 transition-all shadow-sm cursor-pointer">
            <RiDeleteBin6Line />
            <span>Delete</span>
          </div>
        </div>
      </div>
      <div className="space-y-5  md:space-y-8 lg:col-span-2 col-span-3 mx-2 lg:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center py-4 md:py-8 lg:py-16 border rounded-md border-zinc-100 shadow-sm">
            <span className="font-bold text-lg md:text-2xl lg:text-4xl">
              {friend.days_since_contact}
            </span>{" "}
            <span>Days Since Contact</span>
          </div>
          <div className="flex flex-col items-center py-4 md:py-8 lg:py-16  border rounded-md border-zinc-100 shadow-sm">
            <span className="font-bold text-lg md:text-2xl lg:text-4xl">{friend.goal}</span>{" "}
            <span>Goal (Days)</span>
          </div>
          <div className="flex flex-col items-center py-4 md:py-8 lg:py-16 border rounded-md border-zinc-100 shadow-sm">
            <span className="font-bold text-lg md:text-2xl lg:text-4xl">
              {friend.next_due_date}
            </span>{" "}
            <span>Next Due </span>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 md:py-8 lg:py-12 px-2 md:px-4  border rounded-md border-zinc-100 shadow-sm">
          <div className="space-y-3">
            <h3 className="font-semibold">Relationship Goal</h3>
            <p>
              Connect every{" "}
              <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>
          <button className="btn btn-sm">Edit</button>
        </div>
        <div className="border border-zinc-200 rounded-md p-2 py-4 md:py-8 px-2 md:px-4   space-y-2">
          <h3 className="font-bold">Quick Check-In</h3>

          <CallButtons friend={friend}/>

         
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;