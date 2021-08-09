import React from "react";
import { createStackNavigator } from '@react-navigation/stack'; import Report from "./index";

const Stack = createStackNavigator();

function ReportStack({ }) {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Report" component={Report} options={{ headerShown: false }} />
        </Stack.Navigator >
    )
}

export default ReportStack;