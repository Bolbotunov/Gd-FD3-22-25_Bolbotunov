import { useDailyNutrients } from './useDailyNutrients';

export default function useDailyKCal() {
  const { totals } = useDailyNutrients();

  return totals.calories;
}
