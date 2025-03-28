import {
  BlurContainer,
  ContentContainer,
  Flex,
} from '../../styles/Common.styled';
import Calendar, { CalendarProps } from 'react-calendar';
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
  ProductRow,
  ProductColumn,
} from '../productsPage/ProductsPage.styled';
import { MessageStyle, ProductRowStat } from './StatisticsPage.styled';
import { getDailyProducts } from '../../config/firebase';

export default function StatisticsPage() {
  const { products } = useSelector((state: RootState) => state.authSlice);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const dispatch = useDispatch();

  function MyCalendar() {
    const handleChange: CalendarProps['onChange'] = (value) => {
      if (value instanceof Date) {
        setSelectedDate(value);
      }
    };

    return <Calendar onChange={handleChange} value={selectedDate} />;
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
          <Flex>
            <MyCalendar />
          </Flex>

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
