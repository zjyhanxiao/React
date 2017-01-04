import {combineReducers} from 'redux'
import * as types from '../actions/ActionTypes'
const baseState={
    pages:{
        first:true,
        second:false,
        third:false,
        four:false,
        five:false,
        current:'first'
    }
}
const getsProfile = (state = {baseState}, action) => {
    switch (action.type) {
        case types.GET_PROFILE_SUCCESS:
            return Object.assign({}, state, {
                /*first_name: action.json.body.first_name,
                 email: action.json.body.email,
                 date_of_birth: action.json.body.date_of_birth,
                 passport_photo: null*/
                base_profile: action.json.body,
                pages:state.pages
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
        default:
            return state
    }
};
const rootReducer = combineReducers({
    getsProfile
});
export default rootReducer