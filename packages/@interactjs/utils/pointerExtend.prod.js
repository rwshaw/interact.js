function e(o,t){for(const n in t){const r=e.prefixedPropREs;let i=!1;for(const e in r)if(0===n.indexOf(e)&&r[e].test(n)){i=!0;break}i||"function"==typeof t[n]||(o[n]=t[n])}return o}e.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};export default e;
//# sourceMappingURL=pointerExtend.prod.js.map