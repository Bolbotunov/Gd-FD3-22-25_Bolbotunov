import { useEffect, useState } from "react"
import { UseDispatch, useSelector } from "react-redux"
import { CommonStylesInput, CommonStylesFlexDiv, CommonStylesOption, CommonStylesSelect } from "../styles/CommonStyles.styled"

export default function NavigationSection() {
    const [myInput, setMyInput] = useState('');

    const notes = useSelector((store: any) => store.componentsSlice.notes);

    const filteredMyInput = notes.filter((item: any) =>
        item.title?.includes(myInput) || item.text?.includes(myInput)
      );


    return (
        <CommonStylesFlexDiv>
            <p>{myInput}</p>
            <CommonStylesInput placeholder="Search..." value = {myInput} onChange={(e) => setMyInput(e.target.value)}/>
            <CommonStylesSelect>
                <CommonStylesOption value="work">Work</CommonStylesOption>
                <CommonStylesOption value="shop">Shop</CommonStylesOption>
                <CommonStylesOption value="health">Health</CommonStylesOption>
                <CommonStylesOption value="family">Family</CommonStylesOption>
                <CommonStylesOption value="friends">Friends</CommonStylesOption>
            </CommonStylesSelect>
        </CommonStylesFlexDiv>
    )
}