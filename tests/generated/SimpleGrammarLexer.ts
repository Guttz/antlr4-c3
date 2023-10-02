// Generated from tests/SimpleGrammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleGrammarLexer extends antlr.Lexer {
    public static readonly SPACE = 1;
    public static readonly USE = 2;
    public static readonly DATABASE = 3;
    public static readonly CATALOG = 4;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, "'USE'", "'DATABASE'", "'CATALOG'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "USE", "DATABASE", "CATALOG"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SPACE", "USE", "DATABASE", "CATALOG",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this._interp = new antlr.LexerATNSimulator(this, SimpleGrammarLexer._ATN, SimpleGrammarLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleGrammar.g4"; }

    public get literalNames(): (string | null)[] { return SimpleGrammarLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleGrammarLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleGrammarLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleGrammarLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleGrammarLexer.channelNames; }

    public get modeNames(): string[] { return SimpleGrammarLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,4,37,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,4,0,11,8,0,11,
        0,12,0,12,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
        2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,0,0,4,1,1,3,2,5,3,7,4,1,0,
        1,3,0,9,10,13,13,32,32,37,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,
        7,1,0,0,0,1,10,1,0,0,0,3,16,1,0,0,0,5,20,1,0,0,0,7,29,1,0,0,0,9,
        11,7,0,0,0,10,9,1,0,0,0,11,12,1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,
        0,13,14,1,0,0,0,14,15,6,0,0,0,15,2,1,0,0,0,16,17,5,85,0,0,17,18,
        5,83,0,0,18,19,5,69,0,0,19,4,1,0,0,0,20,21,5,68,0,0,21,22,5,65,0,
        0,22,23,5,84,0,0,23,24,5,65,0,0,24,25,5,66,0,0,25,26,5,65,0,0,26,
        27,5,83,0,0,27,28,5,69,0,0,28,6,1,0,0,0,29,30,5,67,0,0,30,31,5,65,
        0,0,31,32,5,84,0,0,32,33,5,65,0,0,33,34,5,76,0,0,34,35,5,79,0,0,
        35,36,5,71,0,0,36,8,1,0,0,0,2,0,12,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleGrammarLexer.__ATN) {
            SimpleGrammarLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleGrammarLexer._serializedATN);
        }

        return SimpleGrammarLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleGrammarLexer.literalNames, SimpleGrammarLexer.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return SimpleGrammarLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleGrammarLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}