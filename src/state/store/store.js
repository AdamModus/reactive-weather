import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

const middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()));
const store = createStore(reducers, middleware);

export default store;
