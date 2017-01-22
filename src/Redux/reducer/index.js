import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'

const getsProfile = (state = {}, action) => {
    switch (action.type) {
        case types.IS_COMPLETE:
            return Object.assign({}, state, {
                Complete: action.json.body
            });
        case types.CHANGE_COMPLETE:
            return Object.assign({}, state, {
                Complete: action.val
            });
        case types.GET_BANK:
            return Object.assign({}, state, {
                Bank: {
                    ...state.Bank,
                    [action.data.type]:action.json.body
                }
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
        case types.CHANGE_ADDRESS_TYPE:
            return Object.assign({}, state, {
                AddressType: action.val
            });
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                base_profile: {...action.json.body,
                    signature:null,
                    spouse_signature:null,
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
        case types.SIGNATURE:
            return Object.assign({}, state, {base_profile: {
                ...state.base_profile,
                [action.key]: action.val
            }
            });
        case types.INVEST_AMOUNT:
            return Object.assign({}, state, {
                invest_amount: action.val
            });

        case types.GET_PAYMENT:
          return Object.assign({}, state, {
            Payment: action.json.body
          });

        case types.GET_DOCUMENT:
          return Object.assign({}, state, {
            Doc: action.json.body
          });


        default:
            return state
    }
};
const rootReducer = combineReducers({
    getsProfile
});
export default rootReducer
