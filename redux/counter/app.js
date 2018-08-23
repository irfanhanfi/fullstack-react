function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return state + action.amount;
    } else if (action.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

function createStore(reducer) {
    let state = 0;
    const getState = () => (state);
    const dispatch = (action) => {
        state = reducer(state, action);
    };
    return {
        getState,
        dispatch,
    };
}

const store = createStore(reducer);
const incrementAction = {
    type: 'INCREMENT',
    amount: 3,
};
store.dispatch(incrementAction);
console.log(store.getState()); // -> 3
store.dispatch(incrementAction);
console.log(store.getState()); // -> 6
const decrementAction = {
    type: 'DECREMENT',
    amount: 4,
};
store.dispatch(decrementAction);
console.log(store.getState()); // -> 2

/*const incrementAction = {
    type: 'INCREMENT',
    amount: 5,
};
console.log(reducer(0, incrementAction));
console.log(reducer(1, incrementAction));
console.log(reducer(5, incrementAction));
const unknownAction = { type: 'UNKNOWN' };
console.log(reducer(5, unknownAction));
console.log(reducer(8, unknownAction));
const decrementAction = {
    type: 'DECREMENT',
    amount: 11,
};
console.log(reducer(10, decrementAction));
console.log(reducer(9, decrementAction));
console.log(reducer(5, decrementAction));*/

