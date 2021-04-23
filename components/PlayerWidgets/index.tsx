import React from 'react';
import { Text, Image, View } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";

import styles from './styles';
const song = {
    id: '1',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/41iNu65utAL._SY445_SX342_QL70_ML2_.jpg',
    title: 'Pahina (Feat. Gloc-9, JP-Bacallan)',
    artist: 'PriceTagg',

}
const PlayerWidget = () => {
    return (
        
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons name="monitor-speaker" size={20} color="white" />
                    <FontAwesome5 name="heart" size={20} color="white" />
                    <FontAwesome name="play" size={20} color="white" />
                </View>
            </View>
        </View>
    )
}
export default PlayerWidget;