import { MainTitle } from '../../styles/Fonts.styled';
import { AddBtn, BtnDelete } from '../../styles/Buttons.styled';
import { useSelector } from 'react-redux';
import {
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from 'react-router';
import { RootState } from '../../store/store';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  updateUserProduct,
  addUserProduct,
  updateDailyProduct,
} from '../../store/AuthSlice';
import {
  updateUserProductInFirebase,
  updateDailyProductInFirebase,
} from '../../config/firebase';
import { ProductType } from '../../store/AuthSlice';
import AddingMode from '../../components/mode/AddingMode';
import ViewingMode from '../../components/mode/ViewingMode';
import EditMode from '../../components/mode/EditMode';
import { addProductToUser } from '../../config/firebase';
import { BlurContainer, ContentContainer } from '../../styles/Common.styled';
import { useProductForm } from '../../hooks/useProductForm';

export default function ProductPage() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const locationState = location.state as
    | {
        mode?: 'view' | 'edit' | 'adding';
        product?: ProductType;
        origin?: string;
      }
    | undefined;
  const mode: 'view' | 'edit' | 'adding' =
    (new URLSearchParams(location.search).get('mode') as
      | 'view'
      | 'edit'
      | 'adding') || 'view';
  const origin = location.state?.origin || 'products';
  const showWeight = origin === 'diary';

  const dailyProducts =
    useSelector((state: RootState) => state.authSlice.products).find(
      (p) => p.id === id
    ) || locationState?.product;

  const dictionaryProducts =
    useSelector((state: RootState) => state.authSlice.dictionary).find(
      (p) => p.id === id
    ) || locationState?.product;

  const productForView =
    origin === 'diary' ? dailyProducts : dictionaryProducts;
  const initialProduct =
    origin === 'diary' ? dailyProducts : dictionaryProducts;

  const {
    product: editedProduct,
    setProduct,
    handleChange,
  } = useProductForm(initialProduct);

  useEffect(() => {
    if (mode === 'adding' && productForView) {
      setProduct({ ...productForView, weight: productForView.weight || 100 });
    }
  }, [mode, productForView, setProduct]);

  useEffect(() => {
    console.log('editedProduct: ', editedProduct);
  }, [editedProduct]);

  if (!productForView) {
    return (
      <BlurContainer>
        <ContentContainer>
          <MainTitle>Product Not Found</MainTitle>
          <AddBtn onClick={() => navigate('/products')}>Ok</AddBtn>
        </ContentContainer>
      </BlurContainer>
    );
  }

  if (mode === 'view') {
    if (!productForView) return null;
    return (
      <ViewingMode
        dictionaryProducts={editedProduct}
        navigate={navigate}
        origin={origin}
        showWeight={showWeight}
      />
    );
  }

  const handleSave = async () => {
    if (!editedProduct) return;
    if (currentUser.uid) {
      if (origin === 'diary') {
        dispatch(updateDailyProduct(editedProduct));
        try {
          await updateDailyProductInFirebase(currentUser.uid, editedProduct);
          alert('Product updated in diary');
          navigate(`/products/${editedProduct.id}`, {
            state: { mode: 'view', product: editedProduct, origin: 'diary' },
          });
        } catch (error) {
          console.error('Error updating daily product in Firebase:', error);
        }
      } else {
        dispatch(updateUserProduct(editedProduct));
        try {
          await updateUserProductInFirebase(currentUser.uid, editedProduct);
          alert('Product updated');
          navigate(`/products`);
        } catch (error) {
          console.error('Error updating product in Firebase:', error);
        }
      }
    }
  };

  const handleSaveToDiary = async () => {
    if (currentUser.uid && editedProduct) {
      console.log('Saving product:', editedProduct);
      try {
        await addProductToUser(currentUser.uid, editedProduct);
        dispatch(addUserProduct(editedProduct));
        alert('Product added');
        navigate(`/diary`);
      } catch (error) {
        console.error('error adding product to DB', error);
      }
    }
  };

  if (mode === 'adding') {
    if (!editedProduct) {
      return null;
    }
    return (
      <AddingMode
        dictionaryProducts={productForView}
        editedProduct={editedProduct}
        handleChange={handleChange}
        handleSaveToDiary={handleSaveToDiary}
        navigate={navigate}
      />
    );
  }

  if (mode === 'edit') {
    if (!editedProduct) return null;
    return (
      <EditMode
        editedProduct={editedProduct}
        handleChange={handleChange}
        handleSave={handleSave}
        navigate={navigate}
        origin={origin}
      />
    );
  }

  return null;
}
