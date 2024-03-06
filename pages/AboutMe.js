import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutMe = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <View style={styles.profileContainer}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.info}>5'8half</Text>
        <Text style={styles.label}>Weight:</Text>
        <Text style={styles.info}>60kg</Text>
        <Text style={styles.label}>Blood type:</Text>
        <Text style={styles.info}>B</Text>
        <Text style={styles.label}>Sex:</Text>
        <Text style={styles.info}>Male</Text>
        <Text style={styles.label}>Birthdate:</Text>
        <Text style={styles.info}>08/02/2002</Text>
        <Text style={styles.label}>Contact number:</Text>
        <Text style={styles.info}>09067378737</Text>
        <Text style={styles.label}>Social media FB:</Text>
        <Text style={styles.info}>Vanrazel Dumaguing</Text>
        <Text style={styles.label}>IG:</Text>
        <Text style={styles.info}>Dumzvindiz</Text>
        <Text style={styles.label}>TWITTER:</Text>
        <Text style={styles.info}>Bannex</Text>
        <Text style={styles.label}>Hobbies:</Text>
        <Text style={styles.info}>basketball, and future career OFW.</Text>
      <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.link}>Go Back</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

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

export default AboutMe;