import { StyleSheet, View } from "react-native";
import { useRouter } from 'expo-router';

import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedButton from "../components/ThemedButton";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>
            
            <View style={styles.logoContainer}>
                <ThemedLogo style={styles.img} />
            </View>

            
            <View style={styles.textSection}>
                <ThemedText style={styles.title} title={true}>
                    Тавтай морилно уу!
                </ThemedText>
                
                <Spacer height={10}/>
                
                <ThemedText style={styles.subtitle}>
                    Оюутны ирц, дүн болон хичээлийн хуваариа хянах системд тавтай морил.
                </ThemedText>
            </View>

            
            <View style={styles.buttonContainer}>
                <ThemedButton 
                    onPress={() => router.push("/(auth)/studentLogin")} 
                    title="Нэвтрэх →" 
                />
            </View>
        </ThemedView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,   
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    },
    textSection: {
        flex: 0.8,
        alignItems: 'flex-start', 
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32, 
        textAlign: 'left',
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'left',
        opacity: 0.8,
        
    },
    buttonContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
});