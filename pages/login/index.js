import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'
import { commonStyles } from '../../styles/styles';

const LoginPage = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        navigation.navigate('Dashboard')
    }
    return (
        <View style={styles.loginPageContainer}>
            <Text style={styles.appTitle}>Medi-Stop</Text>

            <Text style={styles.loginHeading}>Login</Text>

            <View>
                <Text style={commonStyles.inputLabel}>Username</Text>
                <TextInput
                    style={commonStyles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter Username"
                />
            </View>

            <View>
                <Text style={commonStyles.inputLabel}>Password</Text>
                <TextInput
                    style={commonStyles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Enter Password'
                />
            </View>

            <View style={{width:'50%', margin: 20}}>
                <Button
                    onPress={onLoginPress}
                    title="Login"
                    color="#841584"
                />
            </View>
        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    loginPageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        marginVertical: 50,
    },
    loginHeading: {
        fontWeight: 'bold',
        fontSize: 40,
        marginVertical: 10
    }
})