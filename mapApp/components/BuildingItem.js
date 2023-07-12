import { Image, View, Pressable, Text, StyleSheet } from "react-native";

function BuildingItem({ buildings, onSelect }) {
  return;

  <Pressable onPress={onSelect}>
    <View>
      <Image source={{ uri: buildings.imageUri }}></Image>
      <Text>{buildings.title} </Text>
    </View>
  </Pressable>;
}

export default BuildingItem;

const styles = StyleSheet.create({});
