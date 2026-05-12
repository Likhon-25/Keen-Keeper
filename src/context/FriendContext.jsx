"use client"

import React, { createContext, useState } from 'react';
export const frContext = createContext()

const FriendContext = ({children}) => {

    const [friendData, setFriendData]=useState([])
    const data ={
       friendData, 
       setFriendData
    }

    return (
        <div>
            <frContext.Provider value={data}>
                {children}
            </frContext.Provider>
        </div>
    );
};

export default FriendContext;