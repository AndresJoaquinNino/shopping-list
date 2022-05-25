const initialState = {
    isOpenModalItem : false,
    isOpenModaledit : false
}

const layputReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'modalItem/isOpen' : {
            return { ...state, isOpenModalItem : action.payload }
        }
        default:
            return state
    }
}

export default layputReducer