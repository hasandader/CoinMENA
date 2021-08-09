import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from '../screens/Home/StackRoutes';
import CountriesListStack from '../screens/CountriesList/StackRoutes';
import ReportStack from '../screens/Repoert/StackRoutes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AppStack">
                <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
                <Stack.Screen name="CountriesListStack" component={CountriesListStack} options={{ headerShown: false }} />
                <Stack.Screen name="ReportStack" component={ReportStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};