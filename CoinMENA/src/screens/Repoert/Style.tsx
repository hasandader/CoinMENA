import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.gallery,
        marginTop: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
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
    dropDown: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10
    },
    wraper: {
        backgroundColor: primaryColors.white,
        height: 35,
        width: deviceWidth() * 0.5,
        marginTop: 100,
        alignSelf: 'center',
        borderRadius: 5
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
    typesList: {
        backgroundColor: primaryColors.white,
        height: 100,
        width: '50%',
        borderRadius: 5,
        padding: 10,
        alignSelf: 'center',
        marginTop: 3
    },
    submit: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: deviceHeight() * 0.45,
        backgroundColor: primaryColors.royalBlue,
        width: '40%',
        height: 40,
        borderRadius: 5
    }
})