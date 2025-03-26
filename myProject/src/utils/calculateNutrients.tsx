import { ProductType } from '../store/AuthSlice';

export function calculateNutrients(product: ProductType) {
  const multiplier = (product.weight || 100) / 100;
  return {
    protein: parseFloat((product.nf_protein * multiplier).toFixed(1)),
    fats: parseFloat((product.nf_total_fat * multiplier).toFixed(1)),
    carbs: parseFloat((product.nf_total_carbohydrate * multiplier).toFixed(1)),
    calories: parseFloat(
      (
        (product.nf_protein * 4 +
          product.nf_total_carbohydrate * 4 +
          product.nf_total_fat * 9) *
        multiplier
      ).toFixed(1)
    ),
  };
}
