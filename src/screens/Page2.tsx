import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';

type Page2Props = StackNavigationProp<RootStackParams, 'page2'>;

export const Page2 = () => {
  const navigator = useNavigation<Page2Props>();
  return (
    <View>
      <Text>Page2</Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('page3')}
      />
    </View>
  );
};
