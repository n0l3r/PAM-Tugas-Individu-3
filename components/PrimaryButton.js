import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        height: Dimensions.get('window').height * 0.05,
        marginVertical: 4,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: Dimensions.get('window').width * 0.05,
        fontWeight: 'bold',
    },
});
        