import { Flex, ContentContainer } from "../../styles/Common.styled";
import { BlurContainer } from "../../styles/Common.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { NutrientValue, NutrientRow, NutrientLabel } from "../../pages/productsPage/ProductsPage.styled";
import { InputStyle } from "../../styles/Common.styled";
import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";
import { ProductType } from "../../store/AuthSlice";

type EditModeProps = {
  editedProduct: ProductType;
  handleChange: (field: keyof ProductType, value: string) => void;
  handleSave: () => void;
  navigate: (path: string) => void;
  origin: string;
}

export default function EditMode({
  editedProduct,
  handleChange,
  handleSave,
  navigate,
  origin,
}: EditModeProps) {
  
  const isDiaryEdit = origin === "diary";

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
        <MainTitle>Edit {editedProduct?.food_name}</MainTitle>

        <NutrientRow>
          <NutrientLabel>Proteins:</NutrientLabel>
          <NutrientValue>
            {isDiaryEdit ? (
              <div>{editedProduct?.nf_protein}g</div>
            ) : (
              <InputStyle
                type="number"
                value={editedProduct?.nf_protein}
                onChange={(e) => handleChange("nf_protein", e.target.value)}
              />
            )}
          </NutrientValue>
        </NutrientRow>

        <NutrientRow>
          <NutrientLabel>Fats:</NutrientLabel>
          <NutrientValue>
            {isDiaryEdit ? (
              <div>{editedProduct?.nf_total_fat}g</div>
            ) : (
              <InputStyle
                type="number"
                value={editedProduct?.nf_total_fat}
                onChange={(e) => handleChange("nf_total_fat", e.target.value)}
              />
            )}
          </NutrientValue>
        </NutrientRow>

        <NutrientRow>
          <NutrientLabel>Carbs:</NutrientLabel>
          <NutrientValue>
            {isDiaryEdit ? (
              <div>{editedProduct?.nf_total_carbohydrate}g</div>
            ) : (
              <InputStyle
                type="number"
                value={editedProduct?.nf_total_carbohydrate}
                onChange={(e) => handleChange("nf_total_carbohydrate", e.target.value)}
              />
            )}
          </NutrientValue>
        </NutrientRow>

        <NutrientRow>
          <NutrientLabel>Calories:</NutrientLabel>
          <NutrientValue>
            {isDiaryEdit ? (
              <div>{editedProduct?.nf_calories} kCal</div>
            ) : (
              <InputStyle
                type="number"
                value={editedProduct?.nf_calories}
                onChange={(e) => handleChange("nf_calories", e.target.value)}
              />
            )}
          </NutrientValue>
        </NutrientRow>
        {isDiaryEdit && (
          <NutrientRow>
            <NutrientLabel>Weight:</NutrientLabel>
            <NutrientValue>
              <InputStyle
                type="number"
                value={editedProduct.weight}
                onChange={(e) => handleChange("weight", e.target.value)}
                placeholder="Enter weight"
              />g
            </NutrientValue>
          </NutrientRow>
        )}
      </ContentContainer>
      <Flex>
        <AddBtn onClick={handleSave}>Save</AddBtn>
        <BtnDelete onClick={handleFromPage}>cancel</BtnDelete>
      </Flex>
    </BlurContainer>
  );
}

