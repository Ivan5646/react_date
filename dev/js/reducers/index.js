import {combineReducers} from "redux";
import dateComp from "./dateComp-reducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    dateComp: dateComp
});

export default allReducers;