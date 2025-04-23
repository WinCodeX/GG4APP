import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../lib/api';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/login', {
        user: { email, password },
      });
      const token = response.data.token;

      await AsyncStorage.setItem('auth_token', token);
      console.log('✅ Login successful:', token);

      // Navigate to Home
      navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
    } catch (error) {
      console.error('❌ Login error:', error);
      setErrorMsg('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GG4App Login</Text>

      <TextInput
        label="Email"
        mode="flat"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        mode="flat"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
      >
        Log In
      </Button>

      <Button
        onPress={() => navigation.navigate('Signup')}
        textColor="#1d9bf0"
      >
        Don't have an account? Sign up
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
