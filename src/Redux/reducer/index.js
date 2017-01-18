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
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                /*first_name: action.json.body.first_name,
                 email: action.json.body.email,
                 date_of_birth: action.json.body.date_of_birth,
                 passport_photo: null*/
                base_profile: {...action.json.body,
                    signature:null,
                    spouse_signature:null,
                }
/*                    {
                    email:action.json.body.email,
                    phone:action.json.body.phone,
                    investor_type:action.json.body.investor_type,
                    first_name:action.json.body.first_name,
                    last_name:action.json.body.last_name,
                    passport_number:action.json.body.passport_number,
                    passport_url:action.json.body.passport_url,
                    passport_expire_date:action.json.body.passport_expire_date,
                    id_card_number:action.json.body.id_card_number,
                    id_card_url:action.json.body.id_card_url,
                    id_card_expire_date:action.json.body.id_card_expire_date,
                    bill_number:action.json.body.bill_number,
                    bill_url:action.json.body.bill_url,
                    bill_expire_date:action.json.body.bill_expire_date,
                    driving_license_number:action.json.body.driving_license_number,
                    driving_license_url:action.json.body.driving_license_url,
                    driving_license_expire_date:action.json.body.driving_license_expire_date,
                    address_type:action.json.body.address_type,
                    address_non_cn:action.json.body.address_non_cn,
                    address_cn:action.json.body.address_cn,
                    bank_type:action.json.body.bank_type,
                    bank_us:action.json.body.bank_us,
                    accreditation:action.json.body.accreditation,
                    signature:action.json.body.signature,
                    spouse_signature:action.json.body.spouse_signature,
                    bill_expired:action.json.body.bill_expired,
                    id_card_expired:action.json.body.id_card_expired,
                    passport_expired:action.json.body.passport_expired,
                    driving_license_expired:action.json.body.driving_license_expired,
                    bank_non_us:action.json.body.bank_non_us,



                    date_of_birth:action.json.body.base_info.date_of_birth,
                    country_of_birth:action.json.body.base_info.country_of_birth,
                    nationality:action.json.body.base_info.nationality,
                    industry:action.json.body.base_info.industry,
                    occupation:action.json.body.base_info.occupation,
                    source_of_capital:action.json.body.base_info.source_of_capital,
                    country_of_tax_residency:action.json.body.base_info.country_of_tax_residency,
                    foreign_tax_number:action.json.body.base_info.foreign_tax_number,
                    ssn:action.json.body.base_info.ssn,

                }*/
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
