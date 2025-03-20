import React, { useState } from "react";
import { BlurContainer, Flex } from "../../styles/Common.styled";
import { MainTitle, ErrorText } from "../../styles/Fonts.styled";
import { InputStyle } from "../../styles/Common.styled";
import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";
import { useDispatch } from "react-redux";
import { addUserProduct } from "../../store/AuthSlice";
import { ProductType } from "../../store/AuthSlice";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { NutrientLabel, NutrientRow, ContentContainer } from "./ProductsPage.styled";
import { updateUserProductInFirebase } from "../../config/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function CreateProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice);

  const [newProduct, setNewProduct] = useState<ProductType>({
    id: uuidv4(),
    food_name: "",
    nf_protein: 0,
    nf_total_fat: 0,
    nf_total_carbohydrate: 0,
    nf_calories: 0,
    isDefault: true,
  });
  
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof ProductType, value: string) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: field === "food_name" ? value : Number(value),
    }));
  };

  const handleSave = async () => {
    if (!newProduct.food_name.trim()) {
      setError("Product name is required.");
      return;
    }
    if (currentUser.uid) {
    dispatch(addUserProduct(newProduct));
      try {
        await updateUserProductInFirebase(currentUser.uid, newProduct);
        alert("Product created");
        navigate(`/products/${newProduct.id}?mode=view`, {
          state: { product: newProduct, mode: "view" },
        });
      } catch (error) {
        console.error("Error updating product in Firebase:", error);
      }
    }
    console.log('product:', newProduct)
  };

  return (
    <BlurContainer>
      <ContentContainer>
        <MainTitle>Create New Product</MainTitle>
        {error && <ErrorText>{error}</ErrorText>}
        <NutrientRow>
          <NutrientLabel>Product Name:</NutrientLabel>
          <InputStyle
            type="text"
            value={newProduct.food_name}
            onChange={(e) => handleChange("food_name", e.target.value)}
            placeholder="Enter product name..."
          />
        </NutrientRow>
        <NutrientRow>
          <NutrientLabel>Proteins (g):</NutrientLabel>
          <InputStyle
            type="number"
            value={newProduct.nf_protein}
            onChange={(e) => handleChange("nf_protein", e.target.value)}
          />
        </NutrientRow>
        <NutrientRow>
          <NutrientLabel>Fats (g):</NutrientLabel>
          <InputStyle
            type="number"
            value={newProduct.nf_total_fat}
            onChange={(e) => handleChange("nf_total_fat", e.target.value)}
          />
        </NutrientRow>
        <NutrientRow>
          <NutrientLabel>Carbs (g):</NutrientLabel>
          <InputStyle
            type="number"
            value={newProduct.nf_total_carbohydrate}
            onChange={(e) => handleChange("nf_total_carbohydrate", e.target.value)}
          />
        </NutrientRow>
        <NutrientRow>
          <NutrientLabel>Calories (kCal per 100g):</NutrientLabel>
          <InputStyle
            type="number"
            value={newProduct.nf_calories}
            onChange={(e) => handleChange("nf_calories", e.target.value)}
          />
        </NutrientRow>
        <Flex>
          <AddBtn onClick={handleSave}>Save</AddBtn>
          <BtnDelete onClick={() => navigate('/products')}>cancel</BtnDelete>
        </Flex>
        </ContentContainer>
    </BlurContainer>
  );
}
