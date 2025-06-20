import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// navigation props only works in screen component if any nested component then use the useNavigation() hooks, and it will work everywhere 
// export default function HomeScreen({navigation}) {
export default function HomeScreen({route}) {
    const navigation = useNavigation();
    const data = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Text style={styles.text}>{data?.result}</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About', {
                name: "Prabhat"
            })} />
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