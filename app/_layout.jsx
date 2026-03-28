import { StyleSheet, useColorScheme} from "react-native";
import { Stack} from 'expo-router';
import { Colors } from "../constants/Colors";
const RootLayout = ({}) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light
    return(
        <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
        }}>
            <Stack.Screen name="index" options={{headerShown: false}} />
            <Stack.Screen name="(auth)" options={{headerShown: false}} />
            <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />  
        </Stack>
    )
}

export default RootLayout;

