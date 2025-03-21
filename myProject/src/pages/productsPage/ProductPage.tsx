
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
import AddingMode from "../../components/mode/AddingMode";
import ViewingMode from "../../components/mode/ViewingMode";
import EditMode from "../../components/mode/EditMode";
import { addProductToUser } from "../../config/firebase";
import {
  BlurContainer,
  Flex,
  InputStyle,
  ContentContainer,
 } from "../../styles/Common.styled";
import { string } from "yup";


type ProductPageProps = {};

export default function ProductPage(props: ProductPageProps) {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationState = location.state as {
    mode?: "view" | "edit" | "adding";
    product?: ProductType;
    origin?: string;
  } | undefined;
  const mode: "view" | "edit" | "adding" = (new URLSearchParams(location.search).get("mode") as "view" | "edit" | "adding") || "view";

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

  if (mode === "view")  {
    const origin = location.state?.origin || 'products'
    if (!editedProduct) {
      return null;
    }
    return (
      editedProduct && (
        <ViewingMode
          dictionaryProducts={dictionaryProducts}
          navigate={navigate}
          origin={origin}
        />
      )
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
      navigate(`/products`);
    } catch (error) {
      console.error('error adding product to DB', error)
    }
  }
  };

  if (mode === "adding") {
    if (!editedProduct) {
      return null;
    }
    return (
      editedProduct && (
        <AddingMode
          dictionaryProducts={dictionaryProducts}
          editedProduct={editedProduct}
          handleChange={handleChange}
          handleSaveToDiary={handleSaveToDiary}
          navigate={navigate}
        />
      )
    );
  }
  
  if (mode === "edit") {
    if (!editedProduct) {
      return null;
    }
    return (
      editedProduct && (
        <EditMode
          editedProduct={editedProduct}
          handleChange={handleChange}
          handleSave={handleSave}
          navigate={navigate}
        />
      )
    );
  }
  return null;
}