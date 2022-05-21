import listReducer from "./listReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    listItems : listReducer
})


export default reducer