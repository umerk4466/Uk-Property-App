import { StyleSheet } from "react-native";
import { overlay } from "react-native-paper";

// styles used in all the pages
export const globalstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
        borderWidth: 0.5,
        borderRadius: 2,
        fontSize: 16,
        flex : 1
    },
    error_field: {
        color: "crimson",
        fontSize: 12,
        marginBottom: 5,
    },
    result_container: {
        backgroundColor: "white",
        height: 100,
        justifyContent: 'center',
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
        height: 120,
        justifyContent: "space-evenly",
        borderBottomWidth: 0.5,
        paddingTop: 5,
    },
    calculator_explanation_text: {
        marginTop: 5,
        fontStyle: "italic"
    },
    single_line_input_view:{
        flexDirection: "row",
        alignItems: "center",
    },
    signle_line_input_text:{
        width:"40%",
    },
    heading_text:{
        backgroundColor: "lightgrey",
        marginVertical: 5,
        padding: 5,
    }
});