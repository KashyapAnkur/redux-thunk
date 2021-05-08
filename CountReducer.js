const initialState = {count: 0};

function CountReducer(state = initialState, action) {
    switch(action.type) {
        case "counter/increase": {
            return {count: state.count + 1}
        }
        case "counter/decrease": {
            return {count: state.count - 1}
        }
        case "counter/asyncincrease": {
            return {count: state.count + 10}
        }
        default: {
            return state;
        }
    }
}

export default CountReducer;