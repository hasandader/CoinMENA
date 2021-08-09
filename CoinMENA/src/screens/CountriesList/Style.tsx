import { StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../../lib/utility";
import { primaryColors } from "../../theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.gallery,
        marginTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    rightBtn: {
        width: '33.33%',
        alignItems: 'flex-end'
    },
    dropDown: {
        backgroundColor: primaryColors.white,
        height: 100,
        width: 120,
        borderRadius: 5,
        position: 'absolute',
        zIndex: 1,
        right: 10,
        top: deviceHeight() < 812 ? '5%' : '10%',
        padding: 10
    },
    card: {
        borderRadius: 10,
        backgroundColor: primaryColors.white,
        width: deviceWidth() * 0.9,
        alignSelf: 'center',
        marginTop: 15,
        paddingTop: 15,
        paddingLeft: 20,
        paddingBottom: 15,
        paddingRight: 20
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
    backBtnWraper: {
        height: 20,
        width: '33.33%',
        paddingLeft: 20
    },
    backIcon: {
        width: 18,
        height: 20,
        tintColor: primaryColors.tundora
    },
    input: {
        backgroundColor: primaryColors.white,
        height: 40,
        width: deviceWidth() * 0.9,
        alignSelf: 'center',
        borderRadius: 8,
        paddingLeft: 10,
        marginTop: 15,
        marginBottom: 5
    }
})