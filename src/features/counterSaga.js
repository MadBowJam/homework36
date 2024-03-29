import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchData } from '../api'; // Опціонально: відповідно до шляху до вашого файлу api.js

// Функція-робітник для виконання асинхронного запиту
function* fetchDataWorker() {
  try {
    const data = yield call(fetchData); // Виклик функції з файлу api.js
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

// Сага для відстежування дій FETCH_DATA_REQUEST
export function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataWorker);
}
