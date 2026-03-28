import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Schedule = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText>suragchin nuur huudas

            </ThemedText>

        </ThemedView>
    )
}

export default Schedule;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})