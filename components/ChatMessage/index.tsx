import React from 'react';
import {Text, View} from 'react-native';
import { Message } from "../../types";
import moment from "moment";
import styles from './styles';

export type ChatMessageProps = {
  message: Message;
  myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props;

  const isMyMessage = () => {
    return message?.user?.id === 'u1';
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox, {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
          borderTopLeftRadius: isMyMessage() ? 20 : 0,
          borderTopRightRadius: isMyMessage() ? 0 : 20,
        }
      ]}>
        {!isMyMessage() && <Text style={styles.name}>{message?.user?.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  )
}

export default ChatMessage;