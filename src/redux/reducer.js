import { getLocalStorage, setLocalStorage, createUuid } from "../helpers"

const defaultValue = getLocalStorage('listItems') ?? []

const reducer = ( state = defaultValue, action ) => {
    switch(action.type){
        case 'list/add' : {
            const newItem = { ...action.payload, id : createUuid() }
            const newListItems = [ ...state, newItem ]
            setLocalStorage('listItems',newListItems)
            return newListItems
        }
        case 'list/delete' : {
            const itemId = action.payload
            const indexItem = state.findIndex((ele) => ele.id === itemId)
            state.splice(indexItem, 1)
            setLocalStorage('listItems',[...state])
            return [...state]
        }
        default:
            return state
    }
}

export default reducer