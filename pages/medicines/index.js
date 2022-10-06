import { StyleSheet, Text, View, FlatList, TextInput, Image, Button } from 'react-native';
import { useState } from 'react';
import QuantityInput from '../../components/QuantityInput';
import MedicinesFooter from '../../components/MedicinesFooter';
import { commonStyles } from '../../styles/styles';

const MedicinesPage = ({ navigation }) => {
    const [searchText, setSearchText] = useState('')
    const [showQuantityModal, setShowQuantityModal] = useState(false)
    const [selectedMedicineDetails, setSelectedMedicineDetails] = useState({})
    const medicinesData = [
        { id: "1", name: "Dolo", description: "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold.", price: 10 },
        { id: "2", name: "Crocin", description: "test desc", price: 20 },
        { id: "3", name: "Xenon", description: "test desc", price: 30 }
    ]

    return (
        <View style={styles.medicinePageContainer}>
            <View style={styles.searchBox}>
                <Image style={commonStyles.tinyIcon} source={require('../../assets/search.png')} />
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
                    renderItem={({ item }) => (
                        <MedicineItem
                            item={item}
                            setSelectedMedicineDetails={setSelectedMedicineDetails}
                            openQuantityModal={() => { setShowQuantityModal(true) }}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <MedicinesFooter navigation={navigation} />

            {showQuantityModal &&
                <QuantityInput
                    medicineDetails={selectedMedicineDetails}
                    showQuantityModal={showQuantityModal}
                    setShowQuantityModal={setShowQuantityModal}
                />
            }

        </View>
    )
}

const MedicineItem = ({ item, setSelectedMedicineDetails, openQuantityModal }) => {
    return (
        <View style={styles.medicineItem}>
            <View style={{width:'60%'}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>

            <View>
                <Text>{`$${item.price}`}</Text>
                <Button title='Add to cart' onPress={() => {
                    setSelectedMedicineDetails(item)
                    openQuantityModal()
                }} />
            </View>
        </View>
    )
}
export default MedicinesPage

const styles = StyleSheet.create({
    medicinePageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        width: '100%',
        height: '100%'
    },
    searchBox: {
        borderWidth: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        marginVertical: 10
    },
    input: {
        height: 20,
        width: 300,
        margin: 10,
    },
    medicinesListContainer: {
        height: 500,
        width:"100%",
        justifyContent: "space-around"
    },
    medicineItem: {
        width: '100%',
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10,
        margin: 5
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    description: {
        fontSize: 15,
    }
})