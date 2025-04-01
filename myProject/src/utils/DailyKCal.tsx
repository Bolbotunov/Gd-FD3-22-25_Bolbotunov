import { DailyKCalStyle } from '../styles/Fonts.styled';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { calculateNormDailyCalories } from './calculateNormDailyCalories';

type DailyKCalProps = {
  onDate: number;
};

export default function DailyKCal({ onDate }: DailyKCalProps) {
  let dailyKCal = Math.round(onDate);
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
