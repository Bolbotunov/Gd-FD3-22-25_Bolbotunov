import { useDailyNutrientsForDate } from './useDailyNutrientsForDate';
import useCurrentDate from './useCurrentDate';

export default function useDailyKCal() {
  const currentDate = useCurrentDate();
  const { totals } = useDailyNutrientsForDate(currentDate);

  return totals.calories;
}
