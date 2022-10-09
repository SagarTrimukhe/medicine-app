import React, { useState, useEffect } from 'react';
import {
  View, FlatList, Text, Button,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import Toast from 'react-native-root-toast';
import { commonStyles } from '../../styles/styles';
import { useUserDetails, useCartItems } from '../../context/globalContext';
import { getAllTransactions } from './utils';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  const [userDetails] = useUserDetails();
  const db = getDatabase();
  const ordersRef = ref(db, '/orders' + `/${userDetails.id}`);
  useEffect(() => {
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val() || {};
      const transactionData = getAllTransactions(data);
      setTransactions(transactionData);
    });
  }, []);

  if (transactions.length > 0) {
    return (
      <View>
        <FlatList
          style={{ width: '100%' }}
          data={transactions}
          renderItem={({ item }) => <TransactionItem item={item} />}
          keyExtractor={(item) => item.order_id + item.id}
        />
      </View>
    );
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Text style={{ fontSize: 35, fontWeight: '800' }}>No order history found.</Text>
    </View>
  );
}

function TransactionItem({ item }) {
  const [cartItems, setCartItems] = useCartItems();

  const handleReorder = () => {
    const orderItem = { ...item };
    delete orderItem.order_id;
    delete orderItem.ordere_date;
    delete orderItem.cost;
    setCartItems([...cartItems, orderItem]);
    Toast.show('Item aded to cart.', {
      duration: Toast.durations.SHORT,
      backgroundColor: '#AAFBA4',
      textColor: 'black',
      position: 0,
    });
  };

  return (
    <View style={{
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1,
    }}
    >
      <View>
        <Text style={commonStyles.title}>{item.name}</Text>
        <Text style={commonStyles.subTitle}>
          Ordered on
          {item.ordered_date}
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
          <Text style={{ ...commonStyles.subTitle, marginRight: 5 }}>
            Qty:
            {item.quantity}
          </Text>
          <Text style={{ ...commonStyles.subTitle, marginLeft: 5 }}>
            Cost: $
            {item.cost}
          </Text>
        </View>

      </View>

      <View>
        <Button title="Reorder" onPress={handleReorder} />
      </View>
    </View>
  );
}

export default TransactionsPage;
