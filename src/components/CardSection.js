import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle} >
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: 'white',
        position: 'relative'
    }
};

export default CardSection;