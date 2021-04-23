import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Dimensions from './../constants/Layout';


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/1.png')} />
        <Text style={styles.artist}> Zack Tabudlo</Text>
      </View>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/2.png')} />
        <Text style={styles.artist}> Hugot</Text>
      </View>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/3.png')} />
        <Text style={styles.artist}> TikTok Dance 2021 🔥 </Text>
      </View>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/4.png')} />
        <Text style={styles.artist}> 2010 pinoy alternative music</Text>
      </View>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/5.png')} />
        <Text style={styles.artist}> Trending Tracks</Text>
      </View>
      <View style={styles.playlist}>
        <Image style={styles.image} source={require('./../assets/images/playlist/6.png')} />
        <Text style={styles.artist}> Daily Mix 1</Text>
      </View>
    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  image: {
    height: 50,
    width: 50,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',


  },
  artist: {
    color: 'white',
    fontSize: 14,
    flexGrow: 1,
    fontWeight: 'bold',


  },
  playlist: {
    height: 48,
    width: (Dimensions.window.width / 2) - 24,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 8,
    backgroundColor: 'red',
    borderRadius: 4
  }

});
