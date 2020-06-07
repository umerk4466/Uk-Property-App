import React from "react";
import { SafeAreaView, ScrollView, Text, View, TextInput, Button } from "react-native";
// import global styles
import { globalstyles } from '../styles/global_styles'
// import form and form validator(formik, yup) library
import * as yup from 'yup'
import { Formik } from 'formik'


export default function Basic_roi_calc() {
  return (
    <Formik
      initialValues={{ title: '', body: '', }}
      onSubmit={values => console.log(values)}>
      {(props) => (
        // return (
        <SafeAreaView style={globalstyles.container}>
          <ScrollView>
            <View style={globalstyles.main_row}>
              <View style={globalstyles.col}>
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