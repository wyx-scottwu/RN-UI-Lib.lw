import tinycolor from "tinycolor2";

export default function (_color) {
  const originColor = tinycolor(_color).toRgb();
  const invertedColor = {
    r: 255 - originColor.r,
    g: 255 - originColor.g,
    b: 255 - originColor.b,
  }
  return tinycolor(invertedColor).toHexString()
}
