import React, { useCallback } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Menu from "../component/Menu";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Home = (props) => {
  const [fontsLoaded] = useFonts({
    SignikaNegative: require("../../assets/fonts/Signika_Negative/static/SignikaNegative-Regular.ttf"),
    SignikaNegativeBold: require("../../assets/fonts/Signika_Negative/static/SignikaNegative-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[styles.homeContainer, styles.signikaFont]}
      onLayout={onLayoutRootView}
    >
      <View style={styles.introContainer}>
        <Image
          source={require("../../assets/edu-logo.jpg")}
          resizeMode="contain"
          style={styles.homeImage}
        />
        <Text
          style={[
            styles.homeHeader,
            styles.signikaFont,
            { fontWeight: "bold" },
          ]}
        >
          WELCOME
        </Text>
        <Text style={[styles.homeHeader, { color: "green" }]}>
          START JOURNEY
        </Text>
        <Text
          style={[styles.paraStyle, styles.signikaFont, { fontWeight: "bold" }]}
        >
          Get started with some of the most popular technologies & add it to
          your arsenal
        </Text>
      </View>
      <View>
        <View style={styles.lineStyle}></View>
        <Menu />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
  },
  introContainer: {
    paddingHorizontal: 15,
  },
  homeImage: {
    width: "100%",
    width: "100%",
    aspectRatio: 1,
    paddingBottom: 20,
    display: "flex",
    alignItems: "stretch",
  },
  homeHeader: {
    fontSize: 38,
    textAlign: "center",
    fontWeight: 500,
  },
  paraStyle: {
    fontSize: 20,
    marginTop: 20,
    textAlign: "center",
    color: "#7d7d7d",
    lineHeight: 30,
    textTransform: "uppercase",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#b2bec3",
  },
  signikaFont: {
    fontFamily: "SignikaNegative",
  },
});

export default Home;
