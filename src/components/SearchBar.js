import React from 'react'
import { TextInput, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { Feather } from "@expo/vector-icons";
import { dp } from '../utils';


const SearchBar = ({searchPhrase, setSearchPhrase, style}) => {
    return (
        <View  style={[styles.search_bar, style]}>
            <TextInput
                onChangeText={setSearchPhrase}
                value={searchPhrase}
                placeholder='Поиск'
                placeholderTextColor="rgba(255, 255, 255, 0.3)"
                style={styles.search_bar__input}
            />
            <TouchableOpacity style={styles.search_bar__icon}>
                <Feather
                    name="search"
                    color="black"
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    search_bar: {
        borderRadius: dp(20),
        backgroundColor: '#2B2B2B',
        flexDirection: 'row',
        paddingVertical: dp(17),
        paddingHorizontal: dp(17)
    },
    search_bar__input: {
        flex: 1
    },
    search_bar__icon: {
        backgroundColor: '#8BB02C',
        borderRadius: '50%',
        padding: dp(10),
        maxHeight: dp(50),
        maxWidth: dp(50)
    }
})