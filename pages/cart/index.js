import { View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";
import { commonStyles } from "../../styles/styles";
import { useCartItems } from "../../context/cartContext";

const CartPage = () => {
    // const cartItems = [
    //     { id: "1234", name: "Dolosdasasdasdd dasda", quantity: 12, price: 120 },
    //     { id: "123", name: "Crocin", quantity: 2, price: 10 }
    // ]
    const [cartItems, setCartItems] = useCartItems()
    console.log(cartItems, setCartItems)
    const total = 100

    if (cartItems.length > 0) {
        return (
            <View style={styles.pageContainer}>
                <View style={styles.itemsHeaderLayout}>
                    <Text style={styles.tableHeader}>Items</Text>
                    <Text style={styles.tableHeader}>Price</Text>
                </View>

                <FlatList
                    style={{ width: '100%' }}
                    data={cartItems}
                    renderItem={({ item }) => <CartItem item={item} />}
                    keyExtractor={item => item.id}
                />

                <View style={{ width: '100%', alignItems: 'flex-end', paddingHorizontal: 25 }}>
                    <Text style={commonStyles.title}>Total: ${total}</Text>
                </View>

                <View style={{ margin: 10, width: '50%' }}>
                    <Button
                        title="Order"
                        onPress={() => { }}
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}>
                <Text style={{fontSize:35, fontWeight:'800'}}>Your cart is empty!</Text>
                <Text style={{fontSize:20}}>Add items to cart to order.</Text>
            </View>)
    }

}

const CartItem = ({ item }) => {
    return (
        <View style={styles.cartItem}>
            <View>
                <Text style={commonStyles.title}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={commonStyles.subTitle}>Qty: {item.quantity}</Text>
                    <Pressable style={{ marginHorizontal: 10 }}>
                        <Text style={{ color: 'red' }}>Remove</Text>
                    </Pressable>
                </View>
            </View>

            <Text>${item.price}</Text>
        </View>
    )
}

export default CartPage;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        width: '100%',
        height: '100%'
    },
    cartItem: {
        marginVertical: 15,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    itemsHeaderLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderBottomWidth: 2
    },
    tableHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})