"use client"

import FriendContext from "@/context/FriendContext";

const Providers = ({children}) => {
    return (
        <div>
            <FriendContext>
                {children}
            </FriendContext>
        </div>
    );
};

export default Providers;