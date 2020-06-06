import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from "react-native";
// import form and form validator(formik, yup)
import * as yup from 'yup'
import { Formik } from 'formik'


export default props => (
  <Formik
    onSubmit={values => console.log(values)}>
    {(props) => (
      // return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.main_row}>
            <View style={styles.col}>
              <TextInput
                // keyboardType="numeric"
                textAlign={"center"}
                placeholder={"75m²/ft²"}
              />
              <TextInput
                // keyboardType="numeric"
                textAlign={"center"}
                placeholder={"nect"}
              />
              <Button title="Reset All" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
    }
  </Formik>
);

// export default Basic_roi_calc;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  main_row: {
    margin: 10,
  },
  col: {
    marginVertical: 5
  }
});
