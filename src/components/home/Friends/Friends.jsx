import FriendCart from "@/components/ui/FriendCart";
import React from "react";

const PromiseData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Likhon-25/friends-data/refs/heads/main/friendData.json",
  );
  const data = await res.json();
  return data;
};

const Friends = async () => {
  const friends = await PromiseData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {friends.map((friend) => (
        <FriendCart key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;
