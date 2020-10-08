let initialState = {
    friends: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Misha' },
        { id: 3, name: 'Drew' },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;