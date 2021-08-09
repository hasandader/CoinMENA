import { Dimensions } from 'react-native';

const getWindow = () => Dimensions.get('window');

export const deviceHeight = () => {
    return getWindow().height;
};

export const deviceWidth = () => {
    return getWindow().width;
};
