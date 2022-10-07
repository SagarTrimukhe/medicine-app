import { View, FlatList, Text, Button } from "react-native";
import { commonStyles } from "../../styles/styles";
import { useUserDetails } from "../../context/globalContext";
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from "react";
import { getAllTransactions } from "./utils";

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([])
  

    const [userDetails] =  useUserDetails()
    const db = getDatabase()
    const ordersRef = ref(db, '/orders' + '/' + userDetails.id)
    useEffect(() => {
        onValue(ordersRef, (snapshot) => {
            console.log(snapshot.val())
            const data = snapshot.val()
            const transactionData = getAllTransactions(data)
            console.log(transactionData)
            setTransactions(transactionData)
        })
    }, [])

    return (
        <View>
            <FlatList
                style={{ width: '100%' }}
                data={transactions}
                renderItem={({ item }) => <TransactionItem item={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const transactions = {
    "252fe0aa-0443-46e6-9e35-8a97209d93b3": [
        {
            "description": "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold",
            "id": 1,
            "name": "Dolo 650",
            "price": 10,
            "quantity": "1"
        },
        {
            "description": "Crocin Advance Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold.",
            "id": 2,
            "name": "Crocin",
            "price": 20,
            "quantity": "6"
        }
    ],
    "c41ac64e-965b-410a-afb0-07bf4d1d1455": [
        {
            "description": "Dolo 650 Tablet helps relieve pain and fever by blocking the release of certain chemical messengers responsible for fever and pain. It is used to treat headaches, migraine, nerve pain, toothache, sore throat, period (menstrual) pains, arthritis, muscle aches, and the common cold",
            "id": 1,
            "name": "Dolo 650",
            "price": 10,
            "quantity": "1"
        }
    ],
    "order1": [
        {
            "description": "test description",
            "name": "Dolo 650",
            "price": 10,
            "quantity": "8"
        }
    ],
    "order5": [
        {
            "description": "test description",
            "name": "Dolo 650",
            "price": 10,
            "quantity": "8"
        }
    ]
}

const TransactionItem = ({ item }) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', padding: 20, borderBottomWidth:1}}>
            <View>
                <Text style={commonStyles.title}>{item.name}</Text>
                <Text style={commonStyles.subTitle}>Ordered on {item.ordered_date}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{...commonStyles.subTitle, marginRight:5}}>Qty: {item.quantity}</Text>
                    <Text style={{...commonStyles.subTitle, marginLeft:5}}>Cost: ${item.cost}</Text>
                </View>
               
            </View>

            <View>
                <Button title="Reorder" />
            </View>
        </View>
    )
}

export default TransactionsPage;
