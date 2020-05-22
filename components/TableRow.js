import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableRow = props => {
    // const display = (data) => {
    //     return (data.map((item, index) => (
            
    //     )))
    // }
    return (
        <View style={{...styles.row, backgroundColor: props.color}}>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.number}</Text></View>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.digits}</Text></View>
            <View style = {styles.col}><Text style = {{...styles.text, color: props.fontColor}}>{props.position}</Text></View>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 10,
        justifyContent: 'center'
    },
    col: {
        flex: 1,
        // justifyContent: 'space-between',
    },
    text:{
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
        
    }
})

export default TableRow;