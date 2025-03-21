import { Flex, ContentContainer } from "../../styles/Common.styled";
import { BlurContainer } from "../../styles/Common.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { NutrientValue, NutrientRow, NutrientLabel } from "../../pages/productsPage/ProductsPage.styled";
import { InputStyle } from "../../styles/Common.styled";
import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";
import { ProductType } from "../../store/AuthSlice";

type EditModeProps = {
  editedProduct?: ProductType;
  handleChange: (field: keyof ProductType, value: string) => void;
  handleSave: () => void;
  navigate: (path: string) => void;
}

export default function EditMode({
  editedProduct,
  handleChange,
  handleSave,
  navigate,
}: EditModeProps) {


  return (
    <BlurContainer>
    <ContentContainer>
      <MainTitle>Edit {editedProduct?.food_name}</MainTitle>
      <NutrientRow>
        <NutrientLabel>Proteins:</NutrientLabel>
        <NutrientValue>
          <InputStyle
            type="number"
            value={editedProduct?.nf_protein}
            onChange={(e) => handleChange("nf_protein", e.target.value)}
          />g
        </NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Fats:</NutrientLabel>
        <NutrientValue>
          <InputStyle
            type="number"
            value={editedProduct?.nf_total_fat}
            onChange={(e) => handleChange("nf_total_fat", e.target.value)}
          />g
        </NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Carbs:</NutrientLabel>
        <NutrientValue>
          <InputStyle
            type="number"
            value={editedProduct?.nf_total_carbohydrate}
            onChange={(e) => handleChange("nf_total_carbohydrate", e.target.value)}
          />g
        </NutrientValue>
      </NutrientRow>
      <NutrientRow>
        <NutrientLabel>Calories:</NutrientLabel>
        <NutrientValue>
          <InputStyle
            type="number"
            value={editedProduct?.nf_calories}
            onChange={(e) => handleChange("nf_calories", e.target.value)}
          /> kCal
        </NutrientValue>
      </NutrientRow>
      <Flex>
        <AddBtn onClick={handleSave}>Save</AddBtn>
        <BtnDelete onClick={() => navigate('/products')}>cancel</BtnDelete>
      </Flex>
    </ContentContainer>
  </BlurContainer>
  );
}

