import { main_page } from '../Images'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import IconInfo from '../components/IconInfo';
import { dp, sp } from '../utils';
import DropShadow from 'react-native-drop-shadow';

const MainPage = () => {
    const [liters, setLiters] = useState(1.8)
    const [temp, setTemp] = useState(28.9)
    const [plantsCount, setPlantsCount] = useState(20)
    const [systemState, setSystemState] = useState('включена')

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={main_page.background} style={styles.bg_img}>
                <SafeAreaView style={{flex: 1}}>
                    <StatusBar style="auto"/>
                    <DropShadow style={styles.shadow_btn}>
                        <TouchableOpacity style={styles.power_btn}>
                            <Image 
                                source={main_page.icons.power} 
                                style={styles.power_btn__img}
                            />
                            <Text style={styles.power_btn__title}>
                                система { systemState }
                            </Text>
                        </TouchableOpacity>
                    </DropShadow>
                    <View style={styles.info_block}>
                        <View style={styles.water_lvl_block}>
                            <IconInfo
                                icon={main_page.icons.liters}
                                title={`${liters} литра`}
                                description={'воды в емкости'}
                                style={styles.water_lvl_info}
                            />
                            <Image
                                source={main_page.water_lvl}
                                style={styles.water_lvl_img}
                            />
                        </View>
                        <View style={styles.info}>
                            <IconInfo
                                icon={main_page.icons.temp}
                                title={`${temp} C\u00b0`}
                                description={'температура в емкости'}
                            />
                            <IconInfo
                                icon={main_page.icons.plants}
                                title={plantsCount}
                                description={'подключенных растений'}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    bg_img: {
        flex: 1,
        //justifyContent: 'center',
        resizeMode: 'cover',
        width: '100%', 
        height: '100%', 
        position: 'absolute'
    },
    power_btn: {
        flexDirection: 'row',
        borderRadius: '30%',
        paddingHorizontal: dp(45),
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        maxWidth: '80%',
        alignSelf: 'center',
        marginTop: dp(70)
    },
    shadow_btn: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: dp(5)},
        shadowOpacity: dp(0.55),
        shadowRadius: dp(18),
    },
    power_btn__img: {
        flex: 1,
        resizeMode: 'contain',
    },
    power_btn__title: {
        textAlign: 'center',
        flex: 7,
        alignSelf: 'center',
        fontSize: sp(45),
        fontWeight: '300',
    },
    info_block: {
        flex: 2,
        flexDirection: 'row',
        bottom: dp(150)
    },

    water_lvl_block: {
        flex: 1,
    },

    water_lvl_info: {
        flex: 1
    },

    water_lvl_img: {
        flex: 5,
        resizeMode: 'contain',
        maxWidth: '100%',
        maxHeight: '100%',
        left: "-15%"
    },

    info: {
        flex: 1,
        top: '20%',
    }
})
