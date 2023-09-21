import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfile = ({ userName, name }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: `https://unavatar.io/${userName}` }}
      />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.joinDate}>Joined in August 2014</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinDate: {
    fontSize: 12,
    color: 'gray',
  },
});

export default UserProfile;