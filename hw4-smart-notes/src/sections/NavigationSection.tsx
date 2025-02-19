import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CommonStylesInput, CommonStylesFlexDiv, CommonStylesOption, CommonStylesSelect } from "../styles/CommonStyles.styled"
import { setFilter } from "../slices/componentsSlice";
import { choseSelectedTag } from "../slices/componentsSlice";



export default function NavigationSection() {
    const [myInput, setMyInput] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const dispatch = useDispatch();
    const notes = useSelector((store: any) => store.componentsSlice.notes);
    const tags = useSelector((store: any) => store.tagsSlice);

    function handleInputChange(e: any) {
        setMyInput(e);
        dispatch(setFilter(e));
    }

    function handleTagChange(e: any) {
        setSelectedTag(e);
        dispatch(choseSelectedTag(e));
    }


    return (
        <CommonStylesFlexDiv>
          <CommonStylesInput placeholder="Search..." value = {myInput}
             onChange={(e) => handleInputChange(e.target.value)}/>
            <CommonStylesSelect value={selectedTag}
            onChange={(e) => handleTagChange(e.target.value)}>
                 <CommonStylesOption value="">All tags</CommonStylesOption>
            {tags.map((item:any) => (
                <CommonStylesOption value={item.title}>
                    {item.title}
                </CommonStylesOption>
            ))}
          </CommonStylesSelect>
        </CommonStylesFlexDiv>
    )
}