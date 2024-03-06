import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {

  const handleAboutMePress = () => {
    navigation.navigate('AboutMe'); // Navigate to the 'AboutMe' screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/van.jpg')} style={styles.image} />
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Vanrazel Dumaguing</Text>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>21</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.info}>NHA Phase 1 Kauswagan cdo.c</Text>
        <Text style={styles.label}>Student id:</Text>
        <Text style={styles.info}>2021307632</Text>
        <Text style={styles.label}>Grade Level:</Text>
        <Text style={styles.info}>BSIT-3R4</Text>
        <Text style={styles.label}>School:</Text>
        <Text style={styles.info}>University of Science and Technology of Southern Philippines</Text>
        {/* Add more profile information as needed */}
        <TouchableOpacity onPress={handleAboutMePress}>
          <Text style={styles.link}>About Me</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8911',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: '#FF8911',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default Profile;
