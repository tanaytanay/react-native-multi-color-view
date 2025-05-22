"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_svg_1 = __importStar(require("react-native-svg"));
var borderRadiusProps = [
    'borderRadius',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
];
var GradientView = function (_a) {
    var colors = _a.colors, start = _a.start, end = _a.end, style = _a.style, children = _a.children;
    var hasValidColors = Array.isArray(colors) && colors.length >= 2;
    var gradientStart = start !== null && start !== void 0 ? start : (hasValidColors ? { x: 0, y: 0 } : null);
    var gradientEnd = end !== null && end !== void 0 ? end : (hasValidColors ? { x: 0, y: 1 } : null);
    if (!hasValidColors) {
        var fallbackStyle = (colors === null || colors === void 0 ? void 0 : colors[0])
            ? [{ backgroundColor: colors[0] }, style]
            : [style];
        return react_1.default.createElement(react_native_1.View, { style: fallbackStyle }, children);
    }
    var flatStyle = react_native_1.StyleSheet.flatten(style) || {};
    var hasOverflow = flatStyle.hasOwnProperty('overflow');
    var hasBorderRadius = borderRadiusProps.some(function (prop) {
        var value = flatStyle[prop];
        return typeof value === 'number' && value > 0;
    });
    // Conditionally add overflow: 'hidden'
    var containerStyle = hasOverflow
        ? style // user controls overflow explicitly
        : hasBorderRadius
            ? [style, { overflow: 'hidden' }] // add overflow hidden if borderRadius exists
            : style; // no overflow added if no borderRadius
    if (!gradientStart || !gradientEnd) {
        return react_1.default.createElement(react_native_1.View, { style: style }, children);
    }
    var stops = colors.map(function (color, index) {
        return react_1.default.createElement(react_native_svg_1.Stop, {
            key: index,
            offset: "".concat((index / (colors.length - 1)) * 100, "%"),
            stopColor: color,
            stopOpacity: "1"
        });
    });
    var gradient = react_1.default.createElement(react_native_svg_1.LinearGradient, {
        id: "grad",
        x1: "".concat(gradientStart.x * 100, "%"),
        y1: "".concat(gradientStart.y * 100, "%"),
        x2: "".concat(gradientEnd.x * 100, "%"),
        y2: "".concat(gradientEnd.y * 100, "%")
    }, stops);
    var defs = react_1.default.createElement(react_native_svg_1.Defs, null, gradient);
    var rect = react_1.default.createElement(react_native_svg_1.Rect, {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(#grad)"
    });
    var svg = react_1.default.createElement(react_native_svg_1.default, { style: react_native_1.StyleSheet.absoluteFill, pointerEvents: "none" }, defs, rect);
    return react_1.default.createElement(react_native_1.View, { style: containerStyle }, svg, children);
};
exports.default = GradientView;
