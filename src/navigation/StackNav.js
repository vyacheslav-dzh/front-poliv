
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainPage from "../pages/MainPage";
import PlantsPage from "../pages/PlantsPage";
import PlantView from "../views/PlantView";
import WateringPage from '../pages/WateringPage'

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown: false
};

const WateringStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
          <Stack.Screen name="Watering" component={WateringPage} />
      </Stack.Navigator>
    );
  }

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Main" component={MainPage} />
    </Stack.Navigator>
  );
}

const PlantsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Plants" component={PlantsPage} />
        <Stack.Screen name="PlantView" component={PlantView} />
    </Stack.Navigator>
  );
}

export { WateringStackNavigator, MainStackNavigator, PlantsStackNavigator };