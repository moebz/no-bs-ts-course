"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStringsWithDefaultParam = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.default = addNumbers;
var addStrings = function (str1, str2) {
    return "".concat(str1, " ").concat(str2);
};
exports.addStrings = addStrings;
var addStringsWithDefaultParam = function (str1, str2) {
    if (str2 === void 0) { str2 = "defaultsecondstring"; }
    return "".concat(str1, " ").concat(str2);
};
exports.addStringsWithDefaultParam = addStringsWithDefaultParam;
// "string | number" is a "union type". It allows string and number.
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
// void means that the function doesn't return anything
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
// specifying that this function returns a promise
// that in turn returns a string
var fetchData = function (url) {
    return Promise.resolve("Data from ".concat(url));
};
exports.fetchData = fetchData;
// receive any number of parameters as an array
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
exports.introduce = introduce;
function getName(user) {
    return "".concat(user.first, " ").concat(user.last);
}
exports.getName = getName;
