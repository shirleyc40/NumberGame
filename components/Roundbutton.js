import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Roundbutton = props => {
    return (
        <TouchableOpacity style={{... styles.start, ...props.Bstyle}} onPress={props.onPress}>
            <Text style={props.Tstyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    start: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:30,
    },
})

export default Roundbutton;