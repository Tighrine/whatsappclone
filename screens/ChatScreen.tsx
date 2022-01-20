import { StyleSheet, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import GestureRecognizer from 'react-native-swipe-gestures';
import { SafeAreaView } from '../components/Themed';
import ChatListItem from "../components/ChatListItem";
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatScreen() {
  const navigation = useNavigation();
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
    <GestureRecognizer
      onSwipeRight={() => navigation.navigate('CameraRoute')}
      config={config}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <FlatList
          data={ChatRooms}
          renderItem={({ item }) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
        />
        <NewMessageButton />
      </SafeAreaView>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
