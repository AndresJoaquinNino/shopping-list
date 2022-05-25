import listReducer from "./listReducer"
import layoutReducer from "./layoutReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    listItems : listReducer,
    layout : layoutReducer
})


export default reducer