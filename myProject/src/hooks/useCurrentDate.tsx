import { useEffect, useState } from "react"


export default function useCurrentDate() {
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        setCurrentDate(new Date())
    }, [])
   
    return currentDate.toLocaleDateString();
}