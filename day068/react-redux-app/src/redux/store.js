//Saga환경을 지원하는 store구성 방식
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(...middlewares))
	);
	sagaMiddleware.run(sagas);
	return store;
}
