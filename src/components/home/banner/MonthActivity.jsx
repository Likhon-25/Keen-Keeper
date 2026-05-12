'use client'

import { frContext } from "@/context/FriendContext";
import { useContext } from "react";

const MonthActivity = () => {
    const {friendData}=useContext(frContext)
    return (
        <div className={`${friendData.length <=0 ?'text-red-500':'text-green-600'}`}>
            {friendData.length}
        </div>
    );
};

export default MonthActivity;