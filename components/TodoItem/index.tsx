import { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native'

import { styles } from './styles'

import BouncyCheckbox from "react-native-bouncy-checkbox";


interface TodoItemProps {
    task: {
        text: string,
        isCompleted: boolean
    }
   
    handleCheckItem: (text:string, isChecked: boolean) => void
    handleRemoveItem: (text: string) => void
}

export function TodoItem({task, handleCheckItem, handleRemoveItem}:TodoItemProps) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <View style={styles.todoItem}>
            <BouncyCheckbox
                size={24}
                fillColor="#5E60CE"
                unfillColor="transparent"
                iconStyle={{ borderColor: "#4EA8DE"}}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => { handleCheckItem(task.text, isChecked) }}
            />
            <Text style={[styles.text, task.isCompleted && styles.isCheck ]}>{task.text}</Text>
            <Pressable style={styles.button} onPress={() => handleRemoveItem(task.text)}>
                <Image source={require('./../../assets/icon-trash.png')} />
            </Pressable>
        </View>
    )
}