import { SafeAreaView, Text, StyleSheet, StatusBar, View } from "react-native";
import AppColors from "../constants/color";

function Header({ title }) {
    return <SafeAreaView style={styles.header}>
        <StatusBar
            animated={true}
            backgroundColor={styles.header.backgroundColor}
        />
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 8,
        paddingBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: AppColors.colorPrimary,
    },
    text: {
        color: "#fff",
        fontSize: 24,
        paddingLeft: 16,
    }
})

StatusBar.setBarStyle("light-content")

export default Header;