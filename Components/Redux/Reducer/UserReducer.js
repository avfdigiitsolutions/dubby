import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/UserContants";
 const initialState = {
     userInfoData : null
 }
export const userSigninReducer = (state= initialState, action) =>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return { loading: true};
            case USER_SIGNIN_SUCCESS:
                return { loading: false, userInfoData: action.payload}
            case USER_SIGNIN_FAIL:
                return { loading: false, error: action.payload}
            case USER_SIGNOUT:
                return {userInfoData: action.payload};
            default:
                return state;
    }
}