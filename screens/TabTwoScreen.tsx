import * as React from 'react';
import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';


export default function TabTwoScreen() {

  const [text, onChangeText] = React.useState("Artist,Songs, or podcasts");

  return (

    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
          <Ionicons name="search" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
    width: 460,
    paddingTop: 48

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'white',
    borderColor: 'white',
    justifyContent: 'space-between'
  },
  scrollView: {
    marginHorizontal : 1,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    letterSpacing: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: 400,
    fontWeight: "600"
  }

});
