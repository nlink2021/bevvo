import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

// paste your mockup sizes (ie. size of entire figma screen)
const MOCKUP_WIDTH = 375;
const MOCKUP_HEIGHT = 812;

// not used yet.
// export const PHONE_HEIGHT = height;
export const PHONE_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleWidth(size) {
  return PixelRatio.roundToNearestPixel(size * (width / MOCKUP_WIDTH));
}
/**
 * Get size with scale factor
 * will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleHeight(size) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}

/**
 * Get font with scale factor
 *  will use this for scale sizes for different phones and screen resolutions
 *
 * @param {number} size - original size
 */
export function scaleFont(size) {
  return PixelRatio.roundToNearestPixel(size * (height / MOCKUP_HEIGHT));
}
