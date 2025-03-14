import { BlurContainer } from "../../styles/Common.styled";
import { CategoryTitleStyle } from "../../styles/Fonts.styled";
import Chart from "../charts/Chart";
import useCurrentDate from "../../hooks/useCurrentDate";
import { appColors } from "../../styles/AppColors";
import DailyKCal from "../DailyKCal/DailyKCal";
import { BtnStyle } from "../../styles/Buttons.styled";
import { FontsHeaderStyle } from "../../styles/Fonts.styled";

export default function TodayBlock() {
  // const dateContext: any = useContext(DateContext);
  //   const { currentDate } = dateContext
  const currentDate = useCurrentDate();

  const proteinPercent = '85%';
  const fatsPercent = '65%';
  const carbsPercent = '25%';


    return (
        <>
        <BlurContainer>
          <CategoryTitleStyle>
            Today: {currentDate}
          </CategoryTitleStyle>
          <Chart
          proteinPercent = {proteinPercent}
          fatsPercent= {fatsPercent}
          carbsPercent = {carbsPercent}
          proteinColor = {appColors.colors.PROTEIN_COLOR}
          fatsColor = {appColors.colors.FATS_COLOR}
          carbsColor = {appColors.colors.CARBS_COLOR}
          />
        <DailyKCal/>
        <FontsHeaderStyle to="/diary">
        <BtnStyle>go to diary</BtnStyle>
        </FontsHeaderStyle>
        </BlurContainer>
        </>
      );
}