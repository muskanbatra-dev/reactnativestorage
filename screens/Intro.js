import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Intro = () => {
  const [name,setName] = useState("")
  const handleChangeText =(text)=>{
    setName(text)
  }
  const handleSubmit = async()=>{
    const user = {name : name}
    await AsyncStorage.setItem('user',JSON.stringify(user))
  }
  return (
    <>
    <StatusBar hidden/>
    <View style={styles.container}>
      <Text>Enter Your Name to continue</Text>
      <TextInput style={styles.TextInput} placeholder="Enter Your Name" value={name} onChangeText={handleChangeText}/>
      <Text>{name}</Text>

      <Button title='Submit' onPress={handleSubmit}/>
    </View>
    </>
  )
}

export default Intro

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextInput:{
        borderWidth:2,
        borderColor: 'black',
        width: '80%',
    }
})