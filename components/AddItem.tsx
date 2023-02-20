import { useState } from "react";
import { TextInput, TouchableOpacity, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import AppColors from "../constants/color";

function AddItem({ onSubmit }) {
    const [text, setText] = useState('')

    const onChange = (textValue: string) => setText(textValue)

    return <SafeAreaView>
        <TextInput
            placeholder="Add Item..."
            style={styles.input}
            value={text}
            onChangeText={onChange} />
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => {
                onSubmit(text)
                setText('')
            }}>
            <Text style={styles.btnText}>
                <Icon name="plus" size={20} />
                Add Item
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: AppColors.colorSecondary,
        padding: 8,
        margin: 4,
    },
    btnText: {
        fontSize: 20,
        textAlign: 'center',
    },
})

export default AddItem;