import listReducer from "./listReducer"
import layoutReducer from "./layoutReducer"
import configReducer from "./configReducer"
import { combineReducers } from "redux"

const reducer = combineReducers({
    listItems : listReducer,
    layout : layoutReducer,
    config : configReducer
})


export default reducer