// Generated from tests/SimpleGrammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleGrammarParser extends antlr.Parser {
    public static readonly SPACE = 1;
    public static readonly USE = 2;
    public static readonly DATABASE = 3;
    public static readonly CATALOG = 4;
    public static readonly RULE_expr = 0;
    public static readonly RULE_useStatementS = 1;

    public static readonly literalNames = [
        null, null, "'USE'", "'DATABASE'", "'CATALOG'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "USE", "DATABASE", "CATALOG"
    ];
    public static readonly ruleNames = [
        "expr", "useStatementS",
    ];

    public get grammarFileName(): string { return "SimpleGrammar.g4"; }
    public get literalNames(): (string | null)[] { return SimpleGrammarParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleGrammarParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleGrammarParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleGrammarParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this._interp = new antlr.ParserATNSimulator(this, SimpleGrammarParser._ATN, SimpleGrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public expr(): ExprContext {
        let localctx: ExprContext = new ExprContext(this._ctx, this.state);
        this.enterRule(localctx, 0, SimpleGrammarParser.RULE_expr);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 4;
            this.useStatementS();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public useStatementS(): UseStatementSContext {
        let localctx: UseStatementSContext = new UseStatementSContext(this._ctx, this.state);
        this.enterRule(localctx, 2, SimpleGrammarParser.RULE_useStatementS);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 6;
            this.match(SimpleGrammarParser.USE);
            this.state = 7;
            _la = this._input.LA(1);
            if(!(_la===3 || _la===4)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public static readonly _serializedATN: number[] = [
        4,1,4,10,2,0,7,0,2,1,7,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,2,0,2,0,1,1,
        0,3,4,7,0,4,1,0,0,0,2,6,1,0,0,0,4,5,3,2,1,0,5,1,1,0,0,0,6,7,5,2,
        0,0,7,8,7,0,0,0,8,3,1,0,0,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleGrammarParser.__ATN) {
            SimpleGrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleGrammarParser._serializedATN);
        }

        return SimpleGrammarParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleGrammarParser.literalNames, SimpleGrammarParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return SimpleGrammarParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleGrammarParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public useStatementS(): UseStatementSContext {
        return this.getTypedRuleContext(UseStatementSContext, 0);
    }
    public override get ruleIndex(): number {
        return SimpleGrammarParser.RULE_expr;
    }
}


export class UseStatementSContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public USE(): antlr.TerminalNode {
        return this.getToken(SimpleGrammarParser.USE, 0);
    }
    public CATALOG(): antlr.TerminalNode {
        return this.getToken(SimpleGrammarParser.CATALOG, 0);
    }
    public DATABASE(): antlr.TerminalNode {
        return this.getToken(SimpleGrammarParser.DATABASE, 0);
    }
    public override get ruleIndex(): number {
        return SimpleGrammarParser.RULE_useStatementS;
    }
}
