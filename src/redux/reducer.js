import { getLocalStorage, } from "../helpers"
import listReducer from "./listReducer"

const initialState = {
    listItems : getLocalStorage('listItems') ?? []
}

const reducer = ( state = initialState, action ) =>{
    return {
        listItems : listReducer( state.listItems, action )
    }
}


export default reducer