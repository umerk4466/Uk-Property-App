import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* ROI CALCULATOR */}
        <TouchableOpacity
          style={styles.custom_button_container}
          onPress={() => {
            navigation.navigate("Roi");
          }}
        >
          <View style={styles.image_box}>
            <Image
              source={require("../images/roi.png")}
              style={styles.ImageIconStyle}
            />
          </View>
          <View style={styles.text_box}>
            <Text>ROI Calculator</Text>
            <Text style={{ fontSize: 11 }}>Return on investment </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom_line}></View>

        {/* MORTGAGE CALCULATOR */}
        <TouchableOpacity
          style={styles.custom_button_container}
          onPress={() => {
            alert("d");
          }}
        >
          <View style={styles.image_box}>
            <Image
              source={require("../images/mortgage.png")}
              style={styles.ImageIconStyle}
            />
          </View>
          <View style={styles.text_box}>
            <Text>Mortgage Calculator</Text>
            <Text style={{ fontSize: 11 }}>Landers </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom_line}></View>

        {/* AREA CALCULATOR */}
        <TouchableOpacity
          style={styles.custom_button_container}
          onPress={() => {
            navigation.navigate("Area_calc");
          }}
        >
          <View style={styles.image_box}>
            <Image
              source={require("../images/area.png")}
              style={styles.ImageIconStyle}
            />
          </View>
          <View style={styles.text_box}>
            <Text>Area Calculator</Text>
            <Text style={{ fontSize: 11 }}>Price to Sqmetre/Sqfoot</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.bottom_line}></View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  custom_button_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
    height: 85
  },
  ImageIconStyle: {
    height: 48,
    width: 48
  },
  image_box: {
    width: "25%",
    alignItems: "center"
  },
  text_box: {
    marginRight: 10
  },
  bottom_line: {
    width: "75%",
    backgroundColor: "gray",
    alignSelf: "flex-end",
    height: "0.2%"
  }
});

{
  /* <TouchableOpacity
style={styles.custom_button_container}
onPress={() => {
  alert("d");
}}
>
<Image
  source={require("../images/mortgage.png")}
  style={styles.ImageIconStyle}
/>
<Text>Mortgage Calculator</Text>

<Icon
  iconStyle={{ marginRight: 10 }}
  size={30}
  type="ionicon"
  name={"md-arrow-forward"}
/>
</TouchableOpacity> */
}
