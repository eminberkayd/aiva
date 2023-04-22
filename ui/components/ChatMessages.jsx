import React, { useState } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from "react-native"
import { TextInput } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function ChatMessages() {
  const [messages, setMessages] = useState(["ali", "mehmet"])
  const [newMessage, setNewMessage] = useState("");

  const sendNewMessage = () => { 
    setMessages((prev) => {
      return [...prev, newMessage];
    })
    setNewMessage("");
  }

  return (<>
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={20}>
      <ScrollView style={{ backgroundColor: "#e1f7da", borderRadius: "30%", padding: "2%" }}>
        {messages.map((message, idx) => <ChatElement key={idx} message={message} />)}
      </ScrollView>
      <TextInput placeholder='New Message' style={{borderBottomColor: "red"}} variant='standard' value={newMessage} onChangeText={setNewMessage} trailing={<Icon name='send' size={24} onPress={sendNewMessage}/>}/>
    </KeyboardAvoidingView>
  </>
  )
}

const ChatElement = ({ message }) => {
  return (
    <View style={{ margin: "1%", backgroundColor: "#f6faf5", padding: "3%", borderRadius: "30%" }}>
      <Text>
        {message}
      </Text>
    </View>
  )
}


export default ChatMessages