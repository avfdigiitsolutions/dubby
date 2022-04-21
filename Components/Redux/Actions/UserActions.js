import Axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from '../Constants/UserContants';

export const signIn = (email, password) => async (dispatch) => {
    const token = email + password;
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
    try {
        // const { data } = await Axios.post('/api/user/signIn', { email, password });

        dispatch({ type: USER_SIGNIN_SUCCESS, payload: token });
        await AsyncStorage.setItem('userInfo', token);
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}
export const logout = () => async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({ type: USER_SIGNOUT });

}
