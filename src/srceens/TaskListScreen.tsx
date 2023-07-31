import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import { colors } from '../theme/colors';
import { useTaskContext } from '../context/taskcontext/taskContext';
import FloatingButton from '../components/FloatingButton';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../types/RootStackParamList';
import DropDownPicker from 'react-native-dropdown-picker';
import CategoryFilter from '../components/CategoryFilter';
import AddCategoryModal from '../components/AddCategoryModal';
type Props = StackScreenProps<RootStackParamList, 'TaskListScreen'>

const TaskListScreen = ({ navigation }: Props) => {

    const context = useTaskContext()

    useEffect(() => {
        context.loadCategories()
        context.loadTasks()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <CategoryFilter />
            <FlatList
                style={{ flex: 1 }}
                contentContainerStyle={{ padding: 10, paddingBottom: 100 }}
                renderItem={({ item }) => <TaskListItem item={item} onPress={() => navigation.navigate('TaskDetailScreen', { task: item })} />}
                data={context.tasks}
            />
            <FloatingButton onPress={() => navigation.navigate("TaskCreationScreen")} />

            <AddCategoryModal />
        </View>
    );
}

export default TaskListScreen;