import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View } from 'react-native';
import axios from 'axios';
import SongDetail from './SongDetail';

const SongList = () => {
    const { viewStyle, textStyle } = styles;
    const [songs, setSongs] = useState(null);

    const fetchSongs = async () => {
        const res = await axios.get('http://towersmusic.io/api/posts');
        setSongs(res.data);
        console.log(res.data);
    };

    const renderSongs = () => {
        return songs.map(song => <SongDetail key={song._id} song={song} />);
    };


    useEffect(() => {
        fetchSongs();
    }, []);

    if (!songs) {
        return (
            <View style={viewStyle} >
                <Text style={textStyle} >Spinner</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={viewStyle} >
                {renderSongs()}
            </View>
        </ScrollView>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        margin: 0
    }
};

export default SongList;
