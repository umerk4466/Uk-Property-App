import React, { useState } from "react";
import { CheckBox, Button } from "react-native-elements";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

export default function Area_calc({ navigation }) {
  const [sqm, set_sqm] = useState(true);
  const [sqf, set_sqf] = useState(false);

  const [propery_price, set_propery_price] = useState("");
  const [area, set_area] = useState("");

  const [sqmetre_result, set_sqmetre_result] = useState(0);
  const [sqfoot_result, set_sqfoot_result] = useState(0);

  let area_focus = React.createRef();

  function set_area_type(area_type) {
    set_area("");
    if (area_type === "sqm") {
      set_sqm(true);
      set_sqf(false);
    } else {
      set_sqm(false);
      set_sqf(true);
    }
    area_focus.current.focus();
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
    set_sqf(false);
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
              ref={area_focus}
              style={styles.text_box_style}
              keyboardType="numeric"
              value={area}
              textAlign={"center"}
              placeholder={"75m²/ft²"}
              onChangeText={area => set_area(area)}
            />
          </View>

          <View style={styles.col}>
            <View style={styles.button_container}>
              <Button
                buttonStyle={{ marginBottom: 10 }}
                title="Calculate Pirce"
                onPress={() => calculate_area()}
              />
              <Button title="Reset All" onPress={() => reset_button()} />
            </View>
          </View>
          <View style={styles.col}>
            <Text style={styles.bottom_text}>
              If your Propery Price is {propery_price}£ and the Area of your
              property is {area}. Then the Price per Sqmeter is {sqmetre_result}
              . And Price per Sqfoot is {sqfoot_result}.{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  main_row: {
    margin: 10
  },
  result_container: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderWidth: 0.5,
    flexWrap: "wrap"
  },
  inner_div: {
    alignItems: "center",
    marginVertical: 10
  },
  col: {
    marginTop: 10
  },
  checkbox_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button_container: {
    // borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 10
  },
  text_box_style: {
    marginVertical: 5,
    height: 35,
    maxWidth: "100%",
    borderWidth: 0.5,
    borderRadius: 3
  },
  bottom_text: {
    // fontSize: 13,
    fontStyle: "italic"
  }
});
