import listReducer from "./listReducer"
import modalReducer from "./modalReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    listItems : listReducer,
    modalItems : modalReducer
})


export default reducer