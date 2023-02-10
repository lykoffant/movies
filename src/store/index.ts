import { configureStore } from '@reduxjs/toolkit';

import foundListReducer from './foundListSlice';

const store = configureStore({
  reducer: {
    foundList: foundListReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
