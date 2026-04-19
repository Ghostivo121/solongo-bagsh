import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from 'expo-router';

import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput"; 
import { Colors } from "../../constants/Colors";

const StudentLogin = () => {
    const router = useRouter();
    

    return (
        <ThemedView style={styles.container}>
            <View style={styles.topSection}>
                <ThemedLogo style={styles.logo} />
            </View>

            <View style={styles.formContainer}>
                <ThemedText style={styles.loginTitle} title={true}>
                    Оюутны нэвтрэх хэсэг
                </ThemedText>
                
                <Spacer height={30} />

                <View style={styles.inputWrapper}>
                    <ThemedText style={styles.label}>Оюутны код</ThemedText>
                    <ThemedInput 
                        placeholder="se22d11"
                        style={styles.customInput} 
                    />
                </View>

                <Spacer height={20} />

                <View style={styles.inputWrapper}>
                    <ThemedText style={styles.label}>Нууц үг</ThemedText>
                    <ThemedInput 
                        placeholder="********"
                        secureTextEntry
                        style={styles.customInput}
                    />
                </View>

                <Spacer height={40} />
                <View style={styles.buttonWrapper}>
                    <ThemedButton 
                        title="Нэвтрэх" 
                        onPress={() => router.push("/(dashboard)/home")}
                        style={styles.loginBtn}
                    />
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        paddingHorizontal: 30,
    },
    topSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    logo: { 
        width: 300, 
        height: 120, 
        resizeMode: 'contain' 
    },
    formContainer: {
        flex: 2,
    },
    loginTitle: { 
        fontSize: 22,  
        fontWeight: '600',
        marginBottom: 10,
    },
    inputWrapper: {
        width: '100%',
    },
    label: {
        fontSize: 14,
        marginBottom: 8,
        opacity: 1,
        fontWeight: '500',
    },
    customInput: {
        width: '100%', 
        height: 60,
        borderRadius: 12,
        backgroundColor: '#F8F9FA',
        borderWidth: 0,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    buttonWrapper: { 
        width: '100%',
    },
    loginBtn: {
        height: 55,
        borderRadius: 12,
    }
});

export default StudentLogin;