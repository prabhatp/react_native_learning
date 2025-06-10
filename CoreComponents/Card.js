import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, content }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        marginBottom: 16,
        elevation: 3, // Add shadow on Android
        shadowColor: '#000', // Add shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    content: {
        fontSize: 16,
    },
});

export default Card;