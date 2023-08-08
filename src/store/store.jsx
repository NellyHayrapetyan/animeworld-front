import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import UserReducer from './user/user.reducer'
import userSaga from './user/userSaga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: {
    user: UserReducer,
  },
  middleware: [ sagaMiddleware ]
});

sagaMiddleware.run(userSaga)