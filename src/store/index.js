import { reducer as formReducer } from 'redux-form';
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { homeReducer } from 'src/home';

const enhancers = [];
if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const rootReducer = combineReducers({
    form: formReducer,
    home: homeReducer
})

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), ...enhancers));

export default store;
