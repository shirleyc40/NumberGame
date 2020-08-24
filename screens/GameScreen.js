import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Keyboard, KeyboardAvoidingView, Text } from 'react-native';
import TableRow from '../components/TableRow';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const GameScreen = props => {
    // if new game, then set to default
    useFocusEffect(
        React.useCallback(() => {
          if (props.route.params.newGame) {
              setUserGuess([]);
              setRounds(0);
              props.navigation.setParams({newGame: false})
          }
        }, [props.route.params.newGame])
      );
    // the target number
    const number = props.route.params.number;

    // existing high score
    let high = props.route.params.highScore;

    const [userGuess, setUserGuess] = useState([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [rounds, setRounds] = useState(0);

    // sets the current guess
    const guessInputHandler = (enteredNum) => {
        setCurrentGuess(enteredNum.replace(/[^0-9]/g, ''));
    }

    // checks the guess and dismisses keyboard, called upon input completion
    const doneHandler = (guess) => {
        Keyboard.dismiss();
        checkInput(guess);
        setTimeout(() => setCurrentGuess(''), 1000);
    }
    // returns the number of correct digits and correct positions
    const checkDigits_Pos = (guess) => {
        var looked = [];
        var pos = 0;
        var count = 0;
        for (var i = 0; i < guess.length; i++) {
            var char = guess.charAt(i);
            if (number.includes(char) && !looked.includes(char)) {
                count++;
                looked.push(guess.charAt(i));
            }
            if (number.charAt(i) === guess.charAt(i)) pos++;
        }
        return [count, pos]
    }
    // checks the input for a win, if win then sets the high score and navigates to game over screen
    const checkInput = (guess) => {
        setRounds(curRounds => curRounds + 1);
        if (guess != number) {
            const data = checkDigits_Pos(guess);
            const numDigits = data[0];
            const numPos = data[1];
            setUserGuess((userGuess) => [...userGuess, { key: Math.random().toString(), number: guess, digits: numDigits, position: numPos }])

        } else {
            if (rounds+1 < high) high = rounds+1;
            props.navigation.navigate('GameOver', { rounds: rounds+1, highScore : high });
        }

    }
    return (
        <View style={styles.screen}>
        {/* The header of the table */}
            <TableRow
                number="Number"
                digits="Digits Correct"
                position="Positions Correct"
                color='#807878'
                fontColor='white' />
            {/* Divider */}
            <View style={styles.line}></View>
            {/* Entry display */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }} >
                <View style={styles.list}>
                    <FlatList
                        data={userGuess}
                        renderItem={({ item, index }) => (
                            <View>
                                <TableRow
                                    id={item.key}
                                    number={item.number}
                                    digits={item.digits}
                                    position={item.position}
                                    color={(index == userGuess.length - 1) ? '#C4C4C4' : null}
                                    entry 
                                />
                                <View style={styles.line}></View>
                            </View>)
                        }
                    />
                {/* pin style text input */}
                    <View style={styles.section}>
                        <SmoothPinCodeInput
                            value={currentGuess}
                            onTextChange={guessInputHandler}
                            codeLength={6}
                            onFulfill={doneHandler}
                        // cellStyle = {{borderColor: 'white', borderWidth: 2}}
                        // textStyle = {{color: 'white', fontSize: 24}}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#DFDADA'
    },
    line: {
        borderBottomWidth: 1
    },
    section: {
        alignItems: 'center',
        // backgroundColor: '#807878',
        padding: 10
    },
    list: {
        flexGrow: 1,
        justifyContent: "flex-end",
    }
})

export default GameScreen;

// console.log(userGuess);
    // const storeData = async (value) => {
    //     try {
    //       await AsyncStorage.setItem('highScore', value)
    //     } catch (e) {
    //       console.log(e)
    //     }
    //   }
    //   const getData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('highScore')
    //       if(value !== null) {
    //         highScore = value;
    //       }
    //     } catch(e) {
    //       // error reading value
    //     }
    //   }

    //android:roundIcon="@mipmap/ic_launcher_round"