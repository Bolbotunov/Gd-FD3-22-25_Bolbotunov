import { BlurContainer } from "../styles/Common.styled"
import Chart from "../components/charts/Chart"
import DailyKCal from "../components/DailyKCal/DailyKCal"
import useCurrentDate from "../hooks/useCurrentDate";
import { appColors } from "../styles/AppColors";
import { CategoryTitleStyle, FontsHeaderStyle } from "../styles/Fonts.styled";
import { BtnStyle } from "../styles/Buttons.styled";

export default function DiaryPage() {
	const currentDate = useCurrentDate();
  const proteinPercent = '85%';
  const fatsPercent = '52%';
  const carbsPercent = '25%';

  const chartTitle = '50/100'


    return <>
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
						extraTitle={chartTitle}
						/>
					<DailyKCal/>
					<FontsHeaderStyle to="/products">
						<BtnStyle>add product</BtnStyle>
					</FontsHeaderStyle>
        </BlurContainer>
				
    </>
}