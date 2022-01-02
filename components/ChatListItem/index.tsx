import React from 'react';
import { Image } from "react-native";
import styles from "./style";
import { ChatRoom } from '../../types';
import { View, Text } from '../Themed';
import moment from 'moment';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const otherUser = chatRoom.users[1];
    return (
        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image
                    source={{
                        uri: otherUser.imageUri,
                    }} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{otherUser.name}</Text>
                    <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            
            <View style={styles.timeVIew}>
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
            </View>
        </View>
    )

};

export default ChatListItem;