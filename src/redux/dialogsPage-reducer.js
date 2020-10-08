const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Great!' },
    ],
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Drew' },
        { id: 4, name: 'Mafusail' },
        { id: 5, name: 'Gogi' },
        { id: 6, name: 'T800' },
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMessage = {
                id: 4,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state;
    }
}

export const addMessage = (newMessageText) => {
    return {
        type: ADD_MESSAGE, newMessageText
    }
}

export default dialogsPageReducer;