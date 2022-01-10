import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./Reducers";

// Note: this API requires redux@>=3.1.0
const composeEnhancers =
	(typeof window !== "undefined" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
