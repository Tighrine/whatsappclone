import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RootTabParamList } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import ChatScreen from "../screens/ChatScreen";
import { Fontisto } from "@expo/vector-icons";

const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarShowIcon: true
            }}>
            <MainTab.Screen
                name='Camera'
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => (<Fontisto name="camera" color={color} size={20} />)
                }}
                component={TabOneScreen}
            />
            <MainTab.Screen
                name='Chats'
                component={ChatScreen}
            />
            <MainTab.Screen
                name='Status'
                component={ChatScreen}
            />
            <MainTab.Screen
                name='Calls'
                component={ChatScreen}
            />
        </MainTab.Navigator>
    );
}