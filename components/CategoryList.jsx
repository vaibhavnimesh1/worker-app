import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import React from "react";

const CategoryList = ({ workers }) => {
  if (!workers || workers.length === 0) {
    return <Text style={styles.noDataText}>No workers found</Text>;
  }

  const renderWorkerItem = ({ item }) => (
    <View style={styles.workerBox}>
      <View style={styles.box}>
        <Image
          style={styles.profileImage}
          source={{ uri: item.profileImage }}
        />
        <Image style={styles.flagImage} source={{ uri: item.flagImage }} />
      </View>
      <Text style={styles.workerName}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderWorkerItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      contentContainerStyle={styles.workerContainer}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  workerContainer: {
    padding: 10,
    flex: 1,
  },
  workerBox: {
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  box: {
    position: "relative",
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  flagImage: {
    height: 20,
    width: 20,
    borderRadius: 10,
    position: "absolute",
    top: 5,
    right: 5,
  },
  workerName: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "500",
  },
  noDataText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "gray",
  },
});
