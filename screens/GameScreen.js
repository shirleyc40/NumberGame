import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TableRow from '../components/TableRow';

const generateRandomNumber = () =>{
    const num = Math.floor(Math.random() * 1000000);
    return num;
}
const GameScreen = props =>{
    const number = generateRandomNumber();
    const [userGuess, setUserGuess] = useState([]);
    return (
        <View>
            <TableRow 
                number = "Number" 
                digits = "Digits Correct" 
                position = "Positions Correct" 
                color = '#807878'
                fontColor = 'white'/>
            <View style = {styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1
    }
})

export default GameScreen;