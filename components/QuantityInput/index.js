import React from 'react'
import { View, TextInput, StyleSheet, Text, Button, Modal } from 'react-native'
import { commonStyles } from '../../styles/styles'
import { useState } from 'react'

const QuantityInput = ({ medicineName, price, showQuantityModal, setShowQuantityModal }) => {
    const [quantity, setQuantity] = useState(0)

    const addItemtoCart = () => {

    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={showQuantityModal}
                style={styles.modalView}
            >
                <View style={styles.quantityInput}>
                    <Text style={commonStyles.title}>{medicineName}</Text>
                    <Text style={commonStyles.subTitle}>{`Per Item cost: ${price}`}</Text>
                    <TextInput
                        value={quantity}
                        style={commonStyles.input}
                        placeholder='Enter Quantity'
                        onChangeText={setQuantity}                        
                    />

                    <Button
                        title='Add'
                        onPress={addItemtoCart}
                    />

                    <Button
                        title='Cancel'
                        onPress={() => { setShowQuantityModal(false) }}
                        color='red'
                    />
                </View>
            </Modal>
        </View>
    )
}

export default QuantityInput

const styles = StyleSheet.create({
    centeredView: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,       
    },
    quantityInput: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})
