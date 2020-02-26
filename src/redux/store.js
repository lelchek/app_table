import { compose, createStore } from "redux";
import persistState from "redux-localstorage";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "../redux/reducer";

const enhancer = compose(devToolsEnhancer(), persistState());

const store = createStore(reducer, enhancer);

export default store;
