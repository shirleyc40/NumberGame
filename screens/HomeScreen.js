import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Roundbutton from '../components/Roundbutton';


class HomeScreen extends React.Component {
    
    render() { 
            return (
                <View style = {styles.screen}>
                    <View style = {styles.logoScreen}>
                        <Image
                            source = {require('../assets/Logo.png')}
                        />
                    </View>
                    <View style = {styles.bottomScreen}>
                        <Text style = {styles.instruction} onPress={()=>this.props.navigation.navigate('Instructions')}>Instructions</Text>
                        <Roundbutton 
                            Bstyle = {styles.start} 
                            Tstyle = {styles.startText} 
                            buttonText = "Start"
                            onPress={()=>this.props.navigation.navigate('Game')}
                            />
                    </View>
                </View>
            );
        
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#9B8AB9' 
    },
    logoScreen:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    bottomScreen: {
        flex: 1,
        alignItems: 'center'
    },
    instruction :{
        textAlign:'center',
        marginBottom: 40,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Montserrat-Bold'
    },
    start: {
        backgroundColor:'#DBB1C5',       
    },
    startText: {
        fontSize: 25,
        color:'white',
        fontFamily: 'Montserrat-Bold'
    }
});

export default HomeScreen;