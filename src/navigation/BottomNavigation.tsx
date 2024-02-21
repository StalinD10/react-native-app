import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import PhotosScreen from '../screens/PhotosScreen';
import IconsScreen from '../screens/IconsScreen';
import ProfileDevScreen from '../screens/ProfileDevScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import PDFScreen from '../screens/PDFScreen';

const Tab = createMaterialBottomTabNavigator();

function BottombNavigation() {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: 'white',

            }}
            activeColor="gray"

        >
            <Tab.Screen name="Profile"
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="face-man-profile" size={24} color="#403F3F" />
                    ),
                }}
                component={ProfileDevScreen} />
            <Tab.Screen name="API"
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="API" size={24} color="#403F3F" />
                    )
                }}
                component={PhotosScreen}
            />
            <Tab.Screen name="Icons"
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="icons" size={24} color="black" />
                    )
                }}
                component={IconsScreen} />

            <Tab.Screen name="PDF"
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="file-pdf" size={24} color="black" />
                    )
                }}
                component={PDFScreen} />
        </Tab.Navigator>
    )
}

export default BottombNavigation
