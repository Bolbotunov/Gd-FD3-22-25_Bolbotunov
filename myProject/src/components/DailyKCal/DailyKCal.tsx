import useDailyKCal from "../../hooks/useDailyKCal";
import { DailyKCalStyle } from "../../styles/Fonts.styled";

export default function DailyKCal() {
  let dailyKCal = useDailyKCal()
  return (
        <>
       <DailyKCalStyle>kCal: {dailyKCal}</DailyKCalStyle>
        </>
      );
}