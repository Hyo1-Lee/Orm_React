
function countReducer(state, action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'INIT':
            return 0;
        default:
            return state;
    }
}

export default countReducer;