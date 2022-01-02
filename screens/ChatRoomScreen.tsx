import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text } from "../components/Themed";
import ChatMessage from "../components/ChatMessage";
import { FlatList, ImageBackground } from "react-native";
import Chats from "../data/Chats";

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <ImageBackground
            source={require("../assets/wallpaper.png")}
            style={{width: '100%', height: '100%'}}
        >
            <FlatList
                data={Chats.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
        </ImageBackground>
    )
}

export default ChatRoomScreen;