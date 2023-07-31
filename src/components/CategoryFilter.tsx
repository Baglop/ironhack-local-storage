import React, { useEffect, useState } from 'react';
import { View, Pressable, Image, Modal, TextInput, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { colors } from '../theme/colors';
import { globaStyles } from '../theme/global.style';
import { useTaskContext } from '../context/taskcontext/taskContext';

const CategoryFilter = () => {

    const { categories, setModalCatVisible, filterByCat } = useTaskContext()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (value != null)
            filterByCat(JSON.parse(value))

        console.log(JSON.parse(value))
    }, [value])

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', padding: 10 }}>
            <View style={{ flex: 1 }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={categories.map((category) => { return { value: JSON.stringify(category), label: category.title } })}
                    setOpen={setOpen}
                    setValue={setValue}
                    placeholder='Category'
                    style={{ backgroundColor: colors.primary, borderWidth: 0, elevation: 3 }}
                    itemProps={{ style: { backgroundColor: colors.primary, padding: 10, flexDirection: 'row' } }}
                    containerProps={{ style: { borderWidth: 0 } }}

                />
            </View>
            <Pressable
                onPress={() => setModalCatVisible(true)}
            >
                <Image
                    style={{ height: 30, width: 30, tintColor: colors.primary, marginStart: 5 }}
                    source={require('../assets/images/add-outline.png')}
                />
            </Pressable>
        </View >
    );
}

export default CategoryFilter;