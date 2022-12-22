import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { FlatList, ImageBackground, StyleSheet, View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import PlantCard from '../components/PlantCard';
import PlantsPageHeader from '../components/PlantsPageHeader';
import  { plants_page }  from '../Images'
import { dp, sp } from '../utils';



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
  const appendPlant = () => {
    console.log('not suck')
  }

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
          <TouchableOpacity style={styles.append_btn} onPress={appendPlant}>
            <View style={{transform: [{translateY: dp(5)}]}}>
              <View style={styles.plus_line}></View>
              <View style={[styles.plus_line, {transform: [{rotate: "90deg"}, {translateX: dp(-7)}]}]}></View>
            </View>
          </TouchableOpacity>
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
  },
  append_btn: {
    flex: 1,
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: dp(110),
    height: dp(110),
    backgroundColor: '#E7EAEF',
    opacity: 0.77,
    borderRadius: '50%',
  },
  plus_line: {
    height: dp(7),
    backgroundColor: '#738E7E',
    width: dp(45),
    borderRadius: '25%'
  }
});
