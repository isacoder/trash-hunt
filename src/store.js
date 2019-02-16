import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import geolocation from './reducers/reducer-geolocation';

const reducer = combineReducers({
  geolocation
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default store;