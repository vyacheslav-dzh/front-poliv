import { StyleSheet, View, Text, Image } from "react-native";
import { dp, sp } from '../utils';

const IconInfo = ({icon, title, description}) => {
    return (
        <View style={styles.container}>
            <Image source={icon} style={styles.icon}/>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

export default IconInfo;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        maxWidth: dp(300),
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        height: '100%',
        resizeMode: 'contain',
    },
    info: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: sp(36),
    },
    description: {
        fontSize: sp(24),
    }
})