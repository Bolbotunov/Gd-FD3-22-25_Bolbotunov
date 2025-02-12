import { CommonStylesInput, CommonStylesFlexDiv, CommonStylesOption, CommonStylesSelect } from "../styles/CommonStyles.styled"

export default function NavigationSection() {
    return (
        <CommonStylesFlexDiv>
            <CommonStylesInput placeholder="Search..."/>
            <CommonStylesSelect>
                <CommonStylesOption value="option1">Option 1</CommonStylesOption>
                <CommonStylesOption value="option2">Option 2</CommonStylesOption>
                <CommonStylesOption value="option3">Option 3</CommonStylesOption>
            </CommonStylesSelect>
        </CommonStylesFlexDiv>
    )
}