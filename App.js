import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';

//Importação das telas
import HomeScreen from './screens/HomeScreen';
import NovaReceitaScreen from './screens/NovaReceitaScreen';
import ReceitaScreen from './screens/ReceitaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<GestureHandlerRootView style={{ flex: 1 }}>
<PaperProvider>
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Receita" component={ReceitaScreen} />
        <Stack.Screen name="Nova Receita" component={NovaReceitaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </GestureHandlerRootView>
  );
}
