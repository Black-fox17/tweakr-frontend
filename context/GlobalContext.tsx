"use client"

import React, { createContext, useState, useContext, ReactNode } from "react";

type GlobalStateType = {
    subscriptionType: string;
    amount: number;
    setSubscriptionType: (type: string) => void;
    setAmount: (amount: number) => void;
};

const defaultState: GlobalStateType = {
    subscriptionType: "",
    amount: 0,
    setSubscriptionType: () => { },
    setAmount: () => { },
};

const GlobalContext = createContext<GlobalStateType>(defaultState);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [subscriptionType, setSubscriptionType] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    return (
        <GlobalContext.Provider
            value={{
                subscriptionType,
                amount,
                setSubscriptionType,
                setAmount,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

