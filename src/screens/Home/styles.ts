import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1
    },

    header: {
        height: 173,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        justifyContentc: 'center',
        flexDirection: 'row',
        gap: 4,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: -28,
    },

    input: {
        height: 54,
        padding: 16,
        flex: 1,
        borderColor: '#5E60CE',
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: '#262626',
        color: '#F2F2F2',
    },

    buttonPlus: {
        height: 54,
        padding: 18,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },

    info: {
        marginTop: 32,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingRight: 24,
    },

    counter: {
        flexDirection: 'row',
        gap: 8
    },

    counterText: {
        color: '#4EA8DE',
        fontWeight: '700',
        fontSize: 14
    },

    completed: {
        flexDirection: 'row',
        gap: 8
    },

    completedText: {
        color: '#8284FA',
        fontWeight: '700',
        fontSize: 14
    },

    values: {
        backgroundColor: '#333',
        color:'#fff',
        borderRadius: 100,
        paddingRight: 8,
        paddingLeft: 8
    },

    listItems: {
        borderTopWidth: 1,
        borderColor: '#333333',
        margin: 24,
    },

    noItems: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 24
    },

    noItemsText: {
        textAlign: 'center',
        color: '#808080',
        fontSize: 14,
    }

})