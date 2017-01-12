import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'
const baseState={

}
const getsProfile = (state = {}, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
            return Object.assign({}, state, {
                Product: action.json.body
            });
        case types.GET_INDUSTRY:
            return Object.assign({}, state, {
                Industry: action.json.body
            });
        case types.GET_OCCUPATION:
            return Object.assign({}, state, {
                Occupation: action.json.body
            });
        case types.GET_COUNTRY:
            return Object.assign({}, state, {
                Country: action.json.body
            });
        case types.GET_STATE:
            return Object.assign({}, state, {
                Region: action.json.body
            });
        case types.GET_CITY:
            return Object.assign({}, state, {
                City: action.json.body
            });
        case types.GET_COUNTY:
            return Object.assign({}, state, {
                County: action.json.body
            });
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                /*first_name: action.json.body.first_name,
                 email: action.json.body.email,
                 date_of_birth: action.json.body.date_of_birth,
                 passport_photo: null*/
                base_profile: {
                    ...action.json.body
                }
            });
        case types.UPDATE_UPLOADER:
            return Object.assign({}, state, {
                base_profile: {
                    ...state.base_profile,
                    [action.data]: action.key
                }
            });
        case types.SAVE_FIELDS:
            return Object.assign({}, state, {base_profile: {
                ...state.base_profile,
                [action.key]: action.val
            }
            });
        case types.INVESTOR_TYPE:
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