import React from 'react';
import { View, Image, Text, TextInput } from 'react-native';

import ButtonCustom from '../common/ButtonCustom';
import TextInputCutom from '../common/TextInputCustom';

this.state = {
      username: '',
      password: '',
    }

export default ({ navigation }) => {
  const handlingRegister = () => {

      navigation.navigate('ProfilePage')

  };
  return (
    <View style={{ margin: 16 }}>
      <Image style={{marginLeft: "auto", marginRight: "auto"}} source={require('../../assets/Jeansip.png')} />
      <Text>Username</Text>
      <TextInputCutom onChangeText={(text) => this.setState({username:text})} />
      <Text>Password</Text>
      <TextInputCutom onChangeText={(text) => this.setState({passsword:text})}/>
      <ButtonCustom
        title="Log"
        color="blue"
        onPress={() => {
          console.log('hai');
        }}
      />
      <ButtonCustom title="Register" color="rgb(11,4,131)" onPress={handlingRegister} />
    </View>
  );
};
