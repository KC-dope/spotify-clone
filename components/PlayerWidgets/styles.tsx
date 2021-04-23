import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: 'row',
        margin: 2,
        bottom: 48,
        backgroundColor: '#202020',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
    },
    image: {
        height: 75,
        width: 75,
        marginTop: 2,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: '#505050',
        fontSize: 16,
       //marginBottom: 2


    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,

    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        justifyContent: 'space-around',
        //marginLeft: 80
    },

})

export default styles;