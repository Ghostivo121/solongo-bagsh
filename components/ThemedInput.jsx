import { TextInput, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;

    return (   
        <TextInput
            style={[
                Styles.input,
                {
                    backgroundColor: theme.inputbackground,
                    color: theme.text,              
                    borderColor: theme.iconColorFocused || theme.text,      
                },
                style
            ]}
            placeholderTextColor={colorScheme === 'dark' ? '#888' : '#aaa'}
            {...props}
        />
    );
}


export default ThemedInput;

const Styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        borderWidth: 1.5,
        fontSize: 16,
    }
});