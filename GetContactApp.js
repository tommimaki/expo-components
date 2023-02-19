import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as Contacts from "expo-contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        setContacts(data);
        console.log(data);
      }
    }
  };

  const renderContact = ({ item }) => {
    let phoneNumber = "";
    if (item.phoneNumbers && item.phoneNumbers.length > 0) {
      phoneNumber = item.phoneNumbers[0].number;
    }

    return (
      <Text>
        {item.name}: {phoneNumber}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContact}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.Button}>
        <Button title="Get contacts" onPress={getContacts} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    marginBottom: 100,
  },
});
