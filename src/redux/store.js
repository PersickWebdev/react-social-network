import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likes: 12 },
                { id: 2, message: 'It is my first post', likes: 15 },
                { id: 3, message: 'It is my cake!', likes: 10 },
                { id: 4, message: 'What are you doing?', likes: 17 },
            ],
            newPostText: 'type your message here'  // initial value of textarea
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Great!' },
            ],
            newMessageText: 'Type your message',
            dialogs: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Misha' },
                { id: 3, name: 'Drew' },
                { id: 4, name: 'Mafusail' },
                { id: 5, name: 'Gogi' },
                { id: 6, name: 'T800' },
            ]
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Misha' },
                { id: 3, name: 'Drew' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}




export default store;