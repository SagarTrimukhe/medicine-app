import { View, Pressable, Text, StyleSheet, Image } from "react-native"
import { commonStyles } from "../../styles/styles";

const MedicinesFooter = () => {
    return (
        <View style={styles.medicineFooter}>
            <Pressable style={styles.footerButton}>
                <Image style={commonStyles.tinyIcon} source={require('../../assets/transactions.png')}/>
                <Text>View Transactions</Text>
            </Pressable>

            <Pressable style={styles.footerButton}>
            <Image style={commonStyles.tinyIcon} source={require('../../assets/cart.png')}/>
                <Text>View Cart</Text>
            </Pressable>
        </View>
    )
}

export default MedicinesFooter;

const styles = StyleSheet.create({
    medicineFooter: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width:'100%',
        elevation: 1,
        backgroundColor:'white'
    },
    footerButton: {
        alignItems:'center',
        justifyContent:'center',
        padding:5,
    }
})