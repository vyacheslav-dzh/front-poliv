
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { tab_icons } from '../Images';
import { WateringStackNavigator, MainStackNavigator, PlantsStackNavigator } from './StackNav';
import { View, Image, Platform } from 'react-native';


const Tab = createBottomTabNavigator();

const TabNav = () => {
  const options = {
      headerShown: false,
      tabBarShowLabel: false
  }
  return (
      <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let styles = focused 
          ? {
            width: size*3, 
            height: size*3,
            borderRadius: Platform.IOS ? '50%' : 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#292929',
            transform: [{
              translateY: -size
            }]
          } 
          : {}

          if (route.name === 'Main') {
            icon = focused ? tab_icons.active.main : tab_icons.inactive.main
          } else if (route.name === 'Plants') {
            icon = focused ? tab_icons.active.plants : tab_icons.inactive.plants;
          } else if (route.name === 'Watering') {
            icon = focused ? tab_icons.active.watering : tab_icons.inactive.watering;
          }

          return (
              <View style={styles}>
                  <Image source={icon} style={{width: size*1.25, height: size*1.25}}/>
              </View>
          )
        }
      })}
    >
        <Tab.Screen
          name='Watering'
          component={WateringStackNavigator}
          options={options}
        />
        <Tab.Screen
          name='Main'
          component={MainStackNavigator}
          options={options}
        />
        <Tab.Screen
          name='Plants'
          component={PlantsStackNavigator}
          options={options}
        />
     </Tab.Navigator>
  )
}

export default TabNav;