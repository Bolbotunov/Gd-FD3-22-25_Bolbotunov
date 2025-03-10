import { InformationWrapper } from "./informationSection.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { MainSubTitle } from "../../styles/Fonts.styled";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export default function InformationSection() {
    const currentUser = useSelector((state: RootState) => state.authSlice.userName);

    return (
        <>
        <InformationWrapper>
            <MainTitle>
                Welcome to our Application, {currentUser}!
                </MainTitle>
            <MainSubTitle>
                This app will help you control your diet and properly monitor your nutrients
                </MainSubTitle>
        </InformationWrapper>
        </>
      );
}