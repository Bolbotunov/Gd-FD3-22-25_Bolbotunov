
import{ ReactNode } from "react"

type MyWrapperProps = {
children:ReactNode;
}

export default function MyWrapper(props: MyWrapperProps) {
    return <div className="MyWrapper">
     {props.children}
    </div>
}