import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15
    },
    image:{
        height: 75,
        width: 75,
    },
    rightContainer: {
        justifyContent: 'space-around',
        marginLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    artist: {
        color: 'lightgray',
        fontSize: 20,
    }
})

export default styles;