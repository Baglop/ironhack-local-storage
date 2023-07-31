import React from 'react';
import { View, Text } from 'react-native'
import { colors } from '../theme/colors';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { globaStyles } from '../theme/global.style';
import CustomButton from '../components/CustomButton';
import { useTaskContext } from '../context/taskcontext/taskContext';
import { taskDetailStyle } from '../theme/taskdetail.style';

type Props = StackScreenProps<RootStackParamList, 'TaskDetailScreen'>

const TaskDetailScreen = ({ route, navigation }: Props) => {

    const { task } = route.params
    const { deleteTask, completeTask } = useTaskContext()

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, padding: 10 }}>
            <View style={taskDetailStyle.titleContainer}>
                <View>
                    <Text style={globaStyles.title}>{task.title}</Text>
                    <Text style={{ color: colors.secundary }}>{task.category.title}</Text>
                </View>
                <Text style={globaStyles.subTitle}>{task.date}</Text>
            </View>
            <View style={taskDetailStyle.descriptionCard}>
                <Text>{task.description}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
                <CustomButton
                    title='Delete task'
                    background={colors.red}
                    textColor={colors.primaryDark}
                    onPress={() => {
                        deleteTask(task)
                        navigation.goBack()
                    }} />
               {!task.completed && <CustomButton
                    onPress={() => completeTask(task)}
                    title='Complete task' />}
            </View>
        </View>
    );
}

export default TaskDetailScreen;
