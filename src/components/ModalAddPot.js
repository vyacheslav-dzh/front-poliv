import { useEffect, useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import RNPickerSelect from "react-native-picker-select";
import requests from "../requests";
import {generateBoxShadowStyle} from '../utils'


const ModalAddPot = ({ visible, setVisible, append }) => {
    const [isAppend, setIsAppend] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [plants, setPlants] = useState([])
    const [currentPlant, setCurrentPlant] = useState()

    const getPlants = async () => {
        const plants = await requests.plant.get_all()
        setPlants(plants)
    }

    useEffect(() => {
        getPlants()
    }, [])
    const cancel = () => {
        setIsAppend(false)
        console.log("don't send")
        setVisible(false)
    }

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={[styles.shadow, styles.modal]}>
                    <Text style={{textAlign: 'left'}}>
                        добавь свой горшок
                    </Text>
                        <TextInput
                            placeholder="Название"
                            style={styles.input}
                            placeholderTextColor='rgba(0, 0, 0, 0.3)'
                            value={name}
                            onChangeText={setName}
                        />
                        <RNPickerSelect
                            onValueChange={(value) => setCurrentPlant(value)}
                            placeholder={{ label: "Выберите цветок", value: null  }}
                            style={styles.select}
                            items={
                                plants.map(plant => {
                                    return {label: plant.name, value: plant.id}
                                })
                            }
                        />
                        <TextInput
                            placeholder="Описание"
                            style={styles.input}
                            placeholderTextColor='rgba(0, 0, 0, 0.3)'
                            value={description}
                            onChangeText={setDescription}
                        />
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity onPress={cancel} style={[styles.btn, styles.cancel_btn]}>
                                <Text style={{color: '#8E8E93'}}>Отменить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {append(currentPlant, name, description)}} style={[styles.btn, styles.append_btn]}>
                                <Text style={{color: '#fff'}}>Сохранить</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalAddPot;

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: '70%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: 'center'
    },
    shadow: generateBoxShadowStyle(0, 2, '#000', 0.25, 4, 5, '#000'),
    input: {
        width: '100%',
        color: '#000',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    select: {
        inputIOS: {
            width: '100%',
            fontSize: 14,
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
        },
        inputAndroid: {
            width: '100%',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
        },
    },
    btn: {
        flex: 1,
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        padding: 5,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancel_btn: {
        backgroundColor: '#252525',
        marginRight: 10
    },
    append_btn: {
        backgroundColor: '#74BE17'
    }
})