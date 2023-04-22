import React from 'react'
import { View, TouchableOpacity } from "react-native"
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function BottomGroup({ page, setPage }) {
    return (
        <View
            style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
                alignItems: "stretch"
            }}
        >
            <TouchableOpacity
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                onPress={() => { setPage("chat") }}>
                <Icon
                    name={page == 'chat' ? 'chat' : 'chat-outline'}
                    size={28}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                onPress={() => { setPage("home") }}>
                <Icon
                    name={page == 'home' ? 'home' : 'home-outline'}
                    size={28}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                onPress={() => { setPage("profile") }}>
                <Icon
                    name={page == 'profile' ? 'account' : 'account-outline'}
                    size={28}
                />
            </TouchableOpacity>
        </View>
    )
}