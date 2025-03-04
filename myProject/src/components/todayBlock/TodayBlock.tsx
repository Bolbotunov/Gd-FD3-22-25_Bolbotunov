import { BlurContainer } from "../../styles/Common.styled";
import { CategoryTitle } from "../../styles/Fonts.styled";
import { CurrentDateType } from "../CurrentDate";
import { useContext } from 'react'
import { DateContext } from "../../contexts/DateContext";
import Chart from "../charts/Chart";


export default function TodayBlock() {
  const dateContext: any = useContext(DateContext);

    const { currentDate } = dateContext
    return (
        <>
        <BlurContainer>
          <CategoryTitle>
            Today, {currentDate.toLocaleDateString}
          </CategoryTitle>
          <Chart/>
        </BlurContainer>
        </>
      );
}