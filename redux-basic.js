const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
};

const rootReducer =  (state= initialState, action) => {
    if(action.type == 'INC'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if(action.type == 'ADD'){
        return {
            ...state,
            counter: state.counter + action.alo
        }
    }
    return state;
}

const store = createStore(rootReducer);
console.log(store.getState());

store.subscribe(()=>{
    console.log('[Subscribe] ', store.getState());
});

store.dispatch({type: 'INC'});
console.log(store.getState());
store.dispatch({type: 'ADD', alo: 5});
console.log(store.getState());