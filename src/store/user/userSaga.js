import { call, put, takeEvery } from 'redux-saga/effects'
import * as User from '../../api/user.api'
import {removeUserData, setUserData} from './user.reducer'
export default function* userSaga() {
  yield takeEvery('user/userLogIn', saveUserData)
  yield takeEvery('user/userLogOut', logOutUser)
}

function* saveUserData(action) {
  const user = action.payload;
  const response = yield call(User.logIn, user);
  user.token = response.data.token;
  yield call(() => localStorage.setItem('token', user.token));
  yield put(setUserData(user))
}

function* logOutUser(action) {
  const email = action.payload;
  yield call(User.logOut, email);
  yield call(() => localStorage.removeItem('token'));
  yield put(removeUserData())
}