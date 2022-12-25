import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"
import { plants_page  } from "../Images"
import requests from "../requests"
import { dp, sp } from '../utils'

const PlantCard = ({ navigation, style, item, onRemovePress}) => {
    const onOpenPress = () => {
        navigation.navigate('PlantView', {plant: item})
    }
    return (
    <View style={[styles.container, style]}>
        <View style={ styles.img_block }>
            <Image source={plants_page.card_img} resizeMode='contain' style={styles.card_img}/>
            <TouchableOpacity
                style={styles.close_btn}
                onPress={() => {
                    console.log(item.id)
                    onRemovePress(item.id)
                }}
            >
                <View style={ styles.close_btn_line }/>
                <View style={[ styles.close_btn_line, {transform: [{rotate: '-45deg'}]} ]}/>
            </TouchableOpacity>
        </View>
        <View style={ styles.card_block }>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
                <View style={{flex: 2}}>
                    <Text style={{fontSize: sp(22), fontWeight: '800', color: '#fff', marginBottom: dp(12.5)}}>
                        { item.name }
                    </Text>
                    <Text style={{fontSize: sp(12), fontWeight: '600', color: '#EBEBF5'}}>
                        { item.description }
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        borderRadius: dp(24),
                        width: dp(85),
                        height: dp(40),
                        backgroundColor: '#74BE17',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={onOpenPress}
                >
                    <Text style={{
                        fontSize: sp(17),
                        fontWeight: '700',
                        color: '#fff'
                    }}>
                        Open
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={ styles.hr } />

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.card_params_text}>{ item.temperature ? item.temperature + ' C\u00b0' : 'не найдено' }</Text>
                <Text style={styles.card_params_text}>{ item.wet ? item.wet + '%' : 'не найдено' }</Text>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: dp(450),
        width: dp(350),
    },
    img_block: {
        flex: 1,
        backgroundColor: '#DBE7CC',
        borderTopLeftRadius: dp(34),
        borderTopRightRadius: dp(34),
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_img: {
        width: '100%',
        height: '100%'
    },
    card_block: {
        flex: 0.7,
        backgroundColor: '#1E1E1E',
        borderBottomLeftRadius: dp(34),
        borderBottomRightRadius: dp(34),
        opacity: 0.95,
        paddingTop: dp(30),
        paddingBottom: dp(30),
        paddingLeft: dp(24),
        paddingRight: dp(24)
    },
    card_params_text: {
        color: '#fff',
        fontSize: sp(24),
        fontWeight: '500'
    },
    hr: {
        height: 0.5,
        backgroundColor: '#38383A',
        marginBottom: dp(15)
    },
    close_btn: {
        height: dp(26),
        width: dp(26),
        borderRadius: '50%',
        backgroundColor: '#252525',
        opacity: 0.78,
        position: 'absolute',
        right: dp(17),
        top: dp(17),
        justifyContent: "center",
        alignItems: 'center'
    },
    close_btn_line: {
        height: dp(2.5),
        width: dp(14),
        position: 'absolute',
        backgroundColor: '#8E8E93',
        transform: [{rotate: '45deg'}],
        borderRadius: '25%'
    }
})

export default PlantCard
