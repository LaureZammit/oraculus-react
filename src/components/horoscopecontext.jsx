import { createContext, useContext, useState } from "react";

import horoscopeDatas from '../data/horoscope.json'

const HoroscopeContext = createContext()

export function HoroscopeProvider ({ children }) {
    const [horoscopeData, setHoroscopeData] = useState(horoscopeDatas);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <HoroscopeContext.Provider value={{
            horoscopeData,
            currentIndex,
            setCurrentIndex
        }}>
            {children}
        </HoroscopeContext.Provider>
    )
}

export function useHoroscopeContext() {
    return useContext(HoroscopeContext);
}