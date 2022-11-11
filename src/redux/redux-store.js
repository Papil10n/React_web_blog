// import reducers
import {combineReducers, createStore} from "redux"
import worksReducer from "./works-reducer";
import blogReducer from "./blog-reducer";
import contactReducer from "./contacts-reducer";

let reducers = combineReducers({
    worksPage: worksReducer,
    blogPage: blogReducer,
    contactPage: contactReducer,
})

let store = createStore(reducers);

window.store = store

export default store