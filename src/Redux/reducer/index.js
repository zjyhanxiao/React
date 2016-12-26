import { combineReducers } from 'redux'
import * as types from '../actions/ActionTypes'


function getsByProfile(state = { }, action) {
    switch (action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                first_name: action.json.body.first_name,
                email: action.json.body.email
                // base_profile: action.json.body
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getsByProfile
})

export default rootReducer