import { useEffect, useState } from "react"


export default function useDailyKCal() {
    const [currentKCal, setcurrentKCal] = useState(0)

    // useEffect(() => {
    //     setCurrentDate(new Date())
    // }, [])
   
    return currentKCal;
}