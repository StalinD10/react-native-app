import React from 'react'
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native'
import usePhotos from '../hooks/usePhotos';
import Card from './Card';
import Carousel from 'react-native-snap-carousel';

const { width: windowWidth } = Dimensions.get('window')

function HorizontalSlider({ infoPhotos }: any) {


  return (
    <View >
      <Text style={{ textAlign: 'center', marginBottom: 80, fontSize: 25, fontWeight: '500' }}>
        Photo list - API
      </Text>
      <View style={{ height: 300 }}>
        <Carousel
          data={infoPhotos}
          renderItem={({ item }) => <Card info={item} />}
          sliderWidth={windowWidth}
          itemWidth={320}
        />

      </View>
    </View>
  )
}

export default HorizontalSlider
