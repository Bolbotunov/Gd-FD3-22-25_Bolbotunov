import { useState } from "react";

export function useMyHook () {
    const [coordinates, setCoordinates] = useState({x: NaN, y: NaN});
  
    const tracking = (x: number | null, y: number | null) => {
      if (x === null && y === null) {
        return;
      }
  
      if (x === null) {
        setCoordinates( {...coordinates, y: Number(y)} );
        return;
      }
  
      if (y === null) {
        setCoordinates( {...coordinates, x: Number(x)} );
        return;
      }
  
      setCoordinates( {x: Number(x), y: Number(y)} );
    }
  
    const leave = () => {
      setCoordinates( {x: NaN, y: NaN} )
    }
  
    const isInbound = !isNaN(coordinates.x) && !isNaN(coordinates.y);
  
    return {
      coordinates,
      x: coordinates.x,
      y: coordinates.y,
      tracking,
      isInbound,
      leave
    }
  }