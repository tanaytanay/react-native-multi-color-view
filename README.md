# react-native-multi-color-view

[![npm version](https://img.shields.io/npm/v/react-native-multi-color-view.svg)](https://www.npmjs.com/package/react-native-multi-color-view)
[![npm downloads](https://img.shields.io/npm/dm/react-native-multi-color-view.svg)](https://www.npmjs.com/package/react-native-multi-color-view)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React Native component for creating beautiful multi-color gradient views.

## Requirements

- React Native >= 0.60.0
- React >= 16.8.0

## Installation

```bash
npm install react-native-multi-color-view
# or
yarn add react-native-multi-color-view
```

### About react-native-svg

This package includes `react-native-svg` as a dependency, but it's set up to work in two ways:

1. If you already have `react-native-svg` installed in your project:
   - The package will use your existing installation
   - No duplicate installation will occur
   - Your version will be used (must be >= 9.0.0)

2. If you don't have `react-native-svg` installed:
   - The package will automatically install it for you
   - You don't need to do anything extra

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

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| colors | string[] | No | Array of color values (hex, rgb, rgba). If not provided, renders as a regular View |
| style | ViewStyle | No | Style for the gradient view |
| start | { x: number, y: number } | No | Starting point of the gradient (0-1) |
| end | { x: number, y: number } | No | Ending point of the gradient (0-1) |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT 