import React, { FC, useEffect, } from "react";
import { View, SafeAreaView, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import styles from './Style';
import Text from '../../components/Text/index';
import { primaryColors } from "../../theme/colors";
import { useStatisticsStore } from '../../stores/statisticsStore';
import DataPresentation from "../../components/DataPresentation";

const Home: FC = (props) => {
    const colors = [primaryColors.royalBlue, primaryColors.electricViolet, primaryColors.shamrock];

    const [totals, totalsSum, fetchTotal] = useStatisticsStore(state => [
        state.totals,
        state.totalsSum,
        state.fetchTotal,
    ]);

    useEffect(() => {
        fetchTotal();
    }, [fetchTotal]);

    const [topFive, fetchSummary] = useStatisticsStore(state => [
        state.topFive,
        state.fetchSummary,
    ]);

    useEffect(() => {
        fetchSummary();
    }, [fetchSummary]);


    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    children='Covid-19'
                    fontSize={18}
                    mLeft={20}
                    weight='bold'
                    color={primaryColors.tundora}
                />

                <TouchableOpacity onPress={() => { props.navigation.navigate('ReportStack') }}>
                    <Text children='Report case' mRight={20} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={[styles.card, styles.shadow]}>
                    <Text
                        children='Top 5 countries in Covid-19 cases'
                        fontSize={15}
                        weight='bold'
                        color={primaryColors.grayChateau}
                        mBottom={10}
                    />
                    {
                        topFive.map((item) => (
                            <Text
                                children={item.Country}
                                weight='500'
                                color={primaryColors.approxTundora}
                            />
                        ))
                    }
                    <Pressable onPress={() => { props.navigation.navigate('CountriesListStack') }}>
                        <Text children='See more' align='right' fontSize={11} color={primaryColors.grayChateau} />
                    </Pressable>
                </View>
                <View
                    style={[styles.card, styles.shadow, { height: 400 }]}>
                    <Text
                        children='GLOBAL SITUATION'
                        fontSize={15}
                        weight='bold'
                        color={primaryColors.grayChateau}
                        mBottom={10}
                    />
                    {
                        Object.keys(totals).length > 0 &&
                        <View
                            style={styles.presentationContainer}>
                            {
                                Object.keys(totals).map((key, index) => {
                                    return (
                                        <DataPresentation
                                            quantity={totals[key]}
                                            columnColor={colors[index]}
                                            title={key}
                                            height={264 * (totals[key] / totalsSum)}
                                        />
                                    )
                                })
                            }
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Home;