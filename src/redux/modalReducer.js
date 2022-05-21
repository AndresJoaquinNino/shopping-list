const initialState = {
    isOpen : false
}

const modalReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'modal/isOpen' : {
            return { ...state, isOpen : action.payload }
        }
        default:
            return state
    }
}

export default modalReducer