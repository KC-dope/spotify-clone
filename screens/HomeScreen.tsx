import * as React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity,RefreshControl } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';

import Dimensions from './../constants/Layout';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
          <Entypo name="back-in-time" size={26} color="white" />
          <Feather name="settings" size={26} color="white" />
        </View>
        <View></View>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/1.png')} />
          <Text style={styles.artist}> Zack Tabudlo</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/2.png')} />
          <Text style={styles.artist}> Hugot</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/3.png')} />
          <Text style={styles.artist}> TikTok Dance 2021 🔥 </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/4.png')} />
          <Text style={styles.artist}> 2010 pinoy alternative music</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/5.png')} />
          <Text style={styles.artist}> Trending Tracks</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.playlist}>
          <Image style={styles.image} source={require('./../assets/images/playlist/6.png')} />
          <Text style={styles.artist}> Daily Mix 1</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View>
        {albumCategories.map(item =>
          <AlbumCategory albums={item.albums} key={item.id} title={item.title} />)}
      </View>
      <View>
          <Text style={styles.headerText}></Text>
          <Entypo name="back-in-time" size={26} color="black" />
          <Entypo name="google-play" size={26} color="black" />
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 32,
    marginTop: 80,
    width: 480,
    position: 'relative',
    top: 10,
    backgroundColor: 'transparent'
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    letterSpacing: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    fontWeight: "600",
  },
  scrollView: {
    marginHorizontal: 0,
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
    backgroundColor: '#212121',
    borderRadius: 4
  },
});
