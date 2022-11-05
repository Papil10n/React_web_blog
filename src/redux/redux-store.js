// import reducers
import {combineReducers, createStore} from "redux"
import worksReducer from "./works-reducer";
import blogReducer from "./blog-reducer";

let reducers = combineReducers({
    // mainPage:
    worksPage: worksReducer,
    blogPage: blogReducer
    // Contact:
})

let store = createStore(reducers)

window.store = store

export default store