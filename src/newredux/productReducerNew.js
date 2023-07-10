const productData = (data = [], action) => {
    switch (action.type) {
        // case 'PRODUCT_LIST':
        //     return [action.data]
        case 'SET_PRODUCT_LIST':
            return [...action.data]
        default:
            return data;
    }
}
export default productData;