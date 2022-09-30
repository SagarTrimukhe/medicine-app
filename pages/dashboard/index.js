import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

const Dashboard = () => {
    const username = 'Sagar'

    const handleClick = (actionName) => {
        console.log(actionName)
    }

    return (
        <View style={styles.dashboardPageContainer}>
            <View style={styles.welcomeTitleContainer}>
            <Text style={styles.welcomeTitle}>{`Welcome ${username}`}</Text>
            </View>

            <View style={styles.tilesContainer}>
                <TouchableOpacity style={styles.tile} onPress={()=>{handleClick("doctor")}}>
                    <Text style={styles.tileText}>Book Doctor Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tile} onPress={()=>{handleClick("lab")}}>
                    <Text style={styles.tileText}>Book Lab Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tile} onPress={()=>{handleClick("medicine")}}>
                    <Text style={styles.tileText}>Order Medicines</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    dashboardPageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        width:'100%'
    },
    welcomeTitleContainer:{
        width: '100%', 
        backgroundColor:'powderblue',
        padding: 10,
        borderBottomWidth: 4
    },
    welcomeTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
    },
    tilesContainer:{
        height:500,
        justifyContent:"space-around"
    },
    tile: {
        height:100,
        width:300,
        backgroundColor: 'white',
        borderColor: "grey",
        borderWidth: 2,
        borderRadius:10,
        alignItems: 'center',
        padding: 10,
        justifyContent:'center'
    },
    tileText: {
        fontSize:20,
        fontWeight:'600'
    }
})