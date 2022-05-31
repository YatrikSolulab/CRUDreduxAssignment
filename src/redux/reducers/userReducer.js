import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      return state
    },
    updateUser: (state, action) => {
        state.value = state.value.map(i => i.id == action.payload.id ? action.payload : i)
        return state
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(i => i.id !== action.payload)
      return state;
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
