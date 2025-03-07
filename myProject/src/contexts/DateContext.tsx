import React, { createContext, useState, useContext, useEffect } from 'react'

export type CurrentDateType = Date;

type DateContextType = {
    currentDate: CurrentDateType
}

export const DateContext = createContext<DateContextType | null>(null);

export const useDateContext = () => useContext(DateContext);

export const DateProvider = ({ children }: any ) => {
    const [currentDate, setCurrentDate] = useState<CurrentDateType>(new Date())
    useEffect(() => {
        setCurrentDate(new Date())
    }, [])

    return <DateContext.Provider value = {{ currentDate }}>{ children }</DateContext.Provider>
}

