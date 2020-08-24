import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableRow = props => {
    if (props.entry)
    return (
        <View style={{...styles.row, backgroundColor: props.color}}>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.number}</Text></View>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.digits}</Text></View>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.position}</Text></View>
        </View>
    )
    else {
        return (
    
        <View style={{...styles.row, backgroundColor: props.color, paddingLeft: 0}}>
           <Text style = {{...styles.text, color: props.fontColor}}>{props.number}</Text>
            <Text style = {{...styles.text, color: props.fontColor}}>{props.digits}</Text>
            <Text style = {{...styles.text, color: props.fontColor}}>{props.position}</Text>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 16,
        justifyContent: 'space-evenly'
    },
    col: {
        flex: 0.7,
        // justifyContent: 'space-between',
    },
    text:{
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
        
    }
})

export default TableRow;