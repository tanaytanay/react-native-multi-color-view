# react-native-multi-color-view

[![npm version](https://img.shields.io/npm/v/react-native-multi-color-view.svg)](https://www.npmjs.com/package/react-native-multi-color-view)
[![npm downloads](https://img.shields.io/npm/dm/react-native-multi-color-view.svg)](https://www.npmjs.com/package/react-native-multi-color-view)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform - iOS](https://img.shields.io/badge/platform-iOS-blue.svg)](https://www.apple.com/ios/)
[![Platform - Android](https://img.shields.io/badge/platform-Android-green.svg)](https://www.android.com/)
[![Platform - macOS](https://img.shields.io/badge/platform-macOS-black.svg)](https://www.apple.com/macos/)

A React Native component for creating beautiful multi-color gradient views.

## Requirements

- React Native >= 0.60.0
- React >= 16.8.0
- react-native-svg >= 9.0.0

## Installation

```bash
npm install react-native-multi-color-view react-native-svg
# or
yarn add react-native-multi-color-view react-native-svg

# For iOS, run:
cd ios && pod install
```

## Usage

### With Gradient Colors
```jsx
import { GradientView } from 'react-native-multi-color-view';

// In your component:
<GradientView
  colors={['#FF0000', '#00FF00', '#0000FF']}
  style={{ width: 200, height: 200 }}
/>
```

### Without Colors (Regular View)
```jsx
import { GradientView } from 'react-native-multi-color-view';

// In your component:
<GradientView
  style={{ width: 200, height: 200 }}
>
  <Text>Regular view without gradient</Text>
</GradientView>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| colors | string[] | Array of color values (hex, rgb, rgba). If not provided, renders as a regular View |
| style | ViewStyle | Style for the gradient view |
| start | { x: number, y: number } | Starting point of the gradient (0-1) |
| end | { x: number, y: number } | Ending point of the gradient (0-1) |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 