import { StyleSheet } from "react-native";
import { overlay } from "react-native-paper";

// styles used in all the pages
export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main_row: {
    margin: 10,
  },
  col: {
    marginVertical: 5,
  },
  input: {
    marginTop: 5,
    marginBottom: 3,
    borderBottomWidth: 0.5,
    borderRadius: 2,
    fontSize: 16,
    flex: 1,
  },
  error_field: {
    color: "crimson",
    fontSize: 12,
    marginBottom: 5,
  },
  result_container: {
    backgroundColor: "white",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  buttons_container: {
    height: 110,
    justifyContent: "space-evenly",
    // borderBottomWidth: 0.5,
    // borderTopWidth: 0.5,
    // paddingTop: 5,
  },
  calculator_explanation_text: {
    marginTop: 5,
    paddingTop: 2,
    fontStyle: "italic",
    borderTopWidth: 0.5,
  },
  single_line_input_view: {
    flexDirection: "row",
    alignItems: "center",
  },
  signle_line_input_text: {
    width: "55%",
  },
  heading_text: {
    backgroundColor: "whitesmoke",
    marginVertical: 5,
    padding: 5,
  },
});
