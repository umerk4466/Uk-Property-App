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
// textinput imported for money field.
import { TextInputMask } from "react-native-masked-text";

export default function Area_calc({ navigation }) {
  const [sqm, set_sqm] = useState(true);
  const [sqf, set_sqf] = useState(false);

  const [propery_price, set_propery_price] = useState("");
  const [area, set_area] = useState("");

  const [sqmetre_result, set_sqmetre_result] = useState("£" + 0);
  const [sqfoot_result, set_sqfoot_result] = useState("£" + 0);

  const [is_text_input_empty, set_is_text_input_empty] = useState(false);

  const [bottom_text, set_bottom_text] = useState(
    "To get price/sqmeter or price/sqfoot enter property price and Area in above fields."
  );

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
  function add_commas(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function calculate_area() {
    // get text input data and validate data
    if (
      isNaN(propery_price) ||
      propery_price === "" ||
      isNaN(area) ||
      area === ""
    ) {
      alert("Please fill all required fields");
      set_is_text_input_empty(true);
    } else if (
      propery_price == 0 ||
      area == 0 ||
      propery_price < 0 ||
      area < 0
    ) {
      alert("Please enter valid number negative or 0 value are not valid");
      set_is_text_input_empty(true);
    }
    // get checked button info
    //  convert area
    else if (sqf == true) {
      let sqfoot = propery_price / area;
      sqfoot = sqfoot.toFixed(2);
      set_sqfoot_result("£" + add_commas(sqfoot));

      let sqmetre = (propery_price / area) * 10.764;
      sqmetre = sqmetre.toFixed(2);
      set_sqmetre_result("£" + add_commas(sqmetre));
      // set screen's bottom text
      set_bottom_text(
        "If your Propery's Price is £" +
          add_commas(propery_price) +
          " and the Area of your property is " +
          area +
          "/ft². Then the Price per Sqmeter is £" +
          add_commas(sqmetre) +
          ". And Price per Sqfoot is £" +
          add_commas(sqfoot) +
          "."
      );
      set_is_text_input_empty(false);
    } else if (sqm == true) {
      let sqfoot = propery_price / area / 10.764;
      sqfoot = sqfoot.toFixed(2);
      set_sqfoot_result("£" + add_commas(sqfoot));

      let sqmetre = propery_price / area;
      sqmetre = sqmetre.toFixed(2);
      set_sqmetre_result("£" + add_commas(sqmetre));

      // set screen's bottom text
      set_bottom_text(
        "If your Propery's Price is £" +
          add_commas(propery_price) +
          " and the Area of your property is " +
          area +
          "/m². Then the Price per Sqmeter is £" +
          add_commas(sqmetre) +
          ". And Price per Sqfoot is £" +
          add_commas(sqfoot) +
          "."
      );
      set_is_text_input_empty(false);
    }
  }

  function reset_button() {
    set_propery_price("");
    set_area("");
    set_sqmetre_result("£" + 0);
    set_sqfoot_result("£" + 0);
    set_sqm(true);
    set_sqf(false);
    set_bottom_text(
      "To get price/sqmeter or price/sqfoot enter property price and Area in above fields."
    );
    set_is_text_input_empty(false);
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
            <TextInputMask
              type={"money"}
              options={{
                precision: 0,
                separator: ".",
                delimiter: ",",
                unit: "£",
                suffixUnit: ""
              }}
              style={
                is_text_input_empty
                  ? styles.empty_text_input_style
                  : styles.text_input_style
              }
              value={propery_price}
              textAlign={"center"}
              hintText="Some placeholder"
              includeRawValueInChangeText={true}
              placeholder={"£250,000"}
              onChangeText={(maskedText, rawText) => set_propery_price(rawText)}
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
              style={
                is_text_input_empty
                  ? styles.empty_text_input_style
                  : styles.text_input_style
              }
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
            <Text style={styles.bottom_text}>{bottom_text}</Text>
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
    borderBottomWidth: 0.5,
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
  text_input_style: {
    marginVertical: 5,
    height: 35,
    maxWidth: "100%",
    borderWidth: 0.5,
    borderRadius: 3,
    fontSize: 16
  },
  empty_text_input_style: {
    marginVertical: 5,
    height: 35,
    maxWidth: "100%",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "red",
    fontSize: 16
  },
  bottom_text: {
    // fontSize: 13,
    fontStyle: "italic"
  }
});
