import {
  CarouselTitleStyle,
  DateStyle,
  FlexContainer,
  LeftButton,
  DateSliderContainer,
  DateSliderInner,
  RightButton,
  CarouselContainer,
  ButtonWrapper,
} from './Carousel.styled';
import { useState, useMemo } from 'react';

type CarouselProps = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export default function Carousel({
  selectedDate,
  setSelectedDate,
}: CarouselProps) {
  const [slideOffset, setSlideOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const dateArray = useMemo(() => {
    const dates = [];
    for (let i = -2; i <= 2; i++) {
      const d = new Date(selectedDate);
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  }, [selectedDate]);

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

  function formatDate(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}.${date.getFullYear()}`;
  }

  return (
    <>
      <CarouselContainer>
        <CarouselTitleStyle>Date</CarouselTitleStyle>
        <FlexContainer>
          <ButtonWrapper onClick={handlePreviousDate}>
            <LeftButton />
          </ButtonWrapper>
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
          <ButtonWrapper onClick={handleNextDate}>
            <RightButton />
          </ButtonWrapper>
        </FlexContainer>
      </CarouselContainer>
    </>
  );
}
