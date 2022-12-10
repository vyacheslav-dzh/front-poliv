import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, ImageBackground, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import PlantCard from '../components/PlantCard';
import PlantsPageHeader from '../components/PlantsPageHeader';
import  { plants_page }  from '../Images'
import { dp } from '../utils';



const PlantsPage = ({navigation}) => {
  const [items, setItems] = useState([...Array(20).keys()].map(number => ({
      id: number,
      name: `plant ${number}`,
      description: `This is plant number ${number + 1}`,
      temperature: 28.9 + ' C\u00b0',
      wet: 68 + '%',
      img: plants_page.card_img
  })))
  const [searchPhrase, setSearchPhrase] = useState('')

  return (
      <View style={styles.container}>
        <ImageBackground source={plants_page.background} style={styles.image}>
          <SafeAreaView style={{marginHorizontal: dp(50), marginTop: dp(125)}}>
            <StatusBar style="auto"/>
            <PlantsPageHeader style={{marginBottom: dp(-25), zIndex: 5}}/>
            <FlatList
              data={items}
              renderItem={({item}) => {
                return <PlantCard navigation={navigation} item={item}/>
              }}
              keyExtractor={item => item.id}
              numColumns={2}
              style={{paddingTop: dp(50)}}
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

export default PlantsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
