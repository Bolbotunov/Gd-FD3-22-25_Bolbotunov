import { useState } from 'react';
import { ProductType } from '../store/AuthSlice';
import { v4 as uuidv4 } from 'uuid';
import { todayFormatted } from '../config/defaultProducts';

export function useProductForm(initialProduct?: ProductType) {
  const [product, setProduct] = useState<ProductType>(
    initialProduct || {
      id: uuidv4() + todayFormatted,
      food_name: '',
      nf_protein: 0,
      nf_total_fat: 0,
      nf_total_carbohydrate: 0,
      nf_calories: 0,
      isDefault: true,
      weight: 100,
    }
  );

  const handleChange = (field: keyof ProductType, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [field]: field === 'food_name' ? value : Number(value),
    }));
  };

  return { product, setProduct, handleChange };
}
