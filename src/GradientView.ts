import React from 'react';
import { View, StyleSheet, ViewStyle, ViewProps, StyleProp } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

interface GradientViewProps extends ViewProps {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const borderRadiusProps = [
  'borderRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
] as const;

const GradientView: React.FC<GradientViewProps> = ({
  colors,
  start,
  end,
  style,
  children,
}) => {
  const hasValidColors = Array.isArray(colors) && colors.length >= 2;

  const gradientStart = start ?? (hasValidColors ? { x: 0, y: 0 } : null);
  const gradientEnd = end ?? (hasValidColors ? { x: 0, y: 1 } : null);

  if (!hasValidColors) {
    const fallbackStyle = colors?.[0]
      ? [{ backgroundColor: colors[0] }, style]
      : [style];
    return React.createElement(View, { style: fallbackStyle }, children);
  }

  const flatStyle = StyleSheet.flatten(style) || {};
  const hasOverflow = flatStyle.hasOwnProperty('overflow');
  const hasBorderRadius = borderRadiusProps.some(
    (prop) => {
      const value = flatStyle[prop];
      return typeof value === 'number' && value > 0;
    }
  );

  // Conditionally add overflow: 'hidden'
  const containerStyle = hasOverflow
    ? style // user controls overflow explicitly
    : hasBorderRadius
    ? [style, { overflow: 'hidden' as const }] // add overflow hidden if borderRadius exists
    : style; // no overflow added if no borderRadius

  if (!gradientStart || !gradientEnd) {
    return React.createElement(View, { style }, children);
  }

  const stops = colors.map((color, index) =>
    React.createElement(Stop, {
      key: index,
      offset: `${(index / (colors.length - 1)) * 100}%`,
      stopColor: color,
      stopOpacity: "1"
    })
  );

  const gradient = React.createElement(
    LinearGradient,
    {
      id: "grad",
      x1: `${gradientStart.x * 100}%`,
      y1: `${gradientStart.y * 100}%`,
      x2: `${gradientEnd.x * 100}%`,
      y2: `${gradientEnd.y * 100}%`
    },
    stops
  );

  const defs = React.createElement(Defs, null, gradient);
  const rect = React.createElement(Rect, {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#grad)"
  });

  const svg = React.createElement(
    Svg,
    { style: StyleSheet.absoluteFill, pointerEvents: "none" },
    defs,
    rect
  );

  return React.createElement(View, { style: containerStyle }, svg, children);
};

export default GradientView;
