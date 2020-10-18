import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageDetails from './pages/orphanage-details';
import OrphanagesMap from './pages/orphanages-map';

import OrphanageData from './pages/create-orphanage/orphanage-data';
import SelectMapPosition from './pages/create-orphanage/select-map-position';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap} />
                <Screen name="OrphanageDetails" component={OrphanageDetails} />
                <Screen name="OrphanageData" component={OrphanageData} />
                <Screen name="SelectMapPosition" component={SelectMapPosition} />
            </Navigator>
        </NavigationContainer>
    );
};
