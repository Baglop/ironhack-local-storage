import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const taskDetailStyle = StyleSheet.create({
    descriptionCard: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        elevation: 3,
        minHeight: 200
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 10,
        alignItems: 'center'
    }
})