import * as fs from "fs";

import {
  BaseErrorListener,
  CharStreams,
  CommonTokenStream,
  ParserRuleContext,
  RecognitionException,
  Recognizer,
  Token,
  ATNSimulator,
} from "antlr4ng";

import { CPP14Parser } from "./tests/generated/CPP14Parser";
import { CPP14Lexer } from "./tests/generated/CPP14Lexer";
import { WhiteboxParser } from "./tests/generated/WhiteboxParser";
import { WhiteboxLexer } from "./tests/generated/WhiteboxLexer";

import { ExprLexer } from "./tests/generated/ExprLexer";
import { ExprParser } from "./tests/generated/ExprParser";
import { CodeCompletionCore } from "./src/CodeCompletionCore";

const inputStream = CharStreams.fromString("LOREM ");
const lexer = new WhiteboxLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);

const parser = new WhiteboxParser(tokenStream);
//const errorListener = new TestErrorListener();
//parser.removeErrorListeners();
//parser.addErrorListener(errorListener);
const ctx = parser.test1();
//expect(errorListener.errorCount).toEqual(1);

const core = new CodeCompletionCore(parser);
const candidates = core.collectCandidates(1, ctx); // caret on EOF

console.log(candidates);
