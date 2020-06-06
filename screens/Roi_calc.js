import React from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";
// import for tab view
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]}>
    <Text>Roi_calc</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]} />
);

const Three = () => (
  <View style={[styles.scene, { backgroundColor: "blue" }]} />
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
      // tabBarPosition={}
      swipeEnabled={true}
    // tabBarPosition={"bottom"}
    // sceneContainerStyle={{ paddingVertical: 10 }}
    // style={{ margin: 10, borderBottomColor: "red" }}
    // swipeVelocityImpact={29000}
    // onSwipeEnd={(dun) => alert("jsj")}
    // timingConfig={{ duration: 100000 }}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

// import { StyleSheet, Text, View } from "react-native";

// export default function Roi_calc({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Roi_calc</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
