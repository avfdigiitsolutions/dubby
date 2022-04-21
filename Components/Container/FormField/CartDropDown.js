import { StyleSheet, Picker, Text, View } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../../Utils/Dimensions'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartDropDown = ({lableValue, onChangeText, data, label}) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (lableValue || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    {label}
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? ''+ " "+ label : ''}
                // searchPlaceholder="Search..."
                value={lableValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    onChangeText(item.value)
                    setIsFocus(false);}}

            />
        </View>
    )
}

export default CartDropDown

const styles = StyleSheet.create({

    container: {
        // backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        padding: 10,
        width: 100,
        height: 50,
        fontSize: 16,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#dcdcdc'
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})