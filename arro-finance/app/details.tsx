import { View, Text } from 'react-native';

export default function Details({ navigation }) {
  return (
    <View tw="flex items-start flex-col">
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          navigation.goBack();
        }}>
        Details Screen
      </Text>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          navigation.goBack();
        }}>
        Details Screen
      </Text>
    </View>
  );
}
