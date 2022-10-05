import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';

const Dashboard = ({ navigation }) => {
    const username = 'Sagar'

    return (
        <View style={styles.dashboardPageContainer}>
            <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle}>{`Welcome ${username}`}</Text>
                <Pressable onPress={()=>{navigation.navigate("Login")}}>
                <Text style={{borderWidth:1, padding: 10, borderRadius: 5, elevation: 1, shadowColor:'red'}}>Logout</Text>
                </Pressable>
            </View>

            <View style={styles.tilesContainer}>
                <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('Medicines') }}>
                    <Text style={styles.tileText}>Order Medicines</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('Doctor Appointment') }}>
                    <Text style={styles.tileText}>Book Doctor Appointment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tile} onPress={() => { navigation.navigate('Lab Appointment') }}>
                    <Text style={styles.tileText}>Book Lab Appointment</Text>
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
        width: '100%'
    },
    pageTitleContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width: '100%',
        backgroundColor: 'powderblue',
        padding: 10,
        borderBottomWidth: 4,
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 30
    },
    tilesContainer: {
        height: 500,
        justifyContent: "space-around"
    },
    tile: {
        height: 100,
        width: 300,
        backgroundColor: 'white',
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center'
    },
    tileText: {
        fontSize: 20,
        fontWeight: '600'
    }
})