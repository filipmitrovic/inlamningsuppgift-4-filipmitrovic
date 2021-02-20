const initialState = {
    events: []
}

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENTS':
            return {
                events: action.payload
            }
        default: return state;
    }
}

export default eventsReducer;