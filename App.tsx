import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import PlayerScreen from './screens/PlayerScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0D0126' },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            const iconMap: any = {
              Home: 'home-outline',
              Player: 'play-circle-outline',
              Profile: 'person-outline',
              location: 'location-sharp'
            };
            return <Ionicons name={iconMap[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Player" component={PlayerScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="location" component={ProfileScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
