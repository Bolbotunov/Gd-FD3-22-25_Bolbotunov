import {
  BlurContainer,
  Flex,
  ContentContainer,
} from '../../styles/Common.styled';
import Chart from '../../components/charts/Chart';
import DailyKCal from '../../components/DailyKCal/DailyKCal';
import { useDispatch, useSelector } from 'react-redux';
import useCurrentDate from '../../hooks/useCurrentDate';
import { appColors } from '../../styles/AppColors';
import { CategoryTitleStyle } from '../../styles/Fonts.styled';
import { BtnDelete, LinkBtn } from '../../styles/Buttons.styled';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';
import {
  ProductType,
  setDailyProducts,
  removeDailyProduct,
} from '../../store/AuthSlice';
import {
  getDailyProducts,
  deleteDailyProductInFirebase,
} from '../../config/firebase';
import { useState, useEffect } from 'react';
import {
  TableHeader,
  HeaderItem,
  ProductRow,
  ProductColumn,
  ProductRowWrapper,
} from '../productsPage/ProductsPage.styled';
import { useDailyNutrients } from '../../hooks/useDailyNutrients';
import { calculateNutrients } from '../../utils/calculateNutrients';

export default function DiaryPage() {
  const currentDate = useCurrentDate();
  const {
    products,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle,
  } = useDailyNutrients();
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const extraTitles = {
    protein: proteinTitle,
    fats: fatsTitle,
    carbs: carbsTitle,
  };

  useEffect(() => {
    async function fetchDailyProducts() {
      if (currentUser.uid) {
        try {
          const dailyProductsFromFB = await getDailyProducts(currentUser.uid);
          dispatch(setDailyProducts(dailyProductsFromFB));
        } catch (error) {
          console.error('Error fetching user products:', error);
        }
      }
    }
    fetchDailyProducts();
  }, [currentUser.uid, dispatch]);

  function handleSelectedProduct(product: ProductType) {
    if (selectedProduct && selectedProduct.id === product.id) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
      console.log(product);
    }
  }

  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <CategoryTitleStyle>Today: {currentDate}</CategoryTitleStyle>
          <Chart
            proteinPercent={proteinPercent}
            fatsPercent={fatsPercent}
            carbsPercent={carbsPercent}
            proteinColor={appColors.colors.PROTEIN_COLOR}
            fatsColor={appColors.colors.FATS_COLOR}
            carbsColor={appColors.colors.CARBS_COLOR}
            extraTitles={{
              protein: proteinTitle,
              fats: fatsTitle,
              carbs: carbsTitle,
            }}
          />
          <DailyKCal />
          <Flex>
            <LinkBtn
              onClick={() => {
                navigate(`/products`, {
                  state: { mode: 'creating' },
                });
              }}
            >
              add product
            </LinkBtn>

            <LinkBtn
              disabled={!selectedProduct}
              onClick={() => {
                if (!selectedProduct) {
                  alert('Please select a product');
                  return;
                }
                navigate(`/products/${selectedProduct.id}?mode=view`, {
                  state: {
                    product: selectedProduct,
                    mode: 'view',
                    origin: 'diary',
                  },
                });
              }}
            >
              view
            </LinkBtn>

            <LinkBtn
              disabled={!selectedProduct}
              onClick={() => {
                if (selectedProduct) {
                  navigate(`/products/${selectedProduct.id}?mode=edit`, {
                    state: {
                      product: selectedProduct,
                      mode: 'edit',
                      origin: 'diary',
                    },
                  });
                } else {
                  alert('Please select a product');
                  return;
                }
              }}
            >
              edit weight
            </LinkBtn>

            <BtnDelete
              disabled={!selectedProduct}
              onClick={async () => {
                if (!selectedProduct) {
                  alert('Please select a product');
                  return;
                }
                if (currentUser.uid) {
                  try {
                    await deleteDailyProductInFirebase(
                      currentUser.uid,
                      selectedProduct
                    );
                    dispatch(removeDailyProduct(selectedProduct.id));
                    alert('Product deleted');
                  } catch (error) {
                    console.error('Error deleting product:', error);
                  }
                }
              }}
            >
              delete
            </BtnDelete>
          </Flex>

          <TableHeader>
            <HeaderItem>Products</HeaderItem>
            <HeaderItem>Proteins</HeaderItem>
            <HeaderItem>Fats</HeaderItem>
            <HeaderItem>Carbs</HeaderItem>
            <HeaderItem>kCal</HeaderItem>
            <HeaderItem>Weight</HeaderItem>
          </TableHeader>

          <ProductRowWrapper>
            {products.map((product: ProductType) => {
              const nutrients = calculateNutrients(product);
              return (
                <ProductRow
                  key={product.id}
                  isSelected={
                    selectedProduct && selectedProduct.id === product.id
                  }
                  onClick={() => handleSelectedProduct(product)}
                >
                  <ProductColumn>{product.food_name}</ProductColumn>
                  <ProductColumn>{nutrients.protein.toFixed(1)}g</ProductColumn>
                  <ProductColumn>{nutrients.fats.toFixed(1)}g</ProductColumn>
                  <ProductColumn>{nutrients.carbs.toFixed(1)}g</ProductColumn>
                  <ProductColumn>
                    {nutrients.calories.toFixed(1)} kCal
                  </ProductColumn>
                  <ProductColumn>{product.weight || 100} g</ProductColumn>
                </ProductRow>
              );
            })}
          </ProductRowWrapper>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
