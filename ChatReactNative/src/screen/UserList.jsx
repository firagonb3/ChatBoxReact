import React from 'react';
import { View, FlatList } from 'react-native';
import UserProfile from '../components/UserProfile';

const UserList = () => {
  const data = [
    { userName: 'usuario1', name: 'Usuario 1' },
    { userName: 'usuario2', name: 'Usuario 2' },
    { userName: 'usuario3', name: 'Usuario 3' },
    // Agrega más elementos según sea necesario
  ];

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.userName}
        renderItem={({ item }) => (
          <View>
            <UserProfile userName={item.userName} name={item.name} />
            <UserProfile userName={item.userName} name={item.name} />
            <UserProfile userName={item.userName} name={item.name} />
            <UserProfile userName={item.userName} name={item.name} />
            <UserProfile userName={item.userName} name={item.name} />
          </View>
          
        )}
      />
    </View>
  );
};

export default UserList;
