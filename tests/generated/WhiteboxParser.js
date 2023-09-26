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
exports.Test8Context = exports.Test7Context = exports.Rule22Context = exports.Rule21Context = exports.Test6Context = exports.Rule19Context = exports.Rule18Context = exports.Test5Context = exports.Rule16Context = exports.Rule15Context = exports.Test4Context = exports.Rule13Context = exports.Test3Context = exports.Rule11Context = exports.Rule10Context = exports.Rule9Context = exports.Rule8Context = exports.Rule7Context = exports.Test2Context = exports.Rule5Context = exports.Rule4Context = exports.Rule3Context = exports.Rule2Context = exports.Rule1Context = exports.Test1Context = exports.WhiteboxParser = void 0;
var antlr = require("antlr4ng");
var WhiteboxParser = /** @class */ (function (_super) {
    __extends(WhiteboxParser, _super);
    function WhiteboxParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr.ParserATNSimulator(_this, WhiteboxParser._ATN, WhiteboxParser.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(WhiteboxParser.prototype, "grammarFileName", {
        get: function () { return "Whitebox.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxParser.prototype, "literalNames", {
        get: function () { return WhiteboxParser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxParser.prototype, "symbolicNames", {
        get: function () { return WhiteboxParser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxParser.prototype, "ruleNames", {
        get: function () { return WhiteboxParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WhiteboxParser.prototype, "serializedATN", {
        get: function () { return WhiteboxParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    WhiteboxParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    };
    WhiteboxParser.prototype.test1 = function () {
        var localctx = new Test1Context(this._ctx, this.state);
        this.enterRule(localctx, 0, WhiteboxParser.RULE_test1);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 50;
                this.rule1();
                this.state = 51;
                this.match(WhiteboxParser.ADIPISCING);
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
    WhiteboxParser.prototype.rule1 = function () {
        var localctx = new Rule1Context(this._ctx, this.state);
        this.enterRule(localctx, 2, WhiteboxParser.RULE_rule1);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 53;
                this.rule2();
                this.state = 54;
                this.match(WhiteboxParser.CONSECTETUR);
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
    WhiteboxParser.prototype.rule2 = function () {
        var localctx = new Rule2Context(this._ctx, this.state);
        this.enterRule(localctx, 4, WhiteboxParser.RULE_rule2);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 56;
                this.match(WhiteboxParser.LOREM);
                this.state = 57;
                this.rule3();
                this.state = 58;
                this.rule5();
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 4) {
                    {
                        {
                            this.state = 59;
                            this.match(WhiteboxParser.SIT);
                        }
                    }
                    this.state = 64;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 5) {
                    {
                        this.state = 65;
                        this.match(WhiteboxParser.AMET);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule3 = function () {
        var localctx = new Rule3Context(this._ctx, this.state);
        this.enterRule(localctx, 6, WhiteboxParser.RULE_rule3);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 68;
                this.rule4();
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3) {
                    {
                        this.state = 69;
                        this.match(WhiteboxParser.DOLOR);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule4 = function () {
        var localctx = new Rule4Context(this._ctx, this.state);
        this.enterRule(localctx, 8, WhiteboxParser.RULE_rule4);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 2) {
                    {
                        this.state = 72;
                        this.match(WhiteboxParser.IPSUM);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule5 = function () {
        var localctx = new Rule5Context(this._ctx, this.state);
        this.enterRule(localctx, 10, WhiteboxParser.RULE_rule5);
        try {
            this.enterOuterAlt(localctx, 1);
            // tslint:disable-next-line:no-empty
            {
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
    WhiteboxParser.prototype.test2 = function () {
        var localctx = new Test2Context(this._ctx, this.state);
        this.enterRule(localctx, 12, WhiteboxParser.RULE_test2);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 77;
                this.rule7();
                this.state = 78;
                this.match(WhiteboxParser.ADIPISCING);
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
    WhiteboxParser.prototype.rule7 = function () {
        var localctx = new Rule7Context(this._ctx, this.state);
        this.enterRule(localctx, 14, WhiteboxParser.RULE_rule7);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 80;
                this.rule8();
                this.state = 81;
                this.match(WhiteboxParser.CONSECTETUR);
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
    WhiteboxParser.prototype.rule8 = function () {
        var localctx = new Rule8Context(this._ctx, this.state);
        this.enterRule(localctx, 16, WhiteboxParser.RULE_rule8);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 83;
                this.match(WhiteboxParser.LOREM);
                this.state = 84;
                this.rule11();
                this.state = 85;
                this.rule9();
                this.state = 89;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 4) {
                    {
                        {
                            this.state = 86;
                            this.match(WhiteboxParser.SIT);
                        }
                    }
                    this.state = 91;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 93;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 5) {
                    {
                        this.state = 92;
                        this.match(WhiteboxParser.AMET);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule9 = function () {
        var localctx = new Rule9Context(this._ctx, this.state);
        this.enterRule(localctx, 18, WhiteboxParser.RULE_rule9);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 95;
                this.rule10();
                this.state = 97;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3) {
                    {
                        this.state = 96;
                        this.match(WhiteboxParser.DOLOR);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule10 = function () {
        var localctx = new Rule10Context(this._ctx, this.state);
        this.enterRule(localctx, 20, WhiteboxParser.RULE_rule10);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 2) {
                    {
                        this.state = 99;
                        this.match(WhiteboxParser.IPSUM);
                    }
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule11 = function () {
        var localctx = new Rule11Context(this._ctx, this.state);
        this.enterRule(localctx, 22, WhiteboxParser.RULE_rule11);
        try {
            this.enterOuterAlt(localctx, 1);
            // tslint:disable-next-line:no-empty
            {
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
    WhiteboxParser.prototype.test3 = function () {
        var localctx = new Test3Context(this._ctx, this.state);
        this.enterRule(localctx, 24, WhiteboxParser.RULE_test3);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 104;
                this.match(WhiteboxParser.LOREM);
                this.state = 106;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 2) {
                    {
                        this.state = 105;
                        this.match(WhiteboxParser.IPSUM);
                    }
                }
                this.state = 108;
                this.rule13();
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 109;
                            this.match(WhiteboxParser.AMET);
                        }
                    }
                    this.state = 112;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === 5);
                this.state = 114;
                this.match(WhiteboxParser.CONSECTETUR);
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
    WhiteboxParser.prototype.rule13 = function () {
        var localctx = new Rule13Context(this._ctx, this.state);
        this.enterRule(localctx, 26, WhiteboxParser.RULE_rule13);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 119;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === 3 || _la === 4) {
                    {
                        {
                            this.state = 116;
                            _la = this._input.LA(1);
                            if (!(_la === 3 || _la === 4)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 121;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.test4 = function () {
        var localctx = new Test4Context(this._ctx, this.state);
        this.enterRule(localctx, 28, WhiteboxParser.RULE_test4);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 122;
                this.match(WhiteboxParser.LOREM);
                this.state = 125;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                    case 1:
                        {
                            this.state = 123;
                            this.rule15();
                        }
                        break;
                    case 2:
                        {
                            this.state = 124;
                            this.rule16();
                        }
                        break;
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule15 = function () {
        var localctx = new Rule15Context(this._ctx, this.state);
        this.enterRule(localctx, 30, WhiteboxParser.RULE_rule15);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 127;
                this.match(WhiteboxParser.IPSUM);
                this.state = 128;
                this.match(WhiteboxParser.DOLOR);
                this.state = 129;
                this.match(WhiteboxParser.SIT);
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
    WhiteboxParser.prototype.rule16 = function () {
        var localctx = new Rule16Context(this._ctx, this.state);
        this.enterRule(localctx, 32, WhiteboxParser.RULE_rule16);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 131;
                this.match(WhiteboxParser.IPSUM);
                this.state = 132;
                this.match(WhiteboxParser.DOLOR);
                this.state = 133;
                this.match(WhiteboxParser.AMET);
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
    WhiteboxParser.prototype.test5 = function () {
        var localctx = new Test5Context(this._ctx, this.state);
        this.enterRule(localctx, 34, WhiteboxParser.RULE_test5);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 135;
                this.match(WhiteboxParser.LOREM);
                this.state = 138;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 136;
                            this.rule15();
                        }
                        break;
                    case 2:
                        {
                            this.state = 137;
                            this.rule16();
                        }
                        break;
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule18 = function () {
        var localctx = new Rule18Context(this._ctx, this.state);
        this.enterRule(localctx, 36, WhiteboxParser.RULE_rule18);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 140;
                this.match(WhiteboxParser.IPSUM);
                this.state = 141;
                this.match(WhiteboxParser.DOLOR);
                this.state = 142;
                _la = this._input.LA(1);
                if (!(_la === 4 || _la === 6)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule19 = function () {
        var localctx = new Rule19Context(this._ctx, this.state);
        this.enterRule(localctx, 38, WhiteboxParser.RULE_rule19);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 144;
                this.match(WhiteboxParser.IPSUM);
                this.state = 145;
                this.match(WhiteboxParser.DOLOR);
                this.state = 146;
                this.match(WhiteboxParser.AMET);
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
    WhiteboxParser.prototype.test6 = function () {
        var localctx = new Test6Context(this._ctx, this.state);
        this.enterRule(localctx, 40, WhiteboxParser.RULE_test6);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 148;
                this.match(WhiteboxParser.LOREM);
                this.state = 151;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                    case 1:
                        {
                            this.state = 149;
                            this.rule15();
                        }
                        break;
                    case 2:
                        {
                            this.state = 150;
                            this.rule16();
                        }
                        break;
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.rule21 = function () {
        var localctx = new Rule21Context(this._ctx, this.state);
        this.enterRule(localctx, 42, WhiteboxParser.RULE_rule21);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 153;
                this.match(WhiteboxParser.IPSUM);
                this.state = 154;
                this.match(WhiteboxParser.DOLOR);
                this.state = 155;
                this.match(WhiteboxParser.SIT);
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
    WhiteboxParser.prototype.rule22 = function () {
        var localctx = new Rule22Context(this._ctx, this.state);
        this.enterRule(localctx, 44, WhiteboxParser.RULE_rule22);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 157;
                this.match(WhiteboxParser.IPSUM);
                this.state = 158;
                this.match(WhiteboxParser.DOLOR);
                this.state = 159;
                _la = this._input.LA(1);
                if (!(_la === 5 || _la === 6)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.test7 = function () {
        var localctx = new Test7Context(this._ctx, this.state);
        this.enterRule(localctx, 46, WhiteboxParser.RULE_test7);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 161;
                this.match(WhiteboxParser.LOREM);
                this.state = 168;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 14, this._ctx)) {
                    case 1:
                        {
                            this.state = 162;
                            this.match(WhiteboxParser.IPSUM);
                            this.state = 163;
                            this.match(WhiteboxParser.DOLOR);
                            this.state = 164;
                            this.match(WhiteboxParser.SIT);
                        }
                        break;
                    case 2:
                        {
                            this.state = 165;
                            this.match(WhiteboxParser.IPSUM);
                            this.state = 166;
                            this.match(WhiteboxParser.DOLOR);
                            this.state = 167;
                            this.match(WhiteboxParser.AMET);
                        }
                        break;
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
            this.exitRule();
        }
        return localctx;
    };
    WhiteboxParser.prototype.test8 = function () {
        var localctx = new Test8Context(this._ctx, this.state);
        this.enterRule(localctx, 48, WhiteboxParser.RULE_test8);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 170;
                this.match(WhiteboxParser.LOREM);
                this.state = 179;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                    case 1:
                        {
                            this.state = 171;
                            this.match(WhiteboxParser.IPSUM);
                            this.state = 172;
                            this.match(WhiteboxParser.DOLOR);
                            this.state = 173;
                            this.match(WhiteboxParser.SIT);
                            this.state = 174;
                            this.match(WhiteboxParser.AMET);
                        }
                        break;
                    case 2:
                        {
                            this.state = 175;
                            this.match(WhiteboxParser.IPSUM);
                            this.state = 176;
                            this.match(WhiteboxParser.DOLOR);
                            this.state = 177;
                            this.match(WhiteboxParser.SIT);
                            this.state = 178;
                            this.match(WhiteboxParser.CONSECTETUR);
                        }
                        break;
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
            this.exitRule();
        }
        return localctx;
    };
    Object.defineProperty(WhiteboxParser, "_ATN", {
        get: function () {
            if (!WhiteboxParser.__ATN) {
                WhiteboxParser.__ATN = new antlr.ATNDeserializer().deserialize(WhiteboxParser._serializedATN);
            }
            return WhiteboxParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    WhiteboxParser.prototype.getVocabulary = function () {
        return WhiteboxParser.vocabulary;
    };
    WhiteboxParser.LOREM = 1;
    WhiteboxParser.IPSUM = 2;
    WhiteboxParser.DOLOR = 3;
    WhiteboxParser.SIT = 4;
    WhiteboxParser.AMET = 5;
    WhiteboxParser.CONSECTETUR = 6;
    WhiteboxParser.ADIPISCING = 7;
    WhiteboxParser.WS = 8;
    WhiteboxParser.RULE_test1 = 0;
    WhiteboxParser.RULE_rule1 = 1;
    WhiteboxParser.RULE_rule2 = 2;
    WhiteboxParser.RULE_rule3 = 3;
    WhiteboxParser.RULE_rule4 = 4;
    WhiteboxParser.RULE_rule5 = 5;
    WhiteboxParser.RULE_test2 = 6;
    WhiteboxParser.RULE_rule7 = 7;
    WhiteboxParser.RULE_rule8 = 8;
    WhiteboxParser.RULE_rule9 = 9;
    WhiteboxParser.RULE_rule10 = 10;
    WhiteboxParser.RULE_rule11 = 11;
    WhiteboxParser.RULE_test3 = 12;
    WhiteboxParser.RULE_rule13 = 13;
    WhiteboxParser.RULE_test4 = 14;
    WhiteboxParser.RULE_rule15 = 15;
    WhiteboxParser.RULE_rule16 = 16;
    WhiteboxParser.RULE_test5 = 17;
    WhiteboxParser.RULE_rule18 = 18;
    WhiteboxParser.RULE_rule19 = 19;
    WhiteboxParser.RULE_test6 = 20;
    WhiteboxParser.RULE_rule21 = 21;
    WhiteboxParser.RULE_rule22 = 22;
    WhiteboxParser.RULE_test7 = 23;
    WhiteboxParser.RULE_test8 = 24;
    WhiteboxParser.literalNames = [
        null, "'LOREM'", "'IPSUM'", "'DOLOR'", "'SIT'", "'AMET'", "'CONSECTETUR'",
        "'ADIPISCING'"
    ];
    WhiteboxParser.symbolicNames = [
        null, "LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSECTETUR", "ADIPISCING",
        "WS"
    ];
    WhiteboxParser.ruleNames = [
        "test1", "rule1", "rule2", "rule3", "rule4", "rule5", "test2", "rule7",
        "rule8", "rule9", "rule10", "rule11", "test3", "rule13", "test4",
        "rule15", "rule16", "test5", "rule18", "rule19", "test6", "rule21",
        "rule22", "test7", "test8",
    ];
    WhiteboxParser._serializedATN = [
        4, 1, 8, 182, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
        6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
        2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
        7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1,
        1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 61, 8, 2, 10, 2, 12, 2, 64, 9, 2, 1, 2, 3, 2, 67, 8, 2, 1,
        3, 1, 3, 3, 3, 71, 8, 3, 1, 4, 3, 4, 74, 8, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 7, 1, 7, 1, 7,
        1, 8, 1, 8, 1, 8, 1, 8, 5, 8, 88, 8, 8, 10, 8, 12, 8, 91, 9, 8, 1, 8, 3, 8, 94, 8, 8, 1, 9, 1,
        9, 3, 9, 98, 8, 9, 1, 10, 3, 10, 101, 8, 10, 1, 11, 1, 11, 1, 12, 1, 12, 3, 12, 107, 8, 12,
        1, 12, 1, 12, 4, 12, 111, 8, 12, 11, 12, 12, 12, 112, 1, 12, 1, 12, 1, 13, 5, 13, 118,
        8, 13, 10, 13, 12, 13, 121, 9, 13, 1, 14, 1, 14, 1, 14, 3, 14, 126, 8, 14, 1, 15, 1, 15,
        1, 15, 1, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 17, 3, 17, 139, 8, 17, 1, 18,
        1, 18, 1, 18, 1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 20, 1, 20, 1, 20, 3, 20, 152, 8, 20,
        1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1, 23, 1, 23,
        1, 23, 1, 23, 3, 23, 169, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24,
        1, 24, 3, 24, 180, 8, 24, 1, 24, 0, 0, 25, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24,
        26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 0, 3, 1, 0, 3, 4, 2, 0, 4, 4, 6, 6, 1, 0,
        5, 6, 172, 0, 50, 1, 0, 0, 0, 2, 53, 1, 0, 0, 0, 4, 56, 1, 0, 0, 0, 6, 68, 1, 0, 0, 0, 8, 73,
        1, 0, 0, 0, 10, 75, 1, 0, 0, 0, 12, 77, 1, 0, 0, 0, 14, 80, 1, 0, 0, 0, 16, 83, 1, 0, 0, 0,
        18, 95, 1, 0, 0, 0, 20, 100, 1, 0, 0, 0, 22, 102, 1, 0, 0, 0, 24, 104, 1, 0, 0, 0, 26, 119,
        1, 0, 0, 0, 28, 122, 1, 0, 0, 0, 30, 127, 1, 0, 0, 0, 32, 131, 1, 0, 0, 0, 34, 135, 1, 0,
        0, 0, 36, 140, 1, 0, 0, 0, 38, 144, 1, 0, 0, 0, 40, 148, 1, 0, 0, 0, 42, 153, 1, 0, 0, 0,
        44, 157, 1, 0, 0, 0, 46, 161, 1, 0, 0, 0, 48, 170, 1, 0, 0, 0, 50, 51, 3, 2, 1, 0, 51, 52,
        5, 7, 0, 0, 52, 1, 1, 0, 0, 0, 53, 54, 3, 4, 2, 0, 54, 55, 5, 6, 0, 0, 55, 3, 1, 0, 0, 0, 56,
        57, 5, 1, 0, 0, 57, 58, 3, 6, 3, 0, 58, 62, 3, 10, 5, 0, 59, 61, 5, 4, 0, 0, 60, 59, 1, 0,
        0, 0, 61, 64, 1, 0, 0, 0, 62, 60, 1, 0, 0, 0, 62, 63, 1, 0, 0, 0, 63, 66, 1, 0, 0, 0, 64, 62,
        1, 0, 0, 0, 65, 67, 5, 5, 0, 0, 66, 65, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 5, 1, 0, 0, 0, 68,
        70, 3, 8, 4, 0, 69, 71, 5, 3, 0, 0, 70, 69, 1, 0, 0, 0, 70, 71, 1, 0, 0, 0, 71, 7, 1, 0, 0,
        0, 72, 74, 5, 2, 0, 0, 73, 72, 1, 0, 0, 0, 73, 74, 1, 0, 0, 0, 74, 9, 1, 0, 0, 0, 75, 76, 1,
        0, 0, 0, 76, 11, 1, 0, 0, 0, 77, 78, 3, 14, 7, 0, 78, 79, 5, 7, 0, 0, 79, 13, 1, 0, 0, 0, 80,
        81, 3, 16, 8, 0, 81, 82, 5, 6, 0, 0, 82, 15, 1, 0, 0, 0, 83, 84, 5, 1, 0, 0, 84, 85, 3, 22,
        11, 0, 85, 89, 3, 18, 9, 0, 86, 88, 5, 4, 0, 0, 87, 86, 1, 0, 0, 0, 88, 91, 1, 0, 0, 0, 89,
        87, 1, 0, 0, 0, 89, 90, 1, 0, 0, 0, 90, 93, 1, 0, 0, 0, 91, 89, 1, 0, 0, 0, 92, 94, 5, 5, 0,
        0, 93, 92, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 17, 1, 0, 0, 0, 95, 97, 3, 20, 10, 0, 96, 98,
        5, 3, 0, 0, 97, 96, 1, 0, 0, 0, 97, 98, 1, 0, 0, 0, 98, 19, 1, 0, 0, 0, 99, 101, 5, 2, 0, 0,
        100, 99, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 21, 1, 0, 0, 0, 102, 103, 1, 0, 0, 0, 103,
        23, 1, 0, 0, 0, 104, 106, 5, 1, 0, 0, 105, 107, 5, 2, 0, 0, 106, 105, 1, 0, 0, 0, 106, 107,
        1, 0, 0, 0, 107, 108, 1, 0, 0, 0, 108, 110, 3, 26, 13, 0, 109, 111, 5, 5, 0, 0, 110, 109,
        1, 0, 0, 0, 111, 112, 1, 0, 0, 0, 112, 110, 1, 0, 0, 0, 112, 113, 1, 0, 0, 0, 113, 114,
        1, 0, 0, 0, 114, 115, 5, 6, 0, 0, 115, 25, 1, 0, 0, 0, 116, 118, 7, 0, 0, 0, 117, 116, 1,
        0, 0, 0, 118, 121, 1, 0, 0, 0, 119, 117, 1, 0, 0, 0, 119, 120, 1, 0, 0, 0, 120, 27, 1, 0,
        0, 0, 121, 119, 1, 0, 0, 0, 122, 125, 5, 1, 0, 0, 123, 126, 3, 30, 15, 0, 124, 126, 3,
        32, 16, 0, 125, 123, 1, 0, 0, 0, 125, 124, 1, 0, 0, 0, 126, 29, 1, 0, 0, 0, 127, 128, 5,
        2, 0, 0, 128, 129, 5, 3, 0, 0, 129, 130, 5, 4, 0, 0, 130, 31, 1, 0, 0, 0, 131, 132, 5, 2,
        0, 0, 132, 133, 5, 3, 0, 0, 133, 134, 5, 5, 0, 0, 134, 33, 1, 0, 0, 0, 135, 138, 5, 1, 0,
        0, 136, 139, 3, 30, 15, 0, 137, 139, 3, 32, 16, 0, 138, 136, 1, 0, 0, 0, 138, 137, 1,
        0, 0, 0, 139, 35, 1, 0, 0, 0, 140, 141, 5, 2, 0, 0, 141, 142, 5, 3, 0, 0, 142, 143, 7, 1,
        0, 0, 143, 37, 1, 0, 0, 0, 144, 145, 5, 2, 0, 0, 145, 146, 5, 3, 0, 0, 146, 147, 5, 5, 0,
        0, 147, 39, 1, 0, 0, 0, 148, 151, 5, 1, 0, 0, 149, 152, 3, 30, 15, 0, 150, 152, 3, 32,
        16, 0, 151, 149, 1, 0, 0, 0, 151, 150, 1, 0, 0, 0, 152, 41, 1, 0, 0, 0, 153, 154, 5, 2,
        0, 0, 154, 155, 5, 3, 0, 0, 155, 156, 5, 4, 0, 0, 156, 43, 1, 0, 0, 0, 157, 158, 5, 2, 0,
        0, 158, 159, 5, 3, 0, 0, 159, 160, 7, 2, 0, 0, 160, 45, 1, 0, 0, 0, 161, 168, 5, 1, 0, 0,
        162, 163, 5, 2, 0, 0, 163, 164, 5, 3, 0, 0, 164, 169, 5, 4, 0, 0, 165, 166, 5, 2, 0, 0,
        166, 167, 5, 3, 0, 0, 167, 169, 5, 5, 0, 0, 168, 162, 1, 0, 0, 0, 168, 165, 1, 0, 0, 0,
        169, 47, 1, 0, 0, 0, 170, 179, 5, 1, 0, 0, 171, 172, 5, 2, 0, 0, 172, 173, 5, 3, 0, 0, 173,
        174, 5, 4, 0, 0, 174, 180, 5, 5, 0, 0, 175, 176, 5, 2, 0, 0, 176, 177, 5, 3, 0, 0, 177,
        178, 5, 4, 0, 0, 178, 180, 5, 6, 0, 0, 179, 171, 1, 0, 0, 0, 179, 175, 1, 0, 0, 0, 180,
        49, 1, 0, 0, 0, 16, 62, 66, 70, 73, 89, 93, 97, 100, 106, 112, 119, 125, 138, 151, 168,
        179
    ];
    WhiteboxParser.vocabulary = new antlr.Vocabulary(WhiteboxParser.literalNames, WhiteboxParser.symbolicNames, []);
    WhiteboxParser.decisionsToDFA = WhiteboxParser._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return WhiteboxParser;
}(antlr.Parser));
exports.WhiteboxParser = WhiteboxParser;
var Test1Context = /** @class */ (function (_super) {
    __extends(Test1Context, _super);
    function Test1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test1Context.prototype.rule1 = function () {
        return this.getTypedRuleContext(Rule1Context, 0);
    };
    Test1Context.prototype.ADIPISCING = function () {
        return this.getToken(WhiteboxParser.ADIPISCING, 0);
    };
    Object.defineProperty(Test1Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test1;
        },
        enumerable: false,
        configurable: true
    });
    return Test1Context;
}(antlr.ParserRuleContext));
exports.Test1Context = Test1Context;
var Rule1Context = /** @class */ (function (_super) {
    __extends(Rule1Context, _super);
    function Rule1Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule1Context.prototype.rule2 = function () {
        return this.getTypedRuleContext(Rule2Context, 0);
    };
    Rule1Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Object.defineProperty(Rule1Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule1;
        },
        enumerable: false,
        configurable: true
    });
    return Rule1Context;
}(antlr.ParserRuleContext));
exports.Rule1Context = Rule1Context;
var Rule2Context = /** @class */ (function (_super) {
    __extends(Rule2Context, _super);
    function Rule2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule2Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Rule2Context.prototype.rule3 = function () {
        return this.getTypedRuleContext(Rule3Context, 0);
    };
    Rule2Context.prototype.rule5 = function () {
        return this.getTypedRuleContext(Rule5Context, 0);
    };
    Rule2Context.prototype.SIT__list = function () {
        return this.getTokens(WhiteboxParser.SIT);
    };
    Rule2Context.prototype.SIT = function (i) {
        return this.getToken(WhiteboxParser.SIT, i);
    };
    Rule2Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Object.defineProperty(Rule2Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule2;
        },
        enumerable: false,
        configurable: true
    });
    return Rule2Context;
}(antlr.ParserRuleContext));
exports.Rule2Context = Rule2Context;
var Rule3Context = /** @class */ (function (_super) {
    __extends(Rule3Context, _super);
    function Rule3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule3Context.prototype.rule4 = function () {
        return this.getTypedRuleContext(Rule4Context, 0);
    };
    Rule3Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Object.defineProperty(Rule3Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule3;
        },
        enumerable: false,
        configurable: true
    });
    return Rule3Context;
}(antlr.ParserRuleContext));
exports.Rule3Context = Rule3Context;
var Rule4Context = /** @class */ (function (_super) {
    __extends(Rule4Context, _super);
    function Rule4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule4Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Object.defineProperty(Rule4Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule4;
        },
        enumerable: false,
        configurable: true
    });
    return Rule4Context;
}(antlr.ParserRuleContext));
exports.Rule4Context = Rule4Context;
var Rule5Context = /** @class */ (function (_super) {
    __extends(Rule5Context, _super);
    function Rule5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Rule5Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule5;
        },
        enumerable: false,
        configurable: true
    });
    return Rule5Context;
}(antlr.ParserRuleContext));
exports.Rule5Context = Rule5Context;
var Test2Context = /** @class */ (function (_super) {
    __extends(Test2Context, _super);
    function Test2Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test2Context.prototype.rule7 = function () {
        return this.getTypedRuleContext(Rule7Context, 0);
    };
    Test2Context.prototype.ADIPISCING = function () {
        return this.getToken(WhiteboxParser.ADIPISCING, 0);
    };
    Object.defineProperty(Test2Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test2;
        },
        enumerable: false,
        configurable: true
    });
    return Test2Context;
}(antlr.ParserRuleContext));
exports.Test2Context = Test2Context;
var Rule7Context = /** @class */ (function (_super) {
    __extends(Rule7Context, _super);
    function Rule7Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule7Context.prototype.rule8 = function () {
        return this.getTypedRuleContext(Rule8Context, 0);
    };
    Rule7Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Object.defineProperty(Rule7Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule7;
        },
        enumerable: false,
        configurable: true
    });
    return Rule7Context;
}(antlr.ParserRuleContext));
exports.Rule7Context = Rule7Context;
var Rule8Context = /** @class */ (function (_super) {
    __extends(Rule8Context, _super);
    function Rule8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule8Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Rule8Context.prototype.rule11 = function () {
        return this.getTypedRuleContext(Rule11Context, 0);
    };
    Rule8Context.prototype.rule9 = function () {
        return this.getTypedRuleContext(Rule9Context, 0);
    };
    Rule8Context.prototype.SIT__list = function () {
        return this.getTokens(WhiteboxParser.SIT);
    };
    Rule8Context.prototype.SIT = function (i) {
        return this.getToken(WhiteboxParser.SIT, i);
    };
    Rule8Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Object.defineProperty(Rule8Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule8;
        },
        enumerable: false,
        configurable: true
    });
    return Rule8Context;
}(antlr.ParserRuleContext));
exports.Rule8Context = Rule8Context;
var Rule9Context = /** @class */ (function (_super) {
    __extends(Rule9Context, _super);
    function Rule9Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule9Context.prototype.rule10 = function () {
        return this.getTypedRuleContext(Rule10Context, 0);
    };
    Rule9Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Object.defineProperty(Rule9Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule9;
        },
        enumerable: false,
        configurable: true
    });
    return Rule9Context;
}(antlr.ParserRuleContext));
exports.Rule9Context = Rule9Context;
var Rule10Context = /** @class */ (function (_super) {
    __extends(Rule10Context, _super);
    function Rule10Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule10Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Object.defineProperty(Rule10Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule10;
        },
        enumerable: false,
        configurable: true
    });
    return Rule10Context;
}(antlr.ParserRuleContext));
exports.Rule10Context = Rule10Context;
var Rule11Context = /** @class */ (function (_super) {
    __extends(Rule11Context, _super);
    function Rule11Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Object.defineProperty(Rule11Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule11;
        },
        enumerable: false,
        configurable: true
    });
    return Rule11Context;
}(antlr.ParserRuleContext));
exports.Rule11Context = Rule11Context;
var Test3Context = /** @class */ (function (_super) {
    __extends(Test3Context, _super);
    function Test3Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test3Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test3Context.prototype.rule13 = function () {
        return this.getTypedRuleContext(Rule13Context, 0);
    };
    Test3Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Test3Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Test3Context.prototype.AMET__list = function () {
        return this.getTokens(WhiteboxParser.AMET);
    };
    Test3Context.prototype.AMET = function (i) {
        return this.getToken(WhiteboxParser.AMET, i);
    };
    Object.defineProperty(Test3Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test3;
        },
        enumerable: false,
        configurable: true
    });
    return Test3Context;
}(antlr.ParserRuleContext));
exports.Test3Context = Test3Context;
var Rule13Context = /** @class */ (function (_super) {
    __extends(Rule13Context, _super);
    function Rule13Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule13Context.prototype.DOLOR__list = function () {
        return this.getTokens(WhiteboxParser.DOLOR);
    };
    Rule13Context.prototype.DOLOR = function (i) {
        return this.getToken(WhiteboxParser.DOLOR, i);
    };
    Rule13Context.prototype.SIT__list = function () {
        return this.getTokens(WhiteboxParser.SIT);
    };
    Rule13Context.prototype.SIT = function (i) {
        return this.getToken(WhiteboxParser.SIT, i);
    };
    Object.defineProperty(Rule13Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule13;
        },
        enumerable: false,
        configurable: true
    });
    return Rule13Context;
}(antlr.ParserRuleContext));
exports.Rule13Context = Rule13Context;
var Test4Context = /** @class */ (function (_super) {
    __extends(Test4Context, _super);
    function Test4Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test4Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test4Context.prototype.rule15 = function () {
        return this.getTypedRuleContext(Rule15Context, 0);
    };
    Test4Context.prototype.rule16 = function () {
        return this.getTypedRuleContext(Rule16Context, 0);
    };
    Object.defineProperty(Test4Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test4;
        },
        enumerable: false,
        configurable: true
    });
    return Test4Context;
}(antlr.ParserRuleContext));
exports.Test4Context = Test4Context;
var Rule15Context = /** @class */ (function (_super) {
    __extends(Rule15Context, _super);
    function Rule15Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule15Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule15Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule15Context.prototype.SIT = function () {
        return this.getToken(WhiteboxParser.SIT, 0);
    };
    Object.defineProperty(Rule15Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule15;
        },
        enumerable: false,
        configurable: true
    });
    return Rule15Context;
}(antlr.ParserRuleContext));
exports.Rule15Context = Rule15Context;
var Rule16Context = /** @class */ (function (_super) {
    __extends(Rule16Context, _super);
    function Rule16Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule16Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule16Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule16Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Object.defineProperty(Rule16Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule16;
        },
        enumerable: false,
        configurable: true
    });
    return Rule16Context;
}(antlr.ParserRuleContext));
exports.Rule16Context = Rule16Context;
var Test5Context = /** @class */ (function (_super) {
    __extends(Test5Context, _super);
    function Test5Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test5Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test5Context.prototype.rule15 = function () {
        return this.getTypedRuleContext(Rule15Context, 0);
    };
    Test5Context.prototype.rule16 = function () {
        return this.getTypedRuleContext(Rule16Context, 0);
    };
    Object.defineProperty(Test5Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test5;
        },
        enumerable: false,
        configurable: true
    });
    return Test5Context;
}(antlr.ParserRuleContext));
exports.Test5Context = Test5Context;
var Rule18Context = /** @class */ (function (_super) {
    __extends(Rule18Context, _super);
    function Rule18Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule18Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule18Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule18Context.prototype.SIT = function () {
        return this.getToken(WhiteboxParser.SIT, 0);
    };
    Rule18Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Object.defineProperty(Rule18Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule18;
        },
        enumerable: false,
        configurable: true
    });
    return Rule18Context;
}(antlr.ParserRuleContext));
exports.Rule18Context = Rule18Context;
var Rule19Context = /** @class */ (function (_super) {
    __extends(Rule19Context, _super);
    function Rule19Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule19Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule19Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule19Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Object.defineProperty(Rule19Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule19;
        },
        enumerable: false,
        configurable: true
    });
    return Rule19Context;
}(antlr.ParserRuleContext));
exports.Rule19Context = Rule19Context;
var Test6Context = /** @class */ (function (_super) {
    __extends(Test6Context, _super);
    function Test6Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test6Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test6Context.prototype.rule15 = function () {
        return this.getTypedRuleContext(Rule15Context, 0);
    };
    Test6Context.prototype.rule16 = function () {
        return this.getTypedRuleContext(Rule16Context, 0);
    };
    Object.defineProperty(Test6Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test6;
        },
        enumerable: false,
        configurable: true
    });
    return Test6Context;
}(antlr.ParserRuleContext));
exports.Test6Context = Test6Context;
var Rule21Context = /** @class */ (function (_super) {
    __extends(Rule21Context, _super);
    function Rule21Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule21Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule21Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule21Context.prototype.SIT = function () {
        return this.getToken(WhiteboxParser.SIT, 0);
    };
    Object.defineProperty(Rule21Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule21;
        },
        enumerable: false,
        configurable: true
    });
    return Rule21Context;
}(antlr.ParserRuleContext));
exports.Rule21Context = Rule21Context;
var Rule22Context = /** @class */ (function (_super) {
    __extends(Rule22Context, _super);
    function Rule22Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Rule22Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Rule22Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Rule22Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Rule22Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Object.defineProperty(Rule22Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_rule22;
        },
        enumerable: false,
        configurable: true
    });
    return Rule22Context;
}(antlr.ParserRuleContext));
exports.Rule22Context = Rule22Context;
var Test7Context = /** @class */ (function (_super) {
    __extends(Test7Context, _super);
    function Test7Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test7Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test7Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Test7Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Test7Context.prototype.SIT = function () {
        return this.getToken(WhiteboxParser.SIT, 0);
    };
    Test7Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Object.defineProperty(Test7Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test7;
        },
        enumerable: false,
        configurable: true
    });
    return Test7Context;
}(antlr.ParserRuleContext));
exports.Test7Context = Test7Context;
var Test8Context = /** @class */ (function (_super) {
    __extends(Test8Context, _super);
    function Test8Context(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Test8Context.prototype.LOREM = function () {
        return this.getToken(WhiteboxParser.LOREM, 0);
    };
    Test8Context.prototype.IPSUM = function () {
        return this.getToken(WhiteboxParser.IPSUM, 0);
    };
    Test8Context.prototype.DOLOR = function () {
        return this.getToken(WhiteboxParser.DOLOR, 0);
    };
    Test8Context.prototype.SIT = function () {
        return this.getToken(WhiteboxParser.SIT, 0);
    };
    Test8Context.prototype.AMET = function () {
        return this.getToken(WhiteboxParser.AMET, 0);
    };
    Test8Context.prototype.CONSECTETUR = function () {
        return this.getToken(WhiteboxParser.CONSECTETUR, 0);
    };
    Object.defineProperty(Test8Context.prototype, "ruleIndex", {
        get: function () {
            return WhiteboxParser.RULE_test8;
        },
        enumerable: false,
        configurable: true
    });
    return Test8Context;
}(antlr.ParserRuleContext));
exports.Test8Context = Test8Context;
