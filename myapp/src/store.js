import {
    combineReducers,
    compose,
    applyMiddleware,
    legacy_createStore as createStore,
  } from "redux";
 
  // import thunk from "redux-thunk";
  import { AuthReducer } from "./Auth/reducer";
  const rootReducer = combineReducers({
    Auth:AuthReducer
  });
  const middleware1 = (store) => (next) => (action) => {
    console.log("type of action is ", action);
    //if action is function invoke this
    if (typeof action === "function") {
      return action(store.dispatch);
    }
    next(action); // mandatory thing
  };
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(middleware1)
    // other store enhancers if any
  );
  export const store = createStore(rootReducer, enhancer);