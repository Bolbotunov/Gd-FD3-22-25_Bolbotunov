import { BlurContainer } from '../../styles/Common.styled';
import { CategoryTitleStyle } from '../../styles/Fonts.styled';
import Chart from '../charts/Chart';
import { useDispatch, useSelector } from 'react-redux';
import useCurrentDate from '../../hooks/useCurrentDate';
import { appColors } from '../../styles/AppColors';
import DailyKCal from '../DailyKCal/DailyKCal';
import { BtnStyle } from '../../styles/Buttons.styled';
import { FontsHeaderStyle } from '../../styles/Fonts.styled';
import { useDailyNutrients } from '../../hooks/useDailyNutrients';
import { useEffect } from 'react';
import { getDailyProducts } from '../../config/firebase';
import { setDailyProducts } from '../../store/AuthSlice';
import { RootState } from '../../store/store';

export default function TodayBlock() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const currentDate = useCurrentDate();
  const {
    products,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle,
  } = useDailyNutrients();

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

  if (!products || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <BlurContainer>
      <CategoryTitleStyle>Today: {currentDate}</CategoryTitleStyle>
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
      <DailyKCal />
      <FontsHeaderStyle to='/diary'>
        <BtnStyle>go to diary</BtnStyle>
      </FontsHeaderStyle>
    </BlurContainer>
  );
}
