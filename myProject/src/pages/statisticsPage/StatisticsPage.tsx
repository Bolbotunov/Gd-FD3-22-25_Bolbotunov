import {
  BlurContainer,
  ContentContainer,
  Flex,
} from '../../styles/Common.styled';
import { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import { ProductType, setDailyProducts } from '../../store/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { calculateNutrients } from '../../utils/calculateNutrients';
import { useMemo } from 'react';
import Carousel from '../../components/carousel/Carousel';
import {
  TableHeader,
  HeaderItem,
  ProductRowWrapper,
  ProductColumn,
} from '../productsPage/ProductsPage.styled';
import {
  MessageStyle,
  ProductRowStat,
  StatisticsBlock,
  StatisticsTitles,
  StyledCalendar,
} from './StatisticsPage.styled';
import { getDailyProducts } from '../../firebase/firebase';
import { useDailyNutrientsForDate } from '../../hooks/useDailyNutrientsForDate';
import { FlexColumnStyle } from '../profilePage/ProfilePage.styled';

export default function StatisticsPage() {
  const { products } = useSelector((state: RootState) => state.authSlice);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();
  const { totals } = useDailyNutrientsForDate(selectedDate);

  function MyCalendar() {
    const handleChange: CalendarProps['onChange'] = (value) => {
      if (value instanceof Date) {
        setSelectedDate(value);
      }
    };

    return <StyledCalendar onChange={handleChange} value={selectedDate} />;
  }

  const formattedSelectedDate = useMemo(() => {
    return new Date(selectedDate).toLocaleDateString('ru-RU');
  }, [selectedDate]);

  const filteredProducts: ProductType[] = useMemo(() => {
    return products.filter(
      (product: ProductType) => product.diaryDate === formattedSelectedDate
    );
  }, [products, formattedSelectedDate]);

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

  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <Carousel
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <FlexColumnStyle>
            <MyCalendar />
            <StatisticsBlock>
              <StatisticsTitles>
                <Flex>
                  <HeaderItem>Proteins:</HeaderItem>
                  <HeaderItem>{Math.round(totals.protein)}</HeaderItem>
                </Flex>
                <Flex>
                  <HeaderItem>Fats:</HeaderItem>
                  <HeaderItem>{Math.round(totals.fats)}</HeaderItem>
                </Flex>
                <Flex>
                  <HeaderItem>Carbs:</HeaderItem>
                  <HeaderItem>{Math.round(totals.carbs)}</HeaderItem>
                </Flex>
                <Flex>
                  <HeaderItem>kCal:</HeaderItem>
                  <HeaderItem>{Math.round(totals.calories)}</HeaderItem>
                </Flex>
              </StatisticsTitles>
            </StatisticsBlock>
          </FlexColumnStyle>

          <TableHeader>
            <HeaderItem>Date</HeaderItem>
            <HeaderItem>Products</HeaderItem>
            <HeaderItem>Proteins</HeaderItem>
            <HeaderItem>Fats</HeaderItem>
            <HeaderItem>Carbs</HeaderItem>
            <HeaderItem>kCal</HeaderItem>
            <HeaderItem>Weight</HeaderItem>
          </TableHeader>

          <ProductRowWrapper>
            {filteredProducts.length > 0 ? (
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
