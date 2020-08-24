import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Roundbutton from '../components/Roundbutton';


// generates random 6 digit number
const generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 1000000);
    return num.toString();
};

const GameOverScreen = props => {
   // navigates to game screen with new number, new game true and highscore
    const newGameHandler = () => {
        props.navigation.navigate('Game', {number: generateRandomNumber(), newGame: true, highScore: props.route.params.highScore})
    }
    // navigates to home
    const homeHandler = () => {
        props.navigation.navigate('Home', {highScore: props.route.params.highScore})
    } 
    return (
        <View style={styles.screen}>
            <View style={styles.background}>
                <ImageBackground source={require('../assets/rocket.png')} style={styles.image}>
                    <Text style={styles.text}>You Win!</Text>
                    <Text style={styles.dets}>{props.route.params.rounds} Tries</Text>
                    <Text style={styles.dets}>Best Score: {props.route.params.highScore} Tries</Text>
                </ImageBackground>
                
            </View>
            <View style= {styles.buttons}>
            <Roundbutton
                Bstyle={styles.new}
                Tstyle={styles.newText}
                buttonText="New Game"
                onPress={newGameHandler}
            />
            <Roundbutton
                Bstyle={styles.home}
                Tstyle={styles.newText}
                buttonText="Main Menu"
                onPress={homeHandler}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#9B8AB9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 45,
        fontFamily: 'Montserrat-Bold',
        color: 'black'
    },
    dets: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: 'black'
    },
    background: {
        height: '35%',
        width: '60%',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        width: '100%',
        alignItems:'center',
        justifyContent: 'space-evenly',
    },
    new: {
        backgroundColor:'#DBB1C5',
        width: '35%',
        height: '20%',
    },
    newText:{
        fontSize: 18,
        color:'black',
        fontFamily: 'Montserrat-Bold'
    },
    home: {
        backgroundColor:'#D88282',
        width: '35%',
        height: '20%',
    }

})

export default GameOverScreen;