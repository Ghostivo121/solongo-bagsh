import React from "react";
import { StyleSheet, View, useColorScheme, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedText from "./ThemedText";

const ThemedBar = ({ 
    children, 
    style, 
    onPress, 
    title, 
    subtitle, 
    icon,
    ...props 
}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                { 
                    backgroundColor: theme.uiBackground,
                    borderRadius: 15,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                }, 
                pressed && onPress && styles.pressed, 
                style
            ]}
            {...props}
        >
            {/* Икон хэсэг */}
            {icon && (
                <View style={styles.iconContainer}>
                    {icon}
                </View>
            )}

            {/* Текст болон children хэсэг */}
            <View style={styles.contentContainer}>
                {title && (
                    <ThemedText title={true} style={styles.titleStyle}>
                        {title}
                    </ThemedText>
                )}
                {subtitle && (
                    <ThemedText style={styles.subtitleStyle}>
                        {subtitle}
                    </ThemedText>
                )}
                
                {children}
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        marginRight: 15,
    },
    contentContainer: {
        flex: 1, 
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitleStyle: {
        fontSize: 14,
        opacity: 0.7,
        marginTop: 2,
    },
    pressed: {
        opacity: 0.7, // Дарагдах үед бага зэрэг бүдгэрнэ
        transform: [{ scale: 0.98 }] // Бага зэрэг жижигрэх эффект нэмэв
    }
});

export default ThemedBar;