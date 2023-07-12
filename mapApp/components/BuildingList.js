import { View, FlatList, Text, StyleSheet } from "react-native";
import BuildingItem from "./BuildingItem";

function BuildingList({ buildings }) {
  if (!buildings || buildings.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          the building List is not finish yet{" "}
        </Text>
      </View>
    );
  }
  return;
  <FlatList
    data={building}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <BuildingItem buildings={item} />}
  />;
}

export default BuildingList;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
