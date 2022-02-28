import reducer from "../reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
