import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CountriesList from './index';

const Stack = createStackNavigator();

function CountriesListStack({ }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CountriesList" component={CountriesList} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default CountriesListStack;