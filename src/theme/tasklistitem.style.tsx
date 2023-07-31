import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const taskItemStyle = StyleSheet.create({
    container: {
        width: '98%',
        elevation: 3,
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        overflow:"hidden"
    }
})