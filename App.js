import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Mario', key: '1' },
    { name: 'Thomas', key: '2' },
    { name: 'okbay', key: '3' },
    { name: 'Luis', key: '4' },
    { name: 'Lara', key: '5' },
    { name: 'Luis', key: '6' },
    { name: 'Andrin', key: '7' },
    { name: 'Ali', key: '8' },
    { name: 'Mariyam', key: '9' },
    { name: 'Moussa', key: '10' },
  ]);

  const [name, setName] = useState('raziq');
  const [age, setAge] = useState('22');
  const [person, setPerson] = useState({ name: 'raziq', age: 23 });

  const changeName = () => {
    setName('adeel');
    setPerson({ name: 'leo', age: 34 });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}

        {/* <FlatList
        data={people}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          <Text style={styles.item}>{item.name}</Text>;
        }}
      /> */}

        <Text>Enter your Name </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='enter your name'
          onChangeText={(name) => setName(name)}
        />
        <Text>Enter your Age</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g 99'
          onChangeText={(age) => setAge(age)}
        />
        <Text>my name is {name}</Text>
        <Text>my age is {age}</Text>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <Button title='change Name' onPress={changeName} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'blue',
    fontSize: 24,
  },
});
