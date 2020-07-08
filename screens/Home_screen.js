import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { globalstyles } from "../styles/global_styles";
import { CustomTouchableButton } from "../components/custom-components";

export default function Home_screen({ navigation }) {
  return (
    <SafeAreaView style={globalstyles.SafeAreaViewContainer}>
      <ScrollView>
        {/* ROI CALCULATOR */}
        <CustomTouchableButton
          onPress={() => navigation.navigate("ROI Calculator")}
          imgSource={require("../images/roi.png")}
          title="ROI Calculator"
          description="Return on investment"
        ></CustomTouchableButton>
        {/* Net Rental Yield Calculator */}
        <CustomTouchableButton
          onPress={() => navigation.navigate("Net Rental Yield")}
          imgSource={require("../images/net_rental_yield.png")}
          title="Net Rental Yield"
          description="Investment Property Calculator"
        ></CustomTouchableButton>
        {/* MORTGAGE CALCULATOR */}
        <CustomTouchableButton
          onPress={() => alert("nothing added yet")}
          imgSource={require("../images/mortgage.png")}
          title="Mortgage Calculator"
          description="How much will you pay a month"
        ></CustomTouchableButton>
        {/* AREA CALCULATOR */}
        <CustomTouchableButton
          onPress={() => navigation.navigate("Price Per Area")}
          imgSource={require("../images/area.png")}
          title="Area Calculator"
          description="Price to Sqmetre/Sqfoot"
        ></CustomTouchableButton>
      </ScrollView>
    </SafeAreaView>
  );
}
