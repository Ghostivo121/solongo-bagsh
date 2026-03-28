import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import ThemedText from "./ThemedText";

function ThemedButton({style, title, ...props}){

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] || Colors.light;
    const textColor = title ? theme.text : theme.title;

    return(
        <Pressable
            style={({pressed}) => [ 
                Styles.btn,
                pressed && Styles.pressed,
                style
            ]}
            {...props}
        >
            <ThemedText style={[{color:textColor}, Styles.text]}  title={true}>{title} </ThemedText> 
        </Pressable>     
    )
}
export default ThemedButton;
const Styles = StyleSheet.create({
    btn:{
        backgroundColor:Colors.primary,
        padding:15,
        borderRadius:6,
        marginVertical:10,
    },
    pressed:{
        opacity:0.5,
    },
    text:{
        textAlign: 'center',
        color: "#e8e8e8"
    }
})