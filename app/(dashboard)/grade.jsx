import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";


const Grade = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText>    
                suragchin dun harah huudas
            </ThemedText>

        </ThemedView>
    )
}

export default Grade;

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})