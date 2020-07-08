import { StyleSheet } from "react-native";

// styles used in all the pages
export const globalstyles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    // backgroundColor: "#fff"
  },
  ScrollViewContainer: {
    padding: 10,
  },
  WhiteContainer: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.3,
    borderColor: "#B6B6B6",
    borderRadius: 4,
  },
  main_row: {
    margin: 10,
  },
  col: {
    marginVertical: 5,
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
