import { View, Text, TextInput, Image, StyleSheet, Dimensions } from 'react-native';
import { useState } from "react";

const InputGroup = ({ label, uriImage, placeholder, onChange, value }) => {
    return (
        <View style={styles.containerInput}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputGroup}>
                <Image style={styles.iconInput} source={uriImage} />
                <TextInput style={styles.input} placeholder={placeholder} onChange={onChange} value={value} />
            </View>
        </View>
    )
}

export default InputGroup;

const styles = StyleSheet.create({
    containerInput: {
        width: '100%',
        height: Dimensions.get('window').height * 0.1,
        marginVertical: 2,
    },
    label: {
        fontSize: Dimensions.get('window').width * 0.05,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
        height: '50%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,

    },
    iconInput: {
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06,

    },
    input: {
        flex: 1,
        marginLeft: 10,
        height: '100%',
        fontSize: Dimensions.get('window').width * 0.04,
    },
});