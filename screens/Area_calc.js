import React, { useState, setState } from "react";
import { CheckBox, Button } from "react-native-elements";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from "react-native";

export default function Area_calc({ navigation }) {
  const [sqm, set_sqm] = useState(true);
  const [sqf, set_sqf] = useState(false);

  const [propery_price, set_propery_price] = useState("");
  const [area, set_area] = useState("");

  const [sqmetre_result, set_sqmetre_result] = useState(0);
  const [sqfoot_result, set_sqfoot_result] = useState(0);

  function set_area_type(area_type) {
    set_area("");
    if (area_type === "sqm") {
      set_sqm(true);
      set_sqf(false);
    } else {
      set_sqm(false);
      set_sqf(true);
    }
  }

  function calculate_area() {
    // get text box data
    if (propery_price === "" || area === "") {
      alert("Fill required fields");
    }
    // get checked button info
    //  convert area
    else if (sqf == true) {
      let sqfoot = propery_price / area;
      sqfoot = sqfoot.toFixed(2);
      set_sqfoot_result(sqfoot);

      let sqmetre = (propery_price / area) * 10.764;
      sqmetre = sqmetre.toFixed(2);
      set_sqmetre_result(sqmetre);
    } else if (sqm == true) {
      let sqfoot = propery_price / area / 10.764;
      sqfoot = sqfoot.toFixed(2);
      set_sqfoot_result(sqfoot);

      let sqmetre = propery_price / area;
      sqmetre = sqmetre.toFixed(2);
      set_sqmetre_result(sqmetre);
    }
  }

  function reset_button() {
    set_propery_price("");
    set_area("");
    set_sqmetre_result(0);
    set_sqfoot_result(0);
    set_sqm(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main_row}>
          <View style={styles.result_container}>
            <View style={styles.inner_div}>
              <Text>Price/Sqmeter</Text>
              <Text>{sqmetre_result}</Text>
            </View>
            <View style={styles.inner_div}>
              <Text>Price/Sqfoot</Text>
              <Text>{sqfoot_result}</Text>
            </View>
          </View>
          <View style={styles.col}>
            <Text>Propery Price</Text>
            <TextInput
              style={styles.text_box_style}
              keyboardType="numeric"
              value={propery_price}
              textAlign={"center"}
              placeholder={"£250000"}
              onChangeText={propery_price => set_propery_price(propery_price)}
            />
          </View>
          <View style={styles.col}>
            <Text>Area type</Text>
            <View style={styles.checkbox_container}>
              <CheckBox
                title="sqmetre"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={sqm}
                onPress={() => set_area_type("sqm")}
              />
              <CheckBox
                title="sqfoot"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={sqf}
                onPress={() => set_area_type("sqf")}
              />
            </View>
            <TextInput
              style={styles.text_box_style}
              keyboardType="numeric"
              value={area}
              textAlign={"center"}
              placeholder={"75m²/ft²"}
              onChangeText={area => set_area(area)}
            />
          </View>
          <View>
            <View>
              <Button
                buttonStyle={{ margin: 10 }}
                title="Reset"
                onPress={() => reset_button()}
              />
              <Button
                buttonStyle={{ margin: 10 }}
                title="Calculate"
                onPress={() => calculate_area()}
              />
            </View>

            {/* <View style={{ flexDirection: "row" }}>
            <Text style={{ margin: 20 }}>
              Price/Sqmeter{"\n"}
              {sqmetre_result}
            </Text>

            <Text style={{ margin: 20 }}>
              Price/Sqfoot{"\n"}
              {sqfoot_result}
            </Text>
          </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: "green",
    alignItems: "center"
    // paddingTop: 10
    // justifyContent: "center"
  },
  main_row: {
    margin: 10
  },
  result_container: {
    // backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 0.5
  },
  inner_div: {
    alignItems: "center",
    marginHorizontal: 10
  },
  col: {
    marginVertical: 10
  },
  checkbox_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  text_box_style: {
    marginVertical: 5,
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 0.5
  }
});
