import { getLocalStorage, setLocalStorage, createUuid } from "../helpers"


const initialState = getLocalStorage('listItems') ?? []

const listReducer = ( state = initialState, action ) => {
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
        case 'list/edit' : {
            const { id:itemId } = action.payload
            const newListItem = state.map((ele) => ele.id === itemId ? action.payload :  ele)
            return newListItem
        }
        default:
            return state
    }
}

export default listReducer