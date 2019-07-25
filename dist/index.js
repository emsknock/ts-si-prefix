"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const significandMap = {
    hi: [
        "", "da", "h",
        "k", "k", "k",
        "M", "M", "M",
        "G", "G", "G",
        "T", "T", "T",
        "P", "P", "P",
        "E", "E", "E",
        "Z", "Z", "Z",
        "Y",
    ],
    lo: [
        "", "d", "c", "m",
        "μ", "μ", "μ",
        "n", "n", "n",
        "p", "p", "p",
        "f", "f", "f",
        "a", "a", "a",
        "z", "z", "z",
        "y",
    ],
};
exports.getPrefix = (value) => {
    if (isNaN(value))
        throw new TypeError("getPrefix(): Value must be a number");
    if (value < 0)
        return exports.getPrefix(-value);
    if (value === 0)
        return "";
    const { floor, log10, abs } = Math;
    const significand = floor(log10(value));
    const prefix = significandMap[significand > 0 ? "hi" : "lo"][abs(significand)];
    return prefix;
};
