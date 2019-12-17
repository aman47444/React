import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'
const middleware = [thunk];
const initialState = {};
const store = createStore( 
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
    );
export default store;