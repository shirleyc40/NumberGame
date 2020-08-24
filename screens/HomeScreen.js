import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Roundbutton from '../components/Roundbutton';

// generates a random 6 digit number
const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 1000000);
    return num.toString();
};

const HomeScreen = (props) => {
    // sets the high score
    let high = props.route.params? props.route.params.highScore : 200;
    return (
        <View style={styles.screen}>
            {/* Logo */}
            <View style={styles.logoScreen}>
                <Image
                    source={require('../assets/Logo.png')}
                />
            </View>
            <View style={styles.bottomScreen}>
                {/* Instructions button */}
                <Text style={styles.instruction} onPress={() => props.navigation.navigate('Instructions')}>Instructions</Text>
                {/* Start button, passes a random 6 number, high score and game status */}
                <Roundbutton
                    Bstyle={styles.start}
                    Tstyle={styles.startText}
                    buttonText="Start"
                    onPress={() => props.navigation.navigate('Game', { number: generateRandomNumber(), newGame:false, highScore: high })}
                />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#9B8AB9'
    },
    logoScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomScreen: {
        flex: 1,
        alignItems: 'center'
    },
    instruction: {
        textAlign: 'center',
        marginBottom: 40,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
    start: {
        backgroundColor: '#DBB1C5',
        width: '40%',
        height: '15%',
    },
    startText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    }
});

export default HomeScreen;