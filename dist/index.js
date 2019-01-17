"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function camelCase() {
    var words = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        words[_i] = arguments[_i];
    }
    return words.filter(function (w) { return !!w; }).reduce(function (p, c, i) { return p + (!i ? c.charAt(0).toLowerCase() + c.slice(1) : c.charAt(0).toUpperCase() + c.slice(1)); }, '');
}
exports.camelCase = camelCase;
