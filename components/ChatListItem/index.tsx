import React from 'react';
import { Image, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { ChatRoom, User } from '../../types';
import { View, Text } from '../Themed';
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
        navigation.navigate("ChatRoom", { 
            id: chatRoom?.id, 
            name: otherUser.name, 
        });
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image
                        source={{
                            uri: otherUser?.imageUri,
                        }} style={styles.avatar} />
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{otherUser?.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>

                <View style={styles.timeVIew}>
                    <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )

};

export default ChatListItem;