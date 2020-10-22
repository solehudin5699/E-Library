import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

import indexReducer from "./reducers/";

const persistConfig ={
  key: "root",
  storage:sessionStorage,
  blacklist:["animate"]
  // whitelist: ["book"]
}
const persistedReducer = persistReducer(persistConfig, indexReducer )
const logger = createLogger();
const enhancer = applyMiddleware(rpm, logger);

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store)

export {store, persistor};
