import { calculateNutrients } from "../utils/calculateNutrients";
import { ProductType } from "../store/AuthSlice";
import { useMemo } from "react";

  export function useDailyNutrients(products: ProductType[]) {
    return useMemo(() => {
      const totals = products.reduce(
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
      return totals;
    }, [products]);
  }
