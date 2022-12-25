import { createContext } from "react"
import { PixelRatio } from "react-native"


// for all except fonts
export const dp = (px) => {
    return px / PixelRatio.get()
}

// only for fonts
export const sp = (px) => {
    return px / (PixelRatio.getFontScale() * PixelRatio.get())
}

export const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      return {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

export default {dp: dp, sp: sp, generateBoxShadowStyle: generateBoxShadowStyle}