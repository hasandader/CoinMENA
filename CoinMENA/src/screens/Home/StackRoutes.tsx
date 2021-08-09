import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './index';

const Stack = createStackNavigator();

function HomeStack({ }) {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default HomeStack;