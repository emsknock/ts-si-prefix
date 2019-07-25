const significandMap = {
    hi: [
        "", "da", "h", // Null, deca, and hecto
        "k", "k", "k", // Kilo  (3  to  5)
        "M", "M", "M", // Mega  (6  to  8)
        "G", "G", "G", // Giga  (9  to 11)
        "T", "T", "T", // Tera  (12 to 14)
        "P", "P", "P", // Peta  (15 to 17)
        "E", "E", "E", // Exa   (18 to 20)
        "Z", "Z", "Z", // Zetta (21 to 23)
        "Y", // Yotta (24 and more)
    ],
    lo: [
        "", "d", "c", "m", // Null, deci, centi, and milli
        "μ", "μ", "μ", // Micro (-4  to  -6)
        "n", "n", "n", // Nano  (-7  to  -9)
        "p", "p", "p", // Pico  (-10 to -12)
        "f", "f", "f", // Femto (-13 to -15)
        "a", "a", "a", // Atto  (-16 to -18)
        "z", "z", "z", // Zepto (-19 to -21)
        "y", // Yocto (-22 and less)
    ],
}

export const getPrefix = (value: number): string => {

    if(isNaN(value)) throw new TypeError("getPrefix(): Value must be a number");

    if(value < 0) return getPrefix(-value);
    if(value === 0) return "";

    const { floor, log10, abs } = Math;

    const significand = floor(log10(value));

    const prefix = significandMap[significand > 0 ? "hi" : "lo"][abs(significand)];

    return prefix;

}