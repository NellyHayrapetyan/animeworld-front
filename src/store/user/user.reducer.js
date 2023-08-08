import { createSlice } from '@reduxjs/toolkit'

export const UserSlicer = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    removeUserData: (state) => {
      state.user = null;
    },
    userLogIn: () => {},
    userLogOut: () => {},
  }
})

export const { setUserData, removeUserData, userLogIn, userLogOut } = UserSlicer.actions;

export default UserSlicer.reducer;
