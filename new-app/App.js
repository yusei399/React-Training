import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { ArticleScreen} from './screens/ArticleScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClipScreen } from './screens/ClipScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{headerShown : false}}/>
        <Tab.Screen name="ClipTab" component={ClipScreen} options={{headerShown : false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
