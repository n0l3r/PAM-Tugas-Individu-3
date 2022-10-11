import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const Card = ({ keberangkatan, tujuan, maskapai, harga, tanggal, logo }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{keberangkatan}</Text>
                <Text style={styles.cardTitle}>-</Text>
                <Text style={styles.cardTitle}>{tujuan}</Text>
            </View>
            <View style={styles.cardBody}>
                <Image style={styles.cardImage} source={logo} />
                <View style={styles.cardInformation}>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>{maskapai}</Text>
                        <Text style={styles.cardInfoSubtitle}>{tanggal}</Text>
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>RP.{harga}</Text>
                        <Text style={styles.cardInfoSubtitle}>per orang</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height / 6,
        borderRadius: 20,
        marginVertical: Dimensions.get('window').height * 0.015,
        marginHorizontal: Dimensions.get('window').width * 0.05,
        paddingHorizontal: Dimensions.get('window').width * 0.05,
        paddingTop: Dimensions.get('window').height * 0.025,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Dimensions.get('window').height * 0.02,
    },
    cardTitle: {
        fontSize: Dimensions.get('window').width * 0.05,
        fontWeight: 'bold',
    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        resizeMode: 'contain',
    },
    cardInformation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardInfo: {
        width: '60%',
        marginLeft: Dimensions.get('window').width * 0.01,
    },
    cardInfoTitle: {
        fontSize: Dimensions.get('window').width * 0.04,
        fontWeight: 'bold',
    },
    cardInfoSubtitle: {
        fontSize: Dimensions.get('window').width * 0.04,
    },
});