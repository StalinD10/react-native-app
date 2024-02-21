import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import pdfFile from '../api/pdfFile';
import axios from 'axios';


function PDFScreen() {

    const [document, setDocument] = useState();
    const [data, setData] = useState();
    const [promt, onChangePromt] = useState("");
    const pickDocument = async () => {

        let result: any = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf'
        });
        setDocument(result.assets[0])
    }

    const handleVerify = async () => {
        const formData = new FormData();
        formData.append("pdf", document);
        formData.append("question", promt);
    
        try {
            const resp = await fetch('http://192.168.0.130:5500/api/uploadFile', {
                method: 'POST',
                body: formData,
                
            });    
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
                const data = await resp.json();
            setData(data);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title='Abrir'
                onPress={pickDocument}
            />
            <TextInput
                style={styles.input}
                value={promt}
                onChangeText={onChangePromt}
            />
            <Button
                title='Analizar'
                onPress={handleVerify}
            />
        </View>
    )
}

export default PDFScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});