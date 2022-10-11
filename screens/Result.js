import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, FlatList, ScrollView, Alert } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { JADWAL, BANDARA, MASKAPAI } from '../data/dummy';

const Result = ({ navigation, route }) => {
    const backHandler = () => {
        navigation.goBack();
    }
    const postData = route.params.data;
    const data = JADWAL.filter(jadwal => jadwal.bandara_kode_keberangkatan === postData.keberangkatan && jadwal.bandara_kode_tujuan === postData.tujuan && jadwal.tanggal === postData.tanggal);
    const Images = {
        'GA.png': require('../assets/images/GA.jpeg'),
        'SJ.png': require('../assets/images/SJ.png'),
        'JT.png': require('../assets/images/JT.png'),
        'QG.png': require('../assets/images/QG.png'),
        'QZ.png': require('../assets/images/QZ.png'),
        'ID.png': require('../assets/images/ID.png'),
        'IW.png': require('../assets/images/IW.png')
    }
    const convertDate = (date) => {
        const dateArray = date.split('-');
        const year = dateArray[0];
        const month = dateArray[1];
        const day = dateArray[2];
        const monthName = {
            '01': 'Januari',
            '02': 'Februari',
            '03': 'Maret',
            '04': 'April',
            '05': 'Mei',
            '06': 'Juni',
            '07': 'Juli',
            '08': 'Agustus',
            '09': 'September',
            '10': 'Oktober',
            '11': 'November',
            '12': 'Desember'
        }
        return `${day} ${monthName[month]} ${year}`;
    }

    const dataNull = () => {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>Data tidak ditemukan</Text>
            </View>
        )
    }

    const renderData = (itemData) => {
        const bandaraKeberangkatan = BANDARA.find(bandara => bandara.bandara_kode === itemData.item.bandara_kode_keberangkatan);
        const bandaraTujuan = BANDARA.find(bandara => bandara.bandara_kode === itemData.item.bandara_kode_tujuan);
        const maskapai = MASKAPAI.find(maskapai => maskapai.maskapai_id === itemData.item.maskapai_id);
        const logos = maskapai.maskapai_logo
        return (
            <Card keberangkatan={bandaraKeberangkatan.bandara_nama} tujuan={bandaraTujuan.bandara_nama} maskapai={maskapai.maskapai_nama} harga={itemData.item.harga} tanggal={convertDate(itemData.item.tanggal)} logo={Images[logos]} />
        )
    }
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container}>
                <Header onPress={backHandler} />
                <Text style={[styles.title, styles.textCenter]}>Hasil Pencarian Penerbangan</Text>
                <Text style={[styles.subtitle, styles.textCenter]}>{ postData.tanggal ? convertDate(postData.tanggal) : ''}</Text>
            </View>
            {data.length === 0
                ? dataNull()
                : <FlatList style={styles.scrollView} data={data} keyExtractor={item => item.jadwal_id} renderItem={({ item }) => {
                    return renderData({ item });
                }} />
            }
            <Footer />
        </SafeAreaView>
    )
}

export default Result;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        backgroundColor: 'green',
        height: Dimensions.get('window').height / 6,
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        paddingTop: Dimensions.get('window').height * 0.025,
    },
    title: {
        color: 'white',
        fontSize: Dimensions.get('window').width * 0.05,
        fontWeight: 'bold',
        marginTop: Dimensions.get('window').height * 0.025,
    },
    subtitle: {
        color: 'white',
        fontSize: Dimensions.get('window').width * 0.04,
    },
    textCenter: {
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: Dimensions.get('window').height * 0.04,
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: Dimensions.get('window').width * 0.05,
        marginVertical: Dimensions.get('window').height * 0.025,
        padding: Dimensions.get('window').width * 0.05,
        borderRadius: 10,
        elevation: 5,
    },
});