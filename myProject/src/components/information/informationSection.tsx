import { InformationWrapper } from "./informationSection.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { MainSubTitle } from "../../styles/Fonts.styled";


export default function InformationSection() {
    return (
        <>
        <InformationWrapper>
            <MainTitle>
                Welcome to our Application, name!
                </MainTitle>
            <MainSubTitle>
                This app will help you control your diet and properly monitor your nutrients
                </MainSubTitle>
        </InformationWrapper>
        </>
      );
}