import { View, Image, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';

function Header({ children, onPress }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.menuButton} source={children == "Home" ? require('../assets/icons/menu.png') : require('../assets/icons/arrow-left.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>Hiling.id</Text>
            <Image style={styles.menuButton} source={require('../assets/icons/user.png')} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuButton: {
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
    },
    headerText: {
        color: 'white',
        fontSize: Dimensions.get('window').width * 0.08,
        fontWeight: 'bold',
    },
});