import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Attendance = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText>irtsee harna


            </ThemedText>

        </ThemedView>
    )
}

export default Attendance;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})