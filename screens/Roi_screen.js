import React from "react";
import { View, Dimensions } from "react-native";
// import for tab view
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
// import calculator pages/components
import Basic_roi_tab from "./Basic_roi_tab"

// tabs imported
const BasicRoiRoute = () => (
  <Basic_roi_tab />
);

const AdvanceRoiRoute = () => (
  <View />
);
;

// tabview setting
const initialLayout = { width: Dimensions.get("window").width };

export default function Roi_screen({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 1, title: "Basic" },
    { key: 2, title: "Advance" },
  ]);

  const renderScene = SceneMap({
    1: BasicRoiRoute,
    2: AdvanceRoiRoute,
  });

  // tab bar style customization
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="black"
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
