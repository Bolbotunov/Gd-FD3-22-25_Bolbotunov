
import { MainTitle } from "../../styles/Fonts.styled";
import { AddBtn, BtnDelete } from "../../styles/Buttons.styled";
import { useSelector } from "react-redux";
import { useParams, useNavigate, useLocation, useSearchParams } from "react-router";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUserProduct, addUserProduct } from "../../store/AuthSlice";
import { updateUserProductInFirebase } from "../../config/firebase";
import { ProductType } from "../../store/AuthSlice";
import { addProductToUser } from "../../config/firebase";
import {
  BlurContainer,
  Flex,
  InputStyle,
 } from "../../styles/Common.styled";
import {
  ContentContainer,
  NutrientRow,
  NutrientLabel,
  NutrientValue,
 } from "./ProductsPage.styled";


type ProductPageProps = {};

export default function ProductPage(props: ProductPageProps) {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationState = location.state as { mode?: "view" | "edit" | "adding"; product?: ProductType } | undefined;
  const mode: "view" | "edit" | "adding" = (searchParams.get("mode") as "view" | "edit" | "adding") || "view";
  const dictionaryProducts = useSelector((state: RootState) => state.authSlice.dictionary)
    .find((p) => p.id === id) || locationState?.product;
  const currentUser = useSelector((state: RootState) => state.authSlice);



  const [editedProduct, setEditedProduct] = useState(dictionaryProducts);

  
  useEffect(() => {
    if (mode === "adding" && dictionaryProducts) {
      setEditedProduct({ ...dictionaryProducts, weight: dictionaryProducts.weight || 0 });
    }
  }, [mode, dictionaryProducts]);
  
  

  if (!dictionaryProducts) {
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
    if (currentUser.uid) {
      dispatch(updateUserProduct(editedProduct));
      try {
        await updateUserProductInFirebase(currentUser.uid, editedProduct);
        alert("Product updated");
        navigate(`/products/${editedProduct.id}`, {
          state: { mode: "view", product: editedProduct },
        });
      } catch (error) {
        console.error("Error updating product in Firebase:", error);
      }
    }
  };

  const handleSaveToDiary = async () => {
    if (currentUser.uid && editedProduct) {
      
    try {
      await addProductToUser(currentUser.uid, editedProduct)
      dispatch(addUserProduct(editedProduct));
      alert('Product added');
      navigate(`/diary`);
    } catch (error) {
      console.error('error adding product to DB', error)
    }
  }
  };


  if (mode === "adding") {
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
          <NutrientRow>
            <InputStyle
              type="number"
              value={editedProduct?.weight}
              onChange={(e) => handleChange("weight", e.target.value)}
              placeholder="Enter weight"
            />g
          </NutrientRow>
        </ContentContainer>
        <Flex>
          <AddBtn onClick={handleSaveToDiary}>add</AddBtn>
          <BtnDelete onClick={() => navigate('/products')}>cancel</BtnDelete>
        </Flex>
      </BlurContainer>
    );
  }

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