import React from "react";
// IMPORT Home screen pages stack
import HomeStack from "./screens/HomeStack";
// Import Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          options={{ swipeEnabled: false }}
          name="DrawerSatck"
          component={HomeStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
