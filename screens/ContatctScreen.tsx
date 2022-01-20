import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import ContactListItem from "../components/ContactListItem";
import Users from "../data/Users";

export default function ContactScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={Users}
          renderItem={({ item }) => <ContactListItem user={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });