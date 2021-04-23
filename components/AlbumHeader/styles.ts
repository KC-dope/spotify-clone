import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        height: 200,
        width: 200,
        margin: 15
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorcontainer: {
        flexDirection: 'row',
        margin: 10
    },
    creator:{
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 70,
        width: 200,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    buttonText: {
        color: 'lightgray',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export default styles;