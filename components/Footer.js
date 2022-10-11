import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerItem}>
                <Text style={styles.footerText}>Copyright Naufal Taufiq Ridwan - 120140044</Text>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: Dimensions.get('window').height * 0.04,
        justifyItem: 'center',
        alignItems: 'center',
    },
    footerItem: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    footerText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },
});