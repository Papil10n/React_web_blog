// imports

// action type

// initial state
let initialState = {
    contacts: [
        {
            id: 0,
            type: "Gmail",
            contact: "nikept.co@gmail.com",
        },
        {
            id: 1,
            type: "Telegram",
            contact: "@Papil10n_nick",
        },
        {
            id: 2,
            type: "GitHub",
            contact: "github.com/Papil10n",
        },

    //    and more
    ],

}


// reducer
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
        case '':
        default:
            return state
    }
}

// action creator



export default contactReducer;