import { put, takeEvery } from 'redux-saga/effects'
function* getProducts() {
    // console.log('api call here')
    let data = yield fetch('https://jsonplaceholder.typicode.com/users');
    data = yield data.json();
    console.log('action called from product saga', data)
    yield put({ type: 'SET_PRODUCT_LIST', data })
}
function* productSaga() {
    yield takeEvery('PRODUCT_LIST', getProducts)

}
export default productSaga;