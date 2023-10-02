"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4ng_1 = require("antlr4ng");
var WhiteboxParser_1 = require("./tests/generated/WhiteboxParser");
var WhiteboxLexer_1 = require("./tests/generated/WhiteboxLexer");
var CodeCompletionCore_1 = require("./src/CodeCompletionCore");
var inputStream = antlr4ng_1.CharStreams.fromString("LOREM ");
var lexer = new WhiteboxLexer_1.WhiteboxLexer(inputStream);
var tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
var parser = new WhiteboxParser_1.WhiteboxParser(tokenStream);
//const errorListener = new TestErrorListener();
//parser.removeErrorListeners();
//parser.addErrorListener(errorListener);
var ctx = parser.test1();
//expect(errorListener.errorCount).toEqual(1);
var core = new CodeCompletionCore_1.CodeCompletionCore(parser);
var candidates = core.collectCandidates(1, ctx); // caret on EOF
console.log(candidates);
