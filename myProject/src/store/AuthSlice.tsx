import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultProducts } from '../pages/productsPage/defaultProducts';
import { calculateNormDailyCalories } from '../utils/calculateNormDailyCalories';

export type ProfileType = {
  weight?: number;
  height?: number;
  age?: number;
  goal?: string;
  activity?: string;
  gender?: string;
};

export type ProductType = {
  id: string | '';
  food_name: string;
  nf_protein: number;
  nf_total_fat: number;
  nf_total_carbohydrate: number;
  nf_calories: number;
  isDefault?: boolean;
  weight?: number;
  diaryDate?: string;
};

type AuthStateType = {
  uid: string | null;
  userName: string | null;
  userEmail: string | null;
  profile: ProfileType | null;
  recommendedCalories?: number | null;
  userNormOfProtein?: number | null;
  userNormOfFats?: number | null;
  userNormOfCarbs?: number | null;
  products: ProductType[];
  dictionary: ProductType[];
  status: string;
  error: string | null;
};

const initialState: AuthStateType = {
  uid: null,
  userName: null,
  userEmail: null,
  profile: null,
  recommendedCalories: null,
  products: [],
  dictionary: defaultProducts,
  status: '',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        uid: string;
        userName: string;
        userEmail: string;
        profile?: ProfileType;
      }>
    ) {
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.profile = action.payload.profile || null;
      state.status = 'succeeded';
    },
    setUserProfile(state, action: PayloadAction<ProfileType>) {
      state.profile = action.payload;

      if (action.payload) {
        const calculatedValues = calculateNormDailyCalories(action.payload);

        if (calculatedValues) {
          state.recommendedCalories = calculatedValues.normCalories;
          state.userNormOfProtein = calculatedValues.userNormOfProtein;
          state.userNormOfFats = calculatedValues.userNormOfFats;
          state.userNormOfCarbs = calculatedValues.userNormOfCarbs;
        }
      } else {
        state.recommendedCalories = null;
        state.userNormOfProtein = null;
        state.userNormOfFats = null;
        state.userNormOfCarbs = null;
      }
    },

    setDictionaryProducts(state, action: PayloadAction<ProductType[]>) {
      state.dictionary = action.payload;
    },
    addUserProduct(state, action: PayloadAction<ProductType>) {
      state.products.push(action.payload);
    },
    updateUserProduct(state, action: PayloadAction<ProductType>) {
      const index = state.dictionary.findIndex(
        (p) => p.food_name === action.payload.food_name
      );
      if (index !== -1) {
        state.dictionary[index] = action.payload;
      }
    },
    updateDailyProduct(state, action: PayloadAction<ProductType>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    setDailyProducts(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
    removeDictionaryProduct(state, action: PayloadAction<string>) {
      state.dictionary = state.dictionary.filter(
        (p) => p.id !== action.payload
      );
    },
    removeDailyProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    clearUser(state) {
      state.uid = null;
      state.userName = null;
      state.userEmail = null;
      state.profile = null;
      state.products = [];
      state.dictionary = [];
      state.status = '';
    },
  },
});

export const {
  setUser,
  setUserProfile,
  addUserProduct,
  clearUser,
  updateUserProduct,
  setDictionaryProducts,
  removeDictionaryProduct,
  setDailyProducts,
  removeDailyProduct,
  updateDailyProduct,
} = authSlice.actions;
export default authSlice.reducer;
