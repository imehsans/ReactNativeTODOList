import react from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const Task = ({text}) => {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}>
                </TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding:15,
        borderRadius:10,
        flexDirection: "row",
        marginBottom:20,
        justifyContent: "space-between",
        alignItems: "center",
        },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        gap:15, 
        flexWrap: 'wrap', 
    },
    square:{
        height:24,
        width:24,
        backgroundColor: '#55BCF6',
        borderRadius:5,
        opacity:0.4,

    },
    itemText:{
        maxWidth:'80%',
    },
    circular:{
        border: '#55BCF6 solid',
        borderWidth:2,
        padding:2,
        height:12,
        width:12,
        borderRadius:5,
        
    },
}) 

export default Task

