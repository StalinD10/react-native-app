import React, { useState } from 'react'
import {  Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function Card({ info }: any) {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <TouchableOpacity style={{ flex: 1 }} onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: info.urls.regular }}
                        style={styles.image}
                    />
                </View>

                <Text style={styles.text}>
                    {info.alt_description}
                </Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>{info.user.username}</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <AntDesign name="like1" size={33} color="#185cf1" style={{ marginHorizontal: 2 }} />
                            <Text style={styles.modalText}>{info.likes}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0.3,
        borderRadius: 15,
        shadowOffset: {
            width: 20,
            height: 30,
        },
    },
    image: {
        flex: 1,
        height: 90,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
    },
    text: {
        textAlign: 'center',
        margin: 30,
        fontSize: 20,
        fontWeight: '500'
    },
    modalContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#56575df2',
        width: 200,
        height: 250,
        marginTop: 220,
        borderRadius: 20
    },
    modal: {
        alignItems: 'center'
    },
    modalText: {
        fontSize: 25,
        fontWeight: '600',
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#185cf1'
    }
})