import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();
const Middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  Middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...Middleware));

export default { store };
