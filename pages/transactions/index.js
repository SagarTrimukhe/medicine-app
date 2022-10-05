import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import { commonStyles } from "../../styles/styles";

const TransactionsPage = () => {
    const transactions = [
        { id: "12312", ordered_date: "10/10/2022", name: "Dolo", quantity: 12, cost: 1000 },
        { id: "12312", ordered_date: "10/10/2022", name: "Dolo", quantity: 12, cost: 1000 },
        { id: "12312", ordered_date: "10/10/2022", name: "Dolo", quantity: 12, cost: 1000 }
    ]
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
