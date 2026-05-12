
import { FaUserFriends } from 'react-icons/fa';
import { Si1001Tracklists, SiBasicattentiontoken, SiInteractiondesignfoundation } from 'react-icons/si';
import MonthActivity from './MonthActivity';
import Link from 'next/link';


const OverviewCards = async () => {

  const res = await fetch(
    "https://raw.githubusercontent.com/amirulislambd/friends-data/refs/heads/main/friends-data",
  );
  const data = await res.json();
  const friends = data.friends
const onTrack = friends.filter(fr=> fr.status === 'on-track').length
const needAttention = friends.filter(fr=> fr.status === 'overdue'|| fr.status === "almost due").length
  const totalFriend = friends.length

  console.log({totalFriend,onTrack,needAttention})



    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-5 md:mt-10 lg:mt-16">
                <div className="border border-zinc-100 shadow-sm  py-4 px-8 md:p-8 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out select-none">
                  <span className="bg-zinc-100 p-3 shadow-sm rounded-full text-xl">
                    <FaUserFriends />
                  </span>
                  <h3 className="text-xl font-bold text-green-600">{totalFriend}</h3>
                  <p className="text-sm md:text-lg">Total Friends</p>
                </div>
                <div className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out select-none">
                  <span className="bg-zinc-100 p-3 shadow-sm rounded-full text-xl">
                    <Si1001Tracklists />
                  </span>
                  <h3 className="text-xl font-bold text-green-600">{onTrack}</h3>
                  <p className="text-sm md:text-lg">On Track</p>
                </div>
                <div className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center transition-all hover:scale-105 duration-500 ease-in-out select-none">
                  <span className="bg-zinc-100 p-3 shadow-sm rounded-full text-xl">
                    <SiBasicattentiontoken />
                  </span>
                  <h3 className="text-xl font-bold text-[#FFCC66]">{needAttention}</h3>
                  <p className="text-xs md:text-lg">Need Attention</p>
                </div>
                <Link href='/timeLine' className="border border-zinc-100 shadow-sm p-5 flex flex-col items-center text-center transition-all hover:scale-105 duration-500 ease-in-out select-none">
                  <span className="bg-zinc-100 p-3 shadow-sm rounded-full text-xl">
                    <SiInteractiondesignfoundation />
                  </span>
                  <h3 className="text-lg font-bold"><MonthActivity/></h3>
                  <p className="text-xs  md:text-lg">Interactions This Month</p>
                </Link>
              </div>
    );
};

export default OverviewCards;