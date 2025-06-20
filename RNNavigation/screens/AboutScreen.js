import {View, Text, StyleSheet, Button} from 'react-native';
import { useLayoutEffect } from 'react';

export default function AboutScreen({navigation, route}) {
    const {name} = route.params;
    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        })
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen {name}</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate("Home", {
                result: "Result data from about"
            })} />
            <Button title="Update the name" onPress={() => navigation.setParams({name: "Ajay"})} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16
    }
})