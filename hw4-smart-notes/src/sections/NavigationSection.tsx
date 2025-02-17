import { CommonStylesInput, CommonStylesFlexDiv, CommonStylesOption, CommonStylesSelect } from "../styles/CommonStyles.styled"

export default function NavigationSection() {
    return (
        <CommonStylesFlexDiv>
            <CommonStylesInput placeholder="Search..."/>
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