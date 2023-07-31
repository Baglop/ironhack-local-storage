import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from '../types/RootStackParamList';
import TaskListScreen from '../srceens/TaskListScreen';
import TaskCreationScreen from '../srceens/TaskCreationScreen';
import TaskDetailScreen from '../srceens/TaskDetailScreen';

const Stack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='TaskListScreen' component={TaskListScreen} />
            <Stack.Screen name='TaskCreationScreen' component={TaskCreationScreen} />
            <Stack.Screen name='TaskDetailScreen' component={TaskDetailScreen} />
        </Stack.Navigator>
    );
}

export default RootNavigator;