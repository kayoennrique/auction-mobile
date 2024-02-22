import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import ListAuctions from '../screens/AuctionList';
import Auction from '../screens/Auction';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="ListAuctions"
          component={ListAuctions}
          options={{
            title: 'Lista de Leilões',
          }}
        />
        <Stack.Screen 
          name="Leilao"
          component={Auction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}