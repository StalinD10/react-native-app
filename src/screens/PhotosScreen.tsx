import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import usePhotos from '../hooks/usePhotos'
import Card from '../components/Card';
import HorizontalSlider from '../components/HorizontalSlider';

function PhotosScreen() {

  const { photos }: any = usePhotos();
  return (
    <View style={{ flex: 1, justifyContent:'center' }}>
      
      <HorizontalSlider infoPhotos={photos} />
    </View>
  )
}

export default PhotosScreen
