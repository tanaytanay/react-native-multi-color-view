import React from 'react';
import { ViewStyle, ViewProps, StyleProp } from 'react-native';
interface GradientViewProps extends ViewProps {
    colors: string[];
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}
declare const GradientView: React.FC<GradientViewProps>;
export default GradientView;
