import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Lesson = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText>suragchin hicheelen nuur huudas

            </ThemedText>

        </ThemedView>
    )
}

export default Lesson;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})