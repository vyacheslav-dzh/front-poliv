import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { plants_page } from "../Images"
import { StatusBar } from "expo-status-bar";
import { dp, sp, generateBoxShadowStyle } from "../utils";
import { AuthContext } from '../AuthContext'
import {useContext} from 'react'



const ConnectPage = () => {
    const { connect } = useContext(AuthContext);
    return (
        <ImageBackground
            source={plants_page.view_background}
            style={{flex: 1}}
        >
            <StatusBar style="auto"/>
            <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.title}>
                        Подключите устройство
                    </Text>
                    <Text style={styles.desc}>
                        для подключения устройства необходимо включить wi-fi и bluetooth
                    </Text>
                </View>
                <View style={[styles.btn_shadow, {flex: 1}]}>
                    <TouchableOpacity style={styles.btn} onPress={() => connect()}>
                        <Text style={{ fontSize: sp(48), fontWeight: '300'}}>
                            Поиск
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ConnectPage

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        paddingVertical: dp(25),
        paddingHorizontal: dp(75),
        width: '65%',
        borderRadius: dp(30),
    },
    btn_shadow: generateBoxShadowStyle(-3, 9, '#000', 0.36, 50, 50, '#000'),
    title: {
        fontSize: sp(54),
        textAlign: 'center',
        marginBottom: dp(45)
    },
    desc: {
        alignSelf: 'center',
        maxWidth: '60%',
        fontSize: sp(26),
        textAlign: 'center'
    }
})