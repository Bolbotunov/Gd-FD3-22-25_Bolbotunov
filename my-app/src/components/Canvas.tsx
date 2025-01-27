
import useMyHook from "./UseMyHook";

export function Canvas() {
    let myHook = useMyHook()
    



    return <><div
    style = {{
        width:'200px',
        height:'200px',
        backgroundColor: myHook.color,
        margin:'20px',
        transition: '0.5s'
    }}
    onMouseEnter={(e) => myHook.tracking(e.clientX, e.clientY)}
    onMouseLeave={() => myHook.leave()}
    onMouseMove={(e) => myHook.tracking(e.clientX, e.clientY)}
    >
    </div>
    <div>X: {myHook.x}</div>
    <div>Y: {myHook.y}</div>
    </>
  }


export function TextCanvas() {
    let myHook = useMyHook()
    return <>
    <div><input type='number' onChange={e => myHook.tracking(e.target.valueAsNumber, null)}/></div>
    <div><input type='number' onChange={e => myHook.tracking(null, e.target.valueAsNumber)}/></div>
    <>---------</>
    <div>X: {myHook.x}</div>
    <div>Y: {myHook.y}</div>
    </>
  }