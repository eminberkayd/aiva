import React from 'react'
import { Text, View, ScrollView, FlatList } from 'react-native'
import { AppBar, Avatar } from '@react-native-material/core'
import ChatMessages from '../components/ChatMessages'

function ChatScreen() {
  return (
    <View
      style={{ flex:1, padding: "2%" }}
    >
      <AppBar title='Aiva Bot' centerTitle={false} color='#ebeffc' tintColor='#54638c'
        leading={
          <Avatar image={{ height:2, width:45, uri: 'https://herobot.app/wp-content/uploads/2022/11/AI-bot-1.jpg' }} />
        }
      />
      <ChatMessages/>
    </View>
  )
}

export default ChatScreen