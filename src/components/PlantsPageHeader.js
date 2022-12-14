import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native"
import { dp, sp } from "../utils"
import SearchBar from "./SearchBar"

const PlantsPageHeader = ({style}) => {
    const sectionPress = () => {Alert.alert('Внимание', 'Это поле пока недоступно')}
    const searchPress = () => {console.log('search start')}
    return (
        <View style={style}>
            <View style={styles.btns}>
                <TouchableOpacity 
                    style={[styles.plants_btns, styles.plants_btns__active]}
                    onPress={sectionPress}
                    >
                    <Text style={[styles.btn_text, styles.btn_text__active]}>
                        мои растения
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.plants_btns}
                    onPress={sectionPress}
                    >
                    <Text style={styles.btn_text}>
                        все растения
                    </Text>
                </TouchableOpacity>
            </View>
            <SearchBar style={styles.search_bar} searchPress={searchPress}/>
        </View>
    )
}

export default PlantsPageHeader

const styles = StyleSheet.create({
    btns: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        position: 'relative', 
        top: dp(15)
    },
    plants_btns: {
        flex: 1,
        backgroundColor: '#DBE6CC',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: dp(20),
        borderTopRightRadius: dp(20),
        paddingVertical: dp(20)
    },
    plants_btns__active: {
        flex: 1.2,
        backgroundColor: '#8BB02C',
        paddingVertical: dp(15)
    },
    btn_text: {
        fontSize: sp(24),
        fontWeight: '400',
        color: '#000'
    },
    btn_text__active: {
        fontSize: sp(40),
    },
})