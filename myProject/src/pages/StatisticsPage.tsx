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
import {
  CarouselTitleStyle,
  DateStyle,
  FlexContainer,
  LeftButton,
  DateSliderContainer,
  DateSliderInner,
  RightButton,
  CarouselContainer,
} from './diaryPage/DiaryPage.styled';

export default function StatisticsPage() {
  const { products } = useSelector((state: RootState) => state.authSlice);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slideOffset, setSlideOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  function MyCalendar() {
    const handleChange: CalendarProps['onChange'] = (value) => {
      if (value instanceof Date) {
        setSelectedDate(value);
      }
    };

    return <Calendar onChange={handleChange} value={selectedDate} />;
  }

  const dateArray = useMemo(() => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const d = new Date(selectedDate);
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  }, [selectedDate]);

  function formatDate(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}.${date.getFullYear()}`;
  }

  const handlePreviousDate = () => {
    setSlideOffset(20);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() - 1);
      setSelectedDate(newDate);
      setSlideOffset(0);
      setTimeout(() => setIsAnimating(true), 50);
    }, 300);
  };

  const handleNextDate = () => {
    setSlideOffset(-20);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + 1);
      setSelectedDate(newDate);
      setSlideOffset(0);
      setTimeout(() => setIsAnimating(true), 50);
    }, 300);
  };

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

          <CarouselContainer>
            <CarouselTitleStyle>Selected Date</CarouselTitleStyle>
            <FlexContainer>
              <LeftButton onClick={handlePreviousDate} />
              <DateSliderContainer>
                <DateSliderInner offset={slideOffset} isAnimating={isAnimating}>
                  {dateArray.map((date, index) => (
                    <DateStyle
                      key={index}
                      isActive={date.getTime() === selectedDate.getTime()}
                    >
                      {formatDate(date)}
                    </DateStyle>
                  ))}
                </DateSliderInner>
              </DateSliderContainer>
              <RightButton onClick={handleNextDate} />
            </FlexContainer>
          </CarouselContainer>

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
              <Flex>На выбранную дату нет продуктов.</Flex>
            )}
          </ProductRowWrapper>
        </ContentContainer>
      </BlurContainer>
    </>
  );
}
