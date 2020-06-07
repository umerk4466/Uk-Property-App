import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, Button } from "react-native";
// import form and form validator(formik, yup)
import * as yup from 'yup'
import { Formik } from 'formik'


export default function Basic_roi_calc() {
  return (
    <Formik
      initialValues={{ title: '', body: '', }}
      onSubmit={values => console.log(values)}>
      {(props) => (
        // return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.main_row}>
              <View style={styles.col}>
                <TextInput
                  placeholder={"Title"}
                  value={props.values.title}
                  onChangeText={props.handleChange('title')}
                />
                <TextInput
                  placeholder={"Body"}
                  value={props.values.body}
                  onChangeText={props.handleChange('body')}
                />
                <Button title="Reset All" onPress={props.handleSubmit} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )
      }
    </Formik>
  )
}


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
