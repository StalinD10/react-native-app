import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import UseTouchable from '../hooks/useTouchable'
import { AntDesign } from '@expo/vector-icons';

function ProfileDevScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/React-icon.png')}
        style={styles.img}
      />
      <Text style={styles.title}>Stalin Sandoval</Text>
      <Text style={styles.subtitle}>Follow me:</Text>
      <View style={styles.containerIcons} >
        <UseTouchable url="https://www.facebook.com/StalinD10San/">
          <AntDesign name="facebook-square" size={60} color="#3b5998" />
        </UseTouchable>
        <UseTouchable url="https://www.instagram.com/stalind1/?hl=es-la">
          <AntDesign name="instagram" size={60} color="#E1306C" />
        </UseTouchable>
      </View>
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
    width: 130,
    height: 115
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