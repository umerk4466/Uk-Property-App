import React from "react";
// IMPORT Home screen pages stack
import HomeStack from "./screens/HomeStack";
// Import Custom styles(Themese of the app)
import { CustomTheme, StatusBarColor } from "./styles/global_styles";
// import status bar to add color
import { StatusBar } from "react-native";
// Import Navigators
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// set the status bar color
StatusBar.setBackgroundColor(StatusBarColor);
StatusBar.setBarStyle("light-content", true);
// drawer navigation
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
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
