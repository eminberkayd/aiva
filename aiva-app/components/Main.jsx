import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonGroup from "./BottomGroup"
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

function Main() {
    const [page, setPage] = useState("home")
    return (<>
        <SafeAreaView style={{flex:1}}>
            {page == "home" && <View style={{flex:9}}><HomeScreen /></View>}
            {page == "chat" && <View style={{flex:9}}><ChatScreen /></View>}
            {page == "profile" && <View style={{flex:9}}><ProfileScreen /></View>}
            <View style={{flex:1}}>

            <ButtonGroup page={page} setPage={setPage} />
            </View>
        </SafeAreaView>
    </>
    )
}

export default Main;

const styles = StyleSheet.create({
    buttonGroup: {

        margin: 50
    }
})