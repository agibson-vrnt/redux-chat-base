import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import joining from "./joining";
import chatter from "./chatter";

export default createStore(

	combineReducers( { joining, chatter } ),
	applyMiddleware( thunkMiddleware )

);
