import React from 'react'
import {Button, View} from 'react-native'

export default (props) => (
  <View style={{backgroundColor: props.color, padding: 8, marginTop:8, borderRadius: 16, }}>
    <Button color={props.color} title={props.title} onPress={props.onPress} />
  </View>
)