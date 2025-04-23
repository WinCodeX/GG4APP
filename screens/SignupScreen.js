import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import api from '../lib/api';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    try {
      await api.post('/signup', {
        user: { email, password, password_confirmation: confirmPassword },
      });
      navigation.navigate('Login');
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMsg('Signup failed. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        label="Confirm Password"
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.button}
      >
        Sign Up
      </Button>

      <Button
        onPress={() => navigation.navigate('Login')}
        textColor="#1d9bf0"
      >
        Already have an account? Log in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 24,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      backgroundColor: '#111',
      marginBottom: 16,
      color: '#fff',
    },
    button: {
      backgroundColor: '#1d9bf0',
      marginTop: 8,
      padding: 8,
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 8,
    },
  });
