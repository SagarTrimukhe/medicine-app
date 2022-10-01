import { StyleSheet, Text, View, FlatList, TextInput, Image } from 'react-native';
import { useState } from 'react';
const MedicinesPage = () => {
    const [searchText, setSearchText] = useState('')
    const medicinesData = [
        { id: "123", name: "Dolo", description: "test desc", price: 10 },
        { id: "34", name: "Crocin", description: "test desc", price: 20 },
        { id: "43", name: "Xenon", description: "test desc", price: 30 }
    ]
    return (
        <View style={styles.medicinePageContainer}>
            {/* <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle} >Medicines</Text>
            </View> */}

            <View style={styles.searchBox}>
                <Image style={styles.tinyIcon} source={require('../../assets/search.png')}/>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search medicine."
                />
            </View>

            <View style={styles.medicinesListContainer}>
                <FlatList
                    data={medicinesData}
                    renderItem={medicineItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const medicineItem = ({item}) => {
    return (
        <View style={styles.medicineItem}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
}
export default MedicinesPage

const styles = StyleSheet.create({
    medicinePageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        width: '100%'
    },
    pageTitleContainer: {
        width: '100%',
        backgroundColor: 'powderblue',
        padding: 10,
        borderBottomWidth: 4
    },
    pageTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 15,
    },
    tinyIcon:{
        height:20,
        width:20,
    },
    searchBox:{
        borderWidth: 1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
        padding:5,
        marginVertical:10
    },
    input: {
        height: 20,
        width: 300,
        margin: 10,
    },
    medicinesListContainer: {
        height: 500,
        justifyContent: "space-around"
    },
    medicineItem: {
        height: 100,
        width: 300,
        backgroundColor: 'white',
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        alignItems:'flex-start',
        padding: 10,
        justifyContent: 'space-between',
        margin:5
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    description: {
        fontSize: 15,
    }
})