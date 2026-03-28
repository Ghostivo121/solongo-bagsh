import {Image, useColorScheme} from "react-native";

import LightLogo from '../assets/img/whitelogo.png';
import DarkLogo from '../assets/img/darklogo.png';

const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

    return(
        <Image 
            source={logo} 
            {...props}
        />     
    )
}

export default ThemedLogo;
