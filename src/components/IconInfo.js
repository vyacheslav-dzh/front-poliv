import { StyleSheet, View, Text, Image } from "react-native";
import { dp, sp } from '../utils';

const IconInfo = ({icon, title, description, style}) => {
    return (
        <View style={[styles.container, style]}>
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
        //maxWidth: dp(300),
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        maxHeight: '100%',
        maxWidth: '100%',
        resizeMode: 'contain',
    },
    info: {
        flex: 2,
    },
    title: {
        fontSize: sp(46),
    },
    description: {
        fontSize: sp(34),
    }
})