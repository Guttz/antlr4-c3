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
exports.IdentifierContext = exports.FunctionRefContext = exports.VariableRefContext = exports.SimpleExpressionContext = exports.AssignmentContext = exports.ExpressionContext = exports.ExprParser = void 0;
var antlr = require("antlr4ng");
var ExprParser = /** @class */ (function (_super) {
    __extends(ExprParser, _super);
    function ExprParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr.ParserATNSimulator(_this, ExprParser._ATN, ExprParser.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(ExprParser.prototype, "grammarFileName", {
        get: function () { return "Expr.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "literalNames", {
        get: function () { return ExprParser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "symbolicNames", {
        get: function () { return ExprParser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "ruleNames", {
        get: function () { return ExprParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "serializedATN", {
        get: function () { return ExprParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    ExprParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    };
    ExprParser.prototype.expression = function () {
        var localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 0, ExprParser.RULE_expression);
        try {
            this.state = 14;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ExprParser.VAR:
                case ExprParser.LET:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 12;
                        this.assignment();
                    }
                    break;
                case ExprParser.ID:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 13;
                        this.simpleExpression(0);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    ExprParser.prototype.assignment = function () {
        var localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(localctx, 2, ExprParser.RULE_assignment);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 16;
                _la = this._input.LA(1);
                if (!(_la === 1 || _la === 2)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 17;
                this.match(ExprParser.ID);
                this.state = 18;
                this.match(ExprParser.EQUAL);
                this.state = 19;
                this.simpleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    ExprParser.prototype.simpleExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new SimpleExpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 4;
        this.enterRecursionRule(localctx, 4, ExprParser.RULE_simpleExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 24;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 22;
                            this.variableRef();
                        }
                        break;
                    case 2:
                        {
                            this.state = 23;
                            this.functionRef();
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 34;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 32;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new SimpleExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 26;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 27;
                                        _la = this._input.LA(1);
                                        if (!(_la === 3 || _la === 4)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 28;
                                        this.simpleExpression(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new SimpleExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 29;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 30;
                                        _la = this._input.LA(1);
                                        if (!(_la === 5 || _la === 6)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 31;
                                        this.simpleExpression(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 36;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    };
    ExprParser.prototype.variableRef = function () {
        var localctx = new VariableRefContext(this._ctx, this.state);
        this.enterRule(localctx, 6, ExprParser.RULE_variableRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 37;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    ExprParser.prototype.functionRef = function () {
        var localctx = new FunctionRefContext(this._ctx, this.state);
        this.enterRule(localctx, 8, ExprParser.RULE_functionRef);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 39;
                this.identifier();
                this.state = 40;
                this.match(ExprParser.OPEN_PAR);
                this.state = 41;
                this.match(ExprParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    ExprParser.prototype.identifier = function () {
        var localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 10, ExprParser.RULE_identifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 43;
                this.match(ExprParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    };
    ExprParser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.simpleExpression_sempred(localctx, predIndex);
        }
        return true;
    };
    ExprParser.prototype.simpleExpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
            case 1:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(ExprParser, "_ATN", {
        get: function () {
            if (!ExprParser.__ATN) {
                ExprParser.__ATN = new antlr.ATNDeserializer().deserialize(ExprParser._serializedATN);
            }
            return ExprParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    ExprParser.prototype.getVocabulary = function () {
        return ExprParser.vocabulary;
    };
    ExprParser.VAR = 1;
    ExprParser.LET = 2;
    ExprParser.PLUS = 3;
    ExprParser.MINUS = 4;
    ExprParser.MULTIPLY = 5;
    ExprParser.DIVIDE = 6;
    ExprParser.EQUAL = 7;
    ExprParser.OPEN_PAR = 8;
    ExprParser.CLOSE_PAR = 9;
    ExprParser.ID = 10;
    ExprParser.WS = 11;
    ExprParser.RULE_expression = 0;
    ExprParser.RULE_assignment = 1;
    ExprParser.RULE_simpleExpression = 2;
    ExprParser.RULE_variableRef = 3;
    ExprParser.RULE_functionRef = 4;
    ExprParser.RULE_identifier = 5;
    ExprParser.literalNames = [
        null, null, null, "'+'", "'-'", "'*'", "'/'", "'='", "'('", "')'"
    ];
    ExprParser.symbolicNames = [
        null, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL",
        "OPEN_PAR", "CLOSE_PAR", "ID", "WS"
    ];
    ExprParser.ruleNames = [
        "expression", "assignment", "simpleExpression", "variableRef", "functionRef",
        "identifier",
    ];
    ExprParser._serializedATN = [
        4, 1, 11, 46, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 1, 0, 1,
        0, 3, 0, 15, 8, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 3, 2, 25, 8, 2, 1, 2, 1, 2,
        1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 33, 8, 2, 10, 2, 12, 2, 36, 9, 2, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4,
        1, 4, 1, 5, 1, 5, 1, 5, 0, 1, 4, 6, 0, 2, 4, 6, 8, 10, 0, 3, 1, 0, 1, 2, 1, 0, 3, 4, 1, 0, 5, 6,
        43, 0, 14, 1, 0, 0, 0, 2, 16, 1, 0, 0, 0, 4, 24, 1, 0, 0, 0, 6, 37, 1, 0, 0, 0, 8, 39, 1, 0,
        0, 0, 10, 43, 1, 0, 0, 0, 12, 15, 3, 2, 1, 0, 13, 15, 3, 4, 2, 0, 14, 12, 1, 0, 0, 0, 14, 13,
        1, 0, 0, 0, 15, 1, 1, 0, 0, 0, 16, 17, 7, 0, 0, 0, 17, 18, 5, 10, 0, 0, 18, 19, 5, 7, 0, 0,
        19, 20, 3, 4, 2, 0, 20, 3, 1, 0, 0, 0, 21, 22, 6, 2, -1, 0, 22, 25, 3, 6, 3, 0, 23, 25, 3,
        8, 4, 0, 24, 21, 1, 0, 0, 0, 24, 23, 1, 0, 0, 0, 25, 34, 1, 0, 0, 0, 26, 27, 10, 4, 0, 0, 27,
        28, 7, 1, 0, 0, 28, 33, 3, 4, 2, 5, 29, 30, 10, 3, 0, 0, 30, 31, 7, 2, 0, 0, 31, 33, 3, 4,
        2, 4, 32, 26, 1, 0, 0, 0, 32, 29, 1, 0, 0, 0, 33, 36, 1, 0, 0, 0, 34, 32, 1, 0, 0, 0, 34, 35,
        1, 0, 0, 0, 35, 5, 1, 0, 0, 0, 36, 34, 1, 0, 0, 0, 37, 38, 3, 10, 5, 0, 38, 7, 1, 0, 0, 0, 39,
        40, 3, 10, 5, 0, 40, 41, 5, 8, 0, 0, 41, 42, 5, 9, 0, 0, 42, 9, 1, 0, 0, 0, 43, 44, 5, 10,
        0, 0, 44, 11, 1, 0, 0, 0, 4, 14, 24, 32, 34
    ];
    ExprParser.vocabulary = new antlr.Vocabulary(ExprParser.literalNames, ExprParser.symbolicNames, []);
    ExprParser.decisionsToDFA = ExprParser._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return ExprParser;
}(antlr.Parser));
exports.ExprParser = ExprParser;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignment = function () {
        return this.getTypedRuleContext(AssignmentContext, 0);
    };
    ExpressionContext.prototype.simpleExpression = function () {
        return this.getTypedRuleContext(SimpleExpressionContext, 0);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_expression;
        },
        enumerable: false,
        configurable: true
    });
    return ExpressionContext;
}(antlr.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var AssignmentContext = /** @class */ (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.ID = function () {
        return this.getToken(ExprParser.ID, 0);
    };
    AssignmentContext.prototype.EQUAL = function () {
        return this.getToken(ExprParser.EQUAL, 0);
    };
    AssignmentContext.prototype.simpleExpression = function () {
        return this.getTypedRuleContext(SimpleExpressionContext, 0);
    };
    AssignmentContext.prototype.VAR = function () {
        return this.getToken(ExprParser.VAR, 0);
    };
    AssignmentContext.prototype.LET = function () {
        return this.getToken(ExprParser.LET, 0);
    };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_assignment;
        },
        enumerable: false,
        configurable: true
    });
    return AssignmentContext;
}(antlr.ParserRuleContext));
exports.AssignmentContext = AssignmentContext;
var SimpleExpressionContext = /** @class */ (function (_super) {
    __extends(SimpleExpressionContext, _super);
    function SimpleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpressionContext.prototype.variableRef = function () {
        return this.getTypedRuleContext(VariableRefContext, 0);
    };
    SimpleExpressionContext.prototype.functionRef = function () {
        return this.getTypedRuleContext(FunctionRefContext, 0);
    };
    SimpleExpressionContext.prototype.simpleExpression__list = function () {
        return this.getTypedRuleContexts(SimpleExpressionContext);
    };
    SimpleExpressionContext.prototype.simpleExpression = function (i) {
        return this.getTypedRuleContext(SimpleExpressionContext, i);
    };
    SimpleExpressionContext.prototype.PLUS = function () {
        return this.getToken(ExprParser.PLUS, 0);
    };
    SimpleExpressionContext.prototype.MINUS = function () {
        return this.getToken(ExprParser.MINUS, 0);
    };
    SimpleExpressionContext.prototype.MULTIPLY = function () {
        return this.getToken(ExprParser.MULTIPLY, 0);
    };
    SimpleExpressionContext.prototype.DIVIDE = function () {
        return this.getToken(ExprParser.DIVIDE, 0);
    };
    Object.defineProperty(SimpleExpressionContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_simpleExpression;
        },
        enumerable: false,
        configurable: true
    });
    return SimpleExpressionContext;
}(antlr.ParserRuleContext));
exports.SimpleExpressionContext = SimpleExpressionContext;
var VariableRefContext = /** @class */ (function (_super) {
    __extends(VariableRefContext, _super);
    function VariableRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableRefContext.prototype.identifier = function () {
        return this.getTypedRuleContext(IdentifierContext, 0);
    };
    Object.defineProperty(VariableRefContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_variableRef;
        },
        enumerable: false,
        configurable: true
    });
    return VariableRefContext;
}(antlr.ParserRuleContext));
exports.VariableRefContext = VariableRefContext;
var FunctionRefContext = /** @class */ (function (_super) {
    __extends(FunctionRefContext, _super);
    function FunctionRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionRefContext.prototype.identifier = function () {
        return this.getTypedRuleContext(IdentifierContext, 0);
    };
    FunctionRefContext.prototype.OPEN_PAR = function () {
        return this.getToken(ExprParser.OPEN_PAR, 0);
    };
    FunctionRefContext.prototype.CLOSE_PAR = function () {
        return this.getToken(ExprParser.CLOSE_PAR, 0);
    };
    Object.defineProperty(FunctionRefContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_functionRef;
        },
        enumerable: false,
        configurable: true
    });
    return FunctionRefContext;
}(antlr.ParserRuleContext));
exports.FunctionRefContext = FunctionRefContext;
var IdentifierContext = /** @class */ (function (_super) {
    __extends(IdentifierContext, _super);
    function IdentifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdentifierContext.prototype.ID = function () {
        return this.getToken(ExprParser.ID, 0);
    };
    Object.defineProperty(IdentifierContext.prototype, "ruleIndex", {
        get: function () {
            return ExprParser.RULE_identifier;
        },
        enumerable: false,
        configurable: true
    });
    return IdentifierContext;
}(antlr.ParserRuleContext));
exports.IdentifierContext = IdentifierContext;
