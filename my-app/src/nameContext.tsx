import { Children, createContext } from "react";
import { useState, ReactNode } from "react";

export type NameContext = {
    num:number;
    setNum:(num: number) => void;
    showNum:string;
    setShowNum:(showNum: string) => void;
  }


export const nameContext = createContext<NameContext>({} as NameContext)

export const NameProvider = (props: { children?: ReactNode }) => {
  
  const [num, setNum] = useState<number>(NaN)
  const [showNum, setShowNum] = useState('')

  return (
    <nameContext.Provider value = {{num, setNum, showNum, setShowNum }}>
      {props.children}
    </nameContext.Provider>
  )

}