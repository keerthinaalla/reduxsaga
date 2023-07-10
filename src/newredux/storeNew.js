import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productsagaNew";
import productData from "./productReducerNew";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        products: productData
    },
    middleware: () => [sagaMiddleware]
})
sagaMiddleware.run(productSaga)
// console.log(sagaMiddleware.run(productSaga))
export default store;