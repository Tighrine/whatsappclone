import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 30,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end'
    },
    textInput: {
        flex: 1,
        marginLeft: 10,
        height: "100%"
    },
    icons: {
        marginHorizontal: 5
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;