const initialState = {
    usdValue : 1
}

const configReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'config/usdValue' : {
            return { ...state, usdValue : action.payload }
        }
        default:
            return state
    }
}

export default configReducer