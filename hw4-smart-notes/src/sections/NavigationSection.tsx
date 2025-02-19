import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CommonStylesInput, CommonStylesFlexDiv, CommonStylesOption, CommonStylesSelect } from "../styles/CommonStyles.styled"
import { setFilter } from "../slices/componentsSlice";



export default function NavigationSection() {
    const [myInput, setMyInput] = useState('');
    const dispatch = useDispatch();
    const notes = useSelector((store: any) => store.componentsSlice.notes);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setMyInput(value);
        dispatch(setFilter(value));
      }

    return (
        <CommonStylesFlexDiv>
            <CommonStylesInput placeholder="Search..." value = {myInput}
             onChange={handleInputChange}/>
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