import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import UseTouchable from '../hooks/useTouchable';
import { Entypo } from '@expo/vector-icons';



function IconsScreen() {


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>

      <Text style={{ fontSize: 25, fontWeight: '400' }}>Social Networks</Text>

      <UseTouchable url="https://www.twitch.tv/stalindav" title='Twitch'>
        <FontAwesome5 name="twitch" size={80} color="#6441A4" />
      </UseTouchable>

      <UseTouchable url="https://www.reddit.com/user/StalinDavid" title='Reddit'>
        <FontAwesome5 name="reddit" size={80} color="orange" />
      </UseTouchable>

      <UseTouchable url="https://www.linkedin.com/in/david-sandoval-sacoto-63b736247/" title='Linkedin'>
        <AntDesign name="linkedin-square" size={80} color="#0e76a8" />
      </UseTouchable>

      <UseTouchable url="https://github.com/StalinD10" title='Github'>
        <AntDesign name="github" size={80} color="black" />
      </UseTouchable>
      <UseTouchable url="https://www.pinterest.com/davidrokero/" title='Pinterest'>
        <Entypo name="pinterest-with-circle" size={80} color="red" />
      </UseTouchable>



    </View>
  )
}

export default IconsScreen
