import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen} from './screens/ArticleScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
        <Stack.Screen name="Article" component={ArticleScreen} options={{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
