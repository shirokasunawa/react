let initialState = {
    value: 0
}

const AddReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_ONE':
            state = {
                ...state,
                value: state.value + 1
            }
            return state;
        case 'ADD_X':
            state = {
                ...state,
                value: state.value + action.payload
            }
            return state;
        default:
            return state;
    }
}

export default AddReducer