import { useState } from "react"
export default function useMyHook() {
    const [coord, setCoord] = useState({x: NaN, y: NaN})
  
    function tracking(x: number | null, y:number | null) {
        if( x=== null && y === null) {
            return;
    }
      if(x === null) {
        setCoord({...coord, y: Number(y)})
        return;
      }
      if(y === null) {
        setCoord({...coord, x: Number(x)})
        return;
      }
      setCoord({x: Number(x), y:Number(y)})
    }

function leave() {
    setCoord({x: NaN, y:NaN})
}

    let inBound = !isNaN(coord.x) && !isNaN(coord.y)
    let color: string;

if(inBound) {
    if(coord.x + coord.y > 650) {
        color = 'blue'
    } else {
        color = 'red'
    }
} else {
    color = 'yellow'
}

return {
    x:coord.x,
    y:coord.y,
    tracking,
    leave,
    color,
}
}