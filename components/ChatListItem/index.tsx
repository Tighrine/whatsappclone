import React from 'react';
import { Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { ChatRoom, User } from '../../types';
import { SafeAreaView, Text } from '../Themed';
import moment from 'moment';
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const navigation = useNavigation()
    const { chatRoom } = props;
    const otherUser = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate("ChatRoom", { id: chatRoom?.id, otherUser});
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.lefContainer}>
                    <Image
                        source={{
                            uri: otherUser?.imageUri,
                        }} style={styles.avatar} />
                    <SafeAreaView style={styles.midContainer}>
                        <Text style={styles.username}>{otherUser?.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={styles.timeSafeAreaView}>
                    <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )

};

export default ChatListItem;