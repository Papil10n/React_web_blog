// imports

// action type

// initial state
let initialState = {
    posts: [
        {
            id: 1,
            postName: "Mimo learning",
            date: "29 Mar 2022",
            category: "Mimo, mobile app",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 2,
            postName: "Basic HTML, CSS",
            date: "27 Apr 2022",
            category: "HTML, Mimo, CSS, SCSS",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 3,
            postName: "Responsive/Adaptive site",
            date: "11 May 2022",
            category: "CSS, HTML, Mimo, LearnJs, SCSS, html/css",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 4,
            postName: "Basic JavaScript",
            date: "02 Jun 2022",
            category: "Data structures, Functions, Scope/Closure, LearnJs, CodeWars 8, GULP",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 5,
            postName: "JavaScript, ES6+",
            date: "27 Jun 2022",
            category: "Event Loop, Promises, DOM, LearnJs, GitHub, CodeWars 6 kyu",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 6,
            postName: "JavaScript+",
            date: "2 Aug 2022",
            category: "API requests, storage, cookies, algorithms, CodeWars 5kyu",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 7,
            postName: "JavaScript (pet-projects)",
            date: "14 Aug 2022",
            category: "Calculator, StopWatch, Pomodoro Clock, CodeWars 5kyu",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 8,
            postName: "Learn React",
            date: "15 Sep 2022",
            category: "WebStorm, JSX, Props, Router, NavLink",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 9,
            postName: "Learn Redux",
            date: "1 Oct 2022",
            category: "State mngmnt, createStore(), Observer, dispatch, context API, combineReducers()",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 10,
            postName: "Learn React-Redux",
            date: "26 Oct 2022",
            category: "connect(), redux-thunk, thunk middleware, compose(), HOC, navigate, axios",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 11,
            postName: "Learn JS algorithms+, work on e-projects",
            date: "10 Dec 2022",
            category: "DFS, BFS, graphs, sorting+, consolidation of knowledge of react",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
    //    and more
    ],

}


// reducer
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
        case '':
        default:
            return state
    }
}

// action creator



export default blogReducer;