import { SafeAreaView, View, Text, StyleSheet, Dimensions, Image, TextInput, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputGroup from "../components/InputGroup";
import PrimaryButton from "../components/PrimaryButton";

function Home({ navigation }) {
    const [body, setBody] = useState({
        keberangkatan: '',
        tujuan: '',
        tanggal: '',
    })
    const handleChange = (name, value) => {
        setBody({
            ...body,
            [name]: value,
        })
    }
    const setNull = () => {
        setBody({
            keberangkatan: '',
            tujuan: '',
            tanggal: '',
        })
    }
    const pressHandler = () => {
        navigation.navigate("Result", { data: body })
        setNull()
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Header>Home</Header>
                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <InputGroup label="Lokasi Keberangkatan" uriImage={require('../assets/icons/airplane-takeoff.png')} placeholder="Masukkan Lokasi Keberangkatan" onChange={(e) => handleChange('keberangkatan', e.nativeEvent.text)} value={body.keberangkatan} />
                        <InputGroup label="Lokasi Tujuan" uriImage={require('../assets/icons/airplane-landing.png')} placeholder="Masukkan Lokasi Tujuan" onChange={(e) => handleChange('tujuan', e.nativeEvent.text)} value={body.tujuan} />
                        <InputGroup label="Tanggal Keberangkatan" uriImage={require('../assets/icons/calendar-month.png')} placeholder="Masukkan Tanggal Keberangkatan" onChange={(e) => handleChange('tanggal', e.nativeEvent.text)} value={body.tanggal} />
                        <PrimaryButton onPress={pressHandler}>Cari</PrimaryButton>
                    </View>
                </View>
            </View>
            <Footer />
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: 'green',
        height: Dimensions.get('window').height / 2.2,
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        paddingTop: Dimensions.get('window').height * 0.025,
    },
    card: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 2.25,
        borderRadius: 20,
        marginTop: Dimensions.get('window').height * 0.025,
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        paddingTop: Dimensions.get('window').height * 0.025,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5,
    },
    cardBody: {
        flex: 1,
    },
});