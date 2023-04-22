import React, { useState } from 'react'
import { View, SafeAreaView } from 'react-native';
import ButtonGroup from "./BottomGroup"
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function Main() {
    const [page, setPage] = useState("home")
    return (<>
        <SafeAreaView style={{flex:1}}>
            {page == "home" && <View style={{flex:10}}><HomeScreen /></View>}
            {page == "chat" && <View style={{flex:10}}><ChatScreen /></View>}
            {page == "profile" && <View style={{flex:10}}><ProfileScreen /></View>}
            <ButtonGroup page={page} setPage={setPage} />
        </SafeAreaView>
    </>
    )
}