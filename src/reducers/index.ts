import { Profile } from "../models/people";
import { combineReducers } from "redux";
import { feedReducer } from "./profile.reducer";


export interface IState{
    peopleState: PeopleState;
}

export interface PeopleState{
    people: Profile[];
}
export const state = combineReducers({
    peopleState: feedReducer,
})
