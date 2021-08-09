import React, { FC, useState, useEffect } from "react";
import { View, TouchableOpacity, Image, SafeAreaView, Modal, FlatList, Alert } from 'react-native';
import Text from "../../components/Text";
import { back, down } from "../../images";
import { primaryColors } from "../../theme/colors";
import styles from './Style';
import { useStatisticsStore } from '../../stores/statisticsStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Report: FC = (props) => {
    const types = ['Recovered', 'Death', 'Confirmed'];

    const [isCountryModal, setIsCountryModal] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<object>({});
    const [selectedType, setSelectedType] = useState<string>('');
    const [isDropdown, setIsDropdown] = useState<boolean>(false);

    const [countries, fetchCountries] = useStatisticsStore(state => [
        state.countries,
        state.fetchCountries
    ]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem(selectedCountry.ISO2);

            if (value !== null) {

                let data = JSON.parse(value);
                if (data.hasOwnProperty(selectedType)) {

                    data[selectedType] = data[selectedType] + 1
                    const report = JSON.stringify(data);

                    await AsyncStorage.setItem(selectedCountry.ISO2, report);

                } else {
                    data[selectedType] = 1;
                    const report = JSON.stringify(data);
                    await AsyncStorage.setItem(selectedCountry.ISO2, report);
                }

            } else {
                let data = selectedCountry;
                data[selectedType] = 1;
                const report = JSON.stringify(data);
                await AsyncStorage.setItem(selectedCountry.ISO2, report);
            }

            Alert.alert('Your form was submitted successfully!')

        } catch (e) {
            console.log('e: ', e)
        }
    }

    const isActive = () => Object.keys(selectedCountry).length == 0 || selectedType == ''

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtnWraper} onPress={() => props.navigation.pop()}>
                    <Image source={back} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text
                    children='Report Case'
                    fontSize={18}
                    align='center'
                    weight='bold'
                    color={primaryColors.tundora}
                />
                <View style={{ width: '33.33%' }} />
            </View>

            <View style={[styles.wraper, styles.shadow]}>
                <TouchableOpacity style={styles.dropDown} onPress={() => setIsCountryModal(!isCountryModal)} >
                    <Text children={selectedCountry.Country || 'Select a Country'} />
                    <Image source={down} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
            </View>

            <View style={[styles.wraper, styles.shadow, { marginTop: 20 }]}>
                <TouchableOpacity style={styles.dropDown} onPress={() => setIsDropdown(!isDropdown)}>
                    <Text children={selectedType || 'Select Type of Case '} />
                    <Image source={down} style={styles.backIcon} resizeMode='contain' />
                </TouchableOpacity>
            </View>

            {
                isDropdown && <View style={[styles.typesList, styles.shadow]}>
                    {
                        types.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => {
                                setSelectedType(item);
                                setIsDropdown(!isDropdown)
                            }} >
                                <Text children={item} />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }

            <TouchableOpacity
                style={[styles.submit,
                isActive() && { backgroundColor: '#71A0EA' }]}
                onPress={() => getData()}
                disabled={isActive()}
            >
                <Text
                    children='Submit'
                    fontSize={18}
                    color={primaryColors.white}
                />
            </TouchableOpacity>

            <Modal visible={isCountryModal}>
                <SafeAreaView>
                    <TouchableOpacity style={[styles.backBtnWraper, { marginBottom: 20, marginTop: 10 }]} onPress={() => setIsCountryModal(!isCountryModal)}>
                        <Image source={back} style={styles.backIcon} resizeMode='contain' />
                    </TouchableOpacity>
                    <FlatList
                        style={{ paddingLeft: 20 }}
                        contentContainerStyle={{ paddingBottom: 80 }}
                        data={countries && countries}
                        keyExtractor={(item) => item.ISO2}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => {
                                setSelectedCountry(item);
                                setIsCountryModal(!isCountryModal)
                            }}>
                                <Text children={item.Country}
                                    fontSize={16}
                                    mBottom={8}
                                />
                            </TouchableOpacity>
                        )}
                    />
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}

export default Report;