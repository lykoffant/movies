import { configureStore } from '@reduxjs/toolkit';

import detailedItemReducer from './detailedItemSlice';
import foundListReducer from './foundListSlice';

const store = configureStore({
  reducer: {
    foundList: foundListReducer,
    detailedItem: detailedItemReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
