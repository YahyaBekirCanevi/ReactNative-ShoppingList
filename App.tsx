
import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Alert, AlertButton, Button } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'uuid4';
import DebugMode from './components/DebugMode';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Juice' },
    { id: uuid(), text: 'Apple' },
    { id: uuid(), text: 'Banana' },
    { id: uuid(), text: 'Water' },
  ])

  const deleteItem = (id) => {
    Alert.alert('Alert', 'Do you want to remove item?', [
      {
        text: 'Yes', onPress(value) {
          console.log('deleted')
          setItems(prevItems => {
            return prevItems.filter(item => item.id != id)
          })
        },
      },
      {
        text: 'No', onPress(value) {},
      },
    ])
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }])
      return
    }
    console.log('added')
    setItems(prevItems => {
      return [{ id: uuid(), text: text }, ...prevItems]
    })
  }

  return <View style={styles.container}>
    <Header title={'Shopping List'} />
    <AddItem onSubmit={addItem} />
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <ListItem
          item={item}
          onDelete={deleteItem} />
      )}
    />
    <DebugMode enabled={true} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});