"use strict";
// Generated from tests/CPP14.g4 by ANTLR 4.13.1
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
exports.CompoundstatementContext = exports.ExpressionstatementContext = exports.LabeledstatementContext = exports.StatementContext = exports.ConstantexpressionContext = exports.ExpressionContext = exports.AssignmentoperatorContext = exports.AssignmentexpressionContext = exports.ConditionalexpressionContext = exports.LogicalorexpressionContext = exports.LogicalandexpressionContext = exports.InclusiveorexpressionContext = exports.ExclusiveorexpressionContext = exports.AndexpressionContext = exports.EqualityexpressionContext = exports.RelationalexpressionContext = exports.ShiftexpressionContext = exports.AdditiveexpressionContext = exports.MultiplicativeexpressionContext = exports.PmexpressionContext = exports.CastexpressionContext = exports.NoexceptexpressionContext = exports.DeleteexpressionContext = exports.NewinitializerContext = exports.NoptrnewdeclaratorContext = exports.NewdeclaratorContext = exports.NewtypeidContext = exports.NewplacementContext = exports.NewexpressionContext = exports.UnaryoperatorContext = exports.UnaryexpressionContext = exports.PseudodestructornameContext = exports.ExpressionlistContext = exports.PostfixexpressionContext = exports.LambdadeclaratorContext = exports.InitcaptureContext = exports.SimplecaptureContext = exports.CaptureContext = exports.CapturelistContext = exports.CapturedefaultContext = exports.LambdacaptureContext = exports.LambdaintroducerContext = exports.LambdaexpressionContext = exports.NestednamespecifierContext = exports.QualifiedidContext = exports.UnqualifiedidContext = exports.IdexpressionContext = exports.PrimaryexpressionContext = exports.TranslationunitContext = exports.CPP14Parser = void 0;
exports.QualifiednamespacespecifierContext = exports.NamespacealiasdefinitionContext = exports.NamespacealiasContext = exports.NamespacebodyContext = exports.UnnamednamespacedefinitionContext = exports.ExtensionnamespacedefinitionContext = exports.OriginalnamespacedefinitionContext = exports.NamednamespacedefinitionContext = exports.NamespacedefinitionContext = exports.OriginalnamespacenameContext = exports.NamespacenameContext = exports.EnumeratorContext = exports.EnumeratordefinitionContext = exports.EnumeratorlistContext = exports.EnumbaseContext = exports.EnumkeyContext = exports.OpaqueenumdeclarationContext = exports.EnumheadContext = exports.EnumspecifierContext = exports.EnumnameContext = exports.ElaboratedtypespecifierContext = exports.DecltypespecifierContext = exports.TypenameContext = exports.SimpletypespecifierContext = exports.TrailingtypespecifierseqContext = exports.TypespecifierseqContext = exports.TrailingtypespecifierContext = exports.TypespecifierContext = exports.TypedefnameContext = exports.FunctionspecifierContext = exports.StorageclassspecifierContext = exports.DeclspecifierseqContext = exports.DeclspecifierContext = exports.AttributedeclarationContext = exports.EmptydeclarationContext = exports.Static_assertdeclarationContext = exports.SimpledeclarationContext = exports.AliasdeclarationContext = exports.BlockdeclarationContext = exports.DeclarationContext = exports.DeclarationseqContext = exports.DeclarationstatementContext = exports.JumpstatementContext = exports.ForrangeinitializerContext = exports.ForrangedeclarationContext = exports.ForinitstatementContext = exports.IterationstatementContext = exports.ConditionContext = exports.SelectionstatementContext = exports.StatementseqContext = void 0;
exports.MemberspecificationContext = exports.ClasskeyContext = exports.ClassvirtspecifierContext = exports.ClassheadnameContext = exports.ClassheadContext = exports.ClassspecifierContext = exports.ClassnameContext = exports.BracedinitlistContext = exports.InitializerlistContext = exports.InitializerclauseContext = exports.BraceorequalinitializerContext = exports.InitializerContext = exports.FunctionbodyContext = exports.FunctiondefinitionContext = exports.ParameterdeclarationContext = exports.ParameterdeclarationlistContext = exports.ParameterdeclarationclauseContext = exports.NoptrabstractpackdeclaratorContext = exports.AbstractpackdeclaratorContext = exports.NoptrabstractdeclaratorContext = exports.PtrabstractdeclaratorContext = exports.AbstractdeclaratorContext = exports.TypeidContext = exports.DeclaratoridContext = exports.RefqualifierContext = exports.CvqualifierContext = exports.CvqualifierseqContext = exports.PtroperatorContext = exports.TrailingreturntypeContext = exports.ParametersandqualifiersContext = exports.NoptrdeclaratorContext = exports.PtrdeclaratorContext = exports.DeclaratorContext = exports.InitdeclaratorContext = exports.InitdeclaratorlistContext = exports.BalancedtokenContext = exports.BalancedtokenseqContext = exports.AttributeargumentclauseContext = exports.AttributenamespaceContext = exports.AttributescopedtokenContext = exports.AttributetokenContext = exports.AttributeContext = exports.AttributelistContext = exports.AlignmentspecifierContext = exports.AttributespecifierContext = exports.AttributespecifierseqContext = exports.LinkagespecificationContext = exports.AsmdefinitionContext = exports.UsingdirectiveContext = exports.UsingdeclarationContext = void 0;
exports.UserdefinedliteralContext = exports.PointerliteralContext = exports.BooleanliteralContext = exports.LiteralContext = exports.OperatorContext = exports.RightShiftAssignContext = exports.RightShiftContext = exports.NoexceptspecificationContext = exports.TypeidlistContext = exports.DynamicexceptionspecificationContext = exports.ExceptionspecificationContext = exports.ThrowexpressionContext = exports.ExceptiondeclarationContext = exports.HandlerContext = exports.HandlerseqContext = exports.FunctiontryblockContext = exports.TryblockContext = exports.ExplicitspecializationContext = exports.ExplicitinstantiationContext = exports.TypenamespecifierContext = exports.TemplateargumentContext = exports.TemplateargumentlistContext = exports.TemplatenameContext = exports.TemplateidContext = exports.SimpletemplateidContext = exports.TypeparameterContext = exports.TemplateparameterContext = exports.TemplateparameterlistContext = exports.TemplatedeclarationContext = exports.LiteraloperatoridContext = exports.OperatorfunctionidContext = exports.MeminitializeridContext = exports.MeminitializerContext = exports.MeminitializerlistContext = exports.CtorinitializerContext = exports.ConversiondeclaratorContext = exports.ConversiontypeidContext = exports.ConversionfunctionidContext = exports.AccessspecifierContext = exports.BasetypespecifierContext = exports.ClassordecltypeContext = exports.BasespecifierContext = exports.BasespecifierlistContext = exports.BaseclauseContext = exports.PurespecifierContext = exports.VirtspecifierContext = exports.VirtspecifierseqContext = exports.MemberdeclaratorContext = exports.MemberdeclaratorlistContext = exports.MemberdeclarationContext = void 0;
var antlr = require("antlr4ng");
var CPP14Parser = /** @class */ (function (_super) {
    __extends(CPP14Parser, _super);
    function CPP14Parser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new antlr.ParserATNSimulator(_this, CPP14Parser._ATN, CPP14Parser.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(CPP14Parser.prototype, "grammarFileName", {
        get: function () { return "CPP14.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPP14Parser.prototype, "literalNames", {
        get: function () { return CPP14Parser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPP14Parser.prototype, "symbolicNames", {
        get: function () { return CPP14Parser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPP14Parser.prototype, "ruleNames", {
        get: function () { return CPP14Parser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CPP14Parser.prototype, "serializedATN", {
        get: function () { return CPP14Parser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    CPP14Parser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    };
    CPP14Parser.prototype.translationunit = function () {
        var localctx = new TranslationunitContext(this._ctx, this.state);
        this.enterRule(localctx, 0, CPP14Parser.RULE_translationunit);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
                    {
                        this.state = 398;
                        this.declarationseq(0);
                    }
                }
                this.state = 401;
                this.match(CPP14Parser.EOF);
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
    CPP14Parser.prototype.primaryexpression = function () {
        var localctx = new PrimaryexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 2, CPP14Parser.RULE_primaryexpression);
        try {
            this.state = 411;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.False:
                case CPP14Parser.Nullptr:
                case CPP14Parser.True:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 403;
                        this.literal();
                    }
                    break;
                case CPP14Parser.This:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 404;
                        this.match(CPP14Parser.This);
                    }
                    break;
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 405;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 406;
                        this.expression(0);
                        this.state = 407;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Operator:
                case CPP14Parser.Tilde:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 409;
                        this.idexpression();
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 410;
                        this.lambdaexpression();
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
    CPP14Parser.prototype.idexpression = function () {
        var localctx = new IdexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 4, CPP14Parser.RULE_idexpression);
        try {
            this.state = 415;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 413;
                        this.unqualifiedid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 414;
                        this.qualifiedid();
                    }
                    break;
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
    CPP14Parser.prototype.unqualifiedid = function () {
        var localctx = new UnqualifiedidContext(this._ctx, this.state);
        this.enterRule(localctx, 6, CPP14Parser.RULE_unqualifiedid);
        try {
            this.state = 426;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 417;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 418;
                        this.operatorfunctionid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 419;
                        this.conversionfunctionid();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 420;
                        this.literaloperatorid();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 421;
                        this.match(CPP14Parser.Tilde);
                        this.state = 422;
                        this.classname();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 423;
                        this.match(CPP14Parser.Tilde);
                        this.state = 424;
                        this.decltypespecifier();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 425;
                        this.templateid();
                    }
                    break;
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
    CPP14Parser.prototype.qualifiedid = function () {
        var localctx = new QualifiedidContext(this._ctx, this.state);
        this.enterRule(localctx, 8, CPP14Parser.RULE_qualifiedid);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 428;
                this.nestednamespecifier(0);
                this.state = 430;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 61) {
                    {
                        this.state = 429;
                        this.match(CPP14Parser.Template);
                    }
                }
                this.state = 432;
                this.unqualifiedid();
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
    CPP14Parser.prototype.nestednamespecifier = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new NestednamespecifierContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 10;
        this.enterRecursionRule(localctx, 10, CPP14Parser.RULE_nestednamespecifier, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 445;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                        {
                            this.state = 435;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 2:
                        {
                            this.state = 436;
                            this.typename();
                            this.state = 437;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 3:
                        {
                            this.state = 439;
                            this.namespacename();
                            this.state = 440;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                    case 4:
                        {
                            this.state = 442;
                            this.decltypespecifier();
                            this.state = 443;
                            this.match(CPP14Parser.Doublecolon);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 459;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 457;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new NestednamespecifierContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
                                        this.state = 447;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 448;
                                        this.match(CPP14Parser.Identifier);
                                        this.state = 449;
                                        this.match(CPP14Parser.Doublecolon);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new NestednamespecifierContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_nestednamespecifier);
                                        this.state = 450;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 452;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 61) {
                                            {
                                                this.state = 451;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 454;
                                        this.simpletemplateid();
                                        this.state = 455;
                                        this.match(CPP14Parser.Doublecolon);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 461;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
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
    CPP14Parser.prototype.lambdaexpression = function () {
        var localctx = new LambdaexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 12, CPP14Parser.RULE_lambdaexpression);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 462;
                this.lambdaintroducer();
                this.state = 464;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 78) {
                    {
                        this.state = 463;
                        this.lambdadeclarator();
                    }
                }
                this.state = 466;
                this.compoundstatement();
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
    CPP14Parser.prototype.lambdaintroducer = function () {
        var localctx = new LambdaintroducerContext(this._ctx, this.state);
        this.enterRule(localctx, 14, CPP14Parser.RULE_lambdaintroducer);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 468;
                this.match(CPP14Parser.LeftBracket);
                this.state = 470;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 62 || _la === 90 || _la === 94 || _la === 125) {
                    {
                        this.state = 469;
                        this.lambdacapture();
                    }
                }
                this.state = 472;
                this.match(CPP14Parser.RightBracket);
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
    CPP14Parser.prototype.lambdacapture = function () {
        var localctx = new LambdacaptureContext(this._ctx, this.state);
        this.enterRule(localctx, 16, CPP14Parser.RULE_lambdacapture);
        try {
            this.state = 480;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 474;
                        this.capturedefault();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 475;
                        this.capturelist(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 476;
                        this.capturedefault();
                        this.state = 477;
                        this.match(CPP14Parser.Comma);
                        this.state = 478;
                        this.capturelist(0);
                    }
                    break;
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
    CPP14Parser.prototype.capturedefault = function () {
        var localctx = new CapturedefaultContext(this._ctx, this.state);
        this.enterRule(localctx, 18, CPP14Parser.RULE_capturedefault);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 482;
                _la = this._input.LA(1);
                if (!(_la === 90 || _la === 94)) {
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
    CPP14Parser.prototype.capturelist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new CapturelistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 20;
        this.enterRecursionRule(localctx, 20, CPP14Parser.RULE_capturelist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 485;
                    this.capture();
                    this.state = 487;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 12, this._ctx)) {
                        case 1:
                            {
                                this.state = 486;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 497;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new CapturelistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_capturelist);
                                this.state = 489;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 490;
                                this.match(CPP14Parser.Comma);
                                this.state = 491;
                                this.capture();
                                this.state = 493;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 13, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 492;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 499;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
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
    CPP14Parser.prototype.capture = function () {
        var localctx = new CaptureContext(this._ctx, this.state);
        this.enterRule(localctx, 22, CPP14Parser.RULE_capture);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 15, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 500;
                        this.simplecapture();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 501;
                        this.initcapture();
                    }
                    break;
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
    CPP14Parser.prototype.simplecapture = function () {
        var localctx = new SimplecaptureContext(this._ctx, this.state);
        this.enterRule(localctx, 24, CPP14Parser.RULE_simplecapture);
        try {
            this.state = 508;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 504;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 505;
                        this.match(CPP14Parser.And);
                        this.state = 506;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case CPP14Parser.This:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 507;
                        this.match(CPP14Parser.This);
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
    CPP14Parser.prototype.initcapture = function () {
        var localctx = new InitcaptureContext(this._ctx, this.state);
        this.enterRule(localctx, 26, CPP14Parser.RULE_initcapture);
        try {
            this.state = 515;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 510;
                        this.match(CPP14Parser.Identifier);
                        this.state = 511;
                        this.initializer();
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 512;
                        this.match(CPP14Parser.And);
                        this.state = 513;
                        this.match(CPP14Parser.Identifier);
                        this.state = 514;
                        this.initializer();
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
    CPP14Parser.prototype.lambdadeclarator = function () {
        var localctx = new LambdadeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 28, CPP14Parser.RULE_lambdadeclarator);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 517;
                this.match(CPP14Parser.LeftParen);
                this.state = 518;
                this.parameterdeclarationclause();
                this.state = 519;
                this.match(CPP14Parser.RightParen);
                this.state = 521;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 40) {
                    {
                        this.state = 520;
                        this.match(CPP14Parser.Mutable);
                    }
                }
                this.state = 524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 43 || _la === 64) {
                    {
                        this.state = 523;
                        this.exceptionspecification();
                    }
                }
                this.state = 527;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 526;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 530;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 117) {
                    {
                        this.state = 529;
                        this.trailingreturntype();
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
    CPP14Parser.prototype.postfixexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new PostfixexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 30;
        this.enterRecursionRule(localctx, 30, CPP14Parser.RULE_postfixexpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 596;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 533;
                            this.primaryexpression();
                        }
                        break;
                    case 2:
                        {
                            this.state = 534;
                            this.simpletypespecifier();
                            this.state = 535;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 537;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                {
                                    this.state = 536;
                                    this.expressionlist();
                                }
                            }
                            this.state = 539;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 3:
                        {
                            this.state = 541;
                            this.typenamespecifier();
                            this.state = 542;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 544;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                {
                                    this.state = 543;
                                    this.expressionlist();
                                }
                            }
                            this.state = 546;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 4:
                        {
                            this.state = 548;
                            this.simpletypespecifier();
                            this.state = 549;
                            this.bracedinitlist();
                        }
                        break;
                    case 5:
                        {
                            this.state = 551;
                            this.typenamespecifier();
                            this.state = 552;
                            this.bracedinitlist();
                        }
                        break;
                    case 6:
                        {
                            this.state = 554;
                            this.match(CPP14Parser.Dynamic_cast);
                            this.state = 555;
                            this.match(CPP14Parser.Less);
                            this.state = 556;
                            this.typeid();
                            this.state = 557;
                            this.match(CPP14Parser.Greater);
                            this.state = 558;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 559;
                            this.expression(0);
                            this.state = 560;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 7:
                        {
                            this.state = 562;
                            this.match(CPP14Parser.Static_cast);
                            this.state = 563;
                            this.match(CPP14Parser.Less);
                            this.state = 564;
                            this.typeid();
                            this.state = 565;
                            this.match(CPP14Parser.Greater);
                            this.state = 566;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 567;
                            this.expression(0);
                            this.state = 568;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 8:
                        {
                            this.state = 570;
                            this.match(CPP14Parser.Reinterpret_cast);
                            this.state = 571;
                            this.match(CPP14Parser.Less);
                            this.state = 572;
                            this.typeid();
                            this.state = 573;
                            this.match(CPP14Parser.Greater);
                            this.state = 574;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 575;
                            this.expression(0);
                            this.state = 576;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 9:
                        {
                            this.state = 578;
                            this.match(CPP14Parser.Const_cast);
                            this.state = 579;
                            this.match(CPP14Parser.Less);
                            this.state = 580;
                            this.typeid();
                            this.state = 581;
                            this.match(CPP14Parser.Greater);
                            this.state = 582;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 583;
                            this.expression(0);
                            this.state = 584;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 10:
                        {
                            this.state = 586;
                            this.match(CPP14Parser.Typeid);
                            this.state = 587;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 588;
                            this.expression(0);
                            this.state = 589;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    case 11:
                        {
                            this.state = 591;
                            this.match(CPP14Parser.Typeid);
                            this.state = 592;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 593;
                            this.typeid();
                            this.state = 594;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 638;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 636;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 28, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 598;
                                        if (!(this.precpred(this._ctx, 19))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
                                        }
                                        this.state = 599;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 600;
                                        this.expression(0);
                                        this.state = 601;
                                        this.match(CPP14Parser.RightBracket);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 603;
                                        if (!(this.precpred(this._ctx, 18))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
                                        }
                                        this.state = 604;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 605;
                                        this.bracedinitlist();
                                        this.state = 606;
                                        this.match(CPP14Parser.RightBracket);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 608;
                                        if (!(this.precpred(this._ctx, 17))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
                                        }
                                        this.state = 609;
                                        this.match(CPP14Parser.LeftParen);
                                        this.state = 611;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                            {
                                                this.state = 610;
                                                this.expressionlist();
                                            }
                                        }
                                        this.state = 613;
                                        this.match(CPP14Parser.RightParen);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 614;
                                        if (!(this.precpred(this._ctx, 12))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
                                        }
                                        this.state = 615;
                                        this.match(CPP14Parser.Dot);
                                        this.state = 617;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 61) {
                                            {
                                                this.state = 616;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 619;
                                        this.idexpression();
                                    }
                                    break;
                                case 5:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 620;
                                        if (!(this.precpred(this._ctx, 11))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
                                        }
                                        this.state = 621;
                                        this.match(CPP14Parser.Arrow);
                                        this.state = 623;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (_la === 61) {
                                            {
                                                this.state = 622;
                                                this.match(CPP14Parser.Template);
                                            }
                                        }
                                        this.state = 625;
                                        this.idexpression();
                                    }
                                    break;
                                case 6:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 626;
                                        if (!(this.precpred(this._ctx, 10))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
                                        }
                                        this.state = 627;
                                        this.match(CPP14Parser.Dot);
                                        this.state = 628;
                                        this.pseudodestructorname();
                                    }
                                    break;
                                case 7:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 629;
                                        if (!(this.precpred(this._ctx, 9))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
                                        }
                                        this.state = 630;
                                        this.match(CPP14Parser.Arrow);
                                        this.state = 631;
                                        this.pseudodestructorname();
                                    }
                                    break;
                                case 8:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 632;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
                                        }
                                        this.state = 633;
                                        this.match(CPP14Parser.PlusPlus);
                                    }
                                    break;
                                case 9:
                                    {
                                        localctx = new PostfixexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_postfixexpression);
                                        this.state = 634;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 635;
                                        this.match(CPP14Parser.MinusMinus);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 640;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
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
    CPP14Parser.prototype.expressionlist = function () {
        var localctx = new ExpressionlistContext(this._ctx, this.state);
        this.enterRule(localctx, 32, CPP14Parser.RULE_expressionlist);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 641;
                this.initializerlist(0);
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
    CPP14Parser.prototype.pseudodestructorname = function () {
        var localctx = new PseudodestructornameContext(this._ctx, this.state);
        this.enterRule(localctx, 34, CPP14Parser.RULE_pseudodestructorname);
        var _la;
        try {
            this.state = 665;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 644;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 30, this._ctx)) {
                            case 1:
                                {
                                    this.state = 643;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 646;
                        this.typename();
                        this.state = 647;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 648;
                        this.match(CPP14Parser.Tilde);
                        this.state = 649;
                        this.typename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 651;
                        this.nestednamespecifier(0);
                        this.state = 652;
                        this.match(CPP14Parser.Template);
                        this.state = 653;
                        this.simpletemplateid();
                        this.state = 654;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 655;
                        this.match(CPP14Parser.Tilde);
                        this.state = 656;
                        this.typename();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 659;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 19 || _la === 120 || _la === 125) {
                            {
                                this.state = 658;
                                this.nestednamespecifier(0);
                            }
                        }
                        this.state = 661;
                        this.match(CPP14Parser.Tilde);
                        this.state = 662;
                        this.typename();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 663;
                        this.match(CPP14Parser.Tilde);
                        this.state = 664;
                        this.decltypespecifier();
                    }
                    break;
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
    CPP14Parser.prototype.unaryexpression = function () {
        var localctx = new UnaryexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 36, CPP14Parser.RULE_unaryexpression);
        try {
            this.state = 695;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 667;
                        this.postfixexpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 668;
                        this.match(CPP14Parser.PlusPlus);
                        this.state = 669;
                        this.castexpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 670;
                        this.match(CPP14Parser.MinusMinus);
                        this.state = 671;
                        this.castexpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 672;
                        this.unaryoperator();
                        this.state = 673;
                        this.castexpression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 675;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 676;
                        this.unaryexpression();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 677;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 678;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 679;
                        this.typeid();
                        this.state = 680;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 682;
                        this.match(CPP14Parser.Sizeof);
                        this.state = 683;
                        this.match(CPP14Parser.Ellipsis);
                        this.state = 684;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 685;
                        this.match(CPP14Parser.Identifier);
                        this.state = 686;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 687;
                        this.match(CPP14Parser.Alignof);
                        this.state = 688;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 689;
                        this.typeid();
                        this.state = 690;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 692;
                        this.noexceptexpression();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 693;
                        this.newexpression();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 694;
                        this.deleteexpression();
                    }
                    break;
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
    CPP14Parser.prototype.unaryoperator = function () {
        var localctx = new UnaryoperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 38, CPP14Parser.RULE_unaryoperator);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 697;
                _la = this._input.LA(1);
                if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 967) !== 0))) {
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
    CPP14Parser.prototype.newexpression = function () {
        var localctx = new NewexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 40, CPP14Parser.RULE_newexpression);
        var _la;
        try {
            this.state = 723;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 700;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 120) {
                            {
                                this.state = 699;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 702;
                        this.match(CPP14Parser.New);
                        this.state = 704;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 78) {
                            {
                                this.state = 703;
                                this.newplacement();
                            }
                        }
                        this.state = 706;
                        this.newtypeid();
                        this.state = 708;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 36, this._ctx)) {
                            case 1:
                                {
                                    this.state = 707;
                                    this.newinitializer();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 711;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 120) {
                            {
                                this.state = 710;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 713;
                        this.match(CPP14Parser.New);
                        this.state = 715;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 38, this._ctx)) {
                            case 1:
                                {
                                    this.state = 714;
                                    this.newplacement();
                                }
                                break;
                        }
                        this.state = 717;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 718;
                        this.typeid();
                        this.state = 719;
                        this.match(CPP14Parser.RightParen);
                        this.state = 721;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 39, this._ctx)) {
                            case 1:
                                {
                                    this.state = 720;
                                    this.newinitializer();
                                }
                                break;
                        }
                    }
                    break;
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
    CPP14Parser.prototype.newplacement = function () {
        var localctx = new NewplacementContext(this._ctx, this.state);
        this.enterRule(localctx, 42, CPP14Parser.RULE_newplacement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 725;
                this.match(CPP14Parser.LeftParen);
                this.state = 726;
                this.expressionlist();
                this.state = 727;
                this.match(CPP14Parser.RightParen);
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
    CPP14Parser.prototype.newtypeid = function () {
        var localctx = new NewtypeidContext(this._ctx, this.state);
        this.enterRule(localctx, 44, CPP14Parser.RULE_newtypeid);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 729;
                this.typespecifierseq();
                this.state = 731;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 41, this._ctx)) {
                    case 1:
                        {
                            this.state = 730;
                            this.newdeclarator();
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
    CPP14Parser.prototype.newdeclarator = function () {
        var localctx = new NewdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 46, CPP14Parser.RULE_newdeclarator);
        try {
            this.state = 738;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 733;
                        this.ptroperator();
                        this.state = 735;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 42, this._ctx)) {
                            case 1:
                                {
                                    this.state = 734;
                                    this.newdeclarator();
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 737;
                        this.noptrnewdeclarator(0);
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
    CPP14Parser.prototype.noptrnewdeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new NoptrnewdeclaratorContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 48;
        this.enterRecursionRule(localctx, 48, CPP14Parser.RULE_noptrnewdeclarator, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 741;
                    this.match(CPP14Parser.LeftBracket);
                    this.state = 742;
                    this.expression(0);
                    this.state = 743;
                    this.match(CPP14Parser.RightBracket);
                    this.state = 745;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 44, this._ctx)) {
                        case 1:
                            {
                                this.state = 744;
                                this.attributespecifierseq(0);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 756;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new NoptrnewdeclaratorContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrnewdeclarator);
                                this.state = 747;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 748;
                                this.match(CPP14Parser.LeftBracket);
                                this.state = 749;
                                this.constantexpression();
                                this.state = 750;
                                this.match(CPP14Parser.RightBracket);
                                this.state = 752;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 45, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 751;
                                            this.attributespecifierseq(0);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 758;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
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
    CPP14Parser.prototype.newinitializer = function () {
        var localctx = new NewinitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 50, CPP14Parser.RULE_newinitializer);
        var _la;
        try {
            this.state = 765;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 759;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 761;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 760;
                                this.expressionlist();
                            }
                        }
                        this.state = 763;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 764;
                        this.bracedinitlist();
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
    CPP14Parser.prototype.deleteexpression = function () {
        var localctx = new DeleteexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 52, CPP14Parser.RULE_deleteexpression);
        var _la;
        try {
            this.state = 779;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 768;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 120) {
                            {
                                this.state = 767;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 770;
                        this.match(CPP14Parser.Delete);
                        this.state = 771;
                        this.castexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 773;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 120) {
                            {
                                this.state = 772;
                                this.match(CPP14Parser.Doublecolon);
                            }
                        }
                        this.state = 775;
                        this.match(CPP14Parser.Delete);
                        this.state = 776;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 777;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 778;
                        this.castexpression();
                    }
                    break;
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
    CPP14Parser.prototype.noexceptexpression = function () {
        var localctx = new NoexceptexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 54, CPP14Parser.RULE_noexceptexpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 781;
                this.match(CPP14Parser.Noexcept);
                this.state = 782;
                this.match(CPP14Parser.LeftParen);
                this.state = 783;
                this.expression(0);
                this.state = 784;
                this.match(CPP14Parser.RightParen);
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
    CPP14Parser.prototype.castexpression = function () {
        var localctx = new CastexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 56, CPP14Parser.RULE_castexpression);
        try {
            this.state = 792;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 786;
                        this.unaryexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 787;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 788;
                        this.typeid();
                        this.state = 789;
                        this.match(CPP14Parser.RightParen);
                        this.state = 790;
                        this.castexpression();
                    }
                    break;
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
    CPP14Parser.prototype.pmexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new PmexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 58;
        this.enterRecursionRule(localctx, 58, CPP14Parser.RULE_pmexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 795;
                    this.castexpression();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 805;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 803;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 53, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new PmexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_pmexpression);
                                        this.state = 797;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 798;
                                        this.match(CPP14Parser.DotStar);
                                        this.state = 799;
                                        this.castexpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new PmexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_pmexpression);
                                        this.state = 800;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 801;
                                        this.match(CPP14Parser.ArrowStar);
                                        this.state = 802;
                                        this.castexpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 807;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
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
    CPP14Parser.prototype.multiplicativeexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new MultiplicativeexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 60;
        this.enterRecursionRule(localctx, 60, CPP14Parser.RULE_multiplicativeexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 809;
                    this.pmexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 822;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 820;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 55, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 811;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 812;
                                        this.match(CPP14Parser.Star);
                                        this.state = 813;
                                        this.pmexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 814;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 815;
                                        this.match(CPP14Parser.Div);
                                        this.state = 816;
                                        this.pmexpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new MultiplicativeexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_multiplicativeexpression);
                                        this.state = 817;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 818;
                                        this.match(CPP14Parser.Mod);
                                        this.state = 819;
                                        this.pmexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 824;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 56, this._ctx);
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
    CPP14Parser.prototype.additiveexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new AdditiveexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 62;
        this.enterRecursionRule(localctx, 62, CPP14Parser.RULE_additiveexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 826;
                    this.multiplicativeexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 836;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 834;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 57, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new AdditiveexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_additiveexpression);
                                        this.state = 828;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 829;
                                        this.match(CPP14Parser.Plus);
                                        this.state = 830;
                                        this.multiplicativeexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AdditiveexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_additiveexpression);
                                        this.state = 831;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 832;
                                        this.match(CPP14Parser.Minus);
                                        this.state = 833;
                                        this.multiplicativeexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 838;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
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
    CPP14Parser.prototype.shiftexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new ShiftexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 64;
        this.enterRecursionRule(localctx, 64, CPP14Parser.RULE_shiftexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 840;
                    this.additiveexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 851;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 849;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 59, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new ShiftexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_shiftexpression);
                                        this.state = 842;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 843;
                                        this.match(CPP14Parser.LeftShift);
                                        this.state = 844;
                                        this.additiveexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new ShiftexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_shiftexpression);
                                        this.state = 845;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 846;
                                        this.rightShift();
                                        this.state = 847;
                                        this.additiveexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 853;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
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
    CPP14Parser.prototype.relationalexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new RelationalexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 66;
        this.enterRecursionRule(localctx, 66, CPP14Parser.RULE_relationalexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 855;
                    this.shiftexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 871;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 869;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 61, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 857;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 858;
                                        this.match(CPP14Parser.Less);
                                        this.state = 859;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 860;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 861;
                                        this.match(CPP14Parser.Greater);
                                        this.state = 862;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 863;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 864;
                                        this.match(CPP14Parser.LessEqual);
                                        this.state = 865;
                                        this.shiftexpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        localctx = new RelationalexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_relationalexpression);
                                        this.state = 866;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 867;
                                        this.match(CPP14Parser.GreaterEqual);
                                        this.state = 868;
                                        this.shiftexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 873;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
    CPP14Parser.prototype.equalityexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new EqualityexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 68;
        this.enterRecursionRule(localctx, 68, CPP14Parser.RULE_equalityexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 875;
                    this.relationalexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 885;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 883;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 63, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new EqualityexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_equalityexpression);
                                        this.state = 877;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 878;
                                        this.match(CPP14Parser.Equal);
                                        this.state = 879;
                                        this.relationalexpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new EqualityexpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_equalityexpression);
                                        this.state = 880;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 881;
                                        this.match(CPP14Parser.NotEqual);
                                        this.state = 882;
                                        this.relationalexpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 887;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
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
    CPP14Parser.prototype.andexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new AndexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 70;
        this.enterRecursionRule(localctx, 70, CPP14Parser.RULE_andexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 889;
                    this.equalityexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 896;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new AndexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_andexpression);
                                this.state = 891;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 892;
                                this.match(CPP14Parser.And);
                                this.state = 893;
                                this.equalityexpression(0);
                            }
                        }
                    }
                    this.state = 898;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
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
    CPP14Parser.prototype.exclusiveorexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new ExclusiveorexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 72;
        this.enterRecursionRule(localctx, 72, CPP14Parser.RULE_exclusiveorexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 900;
                    this.andexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 907;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new ExclusiveorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_exclusiveorexpression);
                                this.state = 902;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 903;
                                this.match(CPP14Parser.Caret);
                                this.state = 904;
                                this.andexpression(0);
                            }
                        }
                    }
                    this.state = 909;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
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
    CPP14Parser.prototype.inclusiveorexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new InclusiveorexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 74;
        this.enterRecursionRule(localctx, 74, CPP14Parser.RULE_inclusiveorexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 911;
                    this.exclusiveorexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 918;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new InclusiveorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_inclusiveorexpression);
                                this.state = 913;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 914;
                                this.match(CPP14Parser.Or);
                                this.state = 915;
                                this.exclusiveorexpression(0);
                            }
                        }
                    }
                    this.state = 920;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 67, this._ctx);
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
    CPP14Parser.prototype.logicalandexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new LogicalandexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 76;
        this.enterRecursionRule(localctx, 76, CPP14Parser.RULE_logicalandexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 922;
                    this.inclusiveorexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 929;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new LogicalandexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_logicalandexpression);
                                this.state = 924;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 925;
                                this.match(CPP14Parser.AndAnd);
                                this.state = 926;
                                this.inclusiveorexpression(0);
                            }
                        }
                    }
                    this.state = 931;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
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
    CPP14Parser.prototype.logicalorexpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new LogicalorexpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 78;
        this.enterRecursionRule(localctx, 78, CPP14Parser.RULE_logicalorexpression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 933;
                    this.logicalandexpression(0);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 940;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new LogicalorexpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_logicalorexpression);
                                this.state = 935;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 936;
                                this.match(CPP14Parser.OrOr);
                                this.state = 937;
                                this.logicalandexpression(0);
                            }
                        }
                    }
                    this.state = 942;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
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
    CPP14Parser.prototype.conditionalexpression = function () {
        var localctx = new ConditionalexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 80, CPP14Parser.RULE_conditionalexpression);
        try {
            this.state = 950;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 70, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 943;
                        this.logicalorexpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 944;
                        this.logicalorexpression(0);
                        this.state = 945;
                        this.match(CPP14Parser.Question);
                        this.state = 946;
                        this.expression(0);
                        this.state = 947;
                        this.match(CPP14Parser.Colon);
                        this.state = 948;
                        this.assignmentexpression();
                    }
                    break;
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
    CPP14Parser.prototype.assignmentexpression = function () {
        var localctx = new AssignmentexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 82, CPP14Parser.RULE_assignmentexpression);
        try {
            this.state = 958;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 71, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 952;
                        this.conditionalexpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 953;
                        this.logicalorexpression(0);
                        this.state = 954;
                        this.assignmentoperator();
                        this.state = 955;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 957;
                        this.throwexpression();
                    }
                    break;
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
    CPP14Parser.prototype.assignmentoperator = function () {
        var localctx = new AssignmentoperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 84, CPP14Parser.RULE_assignmentoperator);
        try {
            this.state = 971;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Assign:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 960;
                        this.match(CPP14Parser.Assign);
                    }
                    break;
                case CPP14Parser.StarAssign:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 961;
                        this.match(CPP14Parser.StarAssign);
                    }
                    break;
                case CPP14Parser.DivAssign:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 962;
                        this.match(CPP14Parser.DivAssign);
                    }
                    break;
                case CPP14Parser.ModAssign:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 963;
                        this.match(CPP14Parser.ModAssign);
                    }
                    break;
                case CPP14Parser.PlusAssign:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 964;
                        this.match(CPP14Parser.PlusAssign);
                    }
                    break;
                case CPP14Parser.MinusAssign:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 965;
                        this.match(CPP14Parser.MinusAssign);
                    }
                    break;
                case CPP14Parser.Greater:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 966;
                        this.rightShiftAssign();
                    }
                    break;
                case CPP14Parser.LeftShiftAssign:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 967;
                        this.match(CPP14Parser.LeftShiftAssign);
                    }
                    break;
                case CPP14Parser.AndAssign:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 968;
                        this.match(CPP14Parser.AndAssign);
                    }
                    break;
                case CPP14Parser.XorAssign:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 969;
                        this.match(CPP14Parser.XorAssign);
                    }
                    break;
                case CPP14Parser.OrAssign:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 970;
                        this.match(CPP14Parser.OrAssign);
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
    CPP14Parser.prototype.expression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new ExpressionContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 86;
        this.enterRecursionRule(localctx, 86, CPP14Parser.RULE_expression, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 974;
                    this.assignmentexpression();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 981;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new ExpressionContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_expression);
                                this.state = 976;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 977;
                                this.match(CPP14Parser.Comma);
                                this.state = 978;
                                this.assignmentexpression();
                            }
                        }
                    }
                    this.state = 983;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
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
    CPP14Parser.prototype.constantexpression = function () {
        var localctx = new ConstantexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 88, CPP14Parser.RULE_constantexpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 984;
                this.conditionalexpression();
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
    CPP14Parser.prototype.statement = function () {
        var localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(localctx, 90, CPP14Parser.RULE_statement);
        var _la;
        try {
            this.state = 1012;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 80, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 986;
                        this.labeledstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 988;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 74, this._ctx)) {
                            case 1:
                                {
                                    this.state = 987;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 990;
                        this.expressionstatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 992;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 991;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 994;
                        this.compoundstatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 996;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 995;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 998;
                        this.selectionstatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1000;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 999;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1002;
                        this.iterationstatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1004;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1003;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1006;
                        this.jumpstatement();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1007;
                        this.declarationstatement();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1009;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1008;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1011;
                        this.tryblock();
                    }
                    break;
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
    CPP14Parser.prototype.labeledstatement = function () {
        var localctx = new LabeledstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 92, CPP14Parser.RULE_labeledstatement);
        var _la;
        try {
            this.state = 1034;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 84, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1015;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1014;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1017;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1018;
                        this.match(CPP14Parser.Colon);
                        this.state = 1019;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1021;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1020;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1023;
                        this.match(CPP14Parser.Case);
                        this.state = 1024;
                        this.constantexpression();
                        this.state = 1025;
                        this.match(CPP14Parser.Colon);
                        this.state = 1026;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1029;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1028;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1031;
                        this.match(CPP14Parser.Default);
                        this.state = 1032;
                        this.match(CPP14Parser.Colon);
                        this.state = 1033;
                        this.statement();
                    }
                    break;
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
    CPP14Parser.prototype.expressionstatement = function () {
        var localctx = new ExpressionstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 94, CPP14Parser.RULE_expressionstatement);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1037;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                    {
                        this.state = 1036;
                        this.expression(0);
                    }
                }
                this.state = 1039;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.compoundstatement = function () {
        var localctx = new CompoundstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 96, CPP14Parser.RULE_compoundstatement);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1041;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1043;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1845492728) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3757850623) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014333439) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 266397197) !== 0)) {
                    {
                        this.state = 1042;
                        this.statementseq(0);
                    }
                }
                this.state = 1045;
                this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.statementseq = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new StatementseqContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 98;
        this.enterRecursionRule(localctx, 98, CPP14Parser.RULE_statementseq, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1048;
                    this.statement();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1054;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new StatementseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_statementseq);
                                this.state = 1050;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1051;
                                this.statement();
                            }
                        }
                    }
                    this.state = 1056;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 87, this._ctx);
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
    CPP14Parser.prototype.selectionstatement = function () {
        var localctx = new SelectionstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 100, CPP14Parser.RULE_selectionstatement);
        try {
            this.state = 1077;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 88, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1057;
                        this.match(CPP14Parser.If);
                        this.state = 1058;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1059;
                        this.condition();
                        this.state = 1060;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1061;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1063;
                        this.match(CPP14Parser.If);
                        this.state = 1064;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1065;
                        this.condition();
                        this.state = 1066;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1067;
                        this.statement();
                        this.state = 1068;
                        this.match(CPP14Parser.Else);
                        this.state = 1069;
                        this.statement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1071;
                        this.match(CPP14Parser.Switch);
                        this.state = 1072;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1073;
                        this.condition();
                        this.state = 1074;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1075;
                        this.statement();
                    }
                    break;
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
    CPP14Parser.prototype.condition = function () {
        var localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(localctx, 102, CPP14Parser.RULE_condition);
        var _la;
        try {
            this.state = 1095;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 91, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1079;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1081;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1080;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1083;
                        this.declspecifierseq();
                        this.state = 1084;
                        this.declarator();
                        this.state = 1085;
                        this.match(CPP14Parser.Assign);
                        this.state = 1086;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1089;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1088;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1091;
                        this.declspecifierseq();
                        this.state = 1092;
                        this.declarator();
                        this.state = 1093;
                        this.bracedinitlist();
                    }
                    break;
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
    CPP14Parser.prototype.iterationstatement = function () {
        var localctx = new IterationstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 104, CPP14Parser.RULE_iterationstatement);
        var _la;
        try {
            this.state = 1132;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 94, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1097;
                        this.match(CPP14Parser.While);
                        this.state = 1098;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1099;
                        this.condition();
                        this.state = 1100;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1101;
                        this.statement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1103;
                        this.match(CPP14Parser.Do);
                        this.state = 1104;
                        this.statement();
                        this.state = 1105;
                        this.match(CPP14Parser.While);
                        this.state = 1106;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1107;
                        this.expression(0);
                        this.state = 1108;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1109;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1111;
                        this.match(CPP14Parser.For);
                        this.state = 1112;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1113;
                        this.forinitstatement();
                        this.state = 1115;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1839986904) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 3454811621) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014062843) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 1114;
                                this.condition();
                            }
                        }
                        this.state = 1117;
                        this.match(CPP14Parser.Semi);
                        this.state = 1119;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 1118;
                                this.expression(0);
                            }
                        }
                        this.state = 1121;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1122;
                        this.statement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1124;
                        this.match(CPP14Parser.For);
                        this.state = 1125;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1126;
                        this.forrangedeclaration();
                        this.state = 1127;
                        this.match(CPP14Parser.Colon);
                        this.state = 1128;
                        this.forrangeinitializer();
                        this.state = 1129;
                        this.match(CPP14Parser.RightParen);
                        this.state = 1130;
                        this.statement();
                    }
                    break;
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
    CPP14Parser.prototype.forinitstatement = function () {
        var localctx = new ForinitstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 106, CPP14Parser.RULE_forinitstatement);
        try {
            this.state = 1136;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 95, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1134;
                        this.expressionstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1135;
                        this.simpledeclaration();
                    }
                    break;
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
    CPP14Parser.prototype.forrangedeclaration = function () {
        var localctx = new ForrangedeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 108, CPP14Parser.RULE_forrangedeclaration);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 1138;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1141;
                this.declspecifierseq();
                this.state = 1142;
                this.declarator();
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
    CPP14Parser.prototype.forrangeinitializer = function () {
        var localctx = new ForrangeinitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 110, CPP14Parser.RULE_forrangeinitializer);
        try {
            this.state = 1146;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignof:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Const_cast:
                case CPP14Parser.Decltype:
                case CPP14Parser.Delete:
                case CPP14Parser.Double:
                case CPP14Parser.Dynamic_cast:
                case CPP14Parser.False:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.New:
                case CPP14Parser.Noexcept:
                case CPP14Parser.Nullptr:
                case CPP14Parser.Operator:
                case CPP14Parser.Reinterpret_cast:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Sizeof:
                case CPP14Parser.Static_cast:
                case CPP14Parser.This:
                case CPP14Parser.Throw:
                case CPP14Parser.True:
                case CPP14Parser.Typeid:
                case CPP14Parser.Typename:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Plus:
                case CPP14Parser.Minus:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Or:
                case CPP14Parser.Tilde:
                case CPP14Parser.Not:
                case CPP14Parser.PlusPlus:
                case CPP14Parser.MinusMinus:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1144;
                        this.expression(0);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1145;
                        this.bracedinitlist();
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
    CPP14Parser.prototype.jumpstatement = function () {
        var localctx = new JumpstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 112, CPP14Parser.RULE_jumpstatement);
        var _la;
        try {
            this.state = 1164;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 99, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1148;
                        this.match(CPP14Parser.Break);
                        this.state = 1149;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1150;
                        this.match(CPP14Parser.Continue);
                        this.state = 1151;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1152;
                        this.match(CPP14Parser.Return);
                        this.state = 1154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014060211) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 1153;
                                this.expression(0);
                            }
                        }
                        this.state = 1156;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1157;
                        this.match(CPP14Parser.Return);
                        this.state = 1158;
                        this.bracedinitlist();
                        this.state = 1159;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1161;
                        this.match(CPP14Parser.Goto);
                        this.state = 1162;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1163;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
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
    CPP14Parser.prototype.declarationstatement = function () {
        var localctx = new DeclarationstatementContext(this._ctx, this.state);
        this.enterRule(localctx, 114, CPP14Parser.RULE_declarationstatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1166;
                this.blockdeclaration();
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
    CPP14Parser.prototype.declarationseq = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new DeclarationseqContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 116;
        this.enterRecursionRule(localctx, 116, CPP14Parser.RULE_declarationseq, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1169;
                    this.declaration();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1175;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 100, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new DeclarationseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_declarationseq);
                                this.state = 1171;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1172;
                                this.declaration();
                            }
                        }
                    }
                    this.state = 1177;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 100, this._ctx);
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
    CPP14Parser.prototype.declaration = function () {
        var localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 118, CPP14Parser.RULE_declaration);
        try {
            this.state = 1187;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 101, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1178;
                        this.blockdeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1179;
                        this.functiondefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1180;
                        this.templatedeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1181;
                        this.explicitinstantiation();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1182;
                        this.explicitspecialization();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1183;
                        this.linkagespecification();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1184;
                        this.namespacedefinition();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1185;
                        this.emptydeclaration();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 1186;
                        this.attributedeclaration();
                    }
                    break;
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
    CPP14Parser.prototype.blockdeclaration = function () {
        var localctx = new BlockdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 120, CPP14Parser.RULE_blockdeclaration);
        try {
            this.state = 1197;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 102, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1189;
                        this.simpledeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1190;
                        this.asmdefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1191;
                        this.namespacealiasdefinition();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1192;
                        this.usingdeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1193;
                        this.usingdirective();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1194;
                        this.static_assertdeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1195;
                        this.aliasdeclaration();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1196;
                        this.opaqueenumdeclaration();
                    }
                    break;
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
    CPP14Parser.prototype.aliasdeclaration = function () {
        var localctx = new AliasdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 122, CPP14Parser.RULE_aliasdeclaration);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1199;
                this.match(CPP14Parser.Using);
                this.state = 1200;
                this.match(CPP14Parser.Identifier);
                this.state = 1202;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 1201;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1204;
                this.match(CPP14Parser.Assign);
                this.state = 1205;
                this.typeid();
                this.state = 1206;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.simpledeclaration = function () {
        var localctx = new SimpledeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 124, CPP14Parser.RULE_simpledeclaration);
        var _la;
        try {
            this.state = 1222;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Constexpr:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Explicit:
                case CPP14Parser.Extern:
                case CPP14Parser.Float:
                case CPP14Parser.Friend:
                case CPP14Parser.Inline:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Mutable:
                case CPP14Parser.Operator:
                case CPP14Parser.Register:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Static:
                case CPP14Parser.Struct:
                case CPP14Parser.Thread_local:
                case CPP14Parser.Typedef:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Virtual:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Tilde:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Semi:
                case CPP14Parser.Ellipsis:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1209;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 104, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1208;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 1212;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 19 || _la === 45 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 20737) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
                            {
                                this.state = 1211;
                                this.initdeclaratorlist(0);
                            }
                        }
                        this.state = 1214;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case CPP14Parser.Alignas:
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1215;
                        this.attributespecifierseq(0);
                        this.state = 1217;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 106, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1216;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 1219;
                        this.initdeclaratorlist(0);
                        this.state = 1220;
                        this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.static_assertdeclaration = function () {
        var localctx = new Static_assertdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 126, CPP14Parser.RULE_static_assertdeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1224;
                this.match(CPP14Parser.Static_assert);
                this.state = 1225;
                this.match(CPP14Parser.LeftParen);
                this.state = 1226;
                this.constantexpression();
                this.state = 1227;
                this.match(CPP14Parser.Comma);
                this.state = 1228;
                this.match(CPP14Parser.Stringliteral);
                this.state = 1229;
                this.match(CPP14Parser.RightParen);
                this.state = 1230;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.emptydeclaration = function () {
        var localctx = new EmptydeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 128, CPP14Parser.RULE_emptydeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1232;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.attributedeclaration = function () {
        var localctx = new AttributedeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 130, CPP14Parser.RULE_attributedeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1234;
                this.attributespecifierseq(0);
                this.state = 1235;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.declspecifier = function () {
        var localctx = new DeclspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 132, CPP14Parser.RULE_declspecifier);
        try {
            this.state = 1243;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Extern:
                case CPP14Parser.Mutable:
                case CPP14Parser.Register:
                case CPP14Parser.Static:
                case CPP14Parser.Thread_local:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1237;
                        this.storageclassspecifier();
                    }
                    break;
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Struct:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1238;
                        this.typespecifier();
                    }
                    break;
                case CPP14Parser.Explicit:
                case CPP14Parser.Inline:
                case CPP14Parser.Virtual:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1239;
                        this.functionspecifier();
                    }
                    break;
                case CPP14Parser.Friend:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1240;
                        this.match(CPP14Parser.Friend);
                    }
                    break;
                case CPP14Parser.Typedef:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1241;
                        this.match(CPP14Parser.Typedef);
                    }
                    break;
                case CPP14Parser.Constexpr:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1242;
                        this.match(CPP14Parser.Constexpr);
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
    CPP14Parser.prototype.declspecifierseq = function () {
        var localctx = new DeclspecifierseqContext(this._ctx, this.state);
        this.enterRule(localctx, 134, CPP14Parser.RULE_declspecifierseq);
        try {
            this.state = 1252;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 110, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1245;
                        this.declspecifier();
                        this.state = 1247;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 109, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1246;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1249;
                        this.declspecifier();
                        this.state = 1250;
                        this.declspecifierseq();
                    }
                    break;
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
    CPP14Parser.prototype.storageclassspecifier = function () {
        var localctx = new StorageclassspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 136, CPP14Parser.RULE_storageclassspecifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1254;
                _la = this._input.LA(1);
                if (!(_la === 29 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 8455169) !== 0))) {
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
    CPP14Parser.prototype.functionspecifier = function () {
        var localctx = new FunctionspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 138, CPP14Parser.RULE_functionspecifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1256;
                _la = this._input.LA(1);
                if (!(_la === 27 || _la === 37 || _la === 73)) {
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
    CPP14Parser.prototype.typedefname = function () {
        var localctx = new TypedefnameContext(this._ctx, this.state);
        this.enterRule(localctx, 140, CPP14Parser.RULE_typedefname);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1258;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.typespecifier = function () {
        var localctx = new TypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 142, CPP14Parser.RULE_typespecifier);
        try {
            this.state = 1263;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 111, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1260;
                        this.trailingtypespecifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1261;
                        this.classspecifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1262;
                        this.enumspecifier();
                    }
                    break;
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
    CPP14Parser.prototype.trailingtypespecifier = function () {
        var localctx = new TrailingtypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 144, CPP14Parser.RULE_trailingtypespecifier);
        try {
            this.state = 1269;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1265;
                        this.simpletypespecifier();
                    }
                    break;
                case CPP14Parser.Class:
                case CPP14Parser.Enum:
                case CPP14Parser.Struct:
                case CPP14Parser.Union:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1266;
                        this.elaboratedtypespecifier();
                    }
                    break;
                case CPP14Parser.Typename:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1267;
                        this.typenamespecifier();
                    }
                    break;
                case CPP14Parser.Const:
                case CPP14Parser.Volatile:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1268;
                        this.cvqualifier();
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
    CPP14Parser.prototype.typespecifierseq = function () {
        var localctx = new TypespecifierseqContext(this._ctx, this.state);
        this.enterRule(localctx, 146, CPP14Parser.RULE_typespecifierseq);
        try {
            this.state = 1278;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 114, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1271;
                        this.typespecifier();
                        this.state = 1273;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 113, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1272;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1275;
                        this.typespecifier();
                        this.state = 1276;
                        this.typespecifierseq();
                    }
                    break;
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
    CPP14Parser.prototype.trailingtypespecifierseq = function () {
        var localctx = new TrailingtypespecifierseqContext(this._ctx, this.state);
        this.enterRule(localctx, 148, CPP14Parser.RULE_trailingtypespecifierseq);
        try {
            this.state = 1287;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 116, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1280;
                        this.trailingtypespecifier();
                        this.state = 1282;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 115, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1281;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1284;
                        this.trailingtypespecifier();
                        this.state = 1285;
                        this.trailingtypespecifierseq();
                    }
                    break;
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
    CPP14Parser.prototype.simpletypespecifier = function () {
        var localctx = new SimpletypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 150, CPP14Parser.RULE_simpletypespecifier);
        try {
            this.state = 1312;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 118, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1290;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 117, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1289;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1292;
                        this.typename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1293;
                        this.nestednamespecifier(0);
                        this.state = 1294;
                        this.match(CPP14Parser.Template);
                        this.state = 1295;
                        this.simpletemplateid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1297;
                        this.match(CPP14Parser.Char);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1298;
                        this.match(CPP14Parser.Char16);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 1299;
                        this.match(CPP14Parser.Char32);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 1300;
                        this.match(CPP14Parser.Wchar);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 1301;
                        this.match(CPP14Parser.Bool);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 1302;
                        this.match(CPP14Parser.Short);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 1303;
                        this.match(CPP14Parser.Int);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 1304;
                        this.match(CPP14Parser.Long);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 1305;
                        this.match(CPP14Parser.Signed);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 1306;
                        this.match(CPP14Parser.Unsigned);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 1307;
                        this.match(CPP14Parser.Float);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 1308;
                        this.match(CPP14Parser.Double);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localctx, 15);
                    {
                        this.state = 1309;
                        this.match(CPP14Parser.Void);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 16);
                    {
                        this.state = 1310;
                        this.match(CPP14Parser.Auto);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localctx, 17);
                    {
                        this.state = 1311;
                        this.decltypespecifier();
                    }
                    break;
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
    CPP14Parser.prototype.typename = function () {
        var localctx = new TypenameContext(this._ctx, this.state);
        this.enterRule(localctx, 152, CPP14Parser.RULE_typename);
        try {
            this.state = 1318;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 119, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1314;
                        this.classname();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1315;
                        this.enumname();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1316;
                        this.typedefname();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1317;
                        this.simpletemplateid();
                    }
                    break;
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
    CPP14Parser.prototype.decltypespecifier = function () {
        var localctx = new DecltypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 154, CPP14Parser.RULE_decltypespecifier);
        try {
            this.state = 1329;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 120, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1320;
                        this.match(CPP14Parser.Decltype);
                        this.state = 1321;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1322;
                        this.expression(0);
                        this.state = 1323;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1325;
                        this.match(CPP14Parser.Decltype);
                        this.state = 1326;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1327;
                        this.match(CPP14Parser.Auto);
                        this.state = 1328;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
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
    CPP14Parser.prototype.elaboratedtypespecifier = function () {
        var localctx = new ElaboratedtypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 156, CPP14Parser.RULE_elaboratedtypespecifier);
        var _la;
        try {
            this.state = 1355;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 125, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1331;
                        this.classkey();
                        this.state = 1333;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1332;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1336;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 122, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1335;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1338;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1340;
                        this.classkey();
                        this.state = 1341;
                        this.simpletemplateid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1343;
                        this.classkey();
                        this.state = 1344;
                        this.nestednamespecifier(0);
                        this.state = 1346;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 1345;
                                this.match(CPP14Parser.Template);
                            }
                        }
                        this.state = 1348;
                        this.simpletemplateid();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1350;
                        this.match(CPP14Parser.Enum);
                        this.state = 1352;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 124, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1351;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 1354;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
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
    CPP14Parser.prototype.enumname = function () {
        var localctx = new EnumnameContext(this._ctx, this.state);
        this.enterRule(localctx, 158, CPP14Parser.RULE_enumname);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1357;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.enumspecifier = function () {
        var localctx = new EnumspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 160, CPP14Parser.RULE_enumspecifier);
        var _la;
        try {
            this.state = 1372;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 127, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1359;
                        this.enumhead();
                        this.state = 1360;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1362;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 1361;
                                this.enumeratorlist(0);
                            }
                        }
                        this.state = 1364;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1366;
                        this.enumhead();
                        this.state = 1367;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1368;
                        this.enumeratorlist(0);
                        this.state = 1369;
                        this.match(CPP14Parser.Comma);
                        this.state = 1370;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
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
    CPP14Parser.prototype.enumhead = function () {
        var localctx = new EnumheadContext(this._ctx, this.state);
        this.enterRule(localctx, 162, CPP14Parser.RULE_enumhead);
        var _la;
        try {
            this.state = 1393;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 133, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1374;
                        this.enumkey();
                        this.state = 1376;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1375;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1379;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 1378;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 1382;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119) {
                            {
                                this.state = 1381;
                                this.enumbase();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1384;
                        this.enumkey();
                        this.state = 1386;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1385;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1388;
                        this.nestednamespecifier(0);
                        this.state = 1389;
                        this.match(CPP14Parser.Identifier);
                        this.state = 1391;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119) {
                            {
                                this.state = 1390;
                                this.enumbase();
                            }
                        }
                    }
                    break;
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
    CPP14Parser.prototype.opaqueenumdeclaration = function () {
        var localctx = new OpaqueenumdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 164, CPP14Parser.RULE_opaqueenumdeclaration);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1395;
                this.enumkey();
                this.state = 1397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 1396;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1399;
                this.match(CPP14Parser.Identifier);
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 119) {
                    {
                        this.state = 1400;
                        this.enumbase();
                    }
                }
                this.state = 1403;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.enumkey = function () {
        var localctx = new EnumkeyContext(this._ctx, this.state);
        this.enterRule(localctx, 166, CPP14Parser.RULE_enumkey);
        try {
            this.state = 1410;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 136, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1405;
                        this.match(CPP14Parser.Enum);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1406;
                        this.match(CPP14Parser.Enum);
                        this.state = 1407;
                        this.match(CPP14Parser.Class);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1408;
                        this.match(CPP14Parser.Enum);
                        this.state = 1409;
                        this.match(CPP14Parser.Struct);
                    }
                    break;
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
    CPP14Parser.prototype.enumbase = function () {
        var localctx = new EnumbaseContext(this._ctx, this.state);
        this.enterRule(localctx, 168, CPP14Parser.RULE_enumbase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1412;
                this.match(CPP14Parser.Colon);
                this.state = 1413;
                this.typespecifierseq();
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
    CPP14Parser.prototype.enumeratorlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new EnumeratorlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 170;
        this.enterRecursionRule(localctx, 170, CPP14Parser.RULE_enumeratorlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1416;
                    this.enumeratordefinition();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1423;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new EnumeratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_enumeratorlist);
                                this.state = 1418;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1419;
                                this.match(CPP14Parser.Comma);
                                this.state = 1420;
                                this.enumeratordefinition();
                            }
                        }
                    }
                    this.state = 1425;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
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
    CPP14Parser.prototype.enumeratordefinition = function () {
        var localctx = new EnumeratordefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 172, CPP14Parser.RULE_enumeratordefinition);
        try {
            this.state = 1431;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 138, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1426;
                        this.enumerator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1427;
                        this.enumerator();
                        this.state = 1428;
                        this.match(CPP14Parser.Assign);
                        this.state = 1429;
                        this.constantexpression();
                    }
                    break;
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
    CPP14Parser.prototype.enumerator = function () {
        var localctx = new EnumeratorContext(this._ctx, this.state);
        this.enterRule(localctx, 174, CPP14Parser.RULE_enumerator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1433;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.namespacename = function () {
        var localctx = new NamespacenameContext(this._ctx, this.state);
        this.enterRule(localctx, 176, CPP14Parser.RULE_namespacename);
        try {
            this.state = 1437;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1435;
                        this.originalnamespacename();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1436;
                        this.namespacealias();
                    }
                    break;
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
    CPP14Parser.prototype.originalnamespacename = function () {
        var localctx = new OriginalnamespacenameContext(this._ctx, this.state);
        this.enterRule(localctx, 178, CPP14Parser.RULE_originalnamespacename);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1439;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.namespacedefinition = function () {
        var localctx = new NamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 180, CPP14Parser.RULE_namespacedefinition);
        try {
            this.state = 1443;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 140, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1441;
                        this.namednamespacedefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1442;
                        this.unnamednamespacedefinition();
                    }
                    break;
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
    CPP14Parser.prototype.namednamespacedefinition = function () {
        var localctx = new NamednamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 182, CPP14Parser.RULE_namednamespacedefinition);
        try {
            this.state = 1447;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 141, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1445;
                        this.originalnamespacedefinition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1446;
                        this.extensionnamespacedefinition();
                    }
                    break;
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
    CPP14Parser.prototype.originalnamespacedefinition = function () {
        var localctx = new OriginalnamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 184, CPP14Parser.RULE_originalnamespacedefinition);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1450;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 37) {
                    {
                        this.state = 1449;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1452;
                this.match(CPP14Parser.Namespace);
                this.state = 1453;
                this.match(CPP14Parser.Identifier);
                this.state = 1454;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1455;
                this.namespacebody();
                this.state = 1456;
                this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.extensionnamespacedefinition = function () {
        var localctx = new ExtensionnamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 186, CPP14Parser.RULE_extensionnamespacedefinition);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1459;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 37) {
                    {
                        this.state = 1458;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1461;
                this.match(CPP14Parser.Namespace);
                this.state = 1462;
                this.originalnamespacename();
                this.state = 1463;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1464;
                this.namespacebody();
                this.state = 1465;
                this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.unnamednamespacedefinition = function () {
        var localctx = new UnnamednamespacedefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 188, CPP14Parser.RULE_unnamednamespacedefinition);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1468;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 37) {
                    {
                        this.state = 1467;
                        this.match(CPP14Parser.Inline);
                    }
                }
                this.state = 1470;
                this.match(CPP14Parser.Namespace);
                this.state = 1471;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1472;
                this.namespacebody();
                this.state = 1473;
                this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.namespacebody = function () {
        var localctx = new NamespacebodyContext(this._ctx, this.state);
        this.enterRule(localctx, 190, CPP14Parser.RULE_namespacebody);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1476;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
                    {
                        this.state = 1475;
                        this.declarationseq(0);
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
    CPP14Parser.prototype.namespacealias = function () {
        var localctx = new NamespacealiasContext(this._ctx, this.state);
        this.enterRule(localctx, 192, CPP14Parser.RULE_namespacealias);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1478;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.namespacealiasdefinition = function () {
        var localctx = new NamespacealiasdefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 194, CPP14Parser.RULE_namespacealiasdefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1480;
                this.match(CPP14Parser.Namespace);
                this.state = 1481;
                this.match(CPP14Parser.Identifier);
                this.state = 1482;
                this.match(CPP14Parser.Assign);
                this.state = 1483;
                this.qualifiednamespacespecifier();
                this.state = 1484;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.qualifiednamespacespecifier = function () {
        var localctx = new QualifiednamespacespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 196, CPP14Parser.RULE_qualifiednamespacespecifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1487;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 146, this._ctx)) {
                    case 1:
                        {
                            this.state = 1486;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1489;
                this.namespacename();
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
    CPP14Parser.prototype.usingdeclaration = function () {
        var localctx = new UsingdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 198, CPP14Parser.RULE_usingdeclaration);
        var _la;
        try {
            this.state = 1504;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 148, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1491;
                        this.match(CPP14Parser.Using);
                        this.state = 1493;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 69) {
                            {
                                this.state = 1492;
                                this.match(CPP14Parser.Typename);
                            }
                        }
                        this.state = 1495;
                        this.nestednamespecifier(0);
                        this.state = 1496;
                        this.unqualifiedid();
                        this.state = 1497;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1499;
                        this.match(CPP14Parser.Using);
                        this.state = 1500;
                        this.match(CPP14Parser.Doublecolon);
                        this.state = 1501;
                        this.unqualifiedid();
                        this.state = 1502;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
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
    CPP14Parser.prototype.usingdirective = function () {
        var localctx = new UsingdirectiveContext(this._ctx, this.state);
        this.enterRule(localctx, 200, CPP14Parser.RULE_usingdirective);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1507;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 1506;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1509;
                this.match(CPP14Parser.Using);
                this.state = 1510;
                this.match(CPP14Parser.Namespace);
                this.state = 1512;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 150, this._ctx)) {
                    case 1:
                        {
                            this.state = 1511;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1514;
                this.namespacename();
                this.state = 1515;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.asmdefinition = function () {
        var localctx = new AsmdefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 202, CPP14Parser.RULE_asmdefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1517;
                this.match(CPP14Parser.Asm);
                this.state = 1518;
                this.match(CPP14Parser.LeftParen);
                this.state = 1519;
                this.match(CPP14Parser.Stringliteral);
                this.state = 1520;
                this.match(CPP14Parser.RightParen);
                this.state = 1521;
                this.match(CPP14Parser.Semi);
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
    CPP14Parser.prototype.linkagespecification = function () {
        var localctx = new LinkagespecificationContext(this._ctx, this.state);
        this.enterRule(localctx, 204, CPP14Parser.RULE_linkagespecification);
        var _la;
        try {
            this.state = 1533;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 152, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1523;
                        this.match(CPP14Parser.Extern);
                        this.state = 1524;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 1525;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1527;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239656) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875466725) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26113) !== 0)) {
                            {
                                this.state = 1526;
                                this.declarationseq(0);
                            }
                        }
                        this.state = 1529;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1530;
                        this.match(CPP14Parser.Extern);
                        this.state = 1531;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 1532;
                        this.declaration();
                    }
                    break;
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
    CPP14Parser.prototype.attributespecifierseq = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new AttributespecifierseqContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 206;
        this.enterRecursionRule(localctx, 206, CPP14Parser.RULE_attributespecifierseq, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1536;
                    this.attributespecifier();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1542;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new AttributespecifierseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_attributespecifierseq);
                                this.state = 1538;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1539;
                                this.attributespecifier();
                            }
                        }
                    }
                    this.state = 1544;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 153, this._ctx);
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
    CPP14Parser.prototype.attributespecifier = function () {
        var localctx = new AttributespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 208, CPP14Parser.RULE_attributespecifier);
        try {
            this.state = 1552;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1545;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1546;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1547;
                        this.attributelist(0);
                        this.state = 1548;
                        this.match(CPP14Parser.RightBracket);
                        this.state = 1549;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case CPP14Parser.Alignas:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1551;
                        this.alignmentspecifier();
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
    CPP14Parser.prototype.alignmentspecifier = function () {
        var localctx = new AlignmentspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 210, CPP14Parser.RULE_alignmentspecifier);
        var _la;
        try {
            this.state = 1570;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 157, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1554;
                        this.match(CPP14Parser.Alignas);
                        this.state = 1555;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1556;
                        this.typeid();
                        this.state = 1558;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 124) {
                            {
                                this.state = 1557;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 1560;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1562;
                        this.match(CPP14Parser.Alignas);
                        this.state = 1563;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1564;
                        this.constantexpression();
                        this.state = 1566;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 124) {
                            {
                                this.state = 1565;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 1568;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
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
    CPP14Parser.prototype.attributelist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new AttributelistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 212;
        this.enterRecursionRule(localctx, 212, CPP14Parser.RULE_attributelist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1579;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 159, this._ctx)) {
                    case 1:
                        {
                            this.state = 1574;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 158, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1573;
                                        this.attribute();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1576;
                            this.attribute();
                            this.state = 1577;
                            this.match(CPP14Parser.Ellipsis);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1593;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 1591;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 161, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new AttributelistContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_attributelist);
                                        this.state = 1581;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1582;
                                        this.match(CPP14Parser.Comma);
                                        this.state = 1584;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 160, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1583;
                                                    this.attribute();
                                                }
                                                break;
                                        }
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new AttributelistContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_attributelist);
                                        this.state = 1586;
                                        if (!(this.precpred(this._ctx, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                        }
                                        this.state = 1587;
                                        this.match(CPP14Parser.Comma);
                                        this.state = 1588;
                                        this.attribute();
                                        this.state = 1589;
                                        this.match(CPP14Parser.Ellipsis);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1595;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 162, this._ctx);
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
    CPP14Parser.prototype.attribute = function () {
        var localctx = new AttributeContext(this._ctx, this.state);
        this.enterRule(localctx, 214, CPP14Parser.RULE_attribute);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1596;
                this.attributetoken();
                this.state = 1598;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 163, this._ctx)) {
                    case 1:
                        {
                            this.state = 1597;
                            this.attributeargumentclause();
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
    CPP14Parser.prototype.attributetoken = function () {
        var localctx = new AttributetokenContext(this._ctx, this.state);
        this.enterRule(localctx, 216, CPP14Parser.RULE_attributetoken);
        try {
            this.state = 1602;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 164, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1600;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1601;
                        this.attributescopedtoken();
                    }
                    break;
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
    CPP14Parser.prototype.attributescopedtoken = function () {
        var localctx = new AttributescopedtokenContext(this._ctx, this.state);
        this.enterRule(localctx, 218, CPP14Parser.RULE_attributescopedtoken);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1604;
                this.attributenamespace();
                this.state = 1605;
                this.match(CPP14Parser.Doublecolon);
                this.state = 1606;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.attributenamespace = function () {
        var localctx = new AttributenamespaceContext(this._ctx, this.state);
        this.enterRule(localctx, 220, CPP14Parser.RULE_attributenamespace);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1608;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.attributeargumentclause = function () {
        var localctx = new AttributeargumentclauseContext(this._ctx, this.state);
        this.enterRule(localctx, 222, CPP14Parser.RULE_attributeargumentclause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1610;
                this.match(CPP14Parser.LeftParen);
                this.state = 1611;
                this.balancedtokenseq(0);
                this.state = 1612;
                this.match(CPP14Parser.RightParen);
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
    CPP14Parser.prototype.balancedtokenseq = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new BalancedtokenseqContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 224;
        this.enterRecursionRule(localctx, 224, CPP14Parser.RULE_balancedtokenseq, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1616;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 165, this._ctx)) {
                        case 1:
                            {
                                this.state = 1615;
                                this.balancedtoken();
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1622;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new BalancedtokenseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_balancedtokenseq);
                                this.state = 1618;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1619;
                                this.balancedtoken();
                            }
                        }
                    }
                    this.state = 1624;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 166, this._ctx);
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
    CPP14Parser.prototype.balancedtoken = function () {
        var localctx = new BalancedtokenContext(this._ctx, this.state);
        this.enterRule(localctx, 226, CPP14Parser.RULE_balancedtoken);
        try {
            this.state = 1637;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1625;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1626;
                        this.balancedtokenseq(0);
                        this.state = 1627;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1629;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 1630;
                        this.balancedtokenseq(0);
                        this.state = 1631;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1633;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1634;
                        this.balancedtokenseq(0);
                        this.state = 1635;
                        this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.initdeclaratorlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new InitdeclaratorlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 228;
        this.enterRecursionRule(localctx, 228, CPP14Parser.RULE_initdeclaratorlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1640;
                    this.initdeclarator();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1647;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new InitdeclaratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_initdeclaratorlist);
                                this.state = 1642;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1643;
                                this.match(CPP14Parser.Comma);
                                this.state = 1644;
                                this.initdeclarator();
                            }
                        }
                    }
                    this.state = 1649;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
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
    CPP14Parser.prototype.initdeclarator = function () {
        var localctx = new InitdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 230, CPP14Parser.RULE_initdeclarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1650;
                this.declarator();
                this.state = 1652;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 169, this._ctx)) {
                    case 1:
                        {
                            this.state = 1651;
                            this.initializer();
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
    CPP14Parser.prototype.declarator = function () {
        var localctx = new DeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 232, CPP14Parser.RULE_declarator);
        try {
            this.state = 1659;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 170, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1654;
                        this.ptrdeclarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1655;
                        this.noptrdeclarator(0);
                        this.state = 1656;
                        this.parametersandqualifiers();
                        this.state = 1657;
                        this.trailingreturntype();
                    }
                    break;
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
    CPP14Parser.prototype.ptrdeclarator = function () {
        var localctx = new PtrdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 234, CPP14Parser.RULE_ptrdeclarator);
        try {
            this.state = 1665;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 171, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1661;
                        this.noptrdeclarator(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1662;
                        this.ptroperator();
                        this.state = 1663;
                        this.ptrdeclarator();
                    }
                    break;
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
    CPP14Parser.prototype.noptrdeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new NoptrdeclaratorContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 236;
        this.enterRecursionRule(localctx, 236, CPP14Parser.RULE_noptrdeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1676;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case CPP14Parser.Decltype:
                    case CPP14Parser.Operator:
                    case CPP14Parser.Tilde:
                    case CPP14Parser.Doublecolon:
                    case CPP14Parser.Ellipsis:
                    case CPP14Parser.Identifier:
                        {
                            this.state = 1668;
                            this.declaratorid();
                            this.state = 1670;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 172, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1669;
                                        this.attributespecifierseq(0);
                                    }
                                    break;
                            }
                        }
                        break;
                    case CPP14Parser.LeftParen:
                        {
                            this.state = 1672;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 1673;
                            this.ptrdeclarator();
                            this.state = 1674;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1691;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 177, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 1689;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 176, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
                                        this.state = 1678;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1679;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new NoptrdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrdeclarator);
                                        this.state = 1680;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1681;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1683;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                            {
                                                this.state = 1682;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1685;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1687;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 175, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1686;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1693;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 177, this._ctx);
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
    CPP14Parser.prototype.parametersandqualifiers = function () {
        var localctx = new ParametersandqualifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 238, CPP14Parser.RULE_parametersandqualifiers);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1694;
                this.match(CPP14Parser.LeftParen);
                this.state = 1695;
                this.parameterdeclarationclause();
                this.state = 1696;
                this.match(CPP14Parser.RightParen);
                this.state = 1698;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 178, this._ctx)) {
                    case 1:
                        {
                            this.state = 1697;
                            this.cvqualifierseq();
                        }
                        break;
                }
                this.state = 1701;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 179, this._ctx)) {
                    case 1:
                        {
                            this.state = 1700;
                            this.refqualifier();
                        }
                        break;
                }
                this.state = 1704;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 180, this._ctx)) {
                    case 1:
                        {
                            this.state = 1703;
                            this.exceptionspecification();
                        }
                        break;
                }
                this.state = 1707;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 181, this._ctx)) {
                    case 1:
                        {
                            this.state = 1706;
                            this.attributespecifierseq(0);
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
    CPP14Parser.prototype.trailingreturntype = function () {
        var localctx = new TrailingreturntypeContext(this._ctx, this.state);
        this.enterRule(localctx, 240, CPP14Parser.RULE_trailingreturntype);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1709;
                this.match(CPP14Parser.Arrow);
                this.state = 1710;
                this.trailingtypespecifierseq();
                this.state = 1712;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 182, this._ctx)) {
                    case 1:
                        {
                            this.state = 1711;
                            this.abstractdeclarator();
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
    CPP14Parser.prototype.ptroperator = function () {
        var localctx = new PtroperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 242, CPP14Parser.RULE_ptroperator);
        try {
            this.state = 1737;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Star:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1714;
                        this.match(CPP14Parser.Star);
                        this.state = 1716;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 183, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1715;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 1719;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 184, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1718;
                                    this.cvqualifierseq();
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.And:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1721;
                        this.match(CPP14Parser.And);
                        this.state = 1723;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 185, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1722;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.AndAnd:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1725;
                        this.match(CPP14Parser.AndAnd);
                        this.state = 1727;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 186, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1726;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1729;
                        this.nestednamespecifier(0);
                        this.state = 1730;
                        this.match(CPP14Parser.Star);
                        this.state = 1732;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 187, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1731;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 1735;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 188, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1734;
                                    this.cvqualifierseq();
                                }
                                break;
                        }
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
    CPP14Parser.prototype.cvqualifierseq = function () {
        var localctx = new CvqualifierseqContext(this._ctx, this.state);
        this.enterRule(localctx, 244, CPP14Parser.RULE_cvqualifierseq);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1739;
                this.cvqualifier();
                this.state = 1741;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 190, this._ctx)) {
                    case 1:
                        {
                            this.state = 1740;
                            this.cvqualifierseq();
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
    CPP14Parser.prototype.cvqualifier = function () {
        var localctx = new CvqualifierContext(this._ctx, this.state);
        this.enterRule(localctx, 246, CPP14Parser.RULE_cvqualifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1743;
                _la = this._input.LA(1);
                if (!(_la === 15 || _la === 75)) {
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
    CPP14Parser.prototype.refqualifier = function () {
        var localctx = new RefqualifierContext(this._ctx, this.state);
        this.enterRule(localctx, 248, CPP14Parser.RULE_refqualifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1745;
                _la = this._input.LA(1);
                if (!(_la === 90 || _la === 111)) {
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
    CPP14Parser.prototype.declaratorid = function () {
        var localctx = new DeclaratoridContext(this._ctx, this.state);
        this.enterRule(localctx, 250, CPP14Parser.RULE_declaratorid);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1748;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 124) {
                    {
                        this.state = 1747;
                        this.match(CPP14Parser.Ellipsis);
                    }
                }
                this.state = 1750;
                this.idexpression();
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
    CPP14Parser.prototype.typeid = function () {
        var localctx = new TypeidContext(this._ctx, this.state);
        this.enterRule(localctx, 252, CPP14Parser.RULE_typeid);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1752;
                this.typespecifierseq();
                this.state = 1754;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 192, this._ctx)) {
                    case 1:
                        {
                            this.state = 1753;
                            this.abstractdeclarator();
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
    CPP14Parser.prototype.abstractdeclarator = function () {
        var localctx = new AbstractdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 254, CPP14Parser.RULE_abstractdeclarator);
        try {
            this.state = 1764;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 194, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1756;
                        this.ptrabstractdeclarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1758;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 193, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1757;
                                    this.noptrabstractdeclarator(0);
                                }
                                break;
                        }
                        this.state = 1760;
                        this.parametersandqualifiers();
                        this.state = 1761;
                        this.trailingreturntype();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1763;
                        this.abstractpackdeclarator();
                    }
                    break;
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
    CPP14Parser.prototype.ptrabstractdeclarator = function () {
        var localctx = new PtrabstractdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 256, CPP14Parser.RULE_ptrabstractdeclarator);
        try {
            this.state = 1771;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1766;
                        this.noptrabstractdeclarator(0);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1767;
                        this.ptroperator();
                        this.state = 1769;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 195, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1768;
                                    this.ptrabstractdeclarator();
                                }
                                break;
                        }
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
    CPP14Parser.prototype.noptrabstractdeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new NoptrabstractdeclaratorContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 258;
        this.enterRecursionRule(localctx, 258, CPP14Parser.RULE_noptrabstractdeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1787;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 199, this._ctx)) {
                    case 1:
                        {
                            this.state = 1774;
                            this.parametersandqualifiers();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1775;
                            this.match(CPP14Parser.LeftBracket);
                            this.state = 1777;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                {
                                    this.state = 1776;
                                    this.constantexpression();
                                }
                            }
                            this.state = 1779;
                            this.match(CPP14Parser.RightBracket);
                            this.state = 1781;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 198, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1780;
                                        this.attributespecifierseq(0);
                                    }
                                    break;
                            }
                        }
                        break;
                    case 3:
                        {
                            this.state = 1783;
                            this.match(CPP14Parser.LeftParen);
                            this.state = 1784;
                            this.ptrabstractdeclarator();
                            this.state = 1785;
                            this.match(CPP14Parser.RightParen);
                        }
                        break;
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1802;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 1800;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 202, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                                        this.state = 1789;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 1790;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new NoptrabstractdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrabstractdeclarator);
                                        this.state = 1791;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1792;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1794;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                            {
                                                this.state = 1793;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1796;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1798;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 201, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1797;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1804;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 203, this._ctx);
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
    CPP14Parser.prototype.abstractpackdeclarator = function () {
        var localctx = new AbstractpackdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 260, CPP14Parser.RULE_abstractpackdeclarator);
        try {
            this.state = 1809;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Ellipsis:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1805;
                        this.noptrabstractpackdeclarator(0);
                    }
                    break;
                case CPP14Parser.Decltype:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1806;
                        this.ptroperator();
                        this.state = 1807;
                        this.abstractpackdeclarator();
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
    CPP14Parser.prototype.noptrabstractpackdeclarator = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new NoptrabstractpackdeclaratorContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 262;
        this.enterRecursionRule(localctx, 262, CPP14Parser.RULE_noptrabstractpackdeclarator, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1812;
                    this.match(CPP14Parser.Ellipsis);
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1827;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            this.state = 1825;
                            this._errHandler.sync(this);
                            switch (this._interp.adaptivePredict(this._input, 207, this._ctx)) {
                                case 1:
                                    {
                                        localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                                        this.state = 1814;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 1815;
                                        this.parametersandqualifiers();
                                    }
                                    break;
                                case 2:
                                    {
                                        localctx = new NoptrabstractpackdeclaratorContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_noptrabstractpackdeclarator);
                                        this.state = 1816;
                                        if (!(this.precpred(this._ctx, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                                        }
                                        this.state = 1817;
                                        this.match(CPP14Parser.LeftBracket);
                                        this.state = 1819;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507030105) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                                            {
                                                this.state = 1818;
                                                this.constantexpression();
                                            }
                                        }
                                        this.state = 1821;
                                        this.match(CPP14Parser.RightBracket);
                                        this.state = 1823;
                                        this._errHandler.sync(this);
                                        switch (this._interp.adaptivePredict(this._input, 206, this._ctx)) {
                                            case 1:
                                                {
                                                    this.state = 1822;
                                                    this.attributespecifierseq(0);
                                                }
                                                break;
                                        }
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 1829;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 208, this._ctx);
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
    CPP14Parser.prototype.parameterdeclarationclause = function () {
        var localctx = new ParameterdeclarationclauseContext(this._ctx, this.state);
        this.enterRule(localctx, 264, CPP14Parser.RULE_parameterdeclarationclause);
        var _la;
        try {
            this.state = 1840;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 211, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1831;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2305032677) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 9181) !== 0) || _la === 120 || _la === 125) {
                            {
                                this.state = 1830;
                                this.parameterdeclarationlist(0);
                            }
                        }
                        this.state = 1834;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 124) {
                            {
                                this.state = 1833;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1836;
                        this.parameterdeclarationlist(0);
                        this.state = 1837;
                        this.match(CPP14Parser.Comma);
                        this.state = 1838;
                        this.match(CPP14Parser.Ellipsis);
                    }
                    break;
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
    CPP14Parser.prototype.parameterdeclarationlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new ParameterdeclarationlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 266;
        this.enterRecursionRule(localctx, 266, CPP14Parser.RULE_parameterdeclarationlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1843;
                    this.parameterdeclaration();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1850;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new ParameterdeclarationlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_parameterdeclarationlist);
                                this.state = 1845;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1846;
                                this.match(CPP14Parser.Comma);
                                this.state = 1847;
                                this.parameterdeclaration();
                            }
                        }
                    }
                    this.state = 1852;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 212, this._ctx);
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
    CPP14Parser.prototype.parameterdeclaration = function () {
        var localctx = new ParameterdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 268, CPP14Parser.RULE_parameterdeclaration);
        var _la;
        try {
            this.state = 1884;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 219, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1854;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1853;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1856;
                        this.declspecifierseq();
                        this.state = 1857;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1860;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1859;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1862;
                        this.declspecifierseq();
                        this.state = 1863;
                        this.declarator();
                        this.state = 1864;
                        this.match(CPP14Parser.Assign);
                        this.state = 1865;
                        this.initializerclause();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1868;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1867;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1870;
                        this.declspecifierseq();
                        this.state = 1872;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 216, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1871;
                                    this.abstractdeclarator();
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1875;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1874;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1877;
                        this.declspecifierseq();
                        this.state = 1879;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 19 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4357) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
                            {
                                this.state = 1878;
                                this.abstractdeclarator();
                            }
                        }
                        this.state = 1881;
                        this.match(CPP14Parser.Assign);
                        this.state = 1882;
                        this.initializerclause();
                    }
                    break;
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
    CPP14Parser.prototype.functiondefinition = function () {
        var localctx = new FunctiondefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 270, CPP14Parser.RULE_functiondefinition);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1887;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 3 || _la === 80) {
                    {
                        this.state = 1886;
                        this.attributespecifierseq(0);
                    }
                }
                this.state = 1890;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 221, this._ctx)) {
                    case 1:
                        {
                            this.state = 1889;
                            this.declspecifierseq();
                        }
                        break;
                }
                this.state = 1892;
                this.declarator();
                this.state = 1894;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 31 || _la === 46) {
                    {
                        this.state = 1893;
                        this.virtspecifierseq(0);
                    }
                }
                this.state = 1896;
                this.functionbody();
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
    CPP14Parser.prototype.functionbody = function () {
        var localctx = new FunctionbodyContext(this._ctx, this.state);
        this.enterRule(localctx, 272, CPP14Parser.RULE_functionbody);
        var _la;
        try {
            this.state = 1909;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 224, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1899;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119) {
                            {
                                this.state = 1898;
                                this.ctorinitializer();
                            }
                        }
                        this.state = 1901;
                        this.compoundstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1902;
                        this.functiontryblock();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 1903;
                        this.match(CPP14Parser.Assign);
                        this.state = 1904;
                        this.match(CPP14Parser.Default);
                        this.state = 1905;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 1906;
                        this.match(CPP14Parser.Assign);
                        this.state = 1907;
                        this.match(CPP14Parser.Delete);
                        this.state = 1908;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
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
    CPP14Parser.prototype.initializer = function () {
        var localctx = new InitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 274, CPP14Parser.RULE_initializer);
        try {
            this.state = 1916;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.LeftBrace:
                case CPP14Parser.Assign:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1911;
                        this.braceorequalinitializer();
                    }
                    break;
                case CPP14Parser.LeftParen:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1912;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 1913;
                        this.expressionlist();
                        this.state = 1914;
                        this.match(CPP14Parser.RightParen);
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
    CPP14Parser.prototype.braceorequalinitializer = function () {
        var localctx = new BraceorequalinitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 276, CPP14Parser.RULE_braceorequalinitializer);
        try {
            this.state = 1921;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Assign:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1918;
                        this.match(CPP14Parser.Assign);
                        this.state = 1919;
                        this.initializerclause();
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1920;
                        this.bracedinitlist();
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
    CPP14Parser.prototype.initializerclause = function () {
        var localctx = new InitializerclauseContext(this._ctx, this.state);
        this.enterRule(localctx, 278, CPP14Parser.RULE_initializerclause);
        try {
            this.state = 1925;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignof:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Const_cast:
                case CPP14Parser.Decltype:
                case CPP14Parser.Delete:
                case CPP14Parser.Double:
                case CPP14Parser.Dynamic_cast:
                case CPP14Parser.False:
                case CPP14Parser.Float:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.New:
                case CPP14Parser.Noexcept:
                case CPP14Parser.Nullptr:
                case CPP14Parser.Operator:
                case CPP14Parser.Reinterpret_cast:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Sizeof:
                case CPP14Parser.Static_cast:
                case CPP14Parser.This:
                case CPP14Parser.Throw:
                case CPP14Parser.True:
                case CPP14Parser.Typeid:
                case CPP14Parser.Typename:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Void:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Plus:
                case CPP14Parser.Minus:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Or:
                case CPP14Parser.Tilde:
                case CPP14Parser.Not:
                case CPP14Parser.PlusPlus:
                case CPP14Parser.MinusMinus:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Identifier:
                case CPP14Parser.Integerliteral:
                case CPP14Parser.Characterliteral:
                case CPP14Parser.Floatingliteral:
                case CPP14Parser.Stringliteral:
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1923;
                        this.assignmentexpression();
                    }
                    break;
                case CPP14Parser.LeftBrace:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1924;
                        this.bracedinitlist();
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
    CPP14Parser.prototype.initializerlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new InitializerlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 280;
        this.enterRecursionRule(localctx, 280, CPP14Parser.RULE_initializerlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 1928;
                    this.initializerclause();
                    this.state = 1930;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 228, this._ctx)) {
                        case 1:
                            {
                                this.state = 1929;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 1940;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new InitializerlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_initializerlist);
                                this.state = 1932;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 1933;
                                this.match(CPP14Parser.Comma);
                                this.state = 1934;
                                this.initializerclause();
                                this.state = 1936;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 229, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1935;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1942;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 230, this._ctx);
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
    CPP14Parser.prototype.bracedinitlist = function () {
        var localctx = new BracedinitlistContext(this._ctx, this.state);
        this.enterRule(localctx, 282, CPP14Parser.RULE_bracedinitlist);
        var _la;
        try {
            this.state = 1952;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 232, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1943;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1944;
                        this.initializerlist(0);
                        this.state = 1946;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 115) {
                            {
                                this.state = 1945;
                                this.match(CPP14Parser.Comma);
                            }
                        }
                        this.state = 1948;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1950;
                        this.match(CPP14Parser.LeftBrace);
                        this.state = 1951;
                        this.match(CPP14Parser.RightBrace);
                    }
                    break;
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
    CPP14Parser.prototype.classname = function () {
        var localctx = new ClassnameContext(this._ctx, this.state);
        this.enterRule(localctx, 284, CPP14Parser.RULE_classname);
        try {
            this.state = 1956;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 233, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1954;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1955;
                        this.simpletemplateid();
                    }
                    break;
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
    CPP14Parser.prototype.classspecifier = function () {
        var localctx = new ClassspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 286, CPP14Parser.RULE_classspecifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1958;
                this.classhead();
                this.state = 1959;
                this.match(CPP14Parser.LeftBrace);
                this.state = 1961;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
                    {
                        this.state = 1960;
                        this.memberspecification();
                    }
                }
                this.state = 1963;
                this.match(CPP14Parser.RightBrace);
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
    CPP14Parser.prototype.classhead = function () {
        var localctx = new ClassheadContext(this._ctx, this.state);
        this.enterRule(localctx, 288, CPP14Parser.RULE_classhead);
        var _la;
        try {
            this.state = 1983;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 240, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1965;
                        this.classkey();
                        this.state = 1967;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1966;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1969;
                        this.classheadname();
                        this.state = 1971;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 31) {
                            {
                                this.state = 1970;
                                this.classvirtspecifier();
                            }
                        }
                        this.state = 1974;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119) {
                            {
                                this.state = 1973;
                                this.baseclause();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1976;
                        this.classkey();
                        this.state = 1978;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 1977;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 1981;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 119) {
                            {
                                this.state = 1980;
                                this.baseclause();
                            }
                        }
                    }
                    break;
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
    CPP14Parser.prototype.classheadname = function () {
        var localctx = new ClassheadnameContext(this._ctx, this.state);
        this.enterRule(localctx, 290, CPP14Parser.RULE_classheadname);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1986;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 241, this._ctx)) {
                    case 1:
                        {
                            this.state = 1985;
                            this.nestednamespecifier(0);
                        }
                        break;
                }
                this.state = 1988;
                this.classname();
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
    CPP14Parser.prototype.classvirtspecifier = function () {
        var localctx = new ClassvirtspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 292, CPP14Parser.RULE_classvirtspecifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1990;
                this.match(CPP14Parser.Final);
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
    CPP14Parser.prototype.classkey = function () {
        var localctx = new ClasskeyContext(this._ctx, this.state);
        this.enterRule(localctx, 294, CPP14Parser.RULE_classkey);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 1992;
                _la = this._input.LA(1);
                if (!(_la === 14 || _la === 59 || _la === 70)) {
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
    CPP14Parser.prototype.memberspecification = function () {
        var localctx = new MemberspecificationContext(this._ctx, this.state);
        this.enterRule(localctx, 296, CPP14Parser.RULE_memberspecification);
        var _la;
        try {
            this.state = 2003;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Alignas:
                case CPP14Parser.Auto:
                case CPP14Parser.Bool:
                case CPP14Parser.Char:
                case CPP14Parser.Char16:
                case CPP14Parser.Char32:
                case CPP14Parser.Class:
                case CPP14Parser.Const:
                case CPP14Parser.Constexpr:
                case CPP14Parser.Decltype:
                case CPP14Parser.Double:
                case CPP14Parser.Enum:
                case CPP14Parser.Explicit:
                case CPP14Parser.Extern:
                case CPP14Parser.Float:
                case CPP14Parser.Friend:
                case CPP14Parser.Inline:
                case CPP14Parser.Int:
                case CPP14Parser.Long:
                case CPP14Parser.Mutable:
                case CPP14Parser.Operator:
                case CPP14Parser.Register:
                case CPP14Parser.Short:
                case CPP14Parser.Signed:
                case CPP14Parser.Static:
                case CPP14Parser.Static_assert:
                case CPP14Parser.Struct:
                case CPP14Parser.Template:
                case CPP14Parser.Thread_local:
                case CPP14Parser.Typedef:
                case CPP14Parser.Typename:
                case CPP14Parser.Union:
                case CPP14Parser.Unsigned:
                case CPP14Parser.Using:
                case CPP14Parser.Virtual:
                case CPP14Parser.Void:
                case CPP14Parser.Volatile:
                case CPP14Parser.Wchar:
                case CPP14Parser.LeftParen:
                case CPP14Parser.LeftBracket:
                case CPP14Parser.Star:
                case CPP14Parser.And:
                case CPP14Parser.Tilde:
                case CPP14Parser.AndAnd:
                case CPP14Parser.Colon:
                case CPP14Parser.Doublecolon:
                case CPP14Parser.Semi:
                case CPP14Parser.Ellipsis:
                case CPP14Parser.Identifier:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 1994;
                        this.memberdeclaration();
                        this.state = 1996;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
                            {
                                this.state = 1995;
                                this.memberspecification();
                            }
                        }
                    }
                    break;
                case CPP14Parser.Private:
                case CPP14Parser.Protected:
                case CPP14Parser.Public:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 1998;
                        this.accessspecifier();
                        this.state = 1999;
                        this.match(CPP14Parser.Colon);
                        this.state = 2001;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 747239624) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2875695589) !== 0) || ((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 42478589) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 26369) !== 0)) {
                            {
                                this.state = 2000;
                                this.memberspecification();
                            }
                        }
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
    CPP14Parser.prototype.memberdeclaration = function () {
        var localctx = new MemberdeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 298, CPP14Parser.RULE_memberdeclaration);
        var _la;
        try {
            this.state = 2021;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 248, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2006;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 245, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2005;
                                    this.attributespecifierseq(0);
                                }
                                break;
                        }
                        this.state = 2009;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 246, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2008;
                                    this.declspecifierseq();
                                }
                                break;
                        }
                        this.state = 2012;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 19 || _la === 45 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 20741) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25345) !== 0)) {
                            {
                                this.state = 2011;
                                this.memberdeclaratorlist(0);
                            }
                        }
                        this.state = 2014;
                        this.match(CPP14Parser.Semi);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2015;
                        this.functiondefinition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2016;
                        this.usingdeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2017;
                        this.static_assertdeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2018;
                        this.templatedeclaration();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2019;
                        this.aliasdeclaration();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 2020;
                        this.emptydeclaration();
                    }
                    break;
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
    CPP14Parser.prototype.memberdeclaratorlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new MemberdeclaratorlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 300;
        this.enterRecursionRule(localctx, 300, CPP14Parser.RULE_memberdeclaratorlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2024;
                    this.memberdeclarator();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2031;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new MemberdeclaratorlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_memberdeclaratorlist);
                                this.state = 2026;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2027;
                                this.match(CPP14Parser.Comma);
                                this.state = 2028;
                                this.memberdeclarator();
                            }
                        }
                    }
                    this.state = 2033;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 249, this._ctx);
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
    CPP14Parser.prototype.memberdeclarator = function () {
        var localctx = new MemberdeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 302, CPP14Parser.RULE_memberdeclarator);
        var _la;
        try {
            this.state = 2053;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 255, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2034;
                        this.declarator();
                        this.state = 2036;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 250, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2035;
                                    this.virtspecifierseq(0);
                                }
                                break;
                        }
                        this.state = 2039;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 251, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2038;
                                    this.purespecifier();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2041;
                        this.declarator();
                        this.state = 2043;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 252, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2042;
                                    this.braceorequalinitializer();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2046;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 2045;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2049;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2048;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2051;
                        this.match(CPP14Parser.Colon);
                        this.state = 2052;
                        this.constantexpression();
                    }
                    break;
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
    CPP14Parser.prototype.virtspecifierseq = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new VirtspecifierseqContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 304;
        this.enterRecursionRule(localctx, 304, CPP14Parser.RULE_virtspecifierseq, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2056;
                    this.virtspecifier();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2062;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 256, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new VirtspecifierseqContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_virtspecifierseq);
                                this.state = 2058;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2059;
                                this.virtspecifier();
                            }
                        }
                    }
                    this.state = 2064;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 256, this._ctx);
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
    CPP14Parser.prototype.virtspecifier = function () {
        var localctx = new VirtspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 306, CPP14Parser.RULE_virtspecifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2065;
                _la = this._input.LA(1);
                if (!(_la === 31 || _la === 46)) {
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
    CPP14Parser.prototype.purespecifier = function () {
        var localctx = new PurespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 308, CPP14Parser.RULE_purespecifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2067;
                this.match(CPP14Parser.Assign);
                this.state = 2068;
                localctx._val = this.match(CPP14Parser.Octalliteral);
                if ((localctx._val != null ? localctx._val.text : undefined) != "0")
                    throw new antlr.InputMismatchException(this);
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
    CPP14Parser.prototype.baseclause = function () {
        var localctx = new BaseclauseContext(this._ctx, this.state);
        this.enterRule(localctx, 310, CPP14Parser.RULE_baseclause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2071;
                this.match(CPP14Parser.Colon);
                this.state = 2072;
                this.basespecifierlist(0);
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
    CPP14Parser.prototype.basespecifierlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new BasespecifierlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 312;
        this.enterRecursionRule(localctx, 312, CPP14Parser.RULE_basespecifierlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2075;
                    this.basespecifier();
                    this.state = 2077;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 257, this._ctx)) {
                        case 1:
                            {
                                this.state = 2076;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2087;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new BasespecifierlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_basespecifierlist);
                                this.state = 2079;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2080;
                                this.match(CPP14Parser.Comma);
                                this.state = 2081;
                                this.basespecifier();
                                this.state = 2083;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 258, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2082;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2089;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 259, this._ctx);
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
    CPP14Parser.prototype.basespecifier = function () {
        var localctx = new BasespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 314, CPP14Parser.RULE_basespecifier);
        var _la;
        try {
            this.state = 2111;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 265, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2091;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2090;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2093;
                        this.basetypespecifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2095;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2094;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2097;
                        this.match(CPP14Parser.Virtual);
                        this.state = 2099;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0)) {
                            {
                                this.state = 2098;
                                this.accessspecifier();
                            }
                        }
                        this.state = 2101;
                        this.basetypespecifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2103;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2102;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2105;
                        this.accessspecifier();
                        this.state = 2107;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 73) {
                            {
                                this.state = 2106;
                                this.match(CPP14Parser.Virtual);
                            }
                        }
                        this.state = 2109;
                        this.basetypespecifier();
                    }
                    break;
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
    CPP14Parser.prototype.classordecltype = function () {
        var localctx = new ClassordecltypeContext(this._ctx, this.state);
        this.enterRule(localctx, 316, CPP14Parser.RULE_classordecltype);
        try {
            this.state = 2118;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 267, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2114;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 266, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2113;
                                    this.nestednamespecifier(0);
                                }
                                break;
                        }
                        this.state = 2116;
                        this.classname();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2117;
                        this.decltypespecifier();
                    }
                    break;
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
    CPP14Parser.prototype.basetypespecifier = function () {
        var localctx = new BasetypespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 318, CPP14Parser.RULE_basetypespecifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2120;
                this.classordecltype();
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
    CPP14Parser.prototype.accessspecifier = function () {
        var localctx = new AccessspecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 320, CPP14Parser.RULE_accessspecifier);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2122;
                _la = this._input.LA(1);
                if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0))) {
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
    CPP14Parser.prototype.conversionfunctionid = function () {
        var localctx = new ConversionfunctionidContext(this._ctx, this.state);
        this.enterRule(localctx, 322, CPP14Parser.RULE_conversionfunctionid);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2124;
                this.match(CPP14Parser.Operator);
                this.state = 2125;
                this.conversiontypeid();
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
    CPP14Parser.prototype.conversiontypeid = function () {
        var localctx = new ConversiontypeidContext(this._ctx, this.state);
        this.enterRule(localctx, 324, CPP14Parser.RULE_conversiontypeid);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2127;
                this.typespecifierseq();
                this.state = 2129;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 268, this._ctx)) {
                    case 1:
                        {
                            this.state = 2128;
                            this.conversiondeclarator();
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
    CPP14Parser.prototype.conversiondeclarator = function () {
        var localctx = new ConversiondeclaratorContext(this._ctx, this.state);
        this.enterRule(localctx, 326, CPP14Parser.RULE_conversiondeclarator);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2131;
                this.ptroperator();
                this.state = 2133;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 269, this._ctx)) {
                    case 1:
                        {
                            this.state = 2132;
                            this.conversiondeclarator();
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
    CPP14Parser.prototype.ctorinitializer = function () {
        var localctx = new CtorinitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 328, CPP14Parser.RULE_ctorinitializer);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2135;
                this.match(CPP14Parser.Colon);
                this.state = 2136;
                this.meminitializerlist();
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
    CPP14Parser.prototype.meminitializerlist = function () {
        var localctx = new MeminitializerlistContext(this._ctx, this.state);
        this.enterRule(localctx, 330, CPP14Parser.RULE_meminitializerlist);
        var _la;
        try {
            this.state = 2149;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 272, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2138;
                        this.meminitializer();
                        this.state = 2140;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 124) {
                            {
                                this.state = 2139;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2142;
                        this.meminitializer();
                        this.state = 2144;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 124) {
                            {
                                this.state = 2143;
                                this.match(CPP14Parser.Ellipsis);
                            }
                        }
                        this.state = 2146;
                        this.match(CPP14Parser.Comma);
                        this.state = 2147;
                        this.meminitializerlist();
                    }
                    break;
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
    CPP14Parser.prototype.meminitializer = function () {
        var localctx = new MeminitializerContext(this._ctx, this.state);
        this.enterRule(localctx, 332, CPP14Parser.RULE_meminitializer);
        var _la;
        try {
            this.state = 2161;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 274, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2151;
                        this.meminitializerid();
                        this.state = 2152;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2154;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1101674704) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1156070593) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 1014322355) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 2153;
                                this.expressionlist();
                            }
                        }
                        this.state = 2156;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2158;
                        this.meminitializerid();
                        this.state = 2159;
                        this.bracedinitlist();
                    }
                    break;
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
    CPP14Parser.prototype.meminitializerid = function () {
        var localctx = new MeminitializeridContext(this._ctx, this.state);
        this.enterRule(localctx, 334, CPP14Parser.RULE_meminitializerid);
        try {
            this.state = 2165;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 275, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2163;
                        this.classordecltype();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2164;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
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
    CPP14Parser.prototype.operatorfunctionid = function () {
        var localctx = new OperatorfunctionidContext(this._ctx, this.state);
        this.enterRule(localctx, 336, CPP14Parser.RULE_operatorfunctionid);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2167;
                this.match(CPP14Parser.Operator);
                this.state = 2168;
                this.operator();
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
    CPP14Parser.prototype.literaloperatorid = function () {
        var localctx = new LiteraloperatoridContext(this._ctx, this.state);
        this.enterRule(localctx, 338, CPP14Parser.RULE_literaloperatorid);
        try {
            this.state = 2175;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 276, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2170;
                        this.match(CPP14Parser.Operator);
                        this.state = 2171;
                        this.match(CPP14Parser.Stringliteral);
                        this.state = 2172;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2173;
                        this.match(CPP14Parser.Operator);
                        this.state = 2174;
                        this.match(CPP14Parser.Userdefinedstringliteral);
                    }
                    break;
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
    CPP14Parser.prototype.templatedeclaration = function () {
        var localctx = new TemplatedeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 340, CPP14Parser.RULE_templatedeclaration);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2177;
                this.match(CPP14Parser.Template);
                this.state = 2178;
                this.match(CPP14Parser.Less);
                this.state = 2179;
                this.templateparameterlist(0);
                this.state = 2180;
                this.match(CPP14Parser.Greater);
                this.state = 2181;
                this.declaration();
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
    CPP14Parser.prototype.templateparameterlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new TemplateparameterlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 342;
        this.enterRecursionRule(localctx, 342, CPP14Parser.RULE_templateparameterlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2184;
                    this.templateparameter();
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2191;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new TemplateparameterlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_templateparameterlist);
                                this.state = 2186;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2187;
                                this.match(CPP14Parser.Comma);
                                this.state = 2188;
                                this.templateparameter();
                            }
                        }
                    }
                    this.state = 2193;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 277, this._ctx);
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
    CPP14Parser.prototype.templateparameter = function () {
        var localctx = new TemplateparameterContext(this._ctx, this.state);
        this.enterRule(localctx, 344, CPP14Parser.RULE_templateparameter);
        try {
            this.state = 2196;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 278, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2194;
                        this.typeparameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2195;
                        this.parameterdeclaration();
                    }
                    break;
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
    CPP14Parser.prototype.typeparameter = function () {
        var localctx = new TypeparameterContext(this._ctx, this.state);
        this.enterRule(localctx, 346, CPP14Parser.RULE_typeparameter);
        var _la;
        try {
            this.state = 2246;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 288, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2198;
                        this.match(CPP14Parser.Class);
                        this.state = 2200;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 279, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2199;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2203;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 280, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2202;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2205;
                        this.match(CPP14Parser.Class);
                        this.state = 2207;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 2206;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2209;
                        this.match(CPP14Parser.Assign);
                        this.state = 2210;
                        this.typeid();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2211;
                        this.match(CPP14Parser.Typename);
                        this.state = 2213;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 282, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2212;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2216;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 283, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2215;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2218;
                        this.match(CPP14Parser.Typename);
                        this.state = 2220;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 2219;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2222;
                        this.match(CPP14Parser.Assign);
                        this.state = 2223;
                        this.typeid();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2224;
                        this.match(CPP14Parser.Template);
                        this.state = 2225;
                        this.match(CPP14Parser.Less);
                        this.state = 2226;
                        this.templateparameterlist(0);
                        this.state = 2227;
                        this.match(CPP14Parser.Greater);
                        this.state = 2228;
                        this.match(CPP14Parser.Class);
                        this.state = 2230;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 285, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2229;
                                    this.match(CPP14Parser.Ellipsis);
                                }
                                break;
                        }
                        this.state = 2233;
                        this._errHandler.sync(this);
                        switch (this._interp.adaptivePredict(this._input, 286, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2232;
                                    this.match(CPP14Parser.Identifier);
                                }
                                break;
                        }
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2235;
                        this.match(CPP14Parser.Template);
                        this.state = 2236;
                        this.match(CPP14Parser.Less);
                        this.state = 2237;
                        this.templateparameterlist(0);
                        this.state = 2238;
                        this.match(CPP14Parser.Greater);
                        this.state = 2239;
                        this.match(CPP14Parser.Class);
                        this.state = 2241;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 125) {
                            {
                                this.state = 2240;
                                this.match(CPP14Parser.Identifier);
                            }
                        }
                        this.state = 2243;
                        this.match(CPP14Parser.Assign);
                        this.state = 2244;
                        this.idexpression();
                    }
                    break;
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
    CPP14Parser.prototype.simpletemplateid = function () {
        var localctx = new SimpletemplateidContext(this._ctx, this.state);
        this.enterRule(localctx, 348, CPP14Parser.RULE_simpletemplateid);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2248;
                this.templatename();
                this.state = 2249;
                this.match(CPP14Parser.Less);
                this.state = 2251;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                    {
                        this.state = 2250;
                        this.templateargumentlist(0);
                    }
                }
                this.state = 2253;
                this.match(CPP14Parser.Greater);
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
    CPP14Parser.prototype.templateid = function () {
        var localctx = new TemplateidContext(this._ctx, this.state);
        this.enterRule(localctx, 350, CPP14Parser.RULE_templateid);
        var _la;
        try {
            this.state = 2270;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 292, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2255;
                        this.simpletemplateid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2256;
                        this.operatorfunctionid();
                        this.state = 2257;
                        this.match(CPP14Parser.Less);
                        this.state = 2259;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 2258;
                                this.templateargumentlist(0);
                            }
                        }
                        this.state = 2261;
                        this.match(CPP14Parser.Greater);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2263;
                        this.literaloperatorid();
                        this.state = 2264;
                        this.match(CPP14Parser.Less);
                        this.state = 2266;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1168832720) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1290288321) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & 507031161) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 66596995) !== 0)) {
                            {
                                this.state = 2265;
                                this.templateargumentlist(0);
                            }
                        }
                        this.state = 2268;
                        this.match(CPP14Parser.Greater);
                    }
                    break;
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
    CPP14Parser.prototype.templatename = function () {
        var localctx = new TemplatenameContext(this._ctx, this.state);
        this.enterRule(localctx, 352, CPP14Parser.RULE_templatename);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2272;
                this.match(CPP14Parser.Identifier);
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
    CPP14Parser.prototype.templateargumentlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new TemplateargumentlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 354;
        this.enterRecursionRule(localctx, 354, CPP14Parser.RULE_templateargumentlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2275;
                    this.templateargument();
                    this.state = 2277;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 293, this._ctx)) {
                        case 1:
                            {
                                this.state = 2276;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2287;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 295, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new TemplateargumentlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_templateargumentlist);
                                this.state = 2279;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2280;
                                this.match(CPP14Parser.Comma);
                                this.state = 2281;
                                this.templateargument();
                                this.state = 2283;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 294, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2282;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2289;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 295, this._ctx);
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
    CPP14Parser.prototype.templateargument = function () {
        var localctx = new TemplateargumentContext(this._ctx, this.state);
        this.enterRule(localctx, 356, CPP14Parser.RULE_templateargument);
        try {
            this.state = 2293;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 296, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2290;
                        this.typeid();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2291;
                        this.constantexpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2292;
                        this.idexpression();
                    }
                    break;
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
    CPP14Parser.prototype.typenamespecifier = function () {
        var localctx = new TypenamespecifierContext(this._ctx, this.state);
        this.enterRule(localctx, 358, CPP14Parser.RULE_typenamespecifier);
        var _la;
        try {
            this.state = 2306;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 298, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2295;
                        this.match(CPP14Parser.Typename);
                        this.state = 2296;
                        this.nestednamespecifier(0);
                        this.state = 2297;
                        this.match(CPP14Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2299;
                        this.match(CPP14Parser.Typename);
                        this.state = 2300;
                        this.nestednamespecifier(0);
                        this.state = 2302;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 61) {
                            {
                                this.state = 2301;
                                this.match(CPP14Parser.Template);
                            }
                        }
                        this.state = 2304;
                        this.simpletemplateid();
                    }
                    break;
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
    CPP14Parser.prototype.explicitinstantiation = function () {
        var localctx = new ExplicitinstantiationContext(this._ctx, this.state);
        this.enterRule(localctx, 360, CPP14Parser.RULE_explicitinstantiation);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 29) {
                    {
                        this.state = 2308;
                        this.match(CPP14Parser.Extern);
                    }
                }
                this.state = 2311;
                this.match(CPP14Parser.Template);
                this.state = 2312;
                this.declaration();
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
    CPP14Parser.prototype.explicitspecialization = function () {
        var localctx = new ExplicitspecializationContext(this._ctx, this.state);
        this.enterRule(localctx, 362, CPP14Parser.RULE_explicitspecialization);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2314;
                this.match(CPP14Parser.Template);
                this.state = 2315;
                this.match(CPP14Parser.Less);
                this.state = 2316;
                this.match(CPP14Parser.Greater);
                this.state = 2317;
                this.declaration();
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
    CPP14Parser.prototype.tryblock = function () {
        var localctx = new TryblockContext(this._ctx, this.state);
        this.enterRule(localctx, 364, CPP14Parser.RULE_tryblock);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2319;
                this.match(CPP14Parser.Try);
                this.state = 2320;
                this.compoundstatement();
                this.state = 2321;
                this.handlerseq();
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
    CPP14Parser.prototype.functiontryblock = function () {
        var localctx = new FunctiontryblockContext(this._ctx, this.state);
        this.enterRule(localctx, 366, CPP14Parser.RULE_functiontryblock);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2323;
                this.match(CPP14Parser.Try);
                this.state = 2325;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === 119) {
                    {
                        this.state = 2324;
                        this.ctorinitializer();
                    }
                }
                this.state = 2327;
                this.compoundstatement();
                this.state = 2328;
                this.handlerseq();
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
    CPP14Parser.prototype.handlerseq = function () {
        var localctx = new HandlerseqContext(this._ctx, this.state);
        this.enterRule(localctx, 368, CPP14Parser.RULE_handlerseq);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2330;
                this.handler();
                this.state = 2332;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 301, this._ctx)) {
                    case 1:
                        {
                            this.state = 2331;
                            this.handlerseq();
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
    CPP14Parser.prototype.handler = function () {
        var localctx = new HandlerContext(this._ctx, this.state);
        this.enterRule(localctx, 370, CPP14Parser.RULE_handler);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2334;
                this.match(CPP14Parser.Catch);
                this.state = 2335;
                this.match(CPP14Parser.LeftParen);
                this.state = 2336;
                this.exceptiondeclaration();
                this.state = 2337;
                this.match(CPP14Parser.RightParen);
                this.state = 2338;
                this.compoundstatement();
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
    CPP14Parser.prototype.exceptiondeclaration = function () {
        var localctx = new ExceptiondeclarationContext(this._ctx, this.state);
        this.enterRule(localctx, 372, CPP14Parser.RULE_exceptiondeclaration);
        var _la;
        try {
            this.state = 2354;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 305, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2341;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2340;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2343;
                        this.typespecifierseq();
                        this.state = 2344;
                        this.declarator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2347;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 3 || _la === 80) {
                            {
                                this.state = 2346;
                                this.attributespecifierseq(0);
                            }
                        }
                        this.state = 2349;
                        this.typespecifierseq();
                        this.state = 2351;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === 19 || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & 4357) !== 0) || ((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & 25089) !== 0)) {
                            {
                                this.state = 2350;
                                this.abstractdeclarator();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2353;
                        this.match(CPP14Parser.Ellipsis);
                    }
                    break;
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
    CPP14Parser.prototype.throwexpression = function () {
        var localctx = new ThrowexpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 374, CPP14Parser.RULE_throwexpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2356;
                this.match(CPP14Parser.Throw);
                this.state = 2358;
                this._errHandler.sync(this);
                switch (this._interp.adaptivePredict(this._input, 306, this._ctx)) {
                    case 1:
                        {
                            this.state = 2357;
                            this.assignmentexpression();
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
    CPP14Parser.prototype.exceptionspecification = function () {
        var localctx = new ExceptionspecificationContext(this._ctx, this.state);
        this.enterRule(localctx, 376, CPP14Parser.RULE_exceptionspecification);
        try {
            this.state = 2362;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Throw:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2360;
                        this.dynamicexceptionspecification();
                    }
                    break;
                case CPP14Parser.Noexcept:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2361;
                        this.noexceptspecification();
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
    CPP14Parser.prototype.dynamicexceptionspecification = function () {
        var localctx = new DynamicexceptionspecificationContext(this._ctx, this.state);
        this.enterRule(localctx, 378, CPP14Parser.RULE_dynamicexceptionspecification);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2364;
                this.match(CPP14Parser.Throw);
                this.state = 2365;
                this.match(CPP14Parser.LeftParen);
                this.state = 2367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 76085440) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 140509377) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 231) !== 0) || _la === 120 || _la === 125) {
                    {
                        this.state = 2366;
                        this.typeidlist(0);
                    }
                }
                this.state = 2369;
                this.match(CPP14Parser.RightParen);
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
    CPP14Parser.prototype.typeidlist = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var localctx = new TypeidlistContext(this._ctx, _parentState);
        var _prevctx = localctx;
        var _startState = 380;
        this.enterRecursionRule(localctx, 380, CPP14Parser.RULE_typeidlist, _p);
        try {
            var _alt = void 0;
            this.enterOuterAlt(localctx, 1);
            {
                {
                    this.state = 2372;
                    this.typeid();
                    this.state = 2374;
                    this._errHandler.sync(this);
                    switch (this._interp.adaptivePredict(this._input, 309, this._ctx)) {
                        case 1:
                            {
                                this.state = 2373;
                                this.match(CPP14Parser.Ellipsis);
                            }
                            break;
                    }
                }
                this._ctx.stop = this._input.LT(-1);
                this.state = 2384;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = localctx;
                        {
                            {
                                localctx = new TypeidlistContext(_parentctx, _parentState);
                                this.pushNewRecursionContext(localctx, _startState, CPP14Parser.RULE_typeidlist);
                                this.state = 2376;
                                if (!(this.precpred(this._ctx, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                                }
                                this.state = 2377;
                                this.match(CPP14Parser.Comma);
                                this.state = 2378;
                                this.typeid();
                                this.state = 2380;
                                this._errHandler.sync(this);
                                switch (this._interp.adaptivePredict(this._input, 310, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 2379;
                                            this.match(CPP14Parser.Ellipsis);
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 2386;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 311, this._ctx);
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
    CPP14Parser.prototype.noexceptspecification = function () {
        var localctx = new NoexceptspecificationContext(this._ctx, this.state);
        this.enterRule(localctx, 382, CPP14Parser.RULE_noexceptspecification);
        try {
            this.state = 2393;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 312, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2387;
                        this.match(CPP14Parser.Noexcept);
                        this.state = 2388;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2389;
                        this.constantexpression();
                        this.state = 2390;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2392;
                        this.match(CPP14Parser.Noexcept);
                    }
                    break;
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
    CPP14Parser.prototype.rightShift = function () {
        var localctx = new RightShiftContext(this._ctx, this.state);
        this.enterRule(localctx, 384, CPP14Parser.RULE_rightShift);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2395;
                this.match(CPP14Parser.Greater);
                this.state = 2396;
                this.match(CPP14Parser.Greater);
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
    CPP14Parser.prototype.rightShiftAssign = function () {
        var localctx = new RightShiftAssignContext(this._ctx, this.state);
        this.enterRule(localctx, 386, CPP14Parser.RULE_rightShiftAssign);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2398;
                this.match(CPP14Parser.Greater);
                this.state = 2399;
                this.match(CPP14Parser.Greater);
                this.state = 2400;
                this.match(CPP14Parser.Assign);
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
    CPP14Parser.prototype.operator = function () {
        var localctx = new OperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 388, CPP14Parser.RULE_operator);
        try {
            this.state = 2450;
            this._errHandler.sync(this);
            switch (this._interp.adaptivePredict(this._input, 313, this._ctx)) {
                case 1:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2402;
                        this.match(CPP14Parser.New);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2403;
                        this.match(CPP14Parser.Delete);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2404;
                        this.match(CPP14Parser.New);
                        this.state = 2405;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2406;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2407;
                        this.match(CPP14Parser.Delete);
                        this.state = 2408;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2409;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2410;
                        this.match(CPP14Parser.Plus);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2411;
                        this.match(CPP14Parser.Minus);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 2412;
                        this.match(CPP14Parser.Star);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localctx, 8);
                    {
                        this.state = 2413;
                        this.match(CPP14Parser.Div);
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localctx, 9);
                    {
                        this.state = 2414;
                        this.match(CPP14Parser.Mod);
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localctx, 10);
                    {
                        this.state = 2415;
                        this.match(CPP14Parser.Caret);
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localctx, 11);
                    {
                        this.state = 2416;
                        this.match(CPP14Parser.And);
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localctx, 12);
                    {
                        this.state = 2417;
                        this.match(CPP14Parser.Or);
                    }
                    break;
                case 13:
                    this.enterOuterAlt(localctx, 13);
                    {
                        this.state = 2418;
                        this.match(CPP14Parser.Tilde);
                    }
                    break;
                case 14:
                    this.enterOuterAlt(localctx, 14);
                    {
                        this.state = 2419;
                        this.match(CPP14Parser.Not);
                    }
                    break;
                case 15:
                    this.enterOuterAlt(localctx, 15);
                    {
                        this.state = 2420;
                        this.match(CPP14Parser.Assign);
                    }
                    break;
                case 16:
                    this.enterOuterAlt(localctx, 16);
                    {
                        this.state = 2421;
                        this.match(CPP14Parser.Less);
                    }
                    break;
                case 17:
                    this.enterOuterAlt(localctx, 17);
                    {
                        this.state = 2422;
                        this.match(CPP14Parser.Greater);
                    }
                    break;
                case 18:
                    this.enterOuterAlt(localctx, 18);
                    {
                        this.state = 2423;
                        this.match(CPP14Parser.PlusAssign);
                    }
                    break;
                case 19:
                    this.enterOuterAlt(localctx, 19);
                    {
                        this.state = 2424;
                        this.match(CPP14Parser.MinusAssign);
                    }
                    break;
                case 20:
                    this.enterOuterAlt(localctx, 20);
                    {
                        this.state = 2425;
                        this.match(CPP14Parser.StarAssign);
                    }
                    break;
                case 21:
                    this.enterOuterAlt(localctx, 21);
                    {
                        this.state = 2426;
                        this.match(CPP14Parser.DivAssign);
                    }
                    break;
                case 22:
                    this.enterOuterAlt(localctx, 22);
                    {
                        this.state = 2427;
                        this.match(CPP14Parser.ModAssign);
                    }
                    break;
                case 23:
                    this.enterOuterAlt(localctx, 23);
                    {
                        this.state = 2428;
                        this.match(CPP14Parser.XorAssign);
                    }
                    break;
                case 24:
                    this.enterOuterAlt(localctx, 24);
                    {
                        this.state = 2429;
                        this.match(CPP14Parser.AndAssign);
                    }
                    break;
                case 25:
                    this.enterOuterAlt(localctx, 25);
                    {
                        this.state = 2430;
                        this.match(CPP14Parser.OrAssign);
                    }
                    break;
                case 26:
                    this.enterOuterAlt(localctx, 26);
                    {
                        this.state = 2431;
                        this.match(CPP14Parser.LeftShift);
                    }
                    break;
                case 27:
                    this.enterOuterAlt(localctx, 27);
                    {
                        this.state = 2432;
                        this.rightShift();
                    }
                    break;
                case 28:
                    this.enterOuterAlt(localctx, 28);
                    {
                        this.state = 2433;
                        this.rightShiftAssign();
                    }
                    break;
                case 29:
                    this.enterOuterAlt(localctx, 29);
                    {
                        this.state = 2434;
                        this.match(CPP14Parser.LeftShiftAssign);
                    }
                    break;
                case 30:
                    this.enterOuterAlt(localctx, 30);
                    {
                        this.state = 2435;
                        this.match(CPP14Parser.Equal);
                    }
                    break;
                case 31:
                    this.enterOuterAlt(localctx, 31);
                    {
                        this.state = 2436;
                        this.match(CPP14Parser.NotEqual);
                    }
                    break;
                case 32:
                    this.enterOuterAlt(localctx, 32);
                    {
                        this.state = 2437;
                        this.match(CPP14Parser.LessEqual);
                    }
                    break;
                case 33:
                    this.enterOuterAlt(localctx, 33);
                    {
                        this.state = 2438;
                        this.match(CPP14Parser.GreaterEqual);
                    }
                    break;
                case 34:
                    this.enterOuterAlt(localctx, 34);
                    {
                        this.state = 2439;
                        this.match(CPP14Parser.AndAnd);
                    }
                    break;
                case 35:
                    this.enterOuterAlt(localctx, 35);
                    {
                        this.state = 2440;
                        this.match(CPP14Parser.OrOr);
                    }
                    break;
                case 36:
                    this.enterOuterAlt(localctx, 36);
                    {
                        this.state = 2441;
                        this.match(CPP14Parser.PlusPlus);
                    }
                    break;
                case 37:
                    this.enterOuterAlt(localctx, 37);
                    {
                        this.state = 2442;
                        this.match(CPP14Parser.MinusMinus);
                    }
                    break;
                case 38:
                    this.enterOuterAlt(localctx, 38);
                    {
                        this.state = 2443;
                        this.match(CPP14Parser.Comma);
                    }
                    break;
                case 39:
                    this.enterOuterAlt(localctx, 39);
                    {
                        this.state = 2444;
                        this.match(CPP14Parser.ArrowStar);
                    }
                    break;
                case 40:
                    this.enterOuterAlt(localctx, 40);
                    {
                        this.state = 2445;
                        this.match(CPP14Parser.Arrow);
                    }
                    break;
                case 41:
                    this.enterOuterAlt(localctx, 41);
                    {
                        this.state = 2446;
                        this.match(CPP14Parser.LeftParen);
                        this.state = 2447;
                        this.match(CPP14Parser.RightParen);
                    }
                    break;
                case 42:
                    this.enterOuterAlt(localctx, 42);
                    {
                        this.state = 2448;
                        this.match(CPP14Parser.LeftBracket);
                        this.state = 2449;
                        this.match(CPP14Parser.RightBracket);
                    }
                    break;
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
    CPP14Parser.prototype.literal = function () {
        var localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 390, CPP14Parser.RULE_literal);
        try {
            this.state = 2459;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case CPP14Parser.Integerliteral:
                    this.enterOuterAlt(localctx, 1);
                    {
                        this.state = 2452;
                        this.match(CPP14Parser.Integerliteral);
                    }
                    break;
                case CPP14Parser.Characterliteral:
                    this.enterOuterAlt(localctx, 2);
                    {
                        this.state = 2453;
                        this.match(CPP14Parser.Characterliteral);
                    }
                    break;
                case CPP14Parser.Floatingliteral:
                    this.enterOuterAlt(localctx, 3);
                    {
                        this.state = 2454;
                        this.match(CPP14Parser.Floatingliteral);
                    }
                    break;
                case CPP14Parser.Stringliteral:
                    this.enterOuterAlt(localctx, 4);
                    {
                        this.state = 2455;
                        this.match(CPP14Parser.Stringliteral);
                    }
                    break;
                case CPP14Parser.False:
                case CPP14Parser.True:
                    this.enterOuterAlt(localctx, 5);
                    {
                        this.state = 2456;
                        this.booleanliteral();
                    }
                    break;
                case CPP14Parser.Nullptr:
                    this.enterOuterAlt(localctx, 6);
                    {
                        this.state = 2457;
                        this.pointerliteral();
                    }
                    break;
                case CPP14Parser.Userdefinedintegerliteral:
                case CPP14Parser.Userdefinedfloatingliteral:
                case CPP14Parser.Userdefinedstringliteral:
                case CPP14Parser.Userdefinedcharacterliteral:
                    this.enterOuterAlt(localctx, 7);
                    {
                        this.state = 2458;
                        this.userdefinedliteral();
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
    CPP14Parser.prototype.booleanliteral = function () {
        var localctx = new BooleanliteralContext(this._ctx, this.state);
        this.enterRule(localctx, 392, CPP14Parser.RULE_booleanliteral);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2461;
                _la = this._input.LA(1);
                if (!(_la === 30 || _la === 65)) {
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
    CPP14Parser.prototype.pointerliteral = function () {
        var localctx = new PointerliteralContext(this._ctx, this.state);
        this.enterRule(localctx, 394, CPP14Parser.RULE_pointerliteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2463;
                this.match(CPP14Parser.Nullptr);
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
    CPP14Parser.prototype.userdefinedliteral = function () {
        var localctx = new UserdefinedliteralContext(this._ctx, this.state);
        this.enterRule(localctx, 396, CPP14Parser.RULE_userdefinedliteral);
        var _la;
        try {
            this.enterOuterAlt(localctx, 1);
            {
                this.state = 2465;
                _la = this._input.LA(1);
                if (!(((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 15) !== 0))) {
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
    CPP14Parser.prototype.sempred = function (localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.nestednamespecifier_sempred(localctx, predIndex);
            case 10:
                return this.capturelist_sempred(localctx, predIndex);
            case 15:
                return this.postfixexpression_sempred(localctx, predIndex);
            case 24:
                return this.noptrnewdeclarator_sempred(localctx, predIndex);
            case 29:
                return this.pmexpression_sempred(localctx, predIndex);
            case 30:
                return this.multiplicativeexpression_sempred(localctx, predIndex);
            case 31:
                return this.additiveexpression_sempred(localctx, predIndex);
            case 32:
                return this.shiftexpression_sempred(localctx, predIndex);
            case 33:
                return this.relationalexpression_sempred(localctx, predIndex);
            case 34:
                return this.equalityexpression_sempred(localctx, predIndex);
            case 35:
                return this.andexpression_sempred(localctx, predIndex);
            case 36:
                return this.exclusiveorexpression_sempred(localctx, predIndex);
            case 37:
                return this.inclusiveorexpression_sempred(localctx, predIndex);
            case 38:
                return this.logicalandexpression_sempred(localctx, predIndex);
            case 39:
                return this.logicalorexpression_sempred(localctx, predIndex);
            case 43:
                return this.expression_sempred(localctx, predIndex);
            case 49:
                return this.statementseq_sempred(localctx, predIndex);
            case 58:
                return this.declarationseq_sempred(localctx, predIndex);
            case 85:
                return this.enumeratorlist_sempred(localctx, predIndex);
            case 103:
                return this.attributespecifierseq_sempred(localctx, predIndex);
            case 106:
                return this.attributelist_sempred(localctx, predIndex);
            case 112:
                return this.balancedtokenseq_sempred(localctx, predIndex);
            case 114:
                return this.initdeclaratorlist_sempred(localctx, predIndex);
            case 118:
                return this.noptrdeclarator_sempred(localctx, predIndex);
            case 129:
                return this.noptrabstractdeclarator_sempred(localctx, predIndex);
            case 131:
                return this.noptrabstractpackdeclarator_sempred(localctx, predIndex);
            case 133:
                return this.parameterdeclarationlist_sempred(localctx, predIndex);
            case 140:
                return this.initializerlist_sempred(localctx, predIndex);
            case 150:
                return this.memberdeclaratorlist_sempred(localctx, predIndex);
            case 152:
                return this.virtspecifierseq_sempred(localctx, predIndex);
            case 156:
                return this.basespecifierlist_sempred(localctx, predIndex);
            case 171:
                return this.templateparameterlist_sempred(localctx, predIndex);
            case 177:
                return this.templateargumentlist_sempred(localctx, predIndex);
            case 190:
                return this.typeidlist_sempred(localctx, predIndex);
        }
        return true;
    };
    CPP14Parser.prototype.nestednamespecifier_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 2);
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.capturelist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.postfixexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 19);
            case 4:
                return this.precpred(this._ctx, 18);
            case 5:
                return this.precpred(this._ctx, 17);
            case 6:
                return this.precpred(this._ctx, 12);
            case 7:
                return this.precpred(this._ctx, 11);
            case 8:
                return this.precpred(this._ctx, 10);
            case 9:
                return this.precpred(this._ctx, 9);
            case 10:
                return this.precpred(this._ctx, 8);
            case 11:
                return this.precpred(this._ctx, 7);
        }
        return true;
    };
    CPP14Parser.prototype.noptrnewdeclarator_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 12:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.pmexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 13:
                return this.precpred(this._ctx, 2);
            case 14:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.multiplicativeexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 15:
                return this.precpred(this._ctx, 3);
            case 16:
                return this.precpred(this._ctx, 2);
            case 17:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.additiveexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 18:
                return this.precpred(this._ctx, 2);
            case 19:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.shiftexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 20:
                return this.precpred(this._ctx, 2);
            case 21:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.relationalexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 22:
                return this.precpred(this._ctx, 4);
            case 23:
                return this.precpred(this._ctx, 3);
            case 24:
                return this.precpred(this._ctx, 2);
            case 25:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.equalityexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 26:
                return this.precpred(this._ctx, 2);
            case 27:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.andexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 28:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.exclusiveorexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 29:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.inclusiveorexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 30:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.logicalandexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 31:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.logicalorexpression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 32:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.expression_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 33:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.statementseq_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 34:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.declarationseq_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 35:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.enumeratorlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 36:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.attributespecifierseq_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 37:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.attributelist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 38:
                return this.precpred(this._ctx, 3);
            case 39:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.balancedtokenseq_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 40:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.initdeclaratorlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 41:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.noptrdeclarator_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 42:
                return this.precpred(this._ctx, 3);
            case 43:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    CPP14Parser.prototype.noptrabstractdeclarator_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 44:
                return this.precpred(this._ctx, 5);
            case 45:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    CPP14Parser.prototype.noptrabstractpackdeclarator_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 46:
                return this.precpred(this._ctx, 3);
            case 47:
                return this.precpred(this._ctx, 2);
        }
        return true;
    };
    CPP14Parser.prototype.parameterdeclarationlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 48:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.initializerlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 49:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.memberdeclaratorlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 50:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.virtspecifierseq_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 51:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.basespecifierlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 52:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.templateparameterlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 53:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.templateargumentlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 54:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    CPP14Parser.prototype.typeidlist_sempred = function (localctx, predIndex) {
        switch (predIndex) {
            case 55:
                return this.precpred(this._ctx, 1);
        }
        return true;
    };
    Object.defineProperty(CPP14Parser, "_ATN", {
        get: function () {
            if (!CPP14Parser.__ATN) {
                CPP14Parser.__ATN = new antlr.ATNDeserializer().deserialize(CPP14Parser._serializedATN);
            }
            return CPP14Parser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    CPP14Parser.prototype.getVocabulary = function () {
        return CPP14Parser.vocabulary;
    };
    CPP14Parser.MultiLineMacro = 1;
    CPP14Parser.Directive = 2;
    CPP14Parser.Alignas = 3;
    CPP14Parser.Alignof = 4;
    CPP14Parser.Asm = 5;
    CPP14Parser.Auto = 6;
    CPP14Parser.Bool = 7;
    CPP14Parser.Break = 8;
    CPP14Parser.Case = 9;
    CPP14Parser.Catch = 10;
    CPP14Parser.Char = 11;
    CPP14Parser.Char16 = 12;
    CPP14Parser.Char32 = 13;
    CPP14Parser.Class = 14;
    CPP14Parser.Const = 15;
    CPP14Parser.Constexpr = 16;
    CPP14Parser.Const_cast = 17;
    CPP14Parser.Continue = 18;
    CPP14Parser.Decltype = 19;
    CPP14Parser.Default = 20;
    CPP14Parser.Delete = 21;
    CPP14Parser.Do = 22;
    CPP14Parser.Double = 23;
    CPP14Parser.Dynamic_cast = 24;
    CPP14Parser.Else = 25;
    CPP14Parser.Enum = 26;
    CPP14Parser.Explicit = 27;
    CPP14Parser.Export = 28;
    CPP14Parser.Extern = 29;
    CPP14Parser.False = 30;
    CPP14Parser.Final = 31;
    CPP14Parser.Float = 32;
    CPP14Parser.For = 33;
    CPP14Parser.Friend = 34;
    CPP14Parser.Goto = 35;
    CPP14Parser.If = 36;
    CPP14Parser.Inline = 37;
    CPP14Parser.Int = 38;
    CPP14Parser.Long = 39;
    CPP14Parser.Mutable = 40;
    CPP14Parser.Namespace = 41;
    CPP14Parser.New = 42;
    CPP14Parser.Noexcept = 43;
    CPP14Parser.Nullptr = 44;
    CPP14Parser.Operator = 45;
    CPP14Parser.Override = 46;
    CPP14Parser.Private = 47;
    CPP14Parser.Protected = 48;
    CPP14Parser.Public = 49;
    CPP14Parser.Register = 50;
    CPP14Parser.Reinterpret_cast = 51;
    CPP14Parser.Return = 52;
    CPP14Parser.Short = 53;
    CPP14Parser.Signed = 54;
    CPP14Parser.Sizeof = 55;
    CPP14Parser.Static = 56;
    CPP14Parser.Static_assert = 57;
    CPP14Parser.Static_cast = 58;
    CPP14Parser.Struct = 59;
    CPP14Parser.Switch = 60;
    CPP14Parser.Template = 61;
    CPP14Parser.This = 62;
    CPP14Parser.Thread_local = 63;
    CPP14Parser.Throw = 64;
    CPP14Parser.True = 65;
    CPP14Parser.Try = 66;
    CPP14Parser.Typedef = 67;
    CPP14Parser.Typeid = 68;
    CPP14Parser.Typename = 69;
    CPP14Parser.Union = 70;
    CPP14Parser.Unsigned = 71;
    CPP14Parser.Using = 72;
    CPP14Parser.Virtual = 73;
    CPP14Parser.Void = 74;
    CPP14Parser.Volatile = 75;
    CPP14Parser.Wchar = 76;
    CPP14Parser.While = 77;
    CPP14Parser.LeftParen = 78;
    CPP14Parser.RightParen = 79;
    CPP14Parser.LeftBracket = 80;
    CPP14Parser.RightBracket = 81;
    CPP14Parser.LeftBrace = 82;
    CPP14Parser.RightBrace = 83;
    CPP14Parser.Plus = 84;
    CPP14Parser.Minus = 85;
    CPP14Parser.Star = 86;
    CPP14Parser.Div = 87;
    CPP14Parser.Mod = 88;
    CPP14Parser.Caret = 89;
    CPP14Parser.And = 90;
    CPP14Parser.Or = 91;
    CPP14Parser.Tilde = 92;
    CPP14Parser.Not = 93;
    CPP14Parser.Assign = 94;
    CPP14Parser.Less = 95;
    CPP14Parser.Greater = 96;
    CPP14Parser.PlusAssign = 97;
    CPP14Parser.MinusAssign = 98;
    CPP14Parser.StarAssign = 99;
    CPP14Parser.DivAssign = 100;
    CPP14Parser.ModAssign = 101;
    CPP14Parser.XorAssign = 102;
    CPP14Parser.AndAssign = 103;
    CPP14Parser.OrAssign = 104;
    CPP14Parser.LeftShift = 105;
    CPP14Parser.LeftShiftAssign = 106;
    CPP14Parser.Equal = 107;
    CPP14Parser.NotEqual = 108;
    CPP14Parser.LessEqual = 109;
    CPP14Parser.GreaterEqual = 110;
    CPP14Parser.AndAnd = 111;
    CPP14Parser.OrOr = 112;
    CPP14Parser.PlusPlus = 113;
    CPP14Parser.MinusMinus = 114;
    CPP14Parser.Comma = 115;
    CPP14Parser.ArrowStar = 116;
    CPP14Parser.Arrow = 117;
    CPP14Parser.Question = 118;
    CPP14Parser.Colon = 119;
    CPP14Parser.Doublecolon = 120;
    CPP14Parser.Semi = 121;
    CPP14Parser.Dot = 122;
    CPP14Parser.DotStar = 123;
    CPP14Parser.Ellipsis = 124;
    CPP14Parser.Identifier = 125;
    CPP14Parser.Integerliteral = 126;
    CPP14Parser.Decimalliteral = 127;
    CPP14Parser.Octalliteral = 128;
    CPP14Parser.Hexadecimalliteral = 129;
    CPP14Parser.Binaryliteral = 130;
    CPP14Parser.Integersuffix = 131;
    CPP14Parser.Characterliteral = 132;
    CPP14Parser.Floatingliteral = 133;
    CPP14Parser.Stringliteral = 134;
    CPP14Parser.Userdefinedintegerliteral = 135;
    CPP14Parser.Userdefinedfloatingliteral = 136;
    CPP14Parser.Userdefinedstringliteral = 137;
    CPP14Parser.Userdefinedcharacterliteral = 138;
    CPP14Parser.Whitespace = 139;
    CPP14Parser.Newline = 140;
    CPP14Parser.BlockComment = 141;
    CPP14Parser.LineComment = 142;
    CPP14Parser.RULE_translationunit = 0;
    CPP14Parser.RULE_primaryexpression = 1;
    CPP14Parser.RULE_idexpression = 2;
    CPP14Parser.RULE_unqualifiedid = 3;
    CPP14Parser.RULE_qualifiedid = 4;
    CPP14Parser.RULE_nestednamespecifier = 5;
    CPP14Parser.RULE_lambdaexpression = 6;
    CPP14Parser.RULE_lambdaintroducer = 7;
    CPP14Parser.RULE_lambdacapture = 8;
    CPP14Parser.RULE_capturedefault = 9;
    CPP14Parser.RULE_capturelist = 10;
    CPP14Parser.RULE_capture = 11;
    CPP14Parser.RULE_simplecapture = 12;
    CPP14Parser.RULE_initcapture = 13;
    CPP14Parser.RULE_lambdadeclarator = 14;
    CPP14Parser.RULE_postfixexpression = 15;
    CPP14Parser.RULE_expressionlist = 16;
    CPP14Parser.RULE_pseudodestructorname = 17;
    CPP14Parser.RULE_unaryexpression = 18;
    CPP14Parser.RULE_unaryoperator = 19;
    CPP14Parser.RULE_newexpression = 20;
    CPP14Parser.RULE_newplacement = 21;
    CPP14Parser.RULE_newtypeid = 22;
    CPP14Parser.RULE_newdeclarator = 23;
    CPP14Parser.RULE_noptrnewdeclarator = 24;
    CPP14Parser.RULE_newinitializer = 25;
    CPP14Parser.RULE_deleteexpression = 26;
    CPP14Parser.RULE_noexceptexpression = 27;
    CPP14Parser.RULE_castexpression = 28;
    CPP14Parser.RULE_pmexpression = 29;
    CPP14Parser.RULE_multiplicativeexpression = 30;
    CPP14Parser.RULE_additiveexpression = 31;
    CPP14Parser.RULE_shiftexpression = 32;
    CPP14Parser.RULE_relationalexpression = 33;
    CPP14Parser.RULE_equalityexpression = 34;
    CPP14Parser.RULE_andexpression = 35;
    CPP14Parser.RULE_exclusiveorexpression = 36;
    CPP14Parser.RULE_inclusiveorexpression = 37;
    CPP14Parser.RULE_logicalandexpression = 38;
    CPP14Parser.RULE_logicalorexpression = 39;
    CPP14Parser.RULE_conditionalexpression = 40;
    CPP14Parser.RULE_assignmentexpression = 41;
    CPP14Parser.RULE_assignmentoperator = 42;
    CPP14Parser.RULE_expression = 43;
    CPP14Parser.RULE_constantexpression = 44;
    CPP14Parser.RULE_statement = 45;
    CPP14Parser.RULE_labeledstatement = 46;
    CPP14Parser.RULE_expressionstatement = 47;
    CPP14Parser.RULE_compoundstatement = 48;
    CPP14Parser.RULE_statementseq = 49;
    CPP14Parser.RULE_selectionstatement = 50;
    CPP14Parser.RULE_condition = 51;
    CPP14Parser.RULE_iterationstatement = 52;
    CPP14Parser.RULE_forinitstatement = 53;
    CPP14Parser.RULE_forrangedeclaration = 54;
    CPP14Parser.RULE_forrangeinitializer = 55;
    CPP14Parser.RULE_jumpstatement = 56;
    CPP14Parser.RULE_declarationstatement = 57;
    CPP14Parser.RULE_declarationseq = 58;
    CPP14Parser.RULE_declaration = 59;
    CPP14Parser.RULE_blockdeclaration = 60;
    CPP14Parser.RULE_aliasdeclaration = 61;
    CPP14Parser.RULE_simpledeclaration = 62;
    CPP14Parser.RULE_static_assertdeclaration = 63;
    CPP14Parser.RULE_emptydeclaration = 64;
    CPP14Parser.RULE_attributedeclaration = 65;
    CPP14Parser.RULE_declspecifier = 66;
    CPP14Parser.RULE_declspecifierseq = 67;
    CPP14Parser.RULE_storageclassspecifier = 68;
    CPP14Parser.RULE_functionspecifier = 69;
    CPP14Parser.RULE_typedefname = 70;
    CPP14Parser.RULE_typespecifier = 71;
    CPP14Parser.RULE_trailingtypespecifier = 72;
    CPP14Parser.RULE_typespecifierseq = 73;
    CPP14Parser.RULE_trailingtypespecifierseq = 74;
    CPP14Parser.RULE_simpletypespecifier = 75;
    CPP14Parser.RULE_typename = 76;
    CPP14Parser.RULE_decltypespecifier = 77;
    CPP14Parser.RULE_elaboratedtypespecifier = 78;
    CPP14Parser.RULE_enumname = 79;
    CPP14Parser.RULE_enumspecifier = 80;
    CPP14Parser.RULE_enumhead = 81;
    CPP14Parser.RULE_opaqueenumdeclaration = 82;
    CPP14Parser.RULE_enumkey = 83;
    CPP14Parser.RULE_enumbase = 84;
    CPP14Parser.RULE_enumeratorlist = 85;
    CPP14Parser.RULE_enumeratordefinition = 86;
    CPP14Parser.RULE_enumerator = 87;
    CPP14Parser.RULE_namespacename = 88;
    CPP14Parser.RULE_originalnamespacename = 89;
    CPP14Parser.RULE_namespacedefinition = 90;
    CPP14Parser.RULE_namednamespacedefinition = 91;
    CPP14Parser.RULE_originalnamespacedefinition = 92;
    CPP14Parser.RULE_extensionnamespacedefinition = 93;
    CPP14Parser.RULE_unnamednamespacedefinition = 94;
    CPP14Parser.RULE_namespacebody = 95;
    CPP14Parser.RULE_namespacealias = 96;
    CPP14Parser.RULE_namespacealiasdefinition = 97;
    CPP14Parser.RULE_qualifiednamespacespecifier = 98;
    CPP14Parser.RULE_usingdeclaration = 99;
    CPP14Parser.RULE_usingdirective = 100;
    CPP14Parser.RULE_asmdefinition = 101;
    CPP14Parser.RULE_linkagespecification = 102;
    CPP14Parser.RULE_attributespecifierseq = 103;
    CPP14Parser.RULE_attributespecifier = 104;
    CPP14Parser.RULE_alignmentspecifier = 105;
    CPP14Parser.RULE_attributelist = 106;
    CPP14Parser.RULE_attribute = 107;
    CPP14Parser.RULE_attributetoken = 108;
    CPP14Parser.RULE_attributescopedtoken = 109;
    CPP14Parser.RULE_attributenamespace = 110;
    CPP14Parser.RULE_attributeargumentclause = 111;
    CPP14Parser.RULE_balancedtokenseq = 112;
    CPP14Parser.RULE_balancedtoken = 113;
    CPP14Parser.RULE_initdeclaratorlist = 114;
    CPP14Parser.RULE_initdeclarator = 115;
    CPP14Parser.RULE_declarator = 116;
    CPP14Parser.RULE_ptrdeclarator = 117;
    CPP14Parser.RULE_noptrdeclarator = 118;
    CPP14Parser.RULE_parametersandqualifiers = 119;
    CPP14Parser.RULE_trailingreturntype = 120;
    CPP14Parser.RULE_ptroperator = 121;
    CPP14Parser.RULE_cvqualifierseq = 122;
    CPP14Parser.RULE_cvqualifier = 123;
    CPP14Parser.RULE_refqualifier = 124;
    CPP14Parser.RULE_declaratorid = 125;
    CPP14Parser.RULE_typeid = 126;
    CPP14Parser.RULE_abstractdeclarator = 127;
    CPP14Parser.RULE_ptrabstractdeclarator = 128;
    CPP14Parser.RULE_noptrabstractdeclarator = 129;
    CPP14Parser.RULE_abstractpackdeclarator = 130;
    CPP14Parser.RULE_noptrabstractpackdeclarator = 131;
    CPP14Parser.RULE_parameterdeclarationclause = 132;
    CPP14Parser.RULE_parameterdeclarationlist = 133;
    CPP14Parser.RULE_parameterdeclaration = 134;
    CPP14Parser.RULE_functiondefinition = 135;
    CPP14Parser.RULE_functionbody = 136;
    CPP14Parser.RULE_initializer = 137;
    CPP14Parser.RULE_braceorequalinitializer = 138;
    CPP14Parser.RULE_initializerclause = 139;
    CPP14Parser.RULE_initializerlist = 140;
    CPP14Parser.RULE_bracedinitlist = 141;
    CPP14Parser.RULE_classname = 142;
    CPP14Parser.RULE_classspecifier = 143;
    CPP14Parser.RULE_classhead = 144;
    CPP14Parser.RULE_classheadname = 145;
    CPP14Parser.RULE_classvirtspecifier = 146;
    CPP14Parser.RULE_classkey = 147;
    CPP14Parser.RULE_memberspecification = 148;
    CPP14Parser.RULE_memberdeclaration = 149;
    CPP14Parser.RULE_memberdeclaratorlist = 150;
    CPP14Parser.RULE_memberdeclarator = 151;
    CPP14Parser.RULE_virtspecifierseq = 152;
    CPP14Parser.RULE_virtspecifier = 153;
    CPP14Parser.RULE_purespecifier = 154;
    CPP14Parser.RULE_baseclause = 155;
    CPP14Parser.RULE_basespecifierlist = 156;
    CPP14Parser.RULE_basespecifier = 157;
    CPP14Parser.RULE_classordecltype = 158;
    CPP14Parser.RULE_basetypespecifier = 159;
    CPP14Parser.RULE_accessspecifier = 160;
    CPP14Parser.RULE_conversionfunctionid = 161;
    CPP14Parser.RULE_conversiontypeid = 162;
    CPP14Parser.RULE_conversiondeclarator = 163;
    CPP14Parser.RULE_ctorinitializer = 164;
    CPP14Parser.RULE_meminitializerlist = 165;
    CPP14Parser.RULE_meminitializer = 166;
    CPP14Parser.RULE_meminitializerid = 167;
    CPP14Parser.RULE_operatorfunctionid = 168;
    CPP14Parser.RULE_literaloperatorid = 169;
    CPP14Parser.RULE_templatedeclaration = 170;
    CPP14Parser.RULE_templateparameterlist = 171;
    CPP14Parser.RULE_templateparameter = 172;
    CPP14Parser.RULE_typeparameter = 173;
    CPP14Parser.RULE_simpletemplateid = 174;
    CPP14Parser.RULE_templateid = 175;
    CPP14Parser.RULE_templatename = 176;
    CPP14Parser.RULE_templateargumentlist = 177;
    CPP14Parser.RULE_templateargument = 178;
    CPP14Parser.RULE_typenamespecifier = 179;
    CPP14Parser.RULE_explicitinstantiation = 180;
    CPP14Parser.RULE_explicitspecialization = 181;
    CPP14Parser.RULE_tryblock = 182;
    CPP14Parser.RULE_functiontryblock = 183;
    CPP14Parser.RULE_handlerseq = 184;
    CPP14Parser.RULE_handler = 185;
    CPP14Parser.RULE_exceptiondeclaration = 186;
    CPP14Parser.RULE_throwexpression = 187;
    CPP14Parser.RULE_exceptionspecification = 188;
    CPP14Parser.RULE_dynamicexceptionspecification = 189;
    CPP14Parser.RULE_typeidlist = 190;
    CPP14Parser.RULE_noexceptspecification = 191;
    CPP14Parser.RULE_rightShift = 192;
    CPP14Parser.RULE_rightShiftAssign = 193;
    CPP14Parser.RULE_operator = 194;
    CPP14Parser.RULE_literal = 195;
    CPP14Parser.RULE_booleanliteral = 196;
    CPP14Parser.RULE_pointerliteral = 197;
    CPP14Parser.RULE_userdefinedliteral = 198;
    CPP14Parser.literalNames = [
        null, null, null, "'alignas'", "'alignof'", "'asm'", "'auto'", "'bool'",
        "'break'", "'case'", "'catch'", "'char'", "'char16_t'", "'char32_t'",
        "'class'", "'const'", "'constexpr'", "'const_cast'", "'continue'",
        "'decltype'", "'default'", "'delete'", "'do'", "'double'", "'dynamic_cast'",
        "'else'", "'enum'", "'explicit'", "'export'", "'extern'", "'false'",
        "'final'", "'float'", "'for'", "'friend'", "'goto'", "'if'", "'inline'",
        "'int'", "'long'", "'mutable'", "'namespace'", "'new'", "'noexcept'",
        "'nullptr'", "'operator'", "'override'", "'private'", "'protected'",
        "'public'", "'register'", "'reinterpret_cast'", "'return'", "'short'",
        "'signed'", "'sizeof'", "'static'", "'static_assert'", "'static_cast'",
        "'struct'", "'switch'", "'template'", "'this'", "'thread_local'",
        "'throw'", "'true'", "'try'", "'typedef'", "'typeid'", "'typename'",
        "'union'", "'unsigned'", "'using'", "'virtual'", "'void'", "'volatile'",
        "'wchar_t'", "'while'", "'('", "')'", "'['", "']'", "'{'", "'}'",
        "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'&'", "'|'", "'~'", "'!'",
        "'='", "'<'", "'>'", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='",
        "'&='", "'|='", "'<<'", "'<<='", "'=='", "'!='", "'<='", "'>='",
        "'&&'", "'||'", "'++'", "'--'", "','", "'->*'", "'->'", "'?'", "':'",
        "'::'", "';'", "'.'", "'.*'", "'...'"
    ];
    CPP14Parser.symbolicNames = [
        null, "MultiLineMacro", "Directive", "Alignas", "Alignof", "Asm",
        "Auto", "Bool", "Break", "Case", "Catch", "Char", "Char16", "Char32",
        "Class", "Const", "Constexpr", "Const_cast", "Continue", "Decltype",
        "Default", "Delete", "Do", "Double", "Dynamic_cast", "Else", "Enum",
        "Explicit", "Export", "Extern", "False", "Final", "Float", "For",
        "Friend", "Goto", "If", "Inline", "Int", "Long", "Mutable", "Namespace",
        "New", "Noexcept", "Nullptr", "Operator", "Override", "Private",
        "Protected", "Public", "Register", "Reinterpret_cast", "Return",
        "Short", "Signed", "Sizeof", "Static", "Static_assert", "Static_cast",
        "Struct", "Switch", "Template", "This", "Thread_local", "Throw",
        "True", "Try", "Typedef", "Typeid", "Typename", "Union", "Unsigned",
        "Using", "Virtual", "Void", "Volatile", "Wchar", "While", "LeftParen",
        "RightParen", "LeftBracket", "RightBracket", "LeftBrace", "RightBrace",
        "Plus", "Minus", "Star", "Div", "Mod", "Caret", "And", "Or", "Tilde",
        "Not", "Assign", "Less", "Greater", "PlusAssign", "MinusAssign",
        "StarAssign", "DivAssign", "ModAssign", "XorAssign", "AndAssign",
        "OrAssign", "LeftShift", "LeftShiftAssign", "Equal", "NotEqual",
        "LessEqual", "GreaterEqual", "AndAnd", "OrOr", "PlusPlus", "MinusMinus",
        "Comma", "ArrowStar", "Arrow", "Question", "Colon", "Doublecolon",
        "Semi", "Dot", "DotStar", "Ellipsis", "Identifier", "Integerliteral",
        "Decimalliteral", "Octalliteral", "Hexadecimalliteral", "Binaryliteral",
        "Integersuffix", "Characterliteral", "Floatingliteral", "Stringliteral",
        "Userdefinedintegerliteral", "Userdefinedfloatingliteral", "Userdefinedstringliteral",
        "Userdefinedcharacterliteral", "Whitespace", "Newline", "BlockComment",
        "LineComment"
    ];
    CPP14Parser.ruleNames = [
        "translationunit", "primaryexpression", "idexpression", "unqualifiedid",
        "qualifiedid", "nestednamespecifier", "lambdaexpression", "lambdaintroducer",
        "lambdacapture", "capturedefault", "capturelist", "capture", "simplecapture",
        "initcapture", "lambdadeclarator", "postfixexpression", "expressionlist",
        "pseudodestructorname", "unaryexpression", "unaryoperator", "newexpression",
        "newplacement", "newtypeid", "newdeclarator", "noptrnewdeclarator",
        "newinitializer", "deleteexpression", "noexceptexpression", "castexpression",
        "pmexpression", "multiplicativeexpression", "additiveexpression",
        "shiftexpression", "relationalexpression", "equalityexpression",
        "andexpression", "exclusiveorexpression", "inclusiveorexpression",
        "logicalandexpression", "logicalorexpression", "conditionalexpression",
        "assignmentexpression", "assignmentoperator", "expression", "constantexpression",
        "statement", "labeledstatement", "expressionstatement", "compoundstatement",
        "statementseq", "selectionstatement", "condition", "iterationstatement",
        "forinitstatement", "forrangedeclaration", "forrangeinitializer",
        "jumpstatement", "declarationstatement", "declarationseq", "declaration",
        "blockdeclaration", "aliasdeclaration", "simpledeclaration", "static_assertdeclaration",
        "emptydeclaration", "attributedeclaration", "declspecifier", "declspecifierseq",
        "storageclassspecifier", "functionspecifier", "typedefname", "typespecifier",
        "trailingtypespecifier", "typespecifierseq", "trailingtypespecifierseq",
        "simpletypespecifier", "typename", "decltypespecifier", "elaboratedtypespecifier",
        "enumname", "enumspecifier", "enumhead", "opaqueenumdeclaration",
        "enumkey", "enumbase", "enumeratorlist", "enumeratordefinition",
        "enumerator", "namespacename", "originalnamespacename", "namespacedefinition",
        "namednamespacedefinition", "originalnamespacedefinition", "extensionnamespacedefinition",
        "unnamednamespacedefinition", "namespacebody", "namespacealias",
        "namespacealiasdefinition", "qualifiednamespacespecifier", "usingdeclaration",
        "usingdirective", "asmdefinition", "linkagespecification", "attributespecifierseq",
        "attributespecifier", "alignmentspecifier", "attributelist", "attribute",
        "attributetoken", "attributescopedtoken", "attributenamespace",
        "attributeargumentclause", "balancedtokenseq", "balancedtoken",
        "initdeclaratorlist", "initdeclarator", "declarator", "ptrdeclarator",
        "noptrdeclarator", "parametersandqualifiers", "trailingreturntype",
        "ptroperator", "cvqualifierseq", "cvqualifier", "refqualifier",
        "declaratorid", "typeid", "abstractdeclarator", "ptrabstractdeclarator",
        "noptrabstractdeclarator", "abstractpackdeclarator", "noptrabstractpackdeclarator",
        "parameterdeclarationclause", "parameterdeclarationlist", "parameterdeclaration",
        "functiondefinition", "functionbody", "initializer", "braceorequalinitializer",
        "initializerclause", "initializerlist", "bracedinitlist", "classname",
        "classspecifier", "classhead", "classheadname", "classvirtspecifier",
        "classkey", "memberspecification", "memberdeclaration", "memberdeclaratorlist",
        "memberdeclarator", "virtspecifierseq", "virtspecifier", "purespecifier",
        "baseclause", "basespecifierlist", "basespecifier", "classordecltype",
        "basetypespecifier", "accessspecifier", "conversionfunctionid",
        "conversiontypeid", "conversiondeclarator", "ctorinitializer", "meminitializerlist",
        "meminitializer", "meminitializerid", "operatorfunctionid", "literaloperatorid",
        "templatedeclaration", "templateparameterlist", "templateparameter",
        "typeparameter", "simpletemplateid", "templateid", "templatename",
        "templateargumentlist", "templateargument", "typenamespecifier",
        "explicitinstantiation", "explicitspecialization", "tryblock", "functiontryblock",
        "handlerseq", "handler", "exceptiondeclaration", "throwexpression",
        "exceptionspecification", "dynamicexceptionspecification", "typeidlist",
        "noexceptspecification", "rightShift", "rightShiftAssign", "operator",
        "literal", "booleanliteral", "pointerliteral", "userdefinedliteral",
    ];
    CPP14Parser._serializedATN = [
        4, 1, 142, 2468, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
        7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
        13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
        20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7,
        26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
        33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7,
        39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
        46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7,
        52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
        59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7,
        65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2,
        72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7,
        78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2,
        85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7,
        91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2,
        98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103,
        2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
        7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114,
        2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120,
        7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125,
        2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131,
        7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136,
        2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142,
        7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147,
        2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151, 7, 151, 2, 152, 7, 152, 2, 153,
        7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157, 7, 157, 2, 158, 7, 158,
        2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163, 7, 163, 2, 164,
        7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169, 7, 169,
        2, 170, 7, 170, 2, 171, 7, 171, 2, 172, 7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175,
        7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178, 7, 178, 2, 179, 7, 179, 2, 180, 7, 180,
        2, 181, 7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184, 7, 184, 2, 185, 7, 185, 2, 186,
        7, 186, 2, 187, 7, 187, 2, 188, 7, 188, 2, 189, 7, 189, 2, 190, 7, 190, 2, 191, 7, 191,
        2, 192, 7, 192, 2, 193, 7, 193, 2, 194, 7, 194, 2, 195, 7, 195, 2, 196, 7, 196, 2, 197,
        7, 197, 2, 198, 7, 198, 1, 0, 3, 0, 400, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 3, 1, 412, 8, 1, 1, 2, 1, 2, 3, 2, 416, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        3, 1, 3, 1, 3, 1, 3, 3, 3, 427, 8, 3, 1, 4, 1, 4, 3, 4, 431, 8, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1,
        5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 3, 5, 446, 8, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,
        5, 3, 5, 453, 8, 5, 1, 5, 1, 5, 1, 5, 5, 5, 458, 8, 5, 10, 5, 12, 5, 461, 9, 5, 1, 6, 1, 6,
        3, 6, 465, 8, 6, 1, 6, 1, 6, 1, 7, 1, 7, 3, 7, 471, 8, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8,
        1, 8, 1, 8, 3, 8, 481, 8, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 3, 10, 488, 8, 10, 1, 10, 1,
        10, 1, 10, 1, 10, 3, 10, 494, 8, 10, 5, 10, 496, 8, 10, 10, 10, 12, 10, 499, 9, 10, 1,
        11, 1, 11, 3, 11, 503, 8, 11, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 509, 8, 12, 1, 13, 1, 13,
        1, 13, 1, 13, 1, 13, 3, 13, 516, 8, 13, 1, 14, 1, 14, 1, 14, 1, 14, 3, 14, 522, 8, 14, 1,
        14, 3, 14, 525, 8, 14, 1, 14, 3, 14, 528, 8, 14, 1, 14, 3, 14, 531, 8, 14, 1, 15, 1, 15,
        1, 15, 1, 15, 1, 15, 3, 15, 538, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 545, 8,
        15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
        15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
        15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
        15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 597,
        8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
        1, 15, 3, 15, 612, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 618, 8, 15, 1, 15, 1, 15, 1,
        15, 1, 15, 3, 15, 624, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1,
        15, 1, 15, 1, 15, 5, 15, 637, 8, 15, 10, 15, 12, 15, 640, 9, 15, 1, 16, 1, 16, 1, 17, 3,
        17, 645, 8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1,
        17, 1, 17, 1, 17, 3, 17, 660, 8, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 666, 8, 17, 1, 18,
        1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18,
        1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18, 1, 18,
        1, 18, 3, 18, 696, 8, 18, 1, 19, 1, 19, 1, 20, 3, 20, 701, 8, 20, 1, 20, 1, 20, 3, 20, 705,
        8, 20, 1, 20, 1, 20, 3, 20, 709, 8, 20, 1, 20, 3, 20, 712, 8, 20, 1, 20, 1, 20, 3, 20, 716,
        8, 20, 1, 20, 1, 20, 1, 20, 1, 20, 3, 20, 722, 8, 20, 3, 20, 724, 8, 20, 1, 21, 1, 21, 1,
        21, 1, 21, 1, 22, 1, 22, 3, 22, 732, 8, 22, 1, 23, 1, 23, 3, 23, 736, 8, 23, 1, 23, 3, 23,
        739, 8, 23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 24, 3, 24, 746, 8, 24, 1, 24, 1, 24, 1, 24, 1,
        24, 1, 24, 3, 24, 753, 8, 24, 5, 24, 755, 8, 24, 10, 24, 12, 24, 758, 9, 24, 1, 25, 1,
        25, 3, 25, 762, 8, 25, 1, 25, 1, 25, 3, 25, 766, 8, 25, 1, 26, 3, 26, 769, 8, 26, 1, 26,
        1, 26, 1, 26, 3, 26, 774, 8, 26, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 780, 8, 26, 1, 27, 1,
        27, 1, 27, 1, 27, 1, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 3, 28, 793, 8, 28, 1,
        29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 5, 29, 804, 8, 29, 10, 29, 12,
        29, 807, 9, 29, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1, 30, 1,
        30, 1, 30, 5, 30, 821, 8, 30, 10, 30, 12, 30, 824, 9, 30, 1, 31, 1, 31, 1, 31, 1, 31, 1,
        31, 1, 31, 1, 31, 1, 31, 1, 31, 5, 31, 835, 8, 31, 10, 31, 12, 31, 838, 9, 31, 1, 32, 1,
        32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 1, 32, 5, 32, 850, 8, 32, 10, 32, 12,
        32, 853, 9, 32, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1, 33, 1,
        33, 1, 33, 1, 33, 1, 33, 1, 33, 5, 33, 870, 8, 33, 10, 33, 12, 33, 873, 9, 33, 1, 34, 1,
        34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 1, 34, 5, 34, 884, 8, 34, 10, 34, 12, 34,
        887, 9, 34, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 1, 35, 5, 35, 895, 8, 35, 10, 35, 12, 35,
        898, 9, 35, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 1, 36, 5, 36, 906, 8, 36, 10, 36, 12, 36,
        909, 9, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 5, 37, 917, 8, 37, 10, 37, 12, 37,
        920, 9, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38, 5, 38, 928, 8, 38, 10, 38, 12, 38,
        931, 9, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 5, 39, 939, 8, 39, 10, 39, 12, 39,
        942, 9, 39, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 1, 40, 3, 40, 951, 8, 40, 1, 41, 1,
        41, 1, 41, 1, 41, 1, 41, 1, 41, 3, 41, 959, 8, 41, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 1,
        42, 1, 42, 1, 42, 1, 42, 1, 42, 1, 42, 3, 42, 972, 8, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1,
        43, 1, 43, 5, 43, 980, 8, 43, 10, 43, 12, 43, 983, 9, 43, 1, 44, 1, 44, 1, 45, 1, 45, 3,
        45, 989, 8, 45, 1, 45, 1, 45, 3, 45, 993, 8, 45, 1, 45, 1, 45, 3, 45, 997, 8, 45, 1, 45,
        1, 45, 3, 45, 1001, 8, 45, 1, 45, 1, 45, 3, 45, 1005, 8, 45, 1, 45, 1, 45, 1, 45, 3, 45,
        1010, 8, 45, 1, 45, 3, 45, 1013, 8, 45, 1, 46, 3, 46, 1016, 8, 46, 1, 46, 1, 46, 1, 46,
        1, 46, 3, 46, 1022, 8, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 1, 46, 3, 46, 1030, 8, 46,
        1, 46, 1, 46, 1, 46, 3, 46, 1035, 8, 46, 1, 47, 3, 47, 1038, 8, 47, 1, 47, 1, 47, 1, 48,
        1, 48, 3, 48, 1044, 8, 48, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 1, 49, 1, 49, 5, 49, 1053,
        8, 49, 10, 49, 12, 49, 1056, 9, 49, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1,
        50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 1, 50, 3,
        50, 1078, 8, 50, 1, 51, 1, 51, 3, 51, 1082, 8, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1, 51, 1,
        51, 3, 51, 1090, 8, 51, 1, 51, 1, 51, 1, 51, 1, 51, 3, 51, 1096, 8, 51, 1, 52, 1, 52, 1,
        52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1,
        52, 1, 52, 1, 52, 3, 52, 1116, 8, 52, 1, 52, 1, 52, 3, 52, 1120, 8, 52, 1, 52, 1, 52, 1,
        52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 52, 3, 52, 1133, 8, 52, 1, 53, 1,
        53, 3, 53, 1137, 8, 53, 1, 54, 3, 54, 1140, 8, 54, 1, 54, 1, 54, 1, 54, 1, 55, 1, 55, 3,
        55, 1147, 8, 55, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 1155, 8, 56, 1, 56, 1,
        56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 1, 56, 3, 56, 1165, 8, 56, 1, 57, 1, 57, 1, 58, 1,
        58, 1, 58, 1, 58, 1, 58, 5, 58, 1174, 8, 58, 10, 58, 12, 58, 1177, 9, 58, 1, 59, 1, 59,
        1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 1, 59, 3, 59, 1188, 8, 59, 1, 60, 1, 60, 1, 60,
        1, 60, 1, 60, 1, 60, 1, 60, 1, 60, 3, 60, 1198, 8, 60, 1, 61, 1, 61, 1, 61, 3, 61, 1203,
        8, 61, 1, 61, 1, 61, 1, 61, 1, 61, 1, 62, 3, 62, 1210, 8, 62, 1, 62, 3, 62, 1213, 8, 62,
        1, 62, 1, 62, 1, 62, 3, 62, 1218, 8, 62, 1, 62, 1, 62, 1, 62, 3, 62, 1223, 8, 62, 1, 63,
        1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 63, 1, 64, 1, 64, 1, 65, 1, 65, 1, 65, 1, 66,
        1, 66, 1, 66, 1, 66, 1, 66, 1, 66, 3, 66, 1244, 8, 66, 1, 67, 1, 67, 3, 67, 1248, 8, 67,
        1, 67, 1, 67, 1, 67, 3, 67, 1253, 8, 67, 1, 68, 1, 68, 1, 69, 1, 69, 1, 70, 1, 70, 1, 71,
        1, 71, 1, 71, 3, 71, 1264, 8, 71, 1, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1270, 8, 72, 1, 73,
        1, 73, 3, 73, 1274, 8, 73, 1, 73, 1, 73, 1, 73, 3, 73, 1279, 8, 73, 1, 74, 1, 74, 3, 74,
        1283, 8, 74, 1, 74, 1, 74, 1, 74, 3, 74, 1288, 8, 74, 1, 75, 3, 75, 1291, 8, 75, 1, 75,
        1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75,
        1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1313, 8, 75, 1, 76, 1, 76, 1, 76, 1, 76,
        3, 76, 1319, 8, 76, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 1, 77, 3, 77,
        1330, 8, 77, 1, 78, 1, 78, 3, 78, 1334, 8, 78, 1, 78, 3, 78, 1337, 8, 78, 1, 78, 1, 78,
        1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 1, 78, 3, 78, 1347, 8, 78, 1, 78, 1, 78, 1, 78, 1, 78,
        3, 78, 1353, 8, 78, 1, 78, 3, 78, 1356, 8, 78, 1, 79, 1, 79, 1, 80, 1, 80, 1, 80, 3, 80,
        1363, 8, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 1, 80, 3, 80, 1373, 8, 80,
        1, 81, 1, 81, 3, 81, 1377, 8, 81, 1, 81, 3, 81, 1380, 8, 81, 1, 81, 3, 81, 1383, 8, 81,
        1, 81, 1, 81, 3, 81, 1387, 8, 81, 1, 81, 1, 81, 1, 81, 3, 81, 1392, 8, 81, 3, 81, 1394,
        8, 81, 1, 82, 1, 82, 3, 82, 1398, 8, 82, 1, 82, 1, 82, 3, 82, 1402, 8, 82, 1, 82, 1, 82,
        1, 83, 1, 83, 1, 83, 1, 83, 1, 83, 3, 83, 1411, 8, 83, 1, 84, 1, 84, 1, 84, 1, 85, 1, 85,
        1, 85, 1, 85, 1, 85, 1, 85, 5, 85, 1422, 8, 85, 10, 85, 12, 85, 1425, 9, 85, 1, 86, 1,
        86, 1, 86, 1, 86, 1, 86, 3, 86, 1432, 8, 86, 1, 87, 1, 87, 1, 88, 1, 88, 3, 88, 1438, 8,
        88, 1, 89, 1, 89, 1, 90, 1, 90, 3, 90, 1444, 8, 90, 1, 91, 1, 91, 3, 91, 1448, 8, 91, 1,
        92, 3, 92, 1451, 8, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 93, 3, 93, 1460, 8,
        93, 1, 93, 1, 93, 1, 93, 1, 93, 1, 93, 1, 93, 1, 94, 3, 94, 1469, 8, 94, 1, 94, 1, 94, 1,
        94, 1, 94, 1, 94, 1, 95, 3, 95, 1477, 8, 95, 1, 96, 1, 96, 1, 97, 1, 97, 1, 97, 1, 97, 1,
        97, 1, 97, 1, 98, 3, 98, 1488, 8, 98, 1, 98, 1, 98, 1, 99, 1, 99, 3, 99, 1494, 8, 99, 1,
        99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 1, 99, 3, 99, 1505, 8, 99, 1, 100,
        3, 100, 1508, 8, 100, 1, 100, 1, 100, 1, 100, 3, 100, 1513, 8, 100, 1, 100, 1, 100,
        1, 100, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 102, 1, 102, 1, 102, 1, 102,
        3, 102, 1528, 8, 102, 1, 102, 1, 102, 1, 102, 1, 102, 3, 102, 1534, 8, 102, 1, 103,
        1, 103, 1, 103, 1, 103, 1, 103, 5, 103, 1541, 8, 103, 10, 103, 12, 103, 1544, 9, 103,
        1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 3, 104, 1553, 8, 104, 1, 105,
        1, 105, 1, 105, 1, 105, 3, 105, 1559, 8, 105, 1, 105, 1, 105, 1, 105, 1, 105, 1, 105,
        1, 105, 3, 105, 1567, 8, 105, 1, 105, 1, 105, 3, 105, 1571, 8, 105, 1, 106, 1, 106,
        3, 106, 1575, 8, 106, 1, 106, 1, 106, 1, 106, 3, 106, 1580, 8, 106, 1, 106, 1, 106,
        1, 106, 3, 106, 1585, 8, 106, 1, 106, 1, 106, 1, 106, 1, 106, 1, 106, 5, 106, 1592,
        8, 106, 10, 106, 12, 106, 1595, 9, 106, 1, 107, 1, 107, 3, 107, 1599, 8, 107, 1, 108,
        1, 108, 3, 108, 1603, 8, 108, 1, 109, 1, 109, 1, 109, 1, 109, 1, 110, 1, 110, 1, 111,
        1, 111, 1, 111, 1, 111, 1, 112, 1, 112, 3, 112, 1617, 8, 112, 1, 112, 1, 112, 5, 112,
        1621, 8, 112, 10, 112, 12, 112, 1624, 9, 112, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113,
        1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 1, 113, 3, 113, 1638, 8, 113, 1, 114,
        1, 114, 1, 114, 1, 114, 1, 114, 1, 114, 5, 114, 1646, 8, 114, 10, 114, 12, 114, 1649,
        9, 114, 1, 115, 1, 115, 3, 115, 1653, 8, 115, 1, 116, 1, 116, 1, 116, 1, 116, 1, 116,
        3, 116, 1660, 8, 116, 1, 117, 1, 117, 1, 117, 1, 117, 3, 117, 1666, 8, 117, 1, 118,
        1, 118, 1, 118, 3, 118, 1671, 8, 118, 1, 118, 1, 118, 1, 118, 1, 118, 3, 118, 1677,
        8, 118, 1, 118, 1, 118, 1, 118, 1, 118, 1, 118, 3, 118, 1684, 8, 118, 1, 118, 1, 118,
        3, 118, 1688, 8, 118, 5, 118, 1690, 8, 118, 10, 118, 12, 118, 1693, 9, 118, 1, 119,
        1, 119, 1, 119, 1, 119, 3, 119, 1699, 8, 119, 1, 119, 3, 119, 1702, 8, 119, 1, 119,
        3, 119, 1705, 8, 119, 1, 119, 3, 119, 1708, 8, 119, 1, 120, 1, 120, 1, 120, 3, 120,
        1713, 8, 120, 1, 121, 1, 121, 3, 121, 1717, 8, 121, 1, 121, 3, 121, 1720, 8, 121, 1,
        121, 1, 121, 3, 121, 1724, 8, 121, 1, 121, 1, 121, 3, 121, 1728, 8, 121, 1, 121, 1,
        121, 1, 121, 3, 121, 1733, 8, 121, 1, 121, 3, 121, 1736, 8, 121, 3, 121, 1738, 8, 121,
        1, 122, 1, 122, 3, 122, 1742, 8, 122, 1, 123, 1, 123, 1, 124, 1, 124, 1, 125, 3, 125,
        1749, 8, 125, 1, 125, 1, 125, 1, 126, 1, 126, 3, 126, 1755, 8, 126, 1, 127, 1, 127,
        3, 127, 1759, 8, 127, 1, 127, 1, 127, 1, 127, 1, 127, 3, 127, 1765, 8, 127, 1, 128,
        1, 128, 1, 128, 3, 128, 1770, 8, 128, 3, 128, 1772, 8, 128, 1, 129, 1, 129, 1, 129,
        1, 129, 3, 129, 1778, 8, 129, 1, 129, 1, 129, 3, 129, 1782, 8, 129, 1, 129, 1, 129,
        1, 129, 1, 129, 3, 129, 1788, 8, 129, 1, 129, 1, 129, 1, 129, 1, 129, 1, 129, 3, 129,
        1795, 8, 129, 1, 129, 1, 129, 3, 129, 1799, 8, 129, 5, 129, 1801, 8, 129, 10, 129,
        12, 129, 1804, 9, 129, 1, 130, 1, 130, 1, 130, 1, 130, 3, 130, 1810, 8, 130, 1, 131,
        1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131, 1820, 8, 131, 1, 131,
        1, 131, 3, 131, 1824, 8, 131, 5, 131, 1826, 8, 131, 10, 131, 12, 131, 1829, 9, 131,
        1, 132, 3, 132, 1832, 8, 132, 1, 132, 3, 132, 1835, 8, 132, 1, 132, 1, 132, 1, 132,
        1, 132, 3, 132, 1841, 8, 132, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 5, 133,
        1849, 8, 133, 10, 133, 12, 133, 1852, 9, 133, 1, 134, 3, 134, 1855, 8, 134, 1, 134,
        1, 134, 1, 134, 1, 134, 3, 134, 1861, 8, 134, 1, 134, 1, 134, 1, 134, 1, 134, 1, 134,
        1, 134, 3, 134, 1869, 8, 134, 1, 134, 1, 134, 3, 134, 1873, 8, 134, 1, 134, 3, 134,
        1876, 8, 134, 1, 134, 1, 134, 3, 134, 1880, 8, 134, 1, 134, 1, 134, 1, 134, 3, 134,
        1885, 8, 134, 1, 135, 3, 135, 1888, 8, 135, 1, 135, 3, 135, 1891, 8, 135, 1, 135, 1,
        135, 3, 135, 1895, 8, 135, 1, 135, 1, 135, 1, 136, 3, 136, 1900, 8, 136, 1, 136, 1,
        136, 1, 136, 1, 136, 1, 136, 1, 136, 1, 136, 1, 136, 3, 136, 1910, 8, 136, 1, 137, 1,
        137, 1, 137, 1, 137, 1, 137, 3, 137, 1917, 8, 137, 1, 138, 1, 138, 1, 138, 3, 138, 1922,
        8, 138, 1, 139, 1, 139, 3, 139, 1926, 8, 139, 1, 140, 1, 140, 1, 140, 3, 140, 1931,
        8, 140, 1, 140, 1, 140, 1, 140, 1, 140, 3, 140, 1937, 8, 140, 5, 140, 1939, 8, 140,
        10, 140, 12, 140, 1942, 9, 140, 1, 141, 1, 141, 1, 141, 3, 141, 1947, 8, 141, 1, 141,
        1, 141, 1, 141, 1, 141, 3, 141, 1953, 8, 141, 1, 142, 1, 142, 3, 142, 1957, 8, 142,
        1, 143, 1, 143, 1, 143, 3, 143, 1962, 8, 143, 1, 143, 1, 143, 1, 144, 1, 144, 3, 144,
        1968, 8, 144, 1, 144, 1, 144, 3, 144, 1972, 8, 144, 1, 144, 3, 144, 1975, 8, 144, 1,
        144, 1, 144, 3, 144, 1979, 8, 144, 1, 144, 3, 144, 1982, 8, 144, 3, 144, 1984, 8, 144,
        1, 145, 3, 145, 1987, 8, 145, 1, 145, 1, 145, 1, 146, 1, 146, 1, 147, 1, 147, 1, 148,
        1, 148, 3, 148, 1997, 8, 148, 1, 148, 1, 148, 1, 148, 3, 148, 2002, 8, 148, 3, 148,
        2004, 8, 148, 1, 149, 3, 149, 2007, 8, 149, 1, 149, 3, 149, 2010, 8, 149, 1, 149, 3,
        149, 2013, 8, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 3, 149, 2022,
        8, 149, 1, 150, 1, 150, 1, 150, 1, 150, 1, 150, 1, 150, 5, 150, 2030, 8, 150, 10, 150,
        12, 150, 2033, 9, 150, 1, 151, 1, 151, 3, 151, 2037, 8, 151, 1, 151, 3, 151, 2040,
        8, 151, 1, 151, 1, 151, 3, 151, 2044, 8, 151, 1, 151, 3, 151, 2047, 8, 151, 1, 151,
        3, 151, 2050, 8, 151, 1, 151, 1, 151, 3, 151, 2054, 8, 151, 1, 152, 1, 152, 1, 152,
        1, 152, 1, 152, 5, 152, 2061, 8, 152, 10, 152, 12, 152, 2064, 9, 152, 1, 153, 1, 153,
        1, 154, 1, 154, 1, 154, 1, 154, 1, 155, 1, 155, 1, 155, 1, 156, 1, 156, 1, 156, 3, 156,
        2078, 8, 156, 1, 156, 1, 156, 1, 156, 1, 156, 3, 156, 2084, 8, 156, 5, 156, 2086, 8,
        156, 10, 156, 12, 156, 2089, 9, 156, 1, 157, 3, 157, 2092, 8, 157, 1, 157, 1, 157,
        3, 157, 2096, 8, 157, 1, 157, 1, 157, 3, 157, 2100, 8, 157, 1, 157, 1, 157, 3, 157,
        2104, 8, 157, 1, 157, 1, 157, 3, 157, 2108, 8, 157, 1, 157, 1, 157, 3, 157, 2112, 8,
        157, 1, 158, 3, 158, 2115, 8, 158, 1, 158, 1, 158, 3, 158, 2119, 8, 158, 1, 159, 1,
        159, 1, 160, 1, 160, 1, 161, 1, 161, 1, 161, 1, 162, 1, 162, 3, 162, 2130, 8, 162, 1,
        163, 1, 163, 3, 163, 2134, 8, 163, 1, 164, 1, 164, 1, 164, 1, 165, 1, 165, 3, 165, 2141,
        8, 165, 1, 165, 1, 165, 3, 165, 2145, 8, 165, 1, 165, 1, 165, 1, 165, 3, 165, 2150,
        8, 165, 1, 166, 1, 166, 1, 166, 3, 166, 2155, 8, 166, 1, 166, 1, 166, 1, 166, 1, 166,
        1, 166, 3, 166, 2162, 8, 166, 1, 167, 1, 167, 3, 167, 2166, 8, 167, 1, 168, 1, 168,
        1, 168, 1, 169, 1, 169, 1, 169, 1, 169, 1, 169, 3, 169, 2176, 8, 169, 1, 170, 1, 170,
        1, 170, 1, 170, 1, 170, 1, 170, 1, 171, 1, 171, 1, 171, 1, 171, 1, 171, 1, 171, 5, 171,
        2190, 8, 171, 10, 171, 12, 171, 2193, 9, 171, 1, 172, 1, 172, 3, 172, 2197, 8, 172,
        1, 173, 1, 173, 3, 173, 2201, 8, 173, 1, 173, 3, 173, 2204, 8, 173, 1, 173, 1, 173,
        3, 173, 2208, 8, 173, 1, 173, 1, 173, 1, 173, 1, 173, 3, 173, 2214, 8, 173, 1, 173,
        3, 173, 2217, 8, 173, 1, 173, 1, 173, 3, 173, 2221, 8, 173, 1, 173, 1, 173, 1, 173,
        1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 3, 173, 2231, 8, 173, 1, 173, 3, 173, 2234,
        8, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 1, 173, 3, 173, 2242, 8, 173, 1, 173,
        1, 173, 1, 173, 3, 173, 2247, 8, 173, 1, 174, 1, 174, 1, 174, 3, 174, 2252, 8, 174,
        1, 174, 1, 174, 1, 175, 1, 175, 1, 175, 1, 175, 3, 175, 2260, 8, 175, 1, 175, 1, 175,
        1, 175, 1, 175, 1, 175, 3, 175, 2267, 8, 175, 1, 175, 1, 175, 3, 175, 2271, 8, 175,
        1, 176, 1, 176, 1, 177, 1, 177, 1, 177, 3, 177, 2278, 8, 177, 1, 177, 1, 177, 1, 177,
        1, 177, 3, 177, 2284, 8, 177, 5, 177, 2286, 8, 177, 10, 177, 12, 177, 2289, 9, 177,
        1, 178, 1, 178, 1, 178, 3, 178, 2294, 8, 178, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179,
        1, 179, 1, 179, 3, 179, 2303, 8, 179, 1, 179, 1, 179, 3, 179, 2307, 8, 179, 1, 180,
        3, 180, 2310, 8, 180, 1, 180, 1, 180, 1, 180, 1, 181, 1, 181, 1, 181, 1, 181, 1, 181,
        1, 182, 1, 182, 1, 182, 1, 182, 1, 183, 1, 183, 3, 183, 2326, 8, 183, 1, 183, 1, 183,
        1, 183, 1, 184, 1, 184, 3, 184, 2333, 8, 184, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185,
        1, 185, 1, 186, 3, 186, 2342, 8, 186, 1, 186, 1, 186, 1, 186, 1, 186, 3, 186, 2348,
        8, 186, 1, 186, 1, 186, 3, 186, 2352, 8, 186, 1, 186, 3, 186, 2355, 8, 186, 1, 187,
        1, 187, 3, 187, 2359, 8, 187, 1, 188, 1, 188, 3, 188, 2363, 8, 188, 1, 189, 1, 189,
        1, 189, 3, 189, 2368, 8, 189, 1, 189, 1, 189, 1, 190, 1, 190, 1, 190, 3, 190, 2375,
        8, 190, 1, 190, 1, 190, 1, 190, 1, 190, 3, 190, 2381, 8, 190, 5, 190, 2383, 8, 190,
        10, 190, 12, 190, 2386, 9, 190, 1, 191, 1, 191, 1, 191, 1, 191, 1, 191, 1, 191, 3, 191,
        2394, 8, 191, 1, 192, 1, 192, 1, 192, 1, 193, 1, 193, 1, 193, 1, 193, 1, 194, 1, 194,
        1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194,
        1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194,
        1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194,
        1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194,
        1, 194, 1, 194, 3, 194, 2451, 8, 194, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195,
        1, 195, 3, 195, 2460, 8, 195, 1, 196, 1, 196, 1, 197, 1, 197, 1, 198, 1, 198, 1, 198,
        0, 34, 10, 20, 30, 48, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 86, 98, 116, 170,
        206, 212, 224, 228, 236, 258, 262, 266, 280, 300, 304, 312, 342, 354, 380, 199,
        0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44,
        46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
        90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124,
        126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156,
        158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188,
        190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220,
        222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252,
        254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284,
        286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314, 316,
        318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346, 348,
        350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374, 376, 378, 380,
        382, 384, 386, 388, 390, 392, 394, 396, 0, 11, 2, 0, 90, 90, 94, 94, 2, 0, 84, 86, 90,
        93, 5, 0, 29, 29, 40, 40, 50, 50, 56, 56, 63, 63, 3, 0, 27, 27, 37, 37, 73, 73, 2, 0, 15,
        15, 75, 75, 2, 0, 90, 90, 111, 111, 3, 0, 14, 14, 59, 59, 70, 70, 2, 0, 31, 31, 46, 46,
        1, 0, 47, 49, 2, 0, 30, 30, 65, 65, 1, 0, 135, 138, 2757, 0, 399, 1, 0, 0, 0, 2, 411, 1,
        0, 0, 0, 4, 415, 1, 0, 0, 0, 6, 426, 1, 0, 0, 0, 8, 428, 1, 0, 0, 0, 10, 445, 1, 0, 0, 0, 12,
        462, 1, 0, 0, 0, 14, 468, 1, 0, 0, 0, 16, 480, 1, 0, 0, 0, 18, 482, 1, 0, 0, 0, 20, 484,
        1, 0, 0, 0, 22, 502, 1, 0, 0, 0, 24, 508, 1, 0, 0, 0, 26, 515, 1, 0, 0, 0, 28, 517, 1, 0,
        0, 0, 30, 596, 1, 0, 0, 0, 32, 641, 1, 0, 0, 0, 34, 665, 1, 0, 0, 0, 36, 695, 1, 0, 0, 0,
        38, 697, 1, 0, 0, 0, 40, 723, 1, 0, 0, 0, 42, 725, 1, 0, 0, 0, 44, 729, 1, 0, 0, 0, 46, 738,
        1, 0, 0, 0, 48, 740, 1, 0, 0, 0, 50, 765, 1, 0, 0, 0, 52, 779, 1, 0, 0, 0, 54, 781, 1, 0,
        0, 0, 56, 792, 1, 0, 0, 0, 58, 794, 1, 0, 0, 0, 60, 808, 1, 0, 0, 0, 62, 825, 1, 0, 0, 0,
        64, 839, 1, 0, 0, 0, 66, 854, 1, 0, 0, 0, 68, 874, 1, 0, 0, 0, 70, 888, 1, 0, 0, 0, 72, 899,
        1, 0, 0, 0, 74, 910, 1, 0, 0, 0, 76, 921, 1, 0, 0, 0, 78, 932, 1, 0, 0, 0, 80, 950, 1, 0,
        0, 0, 82, 958, 1, 0, 0, 0, 84, 971, 1, 0, 0, 0, 86, 973, 1, 0, 0, 0, 88, 984, 1, 0, 0, 0,
        90, 1012, 1, 0, 0, 0, 92, 1034, 1, 0, 0, 0, 94, 1037, 1, 0, 0, 0, 96, 1041, 1, 0, 0, 0,
        98, 1047, 1, 0, 0, 0, 100, 1077, 1, 0, 0, 0, 102, 1095, 1, 0, 0, 0, 104, 1132, 1, 0, 0,
        0, 106, 1136, 1, 0, 0, 0, 108, 1139, 1, 0, 0, 0, 110, 1146, 1, 0, 0, 0, 112, 1164, 1,
        0, 0, 0, 114, 1166, 1, 0, 0, 0, 116, 1168, 1, 0, 0, 0, 118, 1187, 1, 0, 0, 0, 120, 1197,
        1, 0, 0, 0, 122, 1199, 1, 0, 0, 0, 124, 1222, 1, 0, 0, 0, 126, 1224, 1, 0, 0, 0, 128, 1232,
        1, 0, 0, 0, 130, 1234, 1, 0, 0, 0, 132, 1243, 1, 0, 0, 0, 134, 1252, 1, 0, 0, 0, 136, 1254,
        1, 0, 0, 0, 138, 1256, 1, 0, 0, 0, 140, 1258, 1, 0, 0, 0, 142, 1263, 1, 0, 0, 0, 144, 1269,
        1, 0, 0, 0, 146, 1278, 1, 0, 0, 0, 148, 1287, 1, 0, 0, 0, 150, 1312, 1, 0, 0, 0, 152, 1318,
        1, 0, 0, 0, 154, 1329, 1, 0, 0, 0, 156, 1355, 1, 0, 0, 0, 158, 1357, 1, 0, 0, 0, 160, 1372,
        1, 0, 0, 0, 162, 1393, 1, 0, 0, 0, 164, 1395, 1, 0, 0, 0, 166, 1410, 1, 0, 0, 0, 168, 1412,
        1, 0, 0, 0, 170, 1415, 1, 0, 0, 0, 172, 1431, 1, 0, 0, 0, 174, 1433, 1, 0, 0, 0, 176, 1437,
        1, 0, 0, 0, 178, 1439, 1, 0, 0, 0, 180, 1443, 1, 0, 0, 0, 182, 1447, 1, 0, 0, 0, 184, 1450,
        1, 0, 0, 0, 186, 1459, 1, 0, 0, 0, 188, 1468, 1, 0, 0, 0, 190, 1476, 1, 0, 0, 0, 192, 1478,
        1, 0, 0, 0, 194, 1480, 1, 0, 0, 0, 196, 1487, 1, 0, 0, 0, 198, 1504, 1, 0, 0, 0, 200, 1507,
        1, 0, 0, 0, 202, 1517, 1, 0, 0, 0, 204, 1533, 1, 0, 0, 0, 206, 1535, 1, 0, 0, 0, 208, 1552,
        1, 0, 0, 0, 210, 1570, 1, 0, 0, 0, 212, 1579, 1, 0, 0, 0, 214, 1596, 1, 0, 0, 0, 216, 1602,
        1, 0, 0, 0, 218, 1604, 1, 0, 0, 0, 220, 1608, 1, 0, 0, 0, 222, 1610, 1, 0, 0, 0, 224, 1614,
        1, 0, 0, 0, 226, 1637, 1, 0, 0, 0, 228, 1639, 1, 0, 0, 0, 230, 1650, 1, 0, 0, 0, 232, 1659,
        1, 0, 0, 0, 234, 1665, 1, 0, 0, 0, 236, 1676, 1, 0, 0, 0, 238, 1694, 1, 0, 0, 0, 240, 1709,
        1, 0, 0, 0, 242, 1737, 1, 0, 0, 0, 244, 1739, 1, 0, 0, 0, 246, 1743, 1, 0, 0, 0, 248, 1745,
        1, 0, 0, 0, 250, 1748, 1, 0, 0, 0, 252, 1752, 1, 0, 0, 0, 254, 1764, 1, 0, 0, 0, 256, 1771,
        1, 0, 0, 0, 258, 1787, 1, 0, 0, 0, 260, 1809, 1, 0, 0, 0, 262, 1811, 1, 0, 0, 0, 264, 1840,
        1, 0, 0, 0, 266, 1842, 1, 0, 0, 0, 268, 1884, 1, 0, 0, 0, 270, 1887, 1, 0, 0, 0, 272, 1909,
        1, 0, 0, 0, 274, 1916, 1, 0, 0, 0, 276, 1921, 1, 0, 0, 0, 278, 1925, 1, 0, 0, 0, 280, 1927,
        1, 0, 0, 0, 282, 1952, 1, 0, 0, 0, 284, 1956, 1, 0, 0, 0, 286, 1958, 1, 0, 0, 0, 288, 1983,
        1, 0, 0, 0, 290, 1986, 1, 0, 0, 0, 292, 1990, 1, 0, 0, 0, 294, 1992, 1, 0, 0, 0, 296, 2003,
        1, 0, 0, 0, 298, 2021, 1, 0, 0, 0, 300, 2023, 1, 0, 0, 0, 302, 2053, 1, 0, 0, 0, 304, 2055,
        1, 0, 0, 0, 306, 2065, 1, 0, 0, 0, 308, 2067, 1, 0, 0, 0, 310, 2071, 1, 0, 0, 0, 312, 2074,
        1, 0, 0, 0, 314, 2111, 1, 0, 0, 0, 316, 2118, 1, 0, 0, 0, 318, 2120, 1, 0, 0, 0, 320, 2122,
        1, 0, 0, 0, 322, 2124, 1, 0, 0, 0, 324, 2127, 1, 0, 0, 0, 326, 2131, 1, 0, 0, 0, 328, 2135,
        1, 0, 0, 0, 330, 2149, 1, 0, 0, 0, 332, 2161, 1, 0, 0, 0, 334, 2165, 1, 0, 0, 0, 336, 2167,
        1, 0, 0, 0, 338, 2175, 1, 0, 0, 0, 340, 2177, 1, 0, 0, 0, 342, 2183, 1, 0, 0, 0, 344, 2196,
        1, 0, 0, 0, 346, 2246, 1, 0, 0, 0, 348, 2248, 1, 0, 0, 0, 350, 2270, 1, 0, 0, 0, 352, 2272,
        1, 0, 0, 0, 354, 2274, 1, 0, 0, 0, 356, 2293, 1, 0, 0, 0, 358, 2306, 1, 0, 0, 0, 360, 2309,
        1, 0, 0, 0, 362, 2314, 1, 0, 0, 0, 364, 2319, 1, 0, 0, 0, 366, 2323, 1, 0, 0, 0, 368, 2330,
        1, 0, 0, 0, 370, 2334, 1, 0, 0, 0, 372, 2354, 1, 0, 0, 0, 374, 2356, 1, 0, 0, 0, 376, 2362,
        1, 0, 0, 0, 378, 2364, 1, 0, 0, 0, 380, 2371, 1, 0, 0, 0, 382, 2393, 1, 0, 0, 0, 384, 2395,
        1, 0, 0, 0, 386, 2398, 1, 0, 0, 0, 388, 2450, 1, 0, 0, 0, 390, 2459, 1, 0, 0, 0, 392, 2461,
        1, 0, 0, 0, 394, 2463, 1, 0, 0, 0, 396, 2465, 1, 0, 0, 0, 398, 400, 3, 116, 58, 0, 399,
        398, 1, 0, 0, 0, 399, 400, 1, 0, 0, 0, 400, 401, 1, 0, 0, 0, 401, 402, 5, 0, 0, 1, 402,
        1, 1, 0, 0, 0, 403, 412, 3, 390, 195, 0, 404, 412, 5, 62, 0, 0, 405, 406, 5, 78, 0, 0,
        406, 407, 3, 86, 43, 0, 407, 408, 5, 79, 0, 0, 408, 412, 1, 0, 0, 0, 409, 412, 3, 4, 2,
        0, 410, 412, 3, 12, 6, 0, 411, 403, 1, 0, 0, 0, 411, 404, 1, 0, 0, 0, 411, 405, 1, 0, 0,
        0, 411, 409, 1, 0, 0, 0, 411, 410, 1, 0, 0, 0, 412, 3, 1, 0, 0, 0, 413, 416, 3, 6, 3, 0,
        414, 416, 3, 8, 4, 0, 415, 413, 1, 0, 0, 0, 415, 414, 1, 0, 0, 0, 416, 5, 1, 0, 0, 0, 417,
        427, 5, 125, 0, 0, 418, 427, 3, 336, 168, 0, 419, 427, 3, 322, 161, 0, 420, 427, 3,
        338, 169, 0, 421, 422, 5, 92, 0, 0, 422, 427, 3, 284, 142, 0, 423, 424, 5, 92, 0, 0,
        424, 427, 3, 154, 77, 0, 425, 427, 3, 350, 175, 0, 426, 417, 1, 0, 0, 0, 426, 418, 1,
        0, 0, 0, 426, 419, 1, 0, 0, 0, 426, 420, 1, 0, 0, 0, 426, 421, 1, 0, 0, 0, 426, 423, 1,
        0, 0, 0, 426, 425, 1, 0, 0, 0, 427, 7, 1, 0, 0, 0, 428, 430, 3, 10, 5, 0, 429, 431, 5, 61,
        0, 0, 430, 429, 1, 0, 0, 0, 430, 431, 1, 0, 0, 0, 431, 432, 1, 0, 0, 0, 432, 433, 3, 6,
        3, 0, 433, 9, 1, 0, 0, 0, 434, 435, 6, 5, -1, 0, 435, 446, 5, 120, 0, 0, 436, 437, 3, 152,
        76, 0, 437, 438, 5, 120, 0, 0, 438, 446, 1, 0, 0, 0, 439, 440, 3, 176, 88, 0, 440, 441,
        5, 120, 0, 0, 441, 446, 1, 0, 0, 0, 442, 443, 3, 154, 77, 0, 443, 444, 5, 120, 0, 0, 444,
        446, 1, 0, 0, 0, 445, 434, 1, 0, 0, 0, 445, 436, 1, 0, 0, 0, 445, 439, 1, 0, 0, 0, 445,
        442, 1, 0, 0, 0, 446, 459, 1, 0, 0, 0, 447, 448, 10, 2, 0, 0, 448, 449, 5, 125, 0, 0, 449,
        458, 5, 120, 0, 0, 450, 452, 10, 1, 0, 0, 451, 453, 5, 61, 0, 0, 452, 451, 1, 0, 0, 0,
        452, 453, 1, 0, 0, 0, 453, 454, 1, 0, 0, 0, 454, 455, 3, 348, 174, 0, 455, 456, 5, 120,
        0, 0, 456, 458, 1, 0, 0, 0, 457, 447, 1, 0, 0, 0, 457, 450, 1, 0, 0, 0, 458, 461, 1, 0,
        0, 0, 459, 457, 1, 0, 0, 0, 459, 460, 1, 0, 0, 0, 460, 11, 1, 0, 0, 0, 461, 459, 1, 0, 0,
        0, 462, 464, 3, 14, 7, 0, 463, 465, 3, 28, 14, 0, 464, 463, 1, 0, 0, 0, 464, 465, 1, 0,
        0, 0, 465, 466, 1, 0, 0, 0, 466, 467, 3, 96, 48, 0, 467, 13, 1, 0, 0, 0, 468, 470, 5, 80,
        0, 0, 469, 471, 3, 16, 8, 0, 470, 469, 1, 0, 0, 0, 470, 471, 1, 0, 0, 0, 471, 472, 1, 0,
        0, 0, 472, 473, 5, 81, 0, 0, 473, 15, 1, 0, 0, 0, 474, 481, 3, 18, 9, 0, 475, 481, 3, 20,
        10, 0, 476, 477, 3, 18, 9, 0, 477, 478, 5, 115, 0, 0, 478, 479, 3, 20, 10, 0, 479, 481,
        1, 0, 0, 0, 480, 474, 1, 0, 0, 0, 480, 475, 1, 0, 0, 0, 480, 476, 1, 0, 0, 0, 481, 17, 1,
        0, 0, 0, 482, 483, 7, 0, 0, 0, 483, 19, 1, 0, 0, 0, 484, 485, 6, 10, -1, 0, 485, 487, 3,
        22, 11, 0, 486, 488, 5, 124, 0, 0, 487, 486, 1, 0, 0, 0, 487, 488, 1, 0, 0, 0, 488, 497,
        1, 0, 0, 0, 489, 490, 10, 1, 0, 0, 490, 491, 5, 115, 0, 0, 491, 493, 3, 22, 11, 0, 492,
        494, 5, 124, 0, 0, 493, 492, 1, 0, 0, 0, 493, 494, 1, 0, 0, 0, 494, 496, 1, 0, 0, 0, 495,
        489, 1, 0, 0, 0, 496, 499, 1, 0, 0, 0, 497, 495, 1, 0, 0, 0, 497, 498, 1, 0, 0, 0, 498,
        21, 1, 0, 0, 0, 499, 497, 1, 0, 0, 0, 500, 503, 3, 24, 12, 0, 501, 503, 3, 26, 13, 0, 502,
        500, 1, 0, 0, 0, 502, 501, 1, 0, 0, 0, 503, 23, 1, 0, 0, 0, 504, 509, 5, 125, 0, 0, 505,
        506, 5, 90, 0, 0, 506, 509, 5, 125, 0, 0, 507, 509, 5, 62, 0, 0, 508, 504, 1, 0, 0, 0,
        508, 505, 1, 0, 0, 0, 508, 507, 1, 0, 0, 0, 509, 25, 1, 0, 0, 0, 510, 511, 5, 125, 0, 0,
        511, 516, 3, 274, 137, 0, 512, 513, 5, 90, 0, 0, 513, 514, 5, 125, 0, 0, 514, 516, 3,
        274, 137, 0, 515, 510, 1, 0, 0, 0, 515, 512, 1, 0, 0, 0, 516, 27, 1, 0, 0, 0, 517, 518,
        5, 78, 0, 0, 518, 519, 3, 264, 132, 0, 519, 521, 5, 79, 0, 0, 520, 522, 5, 40, 0, 0, 521,
        520, 1, 0, 0, 0, 521, 522, 1, 0, 0, 0, 522, 524, 1, 0, 0, 0, 523, 525, 3, 376, 188, 0,
        524, 523, 1, 0, 0, 0, 524, 525, 1, 0, 0, 0, 525, 527, 1, 0, 0, 0, 526, 528, 3, 206, 103,
        0, 527, 526, 1, 0, 0, 0, 527, 528, 1, 0, 0, 0, 528, 530, 1, 0, 0, 0, 529, 531, 3, 240,
        120, 0, 530, 529, 1, 0, 0, 0, 530, 531, 1, 0, 0, 0, 531, 29, 1, 0, 0, 0, 532, 533, 6, 15,
        -1, 0, 533, 597, 3, 2, 1, 0, 534, 535, 3, 150, 75, 0, 535, 537, 5, 78, 0, 0, 536, 538,
        3, 32, 16, 0, 537, 536, 1, 0, 0, 0, 537, 538, 1, 0, 0, 0, 538, 539, 1, 0, 0, 0, 539, 540,
        5, 79, 0, 0, 540, 597, 1, 0, 0, 0, 541, 542, 3, 358, 179, 0, 542, 544, 5, 78, 0, 0, 543,
        545, 3, 32, 16, 0, 544, 543, 1, 0, 0, 0, 544, 545, 1, 0, 0, 0, 545, 546, 1, 0, 0, 0, 546,
        547, 5, 79, 0, 0, 547, 597, 1, 0, 0, 0, 548, 549, 3, 150, 75, 0, 549, 550, 3, 282, 141,
        0, 550, 597, 1, 0, 0, 0, 551, 552, 3, 358, 179, 0, 552, 553, 3, 282, 141, 0, 553, 597,
        1, 0, 0, 0, 554, 555, 5, 24, 0, 0, 555, 556, 5, 95, 0, 0, 556, 557, 3, 252, 126, 0, 557,
        558, 5, 96, 0, 0, 558, 559, 5, 78, 0, 0, 559, 560, 3, 86, 43, 0, 560, 561, 5, 79, 0, 0,
        561, 597, 1, 0, 0, 0, 562, 563, 5, 58, 0, 0, 563, 564, 5, 95, 0, 0, 564, 565, 3, 252,
        126, 0, 565, 566, 5, 96, 0, 0, 566, 567, 5, 78, 0, 0, 567, 568, 3, 86, 43, 0, 568, 569,
        5, 79, 0, 0, 569, 597, 1, 0, 0, 0, 570, 571, 5, 51, 0, 0, 571, 572, 5, 95, 0, 0, 572, 573,
        3, 252, 126, 0, 573, 574, 5, 96, 0, 0, 574, 575, 5, 78, 0, 0, 575, 576, 3, 86, 43, 0,
        576, 577, 5, 79, 0, 0, 577, 597, 1, 0, 0, 0, 578, 579, 5, 17, 0, 0, 579, 580, 5, 95, 0,
        0, 580, 581, 3, 252, 126, 0, 581, 582, 5, 96, 0, 0, 582, 583, 5, 78, 0, 0, 583, 584,
        3, 86, 43, 0, 584, 585, 5, 79, 0, 0, 585, 597, 1, 0, 0, 0, 586, 587, 5, 68, 0, 0, 587,
        588, 5, 78, 0, 0, 588, 589, 3, 86, 43, 0, 589, 590, 5, 79, 0, 0, 590, 597, 1, 0, 0, 0,
        591, 592, 5, 68, 0, 0, 592, 593, 5, 78, 0, 0, 593, 594, 3, 252, 126, 0, 594, 595, 5,
        79, 0, 0, 595, 597, 1, 0, 0, 0, 596, 532, 1, 0, 0, 0, 596, 534, 1, 0, 0, 0, 596, 541, 1,
        0, 0, 0, 596, 548, 1, 0, 0, 0, 596, 551, 1, 0, 0, 0, 596, 554, 1, 0, 0, 0, 596, 562, 1,
        0, 0, 0, 596, 570, 1, 0, 0, 0, 596, 578, 1, 0, 0, 0, 596, 586, 1, 0, 0, 0, 596, 591, 1,
        0, 0, 0, 597, 638, 1, 0, 0, 0, 598, 599, 10, 19, 0, 0, 599, 600, 5, 80, 0, 0, 600, 601,
        3, 86, 43, 0, 601, 602, 5, 81, 0, 0, 602, 637, 1, 0, 0, 0, 603, 604, 10, 18, 0, 0, 604,
        605, 5, 80, 0, 0, 605, 606, 3, 282, 141, 0, 606, 607, 5, 81, 0, 0, 607, 637, 1, 0, 0,
        0, 608, 609, 10, 17, 0, 0, 609, 611, 5, 78, 0, 0, 610, 612, 3, 32, 16, 0, 611, 610, 1,
        0, 0, 0, 611, 612, 1, 0, 0, 0, 612, 613, 1, 0, 0, 0, 613, 637, 5, 79, 0, 0, 614, 615, 10,
        12, 0, 0, 615, 617, 5, 122, 0, 0, 616, 618, 5, 61, 0, 0, 617, 616, 1, 0, 0, 0, 617, 618,
        1, 0, 0, 0, 618, 619, 1, 0, 0, 0, 619, 637, 3, 4, 2, 0, 620, 621, 10, 11, 0, 0, 621, 623,
        5, 117, 0, 0, 622, 624, 5, 61, 0, 0, 623, 622, 1, 0, 0, 0, 623, 624, 1, 0, 0, 0, 624, 625,
        1, 0, 0, 0, 625, 637, 3, 4, 2, 0, 626, 627, 10, 10, 0, 0, 627, 628, 5, 122, 0, 0, 628,
        637, 3, 34, 17, 0, 629, 630, 10, 9, 0, 0, 630, 631, 5, 117, 0, 0, 631, 637, 3, 34, 17,
        0, 632, 633, 10, 8, 0, 0, 633, 637, 5, 113, 0, 0, 634, 635, 10, 7, 0, 0, 635, 637, 5,
        114, 0, 0, 636, 598, 1, 0, 0, 0, 636, 603, 1, 0, 0, 0, 636, 608, 1, 0, 0, 0, 636, 614,
        1, 0, 0, 0, 636, 620, 1, 0, 0, 0, 636, 626, 1, 0, 0, 0, 636, 629, 1, 0, 0, 0, 636, 632,
        1, 0, 0, 0, 636, 634, 1, 0, 0, 0, 637, 640, 1, 0, 0, 0, 638, 636, 1, 0, 0, 0, 638, 639,
        1, 0, 0, 0, 639, 31, 1, 0, 0, 0, 640, 638, 1, 0, 0, 0, 641, 642, 3, 280, 140, 0, 642, 33,
        1, 0, 0, 0, 643, 645, 3, 10, 5, 0, 644, 643, 1, 0, 0, 0, 644, 645, 1, 0, 0, 0, 645, 646,
        1, 0, 0, 0, 646, 647, 3, 152, 76, 0, 647, 648, 5, 120, 0, 0, 648, 649, 5, 92, 0, 0, 649,
        650, 3, 152, 76, 0, 650, 666, 1, 0, 0, 0, 651, 652, 3, 10, 5, 0, 652, 653, 5, 61, 0, 0,
        653, 654, 3, 348, 174, 0, 654, 655, 5, 120, 0, 0, 655, 656, 5, 92, 0, 0, 656, 657, 3,
        152, 76, 0, 657, 666, 1, 0, 0, 0, 658, 660, 3, 10, 5, 0, 659, 658, 1, 0, 0, 0, 659, 660,
        1, 0, 0, 0, 660, 661, 1, 0, 0, 0, 661, 662, 5, 92, 0, 0, 662, 666, 3, 152, 76, 0, 663,
        664, 5, 92, 0, 0, 664, 666, 3, 154, 77, 0, 665, 644, 1, 0, 0, 0, 665, 651, 1, 0, 0, 0,
        665, 659, 1, 0, 0, 0, 665, 663, 1, 0, 0, 0, 666, 35, 1, 0, 0, 0, 667, 696, 3, 30, 15, 0,
        668, 669, 5, 113, 0, 0, 669, 696, 3, 56, 28, 0, 670, 671, 5, 114, 0, 0, 671, 696, 3,
        56, 28, 0, 672, 673, 3, 38, 19, 0, 673, 674, 3, 56, 28, 0, 674, 696, 1, 0, 0, 0, 675,
        676, 5, 55, 0, 0, 676, 696, 3, 36, 18, 0, 677, 678, 5, 55, 0, 0, 678, 679, 5, 78, 0, 0,
        679, 680, 3, 252, 126, 0, 680, 681, 5, 79, 0, 0, 681, 696, 1, 0, 0, 0, 682, 683, 5, 55,
        0, 0, 683, 684, 5, 124, 0, 0, 684, 685, 5, 78, 0, 0, 685, 686, 5, 125, 0, 0, 686, 696,
        5, 79, 0, 0, 687, 688, 5, 4, 0, 0, 688, 689, 5, 78, 0, 0, 689, 690, 3, 252, 126, 0, 690,
        691, 5, 79, 0, 0, 691, 696, 1, 0, 0, 0, 692, 696, 3, 54, 27, 0, 693, 696, 3, 40, 20, 0,
        694, 696, 3, 52, 26, 0, 695, 667, 1, 0, 0, 0, 695, 668, 1, 0, 0, 0, 695, 670, 1, 0, 0,
        0, 695, 672, 1, 0, 0, 0, 695, 675, 1, 0, 0, 0, 695, 677, 1, 0, 0, 0, 695, 682, 1, 0, 0,
        0, 695, 687, 1, 0, 0, 0, 695, 692, 1, 0, 0, 0, 695, 693, 1, 0, 0, 0, 695, 694, 1, 0, 0,
        0, 696, 37, 1, 0, 0, 0, 697, 698, 7, 1, 0, 0, 698, 39, 1, 0, 0, 0, 699, 701, 5, 120, 0,
        0, 700, 699, 1, 0, 0, 0, 700, 701, 1, 0, 0, 0, 701, 702, 1, 0, 0, 0, 702, 704, 5, 42, 0,
        0, 703, 705, 3, 42, 21, 0, 704, 703, 1, 0, 0, 0, 704, 705, 1, 0, 0, 0, 705, 706, 1, 0,
        0, 0, 706, 708, 3, 44, 22, 0, 707, 709, 3, 50, 25, 0, 708, 707, 1, 0, 0, 0, 708, 709,
        1, 0, 0, 0, 709, 724, 1, 0, 0, 0, 710, 712, 5, 120, 0, 0, 711, 710, 1, 0, 0, 0, 711, 712,
        1, 0, 0, 0, 712, 713, 1, 0, 0, 0, 713, 715, 5, 42, 0, 0, 714, 716, 3, 42, 21, 0, 715, 714,
        1, 0, 0, 0, 715, 716, 1, 0, 0, 0, 716, 717, 1, 0, 0, 0, 717, 718, 5, 78, 0, 0, 718, 719,
        3, 252, 126, 0, 719, 721, 5, 79, 0, 0, 720, 722, 3, 50, 25, 0, 721, 720, 1, 0, 0, 0, 721,
        722, 1, 0, 0, 0, 722, 724, 1, 0, 0, 0, 723, 700, 1, 0, 0, 0, 723, 711, 1, 0, 0, 0, 724,
        41, 1, 0, 0, 0, 725, 726, 5, 78, 0, 0, 726, 727, 3, 32, 16, 0, 727, 728, 5, 79, 0, 0, 728,
        43, 1, 0, 0, 0, 729, 731, 3, 146, 73, 0, 730, 732, 3, 46, 23, 0, 731, 730, 1, 0, 0, 0,
        731, 732, 1, 0, 0, 0, 732, 45, 1, 0, 0, 0, 733, 735, 3, 242, 121, 0, 734, 736, 3, 46,
        23, 0, 735, 734, 1, 0, 0, 0, 735, 736, 1, 0, 0, 0, 736, 739, 1, 0, 0, 0, 737, 739, 3, 48,
        24, 0, 738, 733, 1, 0, 0, 0, 738, 737, 1, 0, 0, 0, 739, 47, 1, 0, 0, 0, 740, 741, 6, 24,
        -1, 0, 741, 742, 5, 80, 0, 0, 742, 743, 3, 86, 43, 0, 743, 745, 5, 81, 0, 0, 744, 746,
        3, 206, 103, 0, 745, 744, 1, 0, 0, 0, 745, 746, 1, 0, 0, 0, 746, 756, 1, 0, 0, 0, 747,
        748, 10, 1, 0, 0, 748, 749, 5, 80, 0, 0, 749, 750, 3, 88, 44, 0, 750, 752, 5, 81, 0, 0,
        751, 753, 3, 206, 103, 0, 752, 751, 1, 0, 0, 0, 752, 753, 1, 0, 0, 0, 753, 755, 1, 0,
        0, 0, 754, 747, 1, 0, 0, 0, 755, 758, 1, 0, 0, 0, 756, 754, 1, 0, 0, 0, 756, 757, 1, 0,
        0, 0, 757, 49, 1, 0, 0, 0, 758, 756, 1, 0, 0, 0, 759, 761, 5, 78, 0, 0, 760, 762, 3, 32,
        16, 0, 761, 760, 1, 0, 0, 0, 761, 762, 1, 0, 0, 0, 762, 763, 1, 0, 0, 0, 763, 766, 5, 79,
        0, 0, 764, 766, 3, 282, 141, 0, 765, 759, 1, 0, 0, 0, 765, 764, 1, 0, 0, 0, 766, 51, 1,
        0, 0, 0, 767, 769, 5, 120, 0, 0, 768, 767, 1, 0, 0, 0, 768, 769, 1, 0, 0, 0, 769, 770,
        1, 0, 0, 0, 770, 771, 5, 21, 0, 0, 771, 780, 3, 56, 28, 0, 772, 774, 5, 120, 0, 0, 773,
        772, 1, 0, 0, 0, 773, 774, 1, 0, 0, 0, 774, 775, 1, 0, 0, 0, 775, 776, 5, 21, 0, 0, 776,
        777, 5, 80, 0, 0, 777, 778, 5, 81, 0, 0, 778, 780, 3, 56, 28, 0, 779, 768, 1, 0, 0, 0,
        779, 773, 1, 0, 0, 0, 780, 53, 1, 0, 0, 0, 781, 782, 5, 43, 0, 0, 782, 783, 5, 78, 0, 0,
        783, 784, 3, 86, 43, 0, 784, 785, 5, 79, 0, 0, 785, 55, 1, 0, 0, 0, 786, 793, 3, 36, 18,
        0, 787, 788, 5, 78, 0, 0, 788, 789, 3, 252, 126, 0, 789, 790, 5, 79, 0, 0, 790, 791,
        3, 56, 28, 0, 791, 793, 1, 0, 0, 0, 792, 786, 1, 0, 0, 0, 792, 787, 1, 0, 0, 0, 793, 57,
        1, 0, 0, 0, 794, 795, 6, 29, -1, 0, 795, 796, 3, 56, 28, 0, 796, 805, 1, 0, 0, 0, 797,
        798, 10, 2, 0, 0, 798, 799, 5, 123, 0, 0, 799, 804, 3, 56, 28, 0, 800, 801, 10, 1, 0,
        0, 801, 802, 5, 116, 0, 0, 802, 804, 3, 56, 28, 0, 803, 797, 1, 0, 0, 0, 803, 800, 1,
        0, 0, 0, 804, 807, 1, 0, 0, 0, 805, 803, 1, 0, 0, 0, 805, 806, 1, 0, 0, 0, 806, 59, 1, 0,
        0, 0, 807, 805, 1, 0, 0, 0, 808, 809, 6, 30, -1, 0, 809, 810, 3, 58, 29, 0, 810, 822,
        1, 0, 0, 0, 811, 812, 10, 3, 0, 0, 812, 813, 5, 86, 0, 0, 813, 821, 3, 58, 29, 0, 814,
        815, 10, 2, 0, 0, 815, 816, 5, 87, 0, 0, 816, 821, 3, 58, 29, 0, 817, 818, 10, 1, 0, 0,
        818, 819, 5, 88, 0, 0, 819, 821, 3, 58, 29, 0, 820, 811, 1, 0, 0, 0, 820, 814, 1, 0, 0,
        0, 820, 817, 1, 0, 0, 0, 821, 824, 1, 0, 0, 0, 822, 820, 1, 0, 0, 0, 822, 823, 1, 0, 0,
        0, 823, 61, 1, 0, 0, 0, 824, 822, 1, 0, 0, 0, 825, 826, 6, 31, -1, 0, 826, 827, 3, 60,
        30, 0, 827, 836, 1, 0, 0, 0, 828, 829, 10, 2, 0, 0, 829, 830, 5, 84, 0, 0, 830, 835, 3,
        60, 30, 0, 831, 832, 10, 1, 0, 0, 832, 833, 5, 85, 0, 0, 833, 835, 3, 60, 30, 0, 834,
        828, 1, 0, 0, 0, 834, 831, 1, 0, 0, 0, 835, 838, 1, 0, 0, 0, 836, 834, 1, 0, 0, 0, 836,
        837, 1, 0, 0, 0, 837, 63, 1, 0, 0, 0, 838, 836, 1, 0, 0, 0, 839, 840, 6, 32, -1, 0, 840,
        841, 3, 62, 31, 0, 841, 851, 1, 0, 0, 0, 842, 843, 10, 2, 0, 0, 843, 844, 5, 105, 0, 0,
        844, 850, 3, 62, 31, 0, 845, 846, 10, 1, 0, 0, 846, 847, 3, 384, 192, 0, 847, 848, 3,
        62, 31, 0, 848, 850, 1, 0, 0, 0, 849, 842, 1, 0, 0, 0, 849, 845, 1, 0, 0, 0, 850, 853,
        1, 0, 0, 0, 851, 849, 1, 0, 0, 0, 851, 852, 1, 0, 0, 0, 852, 65, 1, 0, 0, 0, 853, 851, 1,
        0, 0, 0, 854, 855, 6, 33, -1, 0, 855, 856, 3, 64, 32, 0, 856, 871, 1, 0, 0, 0, 857, 858,
        10, 4, 0, 0, 858, 859, 5, 95, 0, 0, 859, 870, 3, 64, 32, 0, 860, 861, 10, 3, 0, 0, 861,
        862, 5, 96, 0, 0, 862, 870, 3, 64, 32, 0, 863, 864, 10, 2, 0, 0, 864, 865, 5, 109, 0,
        0, 865, 870, 3, 64, 32, 0, 866, 867, 10, 1, 0, 0, 867, 868, 5, 110, 0, 0, 868, 870, 3,
        64, 32, 0, 869, 857, 1, 0, 0, 0, 869, 860, 1, 0, 0, 0, 869, 863, 1, 0, 0, 0, 869, 866,
        1, 0, 0, 0, 870, 873, 1, 0, 0, 0, 871, 869, 1, 0, 0, 0, 871, 872, 1, 0, 0, 0, 872, 67, 1,
        0, 0, 0, 873, 871, 1, 0, 0, 0, 874, 875, 6, 34, -1, 0, 875, 876, 3, 66, 33, 0, 876, 885,
        1, 0, 0, 0, 877, 878, 10, 2, 0, 0, 878, 879, 5, 107, 0, 0, 879, 884, 3, 66, 33, 0, 880,
        881, 10, 1, 0, 0, 881, 882, 5, 108, 0, 0, 882, 884, 3, 66, 33, 0, 883, 877, 1, 0, 0, 0,
        883, 880, 1, 0, 0, 0, 884, 887, 1, 0, 0, 0, 885, 883, 1, 0, 0, 0, 885, 886, 1, 0, 0, 0,
        886, 69, 1, 0, 0, 0, 887, 885, 1, 0, 0, 0, 888, 889, 6, 35, -1, 0, 889, 890, 3, 68, 34,
        0, 890, 896, 1, 0, 0, 0, 891, 892, 10, 1, 0, 0, 892, 893, 5, 90, 0, 0, 893, 895, 3, 68,
        34, 0, 894, 891, 1, 0, 0, 0, 895, 898, 1, 0, 0, 0, 896, 894, 1, 0, 0, 0, 896, 897, 1, 0,
        0, 0, 897, 71, 1, 0, 0, 0, 898, 896, 1, 0, 0, 0, 899, 900, 6, 36, -1, 0, 900, 901, 3, 70,
        35, 0, 901, 907, 1, 0, 0, 0, 902, 903, 10, 1, 0, 0, 903, 904, 5, 89, 0, 0, 904, 906, 3,
        70, 35, 0, 905, 902, 1, 0, 0, 0, 906, 909, 1, 0, 0, 0, 907, 905, 1, 0, 0, 0, 907, 908,
        1, 0, 0, 0, 908, 73, 1, 0, 0, 0, 909, 907, 1, 0, 0, 0, 910, 911, 6, 37, -1, 0, 911, 912,
        3, 72, 36, 0, 912, 918, 1, 0, 0, 0, 913, 914, 10, 1, 0, 0, 914, 915, 5, 91, 0, 0, 915,
        917, 3, 72, 36, 0, 916, 913, 1, 0, 0, 0, 917, 920, 1, 0, 0, 0, 918, 916, 1, 0, 0, 0, 918,
        919, 1, 0, 0, 0, 919, 75, 1, 0, 0, 0, 920, 918, 1, 0, 0, 0, 921, 922, 6, 38, -1, 0, 922,
        923, 3, 74, 37, 0, 923, 929, 1, 0, 0, 0, 924, 925, 10, 1, 0, 0, 925, 926, 5, 111, 0, 0,
        926, 928, 3, 74, 37, 0, 927, 924, 1, 0, 0, 0, 928, 931, 1, 0, 0, 0, 929, 927, 1, 0, 0,
        0, 929, 930, 1, 0, 0, 0, 930, 77, 1, 0, 0, 0, 931, 929, 1, 0, 0, 0, 932, 933, 6, 39, -1,
        0, 933, 934, 3, 76, 38, 0, 934, 940, 1, 0, 0, 0, 935, 936, 10, 1, 0, 0, 936, 937, 5, 112,
        0, 0, 937, 939, 3, 76, 38, 0, 938, 935, 1, 0, 0, 0, 939, 942, 1, 0, 0, 0, 940, 938, 1,
        0, 0, 0, 940, 941, 1, 0, 0, 0, 941, 79, 1, 0, 0, 0, 942, 940, 1, 0, 0, 0, 943, 951, 3, 78,
        39, 0, 944, 945, 3, 78, 39, 0, 945, 946, 5, 118, 0, 0, 946, 947, 3, 86, 43, 0, 947, 948,
        5, 119, 0, 0, 948, 949, 3, 82, 41, 0, 949, 951, 1, 0, 0, 0, 950, 943, 1, 0, 0, 0, 950,
        944, 1, 0, 0, 0, 951, 81, 1, 0, 0, 0, 952, 959, 3, 80, 40, 0, 953, 954, 3, 78, 39, 0, 954,
        955, 3, 84, 42, 0, 955, 956, 3, 278, 139, 0, 956, 959, 1, 0, 0, 0, 957, 959, 3, 374,
        187, 0, 958, 952, 1, 0, 0, 0, 958, 953, 1, 0, 0, 0, 958, 957, 1, 0, 0, 0, 959, 83, 1, 0,
        0, 0, 960, 972, 5, 94, 0, 0, 961, 972, 5, 99, 0, 0, 962, 972, 5, 100, 0, 0, 963, 972,
        5, 101, 0, 0, 964, 972, 5, 97, 0, 0, 965, 972, 5, 98, 0, 0, 966, 972, 3, 386, 193, 0,
        967, 972, 5, 106, 0, 0, 968, 972, 5, 103, 0, 0, 969, 972, 5, 102, 0, 0, 970, 972, 5,
        104, 0, 0, 971, 960, 1, 0, 0, 0, 971, 961, 1, 0, 0, 0, 971, 962, 1, 0, 0, 0, 971, 963,
        1, 0, 0, 0, 971, 964, 1, 0, 0, 0, 971, 965, 1, 0, 0, 0, 971, 966, 1, 0, 0, 0, 971, 967,
        1, 0, 0, 0, 971, 968, 1, 0, 0, 0, 971, 969, 1, 0, 0, 0, 971, 970, 1, 0, 0, 0, 972, 85, 1,
        0, 0, 0, 973, 974, 6, 43, -1, 0, 974, 975, 3, 82, 41, 0, 975, 981, 1, 0, 0, 0, 976, 977,
        10, 1, 0, 0, 977, 978, 5, 115, 0, 0, 978, 980, 3, 82, 41, 0, 979, 976, 1, 0, 0, 0, 980,
        983, 1, 0, 0, 0, 981, 979, 1, 0, 0, 0, 981, 982, 1, 0, 0, 0, 982, 87, 1, 0, 0, 0, 983, 981,
        1, 0, 0, 0, 984, 985, 3, 80, 40, 0, 985, 89, 1, 0, 0, 0, 986, 1013, 3, 92, 46, 0, 987,
        989, 3, 206, 103, 0, 988, 987, 1, 0, 0, 0, 988, 989, 1, 0, 0, 0, 989, 990, 1, 0, 0, 0,
        990, 1013, 3, 94, 47, 0, 991, 993, 3, 206, 103, 0, 992, 991, 1, 0, 0, 0, 992, 993, 1,
        0, 0, 0, 993, 994, 1, 0, 0, 0, 994, 1013, 3, 96, 48, 0, 995, 997, 3, 206, 103, 0, 996,
        995, 1, 0, 0, 0, 996, 997, 1, 0, 0, 0, 997, 998, 1, 0, 0, 0, 998, 1013, 3, 100, 50, 0,
        999, 1001, 3, 206, 103, 0, 1000, 999, 1, 0, 0, 0, 1000, 1001, 1, 0, 0, 0, 1001, 1002,
        1, 0, 0, 0, 1002, 1013, 3, 104, 52, 0, 1003, 1005, 3, 206, 103, 0, 1004, 1003, 1, 0,
        0, 0, 1004, 1005, 1, 0, 0, 0, 1005, 1006, 1, 0, 0, 0, 1006, 1013, 3, 112, 56, 0, 1007,
        1013, 3, 114, 57, 0, 1008, 1010, 3, 206, 103, 0, 1009, 1008, 1, 0, 0, 0, 1009, 1010,
        1, 0, 0, 0, 1010, 1011, 1, 0, 0, 0, 1011, 1013, 3, 364, 182, 0, 1012, 986, 1, 0, 0, 0,
        1012, 988, 1, 0, 0, 0, 1012, 992, 1, 0, 0, 0, 1012, 996, 1, 0, 0, 0, 1012, 1000, 1, 0,
        0, 0, 1012, 1004, 1, 0, 0, 0, 1012, 1007, 1, 0, 0, 0, 1012, 1009, 1, 0, 0, 0, 1013, 91,
        1, 0, 0, 0, 1014, 1016, 3, 206, 103, 0, 1015, 1014, 1, 0, 0, 0, 1015, 1016, 1, 0, 0,
        0, 1016, 1017, 1, 0, 0, 0, 1017, 1018, 5, 125, 0, 0, 1018, 1019, 5, 119, 0, 0, 1019,
        1035, 3, 90, 45, 0, 1020, 1022, 3, 206, 103, 0, 1021, 1020, 1, 0, 0, 0, 1021, 1022,
        1, 0, 0, 0, 1022, 1023, 1, 0, 0, 0, 1023, 1024, 5, 9, 0, 0, 1024, 1025, 3, 88, 44, 0,
        1025, 1026, 5, 119, 0, 0, 1026, 1027, 3, 90, 45, 0, 1027, 1035, 1, 0, 0, 0, 1028, 1030,
        3, 206, 103, 0, 1029, 1028, 1, 0, 0, 0, 1029, 1030, 1, 0, 0, 0, 1030, 1031, 1, 0, 0,
        0, 1031, 1032, 5, 20, 0, 0, 1032, 1033, 5, 119, 0, 0, 1033, 1035, 3, 90, 45, 0, 1034,
        1015, 1, 0, 0, 0, 1034, 1021, 1, 0, 0, 0, 1034, 1029, 1, 0, 0, 0, 1035, 93, 1, 0, 0, 0,
        1036, 1038, 3, 86, 43, 0, 1037, 1036, 1, 0, 0, 0, 1037, 1038, 1, 0, 0, 0, 1038, 1039,
        1, 0, 0, 0, 1039, 1040, 5, 121, 0, 0, 1040, 95, 1, 0, 0, 0, 1041, 1043, 5, 82, 0, 0, 1042,
        1044, 3, 98, 49, 0, 1043, 1042, 1, 0, 0, 0, 1043, 1044, 1, 0, 0, 0, 1044, 1045, 1, 0,
        0, 0, 1045, 1046, 5, 83, 0, 0, 1046, 97, 1, 0, 0, 0, 1047, 1048, 6, 49, -1, 0, 1048,
        1049, 3, 90, 45, 0, 1049, 1054, 1, 0, 0, 0, 1050, 1051, 10, 1, 0, 0, 1051, 1053, 3,
        90, 45, 0, 1052, 1050, 1, 0, 0, 0, 1053, 1056, 1, 0, 0, 0, 1054, 1052, 1, 0, 0, 0, 1054,
        1055, 1, 0, 0, 0, 1055, 99, 1, 0, 0, 0, 1056, 1054, 1, 0, 0, 0, 1057, 1058, 5, 36, 0,
        0, 1058, 1059, 5, 78, 0, 0, 1059, 1060, 3, 102, 51, 0, 1060, 1061, 5, 79, 0, 0, 1061,
        1062, 3, 90, 45, 0, 1062, 1078, 1, 0, 0, 0, 1063, 1064, 5, 36, 0, 0, 1064, 1065, 5,
        78, 0, 0, 1065, 1066, 3, 102, 51, 0, 1066, 1067, 5, 79, 0, 0, 1067, 1068, 3, 90, 45,
        0, 1068, 1069, 5, 25, 0, 0, 1069, 1070, 3, 90, 45, 0, 1070, 1078, 1, 0, 0, 0, 1071,
        1072, 5, 60, 0, 0, 1072, 1073, 5, 78, 0, 0, 1073, 1074, 3, 102, 51, 0, 1074, 1075,
        5, 79, 0, 0, 1075, 1076, 3, 90, 45, 0, 1076, 1078, 1, 0, 0, 0, 1077, 1057, 1, 0, 0, 0,
        1077, 1063, 1, 0, 0, 0, 1077, 1071, 1, 0, 0, 0, 1078, 101, 1, 0, 0, 0, 1079, 1096, 3,
        86, 43, 0, 1080, 1082, 3, 206, 103, 0, 1081, 1080, 1, 0, 0, 0, 1081, 1082, 1, 0, 0,
        0, 1082, 1083, 1, 0, 0, 0, 1083, 1084, 3, 134, 67, 0, 1084, 1085, 3, 232, 116, 0, 1085,
        1086, 5, 94, 0, 0, 1086, 1087, 3, 278, 139, 0, 1087, 1096, 1, 0, 0, 0, 1088, 1090,
        3, 206, 103, 0, 1089, 1088, 1, 0, 0, 0, 1089, 1090, 1, 0, 0, 0, 1090, 1091, 1, 0, 0,
        0, 1091, 1092, 3, 134, 67, 0, 1092, 1093, 3, 232, 116, 0, 1093, 1094, 3, 282, 141,
        0, 1094, 1096, 1, 0, 0, 0, 1095, 1079, 1, 0, 0, 0, 1095, 1081, 1, 0, 0, 0, 1095, 1089,
        1, 0, 0, 0, 1096, 103, 1, 0, 0, 0, 1097, 1098, 5, 77, 0, 0, 1098, 1099, 5, 78, 0, 0, 1099,
        1100, 3, 102, 51, 0, 1100, 1101, 5, 79, 0, 0, 1101, 1102, 3, 90, 45, 0, 1102, 1133,
        1, 0, 0, 0, 1103, 1104, 5, 22, 0, 0, 1104, 1105, 3, 90, 45, 0, 1105, 1106, 5, 77, 0,
        0, 1106, 1107, 5, 78, 0, 0, 1107, 1108, 3, 86, 43, 0, 1108, 1109, 5, 79, 0, 0, 1109,
        1110, 5, 121, 0, 0, 1110, 1133, 1, 0, 0, 0, 1111, 1112, 5, 33, 0, 0, 1112, 1113, 5,
        78, 0, 0, 1113, 1115, 3, 106, 53, 0, 1114, 1116, 3, 102, 51, 0, 1115, 1114, 1, 0, 0,
        0, 1115, 1116, 1, 0, 0, 0, 1116, 1117, 1, 0, 0, 0, 1117, 1119, 5, 121, 0, 0, 1118, 1120,
        3, 86, 43, 0, 1119, 1118, 1, 0, 0, 0, 1119, 1120, 1, 0, 0, 0, 1120, 1121, 1, 0, 0, 0,
        1121, 1122, 5, 79, 0, 0, 1122, 1123, 3, 90, 45, 0, 1123, 1133, 1, 0, 0, 0, 1124, 1125,
        5, 33, 0, 0, 1125, 1126, 5, 78, 0, 0, 1126, 1127, 3, 108, 54, 0, 1127, 1128, 5, 119,
        0, 0, 1128, 1129, 3, 110, 55, 0, 1129, 1130, 5, 79, 0, 0, 1130, 1131, 3, 90, 45, 0,
        1131, 1133, 1, 0, 0, 0, 1132, 1097, 1, 0, 0, 0, 1132, 1103, 1, 0, 0, 0, 1132, 1111,
        1, 0, 0, 0, 1132, 1124, 1, 0, 0, 0, 1133, 105, 1, 0, 0, 0, 1134, 1137, 3, 94, 47, 0, 1135,
        1137, 3, 124, 62, 0, 1136, 1134, 1, 0, 0, 0, 1136, 1135, 1, 0, 0, 0, 1137, 107, 1, 0,
        0, 0, 1138, 1140, 3, 206, 103, 0, 1139, 1138, 1, 0, 0, 0, 1139, 1140, 1, 0, 0, 0, 1140,
        1141, 1, 0, 0, 0, 1141, 1142, 3, 134, 67, 0, 1142, 1143, 3, 232, 116, 0, 1143, 109,
        1, 0, 0, 0, 1144, 1147, 3, 86, 43, 0, 1145, 1147, 3, 282, 141, 0, 1146, 1144, 1, 0,
        0, 0, 1146, 1145, 1, 0, 0, 0, 1147, 111, 1, 0, 0, 0, 1148, 1149, 5, 8, 0, 0, 1149, 1165,
        5, 121, 0, 0, 1150, 1151, 5, 18, 0, 0, 1151, 1165, 5, 121, 0, 0, 1152, 1154, 5, 52,
        0, 0, 1153, 1155, 3, 86, 43, 0, 1154, 1153, 1, 0, 0, 0, 1154, 1155, 1, 0, 0, 0, 1155,
        1156, 1, 0, 0, 0, 1156, 1165, 5, 121, 0, 0, 1157, 1158, 5, 52, 0, 0, 1158, 1159, 3,
        282, 141, 0, 1159, 1160, 5, 121, 0, 0, 1160, 1165, 1, 0, 0, 0, 1161, 1162, 5, 35, 0,
        0, 1162, 1163, 5, 125, 0, 0, 1163, 1165, 5, 121, 0, 0, 1164, 1148, 1, 0, 0, 0, 1164,
        1150, 1, 0, 0, 0, 1164, 1152, 1, 0, 0, 0, 1164, 1157, 1, 0, 0, 0, 1164, 1161, 1, 0, 0,
        0, 1165, 113, 1, 0, 0, 0, 1166, 1167, 3, 120, 60, 0, 1167, 115, 1, 0, 0, 0, 1168, 1169,
        6, 58, -1, 0, 1169, 1170, 3, 118, 59, 0, 1170, 1175, 1, 0, 0, 0, 1171, 1172, 10, 1,
        0, 0, 1172, 1174, 3, 118, 59, 0, 1173, 1171, 1, 0, 0, 0, 1174, 1177, 1, 0, 0, 0, 1175,
        1173, 1, 0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 117, 1, 0, 0, 0, 1177, 1175, 1, 0, 0,
        0, 1178, 1188, 3, 120, 60, 0, 1179, 1188, 3, 270, 135, 0, 1180, 1188, 3, 340, 170,
        0, 1181, 1188, 3, 360, 180, 0, 1182, 1188, 3, 362, 181, 0, 1183, 1188, 3, 204, 102,
        0, 1184, 1188, 3, 180, 90, 0, 1185, 1188, 3, 128, 64, 0, 1186, 1188, 3, 130, 65, 0,
        1187, 1178, 1, 0, 0, 0, 1187, 1179, 1, 0, 0, 0, 1187, 1180, 1, 0, 0, 0, 1187, 1181,
        1, 0, 0, 0, 1187, 1182, 1, 0, 0, 0, 1187, 1183, 1, 0, 0, 0, 1187, 1184, 1, 0, 0, 0, 1187,
        1185, 1, 0, 0, 0, 1187, 1186, 1, 0, 0, 0, 1188, 119, 1, 0, 0, 0, 1189, 1198, 3, 124,
        62, 0, 1190, 1198, 3, 202, 101, 0, 1191, 1198, 3, 194, 97, 0, 1192, 1198, 3, 198,
        99, 0, 1193, 1198, 3, 200, 100, 0, 1194, 1198, 3, 126, 63, 0, 1195, 1198, 3, 122,
        61, 0, 1196, 1198, 3, 164, 82, 0, 1197, 1189, 1, 0, 0, 0, 1197, 1190, 1, 0, 0, 0, 1197,
        1191, 1, 0, 0, 0, 1197, 1192, 1, 0, 0, 0, 1197, 1193, 1, 0, 0, 0, 1197, 1194, 1, 0, 0,
        0, 1197, 1195, 1, 0, 0, 0, 1197, 1196, 1, 0, 0, 0, 1198, 121, 1, 0, 0, 0, 1199, 1200,
        5, 72, 0, 0, 1200, 1202, 5, 125, 0, 0, 1201, 1203, 3, 206, 103, 0, 1202, 1201, 1, 0,
        0, 0, 1202, 1203, 1, 0, 0, 0, 1203, 1204, 1, 0, 0, 0, 1204, 1205, 5, 94, 0, 0, 1205,
        1206, 3, 252, 126, 0, 1206, 1207, 5, 121, 0, 0, 1207, 123, 1, 0, 0, 0, 1208, 1210,
        3, 134, 67, 0, 1209, 1208, 1, 0, 0, 0, 1209, 1210, 1, 0, 0, 0, 1210, 1212, 1, 0, 0, 0,
        1211, 1213, 3, 228, 114, 0, 1212, 1211, 1, 0, 0, 0, 1212, 1213, 1, 0, 0, 0, 1213, 1214,
        1, 0, 0, 0, 1214, 1223, 5, 121, 0, 0, 1215, 1217, 3, 206, 103, 0, 1216, 1218, 3, 134,
        67, 0, 1217, 1216, 1, 0, 0, 0, 1217, 1218, 1, 0, 0, 0, 1218, 1219, 1, 0, 0, 0, 1219,
        1220, 3, 228, 114, 0, 1220, 1221, 5, 121, 0, 0, 1221, 1223, 1, 0, 0, 0, 1222, 1209,
        1, 0, 0, 0, 1222, 1215, 1, 0, 0, 0, 1223, 125, 1, 0, 0, 0, 1224, 1225, 5, 57, 0, 0, 1225,
        1226, 5, 78, 0, 0, 1226, 1227, 3, 88, 44, 0, 1227, 1228, 5, 115, 0, 0, 1228, 1229,
        5, 134, 0, 0, 1229, 1230, 5, 79, 0, 0, 1230, 1231, 5, 121, 0, 0, 1231, 127, 1, 0, 0,
        0, 1232, 1233, 5, 121, 0, 0, 1233, 129, 1, 0, 0, 0, 1234, 1235, 3, 206, 103, 0, 1235,
        1236, 5, 121, 0, 0, 1236, 131, 1, 0, 0, 0, 1237, 1244, 3, 136, 68, 0, 1238, 1244, 3,
        142, 71, 0, 1239, 1244, 3, 138, 69, 0, 1240, 1244, 5, 34, 0, 0, 1241, 1244, 5, 67,
        0, 0, 1242, 1244, 5, 16, 0, 0, 1243, 1237, 1, 0, 0, 0, 1243, 1238, 1, 0, 0, 0, 1243,
        1239, 1, 0, 0, 0, 1243, 1240, 1, 0, 0, 0, 1243, 1241, 1, 0, 0, 0, 1243, 1242, 1, 0, 0,
        0, 1244, 133, 1, 0, 0, 0, 1245, 1247, 3, 132, 66, 0, 1246, 1248, 3, 206, 103, 0, 1247,
        1246, 1, 0, 0, 0, 1247, 1248, 1, 0, 0, 0, 1248, 1253, 1, 0, 0, 0, 1249, 1250, 3, 132,
        66, 0, 1250, 1251, 3, 134, 67, 0, 1251, 1253, 1, 0, 0, 0, 1252, 1245, 1, 0, 0, 0, 1252,
        1249, 1, 0, 0, 0, 1253, 135, 1, 0, 0, 0, 1254, 1255, 7, 2, 0, 0, 1255, 137, 1, 0, 0, 0,
        1256, 1257, 7, 3, 0, 0, 1257, 139, 1, 0, 0, 0, 1258, 1259, 5, 125, 0, 0, 1259, 141,
        1, 0, 0, 0, 1260, 1264, 3, 144, 72, 0, 1261, 1264, 3, 286, 143, 0, 1262, 1264, 3, 160,
        80, 0, 1263, 1260, 1, 0, 0, 0, 1263, 1261, 1, 0, 0, 0, 1263, 1262, 1, 0, 0, 0, 1264,
        143, 1, 0, 0, 0, 1265, 1270, 3, 150, 75, 0, 1266, 1270, 3, 156, 78, 0, 1267, 1270,
        3, 358, 179, 0, 1268, 1270, 3, 246, 123, 0, 1269, 1265, 1, 0, 0, 0, 1269, 1266, 1,
        0, 0, 0, 1269, 1267, 1, 0, 0, 0, 1269, 1268, 1, 0, 0, 0, 1270, 145, 1, 0, 0, 0, 1271,
        1273, 3, 142, 71, 0, 1272, 1274, 3, 206, 103, 0, 1273, 1272, 1, 0, 0, 0, 1273, 1274,
        1, 0, 0, 0, 1274, 1279, 1, 0, 0, 0, 1275, 1276, 3, 142, 71, 0, 1276, 1277, 3, 146, 73,
        0, 1277, 1279, 1, 0, 0, 0, 1278, 1271, 1, 0, 0, 0, 1278, 1275, 1, 0, 0, 0, 1279, 147,
        1, 0, 0, 0, 1280, 1282, 3, 144, 72, 0, 1281, 1283, 3, 206, 103, 0, 1282, 1281, 1, 0,
        0, 0, 1282, 1283, 1, 0, 0, 0, 1283, 1288, 1, 0, 0, 0, 1284, 1285, 3, 144, 72, 0, 1285,
        1286, 3, 148, 74, 0, 1286, 1288, 1, 0, 0, 0, 1287, 1280, 1, 0, 0, 0, 1287, 1284, 1,
        0, 0, 0, 1288, 149, 1, 0, 0, 0, 1289, 1291, 3, 10, 5, 0, 1290, 1289, 1, 0, 0, 0, 1290,
        1291, 1, 0, 0, 0, 1291, 1292, 1, 0, 0, 0, 1292, 1313, 3, 152, 76, 0, 1293, 1294, 3,
        10, 5, 0, 1294, 1295, 5, 61, 0, 0, 1295, 1296, 3, 348, 174, 0, 1296, 1313, 1, 0, 0,
        0, 1297, 1313, 5, 11, 0, 0, 1298, 1313, 5, 12, 0, 0, 1299, 1313, 5, 13, 0, 0, 1300,
        1313, 5, 76, 0, 0, 1301, 1313, 5, 7, 0, 0, 1302, 1313, 5, 53, 0, 0, 1303, 1313, 5, 38,
        0, 0, 1304, 1313, 5, 39, 0, 0, 1305, 1313, 5, 54, 0, 0, 1306, 1313, 5, 71, 0, 0, 1307,
        1313, 5, 32, 0, 0, 1308, 1313, 5, 23, 0, 0, 1309, 1313, 5, 74, 0, 0, 1310, 1313, 5,
        6, 0, 0, 1311, 1313, 3, 154, 77, 0, 1312, 1290, 1, 0, 0, 0, 1312, 1293, 1, 0, 0, 0, 1312,
        1297, 1, 0, 0, 0, 1312, 1298, 1, 0, 0, 0, 1312, 1299, 1, 0, 0, 0, 1312, 1300, 1, 0, 0,
        0, 1312, 1301, 1, 0, 0, 0, 1312, 1302, 1, 0, 0, 0, 1312, 1303, 1, 0, 0, 0, 1312, 1304,
        1, 0, 0, 0, 1312, 1305, 1, 0, 0, 0, 1312, 1306, 1, 0, 0, 0, 1312, 1307, 1, 0, 0, 0, 1312,
        1308, 1, 0, 0, 0, 1312, 1309, 1, 0, 0, 0, 1312, 1310, 1, 0, 0, 0, 1312, 1311, 1, 0, 0,
        0, 1313, 151, 1, 0, 0, 0, 1314, 1319, 3, 284, 142, 0, 1315, 1319, 3, 158, 79, 0, 1316,
        1319, 3, 140, 70, 0, 1317, 1319, 3, 348, 174, 0, 1318, 1314, 1, 0, 0, 0, 1318, 1315,
        1, 0, 0, 0, 1318, 1316, 1, 0, 0, 0, 1318, 1317, 1, 0, 0, 0, 1319, 153, 1, 0, 0, 0, 1320,
        1321, 5, 19, 0, 0, 1321, 1322, 5, 78, 0, 0, 1322, 1323, 3, 86, 43, 0, 1323, 1324, 5,
        79, 0, 0, 1324, 1330, 1, 0, 0, 0, 1325, 1326, 5, 19, 0, 0, 1326, 1327, 5, 78, 0, 0, 1327,
        1328, 5, 6, 0, 0, 1328, 1330, 5, 79, 0, 0, 1329, 1320, 1, 0, 0, 0, 1329, 1325, 1, 0,
        0, 0, 1330, 155, 1, 0, 0, 0, 1331, 1333, 3, 294, 147, 0, 1332, 1334, 3, 206, 103, 0,
        1333, 1332, 1, 0, 0, 0, 1333, 1334, 1, 0, 0, 0, 1334, 1336, 1, 0, 0, 0, 1335, 1337,
        3, 10, 5, 0, 1336, 1335, 1, 0, 0, 0, 1336, 1337, 1, 0, 0, 0, 1337, 1338, 1, 0, 0, 0, 1338,
        1339, 5, 125, 0, 0, 1339, 1356, 1, 0, 0, 0, 1340, 1341, 3, 294, 147, 0, 1341, 1342,
        3, 348, 174, 0, 1342, 1356, 1, 0, 0, 0, 1343, 1344, 3, 294, 147, 0, 1344, 1346, 3,
        10, 5, 0, 1345, 1347, 5, 61, 0, 0, 1346, 1345, 1, 0, 0, 0, 1346, 1347, 1, 0, 0, 0, 1347,
        1348, 1, 0, 0, 0, 1348, 1349, 3, 348, 174, 0, 1349, 1356, 1, 0, 0, 0, 1350, 1352, 5,
        26, 0, 0, 1351, 1353, 3, 10, 5, 0, 1352, 1351, 1, 0, 0, 0, 1352, 1353, 1, 0, 0, 0, 1353,
        1354, 1, 0, 0, 0, 1354, 1356, 5, 125, 0, 0, 1355, 1331, 1, 0, 0, 0, 1355, 1340, 1, 0,
        0, 0, 1355, 1343, 1, 0, 0, 0, 1355, 1350, 1, 0, 0, 0, 1356, 157, 1, 0, 0, 0, 1357, 1358,
        5, 125, 0, 0, 1358, 159, 1, 0, 0, 0, 1359, 1360, 3, 162, 81, 0, 1360, 1362, 5, 82, 0,
        0, 1361, 1363, 3, 170, 85, 0, 1362, 1361, 1, 0, 0, 0, 1362, 1363, 1, 0, 0, 0, 1363,
        1364, 1, 0, 0, 0, 1364, 1365, 5, 83, 0, 0, 1365, 1373, 1, 0, 0, 0, 1366, 1367, 3, 162,
        81, 0, 1367, 1368, 5, 82, 0, 0, 1368, 1369, 3, 170, 85, 0, 1369, 1370, 5, 115, 0, 0,
        1370, 1371, 5, 83, 0, 0, 1371, 1373, 1, 0, 0, 0, 1372, 1359, 1, 0, 0, 0, 1372, 1366,
        1, 0, 0, 0, 1373, 161, 1, 0, 0, 0, 1374, 1376, 3, 166, 83, 0, 1375, 1377, 3, 206, 103,
        0, 1376, 1375, 1, 0, 0, 0, 1376, 1377, 1, 0, 0, 0, 1377, 1379, 1, 0, 0, 0, 1378, 1380,
        5, 125, 0, 0, 1379, 1378, 1, 0, 0, 0, 1379, 1380, 1, 0, 0, 0, 1380, 1382, 1, 0, 0, 0,
        1381, 1383, 3, 168, 84, 0, 1382, 1381, 1, 0, 0, 0, 1382, 1383, 1, 0, 0, 0, 1383, 1394,
        1, 0, 0, 0, 1384, 1386, 3, 166, 83, 0, 1385, 1387, 3, 206, 103, 0, 1386, 1385, 1, 0,
        0, 0, 1386, 1387, 1, 0, 0, 0, 1387, 1388, 1, 0, 0, 0, 1388, 1389, 3, 10, 5, 0, 1389,
        1391, 5, 125, 0, 0, 1390, 1392, 3, 168, 84, 0, 1391, 1390, 1, 0, 0, 0, 1391, 1392,
        1, 0, 0, 0, 1392, 1394, 1, 0, 0, 0, 1393, 1374, 1, 0, 0, 0, 1393, 1384, 1, 0, 0, 0, 1394,
        163, 1, 0, 0, 0, 1395, 1397, 3, 166, 83, 0, 1396, 1398, 3, 206, 103, 0, 1397, 1396,
        1, 0, 0, 0, 1397, 1398, 1, 0, 0, 0, 1398, 1399, 1, 0, 0, 0, 1399, 1401, 5, 125, 0, 0,
        1400, 1402, 3, 168, 84, 0, 1401, 1400, 1, 0, 0, 0, 1401, 1402, 1, 0, 0, 0, 1402, 1403,
        1, 0, 0, 0, 1403, 1404, 5, 121, 0, 0, 1404, 165, 1, 0, 0, 0, 1405, 1411, 5, 26, 0, 0,
        1406, 1407, 5, 26, 0, 0, 1407, 1411, 5, 14, 0, 0, 1408, 1409, 5, 26, 0, 0, 1409, 1411,
        5, 59, 0, 0, 1410, 1405, 1, 0, 0, 0, 1410, 1406, 1, 0, 0, 0, 1410, 1408, 1, 0, 0, 0, 1411,
        167, 1, 0, 0, 0, 1412, 1413, 5, 119, 0, 0, 1413, 1414, 3, 146, 73, 0, 1414, 169, 1,
        0, 0, 0, 1415, 1416, 6, 85, -1, 0, 1416, 1417, 3, 172, 86, 0, 1417, 1423, 1, 0, 0, 0,
        1418, 1419, 10, 1, 0, 0, 1419, 1420, 5, 115, 0, 0, 1420, 1422, 3, 172, 86, 0, 1421,
        1418, 1, 0, 0, 0, 1422, 1425, 1, 0, 0, 0, 1423, 1421, 1, 0, 0, 0, 1423, 1424, 1, 0, 0,
        0, 1424, 171, 1, 0, 0, 0, 1425, 1423, 1, 0, 0, 0, 1426, 1432, 3, 174, 87, 0, 1427, 1428,
        3, 174, 87, 0, 1428, 1429, 5, 94, 0, 0, 1429, 1430, 3, 88, 44, 0, 1430, 1432, 1, 0,
        0, 0, 1431, 1426, 1, 0, 0, 0, 1431, 1427, 1, 0, 0, 0, 1432, 173, 1, 0, 0, 0, 1433, 1434,
        5, 125, 0, 0, 1434, 175, 1, 0, 0, 0, 1435, 1438, 3, 178, 89, 0, 1436, 1438, 3, 192,
        96, 0, 1437, 1435, 1, 0, 0, 0, 1437, 1436, 1, 0, 0, 0, 1438, 177, 1, 0, 0, 0, 1439, 1440,
        5, 125, 0, 0, 1440, 179, 1, 0, 0, 0, 1441, 1444, 3, 182, 91, 0, 1442, 1444, 3, 188,
        94, 0, 1443, 1441, 1, 0, 0, 0, 1443, 1442, 1, 0, 0, 0, 1444, 181, 1, 0, 0, 0, 1445, 1448,
        3, 184, 92, 0, 1446, 1448, 3, 186, 93, 0, 1447, 1445, 1, 0, 0, 0, 1447, 1446, 1, 0,
        0, 0, 1448, 183, 1, 0, 0, 0, 1449, 1451, 5, 37, 0, 0, 1450, 1449, 1, 0, 0, 0, 1450, 1451,
        1, 0, 0, 0, 1451, 1452, 1, 0, 0, 0, 1452, 1453, 5, 41, 0, 0, 1453, 1454, 5, 125, 0, 0,
        1454, 1455, 5, 82, 0, 0, 1455, 1456, 3, 190, 95, 0, 1456, 1457, 5, 83, 0, 0, 1457,
        185, 1, 0, 0, 0, 1458, 1460, 5, 37, 0, 0, 1459, 1458, 1, 0, 0, 0, 1459, 1460, 1, 0, 0,
        0, 1460, 1461, 1, 0, 0, 0, 1461, 1462, 5, 41, 0, 0, 1462, 1463, 3, 178, 89, 0, 1463,
        1464, 5, 82, 0, 0, 1464, 1465, 3, 190, 95, 0, 1465, 1466, 5, 83, 0, 0, 1466, 187, 1,
        0, 0, 0, 1467, 1469, 5, 37, 0, 0, 1468, 1467, 1, 0, 0, 0, 1468, 1469, 1, 0, 0, 0, 1469,
        1470, 1, 0, 0, 0, 1470, 1471, 5, 41, 0, 0, 1471, 1472, 5, 82, 0, 0, 1472, 1473, 3, 190,
        95, 0, 1473, 1474, 5, 83, 0, 0, 1474, 189, 1, 0, 0, 0, 1475, 1477, 3, 116, 58, 0, 1476,
        1475, 1, 0, 0, 0, 1476, 1477, 1, 0, 0, 0, 1477, 191, 1, 0, 0, 0, 1478, 1479, 5, 125,
        0, 0, 1479, 193, 1, 0, 0, 0, 1480, 1481, 5, 41, 0, 0, 1481, 1482, 5, 125, 0, 0, 1482,
        1483, 5, 94, 0, 0, 1483, 1484, 3, 196, 98, 0, 1484, 1485, 5, 121, 0, 0, 1485, 195,
        1, 0, 0, 0, 1486, 1488, 3, 10, 5, 0, 1487, 1486, 1, 0, 0, 0, 1487, 1488, 1, 0, 0, 0, 1488,
        1489, 1, 0, 0, 0, 1489, 1490, 3, 176, 88, 0, 1490, 197, 1, 0, 0, 0, 1491, 1493, 5, 72,
        0, 0, 1492, 1494, 5, 69, 0, 0, 1493, 1492, 1, 0, 0, 0, 1493, 1494, 1, 0, 0, 0, 1494,
        1495, 1, 0, 0, 0, 1495, 1496, 3, 10, 5, 0, 1496, 1497, 3, 6, 3, 0, 1497, 1498, 5, 121,
        0, 0, 1498, 1505, 1, 0, 0, 0, 1499, 1500, 5, 72, 0, 0, 1500, 1501, 5, 120, 0, 0, 1501,
        1502, 3, 6, 3, 0, 1502, 1503, 5, 121, 0, 0, 1503, 1505, 1, 0, 0, 0, 1504, 1491, 1, 0,
        0, 0, 1504, 1499, 1, 0, 0, 0, 1505, 199, 1, 0, 0, 0, 1506, 1508, 3, 206, 103, 0, 1507,
        1506, 1, 0, 0, 0, 1507, 1508, 1, 0, 0, 0, 1508, 1509, 1, 0, 0, 0, 1509, 1510, 5, 72,
        0, 0, 1510, 1512, 5, 41, 0, 0, 1511, 1513, 3, 10, 5, 0, 1512, 1511, 1, 0, 0, 0, 1512,
        1513, 1, 0, 0, 0, 1513, 1514, 1, 0, 0, 0, 1514, 1515, 3, 176, 88, 0, 1515, 1516, 5,
        121, 0, 0, 1516, 201, 1, 0, 0, 0, 1517, 1518, 5, 5, 0, 0, 1518, 1519, 5, 78, 0, 0, 1519,
        1520, 5, 134, 0, 0, 1520, 1521, 5, 79, 0, 0, 1521, 1522, 5, 121, 0, 0, 1522, 203, 1,
        0, 0, 0, 1523, 1524, 5, 29, 0, 0, 1524, 1525, 5, 134, 0, 0, 1525, 1527, 5, 82, 0, 0,
        1526, 1528, 3, 116, 58, 0, 1527, 1526, 1, 0, 0, 0, 1527, 1528, 1, 0, 0, 0, 1528, 1529,
        1, 0, 0, 0, 1529, 1534, 5, 83, 0, 0, 1530, 1531, 5, 29, 0, 0, 1531, 1532, 5, 134, 0,
        0, 1532, 1534, 3, 118, 59, 0, 1533, 1523, 1, 0, 0, 0, 1533, 1530, 1, 0, 0, 0, 1534,
        205, 1, 0, 0, 0, 1535, 1536, 6, 103, -1, 0, 1536, 1537, 3, 208, 104, 0, 1537, 1542,
        1, 0, 0, 0, 1538, 1539, 10, 1, 0, 0, 1539, 1541, 3, 208, 104, 0, 1540, 1538, 1, 0, 0,
        0, 1541, 1544, 1, 0, 0, 0, 1542, 1540, 1, 0, 0, 0, 1542, 1543, 1, 0, 0, 0, 1543, 207,
        1, 0, 0, 0, 1544, 1542, 1, 0, 0, 0, 1545, 1546, 5, 80, 0, 0, 1546, 1547, 5, 80, 0, 0,
        1547, 1548, 3, 212, 106, 0, 1548, 1549, 5, 81, 0, 0, 1549, 1550, 5, 81, 0, 0, 1550,
        1553, 1, 0, 0, 0, 1551, 1553, 3, 210, 105, 0, 1552, 1545, 1, 0, 0, 0, 1552, 1551, 1,
        0, 0, 0, 1553, 209, 1, 0, 0, 0, 1554, 1555, 5, 3, 0, 0, 1555, 1556, 5, 78, 0, 0, 1556,
        1558, 3, 252, 126, 0, 1557, 1559, 5, 124, 0, 0, 1558, 1557, 1, 0, 0, 0, 1558, 1559,
        1, 0, 0, 0, 1559, 1560, 1, 0, 0, 0, 1560, 1561, 5, 79, 0, 0, 1561, 1571, 1, 0, 0, 0, 1562,
        1563, 5, 3, 0, 0, 1563, 1564, 5, 78, 0, 0, 1564, 1566, 3, 88, 44, 0, 1565, 1567, 5,
        124, 0, 0, 1566, 1565, 1, 0, 0, 0, 1566, 1567, 1, 0, 0, 0, 1567, 1568, 1, 0, 0, 0, 1568,
        1569, 5, 79, 0, 0, 1569, 1571, 1, 0, 0, 0, 1570, 1554, 1, 0, 0, 0, 1570, 1562, 1, 0,
        0, 0, 1571, 211, 1, 0, 0, 0, 1572, 1574, 6, 106, -1, 0, 1573, 1575, 3, 214, 107, 0,
        1574, 1573, 1, 0, 0, 0, 1574, 1575, 1, 0, 0, 0, 1575, 1580, 1, 0, 0, 0, 1576, 1577,
        3, 214, 107, 0, 1577, 1578, 5, 124, 0, 0, 1578, 1580, 1, 0, 0, 0, 1579, 1572, 1, 0,
        0, 0, 1579, 1576, 1, 0, 0, 0, 1580, 1593, 1, 0, 0, 0, 1581, 1582, 10, 3, 0, 0, 1582,
        1584, 5, 115, 0, 0, 1583, 1585, 3, 214, 107, 0, 1584, 1583, 1, 0, 0, 0, 1584, 1585,
        1, 0, 0, 0, 1585, 1592, 1, 0, 0, 0, 1586, 1587, 10, 1, 0, 0, 1587, 1588, 5, 115, 0, 0,
        1588, 1589, 3, 214, 107, 0, 1589, 1590, 5, 124, 0, 0, 1590, 1592, 1, 0, 0, 0, 1591,
        1581, 1, 0, 0, 0, 1591, 1586, 1, 0, 0, 0, 1592, 1595, 1, 0, 0, 0, 1593, 1591, 1, 0, 0,
        0, 1593, 1594, 1, 0, 0, 0, 1594, 213, 1, 0, 0, 0, 1595, 1593, 1, 0, 0, 0, 1596, 1598,
        3, 216, 108, 0, 1597, 1599, 3, 222, 111, 0, 1598, 1597, 1, 0, 0, 0, 1598, 1599, 1,
        0, 0, 0, 1599, 215, 1, 0, 0, 0, 1600, 1603, 5, 125, 0, 0, 1601, 1603, 3, 218, 109, 0,
        1602, 1600, 1, 0, 0, 0, 1602, 1601, 1, 0, 0, 0, 1603, 217, 1, 0, 0, 0, 1604, 1605, 3,
        220, 110, 0, 1605, 1606, 5, 120, 0, 0, 1606, 1607, 5, 125, 0, 0, 1607, 219, 1, 0, 0,
        0, 1608, 1609, 5, 125, 0, 0, 1609, 221, 1, 0, 0, 0, 1610, 1611, 5, 78, 0, 0, 1611, 1612,
        3, 224, 112, 0, 1612, 1613, 5, 79, 0, 0, 1613, 223, 1, 0, 0, 0, 1614, 1616, 6, 112,
        -1, 0, 1615, 1617, 3, 226, 113, 0, 1616, 1615, 1, 0, 0, 0, 1616, 1617, 1, 0, 0, 0, 1617,
        1622, 1, 0, 0, 0, 1618, 1619, 10, 1, 0, 0, 1619, 1621, 3, 226, 113, 0, 1620, 1618,
        1, 0, 0, 0, 1621, 1624, 1, 0, 0, 0, 1622, 1620, 1, 0, 0, 0, 1622, 1623, 1, 0, 0, 0, 1623,
        225, 1, 0, 0, 0, 1624, 1622, 1, 0, 0, 0, 1625, 1626, 5, 78, 0, 0, 1626, 1627, 3, 224,
        112, 0, 1627, 1628, 5, 79, 0, 0, 1628, 1638, 1, 0, 0, 0, 1629, 1630, 5, 80, 0, 0, 1630,
        1631, 3, 224, 112, 0, 1631, 1632, 5, 81, 0, 0, 1632, 1638, 1, 0, 0, 0, 1633, 1634,
        5, 82, 0, 0, 1634, 1635, 3, 224, 112, 0, 1635, 1636, 5, 83, 0, 0, 1636, 1638, 1, 0,
        0, 0, 1637, 1625, 1, 0, 0, 0, 1637, 1629, 1, 0, 0, 0, 1637, 1633, 1, 0, 0, 0, 1638, 227,
        1, 0, 0, 0, 1639, 1640, 6, 114, -1, 0, 1640, 1641, 3, 230, 115, 0, 1641, 1647, 1, 0,
        0, 0, 1642, 1643, 10, 1, 0, 0, 1643, 1644, 5, 115, 0, 0, 1644, 1646, 3, 230, 115, 0,
        1645, 1642, 1, 0, 0, 0, 1646, 1649, 1, 0, 0, 0, 1647, 1645, 1, 0, 0, 0, 1647, 1648,
        1, 0, 0, 0, 1648, 229, 1, 0, 0, 0, 1649, 1647, 1, 0, 0, 0, 1650, 1652, 3, 232, 116, 0,
        1651, 1653, 3, 274, 137, 0, 1652, 1651, 1, 0, 0, 0, 1652, 1653, 1, 0, 0, 0, 1653, 231,
        1, 0, 0, 0, 1654, 1660, 3, 234, 117, 0, 1655, 1656, 3, 236, 118, 0, 1656, 1657, 3,
        238, 119, 0, 1657, 1658, 3, 240, 120, 0, 1658, 1660, 1, 0, 0, 0, 1659, 1654, 1, 0,
        0, 0, 1659, 1655, 1, 0, 0, 0, 1660, 233, 1, 0, 0, 0, 1661, 1666, 3, 236, 118, 0, 1662,
        1663, 3, 242, 121, 0, 1663, 1664, 3, 234, 117, 0, 1664, 1666, 1, 0, 0, 0, 1665, 1661,
        1, 0, 0, 0, 1665, 1662, 1, 0, 0, 0, 1666, 235, 1, 0, 0, 0, 1667, 1668, 6, 118, -1, 0,
        1668, 1670, 3, 250, 125, 0, 1669, 1671, 3, 206, 103, 0, 1670, 1669, 1, 0, 0, 0, 1670,
        1671, 1, 0, 0, 0, 1671, 1677, 1, 0, 0, 0, 1672, 1673, 5, 78, 0, 0, 1673, 1674, 3, 234,
        117, 0, 1674, 1675, 5, 79, 0, 0, 1675, 1677, 1, 0, 0, 0, 1676, 1667, 1, 0, 0, 0, 1676,
        1672, 1, 0, 0, 0, 1677, 1691, 1, 0, 0, 0, 1678, 1679, 10, 3, 0, 0, 1679, 1690, 3, 238,
        119, 0, 1680, 1681, 10, 2, 0, 0, 1681, 1683, 5, 80, 0, 0, 1682, 1684, 3, 88, 44, 0,
        1683, 1682, 1, 0, 0, 0, 1683, 1684, 1, 0, 0, 0, 1684, 1685, 1, 0, 0, 0, 1685, 1687,
        5, 81, 0, 0, 1686, 1688, 3, 206, 103, 0, 1687, 1686, 1, 0, 0, 0, 1687, 1688, 1, 0, 0,
        0, 1688, 1690, 1, 0, 0, 0, 1689, 1678, 1, 0, 0, 0, 1689, 1680, 1, 0, 0, 0, 1690, 1693,
        1, 0, 0, 0, 1691, 1689, 1, 0, 0, 0, 1691, 1692, 1, 0, 0, 0, 1692, 237, 1, 0, 0, 0, 1693,
        1691, 1, 0, 0, 0, 1694, 1695, 5, 78, 0, 0, 1695, 1696, 3, 264, 132, 0, 1696, 1698,
        5, 79, 0, 0, 1697, 1699, 3, 244, 122, 0, 1698, 1697, 1, 0, 0, 0, 1698, 1699, 1, 0, 0,
        0, 1699, 1701, 1, 0, 0, 0, 1700, 1702, 3, 248, 124, 0, 1701, 1700, 1, 0, 0, 0, 1701,
        1702, 1, 0, 0, 0, 1702, 1704, 1, 0, 0, 0, 1703, 1705, 3, 376, 188, 0, 1704, 1703, 1,
        0, 0, 0, 1704, 1705, 1, 0, 0, 0, 1705, 1707, 1, 0, 0, 0, 1706, 1708, 3, 206, 103, 0,
        1707, 1706, 1, 0, 0, 0, 1707, 1708, 1, 0, 0, 0, 1708, 239, 1, 0, 0, 0, 1709, 1710, 5,
        117, 0, 0, 1710, 1712, 3, 148, 74, 0, 1711, 1713, 3, 254, 127, 0, 1712, 1711, 1, 0,
        0, 0, 1712, 1713, 1, 0, 0, 0, 1713, 241, 1, 0, 0, 0, 1714, 1716, 5, 86, 0, 0, 1715, 1717,
        3, 206, 103, 0, 1716, 1715, 1, 0, 0, 0, 1716, 1717, 1, 0, 0, 0, 1717, 1719, 1, 0, 0,
        0, 1718, 1720, 3, 244, 122, 0, 1719, 1718, 1, 0, 0, 0, 1719, 1720, 1, 0, 0, 0, 1720,
        1738, 1, 0, 0, 0, 1721, 1723, 5, 90, 0, 0, 1722, 1724, 3, 206, 103, 0, 1723, 1722,
        1, 0, 0, 0, 1723, 1724, 1, 0, 0, 0, 1724, 1738, 1, 0, 0, 0, 1725, 1727, 5, 111, 0, 0,
        1726, 1728, 3, 206, 103, 0, 1727, 1726, 1, 0, 0, 0, 1727, 1728, 1, 0, 0, 0, 1728, 1738,
        1, 0, 0, 0, 1729, 1730, 3, 10, 5, 0, 1730, 1732, 5, 86, 0, 0, 1731, 1733, 3, 206, 103,
        0, 1732, 1731, 1, 0, 0, 0, 1732, 1733, 1, 0, 0, 0, 1733, 1735, 1, 0, 0, 0, 1734, 1736,
        3, 244, 122, 0, 1735, 1734, 1, 0, 0, 0, 1735, 1736, 1, 0, 0, 0, 1736, 1738, 1, 0, 0,
        0, 1737, 1714, 1, 0, 0, 0, 1737, 1721, 1, 0, 0, 0, 1737, 1725, 1, 0, 0, 0, 1737, 1729,
        1, 0, 0, 0, 1738, 243, 1, 0, 0, 0, 1739, 1741, 3, 246, 123, 0, 1740, 1742, 3, 244, 122,
        0, 1741, 1740, 1, 0, 0, 0, 1741, 1742, 1, 0, 0, 0, 1742, 245, 1, 0, 0, 0, 1743, 1744,
        7, 4, 0, 0, 1744, 247, 1, 0, 0, 0, 1745, 1746, 7, 5, 0, 0, 1746, 249, 1, 0, 0, 0, 1747,
        1749, 5, 124, 0, 0, 1748, 1747, 1, 0, 0, 0, 1748, 1749, 1, 0, 0, 0, 1749, 1750, 1, 0,
        0, 0, 1750, 1751, 3, 4, 2, 0, 1751, 251, 1, 0, 0, 0, 1752, 1754, 3, 146, 73, 0, 1753,
        1755, 3, 254, 127, 0, 1754, 1753, 1, 0, 0, 0, 1754, 1755, 1, 0, 0, 0, 1755, 253, 1,
        0, 0, 0, 1756, 1765, 3, 256, 128, 0, 1757, 1759, 3, 258, 129, 0, 1758, 1757, 1, 0,
        0, 0, 1758, 1759, 1, 0, 0, 0, 1759, 1760, 1, 0, 0, 0, 1760, 1761, 3, 238, 119, 0, 1761,
        1762, 3, 240, 120, 0, 1762, 1765, 1, 0, 0, 0, 1763, 1765, 3, 260, 130, 0, 1764, 1756,
        1, 0, 0, 0, 1764, 1758, 1, 0, 0, 0, 1764, 1763, 1, 0, 0, 0, 1765, 255, 1, 0, 0, 0, 1766,
        1772, 3, 258, 129, 0, 1767, 1769, 3, 242, 121, 0, 1768, 1770, 3, 256, 128, 0, 1769,
        1768, 1, 0, 0, 0, 1769, 1770, 1, 0, 0, 0, 1770, 1772, 1, 0, 0, 0, 1771, 1766, 1, 0, 0,
        0, 1771, 1767, 1, 0, 0, 0, 1772, 257, 1, 0, 0, 0, 1773, 1774, 6, 129, -1, 0, 1774, 1788,
        3, 238, 119, 0, 1775, 1777, 5, 80, 0, 0, 1776, 1778, 3, 88, 44, 0, 1777, 1776, 1, 0,
        0, 0, 1777, 1778, 1, 0, 0, 0, 1778, 1779, 1, 0, 0, 0, 1779, 1781, 5, 81, 0, 0, 1780,
        1782, 3, 206, 103, 0, 1781, 1780, 1, 0, 0, 0, 1781, 1782, 1, 0, 0, 0, 1782, 1788, 1,
        0, 0, 0, 1783, 1784, 5, 78, 0, 0, 1784, 1785, 3, 256, 128, 0, 1785, 1786, 5, 79, 0,
        0, 1786, 1788, 1, 0, 0, 0, 1787, 1773, 1, 0, 0, 0, 1787, 1775, 1, 0, 0, 0, 1787, 1783,
        1, 0, 0, 0, 1788, 1802, 1, 0, 0, 0, 1789, 1790, 10, 5, 0, 0, 1790, 1801, 3, 238, 119,
        0, 1791, 1792, 10, 3, 0, 0, 1792, 1794, 5, 80, 0, 0, 1793, 1795, 3, 88, 44, 0, 1794,
        1793, 1, 0, 0, 0, 1794, 1795, 1, 0, 0, 0, 1795, 1796, 1, 0, 0, 0, 1796, 1798, 5, 81,
        0, 0, 1797, 1799, 3, 206, 103, 0, 1798, 1797, 1, 0, 0, 0, 1798, 1799, 1, 0, 0, 0, 1799,
        1801, 1, 0, 0, 0, 1800, 1789, 1, 0, 0, 0, 1800, 1791, 1, 0, 0, 0, 1801, 1804, 1, 0, 0,
        0, 1802, 1800, 1, 0, 0, 0, 1802, 1803, 1, 0, 0, 0, 1803, 259, 1, 0, 0, 0, 1804, 1802,
        1, 0, 0, 0, 1805, 1810, 3, 262, 131, 0, 1806, 1807, 3, 242, 121, 0, 1807, 1808, 3,
        260, 130, 0, 1808, 1810, 1, 0, 0, 0, 1809, 1805, 1, 0, 0, 0, 1809, 1806, 1, 0, 0, 0,
        1810, 261, 1, 0, 0, 0, 1811, 1812, 6, 131, -1, 0, 1812, 1813, 5, 124, 0, 0, 1813, 1827,
        1, 0, 0, 0, 1814, 1815, 10, 3, 0, 0, 1815, 1826, 3, 238, 119, 0, 1816, 1817, 10, 2,
        0, 0, 1817, 1819, 5, 80, 0, 0, 1818, 1820, 3, 88, 44, 0, 1819, 1818, 1, 0, 0, 0, 1819,
        1820, 1, 0, 0, 0, 1820, 1821, 1, 0, 0, 0, 1821, 1823, 5, 81, 0, 0, 1822, 1824, 3, 206,
        103, 0, 1823, 1822, 1, 0, 0, 0, 1823, 1824, 1, 0, 0, 0, 1824, 1826, 1, 0, 0, 0, 1825,
        1814, 1, 0, 0, 0, 1825, 1816, 1, 0, 0, 0, 1826, 1829, 1, 0, 0, 0, 1827, 1825, 1, 0, 0,
        0, 1827, 1828, 1, 0, 0, 0, 1828, 263, 1, 0, 0, 0, 1829, 1827, 1, 0, 0, 0, 1830, 1832,
        3, 266, 133, 0, 1831, 1830, 1, 0, 0, 0, 1831, 1832, 1, 0, 0, 0, 1832, 1834, 1, 0, 0,
        0, 1833, 1835, 5, 124, 0, 0, 1834, 1833, 1, 0, 0, 0, 1834, 1835, 1, 0, 0, 0, 1835, 1841,
        1, 0, 0, 0, 1836, 1837, 3, 266, 133, 0, 1837, 1838, 5, 115, 0, 0, 1838, 1839, 5, 124,
        0, 0, 1839, 1841, 1, 0, 0, 0, 1840, 1831, 1, 0, 0, 0, 1840, 1836, 1, 0, 0, 0, 1841, 265,
        1, 0, 0, 0, 1842, 1843, 6, 133, -1, 0, 1843, 1844, 3, 268, 134, 0, 1844, 1850, 1, 0,
        0, 0, 1845, 1846, 10, 1, 0, 0, 1846, 1847, 5, 115, 0, 0, 1847, 1849, 3, 268, 134, 0,
        1848, 1845, 1, 0, 0, 0, 1849, 1852, 1, 0, 0, 0, 1850, 1848, 1, 0, 0, 0, 1850, 1851,
        1, 0, 0, 0, 1851, 267, 1, 0, 0, 0, 1852, 1850, 1, 0, 0, 0, 1853, 1855, 3, 206, 103, 0,
        1854, 1853, 1, 0, 0, 0, 1854, 1855, 1, 0, 0, 0, 1855, 1856, 1, 0, 0, 0, 1856, 1857,
        3, 134, 67, 0, 1857, 1858, 3, 232, 116, 0, 1858, 1885, 1, 0, 0, 0, 1859, 1861, 3, 206,
        103, 0, 1860, 1859, 1, 0, 0, 0, 1860, 1861, 1, 0, 0, 0, 1861, 1862, 1, 0, 0, 0, 1862,
        1863, 3, 134, 67, 0, 1863, 1864, 3, 232, 116, 0, 1864, 1865, 5, 94, 0, 0, 1865, 1866,
        3, 278, 139, 0, 1866, 1885, 1, 0, 0, 0, 1867, 1869, 3, 206, 103, 0, 1868, 1867, 1,
        0, 0, 0, 1868, 1869, 1, 0, 0, 0, 1869, 1870, 1, 0, 0, 0, 1870, 1872, 3, 134, 67, 0, 1871,
        1873, 3, 254, 127, 0, 1872, 1871, 1, 0, 0, 0, 1872, 1873, 1, 0, 0, 0, 1873, 1885, 1,
        0, 0, 0, 1874, 1876, 3, 206, 103, 0, 1875, 1874, 1, 0, 0, 0, 1875, 1876, 1, 0, 0, 0,
        1876, 1877, 1, 0, 0, 0, 1877, 1879, 3, 134, 67, 0, 1878, 1880, 3, 254, 127, 0, 1879,
        1878, 1, 0, 0, 0, 1879, 1880, 1, 0, 0, 0, 1880, 1881, 1, 0, 0, 0, 1881, 1882, 5, 94,
        0, 0, 1882, 1883, 3, 278, 139, 0, 1883, 1885, 1, 0, 0, 0, 1884, 1854, 1, 0, 0, 0, 1884,
        1860, 1, 0, 0, 0, 1884, 1868, 1, 0, 0, 0, 1884, 1875, 1, 0, 0, 0, 1885, 269, 1, 0, 0,
        0, 1886, 1888, 3, 206, 103, 0, 1887, 1886, 1, 0, 0, 0, 1887, 1888, 1, 0, 0, 0, 1888,
        1890, 1, 0, 0, 0, 1889, 1891, 3, 134, 67, 0, 1890, 1889, 1, 0, 0, 0, 1890, 1891, 1,
        0, 0, 0, 1891, 1892, 1, 0, 0, 0, 1892, 1894, 3, 232, 116, 0, 1893, 1895, 3, 304, 152,
        0, 1894, 1893, 1, 0, 0, 0, 1894, 1895, 1, 0, 0, 0, 1895, 1896, 1, 0, 0, 0, 1896, 1897,
        3, 272, 136, 0, 1897, 271, 1, 0, 0, 0, 1898, 1900, 3, 328, 164, 0, 1899, 1898, 1, 0,
        0, 0, 1899, 1900, 1, 0, 0, 0, 1900, 1901, 1, 0, 0, 0, 1901, 1910, 3, 96, 48, 0, 1902,
        1910, 3, 366, 183, 0, 1903, 1904, 5, 94, 0, 0, 1904, 1905, 5, 20, 0, 0, 1905, 1910,
        5, 121, 0, 0, 1906, 1907, 5, 94, 0, 0, 1907, 1908, 5, 21, 0, 0, 1908, 1910, 5, 121,
        0, 0, 1909, 1899, 1, 0, 0, 0, 1909, 1902, 1, 0, 0, 0, 1909, 1903, 1, 0, 0, 0, 1909, 1906,
        1, 0, 0, 0, 1910, 273, 1, 0, 0, 0, 1911, 1917, 3, 276, 138, 0, 1912, 1913, 5, 78, 0,
        0, 1913, 1914, 3, 32, 16, 0, 1914, 1915, 5, 79, 0, 0, 1915, 1917, 1, 0, 0, 0, 1916,
        1911, 1, 0, 0, 0, 1916, 1912, 1, 0, 0, 0, 1917, 275, 1, 0, 0, 0, 1918, 1919, 5, 94, 0,
        0, 1919, 1922, 3, 278, 139, 0, 1920, 1922, 3, 282, 141, 0, 1921, 1918, 1, 0, 0, 0,
        1921, 1920, 1, 0, 0, 0, 1922, 277, 1, 0, 0, 0, 1923, 1926, 3, 82, 41, 0, 1924, 1926,
        3, 282, 141, 0, 1925, 1923, 1, 0, 0, 0, 1925, 1924, 1, 0, 0, 0, 1926, 279, 1, 0, 0, 0,
        1927, 1928, 6, 140, -1, 0, 1928, 1930, 3, 278, 139, 0, 1929, 1931, 5, 124, 0, 0, 1930,
        1929, 1, 0, 0, 0, 1930, 1931, 1, 0, 0, 0, 1931, 1940, 1, 0, 0, 0, 1932, 1933, 10, 1,
        0, 0, 1933, 1934, 5, 115, 0, 0, 1934, 1936, 3, 278, 139, 0, 1935, 1937, 5, 124, 0,
        0, 1936, 1935, 1, 0, 0, 0, 1936, 1937, 1, 0, 0, 0, 1937, 1939, 1, 0, 0, 0, 1938, 1932,
        1, 0, 0, 0, 1939, 1942, 1, 0, 0, 0, 1940, 1938, 1, 0, 0, 0, 1940, 1941, 1, 0, 0, 0, 1941,
        281, 1, 0, 0, 0, 1942, 1940, 1, 0, 0, 0, 1943, 1944, 5, 82, 0, 0, 1944, 1946, 3, 280,
        140, 0, 1945, 1947, 5, 115, 0, 0, 1946, 1945, 1, 0, 0, 0, 1946, 1947, 1, 0, 0, 0, 1947,
        1948, 1, 0, 0, 0, 1948, 1949, 5, 83, 0, 0, 1949, 1953, 1, 0, 0, 0, 1950, 1951, 5, 82,
        0, 0, 1951, 1953, 5, 83, 0, 0, 1952, 1943, 1, 0, 0, 0, 1952, 1950, 1, 0, 0, 0, 1953,
        283, 1, 0, 0, 0, 1954, 1957, 5, 125, 0, 0, 1955, 1957, 3, 348, 174, 0, 1956, 1954,
        1, 0, 0, 0, 1956, 1955, 1, 0, 0, 0, 1957, 285, 1, 0, 0, 0, 1958, 1959, 3, 288, 144, 0,
        1959, 1961, 5, 82, 0, 0, 1960, 1962, 3, 296, 148, 0, 1961, 1960, 1, 0, 0, 0, 1961,
        1962, 1, 0, 0, 0, 1962, 1963, 1, 0, 0, 0, 1963, 1964, 5, 83, 0, 0, 1964, 287, 1, 0, 0,
        0, 1965, 1967, 3, 294, 147, 0, 1966, 1968, 3, 206, 103, 0, 1967, 1966, 1, 0, 0, 0,
        1967, 1968, 1, 0, 0, 0, 1968, 1969, 1, 0, 0, 0, 1969, 1971, 3, 290, 145, 0, 1970, 1972,
        3, 292, 146, 0, 1971, 1970, 1, 0, 0, 0, 1971, 1972, 1, 0, 0, 0, 1972, 1974, 1, 0, 0,
        0, 1973, 1975, 3, 310, 155, 0, 1974, 1973, 1, 0, 0, 0, 1974, 1975, 1, 0, 0, 0, 1975,
        1984, 1, 0, 0, 0, 1976, 1978, 3, 294, 147, 0, 1977, 1979, 3, 206, 103, 0, 1978, 1977,
        1, 0, 0, 0, 1978, 1979, 1, 0, 0, 0, 1979, 1981, 1, 0, 0, 0, 1980, 1982, 3, 310, 155,
        0, 1981, 1980, 1, 0, 0, 0, 1981, 1982, 1, 0, 0, 0, 1982, 1984, 1, 0, 0, 0, 1983, 1965,
        1, 0, 0, 0, 1983, 1976, 1, 0, 0, 0, 1984, 289, 1, 0, 0, 0, 1985, 1987, 3, 10, 5, 0, 1986,
        1985, 1, 0, 0, 0, 1986, 1987, 1, 0, 0, 0, 1987, 1988, 1, 0, 0, 0, 1988, 1989, 3, 284,
        142, 0, 1989, 291, 1, 0, 0, 0, 1990, 1991, 5, 31, 0, 0, 1991, 293, 1, 0, 0, 0, 1992,
        1993, 7, 6, 0, 0, 1993, 295, 1, 0, 0, 0, 1994, 1996, 3, 298, 149, 0, 1995, 1997, 3,
        296, 148, 0, 1996, 1995, 1, 0, 0, 0, 1996, 1997, 1, 0, 0, 0, 1997, 2004, 1, 0, 0, 0,
        1998, 1999, 3, 320, 160, 0, 1999, 2001, 5, 119, 0, 0, 2000, 2002, 3, 296, 148, 0,
        2001, 2000, 1, 0, 0, 0, 2001, 2002, 1, 0, 0, 0, 2002, 2004, 1, 0, 0, 0, 2003, 1994,
        1, 0, 0, 0, 2003, 1998, 1, 0, 0, 0, 2004, 297, 1, 0, 0, 0, 2005, 2007, 3, 206, 103, 0,
        2006, 2005, 1, 0, 0, 0, 2006, 2007, 1, 0, 0, 0, 2007, 2009, 1, 0, 0, 0, 2008, 2010,
        3, 134, 67, 0, 2009, 2008, 1, 0, 0, 0, 2009, 2010, 1, 0, 0, 0, 2010, 2012, 1, 0, 0, 0,
        2011, 2013, 3, 300, 150, 0, 2012, 2011, 1, 0, 0, 0, 2012, 2013, 1, 0, 0, 0, 2013, 2014,
        1, 0, 0, 0, 2014, 2022, 5, 121, 0, 0, 2015, 2022, 3, 270, 135, 0, 2016, 2022, 3, 198,
        99, 0, 2017, 2022, 3, 126, 63, 0, 2018, 2022, 3, 340, 170, 0, 2019, 2022, 3, 122,
        61, 0, 2020, 2022, 3, 128, 64, 0, 2021, 2006, 1, 0, 0, 0, 2021, 2015, 1, 0, 0, 0, 2021,
        2016, 1, 0, 0, 0, 2021, 2017, 1, 0, 0, 0, 2021, 2018, 1, 0, 0, 0, 2021, 2019, 1, 0, 0,
        0, 2021, 2020, 1, 0, 0, 0, 2022, 299, 1, 0, 0, 0, 2023, 2024, 6, 150, -1, 0, 2024, 2025,
        3, 302, 151, 0, 2025, 2031, 1, 0, 0, 0, 2026, 2027, 10, 1, 0, 0, 2027, 2028, 5, 115,
        0, 0, 2028, 2030, 3, 302, 151, 0, 2029, 2026, 1, 0, 0, 0, 2030, 2033, 1, 0, 0, 0, 2031,
        2029, 1, 0, 0, 0, 2031, 2032, 1, 0, 0, 0, 2032, 301, 1, 0, 0, 0, 2033, 2031, 1, 0, 0,
        0, 2034, 2036, 3, 232, 116, 0, 2035, 2037, 3, 304, 152, 0, 2036, 2035, 1, 0, 0, 0,
        2036, 2037, 1, 0, 0, 0, 2037, 2039, 1, 0, 0, 0, 2038, 2040, 3, 308, 154, 0, 2039, 2038,
        1, 0, 0, 0, 2039, 2040, 1, 0, 0, 0, 2040, 2054, 1, 0, 0, 0, 2041, 2043, 3, 232, 116,
        0, 2042, 2044, 3, 276, 138, 0, 2043, 2042, 1, 0, 0, 0, 2043, 2044, 1, 0, 0, 0, 2044,
        2054, 1, 0, 0, 0, 2045, 2047, 5, 125, 0, 0, 2046, 2045, 1, 0, 0, 0, 2046, 2047, 1, 0,
        0, 0, 2047, 2049, 1, 0, 0, 0, 2048, 2050, 3, 206, 103, 0, 2049, 2048, 1, 0, 0, 0, 2049,
        2050, 1, 0, 0, 0, 2050, 2051, 1, 0, 0, 0, 2051, 2052, 5, 119, 0, 0, 2052, 2054, 3, 88,
        44, 0, 2053, 2034, 1, 0, 0, 0, 2053, 2041, 1, 0, 0, 0, 2053, 2046, 1, 0, 0, 0, 2054,
        303, 1, 0, 0, 0, 2055, 2056, 6, 152, -1, 0, 2056, 2057, 3, 306, 153, 0, 2057, 2062,
        1, 0, 0, 0, 2058, 2059, 10, 1, 0, 0, 2059, 2061, 3, 306, 153, 0, 2060, 2058, 1, 0, 0,
        0, 2061, 2064, 1, 0, 0, 0, 2062, 2060, 1, 0, 0, 0, 2062, 2063, 1, 0, 0, 0, 2063, 305,
        1, 0, 0, 0, 2064, 2062, 1, 0, 0, 0, 2065, 2066, 7, 7, 0, 0, 2066, 307, 1, 0, 0, 0, 2067,
        2068, 5, 94, 0, 0, 2068, 2069, 5, 128, 0, 0, 2069, 2070, 6, 154, -1, 0, 2070, 309,
        1, 0, 0, 0, 2071, 2072, 5, 119, 0, 0, 2072, 2073, 3, 312, 156, 0, 2073, 311, 1, 0, 0,
        0, 2074, 2075, 6, 156, -1, 0, 2075, 2077, 3, 314, 157, 0, 2076, 2078, 5, 124, 0, 0,
        2077, 2076, 1, 0, 0, 0, 2077, 2078, 1, 0, 0, 0, 2078, 2087, 1, 0, 0, 0, 2079, 2080,
        10, 1, 0, 0, 2080, 2081, 5, 115, 0, 0, 2081, 2083, 3, 314, 157, 0, 2082, 2084, 5, 124,
        0, 0, 2083, 2082, 1, 0, 0, 0, 2083, 2084, 1, 0, 0, 0, 2084, 2086, 1, 0, 0, 0, 2085, 2079,
        1, 0, 0, 0, 2086, 2089, 1, 0, 0, 0, 2087, 2085, 1, 0, 0, 0, 2087, 2088, 1, 0, 0, 0, 2088,
        313, 1, 0, 0, 0, 2089, 2087, 1, 0, 0, 0, 2090, 2092, 3, 206, 103, 0, 2091, 2090, 1,
        0, 0, 0, 2091, 2092, 1, 0, 0, 0, 2092, 2093, 1, 0, 0, 0, 2093, 2112, 3, 318, 159, 0,
        2094, 2096, 3, 206, 103, 0, 2095, 2094, 1, 0, 0, 0, 2095, 2096, 1, 0, 0, 0, 2096, 2097,
        1, 0, 0, 0, 2097, 2099, 5, 73, 0, 0, 2098, 2100, 3, 320, 160, 0, 2099, 2098, 1, 0, 0,
        0, 2099, 2100, 1, 0, 0, 0, 2100, 2101, 1, 0, 0, 0, 2101, 2112, 3, 318, 159, 0, 2102,
        2104, 3, 206, 103, 0, 2103, 2102, 1, 0, 0, 0, 2103, 2104, 1, 0, 0, 0, 2104, 2105, 1,
        0, 0, 0, 2105, 2107, 3, 320, 160, 0, 2106, 2108, 5, 73, 0, 0, 2107, 2106, 1, 0, 0, 0,
        2107, 2108, 1, 0, 0, 0, 2108, 2109, 1, 0, 0, 0, 2109, 2110, 3, 318, 159, 0, 2110, 2112,
        1, 0, 0, 0, 2111, 2091, 1, 0, 0, 0, 2111, 2095, 1, 0, 0, 0, 2111, 2103, 1, 0, 0, 0, 2112,
        315, 1, 0, 0, 0, 2113, 2115, 3, 10, 5, 0, 2114, 2113, 1, 0, 0, 0, 2114, 2115, 1, 0, 0,
        0, 2115, 2116, 1, 0, 0, 0, 2116, 2119, 3, 284, 142, 0, 2117, 2119, 3, 154, 77, 0, 2118,
        2114, 1, 0, 0, 0, 2118, 2117, 1, 0, 0, 0, 2119, 317, 1, 0, 0, 0, 2120, 2121, 3, 316,
        158, 0, 2121, 319, 1, 0, 0, 0, 2122, 2123, 7, 8, 0, 0, 2123, 321, 1, 0, 0, 0, 2124, 2125,
        5, 45, 0, 0, 2125, 2126, 3, 324, 162, 0, 2126, 323, 1, 0, 0, 0, 2127, 2129, 3, 146,
        73, 0, 2128, 2130, 3, 326, 163, 0, 2129, 2128, 1, 0, 0, 0, 2129, 2130, 1, 0, 0, 0, 2130,
        325, 1, 0, 0, 0, 2131, 2133, 3, 242, 121, 0, 2132, 2134, 3, 326, 163, 0, 2133, 2132,
        1, 0, 0, 0, 2133, 2134, 1, 0, 0, 0, 2134, 327, 1, 0, 0, 0, 2135, 2136, 5, 119, 0, 0, 2136,
        2137, 3, 330, 165, 0, 2137, 329, 1, 0, 0, 0, 2138, 2140, 3, 332, 166, 0, 2139, 2141,
        5, 124, 0, 0, 2140, 2139, 1, 0, 0, 0, 2140, 2141, 1, 0, 0, 0, 2141, 2150, 1, 0, 0, 0,
        2142, 2144, 3, 332, 166, 0, 2143, 2145, 5, 124, 0, 0, 2144, 2143, 1, 0, 0, 0, 2144,
        2145, 1, 0, 0, 0, 2145, 2146, 1, 0, 0, 0, 2146, 2147, 5, 115, 0, 0, 2147, 2148, 3, 330,
        165, 0, 2148, 2150, 1, 0, 0, 0, 2149, 2138, 1, 0, 0, 0, 2149, 2142, 1, 0, 0, 0, 2150,
        331, 1, 0, 0, 0, 2151, 2152, 3, 334, 167, 0, 2152, 2154, 5, 78, 0, 0, 2153, 2155, 3,
        32, 16, 0, 2154, 2153, 1, 0, 0, 0, 2154, 2155, 1, 0, 0, 0, 2155, 2156, 1, 0, 0, 0, 2156,
        2157, 5, 79, 0, 0, 2157, 2162, 1, 0, 0, 0, 2158, 2159, 3, 334, 167, 0, 2159, 2160,
        3, 282, 141, 0, 2160, 2162, 1, 0, 0, 0, 2161, 2151, 1, 0, 0, 0, 2161, 2158, 1, 0, 0,
        0, 2162, 333, 1, 0, 0, 0, 2163, 2166, 3, 316, 158, 0, 2164, 2166, 5, 125, 0, 0, 2165,
        2163, 1, 0, 0, 0, 2165, 2164, 1, 0, 0, 0, 2166, 335, 1, 0, 0, 0, 2167, 2168, 5, 45, 0,
        0, 2168, 2169, 3, 388, 194, 0, 2169, 337, 1, 0, 0, 0, 2170, 2171, 5, 45, 0, 0, 2171,
        2172, 5, 134, 0, 0, 2172, 2176, 5, 125, 0, 0, 2173, 2174, 5, 45, 0, 0, 2174, 2176,
        5, 137, 0, 0, 2175, 2170, 1, 0, 0, 0, 2175, 2173, 1, 0, 0, 0, 2176, 339, 1, 0, 0, 0, 2177,
        2178, 5, 61, 0, 0, 2178, 2179, 5, 95, 0, 0, 2179, 2180, 3, 342, 171, 0, 2180, 2181,
        5, 96, 0, 0, 2181, 2182, 3, 118, 59, 0, 2182, 341, 1, 0, 0, 0, 2183, 2184, 6, 171, -1,
        0, 2184, 2185, 3, 344, 172, 0, 2185, 2191, 1, 0, 0, 0, 2186, 2187, 10, 1, 0, 0, 2187,
        2188, 5, 115, 0, 0, 2188, 2190, 3, 344, 172, 0, 2189, 2186, 1, 0, 0, 0, 2190, 2193,
        1, 0, 0, 0, 2191, 2189, 1, 0, 0, 0, 2191, 2192, 1, 0, 0, 0, 2192, 343, 1, 0, 0, 0, 2193,
        2191, 1, 0, 0, 0, 2194, 2197, 3, 346, 173, 0, 2195, 2197, 3, 268, 134, 0, 2196, 2194,
        1, 0, 0, 0, 2196, 2195, 1, 0, 0, 0, 2197, 345, 1, 0, 0, 0, 2198, 2200, 5, 14, 0, 0, 2199,
        2201, 5, 124, 0, 0, 2200, 2199, 1, 0, 0, 0, 2200, 2201, 1, 0, 0, 0, 2201, 2203, 1, 0,
        0, 0, 2202, 2204, 5, 125, 0, 0, 2203, 2202, 1, 0, 0, 0, 2203, 2204, 1, 0, 0, 0, 2204,
        2247, 1, 0, 0, 0, 2205, 2207, 5, 14, 0, 0, 2206, 2208, 5, 125, 0, 0, 2207, 2206, 1,
        0, 0, 0, 2207, 2208, 1, 0, 0, 0, 2208, 2209, 1, 0, 0, 0, 2209, 2210, 5, 94, 0, 0, 2210,
        2247, 3, 252, 126, 0, 2211, 2213, 5, 69, 0, 0, 2212, 2214, 5, 124, 0, 0, 2213, 2212,
        1, 0, 0, 0, 2213, 2214, 1, 0, 0, 0, 2214, 2216, 1, 0, 0, 0, 2215, 2217, 5, 125, 0, 0,
        2216, 2215, 1, 0, 0, 0, 2216, 2217, 1, 0, 0, 0, 2217, 2247, 1, 0, 0, 0, 2218, 2220,
        5, 69, 0, 0, 2219, 2221, 5, 125, 0, 0, 2220, 2219, 1, 0, 0, 0, 2220, 2221, 1, 0, 0, 0,
        2221, 2222, 1, 0, 0, 0, 2222, 2223, 5, 94, 0, 0, 2223, 2247, 3, 252, 126, 0, 2224,
        2225, 5, 61, 0, 0, 2225, 2226, 5, 95, 0, 0, 2226, 2227, 3, 342, 171, 0, 2227, 2228,
        5, 96, 0, 0, 2228, 2230, 5, 14, 0, 0, 2229, 2231, 5, 124, 0, 0, 2230, 2229, 1, 0, 0,
        0, 2230, 2231, 1, 0, 0, 0, 2231, 2233, 1, 0, 0, 0, 2232, 2234, 5, 125, 0, 0, 2233, 2232,
        1, 0, 0, 0, 2233, 2234, 1, 0, 0, 0, 2234, 2247, 1, 0, 0, 0, 2235, 2236, 5, 61, 0, 0, 2236,
        2237, 5, 95, 0, 0, 2237, 2238, 3, 342, 171, 0, 2238, 2239, 5, 96, 0, 0, 2239, 2241,
        5, 14, 0, 0, 2240, 2242, 5, 125, 0, 0, 2241, 2240, 1, 0, 0, 0, 2241, 2242, 1, 0, 0, 0,
        2242, 2243, 1, 0, 0, 0, 2243, 2244, 5, 94, 0, 0, 2244, 2245, 3, 4, 2, 0, 2245, 2247,
        1, 0, 0, 0, 2246, 2198, 1, 0, 0, 0, 2246, 2205, 1, 0, 0, 0, 2246, 2211, 1, 0, 0, 0, 2246,
        2218, 1, 0, 0, 0, 2246, 2224, 1, 0, 0, 0, 2246, 2235, 1, 0, 0, 0, 2247, 347, 1, 0, 0,
        0, 2248, 2249, 3, 352, 176, 0, 2249, 2251, 5, 95, 0, 0, 2250, 2252, 3, 354, 177, 0,
        2251, 2250, 1, 0, 0, 0, 2251, 2252, 1, 0, 0, 0, 2252, 2253, 1, 0, 0, 0, 2253, 2254,
        5, 96, 0, 0, 2254, 349, 1, 0, 0, 0, 2255, 2271, 3, 348, 174, 0, 2256, 2257, 3, 336,
        168, 0, 2257, 2259, 5, 95, 0, 0, 2258, 2260, 3, 354, 177, 0, 2259, 2258, 1, 0, 0, 0,
        2259, 2260, 1, 0, 0, 0, 2260, 2261, 1, 0, 0, 0, 2261, 2262, 5, 96, 0, 0, 2262, 2271,
        1, 0, 0, 0, 2263, 2264, 3, 338, 169, 0, 2264, 2266, 5, 95, 0, 0, 2265, 2267, 3, 354,
        177, 0, 2266, 2265, 1, 0, 0, 0, 2266, 2267, 1, 0, 0, 0, 2267, 2268, 1, 0, 0, 0, 2268,
        2269, 5, 96, 0, 0, 2269, 2271, 1, 0, 0, 0, 2270, 2255, 1, 0, 0, 0, 2270, 2256, 1, 0,
        0, 0, 2270, 2263, 1, 0, 0, 0, 2271, 351, 1, 0, 0, 0, 2272, 2273, 5, 125, 0, 0, 2273,
        353, 1, 0, 0, 0, 2274, 2275, 6, 177, -1, 0, 2275, 2277, 3, 356, 178, 0, 2276, 2278,
        5, 124, 0, 0, 2277, 2276, 1, 0, 0, 0, 2277, 2278, 1, 0, 0, 0, 2278, 2287, 1, 0, 0, 0,
        2279, 2280, 10, 1, 0, 0, 2280, 2281, 5, 115, 0, 0, 2281, 2283, 3, 356, 178, 0, 2282,
        2284, 5, 124, 0, 0, 2283, 2282, 1, 0, 0, 0, 2283, 2284, 1, 0, 0, 0, 2284, 2286, 1, 0,
        0, 0, 2285, 2279, 1, 0, 0, 0, 2286, 2289, 1, 0, 0, 0, 2287, 2285, 1, 0, 0, 0, 2287, 2288,
        1, 0, 0, 0, 2288, 355, 1, 0, 0, 0, 2289, 2287, 1, 0, 0, 0, 2290, 2294, 3, 252, 126, 0,
        2291, 2294, 3, 88, 44, 0, 2292, 2294, 3, 4, 2, 0, 2293, 2290, 1, 0, 0, 0, 2293, 2291,
        1, 0, 0, 0, 2293, 2292, 1, 0, 0, 0, 2294, 357, 1, 0, 0, 0, 2295, 2296, 5, 69, 0, 0, 2296,
        2297, 3, 10, 5, 0, 2297, 2298, 5, 125, 0, 0, 2298, 2307, 1, 0, 0, 0, 2299, 2300, 5,
        69, 0, 0, 2300, 2302, 3, 10, 5, 0, 2301, 2303, 5, 61, 0, 0, 2302, 2301, 1, 0, 0, 0, 2302,
        2303, 1, 0, 0, 0, 2303, 2304, 1, 0, 0, 0, 2304, 2305, 3, 348, 174, 0, 2305, 2307, 1,
        0, 0, 0, 2306, 2295, 1, 0, 0, 0, 2306, 2299, 1, 0, 0, 0, 2307, 359, 1, 0, 0, 0, 2308,
        2310, 5, 29, 0, 0, 2309, 2308, 1, 0, 0, 0, 2309, 2310, 1, 0, 0, 0, 2310, 2311, 1, 0,
        0, 0, 2311, 2312, 5, 61, 0, 0, 2312, 2313, 3, 118, 59, 0, 2313, 361, 1, 0, 0, 0, 2314,
        2315, 5, 61, 0, 0, 2315, 2316, 5, 95, 0, 0, 2316, 2317, 5, 96, 0, 0, 2317, 2318, 3,
        118, 59, 0, 2318, 363, 1, 0, 0, 0, 2319, 2320, 5, 66, 0, 0, 2320, 2321, 3, 96, 48, 0,
        2321, 2322, 3, 368, 184, 0, 2322, 365, 1, 0, 0, 0, 2323, 2325, 5, 66, 0, 0, 2324, 2326,
        3, 328, 164, 0, 2325, 2324, 1, 0, 0, 0, 2325, 2326, 1, 0, 0, 0, 2326, 2327, 1, 0, 0,
        0, 2327, 2328, 3, 96, 48, 0, 2328, 2329, 3, 368, 184, 0, 2329, 367, 1, 0, 0, 0, 2330,
        2332, 3, 370, 185, 0, 2331, 2333, 3, 368, 184, 0, 2332, 2331, 1, 0, 0, 0, 2332, 2333,
        1, 0, 0, 0, 2333, 369, 1, 0, 0, 0, 2334, 2335, 5, 10, 0, 0, 2335, 2336, 5, 78, 0, 0, 2336,
        2337, 3, 372, 186, 0, 2337, 2338, 5, 79, 0, 0, 2338, 2339, 3, 96, 48, 0, 2339, 371,
        1, 0, 0, 0, 2340, 2342, 3, 206, 103, 0, 2341, 2340, 1, 0, 0, 0, 2341, 2342, 1, 0, 0,
        0, 2342, 2343, 1, 0, 0, 0, 2343, 2344, 3, 146, 73, 0, 2344, 2345, 3, 232, 116, 0, 2345,
        2355, 1, 0, 0, 0, 2346, 2348, 3, 206, 103, 0, 2347, 2346, 1, 0, 0, 0, 2347, 2348, 1,
        0, 0, 0, 2348, 2349, 1, 0, 0, 0, 2349, 2351, 3, 146, 73, 0, 2350, 2352, 3, 254, 127,
        0, 2351, 2350, 1, 0, 0, 0, 2351, 2352, 1, 0, 0, 0, 2352, 2355, 1, 0, 0, 0, 2353, 2355,
        5, 124, 0, 0, 2354, 2341, 1, 0, 0, 0, 2354, 2347, 1, 0, 0, 0, 2354, 2353, 1, 0, 0, 0,
        2355, 373, 1, 0, 0, 0, 2356, 2358, 5, 64, 0, 0, 2357, 2359, 3, 82, 41, 0, 2358, 2357,
        1, 0, 0, 0, 2358, 2359, 1, 0, 0, 0, 2359, 375, 1, 0, 0, 0, 2360, 2363, 3, 378, 189, 0,
        2361, 2363, 3, 382, 191, 0, 2362, 2360, 1, 0, 0, 0, 2362, 2361, 1, 0, 0, 0, 2363, 377,
        1, 0, 0, 0, 2364, 2365, 5, 64, 0, 0, 2365, 2367, 5, 78, 0, 0, 2366, 2368, 3, 380, 190,
        0, 2367, 2366, 1, 0, 0, 0, 2367, 2368, 1, 0, 0, 0, 2368, 2369, 1, 0, 0, 0, 2369, 2370,
        5, 79, 0, 0, 2370, 379, 1, 0, 0, 0, 2371, 2372, 6, 190, -1, 0, 2372, 2374, 3, 252, 126,
        0, 2373, 2375, 5, 124, 0, 0, 2374, 2373, 1, 0, 0, 0, 2374, 2375, 1, 0, 0, 0, 2375, 2384,
        1, 0, 0, 0, 2376, 2377, 10, 1, 0, 0, 2377, 2378, 5, 115, 0, 0, 2378, 2380, 3, 252, 126,
        0, 2379, 2381, 5, 124, 0, 0, 2380, 2379, 1, 0, 0, 0, 2380, 2381, 1, 0, 0, 0, 2381, 2383,
        1, 0, 0, 0, 2382, 2376, 1, 0, 0, 0, 2383, 2386, 1, 0, 0, 0, 2384, 2382, 1, 0, 0, 0, 2384,
        2385, 1, 0, 0, 0, 2385, 381, 1, 0, 0, 0, 2386, 2384, 1, 0, 0, 0, 2387, 2388, 5, 43, 0,
        0, 2388, 2389, 5, 78, 0, 0, 2389, 2390, 3, 88, 44, 0, 2390, 2391, 5, 79, 0, 0, 2391,
        2394, 1, 0, 0, 0, 2392, 2394, 5, 43, 0, 0, 2393, 2387, 1, 0, 0, 0, 2393, 2392, 1, 0,
        0, 0, 2394, 383, 1, 0, 0, 0, 2395, 2396, 5, 96, 0, 0, 2396, 2397, 5, 96, 0, 0, 2397,
        385, 1, 0, 0, 0, 2398, 2399, 5, 96, 0, 0, 2399, 2400, 5, 96, 0, 0, 2400, 2401, 5, 94,
        0, 0, 2401, 387, 1, 0, 0, 0, 2402, 2451, 5, 42, 0, 0, 2403, 2451, 5, 21, 0, 0, 2404,
        2405, 5, 42, 0, 0, 2405, 2406, 5, 80, 0, 0, 2406, 2451, 5, 81, 0, 0, 2407, 2408, 5,
        21, 0, 0, 2408, 2409, 5, 80, 0, 0, 2409, 2451, 5, 81, 0, 0, 2410, 2451, 5, 84, 0, 0,
        2411, 2451, 5, 85, 0, 0, 2412, 2451, 5, 86, 0, 0, 2413, 2451, 5, 87, 0, 0, 2414, 2451,
        5, 88, 0, 0, 2415, 2451, 5, 89, 0, 0, 2416, 2451, 5, 90, 0, 0, 2417, 2451, 5, 91, 0,
        0, 2418, 2451, 5, 92, 0, 0, 2419, 2451, 5, 93, 0, 0, 2420, 2451, 5, 94, 0, 0, 2421,
        2451, 5, 95, 0, 0, 2422, 2451, 5, 96, 0, 0, 2423, 2451, 5, 97, 0, 0, 2424, 2451, 5,
        98, 0, 0, 2425, 2451, 5, 99, 0, 0, 2426, 2451, 5, 100, 0, 0, 2427, 2451, 5, 101, 0,
        0, 2428, 2451, 5, 102, 0, 0, 2429, 2451, 5, 103, 0, 0, 2430, 2451, 5, 104, 0, 0, 2431,
        2451, 5, 105, 0, 0, 2432, 2451, 3, 384, 192, 0, 2433, 2451, 3, 386, 193, 0, 2434,
        2451, 5, 106, 0, 0, 2435, 2451, 5, 107, 0, 0, 2436, 2451, 5, 108, 0, 0, 2437, 2451,
        5, 109, 0, 0, 2438, 2451, 5, 110, 0, 0, 2439, 2451, 5, 111, 0, 0, 2440, 2451, 5, 112,
        0, 0, 2441, 2451, 5, 113, 0, 0, 2442, 2451, 5, 114, 0, 0, 2443, 2451, 5, 115, 0, 0,
        2444, 2451, 5, 116, 0, 0, 2445, 2451, 5, 117, 0, 0, 2446, 2447, 5, 78, 0, 0, 2447,
        2451, 5, 79, 0, 0, 2448, 2449, 5, 80, 0, 0, 2449, 2451, 5, 81, 0, 0, 2450, 2402, 1,
        0, 0, 0, 2450, 2403, 1, 0, 0, 0, 2450, 2404, 1, 0, 0, 0, 2450, 2407, 1, 0, 0, 0, 2450,
        2410, 1, 0, 0, 0, 2450, 2411, 1, 0, 0, 0, 2450, 2412, 1, 0, 0, 0, 2450, 2413, 1, 0, 0,
        0, 2450, 2414, 1, 0, 0, 0, 2450, 2415, 1, 0, 0, 0, 2450, 2416, 1, 0, 0, 0, 2450, 2417,
        1, 0, 0, 0, 2450, 2418, 1, 0, 0, 0, 2450, 2419, 1, 0, 0, 0, 2450, 2420, 1, 0, 0, 0, 2450,
        2421, 1, 0, 0, 0, 2450, 2422, 1, 0, 0, 0, 2450, 2423, 1, 0, 0, 0, 2450, 2424, 1, 0, 0,
        0, 2450, 2425, 1, 0, 0, 0, 2450, 2426, 1, 0, 0, 0, 2450, 2427, 1, 0, 0, 0, 2450, 2428,
        1, 0, 0, 0, 2450, 2429, 1, 0, 0, 0, 2450, 2430, 1, 0, 0, 0, 2450, 2431, 1, 0, 0, 0, 2450,
        2432, 1, 0, 0, 0, 2450, 2433, 1, 0, 0, 0, 2450, 2434, 1, 0, 0, 0, 2450, 2435, 1, 0, 0,
        0, 2450, 2436, 1, 0, 0, 0, 2450, 2437, 1, 0, 0, 0, 2450, 2438, 1, 0, 0, 0, 2450, 2439,
        1, 0, 0, 0, 2450, 2440, 1, 0, 0, 0, 2450, 2441, 1, 0, 0, 0, 2450, 2442, 1, 0, 0, 0, 2450,
        2443, 1, 0, 0, 0, 2450, 2444, 1, 0, 0, 0, 2450, 2445, 1, 0, 0, 0, 2450, 2446, 1, 0, 0,
        0, 2450, 2448, 1, 0, 0, 0, 2451, 389, 1, 0, 0, 0, 2452, 2460, 5, 126, 0, 0, 2453, 2460,
        5, 132, 0, 0, 2454, 2460, 5, 133, 0, 0, 2455, 2460, 5, 134, 0, 0, 2456, 2460, 3, 392,
        196, 0, 2457, 2460, 3, 394, 197, 0, 2458, 2460, 3, 396, 198, 0, 2459, 2452, 1, 0,
        0, 0, 2459, 2453, 1, 0, 0, 0, 2459, 2454, 1, 0, 0, 0, 2459, 2455, 1, 0, 0, 0, 2459, 2456,
        1, 0, 0, 0, 2459, 2457, 1, 0, 0, 0, 2459, 2458, 1, 0, 0, 0, 2460, 391, 1, 0, 0, 0, 2461,
        2462, 7, 9, 0, 0, 2462, 393, 1, 0, 0, 0, 2463, 2464, 5, 44, 0, 0, 2464, 395, 1, 0, 0,
        0, 2465, 2466, 7, 10, 0, 0, 2466, 397, 1, 0, 0, 0, 315, 399, 411, 415, 426, 430, 445,
        452, 457, 459, 464, 470, 480, 487, 493, 497, 502, 508, 515, 521, 524, 527, 530,
        537, 544, 596, 611, 617, 623, 636, 638, 644, 659, 665, 695, 700, 704, 708, 711,
        715, 721, 723, 731, 735, 738, 745, 752, 756, 761, 765, 768, 773, 779, 792, 803,
        805, 820, 822, 834, 836, 849, 851, 869, 871, 883, 885, 896, 907, 918, 929, 940,
        950, 958, 971, 981, 988, 992, 996, 1000, 1004, 1009, 1012, 1015, 1021, 1029, 1034,
        1037, 1043, 1054, 1077, 1081, 1089, 1095, 1115, 1119, 1132, 1136, 1139, 1146,
        1154, 1164, 1175, 1187, 1197, 1202, 1209, 1212, 1217, 1222, 1243, 1247, 1252,
        1263, 1269, 1273, 1278, 1282, 1287, 1290, 1312, 1318, 1329, 1333, 1336, 1346,
        1352, 1355, 1362, 1372, 1376, 1379, 1382, 1386, 1391, 1393, 1397, 1401, 1410,
        1423, 1431, 1437, 1443, 1447, 1450, 1459, 1468, 1476, 1487, 1493, 1504, 1507,
        1512, 1527, 1533, 1542, 1552, 1558, 1566, 1570, 1574, 1579, 1584, 1591, 1593,
        1598, 1602, 1616, 1622, 1637, 1647, 1652, 1659, 1665, 1670, 1676, 1683, 1687,
        1689, 1691, 1698, 1701, 1704, 1707, 1712, 1716, 1719, 1723, 1727, 1732, 1735,
        1737, 1741, 1748, 1754, 1758, 1764, 1769, 1771, 1777, 1781, 1787, 1794, 1798,
        1800, 1802, 1809, 1819, 1823, 1825, 1827, 1831, 1834, 1840, 1850, 1854, 1860,
        1868, 1872, 1875, 1879, 1884, 1887, 1890, 1894, 1899, 1909, 1916, 1921, 1925,
        1930, 1936, 1940, 1946, 1952, 1956, 1961, 1967, 1971, 1974, 1978, 1981, 1983,
        1986, 1996, 2001, 2003, 2006, 2009, 2012, 2021, 2031, 2036, 2039, 2043, 2046,
        2049, 2053, 2062, 2077, 2083, 2087, 2091, 2095, 2099, 2103, 2107, 2111, 2114,
        2118, 2129, 2133, 2140, 2144, 2149, 2154, 2161, 2165, 2175, 2191, 2196, 2200,
        2203, 2207, 2213, 2216, 2220, 2230, 2233, 2241, 2246, 2251, 2259, 2266, 2270,
        2277, 2283, 2287, 2293, 2302, 2306, 2309, 2325, 2332, 2341, 2347, 2351, 2354,
        2358, 2362, 2367, 2374, 2380, 2384, 2393, 2450, 2459
    ];
    CPP14Parser.vocabulary = new antlr.Vocabulary(CPP14Parser.literalNames, CPP14Parser.symbolicNames, []);
    CPP14Parser.decisionsToDFA = CPP14Parser._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return CPP14Parser;
}(antlr.Parser));
exports.CPP14Parser = CPP14Parser;
var TranslationunitContext = /** @class */ (function (_super) {
    __extends(TranslationunitContext, _super);
    function TranslationunitContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TranslationunitContext.prototype.EOF = function () {
        return this.getToken(CPP14Parser.EOF, 0);
    };
    TranslationunitContext.prototype.declarationseq = function () {
        return this.getTypedRuleContext(DeclarationseqContext, 0);
    };
    Object.defineProperty(TranslationunitContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_translationunit;
        },
        enumerable: false,
        configurable: true
    });
    return TranslationunitContext;
}(antlr.ParserRuleContext));
exports.TranslationunitContext = TranslationunitContext;
var PrimaryexpressionContext = /** @class */ (function (_super) {
    __extends(PrimaryexpressionContext, _super);
    function PrimaryexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PrimaryexpressionContext.prototype.literal = function () {
        return this.getTypedRuleContext(LiteralContext, 0);
    };
    PrimaryexpressionContext.prototype.This = function () {
        return this.getToken(CPP14Parser.This, 0);
    };
    PrimaryexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    PrimaryexpressionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    PrimaryexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    PrimaryexpressionContext.prototype.idexpression = function () {
        return this.getTypedRuleContext(IdexpressionContext, 0);
    };
    PrimaryexpressionContext.prototype.lambdaexpression = function () {
        return this.getTypedRuleContext(LambdaexpressionContext, 0);
    };
    Object.defineProperty(PrimaryexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_primaryexpression;
        },
        enumerable: false,
        configurable: true
    });
    return PrimaryexpressionContext;
}(antlr.ParserRuleContext));
exports.PrimaryexpressionContext = PrimaryexpressionContext;
var IdexpressionContext = /** @class */ (function (_super) {
    __extends(IdexpressionContext, _super);
    function IdexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IdexpressionContext.prototype.unqualifiedid = function () {
        return this.getTypedRuleContext(UnqualifiedidContext, 0);
    };
    IdexpressionContext.prototype.qualifiedid = function () {
        return this.getTypedRuleContext(QualifiedidContext, 0);
    };
    Object.defineProperty(IdexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_idexpression;
        },
        enumerable: false,
        configurable: true
    });
    return IdexpressionContext;
}(antlr.ParserRuleContext));
exports.IdexpressionContext = IdexpressionContext;
var UnqualifiedidContext = /** @class */ (function (_super) {
    __extends(UnqualifiedidContext, _super);
    function UnqualifiedidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnqualifiedidContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    UnqualifiedidContext.prototype.operatorfunctionid = function () {
        return this.getTypedRuleContext(OperatorfunctionidContext, 0);
    };
    UnqualifiedidContext.prototype.conversionfunctionid = function () {
        return this.getTypedRuleContext(ConversionfunctionidContext, 0);
    };
    UnqualifiedidContext.prototype.literaloperatorid = function () {
        return this.getTypedRuleContext(LiteraloperatoridContext, 0);
    };
    UnqualifiedidContext.prototype.Tilde = function () {
        return this.getToken(CPP14Parser.Tilde, 0);
    };
    UnqualifiedidContext.prototype.classname = function () {
        return this.getTypedRuleContext(ClassnameContext, 0);
    };
    UnqualifiedidContext.prototype.decltypespecifier = function () {
        return this.getTypedRuleContext(DecltypespecifierContext, 0);
    };
    UnqualifiedidContext.prototype.templateid = function () {
        return this.getTypedRuleContext(TemplateidContext, 0);
    };
    Object.defineProperty(UnqualifiedidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_unqualifiedid;
        },
        enumerable: false,
        configurable: true
    });
    return UnqualifiedidContext;
}(antlr.ParserRuleContext));
exports.UnqualifiedidContext = UnqualifiedidContext;
var QualifiedidContext = /** @class */ (function (_super) {
    __extends(QualifiedidContext, _super);
    function QualifiedidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiedidContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    QualifiedidContext.prototype.unqualifiedid = function () {
        return this.getTypedRuleContext(UnqualifiedidContext, 0);
    };
    QualifiedidContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    Object.defineProperty(QualifiedidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_qualifiedid;
        },
        enumerable: false,
        configurable: true
    });
    return QualifiedidContext;
}(antlr.ParserRuleContext));
exports.QualifiedidContext = QualifiedidContext;
var NestednamespecifierContext = /** @class */ (function (_super) {
    __extends(NestednamespecifierContext, _super);
    function NestednamespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NestednamespecifierContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    NestednamespecifierContext.prototype.typename = function () {
        return this.getTypedRuleContext(TypenameContext, 0);
    };
    NestednamespecifierContext.prototype.namespacename = function () {
        return this.getTypedRuleContext(NamespacenameContext, 0);
    };
    NestednamespecifierContext.prototype.decltypespecifier = function () {
        return this.getTypedRuleContext(DecltypespecifierContext, 0);
    };
    NestednamespecifierContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    NestednamespecifierContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    NestednamespecifierContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    NestednamespecifierContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    Object.defineProperty(NestednamespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_nestednamespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return NestednamespecifierContext;
}(antlr.ParserRuleContext));
exports.NestednamespecifierContext = NestednamespecifierContext;
var LambdaexpressionContext = /** @class */ (function (_super) {
    __extends(LambdaexpressionContext, _super);
    function LambdaexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaexpressionContext.prototype.lambdaintroducer = function () {
        return this.getTypedRuleContext(LambdaintroducerContext, 0);
    };
    LambdaexpressionContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    LambdaexpressionContext.prototype.lambdadeclarator = function () {
        return this.getTypedRuleContext(LambdadeclaratorContext, 0);
    };
    Object.defineProperty(LambdaexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_lambdaexpression;
        },
        enumerable: false,
        configurable: true
    });
    return LambdaexpressionContext;
}(antlr.ParserRuleContext));
exports.LambdaexpressionContext = LambdaexpressionContext;
var LambdaintroducerContext = /** @class */ (function (_super) {
    __extends(LambdaintroducerContext, _super);
    function LambdaintroducerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdaintroducerContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    LambdaintroducerContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    LambdaintroducerContext.prototype.lambdacapture = function () {
        return this.getTypedRuleContext(LambdacaptureContext, 0);
    };
    Object.defineProperty(LambdaintroducerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_lambdaintroducer;
        },
        enumerable: false,
        configurable: true
    });
    return LambdaintroducerContext;
}(antlr.ParserRuleContext));
exports.LambdaintroducerContext = LambdaintroducerContext;
var LambdacaptureContext = /** @class */ (function (_super) {
    __extends(LambdacaptureContext, _super);
    function LambdacaptureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdacaptureContext.prototype.capturedefault = function () {
        return this.getTypedRuleContext(CapturedefaultContext, 0);
    };
    LambdacaptureContext.prototype.capturelist = function () {
        return this.getTypedRuleContext(CapturelistContext, 0);
    };
    LambdacaptureContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(LambdacaptureContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_lambdacapture;
        },
        enumerable: false,
        configurable: true
    });
    return LambdacaptureContext;
}(antlr.ParserRuleContext));
exports.LambdacaptureContext = LambdacaptureContext;
var CapturedefaultContext = /** @class */ (function (_super) {
    __extends(CapturedefaultContext, _super);
    function CapturedefaultContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CapturedefaultContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    CapturedefaultContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    Object.defineProperty(CapturedefaultContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_capturedefault;
        },
        enumerable: false,
        configurable: true
    });
    return CapturedefaultContext;
}(antlr.ParserRuleContext));
exports.CapturedefaultContext = CapturedefaultContext;
var CapturelistContext = /** @class */ (function (_super) {
    __extends(CapturelistContext, _super);
    function CapturelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CapturelistContext.prototype.capture = function () {
        return this.getTypedRuleContext(CaptureContext, 0);
    };
    CapturelistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    CapturelistContext.prototype.capturelist = function () {
        return this.getTypedRuleContext(CapturelistContext, 0);
    };
    CapturelistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(CapturelistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_capturelist;
        },
        enumerable: false,
        configurable: true
    });
    return CapturelistContext;
}(antlr.ParserRuleContext));
exports.CapturelistContext = CapturelistContext;
var CaptureContext = /** @class */ (function (_super) {
    __extends(CaptureContext, _super);
    function CaptureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaptureContext.prototype.simplecapture = function () {
        return this.getTypedRuleContext(SimplecaptureContext, 0);
    };
    CaptureContext.prototype.initcapture = function () {
        return this.getTypedRuleContext(InitcaptureContext, 0);
    };
    Object.defineProperty(CaptureContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_capture;
        },
        enumerable: false,
        configurable: true
    });
    return CaptureContext;
}(antlr.ParserRuleContext));
exports.CaptureContext = CaptureContext;
var SimplecaptureContext = /** @class */ (function (_super) {
    __extends(SimplecaptureContext, _super);
    function SimplecaptureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimplecaptureContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    SimplecaptureContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    SimplecaptureContext.prototype.This = function () {
        return this.getToken(CPP14Parser.This, 0);
    };
    Object.defineProperty(SimplecaptureContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_simplecapture;
        },
        enumerable: false,
        configurable: true
    });
    return SimplecaptureContext;
}(antlr.ParserRuleContext));
exports.SimplecaptureContext = SimplecaptureContext;
var InitcaptureContext = /** @class */ (function (_super) {
    __extends(InitcaptureContext, _super);
    function InitcaptureContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitcaptureContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    InitcaptureContext.prototype.initializer = function () {
        return this.getTypedRuleContext(InitializerContext, 0);
    };
    InitcaptureContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    Object.defineProperty(InitcaptureContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initcapture;
        },
        enumerable: false,
        configurable: true
    });
    return InitcaptureContext;
}(antlr.ParserRuleContext));
exports.InitcaptureContext = InitcaptureContext;
var LambdadeclaratorContext = /** @class */ (function (_super) {
    __extends(LambdadeclaratorContext, _super);
    function LambdadeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LambdadeclaratorContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    LambdadeclaratorContext.prototype.parameterdeclarationclause = function () {
        return this.getTypedRuleContext(ParameterdeclarationclauseContext, 0);
    };
    LambdadeclaratorContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    LambdadeclaratorContext.prototype.Mutable = function () {
        return this.getToken(CPP14Parser.Mutable, 0);
    };
    LambdadeclaratorContext.prototype.exceptionspecification = function () {
        return this.getTypedRuleContext(ExceptionspecificationContext, 0);
    };
    LambdadeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    LambdadeclaratorContext.prototype.trailingreturntype = function () {
        return this.getTypedRuleContext(TrailingreturntypeContext, 0);
    };
    Object.defineProperty(LambdadeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_lambdadeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return LambdadeclaratorContext;
}(antlr.ParserRuleContext));
exports.LambdadeclaratorContext = LambdadeclaratorContext;
var PostfixexpressionContext = /** @class */ (function (_super) {
    __extends(PostfixexpressionContext, _super);
    function PostfixexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PostfixexpressionContext.prototype.primaryexpression = function () {
        return this.getTypedRuleContext(PrimaryexpressionContext, 0);
    };
    PostfixexpressionContext.prototype.simpletypespecifier = function () {
        return this.getTypedRuleContext(SimpletypespecifierContext, 0);
    };
    PostfixexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    PostfixexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    PostfixexpressionContext.prototype.expressionlist = function () {
        return this.getTypedRuleContext(ExpressionlistContext, 0);
    };
    PostfixexpressionContext.prototype.typenamespecifier = function () {
        return this.getTypedRuleContext(TypenamespecifierContext, 0);
    };
    PostfixexpressionContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    PostfixexpressionContext.prototype.Dynamic_cast = function () {
        return this.getToken(CPP14Parser.Dynamic_cast, 0);
    };
    PostfixexpressionContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    PostfixexpressionContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    PostfixexpressionContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    PostfixexpressionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    PostfixexpressionContext.prototype.Static_cast = function () {
        return this.getToken(CPP14Parser.Static_cast, 0);
    };
    PostfixexpressionContext.prototype.Reinterpret_cast = function () {
        return this.getToken(CPP14Parser.Reinterpret_cast, 0);
    };
    PostfixexpressionContext.prototype.Const_cast = function () {
        return this.getToken(CPP14Parser.Const_cast, 0);
    };
    PostfixexpressionContext.prototype.Typeid = function () {
        return this.getToken(CPP14Parser.Typeid, 0);
    };
    PostfixexpressionContext.prototype.postfixexpression = function () {
        return this.getTypedRuleContext(PostfixexpressionContext, 0);
    };
    PostfixexpressionContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    PostfixexpressionContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    PostfixexpressionContext.prototype.Dot = function () {
        return this.getToken(CPP14Parser.Dot, 0);
    };
    PostfixexpressionContext.prototype.idexpression = function () {
        return this.getTypedRuleContext(IdexpressionContext, 0);
    };
    PostfixexpressionContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    PostfixexpressionContext.prototype.Arrow = function () {
        return this.getToken(CPP14Parser.Arrow, 0);
    };
    PostfixexpressionContext.prototype.pseudodestructorname = function () {
        return this.getTypedRuleContext(PseudodestructornameContext, 0);
    };
    PostfixexpressionContext.prototype.PlusPlus = function () {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    };
    PostfixexpressionContext.prototype.MinusMinus = function () {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    };
    Object.defineProperty(PostfixexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_postfixexpression;
        },
        enumerable: false,
        configurable: true
    });
    return PostfixexpressionContext;
}(antlr.ParserRuleContext));
exports.PostfixexpressionContext = PostfixexpressionContext;
var ExpressionlistContext = /** @class */ (function (_super) {
    __extends(ExpressionlistContext, _super);
    function ExpressionlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionlistContext.prototype.initializerlist = function () {
        return this.getTypedRuleContext(InitializerlistContext, 0);
    };
    Object.defineProperty(ExpressionlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_expressionlist;
        },
        enumerable: false,
        configurable: true
    });
    return ExpressionlistContext;
}(antlr.ParserRuleContext));
exports.ExpressionlistContext = ExpressionlistContext;
var PseudodestructornameContext = /** @class */ (function (_super) {
    __extends(PseudodestructornameContext, _super);
    function PseudodestructornameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PseudodestructornameContext.prototype.typename__list = function () {
        return this.getTypedRuleContexts(TypenameContext);
    };
    PseudodestructornameContext.prototype.typename = function (i) {
        return this.getTypedRuleContext(TypenameContext, i);
    };
    PseudodestructornameContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    PseudodestructornameContext.prototype.Tilde = function () {
        return this.getToken(CPP14Parser.Tilde, 0);
    };
    PseudodestructornameContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    PseudodestructornameContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    PseudodestructornameContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    PseudodestructornameContext.prototype.decltypespecifier = function () {
        return this.getTypedRuleContext(DecltypespecifierContext, 0);
    };
    Object.defineProperty(PseudodestructornameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_pseudodestructorname;
        },
        enumerable: false,
        configurable: true
    });
    return PseudodestructornameContext;
}(antlr.ParserRuleContext));
exports.PseudodestructornameContext = PseudodestructornameContext;
var UnaryexpressionContext = /** @class */ (function (_super) {
    __extends(UnaryexpressionContext, _super);
    function UnaryexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryexpressionContext.prototype.postfixexpression = function () {
        return this.getTypedRuleContext(PostfixexpressionContext, 0);
    };
    UnaryexpressionContext.prototype.PlusPlus = function () {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    };
    UnaryexpressionContext.prototype.castexpression = function () {
        return this.getTypedRuleContext(CastexpressionContext, 0);
    };
    UnaryexpressionContext.prototype.MinusMinus = function () {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    };
    UnaryexpressionContext.prototype.unaryoperator = function () {
        return this.getTypedRuleContext(UnaryoperatorContext, 0);
    };
    UnaryexpressionContext.prototype.Sizeof = function () {
        return this.getToken(CPP14Parser.Sizeof, 0);
    };
    UnaryexpressionContext.prototype.unaryexpression = function () {
        return this.getTypedRuleContext(UnaryexpressionContext, 0);
    };
    UnaryexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    UnaryexpressionContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    UnaryexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    UnaryexpressionContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    UnaryexpressionContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    UnaryexpressionContext.prototype.Alignof = function () {
        return this.getToken(CPP14Parser.Alignof, 0);
    };
    UnaryexpressionContext.prototype.noexceptexpression = function () {
        return this.getTypedRuleContext(NoexceptexpressionContext, 0);
    };
    UnaryexpressionContext.prototype.newexpression = function () {
        return this.getTypedRuleContext(NewexpressionContext, 0);
    };
    UnaryexpressionContext.prototype.deleteexpression = function () {
        return this.getTypedRuleContext(DeleteexpressionContext, 0);
    };
    Object.defineProperty(UnaryexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_unaryexpression;
        },
        enumerable: false,
        configurable: true
    });
    return UnaryexpressionContext;
}(antlr.ParserRuleContext));
exports.UnaryexpressionContext = UnaryexpressionContext;
var UnaryoperatorContext = /** @class */ (function (_super) {
    __extends(UnaryoperatorContext, _super);
    function UnaryoperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnaryoperatorContext.prototype.Or = function () {
        return this.getToken(CPP14Parser.Or, 0);
    };
    UnaryoperatorContext.prototype.Star = function () {
        return this.getToken(CPP14Parser.Star, 0);
    };
    UnaryoperatorContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    UnaryoperatorContext.prototype.Plus = function () {
        return this.getToken(CPP14Parser.Plus, 0);
    };
    UnaryoperatorContext.prototype.Not = function () {
        return this.getToken(CPP14Parser.Not, 0);
    };
    UnaryoperatorContext.prototype.Tilde = function () {
        return this.getToken(CPP14Parser.Tilde, 0);
    };
    UnaryoperatorContext.prototype.Minus = function () {
        return this.getToken(CPP14Parser.Minus, 0);
    };
    Object.defineProperty(UnaryoperatorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_unaryoperator;
        },
        enumerable: false,
        configurable: true
    });
    return UnaryoperatorContext;
}(antlr.ParserRuleContext));
exports.UnaryoperatorContext = UnaryoperatorContext;
var NewexpressionContext = /** @class */ (function (_super) {
    __extends(NewexpressionContext, _super);
    function NewexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewexpressionContext.prototype.New = function () {
        return this.getToken(CPP14Parser.New, 0);
    };
    NewexpressionContext.prototype.newtypeid = function () {
        return this.getTypedRuleContext(NewtypeidContext, 0);
    };
    NewexpressionContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    NewexpressionContext.prototype.newplacement = function () {
        return this.getTypedRuleContext(NewplacementContext, 0);
    };
    NewexpressionContext.prototype.newinitializer = function () {
        return this.getTypedRuleContext(NewinitializerContext, 0);
    };
    NewexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NewexpressionContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    NewexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(NewexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_newexpression;
        },
        enumerable: false,
        configurable: true
    });
    return NewexpressionContext;
}(antlr.ParserRuleContext));
exports.NewexpressionContext = NewexpressionContext;
var NewplacementContext = /** @class */ (function (_super) {
    __extends(NewplacementContext, _super);
    function NewplacementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewplacementContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NewplacementContext.prototype.expressionlist = function () {
        return this.getTypedRuleContext(ExpressionlistContext, 0);
    };
    NewplacementContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(NewplacementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_newplacement;
        },
        enumerable: false,
        configurable: true
    });
    return NewplacementContext;
}(antlr.ParserRuleContext));
exports.NewplacementContext = NewplacementContext;
var NewtypeidContext = /** @class */ (function (_super) {
    __extends(NewtypeidContext, _super);
    function NewtypeidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewtypeidContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    NewtypeidContext.prototype.newdeclarator = function () {
        return this.getTypedRuleContext(NewdeclaratorContext, 0);
    };
    Object.defineProperty(NewtypeidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_newtypeid;
        },
        enumerable: false,
        configurable: true
    });
    return NewtypeidContext;
}(antlr.ParserRuleContext));
exports.NewtypeidContext = NewtypeidContext;
var NewdeclaratorContext = /** @class */ (function (_super) {
    __extends(NewdeclaratorContext, _super);
    function NewdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewdeclaratorContext.prototype.ptroperator = function () {
        return this.getTypedRuleContext(PtroperatorContext, 0);
    };
    NewdeclaratorContext.prototype.newdeclarator = function () {
        return this.getTypedRuleContext(NewdeclaratorContext, 0);
    };
    NewdeclaratorContext.prototype.noptrnewdeclarator = function () {
        return this.getTypedRuleContext(NoptrnewdeclaratorContext, 0);
    };
    Object.defineProperty(NewdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_newdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return NewdeclaratorContext;
}(antlr.ParserRuleContext));
exports.NewdeclaratorContext = NewdeclaratorContext;
var NoptrnewdeclaratorContext = /** @class */ (function (_super) {
    __extends(NoptrnewdeclaratorContext, _super);
    function NoptrnewdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoptrnewdeclaratorContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    NoptrnewdeclaratorContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    NoptrnewdeclaratorContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    NoptrnewdeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    NoptrnewdeclaratorContext.prototype.noptrnewdeclarator = function () {
        return this.getTypedRuleContext(NoptrnewdeclaratorContext, 0);
    };
    NoptrnewdeclaratorContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    Object.defineProperty(NoptrnewdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noptrnewdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return NoptrnewdeclaratorContext;
}(antlr.ParserRuleContext));
exports.NoptrnewdeclaratorContext = NoptrnewdeclaratorContext;
var NewinitializerContext = /** @class */ (function (_super) {
    __extends(NewinitializerContext, _super);
    function NewinitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NewinitializerContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NewinitializerContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    NewinitializerContext.prototype.expressionlist = function () {
        return this.getTypedRuleContext(ExpressionlistContext, 0);
    };
    NewinitializerContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(NewinitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_newinitializer;
        },
        enumerable: false,
        configurable: true
    });
    return NewinitializerContext;
}(antlr.ParserRuleContext));
exports.NewinitializerContext = NewinitializerContext;
var DeleteexpressionContext = /** @class */ (function (_super) {
    __extends(DeleteexpressionContext, _super);
    function DeleteexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeleteexpressionContext.prototype.Delete = function () {
        return this.getToken(CPP14Parser.Delete, 0);
    };
    DeleteexpressionContext.prototype.castexpression = function () {
        return this.getTypedRuleContext(CastexpressionContext, 0);
    };
    DeleteexpressionContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    DeleteexpressionContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    DeleteexpressionContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    Object.defineProperty(DeleteexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_deleteexpression;
        },
        enumerable: false,
        configurable: true
    });
    return DeleteexpressionContext;
}(antlr.ParserRuleContext));
exports.DeleteexpressionContext = DeleteexpressionContext;
var NoexceptexpressionContext = /** @class */ (function (_super) {
    __extends(NoexceptexpressionContext, _super);
    function NoexceptexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoexceptexpressionContext.prototype.Noexcept = function () {
        return this.getToken(CPP14Parser.Noexcept, 0);
    };
    NoexceptexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NoexceptexpressionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    NoexceptexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(NoexceptexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noexceptexpression;
        },
        enumerable: false,
        configurable: true
    });
    return NoexceptexpressionContext;
}(antlr.ParserRuleContext));
exports.NoexceptexpressionContext = NoexceptexpressionContext;
var CastexpressionContext = /** @class */ (function (_super) {
    __extends(CastexpressionContext, _super);
    function CastexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CastexpressionContext.prototype.unaryexpression = function () {
        return this.getTypedRuleContext(UnaryexpressionContext, 0);
    };
    CastexpressionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    CastexpressionContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    CastexpressionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    CastexpressionContext.prototype.castexpression = function () {
        return this.getTypedRuleContext(CastexpressionContext, 0);
    };
    Object.defineProperty(CastexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_castexpression;
        },
        enumerable: false,
        configurable: true
    });
    return CastexpressionContext;
}(antlr.ParserRuleContext));
exports.CastexpressionContext = CastexpressionContext;
var PmexpressionContext = /** @class */ (function (_super) {
    __extends(PmexpressionContext, _super);
    function PmexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PmexpressionContext.prototype.castexpression = function () {
        return this.getTypedRuleContext(CastexpressionContext, 0);
    };
    PmexpressionContext.prototype.pmexpression = function () {
        return this.getTypedRuleContext(PmexpressionContext, 0);
    };
    PmexpressionContext.prototype.DotStar = function () {
        return this.getToken(CPP14Parser.DotStar, 0);
    };
    PmexpressionContext.prototype.ArrowStar = function () {
        return this.getToken(CPP14Parser.ArrowStar, 0);
    };
    Object.defineProperty(PmexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_pmexpression;
        },
        enumerable: false,
        configurable: true
    });
    return PmexpressionContext;
}(antlr.ParserRuleContext));
exports.PmexpressionContext = PmexpressionContext;
var MultiplicativeexpressionContext = /** @class */ (function (_super) {
    __extends(MultiplicativeexpressionContext, _super);
    function MultiplicativeexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MultiplicativeexpressionContext.prototype.pmexpression = function () {
        return this.getTypedRuleContext(PmexpressionContext, 0);
    };
    MultiplicativeexpressionContext.prototype.multiplicativeexpression = function () {
        return this.getTypedRuleContext(MultiplicativeexpressionContext, 0);
    };
    MultiplicativeexpressionContext.prototype.Star = function () {
        return this.getToken(CPP14Parser.Star, 0);
    };
    MultiplicativeexpressionContext.prototype.Div = function () {
        return this.getToken(CPP14Parser.Div, 0);
    };
    MultiplicativeexpressionContext.prototype.Mod = function () {
        return this.getToken(CPP14Parser.Mod, 0);
    };
    Object.defineProperty(MultiplicativeexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_multiplicativeexpression;
        },
        enumerable: false,
        configurable: true
    });
    return MultiplicativeexpressionContext;
}(antlr.ParserRuleContext));
exports.MultiplicativeexpressionContext = MultiplicativeexpressionContext;
var AdditiveexpressionContext = /** @class */ (function (_super) {
    __extends(AdditiveexpressionContext, _super);
    function AdditiveexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AdditiveexpressionContext.prototype.multiplicativeexpression = function () {
        return this.getTypedRuleContext(MultiplicativeexpressionContext, 0);
    };
    AdditiveexpressionContext.prototype.additiveexpression = function () {
        return this.getTypedRuleContext(AdditiveexpressionContext, 0);
    };
    AdditiveexpressionContext.prototype.Plus = function () {
        return this.getToken(CPP14Parser.Plus, 0);
    };
    AdditiveexpressionContext.prototype.Minus = function () {
        return this.getToken(CPP14Parser.Minus, 0);
    };
    Object.defineProperty(AdditiveexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_additiveexpression;
        },
        enumerable: false,
        configurable: true
    });
    return AdditiveexpressionContext;
}(antlr.ParserRuleContext));
exports.AdditiveexpressionContext = AdditiveexpressionContext;
var ShiftexpressionContext = /** @class */ (function (_super) {
    __extends(ShiftexpressionContext, _super);
    function ShiftexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ShiftexpressionContext.prototype.additiveexpression = function () {
        return this.getTypedRuleContext(AdditiveexpressionContext, 0);
    };
    ShiftexpressionContext.prototype.shiftexpression = function () {
        return this.getTypedRuleContext(ShiftexpressionContext, 0);
    };
    ShiftexpressionContext.prototype.LeftShift = function () {
        return this.getToken(CPP14Parser.LeftShift, 0);
    };
    ShiftexpressionContext.prototype.rightShift = function () {
        return this.getTypedRuleContext(RightShiftContext, 0);
    };
    Object.defineProperty(ShiftexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_shiftexpression;
        },
        enumerable: false,
        configurable: true
    });
    return ShiftexpressionContext;
}(antlr.ParserRuleContext));
exports.ShiftexpressionContext = ShiftexpressionContext;
var RelationalexpressionContext = /** @class */ (function (_super) {
    __extends(RelationalexpressionContext, _super);
    function RelationalexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RelationalexpressionContext.prototype.shiftexpression = function () {
        return this.getTypedRuleContext(ShiftexpressionContext, 0);
    };
    RelationalexpressionContext.prototype.relationalexpression = function () {
        return this.getTypedRuleContext(RelationalexpressionContext, 0);
    };
    RelationalexpressionContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    RelationalexpressionContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    RelationalexpressionContext.prototype.LessEqual = function () {
        return this.getToken(CPP14Parser.LessEqual, 0);
    };
    RelationalexpressionContext.prototype.GreaterEqual = function () {
        return this.getToken(CPP14Parser.GreaterEqual, 0);
    };
    Object.defineProperty(RelationalexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_relationalexpression;
        },
        enumerable: false,
        configurable: true
    });
    return RelationalexpressionContext;
}(antlr.ParserRuleContext));
exports.RelationalexpressionContext = RelationalexpressionContext;
var EqualityexpressionContext = /** @class */ (function (_super) {
    __extends(EqualityexpressionContext, _super);
    function EqualityexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EqualityexpressionContext.prototype.relationalexpression = function () {
        return this.getTypedRuleContext(RelationalexpressionContext, 0);
    };
    EqualityexpressionContext.prototype.equalityexpression = function () {
        return this.getTypedRuleContext(EqualityexpressionContext, 0);
    };
    EqualityexpressionContext.prototype.Equal = function () {
        return this.getToken(CPP14Parser.Equal, 0);
    };
    EqualityexpressionContext.prototype.NotEqual = function () {
        return this.getToken(CPP14Parser.NotEqual, 0);
    };
    Object.defineProperty(EqualityexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_equalityexpression;
        },
        enumerable: false,
        configurable: true
    });
    return EqualityexpressionContext;
}(antlr.ParserRuleContext));
exports.EqualityexpressionContext = EqualityexpressionContext;
var AndexpressionContext = /** @class */ (function (_super) {
    __extends(AndexpressionContext, _super);
    function AndexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AndexpressionContext.prototype.equalityexpression = function () {
        return this.getTypedRuleContext(EqualityexpressionContext, 0);
    };
    AndexpressionContext.prototype.andexpression = function () {
        return this.getTypedRuleContext(AndexpressionContext, 0);
    };
    AndexpressionContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    Object.defineProperty(AndexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_andexpression;
        },
        enumerable: false,
        configurable: true
    });
    return AndexpressionContext;
}(antlr.ParserRuleContext));
exports.AndexpressionContext = AndexpressionContext;
var ExclusiveorexpressionContext = /** @class */ (function (_super) {
    __extends(ExclusiveorexpressionContext, _super);
    function ExclusiveorexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExclusiveorexpressionContext.prototype.andexpression = function () {
        return this.getTypedRuleContext(AndexpressionContext, 0);
    };
    ExclusiveorexpressionContext.prototype.exclusiveorexpression = function () {
        return this.getTypedRuleContext(ExclusiveorexpressionContext, 0);
    };
    ExclusiveorexpressionContext.prototype.Caret = function () {
        return this.getToken(CPP14Parser.Caret, 0);
    };
    Object.defineProperty(ExclusiveorexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_exclusiveorexpression;
        },
        enumerable: false,
        configurable: true
    });
    return ExclusiveorexpressionContext;
}(antlr.ParserRuleContext));
exports.ExclusiveorexpressionContext = ExclusiveorexpressionContext;
var InclusiveorexpressionContext = /** @class */ (function (_super) {
    __extends(InclusiveorexpressionContext, _super);
    function InclusiveorexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InclusiveorexpressionContext.prototype.exclusiveorexpression = function () {
        return this.getTypedRuleContext(ExclusiveorexpressionContext, 0);
    };
    InclusiveorexpressionContext.prototype.inclusiveorexpression = function () {
        return this.getTypedRuleContext(InclusiveorexpressionContext, 0);
    };
    InclusiveorexpressionContext.prototype.Or = function () {
        return this.getToken(CPP14Parser.Or, 0);
    };
    Object.defineProperty(InclusiveorexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_inclusiveorexpression;
        },
        enumerable: false,
        configurable: true
    });
    return InclusiveorexpressionContext;
}(antlr.ParserRuleContext));
exports.InclusiveorexpressionContext = InclusiveorexpressionContext;
var LogicalandexpressionContext = /** @class */ (function (_super) {
    __extends(LogicalandexpressionContext, _super);
    function LogicalandexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalandexpressionContext.prototype.inclusiveorexpression = function () {
        return this.getTypedRuleContext(InclusiveorexpressionContext, 0);
    };
    LogicalandexpressionContext.prototype.logicalandexpression = function () {
        return this.getTypedRuleContext(LogicalandexpressionContext, 0);
    };
    LogicalandexpressionContext.prototype.AndAnd = function () {
        return this.getToken(CPP14Parser.AndAnd, 0);
    };
    Object.defineProperty(LogicalandexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_logicalandexpression;
        },
        enumerable: false,
        configurable: true
    });
    return LogicalandexpressionContext;
}(antlr.ParserRuleContext));
exports.LogicalandexpressionContext = LogicalandexpressionContext;
var LogicalorexpressionContext = /** @class */ (function (_super) {
    __extends(LogicalorexpressionContext, _super);
    function LogicalorexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LogicalorexpressionContext.prototype.logicalandexpression = function () {
        return this.getTypedRuleContext(LogicalandexpressionContext, 0);
    };
    LogicalorexpressionContext.prototype.logicalorexpression = function () {
        return this.getTypedRuleContext(LogicalorexpressionContext, 0);
    };
    LogicalorexpressionContext.prototype.OrOr = function () {
        return this.getToken(CPP14Parser.OrOr, 0);
    };
    Object.defineProperty(LogicalorexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_logicalorexpression;
        },
        enumerable: false,
        configurable: true
    });
    return LogicalorexpressionContext;
}(antlr.ParserRuleContext));
exports.LogicalorexpressionContext = LogicalorexpressionContext;
var ConditionalexpressionContext = /** @class */ (function (_super) {
    __extends(ConditionalexpressionContext, _super);
    function ConditionalexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionalexpressionContext.prototype.logicalorexpression = function () {
        return this.getTypedRuleContext(LogicalorexpressionContext, 0);
    };
    ConditionalexpressionContext.prototype.Question = function () {
        return this.getToken(CPP14Parser.Question, 0);
    };
    ConditionalexpressionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    ConditionalexpressionContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    ConditionalexpressionContext.prototype.assignmentexpression = function () {
        return this.getTypedRuleContext(AssignmentexpressionContext, 0);
    };
    Object.defineProperty(ConditionalexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_conditionalexpression;
        },
        enumerable: false,
        configurable: true
    });
    return ConditionalexpressionContext;
}(antlr.ParserRuleContext));
exports.ConditionalexpressionContext = ConditionalexpressionContext;
var AssignmentexpressionContext = /** @class */ (function (_super) {
    __extends(AssignmentexpressionContext, _super);
    function AssignmentexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentexpressionContext.prototype.conditionalexpression = function () {
        return this.getTypedRuleContext(ConditionalexpressionContext, 0);
    };
    AssignmentexpressionContext.prototype.logicalorexpression = function () {
        return this.getTypedRuleContext(LogicalorexpressionContext, 0);
    };
    AssignmentexpressionContext.prototype.assignmentoperator = function () {
        return this.getTypedRuleContext(AssignmentoperatorContext, 0);
    };
    AssignmentexpressionContext.prototype.initializerclause = function () {
        return this.getTypedRuleContext(InitializerclauseContext, 0);
    };
    AssignmentexpressionContext.prototype.throwexpression = function () {
        return this.getTypedRuleContext(ThrowexpressionContext, 0);
    };
    Object.defineProperty(AssignmentexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_assignmentexpression;
        },
        enumerable: false,
        configurable: true
    });
    return AssignmentexpressionContext;
}(antlr.ParserRuleContext));
exports.AssignmentexpressionContext = AssignmentexpressionContext;
var AssignmentoperatorContext = /** @class */ (function (_super) {
    __extends(AssignmentoperatorContext, _super);
    function AssignmentoperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentoperatorContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    AssignmentoperatorContext.prototype.StarAssign = function () {
        return this.getToken(CPP14Parser.StarAssign, 0);
    };
    AssignmentoperatorContext.prototype.DivAssign = function () {
        return this.getToken(CPP14Parser.DivAssign, 0);
    };
    AssignmentoperatorContext.prototype.ModAssign = function () {
        return this.getToken(CPP14Parser.ModAssign, 0);
    };
    AssignmentoperatorContext.prototype.PlusAssign = function () {
        return this.getToken(CPP14Parser.PlusAssign, 0);
    };
    AssignmentoperatorContext.prototype.MinusAssign = function () {
        return this.getToken(CPP14Parser.MinusAssign, 0);
    };
    AssignmentoperatorContext.prototype.rightShiftAssign = function () {
        return this.getTypedRuleContext(RightShiftAssignContext, 0);
    };
    AssignmentoperatorContext.prototype.LeftShiftAssign = function () {
        return this.getToken(CPP14Parser.LeftShiftAssign, 0);
    };
    AssignmentoperatorContext.prototype.AndAssign = function () {
        return this.getToken(CPP14Parser.AndAssign, 0);
    };
    AssignmentoperatorContext.prototype.XorAssign = function () {
        return this.getToken(CPP14Parser.XorAssign, 0);
    };
    AssignmentoperatorContext.prototype.OrAssign = function () {
        return this.getToken(CPP14Parser.OrAssign, 0);
    };
    Object.defineProperty(AssignmentoperatorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_assignmentoperator;
        },
        enumerable: false,
        configurable: true
    });
    return AssignmentoperatorContext;
}(antlr.ParserRuleContext));
exports.AssignmentoperatorContext = AssignmentoperatorContext;
var ExpressionContext = /** @class */ (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignmentexpression = function () {
        return this.getTypedRuleContext(AssignmentexpressionContext, 0);
    };
    ExpressionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    ExpressionContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_expression;
        },
        enumerable: false,
        configurable: true
    });
    return ExpressionContext;
}(antlr.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var ConstantexpressionContext = /** @class */ (function (_super) {
    __extends(ConstantexpressionContext, _super);
    function ConstantexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConstantexpressionContext.prototype.conditionalexpression = function () {
        return this.getTypedRuleContext(ConditionalexpressionContext, 0);
    };
    Object.defineProperty(ConstantexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_constantexpression;
        },
        enumerable: false,
        configurable: true
    });
    return ConstantexpressionContext;
}(antlr.ParserRuleContext));
exports.ConstantexpressionContext = ConstantexpressionContext;
var StatementContext = /** @class */ (function (_super) {
    __extends(StatementContext, _super);
    function StatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementContext.prototype.labeledstatement = function () {
        return this.getTypedRuleContext(LabeledstatementContext, 0);
    };
    StatementContext.prototype.expressionstatement = function () {
        return this.getTypedRuleContext(ExpressionstatementContext, 0);
    };
    StatementContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    StatementContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    StatementContext.prototype.selectionstatement = function () {
        return this.getTypedRuleContext(SelectionstatementContext, 0);
    };
    StatementContext.prototype.iterationstatement = function () {
        return this.getTypedRuleContext(IterationstatementContext, 0);
    };
    StatementContext.prototype.jumpstatement = function () {
        return this.getTypedRuleContext(JumpstatementContext, 0);
    };
    StatementContext.prototype.declarationstatement = function () {
        return this.getTypedRuleContext(DeclarationstatementContext, 0);
    };
    StatementContext.prototype.tryblock = function () {
        return this.getTypedRuleContext(TryblockContext, 0);
    };
    Object.defineProperty(StatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_statement;
        },
        enumerable: false,
        configurable: true
    });
    return StatementContext;
}(antlr.ParserRuleContext));
exports.StatementContext = StatementContext;
var LabeledstatementContext = /** @class */ (function (_super) {
    __extends(LabeledstatementContext, _super);
    function LabeledstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LabeledstatementContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    LabeledstatementContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    LabeledstatementContext.prototype.statement = function () {
        return this.getTypedRuleContext(StatementContext, 0);
    };
    LabeledstatementContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    LabeledstatementContext.prototype.Case = function () {
        return this.getToken(CPP14Parser.Case, 0);
    };
    LabeledstatementContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    LabeledstatementContext.prototype.Default = function () {
        return this.getToken(CPP14Parser.Default, 0);
    };
    Object.defineProperty(LabeledstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_labeledstatement;
        },
        enumerable: false,
        configurable: true
    });
    return LabeledstatementContext;
}(antlr.ParserRuleContext));
exports.LabeledstatementContext = LabeledstatementContext;
var ExpressionstatementContext = /** @class */ (function (_super) {
    __extends(ExpressionstatementContext, _super);
    function ExpressionstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionstatementContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    ExpressionstatementContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    Object.defineProperty(ExpressionstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_expressionstatement;
        },
        enumerable: false,
        configurable: true
    });
    return ExpressionstatementContext;
}(antlr.ParserRuleContext));
exports.ExpressionstatementContext = ExpressionstatementContext;
var CompoundstatementContext = /** @class */ (function (_super) {
    __extends(CompoundstatementContext, _super);
    function CompoundstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CompoundstatementContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    CompoundstatementContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    CompoundstatementContext.prototype.statementseq = function () {
        return this.getTypedRuleContext(StatementseqContext, 0);
    };
    Object.defineProperty(CompoundstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_compoundstatement;
        },
        enumerable: false,
        configurable: true
    });
    return CompoundstatementContext;
}(antlr.ParserRuleContext));
exports.CompoundstatementContext = CompoundstatementContext;
var StatementseqContext = /** @class */ (function (_super) {
    __extends(StatementseqContext, _super);
    function StatementseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StatementseqContext.prototype.statement = function () {
        return this.getTypedRuleContext(StatementContext, 0);
    };
    StatementseqContext.prototype.statementseq = function () {
        return this.getTypedRuleContext(StatementseqContext, 0);
    };
    Object.defineProperty(StatementseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_statementseq;
        },
        enumerable: false,
        configurable: true
    });
    return StatementseqContext;
}(antlr.ParserRuleContext));
exports.StatementseqContext = StatementseqContext;
var SelectionstatementContext = /** @class */ (function (_super) {
    __extends(SelectionstatementContext, _super);
    function SelectionstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SelectionstatementContext.prototype.If = function () {
        return this.getToken(CPP14Parser.If, 0);
    };
    SelectionstatementContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    SelectionstatementContext.prototype.condition = function () {
        return this.getTypedRuleContext(ConditionContext, 0);
    };
    SelectionstatementContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    SelectionstatementContext.prototype.statement__list = function () {
        return this.getTypedRuleContexts(StatementContext);
    };
    SelectionstatementContext.prototype.statement = function (i) {
        return this.getTypedRuleContext(StatementContext, i);
    };
    SelectionstatementContext.prototype.Else = function () {
        return this.getToken(CPP14Parser.Else, 0);
    };
    SelectionstatementContext.prototype.Switch = function () {
        return this.getToken(CPP14Parser.Switch, 0);
    };
    Object.defineProperty(SelectionstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_selectionstatement;
        },
        enumerable: false,
        configurable: true
    });
    return SelectionstatementContext;
}(antlr.ParserRuleContext));
exports.SelectionstatementContext = SelectionstatementContext;
var ConditionContext = /** @class */ (function (_super) {
    __extends(ConditionContext, _super);
    function ConditionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConditionContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    ConditionContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    ConditionContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    ConditionContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    ConditionContext.prototype.initializerclause = function () {
        return this.getTypedRuleContext(InitializerclauseContext, 0);
    };
    ConditionContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    ConditionContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(ConditionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_condition;
        },
        enumerable: false,
        configurable: true
    });
    return ConditionContext;
}(antlr.ParserRuleContext));
exports.ConditionContext = ConditionContext;
var IterationstatementContext = /** @class */ (function (_super) {
    __extends(IterationstatementContext, _super);
    function IterationstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    IterationstatementContext.prototype.While = function () {
        return this.getToken(CPP14Parser.While, 0);
    };
    IterationstatementContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    IterationstatementContext.prototype.condition = function () {
        return this.getTypedRuleContext(ConditionContext, 0);
    };
    IterationstatementContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    IterationstatementContext.prototype.statement = function () {
        return this.getTypedRuleContext(StatementContext, 0);
    };
    IterationstatementContext.prototype.Do = function () {
        return this.getToken(CPP14Parser.Do, 0);
    };
    IterationstatementContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    IterationstatementContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    IterationstatementContext.prototype.For = function () {
        return this.getToken(CPP14Parser.For, 0);
    };
    IterationstatementContext.prototype.forinitstatement = function () {
        return this.getTypedRuleContext(ForinitstatementContext, 0);
    };
    IterationstatementContext.prototype.forrangedeclaration = function () {
        return this.getTypedRuleContext(ForrangedeclarationContext, 0);
    };
    IterationstatementContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    IterationstatementContext.prototype.forrangeinitializer = function () {
        return this.getTypedRuleContext(ForrangeinitializerContext, 0);
    };
    Object.defineProperty(IterationstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_iterationstatement;
        },
        enumerable: false,
        configurable: true
    });
    return IterationstatementContext;
}(antlr.ParserRuleContext));
exports.IterationstatementContext = IterationstatementContext;
var ForinitstatementContext = /** @class */ (function (_super) {
    __extends(ForinitstatementContext, _super);
    function ForinitstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForinitstatementContext.prototype.expressionstatement = function () {
        return this.getTypedRuleContext(ExpressionstatementContext, 0);
    };
    ForinitstatementContext.prototype.simpledeclaration = function () {
        return this.getTypedRuleContext(SimpledeclarationContext, 0);
    };
    Object.defineProperty(ForinitstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_forinitstatement;
        },
        enumerable: false,
        configurable: true
    });
    return ForinitstatementContext;
}(antlr.ParserRuleContext));
exports.ForinitstatementContext = ForinitstatementContext;
var ForrangedeclarationContext = /** @class */ (function (_super) {
    __extends(ForrangedeclarationContext, _super);
    function ForrangedeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForrangedeclarationContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    ForrangedeclarationContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    ForrangedeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(ForrangedeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_forrangedeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return ForrangedeclarationContext;
}(antlr.ParserRuleContext));
exports.ForrangedeclarationContext = ForrangedeclarationContext;
var ForrangeinitializerContext = /** @class */ (function (_super) {
    __extends(ForrangeinitializerContext, _super);
    function ForrangeinitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ForrangeinitializerContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    ForrangeinitializerContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(ForrangeinitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_forrangeinitializer;
        },
        enumerable: false,
        configurable: true
    });
    return ForrangeinitializerContext;
}(antlr.ParserRuleContext));
exports.ForrangeinitializerContext = ForrangeinitializerContext;
var JumpstatementContext = /** @class */ (function (_super) {
    __extends(JumpstatementContext, _super);
    function JumpstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    JumpstatementContext.prototype.Break = function () {
        return this.getToken(CPP14Parser.Break, 0);
    };
    JumpstatementContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    JumpstatementContext.prototype.Continue = function () {
        return this.getToken(CPP14Parser.Continue, 0);
    };
    JumpstatementContext.prototype.Return = function () {
        return this.getToken(CPP14Parser.Return, 0);
    };
    JumpstatementContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    JumpstatementContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    JumpstatementContext.prototype.Goto = function () {
        return this.getToken(CPP14Parser.Goto, 0);
    };
    JumpstatementContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(JumpstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_jumpstatement;
        },
        enumerable: false,
        configurable: true
    });
    return JumpstatementContext;
}(antlr.ParserRuleContext));
exports.JumpstatementContext = JumpstatementContext;
var DeclarationstatementContext = /** @class */ (function (_super) {
    __extends(DeclarationstatementContext, _super);
    function DeclarationstatementContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationstatementContext.prototype.blockdeclaration = function () {
        return this.getTypedRuleContext(BlockdeclarationContext, 0);
    };
    Object.defineProperty(DeclarationstatementContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declarationstatement;
        },
        enumerable: false,
        configurable: true
    });
    return DeclarationstatementContext;
}(antlr.ParserRuleContext));
exports.DeclarationstatementContext = DeclarationstatementContext;
var DeclarationseqContext = /** @class */ (function (_super) {
    __extends(DeclarationseqContext, _super);
    function DeclarationseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationseqContext.prototype.declaration = function () {
        return this.getTypedRuleContext(DeclarationContext, 0);
    };
    DeclarationseqContext.prototype.declarationseq = function () {
        return this.getTypedRuleContext(DeclarationseqContext, 0);
    };
    Object.defineProperty(DeclarationseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declarationseq;
        },
        enumerable: false,
        configurable: true
    });
    return DeclarationseqContext;
}(antlr.ParserRuleContext));
exports.DeclarationseqContext = DeclarationseqContext;
var DeclarationContext = /** @class */ (function (_super) {
    __extends(DeclarationContext, _super);
    function DeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclarationContext.prototype.blockdeclaration = function () {
        return this.getTypedRuleContext(BlockdeclarationContext, 0);
    };
    DeclarationContext.prototype.functiondefinition = function () {
        return this.getTypedRuleContext(FunctiondefinitionContext, 0);
    };
    DeclarationContext.prototype.templatedeclaration = function () {
        return this.getTypedRuleContext(TemplatedeclarationContext, 0);
    };
    DeclarationContext.prototype.explicitinstantiation = function () {
        return this.getTypedRuleContext(ExplicitinstantiationContext, 0);
    };
    DeclarationContext.prototype.explicitspecialization = function () {
        return this.getTypedRuleContext(ExplicitspecializationContext, 0);
    };
    DeclarationContext.prototype.linkagespecification = function () {
        return this.getTypedRuleContext(LinkagespecificationContext, 0);
    };
    DeclarationContext.prototype.namespacedefinition = function () {
        return this.getTypedRuleContext(NamespacedefinitionContext, 0);
    };
    DeclarationContext.prototype.emptydeclaration = function () {
        return this.getTypedRuleContext(EmptydeclarationContext, 0);
    };
    DeclarationContext.prototype.attributedeclaration = function () {
        return this.getTypedRuleContext(AttributedeclarationContext, 0);
    };
    Object.defineProperty(DeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declaration;
        },
        enumerable: false,
        configurable: true
    });
    return DeclarationContext;
}(antlr.ParserRuleContext));
exports.DeclarationContext = DeclarationContext;
var BlockdeclarationContext = /** @class */ (function (_super) {
    __extends(BlockdeclarationContext, _super);
    function BlockdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BlockdeclarationContext.prototype.simpledeclaration = function () {
        return this.getTypedRuleContext(SimpledeclarationContext, 0);
    };
    BlockdeclarationContext.prototype.asmdefinition = function () {
        return this.getTypedRuleContext(AsmdefinitionContext, 0);
    };
    BlockdeclarationContext.prototype.namespacealiasdefinition = function () {
        return this.getTypedRuleContext(NamespacealiasdefinitionContext, 0);
    };
    BlockdeclarationContext.prototype.usingdeclaration = function () {
        return this.getTypedRuleContext(UsingdeclarationContext, 0);
    };
    BlockdeclarationContext.prototype.usingdirective = function () {
        return this.getTypedRuleContext(UsingdirectiveContext, 0);
    };
    BlockdeclarationContext.prototype.static_assertdeclaration = function () {
        return this.getTypedRuleContext(Static_assertdeclarationContext, 0);
    };
    BlockdeclarationContext.prototype.aliasdeclaration = function () {
        return this.getTypedRuleContext(AliasdeclarationContext, 0);
    };
    BlockdeclarationContext.prototype.opaqueenumdeclaration = function () {
        return this.getTypedRuleContext(OpaqueenumdeclarationContext, 0);
    };
    Object.defineProperty(BlockdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_blockdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return BlockdeclarationContext;
}(antlr.ParserRuleContext));
exports.BlockdeclarationContext = BlockdeclarationContext;
var AliasdeclarationContext = /** @class */ (function (_super) {
    __extends(AliasdeclarationContext, _super);
    function AliasdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AliasdeclarationContext.prototype.Using = function () {
        return this.getToken(CPP14Parser.Using, 0);
    };
    AliasdeclarationContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    AliasdeclarationContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    AliasdeclarationContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    AliasdeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    AliasdeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(AliasdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_aliasdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return AliasdeclarationContext;
}(antlr.ParserRuleContext));
exports.AliasdeclarationContext = AliasdeclarationContext;
var SimpledeclarationContext = /** @class */ (function (_super) {
    __extends(SimpledeclarationContext, _super);
    function SimpledeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpledeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    SimpledeclarationContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    SimpledeclarationContext.prototype.initdeclaratorlist = function () {
        return this.getTypedRuleContext(InitdeclaratorlistContext, 0);
    };
    SimpledeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(SimpledeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_simpledeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return SimpledeclarationContext;
}(antlr.ParserRuleContext));
exports.SimpledeclarationContext = SimpledeclarationContext;
var Static_assertdeclarationContext = /** @class */ (function (_super) {
    __extends(Static_assertdeclarationContext, _super);
    function Static_assertdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    Static_assertdeclarationContext.prototype.Static_assert = function () {
        return this.getToken(CPP14Parser.Static_assert, 0);
    };
    Static_assertdeclarationContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    Static_assertdeclarationContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    Static_assertdeclarationContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Static_assertdeclarationContext.prototype.Stringliteral = function () {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    };
    Static_assertdeclarationContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Static_assertdeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    Object.defineProperty(Static_assertdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_static_assertdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return Static_assertdeclarationContext;
}(antlr.ParserRuleContext));
exports.Static_assertdeclarationContext = Static_assertdeclarationContext;
var EmptydeclarationContext = /** @class */ (function (_super) {
    __extends(EmptydeclarationContext, _super);
    function EmptydeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EmptydeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    Object.defineProperty(EmptydeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_emptydeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return EmptydeclarationContext;
}(antlr.ParserRuleContext));
exports.EmptydeclarationContext = EmptydeclarationContext;
var AttributedeclarationContext = /** @class */ (function (_super) {
    __extends(AttributedeclarationContext, _super);
    function AttributedeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributedeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    AttributedeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    Object.defineProperty(AttributedeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributedeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return AttributedeclarationContext;
}(antlr.ParserRuleContext));
exports.AttributedeclarationContext = AttributedeclarationContext;
var DeclspecifierContext = /** @class */ (function (_super) {
    __extends(DeclspecifierContext, _super);
    function DeclspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclspecifierContext.prototype.storageclassspecifier = function () {
        return this.getTypedRuleContext(StorageclassspecifierContext, 0);
    };
    DeclspecifierContext.prototype.typespecifier = function () {
        return this.getTypedRuleContext(TypespecifierContext, 0);
    };
    DeclspecifierContext.prototype.functionspecifier = function () {
        return this.getTypedRuleContext(FunctionspecifierContext, 0);
    };
    DeclspecifierContext.prototype.Friend = function () {
        return this.getToken(CPP14Parser.Friend, 0);
    };
    DeclspecifierContext.prototype.Typedef = function () {
        return this.getToken(CPP14Parser.Typedef, 0);
    };
    DeclspecifierContext.prototype.Constexpr = function () {
        return this.getToken(CPP14Parser.Constexpr, 0);
    };
    Object.defineProperty(DeclspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return DeclspecifierContext;
}(antlr.ParserRuleContext));
exports.DeclspecifierContext = DeclspecifierContext;
var DeclspecifierseqContext = /** @class */ (function (_super) {
    __extends(DeclspecifierseqContext, _super);
    function DeclspecifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclspecifierseqContext.prototype.declspecifier = function () {
        return this.getTypedRuleContext(DeclspecifierContext, 0);
    };
    DeclspecifierseqContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    DeclspecifierseqContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    Object.defineProperty(DeclspecifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declspecifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return DeclspecifierseqContext;
}(antlr.ParserRuleContext));
exports.DeclspecifierseqContext = DeclspecifierseqContext;
var StorageclassspecifierContext = /** @class */ (function (_super) {
    __extends(StorageclassspecifierContext, _super);
    function StorageclassspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    StorageclassspecifierContext.prototype.Register = function () {
        return this.getToken(CPP14Parser.Register, 0);
    };
    StorageclassspecifierContext.prototype.Static = function () {
        return this.getToken(CPP14Parser.Static, 0);
    };
    StorageclassspecifierContext.prototype.Thread_local = function () {
        return this.getToken(CPP14Parser.Thread_local, 0);
    };
    StorageclassspecifierContext.prototype.Extern = function () {
        return this.getToken(CPP14Parser.Extern, 0);
    };
    StorageclassspecifierContext.prototype.Mutable = function () {
        return this.getToken(CPP14Parser.Mutable, 0);
    };
    Object.defineProperty(StorageclassspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_storageclassspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return StorageclassspecifierContext;
}(antlr.ParserRuleContext));
exports.StorageclassspecifierContext = StorageclassspecifierContext;
var FunctionspecifierContext = /** @class */ (function (_super) {
    __extends(FunctionspecifierContext, _super);
    function FunctionspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionspecifierContext.prototype.Inline = function () {
        return this.getToken(CPP14Parser.Inline, 0);
    };
    FunctionspecifierContext.prototype.Virtual = function () {
        return this.getToken(CPP14Parser.Virtual, 0);
    };
    FunctionspecifierContext.prototype.Explicit = function () {
        return this.getToken(CPP14Parser.Explicit, 0);
    };
    Object.defineProperty(FunctionspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_functionspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return FunctionspecifierContext;
}(antlr.ParserRuleContext));
exports.FunctionspecifierContext = FunctionspecifierContext;
var TypedefnameContext = /** @class */ (function (_super) {
    __extends(TypedefnameContext, _super);
    function TypedefnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypedefnameContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(TypedefnameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typedefname;
        },
        enumerable: false,
        configurable: true
    });
    return TypedefnameContext;
}(antlr.ParserRuleContext));
exports.TypedefnameContext = TypedefnameContext;
var TypespecifierContext = /** @class */ (function (_super) {
    __extends(TypespecifierContext, _super);
    function TypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypespecifierContext.prototype.trailingtypespecifier = function () {
        return this.getTypedRuleContext(TrailingtypespecifierContext, 0);
    };
    TypespecifierContext.prototype.classspecifier = function () {
        return this.getTypedRuleContext(ClassspecifierContext, 0);
    };
    TypespecifierContext.prototype.enumspecifier = function () {
        return this.getTypedRuleContext(EnumspecifierContext, 0);
    };
    Object.defineProperty(TypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return TypespecifierContext;
}(antlr.ParserRuleContext));
exports.TypespecifierContext = TypespecifierContext;
var TrailingtypespecifierContext = /** @class */ (function (_super) {
    __extends(TrailingtypespecifierContext, _super);
    function TrailingtypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TrailingtypespecifierContext.prototype.simpletypespecifier = function () {
        return this.getTypedRuleContext(SimpletypespecifierContext, 0);
    };
    TrailingtypespecifierContext.prototype.elaboratedtypespecifier = function () {
        return this.getTypedRuleContext(ElaboratedtypespecifierContext, 0);
    };
    TrailingtypespecifierContext.prototype.typenamespecifier = function () {
        return this.getTypedRuleContext(TypenamespecifierContext, 0);
    };
    TrailingtypespecifierContext.prototype.cvqualifier = function () {
        return this.getTypedRuleContext(CvqualifierContext, 0);
    };
    Object.defineProperty(TrailingtypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_trailingtypespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return TrailingtypespecifierContext;
}(antlr.ParserRuleContext));
exports.TrailingtypespecifierContext = TrailingtypespecifierContext;
var TypespecifierseqContext = /** @class */ (function (_super) {
    __extends(TypespecifierseqContext, _super);
    function TypespecifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypespecifierseqContext.prototype.typespecifier = function () {
        return this.getTypedRuleContext(TypespecifierContext, 0);
    };
    TypespecifierseqContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    TypespecifierseqContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    Object.defineProperty(TypespecifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typespecifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return TypespecifierseqContext;
}(antlr.ParserRuleContext));
exports.TypespecifierseqContext = TypespecifierseqContext;
var TrailingtypespecifierseqContext = /** @class */ (function (_super) {
    __extends(TrailingtypespecifierseqContext, _super);
    function TrailingtypespecifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TrailingtypespecifierseqContext.prototype.trailingtypespecifier = function () {
        return this.getTypedRuleContext(TrailingtypespecifierContext, 0);
    };
    TrailingtypespecifierseqContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    TrailingtypespecifierseqContext.prototype.trailingtypespecifierseq = function () {
        return this.getTypedRuleContext(TrailingtypespecifierseqContext, 0);
    };
    Object.defineProperty(TrailingtypespecifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_trailingtypespecifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return TrailingtypespecifierseqContext;
}(antlr.ParserRuleContext));
exports.TrailingtypespecifierseqContext = TrailingtypespecifierseqContext;
var SimpletypespecifierContext = /** @class */ (function (_super) {
    __extends(SimpletypespecifierContext, _super);
    function SimpletypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpletypespecifierContext.prototype.typename = function () {
        return this.getTypedRuleContext(TypenameContext, 0);
    };
    SimpletypespecifierContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    SimpletypespecifierContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    SimpletypespecifierContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    SimpletypespecifierContext.prototype.Char = function () {
        return this.getToken(CPP14Parser.Char, 0);
    };
    SimpletypespecifierContext.prototype.Char16 = function () {
        return this.getToken(CPP14Parser.Char16, 0);
    };
    SimpletypespecifierContext.prototype.Char32 = function () {
        return this.getToken(CPP14Parser.Char32, 0);
    };
    SimpletypespecifierContext.prototype.Wchar = function () {
        return this.getToken(CPP14Parser.Wchar, 0);
    };
    SimpletypespecifierContext.prototype.Bool = function () {
        return this.getToken(CPP14Parser.Bool, 0);
    };
    SimpletypespecifierContext.prototype.Short = function () {
        return this.getToken(CPP14Parser.Short, 0);
    };
    SimpletypespecifierContext.prototype.Int = function () {
        return this.getToken(CPP14Parser.Int, 0);
    };
    SimpletypespecifierContext.prototype.Long = function () {
        return this.getToken(CPP14Parser.Long, 0);
    };
    SimpletypespecifierContext.prototype.Signed = function () {
        return this.getToken(CPP14Parser.Signed, 0);
    };
    SimpletypespecifierContext.prototype.Unsigned = function () {
        return this.getToken(CPP14Parser.Unsigned, 0);
    };
    SimpletypespecifierContext.prototype.Float = function () {
        return this.getToken(CPP14Parser.Float, 0);
    };
    SimpletypespecifierContext.prototype.Double = function () {
        return this.getToken(CPP14Parser.Double, 0);
    };
    SimpletypespecifierContext.prototype.Void = function () {
        return this.getToken(CPP14Parser.Void, 0);
    };
    SimpletypespecifierContext.prototype.Auto = function () {
        return this.getToken(CPP14Parser.Auto, 0);
    };
    SimpletypespecifierContext.prototype.decltypespecifier = function () {
        return this.getTypedRuleContext(DecltypespecifierContext, 0);
    };
    Object.defineProperty(SimpletypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_simpletypespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return SimpletypespecifierContext;
}(antlr.ParserRuleContext));
exports.SimpletypespecifierContext = SimpletypespecifierContext;
var TypenameContext = /** @class */ (function (_super) {
    __extends(TypenameContext, _super);
    function TypenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypenameContext.prototype.classname = function () {
        return this.getTypedRuleContext(ClassnameContext, 0);
    };
    TypenameContext.prototype.enumname = function () {
        return this.getTypedRuleContext(EnumnameContext, 0);
    };
    TypenameContext.prototype.typedefname = function () {
        return this.getTypedRuleContext(TypedefnameContext, 0);
    };
    TypenameContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    Object.defineProperty(TypenameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typename;
        },
        enumerable: false,
        configurable: true
    });
    return TypenameContext;
}(antlr.ParserRuleContext));
exports.TypenameContext = TypenameContext;
var DecltypespecifierContext = /** @class */ (function (_super) {
    __extends(DecltypespecifierContext, _super);
    function DecltypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DecltypespecifierContext.prototype.Decltype = function () {
        return this.getToken(CPP14Parser.Decltype, 0);
    };
    DecltypespecifierContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    DecltypespecifierContext.prototype.expression = function () {
        return this.getTypedRuleContext(ExpressionContext, 0);
    };
    DecltypespecifierContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    DecltypespecifierContext.prototype.Auto = function () {
        return this.getToken(CPP14Parser.Auto, 0);
    };
    Object.defineProperty(DecltypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_decltypespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return DecltypespecifierContext;
}(antlr.ParserRuleContext));
exports.DecltypespecifierContext = DecltypespecifierContext;
var ElaboratedtypespecifierContext = /** @class */ (function (_super) {
    __extends(ElaboratedtypespecifierContext, _super);
    function ElaboratedtypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ElaboratedtypespecifierContext.prototype.classkey = function () {
        return this.getTypedRuleContext(ClasskeyContext, 0);
    };
    ElaboratedtypespecifierContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    ElaboratedtypespecifierContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    ElaboratedtypespecifierContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    ElaboratedtypespecifierContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    ElaboratedtypespecifierContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    ElaboratedtypespecifierContext.prototype.Enum = function () {
        return this.getToken(CPP14Parser.Enum, 0);
    };
    Object.defineProperty(ElaboratedtypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_elaboratedtypespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return ElaboratedtypespecifierContext;
}(antlr.ParserRuleContext));
exports.ElaboratedtypespecifierContext = ElaboratedtypespecifierContext;
var EnumnameContext = /** @class */ (function (_super) {
    __extends(EnumnameContext, _super);
    function EnumnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumnameContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(EnumnameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumname;
        },
        enumerable: false,
        configurable: true
    });
    return EnumnameContext;
}(antlr.ParserRuleContext));
exports.EnumnameContext = EnumnameContext;
var EnumspecifierContext = /** @class */ (function (_super) {
    __extends(EnumspecifierContext, _super);
    function EnumspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumspecifierContext.prototype.enumhead = function () {
        return this.getTypedRuleContext(EnumheadContext, 0);
    };
    EnumspecifierContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    EnumspecifierContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    EnumspecifierContext.prototype.enumeratorlist = function () {
        return this.getTypedRuleContext(EnumeratorlistContext, 0);
    };
    EnumspecifierContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(EnumspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return EnumspecifierContext;
}(antlr.ParserRuleContext));
exports.EnumspecifierContext = EnumspecifierContext;
var EnumheadContext = /** @class */ (function (_super) {
    __extends(EnumheadContext, _super);
    function EnumheadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumheadContext.prototype.enumkey = function () {
        return this.getTypedRuleContext(EnumkeyContext, 0);
    };
    EnumheadContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    EnumheadContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    EnumheadContext.prototype.enumbase = function () {
        return this.getTypedRuleContext(EnumbaseContext, 0);
    };
    EnumheadContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    Object.defineProperty(EnumheadContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumhead;
        },
        enumerable: false,
        configurable: true
    });
    return EnumheadContext;
}(antlr.ParserRuleContext));
exports.EnumheadContext = EnumheadContext;
var OpaqueenumdeclarationContext = /** @class */ (function (_super) {
    __extends(OpaqueenumdeclarationContext, _super);
    function OpaqueenumdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OpaqueenumdeclarationContext.prototype.enumkey = function () {
        return this.getTypedRuleContext(EnumkeyContext, 0);
    };
    OpaqueenumdeclarationContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    OpaqueenumdeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    OpaqueenumdeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    OpaqueenumdeclarationContext.prototype.enumbase = function () {
        return this.getTypedRuleContext(EnumbaseContext, 0);
    };
    Object.defineProperty(OpaqueenumdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_opaqueenumdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return OpaqueenumdeclarationContext;
}(antlr.ParserRuleContext));
exports.OpaqueenumdeclarationContext = OpaqueenumdeclarationContext;
var EnumkeyContext = /** @class */ (function (_super) {
    __extends(EnumkeyContext, _super);
    function EnumkeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumkeyContext.prototype.Enum = function () {
        return this.getToken(CPP14Parser.Enum, 0);
    };
    EnumkeyContext.prototype.Class = function () {
        return this.getToken(CPP14Parser.Class, 0);
    };
    EnumkeyContext.prototype.Struct = function () {
        return this.getToken(CPP14Parser.Struct, 0);
    };
    Object.defineProperty(EnumkeyContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumkey;
        },
        enumerable: false,
        configurable: true
    });
    return EnumkeyContext;
}(antlr.ParserRuleContext));
exports.EnumkeyContext = EnumkeyContext;
var EnumbaseContext = /** @class */ (function (_super) {
    __extends(EnumbaseContext, _super);
    function EnumbaseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumbaseContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    EnumbaseContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    Object.defineProperty(EnumbaseContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumbase;
        },
        enumerable: false,
        configurable: true
    });
    return EnumbaseContext;
}(antlr.ParserRuleContext));
exports.EnumbaseContext = EnumbaseContext;
var EnumeratorlistContext = /** @class */ (function (_super) {
    __extends(EnumeratorlistContext, _super);
    function EnumeratorlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorlistContext.prototype.enumeratordefinition = function () {
        return this.getTypedRuleContext(EnumeratordefinitionContext, 0);
    };
    EnumeratorlistContext.prototype.enumeratorlist = function () {
        return this.getTypedRuleContext(EnumeratorlistContext, 0);
    };
    EnumeratorlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(EnumeratorlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumeratorlist;
        },
        enumerable: false,
        configurable: true
    });
    return EnumeratorlistContext;
}(antlr.ParserRuleContext));
exports.EnumeratorlistContext = EnumeratorlistContext;
var EnumeratordefinitionContext = /** @class */ (function (_super) {
    __extends(EnumeratordefinitionContext, _super);
    function EnumeratordefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratordefinitionContext.prototype.enumerator = function () {
        return this.getTypedRuleContext(EnumeratorContext, 0);
    };
    EnumeratordefinitionContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    EnumeratordefinitionContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    Object.defineProperty(EnumeratordefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumeratordefinition;
        },
        enumerable: false,
        configurable: true
    });
    return EnumeratordefinitionContext;
}(antlr.ParserRuleContext));
exports.EnumeratordefinitionContext = EnumeratordefinitionContext;
var EnumeratorContext = /** @class */ (function (_super) {
    __extends(EnumeratorContext, _super);
    function EnumeratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EnumeratorContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(EnumeratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_enumerator;
        },
        enumerable: false,
        configurable: true
    });
    return EnumeratorContext;
}(antlr.ParserRuleContext));
exports.EnumeratorContext = EnumeratorContext;
var NamespacenameContext = /** @class */ (function (_super) {
    __extends(NamespacenameContext, _super);
    function NamespacenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacenameContext.prototype.originalnamespacename = function () {
        return this.getTypedRuleContext(OriginalnamespacenameContext, 0);
    };
    NamespacenameContext.prototype.namespacealias = function () {
        return this.getTypedRuleContext(NamespacealiasContext, 0);
    };
    Object.defineProperty(NamespacenameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namespacename;
        },
        enumerable: false,
        configurable: true
    });
    return NamespacenameContext;
}(antlr.ParserRuleContext));
exports.NamespacenameContext = NamespacenameContext;
var OriginalnamespacenameContext = /** @class */ (function (_super) {
    __extends(OriginalnamespacenameContext, _super);
    function OriginalnamespacenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OriginalnamespacenameContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(OriginalnamespacenameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_originalnamespacename;
        },
        enumerable: false,
        configurable: true
    });
    return OriginalnamespacenameContext;
}(antlr.ParserRuleContext));
exports.OriginalnamespacenameContext = OriginalnamespacenameContext;
var NamespacedefinitionContext = /** @class */ (function (_super) {
    __extends(NamespacedefinitionContext, _super);
    function NamespacedefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacedefinitionContext.prototype.namednamespacedefinition = function () {
        return this.getTypedRuleContext(NamednamespacedefinitionContext, 0);
    };
    NamespacedefinitionContext.prototype.unnamednamespacedefinition = function () {
        return this.getTypedRuleContext(UnnamednamespacedefinitionContext, 0);
    };
    Object.defineProperty(NamespacedefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namespacedefinition;
        },
        enumerable: false,
        configurable: true
    });
    return NamespacedefinitionContext;
}(antlr.ParserRuleContext));
exports.NamespacedefinitionContext = NamespacedefinitionContext;
var NamednamespacedefinitionContext = /** @class */ (function (_super) {
    __extends(NamednamespacedefinitionContext, _super);
    function NamednamespacedefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamednamespacedefinitionContext.prototype.originalnamespacedefinition = function () {
        return this.getTypedRuleContext(OriginalnamespacedefinitionContext, 0);
    };
    NamednamespacedefinitionContext.prototype.extensionnamespacedefinition = function () {
        return this.getTypedRuleContext(ExtensionnamespacedefinitionContext, 0);
    };
    Object.defineProperty(NamednamespacedefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namednamespacedefinition;
        },
        enumerable: false,
        configurable: true
    });
    return NamednamespacedefinitionContext;
}(antlr.ParserRuleContext));
exports.NamednamespacedefinitionContext = NamednamespacedefinitionContext;
var OriginalnamespacedefinitionContext = /** @class */ (function (_super) {
    __extends(OriginalnamespacedefinitionContext, _super);
    function OriginalnamespacedefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OriginalnamespacedefinitionContext.prototype.Namespace = function () {
        return this.getToken(CPP14Parser.Namespace, 0);
    };
    OriginalnamespacedefinitionContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    OriginalnamespacedefinitionContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    OriginalnamespacedefinitionContext.prototype.namespacebody = function () {
        return this.getTypedRuleContext(NamespacebodyContext, 0);
    };
    OriginalnamespacedefinitionContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    OriginalnamespacedefinitionContext.prototype.Inline = function () {
        return this.getToken(CPP14Parser.Inline, 0);
    };
    Object.defineProperty(OriginalnamespacedefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_originalnamespacedefinition;
        },
        enumerable: false,
        configurable: true
    });
    return OriginalnamespacedefinitionContext;
}(antlr.ParserRuleContext));
exports.OriginalnamespacedefinitionContext = OriginalnamespacedefinitionContext;
var ExtensionnamespacedefinitionContext = /** @class */ (function (_super) {
    __extends(ExtensionnamespacedefinitionContext, _super);
    function ExtensionnamespacedefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExtensionnamespacedefinitionContext.prototype.Namespace = function () {
        return this.getToken(CPP14Parser.Namespace, 0);
    };
    ExtensionnamespacedefinitionContext.prototype.originalnamespacename = function () {
        return this.getTypedRuleContext(OriginalnamespacenameContext, 0);
    };
    ExtensionnamespacedefinitionContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    ExtensionnamespacedefinitionContext.prototype.namespacebody = function () {
        return this.getTypedRuleContext(NamespacebodyContext, 0);
    };
    ExtensionnamespacedefinitionContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    ExtensionnamespacedefinitionContext.prototype.Inline = function () {
        return this.getToken(CPP14Parser.Inline, 0);
    };
    Object.defineProperty(ExtensionnamespacedefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_extensionnamespacedefinition;
        },
        enumerable: false,
        configurable: true
    });
    return ExtensionnamespacedefinitionContext;
}(antlr.ParserRuleContext));
exports.ExtensionnamespacedefinitionContext = ExtensionnamespacedefinitionContext;
var UnnamednamespacedefinitionContext = /** @class */ (function (_super) {
    __extends(UnnamednamespacedefinitionContext, _super);
    function UnnamednamespacedefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UnnamednamespacedefinitionContext.prototype.Namespace = function () {
        return this.getToken(CPP14Parser.Namespace, 0);
    };
    UnnamednamespacedefinitionContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    UnnamednamespacedefinitionContext.prototype.namespacebody = function () {
        return this.getTypedRuleContext(NamespacebodyContext, 0);
    };
    UnnamednamespacedefinitionContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    UnnamednamespacedefinitionContext.prototype.Inline = function () {
        return this.getToken(CPP14Parser.Inline, 0);
    };
    Object.defineProperty(UnnamednamespacedefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_unnamednamespacedefinition;
        },
        enumerable: false,
        configurable: true
    });
    return UnnamednamespacedefinitionContext;
}(antlr.ParserRuleContext));
exports.UnnamednamespacedefinitionContext = UnnamednamespacedefinitionContext;
var NamespacebodyContext = /** @class */ (function (_super) {
    __extends(NamespacebodyContext, _super);
    function NamespacebodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacebodyContext.prototype.declarationseq = function () {
        return this.getTypedRuleContext(DeclarationseqContext, 0);
    };
    Object.defineProperty(NamespacebodyContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namespacebody;
        },
        enumerable: false,
        configurable: true
    });
    return NamespacebodyContext;
}(antlr.ParserRuleContext));
exports.NamespacebodyContext = NamespacebodyContext;
var NamespacealiasContext = /** @class */ (function (_super) {
    __extends(NamespacealiasContext, _super);
    function NamespacealiasContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacealiasContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(NamespacealiasContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namespacealias;
        },
        enumerable: false,
        configurable: true
    });
    return NamespacealiasContext;
}(antlr.ParserRuleContext));
exports.NamespacealiasContext = NamespacealiasContext;
var NamespacealiasdefinitionContext = /** @class */ (function (_super) {
    __extends(NamespacealiasdefinitionContext, _super);
    function NamespacealiasdefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NamespacealiasdefinitionContext.prototype.Namespace = function () {
        return this.getToken(CPP14Parser.Namespace, 0);
    };
    NamespacealiasdefinitionContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    NamespacealiasdefinitionContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    NamespacealiasdefinitionContext.prototype.qualifiednamespacespecifier = function () {
        return this.getTypedRuleContext(QualifiednamespacespecifierContext, 0);
    };
    NamespacealiasdefinitionContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    Object.defineProperty(NamespacealiasdefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_namespacealiasdefinition;
        },
        enumerable: false,
        configurable: true
    });
    return NamespacealiasdefinitionContext;
}(antlr.ParserRuleContext));
exports.NamespacealiasdefinitionContext = NamespacealiasdefinitionContext;
var QualifiednamespacespecifierContext = /** @class */ (function (_super) {
    __extends(QualifiednamespacespecifierContext, _super);
    function QualifiednamespacespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    QualifiednamespacespecifierContext.prototype.namespacename = function () {
        return this.getTypedRuleContext(NamespacenameContext, 0);
    };
    QualifiednamespacespecifierContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    Object.defineProperty(QualifiednamespacespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_qualifiednamespacespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return QualifiednamespacespecifierContext;
}(antlr.ParserRuleContext));
exports.QualifiednamespacespecifierContext = QualifiednamespacespecifierContext;
var UsingdeclarationContext = /** @class */ (function (_super) {
    __extends(UsingdeclarationContext, _super);
    function UsingdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsingdeclarationContext.prototype.Using = function () {
        return this.getToken(CPP14Parser.Using, 0);
    };
    UsingdeclarationContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    UsingdeclarationContext.prototype.unqualifiedid = function () {
        return this.getTypedRuleContext(UnqualifiedidContext, 0);
    };
    UsingdeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    UsingdeclarationContext.prototype.Typename = function () {
        return this.getToken(CPP14Parser.Typename, 0);
    };
    UsingdeclarationContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    Object.defineProperty(UsingdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_usingdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return UsingdeclarationContext;
}(antlr.ParserRuleContext));
exports.UsingdeclarationContext = UsingdeclarationContext;
var UsingdirectiveContext = /** @class */ (function (_super) {
    __extends(UsingdirectiveContext, _super);
    function UsingdirectiveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UsingdirectiveContext.prototype.Using = function () {
        return this.getToken(CPP14Parser.Using, 0);
    };
    UsingdirectiveContext.prototype.Namespace = function () {
        return this.getToken(CPP14Parser.Namespace, 0);
    };
    UsingdirectiveContext.prototype.namespacename = function () {
        return this.getTypedRuleContext(NamespacenameContext, 0);
    };
    UsingdirectiveContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    UsingdirectiveContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    UsingdirectiveContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    Object.defineProperty(UsingdirectiveContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_usingdirective;
        },
        enumerable: false,
        configurable: true
    });
    return UsingdirectiveContext;
}(antlr.ParserRuleContext));
exports.UsingdirectiveContext = UsingdirectiveContext;
var AsmdefinitionContext = /** @class */ (function (_super) {
    __extends(AsmdefinitionContext, _super);
    function AsmdefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AsmdefinitionContext.prototype.Asm = function () {
        return this.getToken(CPP14Parser.Asm, 0);
    };
    AsmdefinitionContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    AsmdefinitionContext.prototype.Stringliteral = function () {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    };
    AsmdefinitionContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    AsmdefinitionContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    Object.defineProperty(AsmdefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_asmdefinition;
        },
        enumerable: false,
        configurable: true
    });
    return AsmdefinitionContext;
}(antlr.ParserRuleContext));
exports.AsmdefinitionContext = AsmdefinitionContext;
var LinkagespecificationContext = /** @class */ (function (_super) {
    __extends(LinkagespecificationContext, _super);
    function LinkagespecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LinkagespecificationContext.prototype.Extern = function () {
        return this.getToken(CPP14Parser.Extern, 0);
    };
    LinkagespecificationContext.prototype.Stringliteral = function () {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    };
    LinkagespecificationContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    LinkagespecificationContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    LinkagespecificationContext.prototype.declarationseq = function () {
        return this.getTypedRuleContext(DeclarationseqContext, 0);
    };
    LinkagespecificationContext.prototype.declaration = function () {
        return this.getTypedRuleContext(DeclarationContext, 0);
    };
    Object.defineProperty(LinkagespecificationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_linkagespecification;
        },
        enumerable: false,
        configurable: true
    });
    return LinkagespecificationContext;
}(antlr.ParserRuleContext));
exports.LinkagespecificationContext = LinkagespecificationContext;
var AttributespecifierseqContext = /** @class */ (function (_super) {
    __extends(AttributespecifierseqContext, _super);
    function AttributespecifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributespecifierseqContext.prototype.attributespecifier = function () {
        return this.getTypedRuleContext(AttributespecifierContext, 0);
    };
    AttributespecifierseqContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(AttributespecifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributespecifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return AttributespecifierseqContext;
}(antlr.ParserRuleContext));
exports.AttributespecifierseqContext = AttributespecifierseqContext;
var AttributespecifierContext = /** @class */ (function (_super) {
    __extends(AttributespecifierContext, _super);
    function AttributespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributespecifierContext.prototype.LeftBracket__list = function () {
        return this.getTokens(CPP14Parser.LeftBracket);
    };
    AttributespecifierContext.prototype.LeftBracket = function (i) {
        return this.getToken(CPP14Parser.LeftBracket, i);
    };
    AttributespecifierContext.prototype.attributelist = function () {
        return this.getTypedRuleContext(AttributelistContext, 0);
    };
    AttributespecifierContext.prototype.RightBracket__list = function () {
        return this.getTokens(CPP14Parser.RightBracket);
    };
    AttributespecifierContext.prototype.RightBracket = function (i) {
        return this.getToken(CPP14Parser.RightBracket, i);
    };
    AttributespecifierContext.prototype.alignmentspecifier = function () {
        return this.getTypedRuleContext(AlignmentspecifierContext, 0);
    };
    Object.defineProperty(AttributespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return AttributespecifierContext;
}(antlr.ParserRuleContext));
exports.AttributespecifierContext = AttributespecifierContext;
var AlignmentspecifierContext = /** @class */ (function (_super) {
    __extends(AlignmentspecifierContext, _super);
    function AlignmentspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AlignmentspecifierContext.prototype.Alignas = function () {
        return this.getToken(CPP14Parser.Alignas, 0);
    };
    AlignmentspecifierContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    AlignmentspecifierContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    AlignmentspecifierContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    AlignmentspecifierContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    AlignmentspecifierContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    Object.defineProperty(AlignmentspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_alignmentspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return AlignmentspecifierContext;
}(antlr.ParserRuleContext));
exports.AlignmentspecifierContext = AlignmentspecifierContext;
var AttributelistContext = /** @class */ (function (_super) {
    __extends(AttributelistContext, _super);
    function AttributelistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributelistContext.prototype.attribute = function () {
        return this.getTypedRuleContext(AttributeContext, 0);
    };
    AttributelistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    AttributelistContext.prototype.attributelist = function () {
        return this.getTypedRuleContext(AttributelistContext, 0);
    };
    AttributelistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(AttributelistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributelist;
        },
        enumerable: false,
        configurable: true
    });
    return AttributelistContext;
}(antlr.ParserRuleContext));
exports.AttributelistContext = AttributelistContext;
var AttributeContext = /** @class */ (function (_super) {
    __extends(AttributeContext, _super);
    function AttributeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeContext.prototype.attributetoken = function () {
        return this.getTypedRuleContext(AttributetokenContext, 0);
    };
    AttributeContext.prototype.attributeargumentclause = function () {
        return this.getTypedRuleContext(AttributeargumentclauseContext, 0);
    };
    Object.defineProperty(AttributeContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attribute;
        },
        enumerable: false,
        configurable: true
    });
    return AttributeContext;
}(antlr.ParserRuleContext));
exports.AttributeContext = AttributeContext;
var AttributetokenContext = /** @class */ (function (_super) {
    __extends(AttributetokenContext, _super);
    function AttributetokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributetokenContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    AttributetokenContext.prototype.attributescopedtoken = function () {
        return this.getTypedRuleContext(AttributescopedtokenContext, 0);
    };
    Object.defineProperty(AttributetokenContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributetoken;
        },
        enumerable: false,
        configurable: true
    });
    return AttributetokenContext;
}(antlr.ParserRuleContext));
exports.AttributetokenContext = AttributetokenContext;
var AttributescopedtokenContext = /** @class */ (function (_super) {
    __extends(AttributescopedtokenContext, _super);
    function AttributescopedtokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributescopedtokenContext.prototype.attributenamespace = function () {
        return this.getTypedRuleContext(AttributenamespaceContext, 0);
    };
    AttributescopedtokenContext.prototype.Doublecolon = function () {
        return this.getToken(CPP14Parser.Doublecolon, 0);
    };
    AttributescopedtokenContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(AttributescopedtokenContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributescopedtoken;
        },
        enumerable: false,
        configurable: true
    });
    return AttributescopedtokenContext;
}(antlr.ParserRuleContext));
exports.AttributescopedtokenContext = AttributescopedtokenContext;
var AttributenamespaceContext = /** @class */ (function (_super) {
    __extends(AttributenamespaceContext, _super);
    function AttributenamespaceContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributenamespaceContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(AttributenamespaceContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributenamespace;
        },
        enumerable: false,
        configurable: true
    });
    return AttributenamespaceContext;
}(antlr.ParserRuleContext));
exports.AttributenamespaceContext = AttributenamespaceContext;
var AttributeargumentclauseContext = /** @class */ (function (_super) {
    __extends(AttributeargumentclauseContext, _super);
    function AttributeargumentclauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AttributeargumentclauseContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    AttributeargumentclauseContext.prototype.balancedtokenseq = function () {
        return this.getTypedRuleContext(BalancedtokenseqContext, 0);
    };
    AttributeargumentclauseContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(AttributeargumentclauseContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_attributeargumentclause;
        },
        enumerable: false,
        configurable: true
    });
    return AttributeargumentclauseContext;
}(antlr.ParserRuleContext));
exports.AttributeargumentclauseContext = AttributeargumentclauseContext;
var BalancedtokenseqContext = /** @class */ (function (_super) {
    __extends(BalancedtokenseqContext, _super);
    function BalancedtokenseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BalancedtokenseqContext.prototype.balancedtoken = function () {
        return this.getTypedRuleContext(BalancedtokenContext, 0);
    };
    BalancedtokenseqContext.prototype.balancedtokenseq = function () {
        return this.getTypedRuleContext(BalancedtokenseqContext, 0);
    };
    Object.defineProperty(BalancedtokenseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_balancedtokenseq;
        },
        enumerable: false,
        configurable: true
    });
    return BalancedtokenseqContext;
}(antlr.ParserRuleContext));
exports.BalancedtokenseqContext = BalancedtokenseqContext;
var BalancedtokenContext = /** @class */ (function (_super) {
    __extends(BalancedtokenContext, _super);
    function BalancedtokenContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BalancedtokenContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    BalancedtokenContext.prototype.balancedtokenseq = function () {
        return this.getTypedRuleContext(BalancedtokenseqContext, 0);
    };
    BalancedtokenContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    BalancedtokenContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    BalancedtokenContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    BalancedtokenContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    BalancedtokenContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    Object.defineProperty(BalancedtokenContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_balancedtoken;
        },
        enumerable: false,
        configurable: true
    });
    return BalancedtokenContext;
}(antlr.ParserRuleContext));
exports.BalancedtokenContext = BalancedtokenContext;
var InitdeclaratorlistContext = /** @class */ (function (_super) {
    __extends(InitdeclaratorlistContext, _super);
    function InitdeclaratorlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitdeclaratorlistContext.prototype.initdeclarator = function () {
        return this.getTypedRuleContext(InitdeclaratorContext, 0);
    };
    InitdeclaratorlistContext.prototype.initdeclaratorlist = function () {
        return this.getTypedRuleContext(InitdeclaratorlistContext, 0);
    };
    InitdeclaratorlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(InitdeclaratorlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initdeclaratorlist;
        },
        enumerable: false,
        configurable: true
    });
    return InitdeclaratorlistContext;
}(antlr.ParserRuleContext));
exports.InitdeclaratorlistContext = InitdeclaratorlistContext;
var InitdeclaratorContext = /** @class */ (function (_super) {
    __extends(InitdeclaratorContext, _super);
    function InitdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitdeclaratorContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    InitdeclaratorContext.prototype.initializer = function () {
        return this.getTypedRuleContext(InitializerContext, 0);
    };
    Object.defineProperty(InitdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return InitdeclaratorContext;
}(antlr.ParserRuleContext));
exports.InitdeclaratorContext = InitdeclaratorContext;
var DeclaratorContext = /** @class */ (function (_super) {
    __extends(DeclaratorContext, _super);
    function DeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclaratorContext.prototype.ptrdeclarator = function () {
        return this.getTypedRuleContext(PtrdeclaratorContext, 0);
    };
    DeclaratorContext.prototype.noptrdeclarator = function () {
        return this.getTypedRuleContext(NoptrdeclaratorContext, 0);
    };
    DeclaratorContext.prototype.parametersandqualifiers = function () {
        return this.getTypedRuleContext(ParametersandqualifiersContext, 0);
    };
    DeclaratorContext.prototype.trailingreturntype = function () {
        return this.getTypedRuleContext(TrailingreturntypeContext, 0);
    };
    Object.defineProperty(DeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declarator;
        },
        enumerable: false,
        configurable: true
    });
    return DeclaratorContext;
}(antlr.ParserRuleContext));
exports.DeclaratorContext = DeclaratorContext;
var PtrdeclaratorContext = /** @class */ (function (_super) {
    __extends(PtrdeclaratorContext, _super);
    function PtrdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PtrdeclaratorContext.prototype.noptrdeclarator = function () {
        return this.getTypedRuleContext(NoptrdeclaratorContext, 0);
    };
    PtrdeclaratorContext.prototype.ptroperator = function () {
        return this.getTypedRuleContext(PtroperatorContext, 0);
    };
    PtrdeclaratorContext.prototype.ptrdeclarator = function () {
        return this.getTypedRuleContext(PtrdeclaratorContext, 0);
    };
    Object.defineProperty(PtrdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_ptrdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return PtrdeclaratorContext;
}(antlr.ParserRuleContext));
exports.PtrdeclaratorContext = PtrdeclaratorContext;
var NoptrdeclaratorContext = /** @class */ (function (_super) {
    __extends(NoptrdeclaratorContext, _super);
    function NoptrdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoptrdeclaratorContext.prototype.declaratorid = function () {
        return this.getTypedRuleContext(DeclaratoridContext, 0);
    };
    NoptrdeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    NoptrdeclaratorContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NoptrdeclaratorContext.prototype.ptrdeclarator = function () {
        return this.getTypedRuleContext(PtrdeclaratorContext, 0);
    };
    NoptrdeclaratorContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    NoptrdeclaratorContext.prototype.noptrdeclarator = function () {
        return this.getTypedRuleContext(NoptrdeclaratorContext, 0);
    };
    NoptrdeclaratorContext.prototype.parametersandqualifiers = function () {
        return this.getTypedRuleContext(ParametersandqualifiersContext, 0);
    };
    NoptrdeclaratorContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    NoptrdeclaratorContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    NoptrdeclaratorContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    Object.defineProperty(NoptrdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noptrdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return NoptrdeclaratorContext;
}(antlr.ParserRuleContext));
exports.NoptrdeclaratorContext = NoptrdeclaratorContext;
var ParametersandqualifiersContext = /** @class */ (function (_super) {
    __extends(ParametersandqualifiersContext, _super);
    function ParametersandqualifiersContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParametersandqualifiersContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    ParametersandqualifiersContext.prototype.parameterdeclarationclause = function () {
        return this.getTypedRuleContext(ParameterdeclarationclauseContext, 0);
    };
    ParametersandqualifiersContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    ParametersandqualifiersContext.prototype.cvqualifierseq = function () {
        return this.getTypedRuleContext(CvqualifierseqContext, 0);
    };
    ParametersandqualifiersContext.prototype.refqualifier = function () {
        return this.getTypedRuleContext(RefqualifierContext, 0);
    };
    ParametersandqualifiersContext.prototype.exceptionspecification = function () {
        return this.getTypedRuleContext(ExceptionspecificationContext, 0);
    };
    ParametersandqualifiersContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(ParametersandqualifiersContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_parametersandqualifiers;
        },
        enumerable: false,
        configurable: true
    });
    return ParametersandqualifiersContext;
}(antlr.ParserRuleContext));
exports.ParametersandqualifiersContext = ParametersandqualifiersContext;
var TrailingreturntypeContext = /** @class */ (function (_super) {
    __extends(TrailingreturntypeContext, _super);
    function TrailingreturntypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TrailingreturntypeContext.prototype.Arrow = function () {
        return this.getToken(CPP14Parser.Arrow, 0);
    };
    TrailingreturntypeContext.prototype.trailingtypespecifierseq = function () {
        return this.getTypedRuleContext(TrailingtypespecifierseqContext, 0);
    };
    TrailingreturntypeContext.prototype.abstractdeclarator = function () {
        return this.getTypedRuleContext(AbstractdeclaratorContext, 0);
    };
    Object.defineProperty(TrailingreturntypeContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_trailingreturntype;
        },
        enumerable: false,
        configurable: true
    });
    return TrailingreturntypeContext;
}(antlr.ParserRuleContext));
exports.TrailingreturntypeContext = TrailingreturntypeContext;
var PtroperatorContext = /** @class */ (function (_super) {
    __extends(PtroperatorContext, _super);
    function PtroperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PtroperatorContext.prototype.Star = function () {
        return this.getToken(CPP14Parser.Star, 0);
    };
    PtroperatorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    PtroperatorContext.prototype.cvqualifierseq = function () {
        return this.getTypedRuleContext(CvqualifierseqContext, 0);
    };
    PtroperatorContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    PtroperatorContext.prototype.AndAnd = function () {
        return this.getToken(CPP14Parser.AndAnd, 0);
    };
    PtroperatorContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    Object.defineProperty(PtroperatorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_ptroperator;
        },
        enumerable: false,
        configurable: true
    });
    return PtroperatorContext;
}(antlr.ParserRuleContext));
exports.PtroperatorContext = PtroperatorContext;
var CvqualifierseqContext = /** @class */ (function (_super) {
    __extends(CvqualifierseqContext, _super);
    function CvqualifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CvqualifierseqContext.prototype.cvqualifier = function () {
        return this.getTypedRuleContext(CvqualifierContext, 0);
    };
    CvqualifierseqContext.prototype.cvqualifierseq = function () {
        return this.getTypedRuleContext(CvqualifierseqContext, 0);
    };
    Object.defineProperty(CvqualifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_cvqualifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return CvqualifierseqContext;
}(antlr.ParserRuleContext));
exports.CvqualifierseqContext = CvqualifierseqContext;
var CvqualifierContext = /** @class */ (function (_super) {
    __extends(CvqualifierContext, _super);
    function CvqualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CvqualifierContext.prototype.Const = function () {
        return this.getToken(CPP14Parser.Const, 0);
    };
    CvqualifierContext.prototype.Volatile = function () {
        return this.getToken(CPP14Parser.Volatile, 0);
    };
    Object.defineProperty(CvqualifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_cvqualifier;
        },
        enumerable: false,
        configurable: true
    });
    return CvqualifierContext;
}(antlr.ParserRuleContext));
exports.CvqualifierContext = CvqualifierContext;
var RefqualifierContext = /** @class */ (function (_super) {
    __extends(RefqualifierContext, _super);
    function RefqualifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RefqualifierContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    RefqualifierContext.prototype.AndAnd = function () {
        return this.getToken(CPP14Parser.AndAnd, 0);
    };
    Object.defineProperty(RefqualifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_refqualifier;
        },
        enumerable: false,
        configurable: true
    });
    return RefqualifierContext;
}(antlr.ParserRuleContext));
exports.RefqualifierContext = RefqualifierContext;
var DeclaratoridContext = /** @class */ (function (_super) {
    __extends(DeclaratoridContext, _super);
    function DeclaratoridContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DeclaratoridContext.prototype.idexpression = function () {
        return this.getTypedRuleContext(IdexpressionContext, 0);
    };
    DeclaratoridContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    Object.defineProperty(DeclaratoridContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_declaratorid;
        },
        enumerable: false,
        configurable: true
    });
    return DeclaratoridContext;
}(antlr.ParserRuleContext));
exports.DeclaratoridContext = DeclaratoridContext;
var TypeidContext = /** @class */ (function (_super) {
    __extends(TypeidContext, _super);
    function TypeidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeidContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    TypeidContext.prototype.abstractdeclarator = function () {
        return this.getTypedRuleContext(AbstractdeclaratorContext, 0);
    };
    Object.defineProperty(TypeidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typeid;
        },
        enumerable: false,
        configurable: true
    });
    return TypeidContext;
}(antlr.ParserRuleContext));
exports.TypeidContext = TypeidContext;
var AbstractdeclaratorContext = /** @class */ (function (_super) {
    __extends(AbstractdeclaratorContext, _super);
    function AbstractdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbstractdeclaratorContext.prototype.ptrabstractdeclarator = function () {
        return this.getTypedRuleContext(PtrabstractdeclaratorContext, 0);
    };
    AbstractdeclaratorContext.prototype.parametersandqualifiers = function () {
        return this.getTypedRuleContext(ParametersandqualifiersContext, 0);
    };
    AbstractdeclaratorContext.prototype.trailingreturntype = function () {
        return this.getTypedRuleContext(TrailingreturntypeContext, 0);
    };
    AbstractdeclaratorContext.prototype.noptrabstractdeclarator = function () {
        return this.getTypedRuleContext(NoptrabstractdeclaratorContext, 0);
    };
    AbstractdeclaratorContext.prototype.abstractpackdeclarator = function () {
        return this.getTypedRuleContext(AbstractpackdeclaratorContext, 0);
    };
    Object.defineProperty(AbstractdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_abstractdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractdeclaratorContext;
}(antlr.ParserRuleContext));
exports.AbstractdeclaratorContext = AbstractdeclaratorContext;
var PtrabstractdeclaratorContext = /** @class */ (function (_super) {
    __extends(PtrabstractdeclaratorContext, _super);
    function PtrabstractdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PtrabstractdeclaratorContext.prototype.noptrabstractdeclarator = function () {
        return this.getTypedRuleContext(NoptrabstractdeclaratorContext, 0);
    };
    PtrabstractdeclaratorContext.prototype.ptroperator = function () {
        return this.getTypedRuleContext(PtroperatorContext, 0);
    };
    PtrabstractdeclaratorContext.prototype.ptrabstractdeclarator = function () {
        return this.getTypedRuleContext(PtrabstractdeclaratorContext, 0);
    };
    Object.defineProperty(PtrabstractdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_ptrabstractdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return PtrabstractdeclaratorContext;
}(antlr.ParserRuleContext));
exports.PtrabstractdeclaratorContext = PtrabstractdeclaratorContext;
var NoptrabstractdeclaratorContext = /** @class */ (function (_super) {
    __extends(NoptrabstractdeclaratorContext, _super);
    function NoptrabstractdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoptrabstractdeclaratorContext.prototype.parametersandqualifiers = function () {
        return this.getTypedRuleContext(ParametersandqualifiersContext, 0);
    };
    NoptrabstractdeclaratorContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    NoptrabstractdeclaratorContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    NoptrabstractdeclaratorContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    NoptrabstractdeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    NoptrabstractdeclaratorContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NoptrabstractdeclaratorContext.prototype.ptrabstractdeclarator = function () {
        return this.getTypedRuleContext(PtrabstractdeclaratorContext, 0);
    };
    NoptrabstractdeclaratorContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    NoptrabstractdeclaratorContext.prototype.noptrabstractdeclarator = function () {
        return this.getTypedRuleContext(NoptrabstractdeclaratorContext, 0);
    };
    Object.defineProperty(NoptrabstractdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noptrabstractdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return NoptrabstractdeclaratorContext;
}(antlr.ParserRuleContext));
exports.NoptrabstractdeclaratorContext = NoptrabstractdeclaratorContext;
var AbstractpackdeclaratorContext = /** @class */ (function (_super) {
    __extends(AbstractpackdeclaratorContext, _super);
    function AbstractpackdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AbstractpackdeclaratorContext.prototype.noptrabstractpackdeclarator = function () {
        return this.getTypedRuleContext(NoptrabstractpackdeclaratorContext, 0);
    };
    AbstractpackdeclaratorContext.prototype.ptroperator = function () {
        return this.getTypedRuleContext(PtroperatorContext, 0);
    };
    AbstractpackdeclaratorContext.prototype.abstractpackdeclarator = function () {
        return this.getTypedRuleContext(AbstractpackdeclaratorContext, 0);
    };
    Object.defineProperty(AbstractpackdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_abstractpackdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return AbstractpackdeclaratorContext;
}(antlr.ParserRuleContext));
exports.AbstractpackdeclaratorContext = AbstractpackdeclaratorContext;
var NoptrabstractpackdeclaratorContext = /** @class */ (function (_super) {
    __extends(NoptrabstractpackdeclaratorContext, _super);
    function NoptrabstractpackdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoptrabstractpackdeclaratorContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.noptrabstractpackdeclarator = function () {
        return this.getTypedRuleContext(NoptrabstractpackdeclaratorContext, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.parametersandqualifiers = function () {
        return this.getTypedRuleContext(ParametersandqualifiersContext, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    NoptrabstractpackdeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(NoptrabstractpackdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noptrabstractpackdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return NoptrabstractpackdeclaratorContext;
}(antlr.ParserRuleContext));
exports.NoptrabstractpackdeclaratorContext = NoptrabstractpackdeclaratorContext;
var ParameterdeclarationclauseContext = /** @class */ (function (_super) {
    __extends(ParameterdeclarationclauseContext, _super);
    function ParameterdeclarationclauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterdeclarationclauseContext.prototype.parameterdeclarationlist = function () {
        return this.getTypedRuleContext(ParameterdeclarationlistContext, 0);
    };
    ParameterdeclarationclauseContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    ParameterdeclarationclauseContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(ParameterdeclarationclauseContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_parameterdeclarationclause;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterdeclarationclauseContext;
}(antlr.ParserRuleContext));
exports.ParameterdeclarationclauseContext = ParameterdeclarationclauseContext;
var ParameterdeclarationlistContext = /** @class */ (function (_super) {
    __extends(ParameterdeclarationlistContext, _super);
    function ParameterdeclarationlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterdeclarationlistContext.prototype.parameterdeclaration = function () {
        return this.getTypedRuleContext(ParameterdeclarationContext, 0);
    };
    ParameterdeclarationlistContext.prototype.parameterdeclarationlist = function () {
        return this.getTypedRuleContext(ParameterdeclarationlistContext, 0);
    };
    ParameterdeclarationlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(ParameterdeclarationlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_parameterdeclarationlist;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterdeclarationlistContext;
}(antlr.ParserRuleContext));
exports.ParameterdeclarationlistContext = ParameterdeclarationlistContext;
var ParameterdeclarationContext = /** @class */ (function (_super) {
    __extends(ParameterdeclarationContext, _super);
    function ParameterdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ParameterdeclarationContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    ParameterdeclarationContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    ParameterdeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    ParameterdeclarationContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    ParameterdeclarationContext.prototype.initializerclause = function () {
        return this.getTypedRuleContext(InitializerclauseContext, 0);
    };
    ParameterdeclarationContext.prototype.abstractdeclarator = function () {
        return this.getTypedRuleContext(AbstractdeclaratorContext, 0);
    };
    Object.defineProperty(ParameterdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_parameterdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return ParameterdeclarationContext;
}(antlr.ParserRuleContext));
exports.ParameterdeclarationContext = ParameterdeclarationContext;
var FunctiondefinitionContext = /** @class */ (function (_super) {
    __extends(FunctiondefinitionContext, _super);
    function FunctiondefinitionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctiondefinitionContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    FunctiondefinitionContext.prototype.functionbody = function () {
        return this.getTypedRuleContext(FunctionbodyContext, 0);
    };
    FunctiondefinitionContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    FunctiondefinitionContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    FunctiondefinitionContext.prototype.virtspecifierseq = function () {
        return this.getTypedRuleContext(VirtspecifierseqContext, 0);
    };
    Object.defineProperty(FunctiondefinitionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_functiondefinition;
        },
        enumerable: false,
        configurable: true
    });
    return FunctiondefinitionContext;
}(antlr.ParserRuleContext));
exports.FunctiondefinitionContext = FunctiondefinitionContext;
var FunctionbodyContext = /** @class */ (function (_super) {
    __extends(FunctionbodyContext, _super);
    function FunctionbodyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionbodyContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    FunctionbodyContext.prototype.ctorinitializer = function () {
        return this.getTypedRuleContext(CtorinitializerContext, 0);
    };
    FunctionbodyContext.prototype.functiontryblock = function () {
        return this.getTypedRuleContext(FunctiontryblockContext, 0);
    };
    FunctionbodyContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    FunctionbodyContext.prototype.Default = function () {
        return this.getToken(CPP14Parser.Default, 0);
    };
    FunctionbodyContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    FunctionbodyContext.prototype.Delete = function () {
        return this.getToken(CPP14Parser.Delete, 0);
    };
    Object.defineProperty(FunctionbodyContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_functionbody;
        },
        enumerable: false,
        configurable: true
    });
    return FunctionbodyContext;
}(antlr.ParserRuleContext));
exports.FunctionbodyContext = FunctionbodyContext;
var InitializerContext = /** @class */ (function (_super) {
    __extends(InitializerContext, _super);
    function InitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerContext.prototype.braceorequalinitializer = function () {
        return this.getTypedRuleContext(BraceorequalinitializerContext, 0);
    };
    InitializerContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    InitializerContext.prototype.expressionlist = function () {
        return this.getTypedRuleContext(ExpressionlistContext, 0);
    };
    InitializerContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(InitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initializer;
        },
        enumerable: false,
        configurable: true
    });
    return InitializerContext;
}(antlr.ParserRuleContext));
exports.InitializerContext = InitializerContext;
var BraceorequalinitializerContext = /** @class */ (function (_super) {
    __extends(BraceorequalinitializerContext, _super);
    function BraceorequalinitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BraceorequalinitializerContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    BraceorequalinitializerContext.prototype.initializerclause = function () {
        return this.getTypedRuleContext(InitializerclauseContext, 0);
    };
    BraceorequalinitializerContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(BraceorequalinitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_braceorequalinitializer;
        },
        enumerable: false,
        configurable: true
    });
    return BraceorequalinitializerContext;
}(antlr.ParserRuleContext));
exports.BraceorequalinitializerContext = BraceorequalinitializerContext;
var InitializerclauseContext = /** @class */ (function (_super) {
    __extends(InitializerclauseContext, _super);
    function InitializerclauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerclauseContext.prototype.assignmentexpression = function () {
        return this.getTypedRuleContext(AssignmentexpressionContext, 0);
    };
    InitializerclauseContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(InitializerclauseContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initializerclause;
        },
        enumerable: false,
        configurable: true
    });
    return InitializerclauseContext;
}(antlr.ParserRuleContext));
exports.InitializerclauseContext = InitializerclauseContext;
var InitializerlistContext = /** @class */ (function (_super) {
    __extends(InitializerlistContext, _super);
    function InitializerlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    InitializerlistContext.prototype.initializerclause = function () {
        return this.getTypedRuleContext(InitializerclauseContext, 0);
    };
    InitializerlistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    InitializerlistContext.prototype.initializerlist = function () {
        return this.getTypedRuleContext(InitializerlistContext, 0);
    };
    InitializerlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(InitializerlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_initializerlist;
        },
        enumerable: false,
        configurable: true
    });
    return InitializerlistContext;
}(antlr.ParserRuleContext));
exports.InitializerlistContext = InitializerlistContext;
var BracedinitlistContext = /** @class */ (function (_super) {
    __extends(BracedinitlistContext, _super);
    function BracedinitlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BracedinitlistContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    BracedinitlistContext.prototype.initializerlist = function () {
        return this.getTypedRuleContext(InitializerlistContext, 0);
    };
    BracedinitlistContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    BracedinitlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(BracedinitlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_bracedinitlist;
        },
        enumerable: false,
        configurable: true
    });
    return BracedinitlistContext;
}(antlr.ParserRuleContext));
exports.BracedinitlistContext = BracedinitlistContext;
var ClassnameContext = /** @class */ (function (_super) {
    __extends(ClassnameContext, _super);
    function ClassnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassnameContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    ClassnameContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    Object.defineProperty(ClassnameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classname;
        },
        enumerable: false,
        configurable: true
    });
    return ClassnameContext;
}(antlr.ParserRuleContext));
exports.ClassnameContext = ClassnameContext;
var ClassspecifierContext = /** @class */ (function (_super) {
    __extends(ClassspecifierContext, _super);
    function ClassspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassspecifierContext.prototype.classhead = function () {
        return this.getTypedRuleContext(ClassheadContext, 0);
    };
    ClassspecifierContext.prototype.LeftBrace = function () {
        return this.getToken(CPP14Parser.LeftBrace, 0);
    };
    ClassspecifierContext.prototype.RightBrace = function () {
        return this.getToken(CPP14Parser.RightBrace, 0);
    };
    ClassspecifierContext.prototype.memberspecification = function () {
        return this.getTypedRuleContext(MemberspecificationContext, 0);
    };
    Object.defineProperty(ClassspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return ClassspecifierContext;
}(antlr.ParserRuleContext));
exports.ClassspecifierContext = ClassspecifierContext;
var ClassheadContext = /** @class */ (function (_super) {
    __extends(ClassheadContext, _super);
    function ClassheadContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassheadContext.prototype.classkey = function () {
        return this.getTypedRuleContext(ClasskeyContext, 0);
    };
    ClassheadContext.prototype.classheadname = function () {
        return this.getTypedRuleContext(ClassheadnameContext, 0);
    };
    ClassheadContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    ClassheadContext.prototype.classvirtspecifier = function () {
        return this.getTypedRuleContext(ClassvirtspecifierContext, 0);
    };
    ClassheadContext.prototype.baseclause = function () {
        return this.getTypedRuleContext(BaseclauseContext, 0);
    };
    Object.defineProperty(ClassheadContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classhead;
        },
        enumerable: false,
        configurable: true
    });
    return ClassheadContext;
}(antlr.ParserRuleContext));
exports.ClassheadContext = ClassheadContext;
var ClassheadnameContext = /** @class */ (function (_super) {
    __extends(ClassheadnameContext, _super);
    function ClassheadnameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassheadnameContext.prototype.classname = function () {
        return this.getTypedRuleContext(ClassnameContext, 0);
    };
    ClassheadnameContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    Object.defineProperty(ClassheadnameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classheadname;
        },
        enumerable: false,
        configurable: true
    });
    return ClassheadnameContext;
}(antlr.ParserRuleContext));
exports.ClassheadnameContext = ClassheadnameContext;
var ClassvirtspecifierContext = /** @class */ (function (_super) {
    __extends(ClassvirtspecifierContext, _super);
    function ClassvirtspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassvirtspecifierContext.prototype.Final = function () {
        return this.getToken(CPP14Parser.Final, 0);
    };
    Object.defineProperty(ClassvirtspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classvirtspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return ClassvirtspecifierContext;
}(antlr.ParserRuleContext));
exports.ClassvirtspecifierContext = ClassvirtspecifierContext;
var ClasskeyContext = /** @class */ (function (_super) {
    __extends(ClasskeyContext, _super);
    function ClasskeyContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClasskeyContext.prototype.Class = function () {
        return this.getToken(CPP14Parser.Class, 0);
    };
    ClasskeyContext.prototype.Struct = function () {
        return this.getToken(CPP14Parser.Struct, 0);
    };
    ClasskeyContext.prototype.Union = function () {
        return this.getToken(CPP14Parser.Union, 0);
    };
    Object.defineProperty(ClasskeyContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classkey;
        },
        enumerable: false,
        configurable: true
    });
    return ClasskeyContext;
}(antlr.ParserRuleContext));
exports.ClasskeyContext = ClasskeyContext;
var MemberspecificationContext = /** @class */ (function (_super) {
    __extends(MemberspecificationContext, _super);
    function MemberspecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberspecificationContext.prototype.memberdeclaration = function () {
        return this.getTypedRuleContext(MemberdeclarationContext, 0);
    };
    MemberspecificationContext.prototype.memberspecification = function () {
        return this.getTypedRuleContext(MemberspecificationContext, 0);
    };
    MemberspecificationContext.prototype.accessspecifier = function () {
        return this.getTypedRuleContext(AccessspecifierContext, 0);
    };
    MemberspecificationContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    Object.defineProperty(MemberspecificationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_memberspecification;
        },
        enumerable: false,
        configurable: true
    });
    return MemberspecificationContext;
}(antlr.ParserRuleContext));
exports.MemberspecificationContext = MemberspecificationContext;
var MemberdeclarationContext = /** @class */ (function (_super) {
    __extends(MemberdeclarationContext, _super);
    function MemberdeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberdeclarationContext.prototype.Semi = function () {
        return this.getToken(CPP14Parser.Semi, 0);
    };
    MemberdeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    MemberdeclarationContext.prototype.declspecifierseq = function () {
        return this.getTypedRuleContext(DeclspecifierseqContext, 0);
    };
    MemberdeclarationContext.prototype.memberdeclaratorlist = function () {
        return this.getTypedRuleContext(MemberdeclaratorlistContext, 0);
    };
    MemberdeclarationContext.prototype.functiondefinition = function () {
        return this.getTypedRuleContext(FunctiondefinitionContext, 0);
    };
    MemberdeclarationContext.prototype.usingdeclaration = function () {
        return this.getTypedRuleContext(UsingdeclarationContext, 0);
    };
    MemberdeclarationContext.prototype.static_assertdeclaration = function () {
        return this.getTypedRuleContext(Static_assertdeclarationContext, 0);
    };
    MemberdeclarationContext.prototype.templatedeclaration = function () {
        return this.getTypedRuleContext(TemplatedeclarationContext, 0);
    };
    MemberdeclarationContext.prototype.aliasdeclaration = function () {
        return this.getTypedRuleContext(AliasdeclarationContext, 0);
    };
    MemberdeclarationContext.prototype.emptydeclaration = function () {
        return this.getTypedRuleContext(EmptydeclarationContext, 0);
    };
    Object.defineProperty(MemberdeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_memberdeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return MemberdeclarationContext;
}(antlr.ParserRuleContext));
exports.MemberdeclarationContext = MemberdeclarationContext;
var MemberdeclaratorlistContext = /** @class */ (function (_super) {
    __extends(MemberdeclaratorlistContext, _super);
    function MemberdeclaratorlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberdeclaratorlistContext.prototype.memberdeclarator = function () {
        return this.getTypedRuleContext(MemberdeclaratorContext, 0);
    };
    MemberdeclaratorlistContext.prototype.memberdeclaratorlist = function () {
        return this.getTypedRuleContext(MemberdeclaratorlistContext, 0);
    };
    MemberdeclaratorlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(MemberdeclaratorlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_memberdeclaratorlist;
        },
        enumerable: false,
        configurable: true
    });
    return MemberdeclaratorlistContext;
}(antlr.ParserRuleContext));
exports.MemberdeclaratorlistContext = MemberdeclaratorlistContext;
var MemberdeclaratorContext = /** @class */ (function (_super) {
    __extends(MemberdeclaratorContext, _super);
    function MemberdeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MemberdeclaratorContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    MemberdeclaratorContext.prototype.virtspecifierseq = function () {
        return this.getTypedRuleContext(VirtspecifierseqContext, 0);
    };
    MemberdeclaratorContext.prototype.purespecifier = function () {
        return this.getTypedRuleContext(PurespecifierContext, 0);
    };
    MemberdeclaratorContext.prototype.braceorequalinitializer = function () {
        return this.getTypedRuleContext(BraceorequalinitializerContext, 0);
    };
    MemberdeclaratorContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    MemberdeclaratorContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    MemberdeclaratorContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    MemberdeclaratorContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    Object.defineProperty(MemberdeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_memberdeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return MemberdeclaratorContext;
}(antlr.ParserRuleContext));
exports.MemberdeclaratorContext = MemberdeclaratorContext;
var VirtspecifierseqContext = /** @class */ (function (_super) {
    __extends(VirtspecifierseqContext, _super);
    function VirtspecifierseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VirtspecifierseqContext.prototype.virtspecifier = function () {
        return this.getTypedRuleContext(VirtspecifierContext, 0);
    };
    VirtspecifierseqContext.prototype.virtspecifierseq = function () {
        return this.getTypedRuleContext(VirtspecifierseqContext, 0);
    };
    Object.defineProperty(VirtspecifierseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_virtspecifierseq;
        },
        enumerable: false,
        configurable: true
    });
    return VirtspecifierseqContext;
}(antlr.ParserRuleContext));
exports.VirtspecifierseqContext = VirtspecifierseqContext;
var VirtspecifierContext = /** @class */ (function (_super) {
    __extends(VirtspecifierContext, _super);
    function VirtspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VirtspecifierContext.prototype.Override = function () {
        return this.getToken(CPP14Parser.Override, 0);
    };
    VirtspecifierContext.prototype.Final = function () {
        return this.getToken(CPP14Parser.Final, 0);
    };
    Object.defineProperty(VirtspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_virtspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return VirtspecifierContext;
}(antlr.ParserRuleContext));
exports.VirtspecifierContext = VirtspecifierContext;
var PurespecifierContext = /** @class */ (function (_super) {
    __extends(PurespecifierContext, _super);
    function PurespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PurespecifierContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    PurespecifierContext.prototype.Octalliteral = function () {
        return this.getToken(CPP14Parser.Octalliteral, 0);
    };
    Object.defineProperty(PurespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_purespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return PurespecifierContext;
}(antlr.ParserRuleContext));
exports.PurespecifierContext = PurespecifierContext;
var BaseclauseContext = /** @class */ (function (_super) {
    __extends(BaseclauseContext, _super);
    function BaseclauseContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BaseclauseContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    BaseclauseContext.prototype.basespecifierlist = function () {
        return this.getTypedRuleContext(BasespecifierlistContext, 0);
    };
    Object.defineProperty(BaseclauseContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_baseclause;
        },
        enumerable: false,
        configurable: true
    });
    return BaseclauseContext;
}(antlr.ParserRuleContext));
exports.BaseclauseContext = BaseclauseContext;
var BasespecifierlistContext = /** @class */ (function (_super) {
    __extends(BasespecifierlistContext, _super);
    function BasespecifierlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BasespecifierlistContext.prototype.basespecifier = function () {
        return this.getTypedRuleContext(BasespecifierContext, 0);
    };
    BasespecifierlistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    BasespecifierlistContext.prototype.basespecifierlist = function () {
        return this.getTypedRuleContext(BasespecifierlistContext, 0);
    };
    BasespecifierlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(BasespecifierlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_basespecifierlist;
        },
        enumerable: false,
        configurable: true
    });
    return BasespecifierlistContext;
}(antlr.ParserRuleContext));
exports.BasespecifierlistContext = BasespecifierlistContext;
var BasespecifierContext = /** @class */ (function (_super) {
    __extends(BasespecifierContext, _super);
    function BasespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BasespecifierContext.prototype.basetypespecifier = function () {
        return this.getTypedRuleContext(BasetypespecifierContext, 0);
    };
    BasespecifierContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    BasespecifierContext.prototype.Virtual = function () {
        return this.getToken(CPP14Parser.Virtual, 0);
    };
    BasespecifierContext.prototype.accessspecifier = function () {
        return this.getTypedRuleContext(AccessspecifierContext, 0);
    };
    Object.defineProperty(BasespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_basespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return BasespecifierContext;
}(antlr.ParserRuleContext));
exports.BasespecifierContext = BasespecifierContext;
var ClassordecltypeContext = /** @class */ (function (_super) {
    __extends(ClassordecltypeContext, _super);
    function ClassordecltypeContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClassordecltypeContext.prototype.classname = function () {
        return this.getTypedRuleContext(ClassnameContext, 0);
    };
    ClassordecltypeContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    ClassordecltypeContext.prototype.decltypespecifier = function () {
        return this.getTypedRuleContext(DecltypespecifierContext, 0);
    };
    Object.defineProperty(ClassordecltypeContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_classordecltype;
        },
        enumerable: false,
        configurable: true
    });
    return ClassordecltypeContext;
}(antlr.ParserRuleContext));
exports.ClassordecltypeContext = ClassordecltypeContext;
var BasetypespecifierContext = /** @class */ (function (_super) {
    __extends(BasetypespecifierContext, _super);
    function BasetypespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BasetypespecifierContext.prototype.classordecltype = function () {
        return this.getTypedRuleContext(ClassordecltypeContext, 0);
    };
    Object.defineProperty(BasetypespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_basetypespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return BasetypespecifierContext;
}(antlr.ParserRuleContext));
exports.BasetypespecifierContext = BasetypespecifierContext;
var AccessspecifierContext = /** @class */ (function (_super) {
    __extends(AccessspecifierContext, _super);
    function AccessspecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AccessspecifierContext.prototype.Private = function () {
        return this.getToken(CPP14Parser.Private, 0);
    };
    AccessspecifierContext.prototype.Protected = function () {
        return this.getToken(CPP14Parser.Protected, 0);
    };
    AccessspecifierContext.prototype.Public = function () {
        return this.getToken(CPP14Parser.Public, 0);
    };
    Object.defineProperty(AccessspecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_accessspecifier;
        },
        enumerable: false,
        configurable: true
    });
    return AccessspecifierContext;
}(antlr.ParserRuleContext));
exports.AccessspecifierContext = AccessspecifierContext;
var ConversionfunctionidContext = /** @class */ (function (_super) {
    __extends(ConversionfunctionidContext, _super);
    function ConversionfunctionidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConversionfunctionidContext.prototype.Operator = function () {
        return this.getToken(CPP14Parser.Operator, 0);
    };
    ConversionfunctionidContext.prototype.conversiontypeid = function () {
        return this.getTypedRuleContext(ConversiontypeidContext, 0);
    };
    Object.defineProperty(ConversionfunctionidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_conversionfunctionid;
        },
        enumerable: false,
        configurable: true
    });
    return ConversionfunctionidContext;
}(antlr.ParserRuleContext));
exports.ConversionfunctionidContext = ConversionfunctionidContext;
var ConversiontypeidContext = /** @class */ (function (_super) {
    __extends(ConversiontypeidContext, _super);
    function ConversiontypeidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConversiontypeidContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    ConversiontypeidContext.prototype.conversiondeclarator = function () {
        return this.getTypedRuleContext(ConversiondeclaratorContext, 0);
    };
    Object.defineProperty(ConversiontypeidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_conversiontypeid;
        },
        enumerable: false,
        configurable: true
    });
    return ConversiontypeidContext;
}(antlr.ParserRuleContext));
exports.ConversiontypeidContext = ConversiontypeidContext;
var ConversiondeclaratorContext = /** @class */ (function (_super) {
    __extends(ConversiondeclaratorContext, _super);
    function ConversiondeclaratorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ConversiondeclaratorContext.prototype.ptroperator = function () {
        return this.getTypedRuleContext(PtroperatorContext, 0);
    };
    ConversiondeclaratorContext.prototype.conversiondeclarator = function () {
        return this.getTypedRuleContext(ConversiondeclaratorContext, 0);
    };
    Object.defineProperty(ConversiondeclaratorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_conversiondeclarator;
        },
        enumerable: false,
        configurable: true
    });
    return ConversiondeclaratorContext;
}(antlr.ParserRuleContext));
exports.ConversiondeclaratorContext = ConversiondeclaratorContext;
var CtorinitializerContext = /** @class */ (function (_super) {
    __extends(CtorinitializerContext, _super);
    function CtorinitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CtorinitializerContext.prototype.Colon = function () {
        return this.getToken(CPP14Parser.Colon, 0);
    };
    CtorinitializerContext.prototype.meminitializerlist = function () {
        return this.getTypedRuleContext(MeminitializerlistContext, 0);
    };
    Object.defineProperty(CtorinitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_ctorinitializer;
        },
        enumerable: false,
        configurable: true
    });
    return CtorinitializerContext;
}(antlr.ParserRuleContext));
exports.CtorinitializerContext = CtorinitializerContext;
var MeminitializerlistContext = /** @class */ (function (_super) {
    __extends(MeminitializerlistContext, _super);
    function MeminitializerlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MeminitializerlistContext.prototype.meminitializer = function () {
        return this.getTypedRuleContext(MeminitializerContext, 0);
    };
    MeminitializerlistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    MeminitializerlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    MeminitializerlistContext.prototype.meminitializerlist = function () {
        return this.getTypedRuleContext(MeminitializerlistContext, 0);
    };
    Object.defineProperty(MeminitializerlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_meminitializerlist;
        },
        enumerable: false,
        configurable: true
    });
    return MeminitializerlistContext;
}(antlr.ParserRuleContext));
exports.MeminitializerlistContext = MeminitializerlistContext;
var MeminitializerContext = /** @class */ (function (_super) {
    __extends(MeminitializerContext, _super);
    function MeminitializerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MeminitializerContext.prototype.meminitializerid = function () {
        return this.getTypedRuleContext(MeminitializeridContext, 0);
    };
    MeminitializerContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    MeminitializerContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    MeminitializerContext.prototype.expressionlist = function () {
        return this.getTypedRuleContext(ExpressionlistContext, 0);
    };
    MeminitializerContext.prototype.bracedinitlist = function () {
        return this.getTypedRuleContext(BracedinitlistContext, 0);
    };
    Object.defineProperty(MeminitializerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_meminitializer;
        },
        enumerable: false,
        configurable: true
    });
    return MeminitializerContext;
}(antlr.ParserRuleContext));
exports.MeminitializerContext = MeminitializerContext;
var MeminitializeridContext = /** @class */ (function (_super) {
    __extends(MeminitializeridContext, _super);
    function MeminitializeridContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    MeminitializeridContext.prototype.classordecltype = function () {
        return this.getTypedRuleContext(ClassordecltypeContext, 0);
    };
    MeminitializeridContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(MeminitializeridContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_meminitializerid;
        },
        enumerable: false,
        configurable: true
    });
    return MeminitializeridContext;
}(antlr.ParserRuleContext));
exports.MeminitializeridContext = MeminitializeridContext;
var OperatorfunctionidContext = /** @class */ (function (_super) {
    __extends(OperatorfunctionidContext, _super);
    function OperatorfunctionidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorfunctionidContext.prototype.Operator = function () {
        return this.getToken(CPP14Parser.Operator, 0);
    };
    OperatorfunctionidContext.prototype.operator = function () {
        return this.getTypedRuleContext(OperatorContext, 0);
    };
    Object.defineProperty(OperatorfunctionidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_operatorfunctionid;
        },
        enumerable: false,
        configurable: true
    });
    return OperatorfunctionidContext;
}(antlr.ParserRuleContext));
exports.OperatorfunctionidContext = OperatorfunctionidContext;
var LiteraloperatoridContext = /** @class */ (function (_super) {
    __extends(LiteraloperatoridContext, _super);
    function LiteraloperatoridContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteraloperatoridContext.prototype.Operator = function () {
        return this.getToken(CPP14Parser.Operator, 0);
    };
    LiteraloperatoridContext.prototype.Stringliteral = function () {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    };
    LiteraloperatoridContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    LiteraloperatoridContext.prototype.Userdefinedstringliteral = function () {
        return this.getToken(CPP14Parser.Userdefinedstringliteral, 0);
    };
    Object.defineProperty(LiteraloperatoridContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_literaloperatorid;
        },
        enumerable: false,
        configurable: true
    });
    return LiteraloperatoridContext;
}(antlr.ParserRuleContext));
exports.LiteraloperatoridContext = LiteraloperatoridContext;
var TemplatedeclarationContext = /** @class */ (function (_super) {
    __extends(TemplatedeclarationContext, _super);
    function TemplatedeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplatedeclarationContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    TemplatedeclarationContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    TemplatedeclarationContext.prototype.templateparameterlist = function () {
        return this.getTypedRuleContext(TemplateparameterlistContext, 0);
    };
    TemplatedeclarationContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    TemplatedeclarationContext.prototype.declaration = function () {
        return this.getTypedRuleContext(DeclarationContext, 0);
    };
    Object.defineProperty(TemplatedeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templatedeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return TemplatedeclarationContext;
}(antlr.ParserRuleContext));
exports.TemplatedeclarationContext = TemplatedeclarationContext;
var TemplateparameterlistContext = /** @class */ (function (_super) {
    __extends(TemplateparameterlistContext, _super);
    function TemplateparameterlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateparameterlistContext.prototype.templateparameter = function () {
        return this.getTypedRuleContext(TemplateparameterContext, 0);
    };
    TemplateparameterlistContext.prototype.templateparameterlist = function () {
        return this.getTypedRuleContext(TemplateparameterlistContext, 0);
    };
    TemplateparameterlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(TemplateparameterlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templateparameterlist;
        },
        enumerable: false,
        configurable: true
    });
    return TemplateparameterlistContext;
}(antlr.ParserRuleContext));
exports.TemplateparameterlistContext = TemplateparameterlistContext;
var TemplateparameterContext = /** @class */ (function (_super) {
    __extends(TemplateparameterContext, _super);
    function TemplateparameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateparameterContext.prototype.typeparameter = function () {
        return this.getTypedRuleContext(TypeparameterContext, 0);
    };
    TemplateparameterContext.prototype.parameterdeclaration = function () {
        return this.getTypedRuleContext(ParameterdeclarationContext, 0);
    };
    Object.defineProperty(TemplateparameterContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templateparameter;
        },
        enumerable: false,
        configurable: true
    });
    return TemplateparameterContext;
}(antlr.ParserRuleContext));
exports.TemplateparameterContext = TemplateparameterContext;
var TypeparameterContext = /** @class */ (function (_super) {
    __extends(TypeparameterContext, _super);
    function TypeparameterContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeparameterContext.prototype.Class = function () {
        return this.getToken(CPP14Parser.Class, 0);
    };
    TypeparameterContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    TypeparameterContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    TypeparameterContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    TypeparameterContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    TypeparameterContext.prototype.Typename = function () {
        return this.getToken(CPP14Parser.Typename, 0);
    };
    TypeparameterContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    TypeparameterContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    TypeparameterContext.prototype.templateparameterlist = function () {
        return this.getTypedRuleContext(TemplateparameterlistContext, 0);
    };
    TypeparameterContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    TypeparameterContext.prototype.idexpression = function () {
        return this.getTypedRuleContext(IdexpressionContext, 0);
    };
    Object.defineProperty(TypeparameterContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typeparameter;
        },
        enumerable: false,
        configurable: true
    });
    return TypeparameterContext;
}(antlr.ParserRuleContext));
exports.TypeparameterContext = TypeparameterContext;
var SimpletemplateidContext = /** @class */ (function (_super) {
    __extends(SimpletemplateidContext, _super);
    function SimpletemplateidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpletemplateidContext.prototype.templatename = function () {
        return this.getTypedRuleContext(TemplatenameContext, 0);
    };
    SimpletemplateidContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    SimpletemplateidContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    SimpletemplateidContext.prototype.templateargumentlist = function () {
        return this.getTypedRuleContext(TemplateargumentlistContext, 0);
    };
    Object.defineProperty(SimpletemplateidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_simpletemplateid;
        },
        enumerable: false,
        configurable: true
    });
    return SimpletemplateidContext;
}(antlr.ParserRuleContext));
exports.SimpletemplateidContext = SimpletemplateidContext;
var TemplateidContext = /** @class */ (function (_super) {
    __extends(TemplateidContext, _super);
    function TemplateidContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateidContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    TemplateidContext.prototype.operatorfunctionid = function () {
        return this.getTypedRuleContext(OperatorfunctionidContext, 0);
    };
    TemplateidContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    TemplateidContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    TemplateidContext.prototype.templateargumentlist = function () {
        return this.getTypedRuleContext(TemplateargumentlistContext, 0);
    };
    TemplateidContext.prototype.literaloperatorid = function () {
        return this.getTypedRuleContext(LiteraloperatoridContext, 0);
    };
    Object.defineProperty(TemplateidContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templateid;
        },
        enumerable: false,
        configurable: true
    });
    return TemplateidContext;
}(antlr.ParserRuleContext));
exports.TemplateidContext = TemplateidContext;
var TemplatenameContext = /** @class */ (function (_super) {
    __extends(TemplatenameContext, _super);
    function TemplatenameContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplatenameContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    Object.defineProperty(TemplatenameContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templatename;
        },
        enumerable: false,
        configurable: true
    });
    return TemplatenameContext;
}(antlr.ParserRuleContext));
exports.TemplatenameContext = TemplatenameContext;
var TemplateargumentlistContext = /** @class */ (function (_super) {
    __extends(TemplateargumentlistContext, _super);
    function TemplateargumentlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateargumentlistContext.prototype.templateargument = function () {
        return this.getTypedRuleContext(TemplateargumentContext, 0);
    };
    TemplateargumentlistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    TemplateargumentlistContext.prototype.templateargumentlist = function () {
        return this.getTypedRuleContext(TemplateargumentlistContext, 0);
    };
    TemplateargumentlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(TemplateargumentlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templateargumentlist;
        },
        enumerable: false,
        configurable: true
    });
    return TemplateargumentlistContext;
}(antlr.ParserRuleContext));
exports.TemplateargumentlistContext = TemplateargumentlistContext;
var TemplateargumentContext = /** @class */ (function (_super) {
    __extends(TemplateargumentContext, _super);
    function TemplateargumentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TemplateargumentContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    TemplateargumentContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    TemplateargumentContext.prototype.idexpression = function () {
        return this.getTypedRuleContext(IdexpressionContext, 0);
    };
    Object.defineProperty(TemplateargumentContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_templateargument;
        },
        enumerable: false,
        configurable: true
    });
    return TemplateargumentContext;
}(antlr.ParserRuleContext));
exports.TemplateargumentContext = TemplateargumentContext;
var TypenamespecifierContext = /** @class */ (function (_super) {
    __extends(TypenamespecifierContext, _super);
    function TypenamespecifierContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypenamespecifierContext.prototype.Typename = function () {
        return this.getToken(CPP14Parser.Typename, 0);
    };
    TypenamespecifierContext.prototype.nestednamespecifier = function () {
        return this.getTypedRuleContext(NestednamespecifierContext, 0);
    };
    TypenamespecifierContext.prototype.Identifier = function () {
        return this.getToken(CPP14Parser.Identifier, 0);
    };
    TypenamespecifierContext.prototype.simpletemplateid = function () {
        return this.getTypedRuleContext(SimpletemplateidContext, 0);
    };
    TypenamespecifierContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    Object.defineProperty(TypenamespecifierContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typenamespecifier;
        },
        enumerable: false,
        configurable: true
    });
    return TypenamespecifierContext;
}(antlr.ParserRuleContext));
exports.TypenamespecifierContext = TypenamespecifierContext;
var ExplicitinstantiationContext = /** @class */ (function (_super) {
    __extends(ExplicitinstantiationContext, _super);
    function ExplicitinstantiationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplicitinstantiationContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    ExplicitinstantiationContext.prototype.declaration = function () {
        return this.getTypedRuleContext(DeclarationContext, 0);
    };
    ExplicitinstantiationContext.prototype.Extern = function () {
        return this.getToken(CPP14Parser.Extern, 0);
    };
    Object.defineProperty(ExplicitinstantiationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_explicitinstantiation;
        },
        enumerable: false,
        configurable: true
    });
    return ExplicitinstantiationContext;
}(antlr.ParserRuleContext));
exports.ExplicitinstantiationContext = ExplicitinstantiationContext;
var ExplicitspecializationContext = /** @class */ (function (_super) {
    __extends(ExplicitspecializationContext, _super);
    function ExplicitspecializationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExplicitspecializationContext.prototype.Template = function () {
        return this.getToken(CPP14Parser.Template, 0);
    };
    ExplicitspecializationContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    ExplicitspecializationContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    ExplicitspecializationContext.prototype.declaration = function () {
        return this.getTypedRuleContext(DeclarationContext, 0);
    };
    Object.defineProperty(ExplicitspecializationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_explicitspecialization;
        },
        enumerable: false,
        configurable: true
    });
    return ExplicitspecializationContext;
}(antlr.ParserRuleContext));
exports.ExplicitspecializationContext = ExplicitspecializationContext;
var TryblockContext = /** @class */ (function (_super) {
    __extends(TryblockContext, _super);
    function TryblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TryblockContext.prototype.Try = function () {
        return this.getToken(CPP14Parser.Try, 0);
    };
    TryblockContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    TryblockContext.prototype.handlerseq = function () {
        return this.getTypedRuleContext(HandlerseqContext, 0);
    };
    Object.defineProperty(TryblockContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_tryblock;
        },
        enumerable: false,
        configurable: true
    });
    return TryblockContext;
}(antlr.ParserRuleContext));
exports.TryblockContext = TryblockContext;
var FunctiontryblockContext = /** @class */ (function (_super) {
    __extends(FunctiontryblockContext, _super);
    function FunctiontryblockContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctiontryblockContext.prototype.Try = function () {
        return this.getToken(CPP14Parser.Try, 0);
    };
    FunctiontryblockContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    FunctiontryblockContext.prototype.handlerseq = function () {
        return this.getTypedRuleContext(HandlerseqContext, 0);
    };
    FunctiontryblockContext.prototype.ctorinitializer = function () {
        return this.getTypedRuleContext(CtorinitializerContext, 0);
    };
    Object.defineProperty(FunctiontryblockContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_functiontryblock;
        },
        enumerable: false,
        configurable: true
    });
    return FunctiontryblockContext;
}(antlr.ParserRuleContext));
exports.FunctiontryblockContext = FunctiontryblockContext;
var HandlerseqContext = /** @class */ (function (_super) {
    __extends(HandlerseqContext, _super);
    function HandlerseqContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HandlerseqContext.prototype.handler = function () {
        return this.getTypedRuleContext(HandlerContext, 0);
    };
    HandlerseqContext.prototype.handlerseq = function () {
        return this.getTypedRuleContext(HandlerseqContext, 0);
    };
    Object.defineProperty(HandlerseqContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_handlerseq;
        },
        enumerable: false,
        configurable: true
    });
    return HandlerseqContext;
}(antlr.ParserRuleContext));
exports.HandlerseqContext = HandlerseqContext;
var HandlerContext = /** @class */ (function (_super) {
    __extends(HandlerContext, _super);
    function HandlerContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    HandlerContext.prototype.Catch = function () {
        return this.getToken(CPP14Parser.Catch, 0);
    };
    HandlerContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    HandlerContext.prototype.exceptiondeclaration = function () {
        return this.getTypedRuleContext(ExceptiondeclarationContext, 0);
    };
    HandlerContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    HandlerContext.prototype.compoundstatement = function () {
        return this.getTypedRuleContext(CompoundstatementContext, 0);
    };
    Object.defineProperty(HandlerContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_handler;
        },
        enumerable: false,
        configurable: true
    });
    return HandlerContext;
}(antlr.ParserRuleContext));
exports.HandlerContext = HandlerContext;
var ExceptiondeclarationContext = /** @class */ (function (_super) {
    __extends(ExceptiondeclarationContext, _super);
    function ExceptiondeclarationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptiondeclarationContext.prototype.typespecifierseq = function () {
        return this.getTypedRuleContext(TypespecifierseqContext, 0);
    };
    ExceptiondeclarationContext.prototype.declarator = function () {
        return this.getTypedRuleContext(DeclaratorContext, 0);
    };
    ExceptiondeclarationContext.prototype.attributespecifierseq = function () {
        return this.getTypedRuleContext(AttributespecifierseqContext, 0);
    };
    ExceptiondeclarationContext.prototype.abstractdeclarator = function () {
        return this.getTypedRuleContext(AbstractdeclaratorContext, 0);
    };
    ExceptiondeclarationContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    Object.defineProperty(ExceptiondeclarationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_exceptiondeclaration;
        },
        enumerable: false,
        configurable: true
    });
    return ExceptiondeclarationContext;
}(antlr.ParserRuleContext));
exports.ExceptiondeclarationContext = ExceptiondeclarationContext;
var ThrowexpressionContext = /** @class */ (function (_super) {
    __extends(ThrowexpressionContext, _super);
    function ThrowexpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ThrowexpressionContext.prototype.Throw = function () {
        return this.getToken(CPP14Parser.Throw, 0);
    };
    ThrowexpressionContext.prototype.assignmentexpression = function () {
        return this.getTypedRuleContext(AssignmentexpressionContext, 0);
    };
    Object.defineProperty(ThrowexpressionContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_throwexpression;
        },
        enumerable: false,
        configurable: true
    });
    return ThrowexpressionContext;
}(antlr.ParserRuleContext));
exports.ThrowexpressionContext = ThrowexpressionContext;
var ExceptionspecificationContext = /** @class */ (function (_super) {
    __extends(ExceptionspecificationContext, _super);
    function ExceptionspecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExceptionspecificationContext.prototype.dynamicexceptionspecification = function () {
        return this.getTypedRuleContext(DynamicexceptionspecificationContext, 0);
    };
    ExceptionspecificationContext.prototype.noexceptspecification = function () {
        return this.getTypedRuleContext(NoexceptspecificationContext, 0);
    };
    Object.defineProperty(ExceptionspecificationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_exceptionspecification;
        },
        enumerable: false,
        configurable: true
    });
    return ExceptionspecificationContext;
}(antlr.ParserRuleContext));
exports.ExceptionspecificationContext = ExceptionspecificationContext;
var DynamicexceptionspecificationContext = /** @class */ (function (_super) {
    __extends(DynamicexceptionspecificationContext, _super);
    function DynamicexceptionspecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DynamicexceptionspecificationContext.prototype.Throw = function () {
        return this.getToken(CPP14Parser.Throw, 0);
    };
    DynamicexceptionspecificationContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    DynamicexceptionspecificationContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    DynamicexceptionspecificationContext.prototype.typeidlist = function () {
        return this.getTypedRuleContext(TypeidlistContext, 0);
    };
    Object.defineProperty(DynamicexceptionspecificationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_dynamicexceptionspecification;
        },
        enumerable: false,
        configurable: true
    });
    return DynamicexceptionspecificationContext;
}(antlr.ParserRuleContext));
exports.DynamicexceptionspecificationContext = DynamicexceptionspecificationContext;
var TypeidlistContext = /** @class */ (function (_super) {
    __extends(TypeidlistContext, _super);
    function TypeidlistContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TypeidlistContext.prototype.typeid = function () {
        return this.getTypedRuleContext(TypeidContext, 0);
    };
    TypeidlistContext.prototype.Ellipsis = function () {
        return this.getToken(CPP14Parser.Ellipsis, 0);
    };
    TypeidlistContext.prototype.typeidlist = function () {
        return this.getTypedRuleContext(TypeidlistContext, 0);
    };
    TypeidlistContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    Object.defineProperty(TypeidlistContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_typeidlist;
        },
        enumerable: false,
        configurable: true
    });
    return TypeidlistContext;
}(antlr.ParserRuleContext));
exports.TypeidlistContext = TypeidlistContext;
var NoexceptspecificationContext = /** @class */ (function (_super) {
    __extends(NoexceptspecificationContext, _super);
    function NoexceptspecificationContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NoexceptspecificationContext.prototype.Noexcept = function () {
        return this.getToken(CPP14Parser.Noexcept, 0);
    };
    NoexceptspecificationContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    NoexceptspecificationContext.prototype.constantexpression = function () {
        return this.getTypedRuleContext(ConstantexpressionContext, 0);
    };
    NoexceptspecificationContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(NoexceptspecificationContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_noexceptspecification;
        },
        enumerable: false,
        configurable: true
    });
    return NoexceptspecificationContext;
}(antlr.ParserRuleContext));
exports.NoexceptspecificationContext = NoexceptspecificationContext;
var RightShiftContext = /** @class */ (function (_super) {
    __extends(RightShiftContext, _super);
    function RightShiftContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RightShiftContext.prototype.Greater__list = function () {
        return this.getTokens(CPP14Parser.Greater);
    };
    RightShiftContext.prototype.Greater = function (i) {
        return this.getToken(CPP14Parser.Greater, i);
    };
    Object.defineProperty(RightShiftContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_rightShift;
        },
        enumerable: false,
        configurable: true
    });
    return RightShiftContext;
}(antlr.ParserRuleContext));
exports.RightShiftContext = RightShiftContext;
var RightShiftAssignContext = /** @class */ (function (_super) {
    __extends(RightShiftAssignContext, _super);
    function RightShiftAssignContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    RightShiftAssignContext.prototype.Greater__list = function () {
        return this.getTokens(CPP14Parser.Greater);
    };
    RightShiftAssignContext.prototype.Greater = function (i) {
        return this.getToken(CPP14Parser.Greater, i);
    };
    RightShiftAssignContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    Object.defineProperty(RightShiftAssignContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_rightShiftAssign;
        },
        enumerable: false,
        configurable: true
    });
    return RightShiftAssignContext;
}(antlr.ParserRuleContext));
exports.RightShiftAssignContext = RightShiftAssignContext;
var OperatorContext = /** @class */ (function (_super) {
    __extends(OperatorContext, _super);
    function OperatorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperatorContext.prototype.New = function () {
        return this.getToken(CPP14Parser.New, 0);
    };
    OperatorContext.prototype.Delete = function () {
        return this.getToken(CPP14Parser.Delete, 0);
    };
    OperatorContext.prototype.LeftBracket = function () {
        return this.getToken(CPP14Parser.LeftBracket, 0);
    };
    OperatorContext.prototype.RightBracket = function () {
        return this.getToken(CPP14Parser.RightBracket, 0);
    };
    OperatorContext.prototype.Plus = function () {
        return this.getToken(CPP14Parser.Plus, 0);
    };
    OperatorContext.prototype.Minus = function () {
        return this.getToken(CPP14Parser.Minus, 0);
    };
    OperatorContext.prototype.Star = function () {
        return this.getToken(CPP14Parser.Star, 0);
    };
    OperatorContext.prototype.Div = function () {
        return this.getToken(CPP14Parser.Div, 0);
    };
    OperatorContext.prototype.Mod = function () {
        return this.getToken(CPP14Parser.Mod, 0);
    };
    OperatorContext.prototype.Caret = function () {
        return this.getToken(CPP14Parser.Caret, 0);
    };
    OperatorContext.prototype.And = function () {
        return this.getToken(CPP14Parser.And, 0);
    };
    OperatorContext.prototype.Or = function () {
        return this.getToken(CPP14Parser.Or, 0);
    };
    OperatorContext.prototype.Tilde = function () {
        return this.getToken(CPP14Parser.Tilde, 0);
    };
    OperatorContext.prototype.Not = function () {
        return this.getToken(CPP14Parser.Not, 0);
    };
    OperatorContext.prototype.Assign = function () {
        return this.getToken(CPP14Parser.Assign, 0);
    };
    OperatorContext.prototype.Less = function () {
        return this.getToken(CPP14Parser.Less, 0);
    };
    OperatorContext.prototype.Greater = function () {
        return this.getToken(CPP14Parser.Greater, 0);
    };
    OperatorContext.prototype.PlusAssign = function () {
        return this.getToken(CPP14Parser.PlusAssign, 0);
    };
    OperatorContext.prototype.MinusAssign = function () {
        return this.getToken(CPP14Parser.MinusAssign, 0);
    };
    OperatorContext.prototype.StarAssign = function () {
        return this.getToken(CPP14Parser.StarAssign, 0);
    };
    OperatorContext.prototype.DivAssign = function () {
        return this.getToken(CPP14Parser.DivAssign, 0);
    };
    OperatorContext.prototype.ModAssign = function () {
        return this.getToken(CPP14Parser.ModAssign, 0);
    };
    OperatorContext.prototype.XorAssign = function () {
        return this.getToken(CPP14Parser.XorAssign, 0);
    };
    OperatorContext.prototype.AndAssign = function () {
        return this.getToken(CPP14Parser.AndAssign, 0);
    };
    OperatorContext.prototype.OrAssign = function () {
        return this.getToken(CPP14Parser.OrAssign, 0);
    };
    OperatorContext.prototype.LeftShift = function () {
        return this.getToken(CPP14Parser.LeftShift, 0);
    };
    OperatorContext.prototype.rightShift = function () {
        return this.getTypedRuleContext(RightShiftContext, 0);
    };
    OperatorContext.prototype.rightShiftAssign = function () {
        return this.getTypedRuleContext(RightShiftAssignContext, 0);
    };
    OperatorContext.prototype.LeftShiftAssign = function () {
        return this.getToken(CPP14Parser.LeftShiftAssign, 0);
    };
    OperatorContext.prototype.Equal = function () {
        return this.getToken(CPP14Parser.Equal, 0);
    };
    OperatorContext.prototype.NotEqual = function () {
        return this.getToken(CPP14Parser.NotEqual, 0);
    };
    OperatorContext.prototype.LessEqual = function () {
        return this.getToken(CPP14Parser.LessEqual, 0);
    };
    OperatorContext.prototype.GreaterEqual = function () {
        return this.getToken(CPP14Parser.GreaterEqual, 0);
    };
    OperatorContext.prototype.AndAnd = function () {
        return this.getToken(CPP14Parser.AndAnd, 0);
    };
    OperatorContext.prototype.OrOr = function () {
        return this.getToken(CPP14Parser.OrOr, 0);
    };
    OperatorContext.prototype.PlusPlus = function () {
        return this.getToken(CPP14Parser.PlusPlus, 0);
    };
    OperatorContext.prototype.MinusMinus = function () {
        return this.getToken(CPP14Parser.MinusMinus, 0);
    };
    OperatorContext.prototype.Comma = function () {
        return this.getToken(CPP14Parser.Comma, 0);
    };
    OperatorContext.prototype.ArrowStar = function () {
        return this.getToken(CPP14Parser.ArrowStar, 0);
    };
    OperatorContext.prototype.Arrow = function () {
        return this.getToken(CPP14Parser.Arrow, 0);
    };
    OperatorContext.prototype.LeftParen = function () {
        return this.getToken(CPP14Parser.LeftParen, 0);
    };
    OperatorContext.prototype.RightParen = function () {
        return this.getToken(CPP14Parser.RightParen, 0);
    };
    Object.defineProperty(OperatorContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_operator;
        },
        enumerable: false,
        configurable: true
    });
    return OperatorContext;
}(antlr.ParserRuleContext));
exports.OperatorContext = OperatorContext;
var LiteralContext = /** @class */ (function (_super) {
    __extends(LiteralContext, _super);
    function LiteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    LiteralContext.prototype.Integerliteral = function () {
        return this.getToken(CPP14Parser.Integerliteral, 0);
    };
    LiteralContext.prototype.Characterliteral = function () {
        return this.getToken(CPP14Parser.Characterliteral, 0);
    };
    LiteralContext.prototype.Floatingliteral = function () {
        return this.getToken(CPP14Parser.Floatingliteral, 0);
    };
    LiteralContext.prototype.Stringliteral = function () {
        return this.getToken(CPP14Parser.Stringliteral, 0);
    };
    LiteralContext.prototype.booleanliteral = function () {
        return this.getTypedRuleContext(BooleanliteralContext, 0);
    };
    LiteralContext.prototype.pointerliteral = function () {
        return this.getTypedRuleContext(PointerliteralContext, 0);
    };
    LiteralContext.prototype.userdefinedliteral = function () {
        return this.getTypedRuleContext(UserdefinedliteralContext, 0);
    };
    Object.defineProperty(LiteralContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_literal;
        },
        enumerable: false,
        configurable: true
    });
    return LiteralContext;
}(antlr.ParserRuleContext));
exports.LiteralContext = LiteralContext;
var BooleanliteralContext = /** @class */ (function (_super) {
    __extends(BooleanliteralContext, _super);
    function BooleanliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    BooleanliteralContext.prototype.False = function () {
        return this.getToken(CPP14Parser.False, 0);
    };
    BooleanliteralContext.prototype.True = function () {
        return this.getToken(CPP14Parser.True, 0);
    };
    Object.defineProperty(BooleanliteralContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_booleanliteral;
        },
        enumerable: false,
        configurable: true
    });
    return BooleanliteralContext;
}(antlr.ParserRuleContext));
exports.BooleanliteralContext = BooleanliteralContext;
var PointerliteralContext = /** @class */ (function (_super) {
    __extends(PointerliteralContext, _super);
    function PointerliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    PointerliteralContext.prototype.Nullptr = function () {
        return this.getToken(CPP14Parser.Nullptr, 0);
    };
    Object.defineProperty(PointerliteralContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_pointerliteral;
        },
        enumerable: false,
        configurable: true
    });
    return PointerliteralContext;
}(antlr.ParserRuleContext));
exports.PointerliteralContext = PointerliteralContext;
var UserdefinedliteralContext = /** @class */ (function (_super) {
    __extends(UserdefinedliteralContext, _super);
    function UserdefinedliteralContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    UserdefinedliteralContext.prototype.Userdefinedintegerliteral = function () {
        return this.getToken(CPP14Parser.Userdefinedintegerliteral, 0);
    };
    UserdefinedliteralContext.prototype.Userdefinedfloatingliteral = function () {
        return this.getToken(CPP14Parser.Userdefinedfloatingliteral, 0);
    };
    UserdefinedliteralContext.prototype.Userdefinedstringliteral = function () {
        return this.getToken(CPP14Parser.Userdefinedstringliteral, 0);
    };
    UserdefinedliteralContext.prototype.Userdefinedcharacterliteral = function () {
        return this.getToken(CPP14Parser.Userdefinedcharacterliteral, 0);
    };
    Object.defineProperty(UserdefinedliteralContext.prototype, "ruleIndex", {
        get: function () {
            return CPP14Parser.RULE_userdefinedliteral;
        },
        enumerable: false,
        configurable: true
    });
    return UserdefinedliteralContext;
}(antlr.ParserRuleContext));
exports.UserdefinedliteralContext = UserdefinedliteralContext;
