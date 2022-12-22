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

export default {dp: dp, sp: sp}