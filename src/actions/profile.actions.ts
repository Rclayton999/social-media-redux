// These types will be used by the reducer and the dispatcher to determine

import { Dispatch } from 'react'
import { Action } from 'redux'

// what kind of action has been called and how it is to be processed
export const profileActionTypes = {
    ADD_LIKE: 'ADD_LIKE',
    REMOVE_LIKE: 'SPEND_LIKE'
}

export interface ProfileActionPayload {
    payload: {
        clicks: number
    }
}

/* 
    These functions are functions that we can bind to components for them to issue actions.
    Functionally, these functions will dispatch the actions with an action type and an optional
    payload that provides information about the action. In our case the payload should describe 
    the number of clicks that will be removed or added.
    The processing of these actions will be delegated to the reducer.
*/

export const addLike = (clicks: number) => (dispatch: Dispatch<ProfileActionPayload & Action>) => {
    dispatch({
        type: profileActionTypes.ADD_LIKE, 
        payload: {
            clicks: clicks
        }
    })
}

export const removeLikes = (clicks: number) => (dispatch: Dispatch<ProfileActionPayload & Action>) => {
    dispatch({
        type: profileActionTypes.REMOVE_LIKE, 
        payload: {
            clicks: clicks
        }
    })
}