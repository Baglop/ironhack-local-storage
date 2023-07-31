import React, { useRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native'
import { globaStyles } from '../theme/global.style';
import { taskCreationStyle } from '../theme/taskcreation.style';
import { colors } from '../theme/colors';
import useTaskForm from '../hooks/useTaskForm';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTaskContext } from '../context/taskcontext/taskContext';
import CustomButton from '../components/CustomButton';

const TaskCreationScreen = () => {

    const { categories } = useTaskContext()
    const taskForm = useTaskForm()
    const [open, setOpen] = useState(false);

    return (
        <View style={taskCreationStyle.container}>

            <Text style={globaStyles.title}>Add new task</Text>
            <View style={globaStyles.textInput} >
                <TextInput
                    value={taskForm.title}
                    onChangeText={(text) => taskForm.changeTitle(text)}
                    style={{ color: colors.primaryDark }}
                    placeholder='Title'
                />
            </View>

            <Text style={globaStyles.subTitle}>Description</Text>
            <View style={[globaStyles.textInput, { height: 300 }]} >
                <TextInput
                    value={taskForm.description}
                    onChangeText={(text) => taskForm.changeDescription(text)}
                    multiline
                    textAlignVertical='top'
                    style={{ color: colors.primaryDark, flex: 1 }}
                    placeholder='Write here..'
                />
            </View>
            <DropDownPicker
                open={open}
                value={JSON.stringify(taskForm.category)}
                items={categories.map((category) => { return { value: JSON.stringify(category), label: category.title } })}
                setOpen={setOpen}
                setValue={(value) => { taskForm.changeCategory(JSON.parse(value(null))) }}
                placeholder='Category'
                style={{ backgroundColor: colors.primary, borderWidth: 0, elevation: 3, width: '98%' }}
                itemProps={{ style: { backgroundColor: colors.primary, padding: 10, flexDirection: 'row' } }}
                containerProps={{ style: { borderWidth: 0 } }}

            />
            <CustomButton onPress={() => taskForm.setNewTask()} />
        </View>
    );
}

export default TaskCreationScreen;