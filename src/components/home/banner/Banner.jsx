import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  Si1001Tracklists,
  SiBasicattentiontoken,
  SiInteractiondesignfoundation,
} from "react-icons/si";
import OverviewCards from "./OverviewCards";

const Banner = () => {
  return (
    <div className="flex flex-col items-center my-5 md:my-8 lg:my-12">
      <div className="flex flex-col items-center space-y-5 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-green-800 text-white">+ Add a Friend</button>
      </div>
      <OverviewCards/>
    </div>
  );
};

export default Banner;
