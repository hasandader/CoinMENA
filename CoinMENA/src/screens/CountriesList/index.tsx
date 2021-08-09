import React, { FC, useState } from "react";
import { View, SafeAreaView, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Text from '../../components/Text/index';
import { primaryColors } from "../../theme/colors";
import styles from './Style';
import { back } from '../../images/index';
import { useStatisticsStore } from '../../stores/statisticsStore';
import CountryCard from "../../components/CountryCard";
import { sort } from '../../lib/helpers';

const CountriesList: FC = (props) => {

    const sortBy = ['TotalRecovered', 'TotalDeaths', 'TotalConfirmed'];

    const [summary] = useStatisticsStore(state => [
        state.summary
    ]);

    const [countries, setCountries] = useState<object[]>(summary.data.Countries);
    const [isDropdown, setIsDropdown] = useState<boolean>(false);
    const [initial, setInitial] = useState<object[]>(summary.data.Countries);

    function sorting(item) {
        var sorted = sort(summary.data.Countries, item)
        setCountries(sorted)
        setIsDropdown(!isDropdown)
    }

    function filter(searchedText: string) {
        const newData = initial.filter((data) => {
            const country = data.Country.toLowerCase()
            const text = searchedText.toString().toLowerCase()
            return country.indexOf(text) > -1
        })
        setCountries(newData);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtnWraper} onPress={() => props.navigation.pop()}>
                    <Image source={back} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text
                    children='Countries List'
                    fontSize={18} align='center'
                    weight='bold' color={primaryColors.tundora}
                />
                <TouchableOpacity style={styles.rightBtn} onPress={() => setIsDropdown(!isDropdown)} >
                    <Text children='sort by' />
                </TouchableOpacity>
            </View>
            {
                isDropdown && <View style={[styles.dropDown, styles.shadow]}>
                    {
                        sortBy.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => sorting(item)} >
                                <Text children={item} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }

            <TextInput
                placeholder='Search...'
                style={[styles.input, styles.shadow]}
                onChangeText={(txt) => filter(txt)}
            />

            <FlatList
                data={countries}
                keyExtractor={(item) => item.ID}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View
                        style={[styles.card, styles.shadow]}>
                        <Text
                            children={item.Country}
                            fontSize={16} weight={'bold'}
                            color={primaryColors.scorpion} mBottom={5} />

                        <CountryCard title='Recovered: ' info={item.TotalRecovered} />
                        <CountryCard title='Deaths: ' info={item.TotalDeaths} />
                        <CountryCard title='Active Cases: ' info={item.TotalConfirmed} />
                    </View>
                )}
            />

        </SafeAreaView>
    )
}

export default CountriesList;