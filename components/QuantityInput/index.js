import React, { useState } from 'react';
import {
  View, TextInput, StyleSheet, Text, Button, Modal,
} from 'react-native';
import Toast from 'react-native-root-toast';
import commonStyles from '../../styles/styles';
import { useCartItems } from '../../context/globalContext';

function QuantityInput({ medicineDetails, showQuantityModal, setShowQuantityModal }) {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useCartItems();

  const addItemtoCart = () => {
    setCartItems([...cartItems, { ...medicineDetails, quantity }]);
    Toast.show('Item aded to cart.', {
      duration: Toast.durations.SHORT,
      backgroundColor: '#AAFBA4',
      textColor: 'black',
      position: 0,
    });
    setShowQuantityModal(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showQuantityModal}
      style={styles.modalView}
    >
      <View style={styles.quantityInput}>
        <Text style={commonStyles.title}>{medicineDetails.name}</Text>
        <Text style={commonStyles.subTitle}>{`Per item cost: $${medicineDetails.price}`}</Text>
        <TextInput
          value={quantity}
          style={commonStyles.input}
          placeholder="Enter Quantity"
          onChangeText={setQuantity}
          keyboardType="numeric"
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ margin: 5, width: 100 }}>
            <Button
              title="Add"
              onPress={addItemtoCart}
            />
          </View>

          <View style={{ margin: 5, width: 100 }}>
            <Button
              title="Cancel"
              onPress={() => { setShowQuantityModal(false); }}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default QuantityInput;

const styles = StyleSheet.create({
  quantityInput: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 2,
    elevation: 3,
  },
});
