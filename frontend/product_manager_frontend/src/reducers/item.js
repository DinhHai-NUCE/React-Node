const initialState = {
    item: {
        product_name: '',
        product_price: null,
        image: ''
    }
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = [...state.item];
            newItem.push(action.payload);
            return {
                item: newItem
            }

        default:
            return state
    }
}

export default itemReducer;