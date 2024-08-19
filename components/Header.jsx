import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";

const Header = ({ searchTerm, setSearchTerm, onCategoryPress }) => {
  const categories = [
    { id: 1, name: "Astrologer", icon: "https://media.istockphoto.com/id/155391040/photo/fortune-tellers-hands.webp?b=1&s=612x612&w=0&k=20&c=XwRozEAj3lOi6J8Fm0gVvT-_YoEdD7XkYlssXXsKarI=" },
    { id: 2, name: "Assistant", icon: "https://media.istockphoto.com/id/514941118/photo/female-assistant-doctor-preparing-injection-in-clinic.webp?b=1&s=612x612&w=0&k=20&c=lr2UVJb2Rq28mCj9neOIFh_v4ESjDS8FPcfY5kcWWCg=" },
    { id: 3, name: "Makeup", icon: "https://media.istockphoto.com/id/1290732868/photo/portrait-of-a-young-woman-with-a-beautiful-smile-stock-photo.webp?b=1&s=612x612&w=0&k=20&c=NJR_iRdiegJ77FSZhamgVVpMU9tYEDjhlgUVKKEtovI=" },
    { id: 4, name: "Mehndi", icon: "https://media.istockphoto.com/id/1174369519/photo/dont-you-just-love-this-pattern.webp?b=1&s=612x612&w=0&k=20&c=FtgfwsMSfS8Gr4fc6q38VwO480MaWy40CIOtw3RLo0Y=" },
    { id: 5, name: "Photographer", icon: "https://images.unsplash.com/photo-1593644311729-d0b478c97d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww" },
  ];

  return (
    <View>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search workers..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryBox}
            onPress={() => onCategoryPress(category.name)}
          >
            <Image style={styles.categoryIcon} source={{ uri: category.icon }} />
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dadada",
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  categoryBox: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  categoryName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
  },
});
