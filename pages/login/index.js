import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getDatabase, ref, get } from 'firebase/database';
import commonStyles from '../../styles/styles';
import { useUserDetails } from '../../context/globalContext';

function LoginPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [, setUserDetails] = useUserDetails();

  const db = getDatabase();

  const onLoginPress = async () => {
    setErrorMessage(null);
    if (!username || !password) {
      setErrorMessage('Enter Username and Password');
      return;
    }
    const userRef = ref(db, `/users/${username}`);
    const result = await get(userRef);

    if (JSON.stringify(result) === 'null') {
      setErrorMessage('Incorrect Username or Password');
      return;
    }
    if (result.toJSON().password !== password) {
      setErrorMessage('Incorrect Username or Password');
      return;
    }
    setUserDetails({ id: username });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.loginPageContainer}>
      <View style={{ marginVertical: 50, alignItems: 'center' }}>
        <Text style={styles.appTitle}>Medi-Stop</Text>
        <Text style={styles.appDescription}>One stop for all your medical needs.</Text>
      </View>

      <Text style={styles.loginHeading}>Login</Text>

      <View style={{ marginBottom: 15 }}>
        <Text style={commonStyles.inputLabel}>Username</Text>
        <TextInput
          style={commonStyles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter Username"
        />
        {!username && <Text style={styles.requiredText}>*Required</Text>}
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={commonStyles.inputLabel}>Password</Text>
        <TextInput
          secureTextEntry
          style={commonStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Password"
        />
        {!password && <Text style={styles.requiredText}>*Required</Text>}
      </View>

      {errorMessage && <Text style={{ color: 'red', fontSize: 15 }}>{errorMessage}</Text>}
      <View style={{ width: '50%', margin: 20 }}>
        <Button
          onPress={onLoginPress}
          title="Login"
          color="#841584"
        />
      </View>
    </View>
  );
}

LoginPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginPage;

const styles = StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  appDescription: {
    fontSize: 25,
    fontWeight: '500'
  },
  loginHeading: {
    fontWeight: '600',
    fontSize: 45,
    marginVertical: 10,
  },
  requiredText: {
    color: 'red',
    fontSize: 15,
  },
});
