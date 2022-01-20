import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { User } from "../../types";
import styles from "./style";

export type ContactListItemProps = {
  user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
  const { user } = props;

  const onClick = async () => {
      //TODO navigate to the chat room
  }

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.lefContainer}>
          <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

          <SafeAreaView style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
};

export default ContactListItem;