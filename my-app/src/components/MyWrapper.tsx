
import{ ReactNode } from "react"
// import style from './myWrapper.module.css'

type MyWrapperProps = {
children:ReactNode;
}

export default function MyWrapper(props: MyWrapperProps) {
    return <div className="MyWrapper">
     {props.children}
    </div>
}