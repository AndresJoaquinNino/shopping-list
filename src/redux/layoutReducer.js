const initialState = {
    isOpenModalItem : false,
    modalEdit : {
        isOpen : false,
        editTo : {
            name : '',
            currency : '',
            price : ''
        }
    }
}

const layputReducer = ( state = initialState, action ) => {
    switch(action.type){
        case 'modalItem/isOpen' : {
            return { ...state, isOpenModalItem : action.payload }
        }
        case 'modalEdit/isOpen' : {
            const newModalEdit = state.modalEdit
            newModalEdit.isOpen = action.payload
            return { ...state, modalEdit : newModalEdit }

        }
        default:
            return state
    }
}

export default layputReducer