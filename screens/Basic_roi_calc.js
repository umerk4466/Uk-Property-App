import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

function Basic_roi_calc() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.main_row}>
          <View style={styles.col}>
            <Text>basic roi calc</Text>
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
