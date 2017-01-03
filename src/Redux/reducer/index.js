import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'

const getsProfile = (state = {}, action) => {
  console.log('BBBBBBBBBBBBBBBBBBBBBBBB'+JSON.stringify(state))

    switch (action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                /*first_name: action.json.body.first_name,
                 email: action.json.body.email,
                 date_of_birth: action.json.body.date_of_birth,
                 passport_photo: null*/
                base_profile: {
                  [action.data]: action.key
                }
            });
        case types.UPDATE_UPLOADER:
            return Object.assign({}, state, {
                base_profile: {
                    [action.data]: action.key
                }
            });
        default:
            return state
    }
};

const rootReducer = combineReducers({
    getsProfile
});

export default rootReducer
