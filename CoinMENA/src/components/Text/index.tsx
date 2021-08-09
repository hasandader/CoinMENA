import React, { FC } from "react";
import { Text } from 'react-native';
import styles from './Style';

interface Props {
    children: any;
    style: any;
    align: string;
    weight: number | string;
    color: string;
    fontFamily: string;
    fontSize: number;
    mTop: number;
    mRight: number;
    mLeft: number;
    mBottom: number;
    textDecorationLine: string;
    transform: object[];
    lineHeight: number;
    numberOfLines: number;
    ellipsizeMode: any;
}

const TextElement: FC<Props> = (props) => {
    const {
        style,
        align,
        children,
        weight,
        color,
        fontFamily,
        fontSize,
        mTop,
        mRight,
        mLeft,
        mBottom,
        textDecorationLine,
        transform,
        lineHeight,
        numberOfLines,
        ellipsizeMode,
    } = props;

    return (
        <Text
            style={[
                styles.text,
                align && { textAlign: align },
                textDecorationLine && { textDecorationLine: textDecorationLine },
                weight && { fontWeight: weight },
                color && { color: color },
                fontFamily && { fontFamily },
                fontSize && { fontSize },
                mTop && { marginTop: mTop },
                mRight && { marginRight: mRight },
                mLeft && { marginLeft: mLeft },
                mBottom && { marginBottom: mBottom },
                transform && { transform: transform },
                lineHeight && { lineHeight: lineHeight },
                style && style,
            ]}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
        >
            {children}
        </Text>
    )
}

export default TextElement;