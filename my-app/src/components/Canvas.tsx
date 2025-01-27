import { useState } from "react"


export default function Canvas() {
    const [coord, setCoord] = useState({x: NaN, y: NaN})
  
    function tracking(x: number, y:number) {
      setCoord({x, y})
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


    return <><div
    style = {{
        width:'200px',
        height:'200px',
        backgroundColor: color,
        margin:'20px',
        transition: '0.5s'
    }}
    onMouseEnter={(e) => tracking(e.clientX, e.clientY)}
    onMouseLeave={() => setCoord({x:NaN, y:NaN})}
    onMouseMove={(e) => tracking(e.clientX, e.clientY)}
    >
    </div>
    <div>X: {coord.x}</div>
    <div>Y: {coord.y}</div>
    </>
    
  
  }