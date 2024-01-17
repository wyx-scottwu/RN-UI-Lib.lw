import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

type StyleObject<T> = {
  [P in keyof T]:  T | StyleSheet.NamedStyles<T>;
};

function createStyle<T>(styles: StyleObject<T>) {
  return StyleSheet.create(styles) as T;
}

function getSize (px: number) {
  const scale = Dimensions.get('window').width / 375;
  return px * scale;
}

export { createStyle, getSize };
