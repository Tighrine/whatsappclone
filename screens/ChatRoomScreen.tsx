import React from "react";
import ChatMessage from "../components/ChatMessage";
import { FlatList, ImageBackground } from "react-native";
import Chats from "../data/Chats";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/wallpaper.png")}
            style={{width: '100%', height: '100%'}}>
            <FlatList
                data={Chats.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />
            <InputBox />
        </ImageBackground>
    )
}

export default ChatRoomScreen;