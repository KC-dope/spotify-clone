import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import albumDetails from '../data/albumDetails';

const AlbumScreen = () => {

    const route = useRoute();
    useEffect(() => {
        console.log(route);
    }, [])

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Album</Text>
                <Entypo name="heart-outlined" size={24} color="white" />
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
            <View>
                <FlatList
                    data={albumDetails.songs}
                    renderItem={({ item }) => <SongListItem song={item} />}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
                />
            </View>
        </View>
    );
}
export default AlbumScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 78
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 1,
        width: 480
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        letterSpacing: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: 400
    },
});