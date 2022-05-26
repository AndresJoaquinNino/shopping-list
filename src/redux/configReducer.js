import { getLocalStorage, setLocalStorage } from "../helpers"

const initialState = {
    usdValue : getLocalStorage('usdValue') ?? 1
}

const configReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'config/usdValue' : {
            setLocalStorage('usdValue', action.payload)
            return { ...state, usdValue : action.payload }
        }
        default:
            return state
    }
}

export default configReducer