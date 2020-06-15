import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Button } from "react-native-elements";
// import screens
import Home_screen from "./Home_screen";
import Roi_screen from "./Roi_screen";

// import stack Navigator
import { createStackNavigator } from "@react-navigation/stack";
import Area_calc from "./Area_calc";
const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home_screen}
        options={{
          headerLeft: () => (
            <View style={styles.margnLeft}>
              <Button
                icon={
                  <Icon
                    size={30}
                    type="ionicon"
                    name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                  />
                }
                title=""
                onPress={() => navigation.toggleDrawer()}
                type="clear"
              />
            </View>
          )
        }}
      />
      <Stack.Screen name="ROI Calculator" component={Roi_screen} />
      <Stack.Screen name="Price Per Area" component={Area_calc} />
    </Stack.Navigator>
  );
}

// styles
const styles = StyleSheet.create({
  margnLeft: {
    marginLeft: 12
  }
});
