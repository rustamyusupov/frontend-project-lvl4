import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import request from "../utils/request";

import reducer from "./reducers";

const configureAppStore = (initialState = {}) => {
  const defaultMiddleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: {
      extraArgument: { request },
    },
  });
  const middleware = [...defaultMiddleware];
  const isDev = process.env.NODE_ENV !== "production";

  const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware,
    devTools: isDev,
  });

  if (module.hot && isDev) {
    module.hot.accept("./reducers", () => store.replaceReducer(reducer));
  }

  return store;
};

export default configureAppStore;
