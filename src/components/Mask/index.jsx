import React, { isValidElement, useMemo } from "react"
import Svg, { Circle, Defs, Mask, Rect, Text, Use } from "react-native-svg";
import tinycolor from "tinycolor2";
import { isNil } from "lodash";
// import { invertColor } from "~/utils";

export default function (props = {}) {
  const { children, maskFill, maskOpacity } = props;
  const fill = useMemo(() => {
    // 需要将配置的颜色反转，以符合直觉上的蒙版背景色
    if (!maskFill) {
      return "#ffffff73";
    }
    // const invertedColor = tinycolor(maskFill);
    const originColor = tinycolor(maskFill);
    // const originOpacity = originColor.getAlpha();

    // const invertedColorStr = invertColor(maskFill);
    // const invertedColor = tinycolor(invertedColorStr);

    // 设置 alpha 透明度
    // 优先级 maskOpacity > maskFill自带opacity
    if (!isNil(maskOpacity)) {
      originColor.setAlpha(maskOpacity);
    }
    //  else {
    //   originColor.setAlpha(originOpacity);
    // }
    return originColor.toHex8String();
  }, [maskFill, maskOpacity]);
  return (
    <Svg>
      <Text x="50%" y="50%">
        Hello Mask
      </Text>
      {/* 定义蒙版 */}
      <Defs>
        <Mask id="Mask">
          <Rect width="100%" height="100%" fill="white" />
          <Circle cx="50%" cy="50%" r="50" fill="black" />
          {isValidElement(children) && children}
        </Mask>
        <Rect width="100%" height="100%" id="MaskBg" />
      </Defs>
      {/* 使用蒙版，并重新添加颜色 */}
      <Use href="#MaskBg" fill={fill} mask="url(#Mask)" />
    </Svg>
  );
}