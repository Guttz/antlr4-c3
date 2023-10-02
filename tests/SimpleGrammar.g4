grammar SimpleGrammar;

// Parser rules
expr: useStatementS;
 
useStatementS: USE (CATALOG | DATABASE);

// Lexer tokens
SPACE:                               [ \t\r\n]+    -> channel(HIDDEN);
USE: 'USE';
DATABASE: 'DATABASE';
CATALOG: 'CATALOG';
