import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ProductType } from '../store/AuthSlice';
import { calculateNutrients } from '../utils/calculateNutrients';
import { calculateNormDailyCalories } from '../utils/calculateNormDailyCalories';

export function useDailyNutrientsForDate(selectedDate: Date) {
  const products = useSelector((state: RootState) => state.authSlice.products);
  const currentUser = useSelector((state: RootState) => state.authSlice);
  const formattedDate = new Date(selectedDate).toLocaleDateString('ru-RU');

  const filteredProducts: ProductType[] = useMemo(() => {
    return products.filter(
      (product: ProductType) => product.diaryDate === formattedDate
    );
  }, [products, formattedDate]);

  const totals = useMemo(() => {
    return filteredProducts.reduce(
      (acc, product) => {
        const { protein, fats, carbs, calories } = calculateNutrients(product);
        return {
          protein: acc.protein + protein,
          fats: acc.fats + fats,
          carbs: acc.carbs + carbs,
          calories: acc.calories + calories,
        };
      },
      { protein: 0, fats: 0, carbs: 0, calories: 0 }
    );
  }, [filteredProducts]);

  const recommendedCalories = currentUser.profile
    ? calculateNormDailyCalories(currentUser.profile)
    : null;

  const normOfProteins = recommendedCalories?.userNormOfProtein || 100;
  const normOfFats = recommendedCalories?.userNormOfFats || 100;
  const normOfCarbs = recommendedCalories?.userNormOfCarbs || 100;

  const proteinPercent = useMemo(
    () => `${((totals.protein / normOfProteins) * 100).toFixed(1)}`,
    [totals.protein, normOfProteins]
  );
  const fatsPercent = useMemo(
    () => `${((totals.fats / normOfFats) * 100).toFixed(1)}`,
    [totals.fats, normOfFats]
  );
  const carbsPercent = useMemo(
    () => `${((totals.carbs / normOfCarbs) * 100).toFixed(1)}`,
    [totals.carbs, normOfCarbs]
  );

  const proteinTitle = useMemo(
    () => `${proteinPercent}/100%`,
    [proteinPercent]
  );
  const fatsTitle = useMemo(() => `${fatsPercent}/100%`, [fatsPercent]);
  const carbsTitle = useMemo(() => `${carbsPercent}/100%`, [carbsPercent]);

  return {
    filteredProducts,
    totals,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle,
  };
}
