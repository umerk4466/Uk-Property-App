import { StyleSheet } from "react-native";

// styles used in all the pages
export const globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff"
  },
  main_row: {
    margin: 10,
  },
  ScrollViewStyle: {
    padding: 10,
  },
  col: {
    marginVertical: 5,
  },
  input: {
    marginTop: 5,
    marginBottom: 3,
    borderWidth: 0.6,
    borderRadius: 2,
    borderColor: "#B6B6B6",
    fontSize: 16,
    flex: 1,
  },
  input_error: {
    marginTop: 5,
    marginBottom: 3,
    borderWidth: 0.6,
    borderRadius: 2,
    borderColor: "crimson",
    fontSize: 16,
    flex: 1,
  },
  input_error_text: {
    color: "crimson",
    fontSize: 12,
    marginBottom: 5,
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
    width: "50%",
  },
  heading_text: {
    backgroundColor: "whitesmoke",
    marginVertical: 2,
    padding: 5,
  },
  back_container: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "#B6B6B6",
    borderRadius: 4,
  },
  blue_text: {
    color: "#2980B9",
    paddingVertical: 10,
    fontSize: 16,
  },
});

export const CustomTheme = {
  dark: false,
  colors: {
    primary: "#FFFFFF", // (On Primary color)
    background: "#F9F9F9", // (Background color)
    card: "#3498db", // (Primary color)
    text: "#FFFFFF", // (On Primary color)
    // border: "#442C2E"
  },
};

// specify variable for statusbar color (Primary Variant color)
export const StatusBarColor = "#2980b9";
// specify variable for secondary color (for buttons etc)
export const SecondaryColor = "#1abc9c";
