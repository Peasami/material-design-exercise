import React, { useState } from 'react';
import MainAppbar from '../components/MainAppbar';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function App() {

    const [formData, setFormData] = useState({username: '', password: ''});
    const [showError, setShowError] = useState(false);

    const validateAndSubmit = () => {
        setShowError(true);
        if (formData.username.length > 2 && formData.password.length > 8) {
            setFormData({username: '', password: ''});
            setShowError(false);
        }
    }

    return (
        <>
            <MainAppbar title="Login" />
            <View style={styles.container}>
                <TextInput 
                    label='Username' 
                    style={styles.input_field} 
                    value={formData.username} 
                    onChangeText={text => setFormData({...formData, username: text})}
                    error={formData.username.length < 3 && showError}
                />
                <TextInput 
                    label='Password' 
                    style={styles.input_field} 
                    keyboardType='visible-password' 
                    value={formData.password} 
                    onChangeText={text => setFormData({...formData, password: text})}
                    error={formData.password.length < 9 && showError}
                />
                <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submdit</Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16, 8, 16, 8),
    },
    button: {
        margin: (16, 8, 0, 8),
    },
});