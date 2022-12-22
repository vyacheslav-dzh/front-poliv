import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNav from './src/navigation/TabNav';
import { createContext, useMemo, useState } from 'react';
import ConnectPage from './src/pages/ConnectPage';
import {AuthContext} from './src/AuthContext'

const Stack = createNativeStackNavigator();

const App = () => {
  const [isSinged, setIsSinged] = useState(false)
  const authContext = useMemo(
    () => ({
      connect: async (key) => { setIsSinged(true) },
      unconnect: () => { setIsSinged(false) },
      state: () => {return isSinged}  
    })
  )
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isSinged ? (
          <TabNav/>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Connect' component={ConnectPage}/>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
    
  )
}

export default App
