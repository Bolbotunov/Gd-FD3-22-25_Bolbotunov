import {
  BlurContainer,
  Flex,
  ContentContainer,
} from '../../styles/Common.styled';
import Chart from '../../components/charts/Chart';
import DailyKCal from '../../components/DailyKCal/DailyKCal';
import { useDispatch, useSelector } from 'react-redux';
import { appColors } from '../../styles/AppColors';
import { BtnDelete, LinkBtn } from '../../styles/Buttons.styled';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/store';
import { useMemo } from 'react';
import { toast } from 'react-toastify';
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
import { useDailyNutrientsForDate } from '../../hooks/useDailyNutrientsForDate';
import { calculateNutrients } from '../../utils/calculateNutrients';
import Carousel from '../../components/carousel/Carousel';
import {
  MessageStyle,
  ProductRowStat,
} from '../statisticsPage/StatisticsPage.styled';

export default function DiaryPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const {
    filteredProducts,
    totals,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle,
  } = useDailyNutrientsForDate(selectedDate);

  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formattedSelectedDate = useMemo(() => {
    return new Date(selectedDate).toLocaleDateString('ru-RU');
  }, [selectedDate]);

  const todayFormatted = new Date().toLocaleDateString('ru-RU');
  const isToday = formattedSelectedDate === todayFormatted;

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
    }
  }

  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <Carousel
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
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
          <DailyKCal onDate={totals.calories} />
          <Flex>
            <LinkBtn
              disabled={!isToday}
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
                  toast.warning('Please select a product');
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
              onClick={async () => {
                if (!selectedProduct) {
                  toast.error('Please select a product');
                  return;
                }
                if (currentUser.uid) {
                  try {
                    await deleteDailyProductInFirebase(
                      currentUser.uid,
                      selectedProduct
                    );
                    dispatch(removeDailyProduct(selectedProduct.id));
                    toast.success('Product deleted successfully!');
                  } catch (error) {
                    console.error('Error deleting product:', error);
                    toast.error('Error deleting product');
                  }
                }
              }}
            >
              delete
            </BtnDelete>
          </Flex>

          <TableHeader>
            {!isToday ? <HeaderItem>Date</HeaderItem> : null}
            <HeaderItem>Products</HeaderItem>
            <HeaderItem>Proteins</HeaderItem>
            <HeaderItem>Fats</HeaderItem>
            <HeaderItem>Carbs</HeaderItem>
            <HeaderItem>kCal</HeaderItem>
            <HeaderItem>Weight</HeaderItem>
          </TableHeader>

          <ProductRowWrapper>
            {isToday ? (
              filteredProducts.map((product: ProductType) => {
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
                    <ProductColumn>
                      {nutrients.protein.toFixed(1)}g
                    </ProductColumn>
                    <ProductColumn>{nutrients.fats.toFixed(1)}g</ProductColumn>
                    <ProductColumn>{nutrients.carbs.toFixed(1)}g</ProductColumn>
                    <ProductColumn>
                      {nutrients.calories.toFixed(1)} kCal
                    </ProductColumn>
                    <ProductColumn>{product.weight || 100} g</ProductColumn>
                  </ProductRow>
                );
              })
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product: ProductType) => {
                const nutrients = calculateNutrients(product);
                return (
                  <ProductRowStat key={product.id}>
                    <ProductColumn>{product.diaryDate}</ProductColumn>
                    <ProductColumn>{product.food_name}</ProductColumn>
                    <ProductColumn>
                      {nutrients.protein.toFixed(1)}g
                    </ProductColumn>
                    <ProductColumn>{nutrients.fats.toFixed(1)}g</ProductColumn>
                    <ProductColumn>{nutrients.carbs.toFixed(1)}g</ProductColumn>
                    <ProductColumn>
                      {nutrients.calories.toFixed(1)} kCal
                    </ProductColumn>
                    <ProductColumn>{product.weight || 100} g</ProductColumn>
                  </ProductRowStat>
                );
              })
            ) : (
              <Flex>
                <MessageStyle>
                  there are no products in the diary on this date
                </MessageStyle>
              </Flex>
            )}
          </ProductRowWrapper>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
