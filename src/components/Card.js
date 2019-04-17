import React from 'react';
import { View } from 'react-native';


const Card = ({ children }) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle} >
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: 'white',
        shadowOffset: { width: 2, height: 2 },
        elevation: 1,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 10,
        width: '100%'
    }
};

export default Card;
