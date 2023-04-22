import React from 'react'
import { View, Button } from "react-native"
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function BottomGroup({ page, setPage }) {
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center"
            }}
        >
            <IconButton
                icon={
                    <Icon
                        name={page == 'chat' ? 'chat' : 'chat-outline'}
                        size={24}
                    />}
                onPress={() => { setPage("chat") }}
            />
            <IconButton
                icon={
                    <Icon name={page == 'home' ? 'home' : 'home-outline'}
                        size={24}
                    />}
                onPress={() => { setPage("home") }}
            />
            <IconButton
                icon={
                    <Icon name={page == 'profile' ? 'account' : 'account-outline'}
                        size={24}
                    />}
                onPress={() => { setPage("profile") }}
            />
        </View>
    )
}

export default BottomGroup