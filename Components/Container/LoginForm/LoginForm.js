import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import InputFields from '../FormField/InputFields';
import FormButton from '../CustomButtons/FormButton';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../Redux/Actions/UserActions';
import LoginValidate from '../Validation/LoginValidate';

const LoginForm = ({ navigation }) => {
    const [value, setValue] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    // const { signIn } = useContext(AuthContext);

    const handleChange = (inputName, val) => {
        setValue({
            ...value,
            [inputName]: val
        })
    }

    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state);
    const { loading, error, userInfoData } = userInfo;

    const signin = () => {
        setErrors(LoginValidate(value));
        if (!Object.keys(errors).length > 0 && value.email !== "" && value.password !== "") {
            dispatch(signIn(value.email, value.password));
            //  console.log("Executed")
        } else {
            return alert("Something Wrong");
        }
    }

    return (
        <View>
            <View>
                <InputFields
                    lableValue={value.email}
                    onChangeText={(val) => handleChange('email', val)}
                    placeholderText="Email/Mobile"
                    iconType="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {
                    errors.email ? <Text style={{ color: 'red', marginBottom: 5 }} > {errors.email} </Text> : null
                }
            </View>
            <View>
                <InputFields
                    lableValue={value.password}
                    onChangeText={(val) => handleChange('password', val)}
                    placeholderText="Password"
                    iconType="lock"
                />
                {
                    errors.password ? <Text style={{ color: 'red', marginBottom: 5 }} > {errors.password} </Text> : null
                }
            </View>
            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.navButtonText} > Forgot Password? </Text>
            </TouchableOpacity>
            <View>
                <FormButton
                    buttonTitle="Sign In"
                    onPress={() => signin()}
                />
            </View>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    forgotButton: {
        marginVertical: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: -3
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    }
})