import { StyleSheet } from "react-native";
import { deviceWidth } from "../../lib/utility";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.gallery,
        marginTop: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    card: {
        backgroundColor: primaryColors.white,
        width: deviceWidth() * 0.9,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingRight: 20,
        marginBottom: 10
    },
    presentationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 330
    }
})