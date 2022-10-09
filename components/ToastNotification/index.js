import { Modal, View, Text, StyleSheet, Image, Pressable } from 'react-native'
import { useState } from 'react'
import { commonStyles } from '../../styles/styles'

const ToastNotification = ({
    message,
    onClose
}) => {
    const [showModal, setShowModal] = useState(true)

    return (
        <Modal
            transparent={true}
            visible={showModal}
            style={{ justifyContent: 'center' }}
        >
            <View style={styles.modalBackground}>
                <View flexDirection='row'>
                    <Image style={commonStyles.tinyIcon} source={require("../../assets/checkmark.png")} />
                    <Text style={{ marginHorizontal: 5 }}>{message}</Text>
                </View>
                <Pressable onPress={onClose}>
                <Image style={commonStyles.tinyIcon} source={require("../../assets/close.png")} />
                </Pressable>
            </View>
        </Modal>

    )
}

export default ToastNotification

const styles = StyleSheet.create({
    modalBackground: {
        height: 50,
        width: "80%",
        position: 'absolute',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        marginHorizontal: 50,
        padding: 10
    }
})