import { BlurContainer } from '../../styles/Common.styled';
import { CategoryTitleStyle } from '../../styles/Fonts.styled';
import Chart from '../charts/Chart';
import { useDispatch, useSelector } from 'react-redux';
import useCurrentDate from '../../hooks/useCurrentDate';
import { appColors } from '../../styles/AppColors';
import DailyKCal from '../DailyKCal/DailyKCal';
import { BtnStyle } from '../../styles/Buttons.styled';
import { FontsHeaderStyle } from '../../styles/Fonts.styled';
import { useDailyNutrientsForDate } from '../../hooks/useDailyNutrientsForDate';
import { useEffect } from 'react';
import { getDailyProducts } from '../../config/firebase';
import { setDailyProducts } from '../../store/AuthSlice';
import { RootState } from '../../store/store';

export default function TodayBlock() {
  const dispatch = useDispatch();
  const currentDate = useCurrentDate();
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const {
    filteredProducts,
    totals,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle,
  } = useDailyNutrientsForDate(currentDate);

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
    <BlurContainer>
      <CategoryTitleStyle>
        Today: {currentDate.toLocaleDateString()}
      </CategoryTitleStyle>
      <Chart
        proteinPercent={proteinPercent}
        fatsPercent={fatsPercent}
        carbsPercent={carbsPercent}
        proteinColor={appColors.colors.PROTEIN_COLOR}
        fatsColor={appColors.colors.FATS_COLOR}
        carbsColor={appColors.colors.CARBS_COLOR}
        extraTitles={{
          protein: proteinTitle,
          fats: fatsTitle,
          carbs: carbsTitle,
        }}
      />
      <DailyKCal onDate={totals.calories} />
      <FontsHeaderStyle to='/diary'>
        <BtnStyle>go to diary</BtnStyle>
      </FontsHeaderStyle>
    </BlurContainer>
  );
}
