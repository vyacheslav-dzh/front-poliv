import { useState } from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native"
import DropShadow from "react-native-drop-shadow";
import RNPickerSelect from "react-native-picker-select";

const ModalAddPot = ({ visible, setVisible }) => {
    const [isAppend, setIsAppend] = useState(false)
    const cancel = () => {
        setIsAppend(false)
        console.log("don't send")
        setVisible(false)
    }
    const append = () => {
        setIsAppend(true)
        console.log("send nudes")
        setVisible(false)
    }
    const opacity = 1

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <DropShadow style={[styles.shadow, styles.modal]}>
                    <Text style={{textAlign: 'left'}}>
                        добавь свой горшок
                    </Text>
                        <TextInput
                            placeholder="Название"
                            style={styles.input}
                            placeholderTextColor='rgba(0, 0, 0, 0.3)'
                        />
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            placeholder={{ label: "Выберите цветок", value: null  }}
                            style={styles.select}
                            items={[
                                { label: "Фиалка", value: 0 },
                                { label: "Орхидея", value: 1 },
                                { label: "Ромашка", value: 2 },
                                { label: "Мох", value: 3 },
                                { label: "Папортник", value: 4 },
                                { label: "Жасмин", value: 5 },
                            ]}
                        />
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <TouchableOpacity onPress={cancel} style={[styles.btn, styles.cancel_btn]}>
                                <Text style={{color: '#8E8E93'}}>Отменить</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={append} style={[styles.btn, styles.append_btn]}>
                                <Text style={{color: '#fff'}}>Сохранить</Text>
                            </TouchableOpacity>
                        </View>
                </DropShadow>
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
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
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