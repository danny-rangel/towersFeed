import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import moment from 'moment';

const SongDetail = ({ song }) => {
    const { headerContentStyle, UsernameTextStyle, dateTextStyle, imageStyle } = styles;
    const { albumArt, username, date, songName, artistName, caption } = song;
    return (
        <Card>
            <CardSection>
                <View style={headerContentStyle} >
                    <Text style={UsernameTextStyle} >{username}</Text>
                </View>
                <View style={headerContentStyle} >
                    <Text style={dateTextStyle} >{moment(date).fromNow()}</Text>
                </View>
            </CardSection>
            <CardSection>
                <View >
                    <Image 
                        style={imageStyle}
                        source={{ uri: albumArt }} 
                    />
                </View>
            </CardSection>
            <CardSection>
                <View style={headerContentStyle} >
                    <Text style={UsernameTextStyle} >{songName}</Text>
                </View>
                <View style={headerContentStyle} >
                    <Text style={dateTextStyle} >{artistName}</Text>
                </View>
                <View style={headerContentStyle} >
                    <Text style={UsernameTextStyle} >{caption}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    imageContentStyle: {
        flexDirection: 'row'
    },
    UsernameTextStyle: {
        color: 'black',
        fontSize: 20
    },
    dateTextStyle: {
        color: 'black',
        fontSize: 12
    },
    imageStyle: {
        height: 300
    }
};


export default SongDetail;
