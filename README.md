# react-native-multi-color-view

A React Native component for creating beautiful multi-color gradient views.

## Installation

```bash
npm install react-native-multi-color-view
# or
yarn add react-native-multi-color-view
```

## Usage

```jsx
import { GradientView } from 'react-native-multi-color-view';

// In your component:
<GradientView
  colors={['#FF0000', '#00FF00', '#0000FF']}
  style={{ width: 200, height: 200 }}
/>
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| colors | string[] | Yes | Array of color values (hex, rgb, rgba) |
| style | ViewStyle | No | Style for the gradient view |
| start | { x: number, y: number } | No | Starting point of the gradient (0-1) |
| end | { x: number, y: number } | No | Ending point of the gradient (0-1) |

## License

MIT 