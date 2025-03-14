import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type ProfileType = {
  weight?: number;
  height?: number;
  age?: number;
  goal?: string;
  activity?: string;
  gender?: string;
};

export type ProductType = {
  food_name: string;
  nf_protein: number;
  nf_total_fat: number;
  nf_total_carbohydrate: number;
  nf_calories: number;
};

type AuthStateType = {
  uid: string | null;
  userName: string | null;
  userEmail: string | null;
  profile: ProfileType | null;
  products:  ProductType[];
  status: string;
  error: string | null;
}

const initialState: AuthStateType = {
  uid: null,
  userName: null,
  userEmail: null,
  profile: null,
  products: [],
  status: '',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ uid: string; userName: string; userEmail: string; profile?: ProfileType }>) {
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.profile = action.payload.profile || null;
      state.status = 'succeeded';
    },
    setUserProfile(state, action: PayloadAction<ProfileType>) {
      state.profile = action.payload;
    },
    addUserProduct(state, action: PayloadAction<ProductType>) {
      state.products.push(action.payload);
    },
    clearUser(state) {
      state.uid = null;
      state.userName = null;
      state.userEmail = null;
      state.profile = null;
      state.products = [];
      state.status = '';
    }
  }
})

export const { setUser,  setUserProfile, addUserProduct, clearUser } = authSlice.actions;
export default authSlice.reducer;
