import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { MainTitle } from "../../styles/Fonts.styled";
import { useNavigate } from "react-router";
import {
  BlurContainer,
  Flex,
  InputStyle,
  ContentContainer
 } from "../../styles/Common.styled";
 import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";

export default function DiaryProductPage() {
  const dairyProducts = useSelector((state: RootState) => state.authSlice.products)
  const navigate = useNavigate();

  if (!dairyProducts) {
    return (
      <BlurContainer>
        <ContentContainer>
          <MainTitle>Product Not Found</MainTitle>
          <AddBtn onClick={() => navigate('/products')}>Ok</AddBtn>
        </ContentContainer>
      </BlurContainer>
    );
  }

return (
    <BlurContainer>
      <ContentContainer>
        diaryProdPage
      </ContentContainer>
    </BlurContainer>
  );
}