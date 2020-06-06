// import React, { useState } from "react";
// import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


// export default function Roi_calc({ navigation }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         <View style={styles.main_row}>
//           <View style={styles.col}>
//             <Text>Content goes here Or new view</Text>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   main_row: {
//     margin: 10
//   },
//   col: {
//     marginVertical: 5
//   }
// });






import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
// import for tab view
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.scene,]}>
    <Text>Roi_calc</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene,]} />
);

const Three = () => (
  <View style={[styles.scene,]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function Roi_calc({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "three", title: "Third" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: Three,
  });

  // tab bar style customization
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="#6d578b"
      inactiveColor="#c2c3c8"
      indicatorStyle={{ backgroundColor: '#000' }}
      style={{ backgroundColor: '#fff' }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
