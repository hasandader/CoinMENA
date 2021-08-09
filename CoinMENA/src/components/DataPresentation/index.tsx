import React, { FC } from "react";
import { View } from 'react-native';
import styles from './Style';
import Text from '../Text/index';
import { primaryColors } from "../../theme/colors";

interface Props {
    quantity: any;
    height: number | string,
    title: string,
    columnColor: string;
};

const DataPresentation: FC<Props> = (props) => {
    const {
        quantity,
        height,
        columnColor,
        title,
    } = props;
    return (
        <View style={styles.container}>
            <Text children={quantity} color={primaryColors.approxTundora} fontSize={11} />
            <View style={[styles.presentationColumn, { height: height, backgroundColor: columnColor }]} />
            <Text children={title} color={primaryColors.approxTundora} fontSize={11} />
        </View>
    )
}

export default DataPresentation;