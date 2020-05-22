import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InstructionScreen = props => {
    return(
    <View style = {styles.screen}>
        <Text style = {styles.rule}>Rules</Text>
        <Text style = {styles.text}>Goal: Guess the random number</Text>
        <Text style = {styles.text}>There are 6 digits and can have repeating numbers!</Text> 
        <Text style = {styles.text}>For every guess, you will be told how many digits and positions you guessed correctly. It is up to you to logically deduce the number!</Text>
        <Text style = {styles.text}>Try to use the least tries possible and show off to your friends!</Text>    
    </View> 

    )}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#9B8AB9',
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    rule: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 30,
        color: 'black'
    },
    text: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color:'white',
        marginBottom: 20
    }
});

export default InstructionScreen;