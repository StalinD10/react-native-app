import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import UseTouchable from '../hooks/useTouchable'
import { AntDesign } from '@expo/vector-icons';

function ProfileDevScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../img/background.jpg")} resizeMode="cover" style={{width:"100%", height:250, paddingTop:35, alignItems:"center", marginBottom:300}}>
      <Image
        source={require('../img/sando.png')}
        style={styles.img}
      />
      <Text style={styles.title}>Stalin Sandoval</Text>
      <Text style={styles.subtitle}>Follow me:</Text>
      <View style={styles.containerIcons}  >
        <UseTouchable url="https://www.kwai.com/es">
          <Image source={require("../img/kwai.png")} style={styles.imgKawai} />
        </UseTouchable>
        <UseTouchable url="https://www.instagram.com/stalind1/?hl=es-la">
          <AntDesign name="instagram" size={60} color="#E1306C" />
        </UseTouchable>
      </View>
      </ImageBackground>
    </View>
  )
}

export default ProfileDevScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90
  },
  img: {
    width: 220,
    height: 200,
    borderRadius:200
  },
  imgKawai: {
    width: 80,
    height: 80,
    borderRadius:200
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    marginTop: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 30
  },
  containerIcons: {
    flexDirection: 'row'
  }
})