import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";
import workersData from "../../constants/workers.js";

const Category = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
console.log(selectedCategory)
  const filteredWorkers = workersData.filter(
    (worker) =>
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || worker.category === selectedCategory)
  );

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  return (
    <View style={styles.container}>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCategoryPress={handleCategoryPress}
      />
      {/* Pass filteredWorkers to CategoryList */}
      <CategoryList workers={filteredWorkers} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
