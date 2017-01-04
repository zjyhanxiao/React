import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'

const getsProfile = (state = {}, action) => {
    switch (action.type) {
        case types.GET_PROFILE_SUCCESS:

            // console.log('BBBBBBBBBBBBBB' + JSON.stringify(state))
            // console.log('bbbbbbbbbbbbbbbb' + JSON.stringify(action))
            return Object.assign({}, state, {
                /*first_name: action.json.body.first_name,
                 email: action.json.body.email,
                 date_of_birth: action.json.body.date_of_birth,
                 passport_photo: null*/
                base_profile: action.json.body
            });
        case types.UPDATE_UPLOADER:
            // console.log('CCCCCCCCCCCCCCCCCCCC' + JSON.stringify(state))
            // console.log('ccccccccccccccccccc' + JSON.stringify(action))
            return Object.assign({}, state, {
                base_profile: {
                    ...state.base_profile,
                    [action.data]: action.key
                }
            });
        case types.SAVE_FIELDS:
            // console.log('CCCCCCCCCCCCCCCCCCCC' + JSON.stringify(state))
            // console.log('ccccccccccccccccccc' + JSON.stringify(action.val))
            return Object.assign({}, state, {base_profile: {
                ...state.base_profile,
                [action.key]: action.val
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
