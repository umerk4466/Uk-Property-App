import { StyleSheet } from "react-native";

// styles used in all the pages
export const globalstyles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff"
  },
  main_row: {
    margin: 10
  },
  col: {
    marginVertical: 5
  },
  input: {
    marginTop: 5,
    marginBottom: 3,
    borderWidth: 0.5,
    borderRadius: 2,
    fontSize: 16,
    flex: 1
  },
  input_error: {
    borderColor: "crimson",
    marginTop: 5,
    marginBottom: 3,
    borderWidth: 0.7,
    borderRadius: 2,
    fontSize: 16,
    flex: 1
  },
  input_error_text: {
    color: "crimson",
    fontSize: 12,
    marginBottom: 5
  },
  buttons_container: {
    height: 110,
    justifyContent: "space-evenly"
    // borderBottomWidth: 0.5,
    // borderTopWidth: 0.5,
    // paddingTop: 5,
  },
  calculator_explanation_text: {
    marginTop: 5,
    paddingTop: 2,
    fontStyle: "italic",
    borderTopWidth: 0.5
  },
  single_line_input_view: {
    flexDirection: "row",
    alignItems: "center"
  },
  signle_line_input_text: {
    width: "50%"
  },
  heading_text: {
    backgroundColor: "whitesmoke",
    marginVertical: 2,
    padding: 5
  }
});

export const CustomTheme = {
  dark: false,
  colors: {
    primary: "#FFFFFF", // (On Primary color)
    background: "#FFFFFF", // (Background color)
    card: "#3498db", // (Primary color)
    text: "#FFFFFF" // (On Primary color)
    // border: "#442C2E"
  }
};

// specify variable for statusbar color (Primary Variant color)
export const StatusBarColor = "#2980b9";
// specify variable for secondary color (for buttons etc)
export const SecondaryColor = "#1abc9c";
