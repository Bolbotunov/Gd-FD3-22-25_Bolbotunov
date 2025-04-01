import { Flex, ContentContainer } from '../../../styles/Common.styled';
import { BlurContainer } from '../../../styles/Common.styled';
import { MainTitle } from '../../../styles/Fonts.styled';
import {
  NutrientValue,
  NutrientRow,
  NutrientLabel,
} from '../ProductsPage.styled';
import { InputStyle } from '../../../styles/Common.styled';
import { AddBtn, BtnDelete } from '../../../styles/Buttons.styled';
import { ProductType } from '../../../store/AuthSlice';

type AddingModeProps = {
  dictionaryProducts: ProductType;
  editedProduct?: ProductType;
  handleChange: (field: keyof ProductType, value: string) => void;
  handleSaveToDiary: () => void;
  navigate: (path: string) => void;
};

export default function AddingMode({
  dictionaryProducts,
  editedProduct,
  handleChange,
  handleSaveToDiary,
  navigate,
}: AddingModeProps) {
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
          <NutrientValue>
            {dictionaryProducts.nf_total_carbohydrate}g
          </NutrientValue>
        </NutrientRow>
        <NutrientRow>
          <NutrientLabel>Calories:</NutrientLabel>
          <NutrientValue>{dictionaryProducts.nf_calories} kCal</NutrientValue>
        </NutrientRow>
        <NutrientRow>
          <InputStyle
            type='number'
            value={editedProduct?.weight}
            onChange={(e) => handleChange('weight', e.target.value)}
            placeholder='Enter weight'
          />
          g
        </NutrientRow>
      </ContentContainer>
      <Flex>
        <AddBtn onClick={handleSaveToDiary}>add</AddBtn>
        <BtnDelete onClick={() => navigate('/products')}>cancel</BtnDelete>
      </Flex>
    </BlurContainer>
  );
}
