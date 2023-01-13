const Text = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    let result = "";
    for (key in Text) {
        if (Math.floor(number / 100) == key) {
            if (Math.floor(number / 100)) {
                result += Text[key] + " hundred";
            } else result += Text[key];
        }
    }
    for (key in Text) {
        if (Math.floor(number % 100) == key) {
            result += " " + Text[key];
        } else if (Math.floor((number % 100) / 10) * 10 == key) {
            result += " " + Text[key];
        }
    }
    for (key in Text) {
        if (Math.floor(number % 100) % 10 == key) {
            result += " " + Text[key];
        }
    }
    return result;
};
