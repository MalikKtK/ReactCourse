import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Malik #1', age: 20 },
        { name: 'Malik #2', age: 45 },
        { name: 'Malik #3', age: 32 },
        { name: 'Malik #4', age: 27 },
        { name: 'Malik #5', age: 53 },
        { name: 'Malik #6', age: 30 },
        { name: 'Malik #7', age: 23 },
        { name: 'Malik #8', age: 24 },
        { name: 'Malik #9', age: 25 },
    ];

    return ( 
    <FlatList
    showsHorizontalScrollIndicator = {false}
    ketExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({ item }) => {
        return (
        <Text style={styles.textStyle}>
            {item.name} - Age {item.age
            }</Text>
        );
    }} 
    />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;