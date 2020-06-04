import { PeopleState } from '.';
import { ProfileActionPayload, profileActionTypes } from '../actions/profile.actions';
import { Action } from 'redux';

const initialState: PeopleState = {
    people: [{
        name: 'Ryan Clayton',
        birthdate: 'April 28',
        posts: [{ content: 'Hello this is my post', likes: 0 }]
    },
    {
        name: 'test profile',
        birthdate: 'April 20',
        posts: [{ content: 'Hello this is my post', likes: 0 },{content:'Yay! I have two posts!',likes:1}]
    }


    ]
}

export const feedReducer = (state: PeopleState = initialState,
    action: ProfileActionPayload & Action) => {
    switch (action.type) {
        case profileActionTypes.ADD_LIKE: {
            return {
                ...state,
                clicks: state.people[0].posts[0].likes + action.payload.clicks
            }
        }
        case profileActionTypes.REMOVE_LIKE: {
            return {
                ...state,
                clicks: state.people[0].posts[0].likes - action.payload.clicks
            }
        }
        default: return state;
    }

}