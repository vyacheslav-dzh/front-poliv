import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import PlantCard from './src/components/PlantCard';
import PlantsPageHeader from './src/components/PlantsPageHeader';
import  { plants_page }  from './src/Images'
import { dp } from './src/utils';


export default function App() {
  const data = [
    {id: 0}, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }
  ]
  const [searchPhrase, setSearchPhrase] = useState('')

  return (
    <View style={styles.container}>
      <ImageBackground source={plants_page.background} style={styles.image}>
        <SafeAreaView style={{marginHorizontal: dp(50), marginTop: dp(125)}}>
          <StatusBar style="auto"/>
          <PlantsPageHeader style={{marginBottom: dp(75)}}/>
          <FlatList
            data={data}
            renderItem={PlantCard}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{
              marginBottom: dp(15),
              justifyContent: 'space-between',
            }}
          >
          </FlatList>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: '#F7F7F7',
  },
  card: {
    marginBottom: dp(15)
  },
  card_list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
});
