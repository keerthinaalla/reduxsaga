const productList = () => {
    // let data = "hello"
    return {
        type: 'PRODUCT_LIST',
        data: 'apple'
    }
}
const setProductList = (data) => {
    // let data = "hello"
    console.log('api call data', data)
    return {
        type: 'SET_PRODUCT_LIST',
        data
    }
}
export default productList;
export { setProductList };