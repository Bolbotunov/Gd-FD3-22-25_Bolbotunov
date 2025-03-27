import useDailyKCal from '../../hooks/useDailyKCal';
import { DailyKCalStyle } from '../../styles/Fonts.styled';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { calculateNormDailyCalories } from '../../utils/calculateNormDailyCalories';

export default function DailyKCal() {
  let dailyKCal = Math.round(useDailyKCal());
  const currentUser = useSelector((state: RootState) => state.authSlice);

  const recommendedCalories = currentUser.profile
    ? calculateNormDailyCalories(currentUser.profile)
    : null;
  return (
    <>
      <DailyKCalStyle>
        kCal: {dailyKCal} / {recommendedCalories?.normCalories}
      </DailyKCalStyle>
    </>
  );
}
