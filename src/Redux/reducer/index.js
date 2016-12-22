import { combineReducers } from 'redux'
import * as types from '../actions/ActionTypes'


function getsByProfile(state = { }, action) {
    switch (action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                base_profile: action.json.body
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getsByProfile
})

export default rootReducer