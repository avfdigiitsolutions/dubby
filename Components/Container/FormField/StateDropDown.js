import { StyleSheet, Picker, Text, View } from 'react-native'
import React, { useState } from 'react'
import { windowWidth, windowHeight } from '../../Utils/Dimensions'
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Telanagana', value: '1' },
    { label: 'Karnataka', value: '2' },
    { label: 'Maharastra', value: '3' },
    { label: 'Delhi', value: '4' },
    { label: 'Punjab', value: '5' },
    { label: 'Goa', value: '6' },
];

const StateDropDown = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    State
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
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select State' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}

            />
        </View>
    )
}

export default StateDropDown

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        padding: 10,
        width: windowWidth / 1.1,
        height: windowHeight / 15,
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