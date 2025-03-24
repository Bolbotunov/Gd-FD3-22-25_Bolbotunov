import { Flex, ContentContainer } from "../../styles/Common.styled";
import { BlurContainer } from "../../styles/Common.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { NutrientValue, NutrientRow, NutrientLabel } from "../../pages/productsPage/ProductsPage.styled";
import { AddBtn } from "../../styles/Buttons.styled";
import { ProductType } from "../../store/AuthSlice";

type ViewingModeProps = {
  dictionaryProducts: ProductType;
  navigate: (path: string) => void;
  origin: string;
  showWeight?: boolean;
}

export default function ViewingMode({
  dictionaryProducts,
  navigate,
  origin,
  showWeight = false,
}: ViewingModeProps) {

  const handleFromPage = () => {
    if (origin === "diary") {
      navigate("/diary");
    } else {
      navigate("/products");
    }
  };



  return (
    <BlurContainer>
    <ContentContainer>
      <MainTitle>{dictionaryProducts.food_name}</MainTitle>
      <NutrientRow>
        <NutrientLabel>Proteins:</NutrientLabel>
        <NutrientValue>{dictionaryProducts.nf_protein}g</NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Fats:</NutrientLabel>
        <NutrientValue>{dictionaryProducts.nf_total_fat}g</NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Carbs:</NutrientLabel>
        <NutrientValue>{dictionaryProducts.nf_total_carbohydrate}g</NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Calories:</NutrientLabel>
        <NutrientValue>{dictionaryProducts.nf_calories} kCal</NutrientValue>
      </NutrientRow>
      {showWeight && (
          <NutrientRow>
            <NutrientLabel>Weight:</NutrientLabel>
            <NutrientValue>{dictionaryProducts.weight || 100} g</NutrientValue>
          </NutrientRow>
        )}
    </ContentContainer>
    <AddBtn onClick={handleFromPage}>Ok</AddBtn>
  </BlurContainer>
  );
}

