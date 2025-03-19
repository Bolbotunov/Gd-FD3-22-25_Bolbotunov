
import { BlurContainer, Flex } from "../../styles/Common.styled";
import { 
  ContentContainer,
  NutrientRow,
  NutrientLabel,
  NutrientValue,
 } from "./productsPage.styled";
import { MainTitle } from "../../styles/Fonts.styled";
import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { InputStyle } from "../../styles/Common.styled";
import { useDispatch } from "react-redux";
import { updateUserProduct } from "../../store/AuthSlice";
import { updateUserProductInFirebase } from "../../config/firebase";

export type ProductType = {
  food_name: string;
  nf_protein: number;
  nf_total_fat: number;
  nf_total_carbohydrate: number;
  nf_calories: number;
  isDefault?: boolean;
};

type ProductPageProps = {}; 

export default function ProductPage(props: ProductPageProps) {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.authSlice.products);
  const currentUser = useSelector((state: RootState) => state.authSlice);

  const locationState = location.state as { mode?: "view" | "edit"; product?: ProductType } | undefined;
  const mode: "view" | "edit" = locationState?.mode || "view";
  

  const productFromStore = locationState?.product || products.find(
    (p) => p.food_name.toLowerCase() === id?.toLowerCase()
  );
  useEffect(() => {
    setEditedProduct(productFromStore);
  }, [productFromStore]);


  const [editedProduct, setEditedProduct] = useState(productFromStore);

  if (!productFromStore) {
    return (
      <BlurContainer>
        <ContentContainer>
          <MainTitle>Product Not Found</MainTitle>
          <AddBtn onClick={() => navigate('/products')}>Ok</AddBtn>
        </ContentContainer>
      </BlurContainer>
    );
  }

  if (mode === "view") {
    return (
      <BlurContainer>
        <ContentContainer>
          <MainTitle>{productFromStore.food_name}</MainTitle>
          <NutrientRow>
            <NutrientLabel>Proteins:</NutrientLabel>
            <NutrientValue>{productFromStore.nf_protein}g</NutrientValue>
          </NutrientRow>
          <NutrientRow>
            <NutrientLabel>Fats:</NutrientLabel>
            <NutrientValue>{productFromStore.nf_total_fat}g</NutrientValue>
          </NutrientRow>
          <NutrientRow>
            <NutrientLabel>Carbs:</NutrientLabel>
            <NutrientValue>{productFromStore.nf_total_carbohydrate}g</NutrientValue>
          </NutrientRow>
          <NutrientRow>
            <NutrientLabel>Calories:</NutrientLabel>
            <NutrientValue>{productFromStore.nf_calories} kCal</NutrientValue>
          </NutrientRow>
        </ContentContainer>
        <AddBtn onClick={() => navigate('/products')}>Ok</AddBtn>
      </BlurContainer>
    );
  }




  const handleChange = (field: keyof ProductType, value: string) => {
    setEditedProduct((prev) =>
      prev ? { ...prev, [field]: typeof prev[field] === "number" ? Number(value) : value } : prev
    );
  };

  const handleSave = async () => {
    if (!editedProduct) return;
    dispatch(updateUserProduct(editedProduct));
    if (currentUser.uid) {
      try {
        await updateUserProductInFirebase(currentUser.uid, editedProduct);
        alert("Product updated");
        navigate("/products");
      } catch (error) {
        console.error("Error updating product in Firebase:", error);
      }
    }
  };

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