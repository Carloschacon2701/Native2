import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Page1 = ({navigation}: Props) => {
  return (
    <View>
      <Text>Page1</Text>
      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('page2')}
      />
    </View>
  );
};
