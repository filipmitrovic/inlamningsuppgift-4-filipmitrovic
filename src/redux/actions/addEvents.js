const addEvents = (events) => {
    return {
        type: 'ADD_EVENTS',
        payload: events
    }
}

export default addEvents;