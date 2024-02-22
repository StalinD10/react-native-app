import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as ExpoDocumentPicker from "expo-document-picker";

import axios from 'axios';
import pdfFile from '../api/pdfFile';


function PDFScreen() {

    const [pdfDoc, setPdfDoc] = useState()
    const [question, setQuestion] = useState('')
    const [result, setResult] = useState('')

    const handleFilePicker = async () => {
        let result: any = await ExpoDocumentPicker.getDocumentAsync({ copyToCacheDirectory: true, 
           multiple:true , });
        console.log(result.assets[0])
        setPdfDoc(result.assets[0])
    }


    const handleUpload = async () => {
        try {
           const data:any = {
            question: question,
            pdf: pdfDoc
           }
            console.log(data);
            const response = await fetch("https://moviles-back.onrender.com/api/uploadFile", {
                method: 'POST',
                body: data
            })
            console.log(response)
            if (response.ok) {
                setQuestion('')
                const responseJSON = await response.json()
                setResult(responseJSON.text)
            }


        } catch (error) {
            console.log(error)
        }

    }

    console.log(result)
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title={'Select PDF'} onPress={handleFilePicker} />
            <TextInput style={styles.input} value={question} onChangeText={setQuestion}
                placeholder={'Ingresa tu pregunta'} />
            <Button title={'send'} onPress={handleUpload} />
            <Text>{result}</Text>
        </View>
    )
}

export default PDFScreen

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})