import React, { FC } from "react";
import { View } from 'react-native';
import { primaryColors } from "../../theme/colors";
import Text from '../Text/index';
import styles from './Style';

interface Props {
    title: string;
    info: string;
}

const CountryCard: FC<Props> = (props) => {
    const {
        title,
        info,
    } = props;

    return (
        <View style={styles.container}>
            <Text
                children={title}
                color={primaryColors.grayChateau}
                lineHeight={18}
            />
            <Text
                children={info}
                color={primaryColors.grayChateau}
                lineHeight={18}
            />
        </View>
    )
}

export default CountryCard;