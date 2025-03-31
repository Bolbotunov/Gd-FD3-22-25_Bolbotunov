import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ProductType } from '../store/AuthSlice';
import { calculateNutrients } from '../utils/calculateNutrients';
import { calculateNormDailyCalories } from '../utils/calculateNormDailyCalories';

export function useDailyNutrients() {
  return {};
}
