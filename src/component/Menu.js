import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuStyles}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/null/home-page.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Courses")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/avantgarde/100/null/test-passed.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/color-glass/48/null/gender-neutral-user.png",
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/color-glass/48/000000/about--v1.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "100vw",
    gap: 10,
  },
  buttonStyle: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  iconStyle: {
    width: 55,
    height: 55,
  },
});

export default Menu;
