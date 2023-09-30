import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"

import { styles } from "./styles"
import { TodoItem } from "../../../components/TodoItem"
import { useState } from "react"

interface IlistItems {
    text: string,
    isCompleted: boolean
}

export function Home() {
    const [listItems, setListItems] = useState<IlistItems[]>([])
    const [newItem, setNewItem] = useState('')

    function handleAddNewItem() {

        if(newItem.trim() === '') {
            return Alert.alert('Digite uma tarefa!')
        }

        listItems.forEach((item) => {

            if(item.text === newItem) {
                return Alert.alert('Essa tarefa já existe, adicione outra.')
            }
        })

        const newTodo = {text: newItem, isCompleted: false}

        setListItems((prevState) => [...prevState, newTodo])
        setNewItem('')
    }

    function handleCheckItem(text:string, check: boolean) {

        const listItemsAux = listItems

        listItemsAux.forEach((item) => {
            if(item.text === text) {
                item.isCompleted = check
            }
        })

        setListItems(() => [...listItemsAux])
    }

    function handleRemoveItem(text: string) {
        setListItems((prevState) => prevState.filter((item) => item.text !== text))
    }

    const ItemsCompleted = listItems.filter((item) => item.isCompleted).length
    const totalItems = listItems.length

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./../../../assets/logo.png')} />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Descrição da tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setNewItem}
                    value={newItem}
                />

                <TouchableOpacity style={styles.buttonPlus} onPress={handleAddNewItem}>
                    <Image source={require('./../../../assets/plus.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.info}>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>Criadas</Text>
                    <Text style={styles.values}>{totalItems}</Text>
                </View>
                <View style={styles.completed}>
                    <Text style={styles.completedText}>Concluídas</Text>
                    <Text style={styles.values}>{ItemsCompleted}</Text>
                </View>
            </View>

            <ScrollView style={styles.listItems}>

                { listItems.length ? listItems.map(item => {
                    return <TodoItem 
                            key={item.text}
                            task={item} 
                            handleCheckItem={handleCheckItem}
                            handleRemoveItem={handleRemoveItem}
                        />
                }) : (
                    <View style={styles.noItems}>
                        <Image source={require('./../../../assets/Clipboard.png')} />

                        <Text style={styles.noItemsText}>
                            Você ainda não tem tarefas cadastradas Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}