"use strict";
// Generated from tests/Expr.g4 by ANTLR 4.13.1
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
exports.ExprLexer = void 0;
var antlr = require("antlr4ng");
var ExprLexer = /** @class */ (function (_super) {
    __extends(ExprLexer, _super);
    function ExprLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr.LexerATNSimulator(_this, ExprLexer._ATN, ExprLexer.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(ExprLexer.prototype, "grammarFileName", {
        get: function () { return "Expr.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "literalNames", {
        get: function () { return ExprLexer.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "symbolicNames", {
        get: function () { return ExprLexer.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "ruleNames", {
        get: function () { return ExprLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "serializedATN", {
        get: function () { return ExprLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "channelNames", {
        get: function () { return ExprLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "modeNames", {
        get: function () { return ExprLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprLexer, "_ATN", {
        get: function () {
            if (!ExprLexer.__ATN) {
                ExprLexer.__ATN = new antlr.ATNDeserializer().deserialize(ExprLexer._serializedATN);
            }
            return ExprLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    ExprLexer.prototype.getVocabulary = function () {
        return ExprLexer.vocabulary;
    };
    ExprLexer.VAR = 1;
    ExprLexer.LET = 2;
    ExprLexer.PLUS = 3;
    ExprLexer.MINUS = 4;
    ExprLexer.MULTIPLY = 5;
    ExprLexer.DIVIDE = 6;
    ExprLexer.EQUAL = 7;
    ExprLexer.OPEN_PAR = 8;
    ExprLexer.CLOSE_PAR = 9;
    ExprLexer.ID = 10;
    ExprLexer.WS = 11;
    ExprLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];
    ExprLexer.literalNames = [
        null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'"
    ];
    ExprLexer.symbolicNames = [
        null, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL",
        "OPEN_PAR", "CLOSE_PAR", "ID", "WS"
    ];
    ExprLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    ExprLexer.ruleNames = [
        "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", "OPEN_PAR",
        "CLOSE_PAR", "ID", "WS",
    ];
    ExprLexer._serializedATN = [
        4, 0, 11, 56, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2,
        6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 7, 1, 7, 1, 8, 1, 8,
        1, 9, 1, 9, 5, 9, 48, 8, 9, 10, 9, 12, 9, 51, 9, 9, 1, 10, 1, 10, 1, 10, 1, 10, 0, 0, 11, 1,
        1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 1, 0, 9, 2, 0, 86, 86,
        118, 118, 2, 0, 65, 65, 97, 97, 2, 0, 82, 82, 114, 114, 2, 0, 76, 76, 108, 108, 2, 0,
        69, 69, 101, 101, 2, 0, 84, 84, 116, 116, 2, 0, 65, 90, 97, 122, 4, 0, 48, 57, 65, 90,
        95, 95, 97, 122, 3, 0, 9, 10, 13, 13, 32, 32, 56, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5,
        1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 0, 15, 1,
        0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 1, 23, 1, 0, 0, 0, 3, 27, 1,
        0, 0, 0, 5, 31, 1, 0, 0, 0, 7, 33, 1, 0, 0, 0, 9, 35, 1, 0, 0, 0, 11, 37, 1, 0, 0, 0, 13, 39,
        1, 0, 0, 0, 15, 41, 1, 0, 0, 0, 17, 43, 1, 0, 0, 0, 19, 45, 1, 0, 0, 0, 21, 52, 1, 0, 0, 0,
        23, 24, 7, 0, 0, 0, 24, 25, 7, 1, 0, 0, 25, 26, 7, 2, 0, 0, 26, 2, 1, 0, 0, 0, 27, 28, 7, 3,
        0, 0, 28, 29, 7, 4, 0, 0, 29, 30, 7, 5, 0, 0, 30, 4, 1, 0, 0, 0, 31, 32, 5, 43, 0, 0, 32, 6,
        1, 0, 0, 0, 33, 34, 5, 45, 0, 0, 34, 8, 1, 0, 0, 0, 35, 36, 5, 42, 0, 0, 36, 10, 1, 0, 0, 0,
        37, 38, 5, 47, 0, 0, 38, 12, 1, 0, 0, 0, 39, 40, 5, 61, 0, 0, 40, 14, 1, 0, 0, 0, 41, 42,
        5, 40, 0, 0, 42, 16, 1, 0, 0, 0, 43, 44, 5, 41, 0, 0, 44, 18, 1, 0, 0, 0, 45, 49, 7, 6, 0,
        0, 46, 48, 7, 7, 0, 0, 47, 46, 1, 0, 0, 0, 48, 51, 1, 0, 0, 0, 49, 47, 1, 0, 0, 0, 49, 50,
        1, 0, 0, 0, 50, 20, 1, 0, 0, 0, 51, 49, 1, 0, 0, 0, 52, 53, 7, 8, 0, 0, 53, 54, 1, 0, 0, 0,
        54, 55, 6, 10, 0, 0, 55, 22, 1, 0, 0, 0, 2, 0, 49, 1, 0, 1, 0
    ];
    ExprLexer.vocabulary = new antlr.Vocabulary(ExprLexer.literalNames, ExprLexer.symbolicNames, []);
    ExprLexer.decisionsToDFA = ExprLexer._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return ExprLexer;
}(antlr.Lexer));
exports.ExprLexer = ExprLexer;
