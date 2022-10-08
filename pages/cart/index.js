import { View, Text, Button, StyleSheet, FlatList, Pressable } from "react-native";
import { commonStyles } from "../../styles/styles";
import { useCartItems, useUserDetails } from "../../context/globalContext";
import { calculateCartTotal, updateCartDataWithDate } from "./utils";
import { getDatabase, ref, set } from 'firebase/database';
import {v4 as uuidv4} from 'uuid'

const CartPage = () => {
    const [cartItems] = useCartItems()
    const [userDetails] = useUserDetails()
    const total = calculateCartTotal(cartItems)


    const submitOrder = () => {
        const updatedCartData = updateCartDataWithDate(cartItems)
        console.log("new cart data", updatedCartData)
        const db = getDatabase()
        const orderId = uuidv4()
        const reference = ref(db, 'orders/' + userDetails.id + '/' + orderId);
        set(reference, updatedCartData);
    }

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
                        onPress={() => { submitOrder() }}
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Text style={{ fontSize: 35, fontWeight: '800' }}>Your cart is empty!</Text>
                <Text style={{ fontSize: 20 }}>Add items to cart to order.</Text>
            </View>)
    }

}

const CartItem = ({ item }) => {
    const [cartItems, setCartItems] = useCartItems()

    const handleRemove = (obj) => {
        const res = cartItems.filter((x) => (
            x.id != obj.id
        ))
        setCartItems(res)
    }

    return (
        <View style={styles.cartItem}>
            <View>
                <Text style={commonStyles.title}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={commonStyles.subTitle}>Qty: {item.quantity}</Text>
                    <Pressable style={{ marginHorizontal: 10 }} onPress={() => { handleRemove(item) }}>
                        <Text style={{ color: 'red' }}>Remove</Text>
                    </Pressable>
                </View>
            </View>

            <Text>${item.quantity * item.price}</Text>
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