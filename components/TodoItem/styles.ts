import { StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"


export const styles = StyleSheet.create({
    
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        marginBottom: 8,
    },
    checkBox: {

    },
    text: {
        flex: 1,
        color: '#F2F2F2',
    },

    isCheck: {
        opacity: 0.5,
        textDecorationLine: 'line-through'
    },

    noIsCheck: {
        opacity: 1,
        textDecorationLine: 'none'
    },

    button: {

    },
})