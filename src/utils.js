import { PixelRatio } from "react-native"

export const dp = (px) => {
    return px / PixelRatio.get()
}

export const sp = (px) => {
    return px / (PixelRatio.getFontScale() * PixelRatio.get())
}

export default {dp: dp, sp: sp}