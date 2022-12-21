// imports
import issWorkImg from "./../Image/issWork.png"
import weatherWorkImg from "./../Image/weatherWork.png"
import depositWorkImg from "./../Image/depositWork.png"
import todoWorkImg from "./../Image/TodoWork.png"
import timerWorkImg from "./../Image/timerWork.png"
import liveSearchImg from "./../Image/liveSearchWork.png"
import snakeWorkImg from "./../Image/snakeWork.png"
import formValidationImg from "./../Image/validationFormWork.png"
import socialNetwImg from './../Image/social_netw.png';
import ethExp from './../Image/ethExp.png';
import todoApp from './../Image/todoApp.png';

// action type

// initial state
let initialState = {
    works: [
        {
            id: 25,
            workName: "Todo App",
            image: todoApp,
            yearCreated: 2022,
            category: "React App, Local Storage",
            link: "https://papil10n.github.io/React_ToDo_App/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 125,
            workName: "Etherium Explorer",
            image: ethExp,
            yearCreated: 2022,
            category: "React App (web3)",
            link: "https://papil10n.github.io/React_ethereum_explorer/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 1,
            workName: "Social Network",
            image: socialNetwImg,
            yearCreated: 2022,
            category: "React App",
            link: "https://github.com/Papil10n/social_network",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 2,
            workName: "Pomodoro Clock",
            image: 'https://papil10n.github.io/Web_blog/img/works/05.jpg',
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/Pomodoro_Clock/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 14,
            workName: "Quiz Game",
            image: 'https://papil10n.github.io/Web_blog/img/works/08.jpg',
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/Quiz_game/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 3,
            workName: "Calculator",
            image: 'https://papil10n.github.io/Web_blog/img/works/06.jpg',
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/Calculator/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 4,
            workName: "Stop Watch",
            image: 'https://papil10n.github.io/Web_blog/img/works/07.jpg',
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/StopWatch/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 5,
            workName: "Random Password Generate",
            image: 'https://papil10n.github.io/Web_blog/img/works/02.jpg',
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/random_pass_generate/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 6,
            workName: "ISS Map/Location",
            image: issWorkImg,
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/Iss_location_v1/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 7,
            workName: "Weather App",
            image: weatherWorkImg,
            yearCreated: 2022,
            category: "JS App",
            link: "https://papil10n.github.io/Weather_Site/index.html",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 8,
            workName: "Live Search",
            image: liveSearchImg,
            yearCreated: 2022,
            category: "JS logic",
            link: "https://papil10n.github.io/liveSearch.0/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 9,
            workName: "Small todo list",
            image: todoWorkImg,
            yearCreated: 2022,
            category: "JS logic",
            link: "https://papil10n.github.io/To_do_v0.2/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 10,
            workName: "Deposit Calculator",
            image: depositWorkImg,
            yearCreated: 2022,
            category: "JS logic",
            link: "https://papil10n.github.io/Deposite-Calculator/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 11,
            workName: "Timer",
            image: timerWorkImg,
            yearCreated: 2022,
            category: "JS logic",
            link: "https://papil10n.github.io/timer/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 12,
            workName: "Snake",
            image: snakeWorkImg,
            yearCreated: 2022,
            category: "JS algorithm",
            link: "https://papil10n.github.io/snake_js/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: 13,
            workName: "Form Validation",
            image: formValidationImg,
            yearCreated: 2022,
            category: "JS form",
            link: "https://papil10n.github.io/form_validation/",
            description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },


    //    and more
    ],

}


// reducer
const worksReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

// action creator



export default worksReducer