import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Course from "./src/screens/Course";
import About from "./src/screens/About";

export default function App() {
  const Stack = createNativeStackNavigator();
  const titleStyle = {
    headerTitleStyle: { fontSize: 25 },
    headerTitleAlign: "center",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} myProp={"MyProp"} />}
        </Stack.Screen>
        <Stack.Screen name="About" options={titleStyle}>
          {(props) => <About {...props} myProp={"MyProp"} />}
        </Stack.Screen>
        <Stack.Screen name="Courses" options={titleStyle}>
          {(props) => <Course {...props} myProp={"MyProp"} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={titleStyle}>
          {(props) => <Profile {...props} myProp={"MyProp"} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
