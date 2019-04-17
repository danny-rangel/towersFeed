import React from 'react';
import { Text, View, StatusBar } from 'react-native';

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
        <StatusBar barStyle="light-content" />
            <Text style={textStyle} >{headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '14%',
        paddingTop: 0,
        margin: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
        letterSpacing: -2
    }
};

export default Header;
