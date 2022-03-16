import React from 'react';
import { TextInput } from 'react-native';

export default (props) => (
  <TextInput style={{ backgroundColor: 'rgba(122, 255, 231, 0.8)', padding: 8, borderRadius: 8 }} onChangeText={props.onChangeText} />
);
