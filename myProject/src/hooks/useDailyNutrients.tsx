import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { ProductType } from "../store/AuthSlice";
import { calculateNutrients } from "../utils/calculateNutrients";

export function useDailyNutrients() {
  const products = useSelector((state: RootState) => state.authSlice.products);

  const nutrientsPerProduct = useMemo(() => {
    return products.map((product: ProductType) => ({
      id: product.id,
      nutrients: calculateNutrients(product),
    }));
  }, [products]);

  const totals = useMemo(() => {
    return products.reduce(
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
  }, [products]);


  const proteinPercent = useMemo(
    () => `${(totals.protein / 150 * 100).toFixed(1)}`,
    [totals.protein]
  );
  const fatsPercent = useMemo(
    () => `${(totals.fats / 80 * 100).toFixed(1)}`,
    [totals.fats]
  );
  const carbsPercent = useMemo(
    () => `${(totals.carbs / 300 * 100).toFixed(1)}`,
    [totals.carbs]
  );

  const proteinTitle = useMemo(() => `${proteinPercent}/100%`, [proteinPercent]);
  const fatsTitle = useMemo(() => `${fatsPercent}/100%`, [fatsPercent]);
  const carbsTitle = useMemo(() => `${carbsPercent}/100%`, [carbsPercent]);


  return {
    products,
    nutrientsPerProduct,
    totals,
    proteinPercent,
    fatsPercent,
    carbsPercent,
    proteinTitle,
    fatsTitle,
    carbsTitle
  };
}
