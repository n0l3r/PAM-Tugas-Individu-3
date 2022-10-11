
import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Result from './screens/Result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="auto" backgroundColor={'green'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Result/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'green',
  },
});
