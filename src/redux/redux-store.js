// import reducers
import {combineReducers, createStore} from "redux"
import worksReducer from "./works-reducer";

let reducers = combineReducers({
    // mainPage:
    worksPage: worksReducer
    // BlogPage:
    // Contact:
})

let store = createStore(reducers)

window.store = store

export default store