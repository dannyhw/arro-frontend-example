import { TouchableHighlight, Text, Pressable, View } from "react-native";

export interface ButtonProps {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        className="bg-green-600 hover:bg-green-500 font-medium rounded-md md:text-sm px-8 py-2.5 self-start"
      >
        <Text className="text-white">{text}</Text>
      </Pressable>
    </View>
  );
};
