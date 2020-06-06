import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Fragment, TextInput, Button } from "react-native";
// import form and form validator(formik, yup)
import * as yup from 'yup'
import { Formik } from 'formik'



import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
// import { TextField } from "react-native-material-textfield";

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);
const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("please! email?")
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(2, "pretty sure this will be hacked")
});

function Basic_roi_calc() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main_row}>
          <View style={styles.col}>
            {/* <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={values => Alert.alert(JSON.stringify(values))}
              validationSchema={yup.object().shape({
                email: yup
                  .string()
                  .email()
                  .required(),
                password: yup
                  .string()
                  .min(6)
                  .required(),
              })}
            >
              {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                <Fragment>
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    placeholder="E-mail"
                  />
                  {touched.email && errors.email &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                  }
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                    onBlur={() => setFieldTouched('password')}
                    secureTextEntry={true}
                  />
                  {touched.password && errors.password &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                  }
                  <Button
                    title='Sign In'
                    disabled={!isValid}
                    onPress={handleSubmit}
                  />
                </Fragment>
              )}
            </Formik> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Basic_roi_calc;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  main_row: {
    margin: 10
  },
  col: {
    marginVertical: 5
  }
});
