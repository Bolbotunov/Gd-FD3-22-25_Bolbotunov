import { BlurContainer, ContentContainer, Flex } from '../styles/Common.styled';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { RootState } from '../store/store';
import { ProductType } from '../store/AuthSlice';
import { useSelector } from 'react-redux';
import { calculateNutrients } from '../utils/calculateNutrients';
import { useMemo } from 'react';
import {
  TableHeader,
  HeaderItem,
  ProductRowWrapper,
  ProductRow,
  ProductColumn,
} from './productsPage/ProductsPage.styled';
import { useDailyNutrients } from '../hooks/useDailyNutrients';

export default function StatisticsPage() {
  // const { products } = useDailyNutrients();
  const { products } = useSelector((state: RootState) => state.authSlice);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
  return (
    <>
      <BlurContainer>
        <ContentContainer>
          <MyCalendar />
          <ProductRowWrapper>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: ProductType) => {
                const nutrients = calculateNutrients(product);
                return (
                  <Flex key={product.id}>
                    <Flex>{product.diaryDate}</Flex>
                    <Flex>
                      <ProductColumn>{product.food_name}</ProductColumn>
                      <ProductColumn>
                        {nutrients.protein.toFixed(1)}g
                      </ProductColumn>
                      <ProductColumn>
                        {nutrients.fats.toFixed(1)}g
                      </ProductColumn>
                      <ProductColumn>
                        {nutrients.carbs.toFixed(1)}g
                      </ProductColumn>
                      <ProductColumn>
                        {nutrients.calories.toFixed(1)} kCal
                      </ProductColumn>
                      <ProductColumn>{product.weight || 100} g</ProductColumn>
                    </Flex>
                  </Flex>
                );
              })
            ) : (
              <Flex>На выбранную дату нет продуктов.</Flex> // Показываем сообщение, если продуктов нет
            )}
          </ProductRowWrapper>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
