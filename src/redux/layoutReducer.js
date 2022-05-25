const initialState = {
    isOpenModalItem : false,
    modalEdit : {
        isOpen : false,
        editTo : {
            id : 0,
            name : '',
            currency : '',
            price : 0
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
        case 'modalEdit/editTo' : {
            const valuesToEdit = action.payload
            const newModalEdit = {
                isOpen : true,
                editTo : valuesToEdit
            }
            return { ...state, modalEdit : newModalEdit }

        }
        default:
            return state
    }
}

export default layputReducer