import React from 'react'
import { View, TextInput, StyleSheet, Text, Button, Modal } from 'react-native'
import { commonStyles } from '../../styles/styles'
import { useState } from 'react'
import { useCartItems } from '../../context/cartContext'
const QuantityInput = ({ medicineDetails, showQuantityModal, setShowQuantityModal }) => {
    const [quantity, setQuantity] = useState(0)
    const [cartItems, setCartItems] = useCartItems()
    const addItemtoCart = () => {
        setCartItems([...cartItems, {...medicineDetails, quantity: quantity}])
    }
    console.log(cartItems)
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={showQuantityModal}
            style={styles.modalView}
        >
            <View style={styles.quantityInput}>
                <Text style={commonStyles.title}>{medicineDetails.name}</Text>
                <Text style={commonStyles.subTitle}>{`Per Item cost: ${medicineDetails.price}`}</Text>
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
    )
}

export default QuantityInput

const styles = StyleSheet.create({
    quantityInput: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        elevation: 3,
    }
})
