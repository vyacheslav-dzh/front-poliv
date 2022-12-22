import { ImageBackground, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { watering_page } from '../Images'
import { dp, sp } from "../utils"

const WateringPage = () => {
    return (
        <ImageBackground source={watering_page.background} style={{flex: 1}}>
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: sp(72), color: '#fff', backgroundColor: '#000', padding: dp(20)}}>
                    Тут пока пусто
                </Text>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default WateringPage