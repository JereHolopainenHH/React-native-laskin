import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    const handleInputChange = (value, name) => {
        if (name === 'num1') setNum1(value.replace(/[^0-9]/g, '')); // regex forces the inputs to be numbers only
        else setNum2(value.replace(/[^0-9]/g, ''));
    }

    const handleSum = () => {
        const sum = Number(num1) + Number(num2);
        setResult(sum);
    }

    const handleSubtract = () => {
        const subtraction = Number(num1) - Number(num2);
        setResult(subtraction);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Result: {result}</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(value) => handleInputChange(value, 'num1')}
                value={num1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(value) => handleInputChange(value, 'num2')}
                value={num2}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.buttonContainer}>
                    <Button title="+" onPress={handleSum} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="-" onPress={handleSubtract} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    buttonContainer: {
        margin: 10,
        padding: 10,
        width: 50,
        borderRadius: 5,
    }
});
