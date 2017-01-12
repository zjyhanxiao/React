import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'
const baseState={

}
const getsProfile = (state = {}, action) => {
    switch (action.type) {
        case types.IS_COMPLETE:
            return Object.assign({}, state, {
                Complete: action.json.body
            });
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
                    email:action.json.body.email,
                    phone:action.json.body.phone,
                    investor_type:action.json.body.investor_type,
                    first_name:action.json.body.first_name,
                    last_name:action.json.body.last_name,


                    date_of_birth:action.json.body.base_info.date_of_birth,
                    country_of_birth:action.json.body.base_info.country_of_birth,
                    nationality:action.json.body.base_info.nationality,
                    industry:action.json.body.base_info.industry,
                    occupation:action.json.body.base_info.occupation,
                    source_of_capital:action.json.body.base_info.source_of_capital,
                    country_of_tax_residency:action.json.body.base_info.country_of_tax_residency,
                    foreign_tax_number:action.json.body.base_info.foreign_tax_number,
                    ssn:action.json.body.base_info.ssn,

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