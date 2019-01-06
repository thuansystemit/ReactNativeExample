import React from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import { colors } from './theme'

import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: 'royalblue',
    }
});

const hellos = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
});

const Tabs = createAppContainer(hellos); 

export default Tabs