# react-native-multi-color-view

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

The package includes `react-native-svg` as a dependency, so you don't need to install it separately.

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

## License

MIT 