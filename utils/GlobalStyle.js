import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';


function GlobalStyle(){
const [loaded] = useFonts({
    ImprimaRegular: require('../assets/fonts/Imprima-Regular.ttf'),
    IMFellGreatPrimerItalic: require('../assets/fonts/IMFellGreatPrimer-Italic.ttf'),
  });
  return {}
}

export default StyleSheet.create({
    CustomFont: {
        fontFamily: 'IMFellGreatPrimerItalic'
    }
});