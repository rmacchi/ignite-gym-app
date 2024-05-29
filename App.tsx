import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#202024'
      }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={{
          backgroundColor: '#202024',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {
          fontsLoaded ? <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, color: '#00875F' }}>Welcome to the Gym!</Text> : <View />
        }
      </View>
    </SafeAreaView>
  );
}
