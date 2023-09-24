import { put, takeLatest, select } from 'redux-saga/effects';
import { SET_SIZE, setSize } from '../actions/sizeActions';

function* saveSizeToLocalStorage() {
  const selectedSize = yield select((state) => state.size.size);
  localStorage.setItem('selectedSize', selectedSize);
}

function* loadSizeFromLocalStorage() {
  const storedSize = localStorage.getItem('selectedSize');
  if (storedSize) {
    yield put(setSize(storedSize));
  }
}

export function* localStorageSaga() {
  yield takeLatest(SET_SIZE, saveSizeToLocalStorage);
  yield loadSizeFromLocalStorage();
}