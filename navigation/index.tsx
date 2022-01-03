/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, TouchableWithoutFeedback, Image, View, Text } from 'react-native';
import styles from '../components/ChatListItem/style';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactScreen from '../screens/ContatctScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();


  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors[colorScheme].tint
      },
      headerTintColor: Colors[colorScheme].background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerShadowVisible: false
    }}>
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              width: 60,
              justifyContent: 'space-between',
              marginRight: 10,
              backgroundColor: Colors[colorScheme].tint
            }}>
              <Octicons name='search' size={24} style={{ backgroundColor: Colors[colorScheme].tint, color: 'white' }} />
              <MaterialCommunityIcons name='dots-vertical' size={24} style={{ backgroundColor: Colors[colorScheme].tint, color: 'white' }} />
            </View>
          )
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route?.params?.otherUser?.name,
          headerRight,
        })}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Contacts" component={ContactScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const headerRight = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={{
      flexDirection: 'row',
      width: 100,
      justifyContent: 'space-between',
      marginRight: 10,
      backgroundColor: Colors[colorScheme].tint
    }}>
      <FontAwesome5 name='video' style={{
        color: 'white',
        fontSize: 18,
        backgroundColor: Colors[colorScheme].tint
      }} />
      <MaterialIcons name='call' style={{
        color: 'white',
        fontSize: 20,
        backgroundColor: Colors[colorScheme].tint
      }} />
      <MaterialCommunityIcons name='dots-vertical' style={{
        color: 'white',
        fontSize: 20,
        backgroundColor: Colors[colorScheme].tint
      }} />
    </View>
  )
}

const headerTitleCustome = ( route: RouteProp<RootStackParamList, "ChatRoom"> ) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image
            source={{
              uri: route?.params?.otherUser?.imageUri,
            }} style={styles.avatar} />
          <Text>{route?.params?.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}