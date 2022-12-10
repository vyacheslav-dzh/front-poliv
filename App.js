import { NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PlantView from "./src/views/PlantView";
import TabNav from './src/navigation/TabNav';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
        {/* <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlantView"
              component={PlantView}
              options={{ headerShown: false }}
            />
        </Stack.Navigator> */}
        <TabNav/>
    </NavigationContainer>
  )
}


export default App
