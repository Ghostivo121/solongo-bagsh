import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useRouter } from 'expo-router';
import * as SQLite from 'expo-sqlite';

import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput"; 

const db = SQLite.openDatabaseSync('studentDB.db');

const StudentLogin = () => {
    const router = useRouter();
    
    const [studentCode, setStudentCode] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        try {
            console.log("DB: Өгөгдлийн санг шалгаж байна...");
            db.execSync(`
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT, 
                    student_code TEXT, 
                    password TEXT
                );
            `);
            
            const result = db.getAllSync('SELECT * FROM users');
            if (result.length === 0) {
                console.log("DB: Туршилтын дата нэмж байна...");
                db.runSync('INSERT INTO users (student_code, password) VALUES (?, ?)', ['se22d11', '12345678']);
                console.log("DB: Туршилтын дата амжилттай нэмэгдлээ.");
            }
        } catch (error) {
            console.error("DB: Эхлүүлэх явцад алдаа гарлаа:", error);
        }
    }, []);

    const handleLogin = () => {
        if (!studentCode.trim() || !password) {
            Alert.alert("Алдаа", "Оюутны код болон нууц үгээ оруулна уу.");
            return;
        }

        console.log("--- Нэвтрэх оролдлого ---");
        console.log(`Хэрэглэгчийн код: ${studentCode.trim()}`);

        try {
            const user = db.getFirstSync(
                'SELECT * FROM users WHERE student_code = ? AND password = ?',
                [studentCode.toLowerCase().trim(), password]
            );

            if (user) {
                console.log("Төлөв: Амжилттай. Хэрэглэгч олдлоо.");
                console.log("Дата:", user);
                router.push("/(dashboard)/home");
            } else {
                console.warn("Төлөв: Амжилтгүй. Мэдээлэл таарахгүй байна.");
                Alert.alert("Нэвтрэх боломжгүй", "Оюутны код эсвэл нууц үг буруу байна.");
            }
        } catch (error) {
            console.error("Төлөв: SQL Алдаа!", error);
            Alert.alert("Системийн алдаа", "Өгөгдлийн сантай ажиллахад алдаа гарлаа.");
        } finally {
            console.log("-----------------------");
        }
    }

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
                        value={studentCode}
                        onChangeText={setStudentCode}
                        autoCapitalize="none"
                    />
                </View>

                <Spacer height={20} />

                <View style={styles.inputWrapper}>
                    <ThemedText style={styles.label}>Нууц үг</ThemedText>
                    <ThemedInput 
                        placeholder="********"
                        secureTextEntry
                        style={styles.customInput}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <Spacer height={40} />
                <View style={styles.buttonWrapper}>
                    <ThemedButton 
                        title="Нэвтрэх" 
                        onPress={handleLogin} 
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
        fontWeight: '500',
    },
    customInput: {
        width: '100%', 
        height: 60,
        borderRadius: 12,
        backgroundColor: '#F8F9FA',
        paddingHorizontal: 20,
        borderColor: "#d0d4d9",
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