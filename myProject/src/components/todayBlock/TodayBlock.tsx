import { BlurContainer } from "../../styles/Common.styled";
import { CategoryTitleStyle } from "../../styles/Fonts.styled";
import Chart from "../charts/Chart";
import useCurrentDate from "../../hooks/useCurrentDate";
import { appColors } from "../../styles/AppColors";

export default function TodayBlock() {
  // const dateContext: any = useContext(DateContext);
  //   const { currentDate } = dateContext
  const currentDate = useCurrentDate();

  const proteinPercent = '85%';
  const fatsPercent = '22%';
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
        </BlurContainer>
        </>
      );
}