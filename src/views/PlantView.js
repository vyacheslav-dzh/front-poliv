import {Text, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import { plants_page, icons } from "../Images";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { dp, generateBoxShadowStyle, sp } from "../utils";
import { useState } from "react";
import requests from "../requests";

const PlantView = ({route: {params}}) => {
    const plant = params.plant
    const [water, setWater] = useState(plant.check_wet)
    const changeWater = async () => {
        plant.check_wet = !plant.check_wet
        setWater(plant.check_wet)
        const res = water ? await requests.system.end_water(plant.id) : await requests.system.start_water(plant.id)
        console.log(res)
    }
    console.log(plant)
    return (
        <ImageBackground
            source={plants_page.view_background}
            style={styles.background}
        >
            <StatusBar style="auto"/>
            <SafeAreaView 
                style={{
                    flex: 1,
                    paddingTop: dp(50),
                    paddingHorizontal: dp(50),
                }}
                >
                <View style={styles.header}>
                    <View style={styles.header__plant_img}>
                        <Image
                            // sourse={plant.img}
                            source={plants_page.card_img}
                            style={{
                                width: '100%',
                                height: '100%',
                                resizeMode: 'contain'
                            }}
                        />
                    </View>
                    <View style={styles.header__btns}>
                        <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={() => changeWater()}>
                            <Image
                                source={icons.power_2}
                                style={{
                                    resizeMode: 'contain',
                                    width: '65%',
                                    marginBottom: dp(-40)
                                }}
                            />
                            <Text style={styles.header__btns__text}>{water ? 'выключить' : 'включить'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.header__btns__text}>редактировать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <View style={[styles.info_block__shadow, {flex: 2.5}]}>
                <View
                    style={styles.info_block}
                >
                    <View style={styles.info_block__title_block}>
                        <View style={{flex: 1}}>
                            <Text style={styles.info_block__title_block__title}>
                                {plant.name}
                            </Text>
                            <Text style={styles.info_block__title_block__sub_title}>
                                посажено 20.06.22
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1.2, alignItems: 'center'}}>
                            <View style={[styles.info_block__title_block__stats, {flex: 1.2}]}>
                                <View style={{flex: 1}}>
                                    <Image source={icons.temp} style={styles.stats_img}/>
                                </View>
                                <Text style={styles.stats_text}>{plant.temperature ? plant.temperature : '---'}</Text>
                            </View>
                            <View style={[styles.info_block__title_block__stats, {flex: 1}]}>
                                <View style={{flex: 1}}>
                                    <Image source={icons.humidity} style={styles.stats_img}/>
                                </View>
                                <Text style={styles.stats_text}>{plant.wet ? plant.wet + '%' : '---'}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.hr } />
                    <View style={styles.recommendations}>
                        <Text style={styles.recommendations_text}>тип грунта - {plant.ground ? plant.ground : 'не найдено'}</Text>
                        <Text style={styles.recommendations_text}>оптимальная температура - {plant.temperature ? plant.temperature : 'не найдено'}</Text>
                        <Text style={styles.recommendations_text}>оптимальная влажность - {plant.wet ? plant.wet + '%' : 'не найдено'}</Text>
                    </View>
                    <Text style={styles.info_block__description}>
                        {plant.description}
                    </Text>
                    <TouchableOpacity style={styles.schedule_btn}>
                        <Text style={styles.schedule_btn_text}>график полива</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default PlantView

const styles = StyleSheet.create({  
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },
    background: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header__plant_img: {
        borderColor: '#000',
        borderWidth: dp(1),
        borderRadius: '35%',
        width: dp(400),
        height: dp(400)
    },
    header__btns: {
        paddingBottom: 10
    },
    header__btns__text: {
        textAlign: 'center',
        fontSize: sp(40),
        fontWeight: '300'
    },
    info_block: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.62)',
        borderTopLeftRadius: '40%',
        borderTopRightRadius: '40%',
        paddingVertical: dp(45),
        paddingHorizontal: dp(50)
    },
    info_block__shadow: generateBoxShadowStyle(0, dp(-12), '#000', 0.55, dp(46), dp(46), '#000'),
    info_block__title_block: {
        flexDirection: 'row'
    },
    info_block__title_block__title: {
        fontSize: sp(50),
        fontWeight: '700',
    },
    info_block__title_block__sub_title: {
        fontSize: sp(35),
        fontWeight: '400',
    },
    info_block__title_block__stats: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    stats_img: {
        resizeMode: 'center',
        height: dp(100),
        width: dp(80),
    },
    stats_text: {
        flex: 1.3,
        fontSize: sp(32),
        fontWeight: '400',
        alignSelf: 'center',
        position: 'relative',
        width: '100%',
    },
    hr: {
        height: dp(1),
        backgroundColor: '#000',
        marginVertical: dp(30)
    },
    recommendations: {
        marginBottom: dp(50)
    },
    recommendations_text: {
        fontSize: sp(32),
        fontWeight: '400',
        lineHeight: dp(44)
    },
    info_block__description: {
        fontSize: sp(32),
        fontWeight: '400',
        marginBottom: dp(30),
        lineHeight: dp(44)
    },
    schedule_btn: {
        borderRadius: dp(70),
        backgroundColor: '#2B2B2B',
        paddingHorizontal: dp(75),
        paddingVertical: dp(20),
        width: dp(260+150)
    },
    schedule_btn_text: {
        fontSize: sp(36),
        color: '#fff',
        fontWeight: '500'
    }
})