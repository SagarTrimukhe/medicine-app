import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPress = () => {
        
    }
    return (
        <View style={styles.loginPageContainer}>
            <Text style={styles.appTitle}>Medi-Stop</Text>

            <Text style={styles.loginHeading}>Login</Text>

            <View>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter Username"
                />
            </View>

            <View>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Enter Password'
                />
            </View>

            <View>
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
        alignContent: 'stretch',
        justifyContent: "flex-start"
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        marginVertical: 50,
    },
    loginHeading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    inputLabel: {
        fontSize: 15
    },
    input: {
        height: 40,
        width: 200,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
    },

})