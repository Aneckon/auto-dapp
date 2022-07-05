import { configureStore } from '@reduxjs/toolkit';

import cardReducer from './reducer/cardReducer';

export const store = configureStore({
	reducer: cardReducer,
});


export type RootState = ReturnType<typeof store.getState>