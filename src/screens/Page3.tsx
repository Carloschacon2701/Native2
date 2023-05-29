import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Page3 = ({navigation}: Props) => {
  return (
    <View>
      <Text>Page3</Text>
      <Button title="Ir a página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
