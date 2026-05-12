"use client";

import { frContext } from "@/context/FriendContext";
import { notFound } from "next/navigation";
import { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Stats = () => {
    const { friendData } = useContext(frContext);

  if (!friendData || friendData.length === 0) {
    return notFound();
  }

  const audio = friendData.filter((f) => f.type === "audio").length;
  const video = friendData.filter((f) => f.type === "video").length;
  const text = friendData.filter((f) => f.type === "text").length;

  const data = [
    { name: "Call", value: audio, fill: "#1C4C4A" },
    { name: "Video", value: video, fill: "#7e50d9" },
    { name: "Text", value: text, fill: "#15962f" },
  ];

  return (
    <div className=" max-w-7xl mx-auto my-16">
      <h1 className="text-2xl font-bold md:text-4xl mt-2 pl-4">
        Friendship Analytics
      </h1>
      <div className="flex  items-center justify-center mx-4   p-12   border-2 border-zinc-100 rounded-xl my-5 shadow-sm relative">
        <h3 className="absolute left-8 top-4">By Interaction Type</h3>
        <div className="w-full max-w-[400px] aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ bottom: 20 }}>
                <Pie
                  data={data}
                  innerRadius="75%"
                  outerRadius="100%"
                  cornerRadius={10}
                  paddingAngle={8}
                  dataKey="value"
                />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingTop: "20px" }}
                  formatter={(value) => (
                    <span className="text-sm font-medium ml-1">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;