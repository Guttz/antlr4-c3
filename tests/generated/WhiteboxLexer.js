"use strict";
// Generated from tests/Whitebox.g4 by ANTLR 4.13.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteboxLexer = void 0;
var antlr = require("antlr4ng");
var WhiteboxLexer = /** @class */ (function (_super) {
    __extends(WhiteboxLexer, _super);
    function WhiteboxLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr.LexerATNSimulator(_this, WhiteboxLexer._ATN, WhiteboxLexer.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(WhiteboxLexer.prototype, "grammarFileName", {
        get: function () { return "Whitebox.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "literalNames", {
        get: function () { return WhiteboxLexer.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "symbolicNames", {
        get: function () { return WhiteboxLexer.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "ruleNames", {
        get: function () { return WhiteboxLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "serializedATN", {
        get: function () { return WhiteboxLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "channelNames", {
        get: function () { return WhiteboxLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer.prototype, "modeNames", {
        get: function () { return WhiteboxLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxLexer, "_ATN", {
        get: function () {
            if (!WhiteboxLexer.__ATN) {
                WhiteboxLexer.__ATN = new antlr.ATNDeserializer().deserialize(WhiteboxLexer._serializedATN);
            }
            return WhiteboxLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    WhiteboxLexer.prototype.getVocabulary = function () {
        return WhiteboxLexer.vocabulary;
    };
    WhiteboxLexer.LOREM = 1;
    WhiteboxLexer.IPSUM = 2;
    WhiteboxLexer.DOLOR = 3;
    WhiteboxLexer.SIT = 4;
    WhiteboxLexer.AMET = 5;
    WhiteboxLexer.CONSECTETUR = 6;
    WhiteboxLexer.ADIPISCING = 7;
    WhiteboxLexer.WS = 8;
    WhiteboxLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];
    WhiteboxLexer.literalNames = [
        null, "'LOREM'", "'IPSUM'", "'DOLOR'", "'SIT'", "'AMET'", "'CONSECTETUR'",
        "'ADIPISCING'"
    ];
    WhiteboxLexer.symbolicNames = [
        null, "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING",
        "WS"
    ];
    WhiteboxLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    WhiteboxLexer.ruleNames = [
        "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING",
        "WS",
    ];
    WhiteboxLexer._serializedATN = [
        4, 0, 8, 71, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
        6, 7, 6, 2, 7, 7, 7, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1,
        5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
        6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7, 1, 7, 0, 0, 8, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5,
        11, 6, 13, 7, 15, 8, 1, 0, 1, 3, 0, 9, 10, 13, 13, 32, 32, 70, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0,
        0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0,
        0, 0, 15, 1, 0, 0, 0, 1, 17, 1, 0, 0, 0, 3, 23, 1, 0, 0, 0, 5, 29, 1, 0, 0, 0, 7, 35, 1, 0, 0,
        0, 9, 39, 1, 0, 0, 0, 11, 44, 1, 0, 0, 0, 13, 56, 1, 0, 0, 0, 15, 67, 1, 0, 0, 0, 17, 18, 5,
        76, 0, 0, 18, 19, 5, 79, 0, 0, 19, 20, 5, 82, 0, 0, 20, 21, 5, 69, 0, 0, 21, 22, 5, 77, 0,
        0, 22, 2, 1, 0, 0, 0, 23, 24, 5, 73, 0, 0, 24, 25, 5, 80, 0, 0, 25, 26, 5, 83, 0, 0, 26, 27,
        5, 85, 0, 0, 27, 28, 5, 77, 0, 0, 28, 4, 1, 0, 0, 0, 29, 30, 5, 68, 0, 0, 30, 31, 5, 79, 0,
        0, 31, 32, 5, 76, 0, 0, 32, 33, 5, 79, 0, 0, 33, 34, 5, 82, 0, 0, 34, 6, 1, 0, 0, 0, 35, 36,
        5, 83, 0, 0, 36, 37, 5, 73, 0, 0, 37, 38, 5, 84, 0, 0, 38, 8, 1, 0, 0, 0, 39, 40, 5, 65, 0,
        0, 40, 41, 5, 77, 0, 0, 41, 42, 5, 69, 0, 0, 42, 43, 5, 84, 0, 0, 43, 10, 1, 0, 0, 0, 44,
        45, 5, 67, 0, 0, 45, 46, 5, 79, 0, 0, 46, 47, 5, 78, 0, 0, 47, 48, 5, 83, 0, 0, 48, 49, 5,
        69, 0, 0, 49, 50, 5, 67, 0, 0, 50, 51, 5, 84, 0, 0, 51, 52, 5, 69, 0, 0, 52, 53, 5, 84, 0,
        0, 53, 54, 5, 85, 0, 0, 54, 55, 5, 82, 0, 0, 55, 12, 1, 0, 0, 0, 56, 57, 5, 65, 0, 0, 57,
        58, 5, 68, 0, 0, 58, 59, 5, 73, 0, 0, 59, 60, 5, 80, 0, 0, 60, 61, 5, 73, 0, 0, 61, 62, 5,
        83, 0, 0, 62, 63, 5, 67, 0, 0, 63, 64, 5, 73, 0, 0, 64, 65, 5, 78, 0, 0, 65, 66, 5, 71, 0,
        0, 66, 14, 1, 0, 0, 0, 67, 68, 7, 0, 0, 0, 68, 69, 1, 0, 0, 0, 69, 70, 6, 7, 0, 0, 70, 16,
        1, 0, 0, 0, 1, 0, 1, 6, 0, 0
    ];
    WhiteboxLexer.vocabulary = new antlr.Vocabulary(WhiteboxLexer.literalNames, WhiteboxLexer.symbolicNames, []);
    WhiteboxLexer.decisionsToDFA = WhiteboxLexer._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return WhiteboxLexer;
}(antlr.Lexer));
exports.WhiteboxLexer = WhiteboxLexer;
