// Generated from tests/FlinkSqlLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class FlinkSqlLexer extends antlr.Lexer {
    public static readonly SPACE = 1;
    public static readonly COMMENT_INPUT = 2;
    public static readonly LINE_COMMENT = 3;
    public static readonly KW_ADD = 4;
    public static readonly KW_ADMIN = 5;
    public static readonly KW_AFTER = 6;
    public static readonly KW_ANALYZE = 7;
    public static readonly KW_ASC = 8;
    public static readonly KW_BEFORE = 9;
    public static readonly KW_BYTES = 10;
    public static readonly KW_CASCADE = 11;
    public static readonly KW_CATALOG = 12;
    public static readonly KW_CATALOGS = 13;
    public static readonly KW_CENTURY = 14;
    public static readonly KW_CHAIN = 15;
    public static readonly KW_CHANGELOG_MODE = 16;
    public static readonly KW_CHARACTERS = 17;
    public static readonly KW_COMMENT = 18;
    public static readonly KW_COMPACT = 19;
    public static readonly KW_COLUMNS = 20;
    public static readonly KW_CONSTRAINTS = 21;
    public static readonly KW_CONSTRUCTOR = 22;
    public static readonly KW_CUMULATE = 23;
    public static readonly KW_DATA = 24;
    public static readonly KW_DATABASE = 25;
    public static readonly KW_DATABASES = 26;
    public static readonly KW_DAYS = 27;
    public static readonly KW_DECADE = 28;
    public static readonly KW_DEFINED = 29;
    public static readonly KW_DESC = 30;
    public static readonly KW_DESCRIPTOR = 31;
    public static readonly KW_DIV = 32;
    public static readonly KW_ENCODING = 33;
    public static readonly KW_ENFORCED = 34;
    public static readonly KW_ENGINE = 35;
    public static readonly KW_EPOCH = 36;
    public static readonly KW_ERROR = 37;
    public static readonly KW_ESTIMATED_COST = 38;
    public static readonly KW_EXCEPTION = 39;
    public static readonly KW_EXCLUDE = 40;
    public static readonly KW_EXCLUDING = 41;
    public static readonly KW_EXTENDED = 42;
    public static readonly KW_FILE = 43;
    public static readonly KW_FINAL = 44;
    public static readonly KW_FIRST = 45;
    public static readonly KW_FOLLOWING = 46;
    public static readonly KW_FORMAT = 47;
    public static readonly KW_FORTRAN = 48;
    public static readonly KW_FOUND = 49;
    public static readonly KW_FRAC_SECOND = 50;
    public static readonly KW_FUNCTIONS = 51;
    public static readonly KW_GENERAL = 52;
    public static readonly KW_GENERATED = 53;
    public static readonly KW_GO = 54;
    public static readonly KW_GOTO = 55;
    public static readonly KW_GRANTED = 56;
    public static readonly KW_HOP = 57;
    public static readonly KW_HOURS = 58;
    public static readonly KW_IF = 59;
    public static readonly KW_IGNORE = 60;
    public static readonly KW_INCREMENT = 61;
    public static readonly KW_INPUT = 62;
    public static readonly KW_INVOKER = 63;
    public static readonly KW_JAR = 64;
    public static readonly KW_JARS = 65;
    public static readonly KW_JAVA = 66;
    public static readonly KW_JSON = 67;
    public static readonly KW_JSON_EXECUTION_PLAN = 68;
    public static readonly KW_KEY = 69;
    public static readonly KW_KEY_MEMBER = 70;
    public static readonly KW_KEY_TYPE = 71;
    public static readonly KW_LABEL = 72;
    public static readonly KW_LAST = 73;
    public static readonly KW_LENGTH = 74;
    public static readonly KW_LEVEL = 75;
    public static readonly KW_LOAD = 76;
    public static readonly KW_MAP = 77;
    public static readonly KW_MICROSECOND = 78;
    public static readonly KW_MILLENNIUM = 79;
    public static readonly KW_MILLISECOND = 80;
    public static readonly KW_MINUTES = 81;
    public static readonly KW_MINVALUE = 82;
    public static readonly KW_MODIFY = 83;
    public static readonly KW_MODULES = 84;
    public static readonly KW_MONTHS = 85;
    public static readonly KW_NANOSECOND = 86;
    public static readonly KW_NULLS = 87;
    public static readonly KW_NUMBER = 88;
    public static readonly KW_OPTION = 89;
    public static readonly KW_OPTIONS = 90;
    public static readonly KW_ORDERING = 91;
    public static readonly KW_OUTPUT = 92;
    public static readonly KW_OVERWRITE = 93;
    public static readonly KW_OVERWRITING = 94;
    public static readonly KW_PARTITIONED = 95;
    public static readonly KW_PARTITIONS = 96;
    public static readonly KW_PASSING = 97;
    public static readonly KW_PAST = 98;
    public static readonly KW_PATH = 99;
    public static readonly KW_PLACING = 100;
    public static readonly KW_PLAN = 101;
    public static readonly KW_PRECEDING = 102;
    public static readonly KW_PRESERVE = 103;
    public static readonly KW_PRIOR = 104;
    public static readonly KW_PRIVILEGES = 105;
    public static readonly KW_PUBLIC = 106;
    public static readonly KW_PYTHON = 107;
    public static readonly KW_PYTHON_FILES = 108;
    public static readonly KW_PYTHON_REQUIREMENTS = 109;
    public static readonly KW_PYTHON_DEPENDENCIES = 110;
    public static readonly KW_PYTHON_JAR = 111;
    public static readonly KW_PYTHON_ARCHIVES = 112;
    public static readonly KW_PYTHON_PARAMETER = 113;
    public static readonly KW_QUARTER = 114;
    public static readonly KW_RAW = 115;
    public static readonly KW_READ = 116;
    public static readonly KW_RELATIVE = 117;
    public static readonly KW_REMOVE = 118;
    public static readonly KW_RENAME = 119;
    public static readonly KW_REPLACE = 120;
    public static readonly KW_RESPECT = 121;
    public static readonly KW_RESTART = 122;
    public static readonly KW_RESTRICT = 123;
    public static readonly KW_ROLE = 124;
    public static readonly KW_ROW_COUNT = 125;
    public static readonly KW_SCALA = 126;
    public static readonly KW_SCALAR = 127;
    public static readonly KW_SCALE = 128;
    public static readonly KW_SCHEMA = 129;
    public static readonly KW_SECONDS = 130;
    public static readonly KW_SECTION = 131;
    public static readonly KW_SECURITY = 132;
    public static readonly KW_SELF = 133;
    public static readonly KW_SERVER = 134;
    public static readonly KW_SERVER_NAME = 135;
    public static readonly KW_SESSION = 136;
    public static readonly KW_SETS = 137;
    public static readonly KW_SIMPLE = 138;
    public static readonly KW_SIZE = 139;
    public static readonly KW_SLIDE = 140;
    public static readonly KW_SOURCE = 141;
    public static readonly KW_SPACE = 142;
    public static readonly KW_STATE = 143;
    public static readonly KW_STATEMENT = 144;
    public static readonly KW_STEP = 145;
    public static readonly KW_STRING = 146;
    public static readonly KW_STRUCTURE = 147;
    public static readonly KW_STYLE = 148;
    public static readonly KW_TABLES = 149;
    public static readonly KW_TEMPORARY = 150;
    public static readonly KW_TIMECOL = 151;
    public static readonly KW_TIMESTAMP_LTZ = 152;
    public static readonly KW_TIMESTAMPADD = 153;
    public static readonly KW_TIMESTAMPDIFF = 154;
    public static readonly KW_TRANSFORM = 155;
    public static readonly KW_TUMBLE = 156;
    public static readonly KW_TYPE = 157;
    public static readonly KW_UNDER = 158;
    public static readonly KW_UNLOAD = 159;
    public static readonly KW_USAGE = 160;
    public static readonly KW_USE = 161;
    public static readonly KW_UTF16 = 162;
    public static readonly KW_UTF32 = 163;
    public static readonly KW_UTF8 = 164;
    public static readonly KW_VERSION = 165;
    public static readonly KW_VIEW = 166;
    public static readonly KW_VIEWS = 167;
    public static readonly KW_VIRTUAL = 168;
    public static readonly KW_WATERMARK = 169;
    public static readonly KW_WATERMARKS = 170;
    public static readonly KW_WEEK = 171;
    public static readonly KW_WEEKS = 172;
    public static readonly KW_WORK = 173;
    public static readonly KW_WRAPPER = 174;
    public static readonly KW_YEARS = 175;
    public static readonly KW_ZONE = 176;
    public static readonly KW_ABS = 177;
    public static readonly KW_ALL = 178;
    public static readonly KW_ALLOW = 179;
    public static readonly KW_ALTER = 180;
    public static readonly KW_AND = 181;
    public static readonly KW_ANY = 182;
    public static readonly KW_ARE = 183;
    public static readonly KW_ARRAY = 184;
    public static readonly KW_AS = 185;
    public static readonly KW_ASYMMETRIC = 186;
    public static readonly KW_AT = 187;
    public static readonly KW_AVG = 188;
    public static readonly KW_BEGIN = 189;
    public static readonly KW_BETWEEN = 190;
    public static readonly KW_BIGINT = 191;
    public static readonly KW_BINARY = 192;
    public static readonly KW_BIT = 193;
    public static readonly KW_BLOB = 194;
    public static readonly KW_BOOLEAN = 195;
    public static readonly KW_BOTH = 196;
    public static readonly KW_BY = 197;
    public static readonly KW_CALL = 198;
    public static readonly KW_CALLED = 199;
    public static readonly KW_CASCADED = 200;
    public static readonly KW_CASE = 201;
    public static readonly KW_CAST = 202;
    public static readonly KW_CEIL = 203;
    public static readonly KW_CHAR = 204;
    public static readonly KW_CHARACTER = 205;
    public static readonly KW_CHECK = 206;
    public static readonly KW_CLOB = 207;
    public static readonly KW_CLOSE = 208;
    public static readonly KW_COALESCE = 209;
    public static readonly KW_COLLATE = 210;
    public static readonly KW_COLLECT = 211;
    public static readonly KW_COLUMN = 212;
    public static readonly KW_COMMIT = 213;
    public static readonly KW_CONNECT = 214;
    public static readonly KW_CONSTRAINT = 215;
    public static readonly KW_CONTAINS = 216;
    public static readonly KW_CONVERT = 217;
    public static readonly KW_COUNT = 218;
    public static readonly KW_CREATE = 219;
    public static readonly KW_CROSS = 220;
    public static readonly KW_CUBE = 221;
    public static readonly KW_CURRENT = 222;
    public static readonly KW_CURSOR = 223;
    public static readonly KW_CYCLE = 224;
    public static readonly KW_DATE = 225;
    public static readonly KW_DATETIME = 226;
    public static readonly KW_DAY = 227;
    public static readonly KW_DEC = 228;
    public static readonly KW_DECIMAL = 229;
    public static readonly KW_DECLARE = 230;
    public static readonly KW_DEFAULT = 231;
    public static readonly KW_DEFINE = 232;
    public static readonly KW_DELETE = 233;
    public static readonly KW_DESCRIBE = 234;
    public static readonly KW_DISTINCT = 235;
    public static readonly KW_DOUBLE = 236;
    public static readonly KW_DROP = 237;
    public static readonly KW_EACH = 238;
    public static readonly KW_ELSE = 239;
    public static readonly KW_END = 240;
    public static readonly KW_EQUALS = 241;
    public static readonly KW_ESCAPE = 242;
    public static readonly KW_EXCEPT = 243;
    public static readonly KW_EXECUTE = 244;
    public static readonly KW_EXISTS = 245;
    public static readonly KW_EXPLAIN = 246;
    public static readonly KW_EXTERNAL = 247;
    public static readonly KW_EXTRACT = 248;
    public static readonly KW_FALSE = 249;
    public static readonly KW_FLOAT = 250;
    public static readonly KW_FOR = 251;
    public static readonly KW_FROM = 252;
    public static readonly KW_FULL = 253;
    public static readonly KW_FUNCTION = 254;
    public static readonly KW_GLOBAL = 255;
    public static readonly KW_GRANT = 256;
    public static readonly KW_GROUP = 257;
    public static readonly KW_GROUPING = 258;
    public static readonly KW_GROUPS = 259;
    public static readonly KW_HAVING = 260;
    public static readonly KW_HOUR = 261;
    public static readonly KW_IMPORT = 262;
    public static readonly KW_IN = 263;
    public static readonly KW_INCLUDING = 264;
    public static readonly KW_INNER = 265;
    public static readonly KW_INOUT = 266;
    public static readonly KW_INSERT = 267;
    public static readonly KW_INT = 268;
    public static readonly KW_INTEGER = 269;
    public static readonly KW_INTERSECT = 270;
    public static readonly KW_INTERVAL = 271;
    public static readonly KW_INTO = 272;
    public static readonly KW_IS = 273;
    public static readonly KW_JOIN = 274;
    public static readonly KW_LAG = 275;
    public static readonly KW_LANGUAGE = 276;
    public static readonly KW_LATERAL = 277;
    public static readonly KW_LEADING = 278;
    public static readonly KW_LEFT = 279;
    public static readonly KW_LIKE = 280;
    public static readonly KW_LIMIT = 281;
    public static readonly KW_LOCAL = 282;
    public static readonly KW_MATCH = 283;
    public static readonly KW_MATCH_RECOGNIZE = 284;
    public static readonly KW_MEASURES = 285;
    public static readonly KW_MERGE = 286;
    public static readonly KW_METADATA = 287;
    public static readonly KW_MINUS = 288;
    public static readonly KW_MINUTE = 289;
    public static readonly KW_MODIFIES = 290;
    public static readonly KW_MODULE = 291;
    public static readonly KW_MONTH = 292;
    public static readonly KW_MULTISET = 293;
    public static readonly KW_NATURAL = 294;
    public static readonly KW_NEXT = 295;
    public static readonly KW_NO = 296;
    public static readonly KW_NONE = 297;
    public static readonly KW_NOT = 298;
    public static readonly KW_NULL = 299;
    public static readonly KW_NUMERIC = 300;
    public static readonly KW_OF = 301;
    public static readonly KW_OFFSET = 302;
    public static readonly KW_ON = 303;
    public static readonly KW_ONE = 304;
    public static readonly KW_OR = 305;
    public static readonly KW_ORDER = 306;
    public static readonly KW_OUT = 307;
    public static readonly KW_OUTER = 308;
    public static readonly KW_OVER = 309;
    public static readonly KW_OVERLAY = 310;
    public static readonly KW_PARTITION = 311;
    public static readonly KW_PATTERN = 312;
    public static readonly KW_PER = 313;
    public static readonly KW_PERCENT = 314;
    public static readonly KW_PERIOD = 315;
    public static readonly KW_POSITION = 316;
    public static readonly KW_POWER = 317;
    public static readonly KW_PRIMARY = 318;
    public static readonly KW_RANGE = 319;
    public static readonly KW_RANK = 320;
    public static readonly KW_RESET = 321;
    public static readonly KW_REVOKE = 322;
    public static readonly KW_RIGHT = 323;
    public static readonly KW_RLIKE = 324;
    public static readonly KW_ROLLBACK = 325;
    public static readonly KW_ROLLUP = 326;
    public static readonly KW_ROW = 327;
    public static readonly KW_ROWS = 328;
    public static readonly KW_SECOND = 329;
    public static readonly KW_SELECT = 330;
    public static readonly KW_SET = 331;
    public static readonly KW_SHOW = 332;
    public static readonly KW_SIMILAR = 333;
    public static readonly KW_SKIP = 334;
    public static readonly KW_SMALLINT = 335;
    public static readonly KW_START = 336;
    public static readonly KW_STATIC = 337;
    public static readonly KW_SUBSTRING = 338;
    public static readonly KW_SUM = 339;
    public static readonly KW_SYMMETRIC = 340;
    public static readonly KW_SYSTEM = 341;
    public static readonly KW_SYSTEM_TIME = 342;
    public static readonly KW_SYSTEM_USER = 343;
    public static readonly KW_TABLE = 344;
    public static readonly KW_TABLESAMPLE = 345;
    public static readonly KW_THEN = 346;
    public static readonly KW_TIME = 347;
    public static readonly KW_TIMESTAMP = 348;
    public static readonly KW_TINYINT = 349;
    public static readonly KW_TO = 350;
    public static readonly KW_TRAILING = 351;
    public static readonly KW_TRUE = 352;
    public static readonly KW_TRUNCATE = 353;
    public static readonly KW_UNION = 354;
    public static readonly KW_UNIQUE = 355;
    public static readonly KW_UNKNOWN = 356;
    public static readonly KW_UNNEST = 357;
    public static readonly KW_UPPER = 358;
    public static readonly KW_UPSERT = 359;
    public static readonly KW_USER = 360;
    public static readonly KW_USING = 361;
    public static readonly KW_VALUE = 362;
    public static readonly KW_VALUES = 363;
    public static readonly KW_VARBINARY = 364;
    public static readonly KW_VARCHAR = 365;
    public static readonly KW_WHEN = 366;
    public static readonly KW_WHERE = 367;
    public static readonly KW_WINDOW = 368;
    public static readonly KW_WITH = 369;
    public static readonly KW_WITHIN = 370;
    public static readonly KW_WITHOUT = 371;
    public static readonly KW_YEAR = 372;
    public static readonly EQUAL_SYMBOL = 373;
    public static readonly GREATER_SYMBOL = 374;
    public static readonly LESS_SYMBOL = 375;
    public static readonly EXCLAMATION_SYMBOL = 376;
    public static readonly BIT_NOT_OP = 377;
    public static readonly BIT_OR_OP = 378;
    public static readonly BIT_AND_OP = 379;
    public static readonly BIT_XOR_OP = 380;
    public static readonly DOT = 381;
    public static readonly LS_BRACKET = 382;
    public static readonly RS_BRACKET = 383;
    public static readonly LR_BRACKET = 384;
    public static readonly RR_BRACKET = 385;
    public static readonly LB_BRACKET = 386;
    public static readonly RB_BRACKET = 387;
    public static readonly COMMA = 388;
    public static readonly SEMICOLON = 389;
    public static readonly AT_SIGN = 390;
    public static readonly SINGLE_QUOTE_SYMB = 391;
    public static readonly DOUBLE_QUOTE_SYMB = 392;
    public static readonly REVERSE_QUOTE_SYMB = 393;
    public static readonly COLON_SYMB = 394;
    public static readonly ASTERISK_SIGN = 395;
    public static readonly UNDERLINE_SIGN = 396;
    public static readonly HYPNEN_SIGN = 397;
    public static readonly ADD_SIGN = 398;
    public static readonly PENCENT_SIGN = 399;
    public static readonly DOUBLE_VERTICAL_SIGN = 400;
    public static readonly DOUBLE_HYPNEN_SIGN = 401;
    public static readonly SLASH_SIGN = 402;
    public static readonly QUESTION_MARK_SIGN = 403;
    public static readonly DOUBLE_RIGHT_ARROW = 404;
    public static readonly STRING_LITERAL = 405;
    public static readonly DIG_LITERAL = 406;
    public static readonly REAL_LITERAL = 407;
    public static readonly BIT_STRING = 408;
    public static readonly ID_LITERAL = 409;
    public static readonly SLASH_TEXT = 410;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, null, null, null, "'ADD'", "'ADMIN'", "'AFTER'", "'ANALYZE'", 
        "'ASC'", "'BEFORE'", "'BYTES'", "'CASCADE'", "'CATALOG'", "'CATALOGS'", 
        "'CENTURY'", "'CHAIN'", "'CHANGELOG_MODE'", "'CHARACTERS'", "'COMMENT'", 
        "'COMPACT'", "'COLUMNS'", "'CONSTRAINTS'", "'CONSTRUCTOR'", "'CUMULATE'", 
        "'DATA'", "'DATABASE'", "'DATABASES'", "'DAYS'", "'DECADE'", "'DEFINED'", 
        "'DESC'", "'DESCRIPTOR'", "'DIV'", "'ENCODING'", "'ENFORCED'", "'ENGINE'", 
        "'EPOCH'", "'ERROR'", "'ESTIMATED_COST'", "'EXCEPTION'", "'EXCLUDE'", 
        "'EXCLUDING'", "'EXTENDED'", "'FILE'", "'FINAL'", "'FIRST'", "'FOLLOWING'", 
        "'FORMAT'", "'FORTRAN'", "'FOUND'", "'FRAC_SECOND'", "'FUNCTIONS'", 
        "'GENERAL'", "'GENERATED'", "'GO'", "'GOTO'", "'GRANTED'", "'HOP'", 
        "'HOURS'", "'IF'", "'IGNORE'", "'INCREMENT'", "'INPUT'", "'INVOKER'", 
        "'JAR'", "'JARS'", "'JAVA'", "'JSON'", "'JSON_EXECUTION_PLAN'", 
        "'KEY'", "'KEY_MEMBER'", "'KEY_TYPE'", "'LABEL'", "'LAST'", "'LENGTH'", 
        "'LEVEL'", "'LOAD'", "'MAP'", "'MICROSECOND'", "'MILLENNIUM'", "'MILLISECOND'", 
        "'MINUTES'", "'MINVALUE'", "'MODIFY'", "'MODULES'", "'MONTHS'", 
        "'NANOSECOND'", "'NULLS'", "'NUMBER'", "'OPTION'", "'OPTIONS'", 
        "'ORDERING'", "'OUTPUT'", "'OVERWRITE'", "'OVERWRITING'", "'PARTITIONED'", 
        "'PARTITIONS'", "'PASSING'", "'PAST'", "'PATH'", "'PLACING'", "'PLAN'", 
        "'PRECEDING'", "'PRESERVE'", "'PRIOR'", "'PRIVILEGES'", "'PUBLIC'", 
        "'PYTHON'", "'PYTHON_FILES'", "'PYTHON_REQUIREMENTS'", "'PYTHON_DEPENDENCIES'", 
        "'PYTHON_JAR'", "'PYTHON_ARCHIVES'", "'PYTHON_PARAMETER'", "'QUARTER'", 
        "'RAW'", "'READ'", "'RELATIVE'", "'REMOVE'", "'RENAME'", "'REPLACE'", 
        "'RESPECT'", "'RESTART'", "'RESTRICT'", "'ROLE'", "'ROW_COUNT'", 
        "'SCALA'", "'SCALAR'", "'SCALE'", "'SCHEMA'", "'SECONDS'", "'SECTION'", 
        "'SECURITY'", "'SELF'", "'SERVER'", "'SERVER_NAME'", "'SESSION'", 
        "'SETS'", "'SIMPLE'", "'SIZE'", "'SLIDE'", "'SOURCE'", "'SPACE'", 
        "'STATE'", "'STATEMENT'", "'STEP'", "'STRING'", "'STRUCTURE'", "'STYLE'", 
        "'TABLES'", "'TEMPORARY'", "'TIMECOL'", "'TIMESTAMP_LTZ'", "'TIMESTAMPADD'", 
        "'TIMESTAMPDIFF'", "'TRANSFORM'", "'TUMBLE'", "'TYPE'", "'UNDER'", 
        "'UNLOAD'", "'USAGE'", "'USE'", "'UTF16'", "'UTF32'", "'UTF8'", 
        "'VERSION'", "'VIEW'", "'VIEWS'", "'VIRTUAL'", "'WATERMARK'", "'WATERMARKS'", 
        "'WEEK'", "'WEEKS'", "'WORK'", "'WRAPPER'", "'YEARS'", "'ZONE'", 
        "'ABS'", "'ALL'", "'ALLOW'", "'ALTER'", "'AND'", "'ANY'", "'ARE'", 
        "'ARRAY'", "'AS'", "'ASYMMETRIC'", "'AT'", "'AVG'", "'BEGIN'", "'BETWEEN'", 
        "'BIGINT'", "'BINARY'", "'BIT'", "'BLOB'", "'BOOLEAN'", "'BOTH'", 
        "'BY'", "'CALL'", "'CALLED'", "'CASCADED'", "'CASE'", "'CAST'", 
        "'CEIL'", "'CHAR'", "'CHARACTER'", "'CHECK'", "'CLOB'", "'CLOSE'", 
        "'COALESCE'", "'COLLATE'", "'COLLECT'", "'COLUMN'", "'COMMIT'", 
        "'CONNECT'", "'CONSTRAINT'", "'CONTAINS'", "'CONVERT'", "'COUNT'", 
        "'CREATE'", "'CROSS'", "'CUBE'", "'CURRENT'", "'CURSOR'", "'CYCLE'", 
        "'DATE'", "'DATETIME'", "'DAY'", "'DEC'", "'DECIMAL'", "'DECLARE'", 
        "'DEFAULT'", "'DEFINE'", "'DELETE'", "'DESCRIBE'", "'DISTINCT'", 
        "'DOUBLE'", "'DROP'", "'EACH'", "'ELSE'", "'END'", "'EQUALS'", "'ESCAPE'", 
        "'EXCEPT'", "'EXECUTE'", "'EXISTS'", "'EXPLAIN'", "'EXTERNAL'", 
        "'EXTRACT'", "'FALSE'", "'FLOAT'", "'FOR'", "'FROM'", "'FULL'", 
        "'FUNCTION'", "'GLOBAL'", "'GRANT'", "'GROUP'", "'GROUPING'", "'GROUPS'", 
        "'HAVING'", "'HOUR'", "'IMPORT'", "'IN'", "'INCLUDING'", "'INNER'", 
        "'INOUT'", "'INSERT'", "'INT'", "'INTEGER'", "'INTERSECT'", "'INTERVAL'", 
        "'INTO'", "'IS'", "'JOIN'", "'LAG'", "'LANGUAGE'", "'LATERAL'", 
        "'LEADING'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LOCAL'", "'MATCH'", 
        "'MATCH_RECOGNIZE'", "'MEASURES'", "'MERGE'", "'METADATA'", "'MINUS'", 
        "'MINUTE'", "'MODIFIES'", "'MODULE'", "'MONTH'", "'MULTISET'", "'NATURAL'", 
        "'NEXT'", "'NO'", "'NONE'", "'NOT'", "'NULL'", "'NUMERIC'", "'OF'", 
        "'OFFSET'", "'ON'", "'ONE'", "'OR'", "'ORDER'", "'OUT'", "'OUTER'", 
        "'OVER'", "'OVERLAY'", "'PARTITION'", "'PATTERN'", "'PER'", "'PERCENT'", 
        "'PERIOD'", "'POSITION'", "'POWER'", "'PRIMARY'", "'RANGE'", "'RANK'", 
        "'RESET'", "'REVOKE'", "'RIGHT'", "'RLIKE'", "'ROLLBACK'", "'ROLLUP'", 
        "'ROW'", "'ROWS'", "'SECOND'", "'SELECT'", "'SET'", "'SHOW'", "'SIMILAR'", 
        "'SKIP'", "'SMALLINT'", "'START'", "'STATIC'", "'SUBSTRING'", "'SUM'", 
        "'SYMMETRIC'", "'SYSTEM'", "'SYSTEM_TIME'", "'SYSTEM_USER'", "'TABLE'", 
        "'TABLESAMPLE'", "'THEN'", "'TIME'", "'TIMESTAMP'", "'TINYINT'", 
        "'TO'", "'TRAILING'", "'TRUE'", "'TRUNCATE'", "'UNION'", "'UNIQUE'", 
        "'UNKNOWN'", "'UNNEST'", "'UPPER'", "'UPSERT'", "'USER'", "'USING'", 
        "'VALUE'", "'VALUES'", "'VARBINARY'", "'VARCHAR'", "'WHEN'", "'WHERE'", 
        "'WINDOW'", "'WITH'", "'WITHIN'", "'WITHOUT'", "'YEAR'", "'='", 
        "'>'", "'<'", "'!'", "'~'", "'|'", "'&'", "'^'", "'.'", "'['", "']'", 
        "'('", "')'", "'{'", "'}'", "','", "';'", "'@'", "'''", "'\"'", 
        "'`'", "':'", "'*'", "'_'", "'-'", "'+'", "'%'", "'||'", "'--'", 
        "'/'", "'?'", "'=>'"
    ];

    public static readonly symbolicNames = [
        null, "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
        "KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
        "KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
        "KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", 
        "KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", 
        "KW_ERROR", "KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", 
        "KW_EXTENDED", "KW_FILE", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", 
        "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", 
        "KW_GENERAL", "KW_GENERATED", "KW_GO", "KW_GOTO", "KW_GRANTED", 
        "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", "KW_INPUT", 
        "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
        "KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", 
        "KW_LENGTH", "KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", 
        "KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MINVALUE", 
        "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", 
        "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
        "KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", 
        "KW_PASSING", "KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", 
        "KW_PRESERVE", "KW_PRIOR", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", 
        "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", 
        "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", "KW_PYTHON_PARAMETER", "KW_QUARTER", 
        "KW_RAW", "KW_READ", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", "KW_REPLACE", 
        "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
        "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SECONDS", 
        "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", 
        "KW_SESSION", "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", 
        "KW_SPACE", "KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", 
        "KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", 
        "KW_TIMESTAMP_LTZ", "KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", "KW_TRANSFORM", 
        "KW_TUMBLE", "KW_TYPE", "KW_UNDER", "KW_UNLOAD", "KW_USAGE", "KW_USE", 
        "KW_UTF16", "KW_UTF32", "KW_UTF8", "KW_VERSION", "KW_VIEW", "KW_VIEWS", 
        "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", "KW_WEEK", "KW_WEEKS", 
        "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", "KW_ABS", "KW_ALL", 
        "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", "KW_ARRAY", 
        "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", "KW_BETWEEN", 
        "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", 
        "KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", 
        "KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", 
        "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COMMIT", 
        "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_COUNT", 
        "KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", 
        "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
        "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DESCRIBE", "KW_DISTINCT", 
        "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", 
        "KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", 
        "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", 
        "KW_FULL", "KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
        "KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
        "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", 
        "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", 
        "KW_LATERAL", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", 
        "KW_MATCH", "KW_MATCH_RECOGNIZE", "KW_MEASURES", "KW_MERGE", "KW_METADATA", 
        "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", "KW_MODULE", "KW_MONTH", 
        "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", 
        "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", "KW_ONE", 
        "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAY", 
        "KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERIOD", 
        "KW_POSITION", "KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_RANK", 
        "KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", 
        "KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", 
        "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_SMALLINT", "KW_START", "KW_STATIC", 
        "KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", 
        "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", "KW_THEN", "KW_TIME", 
        "KW_TIMESTAMP", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", 
        "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", 
        "KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
        "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "EQUAL_SYMBOL", 
        "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", 
        "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", 
        "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", 
        "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
        "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
        "HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
        "DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
        "STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", 
        "SLASH_TEXT"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "SPACE", "COMMENT_INPUT", "LINE_COMMENT", "KW_ADD", "KW_ADMIN", 
        "KW_AFTER", "KW_ANALYZE", "KW_ASC", "KW_BEFORE", "KW_BYTES", "KW_CASCADE", 
        "KW_CATALOG", "KW_CATALOGS", "KW_CENTURY", "KW_CHAIN", "KW_CHANGELOG_MODE", 
        "KW_CHARACTERS", "KW_COMMENT", "KW_COMPACT", "KW_COLUMNS", "KW_CONSTRAINTS", 
        "KW_CONSTRUCTOR", "KW_CUMULATE", "KW_DATA", "KW_DATABASE", "KW_DATABASES", 
        "KW_DAYS", "KW_DECADE", "KW_DEFINED", "KW_DESC", "KW_DESCRIPTOR", 
        "KW_DIV", "KW_ENCODING", "KW_ENFORCED", "KW_ENGINE", "KW_EPOCH", 
        "KW_ERROR", "KW_ESTIMATED_COST", "KW_EXCEPTION", "KW_EXCLUDE", "KW_EXCLUDING", 
        "KW_EXTENDED", "KW_FILE", "KW_FINAL", "KW_FIRST", "KW_FOLLOWING", 
        "KW_FORMAT", "KW_FORTRAN", "KW_FOUND", "KW_FRAC_SECOND", "KW_FUNCTIONS", 
        "KW_GENERAL", "KW_GENERATED", "KW_GO", "KW_GOTO", "KW_GRANTED", 
        "KW_HOP", "KW_HOURS", "KW_IF", "KW_IGNORE", "KW_INCREMENT", "KW_INPUT", 
        "KW_INVOKER", "KW_JAR", "KW_JARS", "KW_JAVA", "KW_JSON", "KW_JSON_EXECUTION_PLAN", 
        "KW_KEY", "KW_KEY_MEMBER", "KW_KEY_TYPE", "KW_LABEL", "KW_LAST", 
        "KW_LENGTH", "KW_LEVEL", "KW_LOAD", "KW_MAP", "KW_MICROSECOND", 
        "KW_MILLENNIUM", "KW_MILLISECOND", "KW_MINUTES", "KW_MINVALUE", 
        "KW_MODIFY", "KW_MODULES", "KW_MONTHS", "KW_NANOSECOND", "KW_NULLS", 
        "KW_NUMBER", "KW_OPTION", "KW_OPTIONS", "KW_ORDERING", "KW_OUTPUT", 
        "KW_OVERWRITE", "KW_OVERWRITING", "KW_PARTITIONED", "KW_PARTITIONS", 
        "KW_PASSING", "KW_PAST", "KW_PATH", "KW_PLACING", "KW_PLAN", "KW_PRECEDING", 
        "KW_PRESERVE", "KW_PRIOR", "KW_PRIVILEGES", "KW_PUBLIC", "KW_PYTHON", 
        "KW_PYTHON_FILES", "KW_PYTHON_REQUIREMENTS", "KW_PYTHON_DEPENDENCIES", 
        "KW_PYTHON_JAR", "KW_PYTHON_ARCHIVES", "KW_PYTHON_PARAMETER", "KW_QUARTER", 
        "KW_RAW", "KW_READ", "KW_RELATIVE", "KW_REMOVE", "KW_RENAME", "KW_REPLACE", 
        "KW_RESPECT", "KW_RESTART", "KW_RESTRICT", "KW_ROLE", "KW_ROW_COUNT", 
        "KW_SCALA", "KW_SCALAR", "KW_SCALE", "KW_SCHEMA", "KW_SECONDS", 
        "KW_SECTION", "KW_SECURITY", "KW_SELF", "KW_SERVER", "KW_SERVER_NAME", 
        "KW_SESSION", "KW_SETS", "KW_SIMPLE", "KW_SIZE", "KW_SLIDE", "KW_SOURCE", 
        "KW_SPACE", "KW_STATE", "KW_STATEMENT", "KW_STEP", "KW_STRING", 
        "KW_STRUCTURE", "KW_STYLE", "KW_TABLES", "KW_TEMPORARY", "KW_TIMECOL", 
        "KW_TIMESTAMP_LTZ", "KW_TIMESTAMPADD", "KW_TIMESTAMPDIFF", "KW_TRANSFORM", 
        "KW_TUMBLE", "KW_TYPE", "KW_UNDER", "KW_UNLOAD", "KW_USAGE", "KW_USE", 
        "KW_UTF16", "KW_UTF32", "KW_UTF8", "KW_VERSION", "KW_VIEW", "KW_VIEWS", 
        "KW_VIRTUAL", "KW_WATERMARK", "KW_WATERMARKS", "KW_WEEK", "KW_WEEKS", 
        "KW_WORK", "KW_WRAPPER", "KW_YEARS", "KW_ZONE", "KW_ABS", "KW_ALL", 
        "KW_ALLOW", "KW_ALTER", "KW_AND", "KW_ANY", "KW_ARE", "KW_ARRAY", 
        "KW_AS", "KW_ASYMMETRIC", "KW_AT", "KW_AVG", "KW_BEGIN", "KW_BETWEEN", 
        "KW_BIGINT", "KW_BINARY", "KW_BIT", "KW_BLOB", "KW_BOOLEAN", "KW_BOTH", 
        "KW_BY", "KW_CALL", "KW_CALLED", "KW_CASCADED", "KW_CASE", "KW_CAST", 
        "KW_CEIL", "KW_CHAR", "KW_CHARACTER", "KW_CHECK", "KW_CLOB", "KW_CLOSE", 
        "KW_COALESCE", "KW_COLLATE", "KW_COLLECT", "KW_COLUMN", "KW_COMMIT", 
        "KW_CONNECT", "KW_CONSTRAINT", "KW_CONTAINS", "KW_CONVERT", "KW_COUNT", 
        "KW_CREATE", "KW_CROSS", "KW_CUBE", "KW_CURRENT", "KW_CURSOR", "KW_CYCLE", 
        "KW_DATE", "KW_DATETIME", "KW_DAY", "KW_DEC", "KW_DECIMAL", "KW_DECLARE", 
        "KW_DEFAULT", "KW_DEFINE", "KW_DELETE", "KW_DESCRIBE", "KW_DISTINCT", 
        "KW_DOUBLE", "KW_DROP", "KW_EACH", "KW_ELSE", "KW_END", "KW_EQUALS", 
        "KW_ESCAPE", "KW_EXCEPT", "KW_EXECUTE", "KW_EXISTS", "KW_EXPLAIN", 
        "KW_EXTERNAL", "KW_EXTRACT", "KW_FALSE", "KW_FLOAT", "KW_FOR", "KW_FROM", 
        "KW_FULL", "KW_FUNCTION", "KW_GLOBAL", "KW_GRANT", "KW_GROUP", "KW_GROUPING", 
        "KW_GROUPS", "KW_HAVING", "KW_HOUR", "KW_IMPORT", "KW_IN", "KW_INCLUDING", 
        "KW_INNER", "KW_INOUT", "KW_INSERT", "KW_INT", "KW_INTEGER", "KW_INTERSECT", 
        "KW_INTERVAL", "KW_INTO", "KW_IS", "KW_JOIN", "KW_LAG", "KW_LANGUAGE", 
        "KW_LATERAL", "KW_LEADING", "KW_LEFT", "KW_LIKE", "KW_LIMIT", "KW_LOCAL", 
        "KW_MATCH", "KW_MATCH_RECOGNIZE", "KW_MEASURES", "KW_MERGE", "KW_METADATA", 
        "KW_MINUS", "KW_MINUTE", "KW_MODIFIES", "KW_MODULE", "KW_MONTH", 
        "KW_MULTISET", "KW_NATURAL", "KW_NEXT", "KW_NO", "KW_NONE", "KW_NOT", 
        "KW_NULL", "KW_NUMERIC", "KW_OF", "KW_OFFSET", "KW_ON", "KW_ONE", 
        "KW_OR", "KW_ORDER", "KW_OUT", "KW_OUTER", "KW_OVER", "KW_OVERLAY", 
        "KW_PARTITION", "KW_PATTERN", "KW_PER", "KW_PERCENT", "KW_PERIOD", 
        "KW_POSITION", "KW_POWER", "KW_PRIMARY", "KW_RANGE", "KW_RANK", 
        "KW_RESET", "KW_REVOKE", "KW_RIGHT", "KW_RLIKE", "KW_ROLLBACK", 
        "KW_ROLLUP", "KW_ROW", "KW_ROWS", "KW_SECOND", "KW_SELECT", "KW_SET", 
        "KW_SHOW", "KW_SIMILAR", "KW_SKIP", "KW_SMALLINT", "KW_START", "KW_STATIC", 
        "KW_SUBSTRING", "KW_SUM", "KW_SYMMETRIC", "KW_SYSTEM", "KW_SYSTEM_TIME", 
        "KW_SYSTEM_USER", "KW_TABLE", "KW_TABLESAMPLE", "KW_THEN", "KW_TIME", 
        "KW_TIMESTAMP", "KW_TINYINT", "KW_TO", "KW_TRAILING", "KW_TRUE", 
        "KW_TRUNCATE", "KW_UNION", "KW_UNIQUE", "KW_UNKNOWN", "KW_UNNEST", 
        "KW_UPPER", "KW_UPSERT", "KW_USER", "KW_USING", "KW_VALUE", "KW_VALUES", 
        "KW_VARBINARY", "KW_VARCHAR", "KW_WHEN", "KW_WHERE", "KW_WINDOW", 
        "KW_WITH", "KW_WITHIN", "KW_WITHOUT", "KW_YEAR", "EQUAL_SYMBOL", 
        "GREATER_SYMBOL", "LESS_SYMBOL", "EXCLAMATION_SYMBOL", "BIT_NOT_OP", 
        "BIT_OR_OP", "BIT_AND_OP", "BIT_XOR_OP", "DOT", "LS_BRACKET", "RS_BRACKET", 
        "LR_BRACKET", "RR_BRACKET", "LB_BRACKET", "RB_BRACKET", "COMMA", 
        "SEMICOLON", "AT_SIGN", "SINGLE_QUOTE_SYMB", "DOUBLE_QUOTE_SYMB", 
        "REVERSE_QUOTE_SYMB", "COLON_SYMB", "ASTERISK_SIGN", "UNDERLINE_SIGN", 
        "HYPNEN_SIGN", "ADD_SIGN", "PENCENT_SIGN", "DOUBLE_VERTICAL_SIGN", 
        "DOUBLE_HYPNEN_SIGN", "SLASH_SIGN", "QUESTION_MARK_SIGN", "DOUBLE_RIGHT_ARROW", 
        "STRING_LITERAL", "DIG_LITERAL", "REAL_LITERAL", "BIT_STRING", "ID_LITERAL", 
        "SLASH_TEXT", "SLASH_TEXT_FRAG", "JAR_FILE_PARTTARN", "EXPONENT_NUM_PART", 
        "ID_LITERAL_FRAG", "DEC_DIGIT", "DEC_LETTER", "DQUOTA_STRING", "SQUOTA_STRING", 
        "BIT_STRING_L", "BQUOTA_STRING",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this._interp = new antlr.LexerATNSimulator(this, FlinkSqlLexer._ATN, FlinkSqlLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "FlinkSqlLexer.g4"; }

    public get literalNames(): (string | null)[] { return FlinkSqlLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return FlinkSqlLexer.symbolicNames; }
    public get ruleNames(): string[] { return FlinkSqlLexer.ruleNames; }

    public get serializedATN(): number[] { return FlinkSqlLexer._serializedATN; }

    public get channelNames(): string[] { return FlinkSqlLexer.channelNames; }

    public get modeNames(): string[] { return FlinkSqlLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,410,3784,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,
        5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
        2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,
        7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,
        2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,
        7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
        2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
        7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,
        2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,
        7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,
        2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,
        7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,
        2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,
        7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,
        2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,
        7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
        7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,
        2,109,7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,
        7,114,2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,
        2,120,7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,
        7,125,2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,
        2,131,7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,
        7,136,2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,
        2,142,7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,
        7,147,2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,
        2,153,7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,
        7,158,2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,
        2,164,7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,
        7,169,2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,
        2,175,7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,
        7,180,2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,
        2,186,7,186,2,187,7,187,2,188,7,188,2,189,7,189,2,190,7,190,2,191,
        7,191,2,192,7,192,2,193,7,193,2,194,7,194,2,195,7,195,2,196,7,196,
        2,197,7,197,2,198,7,198,2,199,7,199,2,200,7,200,2,201,7,201,2,202,
        7,202,2,203,7,203,2,204,7,204,2,205,7,205,2,206,7,206,2,207,7,207,
        2,208,7,208,2,209,7,209,2,210,7,210,2,211,7,211,2,212,7,212,2,213,
        7,213,2,214,7,214,2,215,7,215,2,216,7,216,2,217,7,217,2,218,7,218,
        2,219,7,219,2,220,7,220,2,221,7,221,2,222,7,222,2,223,7,223,2,224,
        7,224,2,225,7,225,2,226,7,226,2,227,7,227,2,228,7,228,2,229,7,229,
        2,230,7,230,2,231,7,231,2,232,7,232,2,233,7,233,2,234,7,234,2,235,
        7,235,2,236,7,236,2,237,7,237,2,238,7,238,2,239,7,239,2,240,7,240,
        2,241,7,241,2,242,7,242,2,243,7,243,2,244,7,244,2,245,7,245,2,246,
        7,246,2,247,7,247,2,248,7,248,2,249,7,249,2,250,7,250,2,251,7,251,
        2,252,7,252,2,253,7,253,2,254,7,254,2,255,7,255,2,256,7,256,2,257,
        7,257,2,258,7,258,2,259,7,259,2,260,7,260,2,261,7,261,2,262,7,262,
        2,263,7,263,2,264,7,264,2,265,7,265,2,266,7,266,2,267,7,267,2,268,
        7,268,2,269,7,269,2,270,7,270,2,271,7,271,2,272,7,272,2,273,7,273,
        2,274,7,274,2,275,7,275,2,276,7,276,2,277,7,277,2,278,7,278,2,279,
        7,279,2,280,7,280,2,281,7,281,2,282,7,282,2,283,7,283,2,284,7,284,
        2,285,7,285,2,286,7,286,2,287,7,287,2,288,7,288,2,289,7,289,2,290,
        7,290,2,291,7,291,2,292,7,292,2,293,7,293,2,294,7,294,2,295,7,295,
        2,296,7,296,2,297,7,297,2,298,7,298,2,299,7,299,2,300,7,300,2,301,
        7,301,2,302,7,302,2,303,7,303,2,304,7,304,2,305,7,305,2,306,7,306,
        2,307,7,307,2,308,7,308,2,309,7,309,2,310,7,310,2,311,7,311,2,312,
        7,312,2,313,7,313,2,314,7,314,2,315,7,315,2,316,7,316,2,317,7,317,
        2,318,7,318,2,319,7,319,2,320,7,320,2,321,7,321,2,322,7,322,2,323,
        7,323,2,324,7,324,2,325,7,325,2,326,7,326,2,327,7,327,2,328,7,328,
        2,329,7,329,2,330,7,330,2,331,7,331,2,332,7,332,2,333,7,333,2,334,
        7,334,2,335,7,335,2,336,7,336,2,337,7,337,2,338,7,338,2,339,7,339,
        2,340,7,340,2,341,7,341,2,342,7,342,2,343,7,343,2,344,7,344,2,345,
        7,345,2,346,7,346,2,347,7,347,2,348,7,348,2,349,7,349,2,350,7,350,
        2,351,7,351,2,352,7,352,2,353,7,353,2,354,7,354,2,355,7,355,2,356,
        7,356,2,357,7,357,2,358,7,358,2,359,7,359,2,360,7,360,2,361,7,361,
        2,362,7,362,2,363,7,363,2,364,7,364,2,365,7,365,2,366,7,366,2,367,
        7,367,2,368,7,368,2,369,7,369,2,370,7,370,2,371,7,371,2,372,7,372,
        2,373,7,373,2,374,7,374,2,375,7,375,2,376,7,376,2,377,7,377,2,378,
        7,378,2,379,7,379,2,380,7,380,2,381,7,381,2,382,7,382,2,383,7,383,
        2,384,7,384,2,385,7,385,2,386,7,386,2,387,7,387,2,388,7,388,2,389,
        7,389,2,390,7,390,2,391,7,391,2,392,7,392,2,393,7,393,2,394,7,394,
        2,395,7,395,2,396,7,396,2,397,7,397,2,398,7,398,2,399,7,399,2,400,
        7,400,2,401,7,401,2,402,7,402,2,403,7,403,2,404,7,404,2,405,7,405,
        2,406,7,406,2,407,7,407,2,408,7,408,2,409,7,409,2,410,7,410,2,411,
        7,411,2,412,7,412,2,413,7,413,2,414,7,414,2,415,7,415,2,416,7,416,
        2,417,7,417,2,418,7,418,2,419,7,419,1,0,4,0,843,8,0,11,0,12,0,844,
        1,0,1,0,1,1,1,1,1,1,1,1,5,1,853,8,1,10,1,12,1,856,9,1,1,1,1,1,1,
        1,1,1,1,1,1,2,1,2,1,2,3,2,866,8,2,1,2,5,2,869,8,2,10,2,12,2,872,
        9,2,1,2,3,2,875,8,2,1,2,1,2,3,2,879,8,2,1,2,1,2,1,2,1,2,3,2,885,
        8,2,1,2,1,2,3,2,889,8,2,3,2,891,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,
        1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
        1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,
        1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
        1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,
        1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
        1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
        1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,
        1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,
        1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,27,1,27,
        1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
        1,29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
        1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,
        1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,
        1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,
        1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
        1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,
        1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,40,
        1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,
        1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,
        1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,
        1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,
        1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,
        1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
        1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,
        1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
        1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,
        1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,
        1,57,1,57,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,
        1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,
        1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,63,1,63,1,63,
        1,63,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,
        1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
        1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,1,68,1,68,
        1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,
        1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,
        1,71,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
        1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,76,1,76,
        1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,
        1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,80,1,80,
        1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,
        1,81,1,81,1,82,1,82,1,82,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,
        1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,
        1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,1,86,1,86,
        1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,
        1,88,1,88,1,88,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,89,1,90,1,90,
        1,90,1,90,1,90,1,90,1,90,1,90,1,90,1,91,1,91,1,91,1,91,1,91,1,91,
        1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,
        1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,93,1,94,1,94,1,94,
        1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,94,1,95,1,95,1,95,1,95,
        1,95,1,95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,
        1,96,1,96,1,97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,1,98,1,99,
        1,99,1,99,1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,100,
        1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,101,1,102,
        1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,1,103,1,103,
        1,103,1,103,1,103,1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,1,105,1,105,1,105,1,105,1,105,1,105,1,105,1,106,
        1,106,1,106,1,106,1,106,1,106,1,106,1,107,1,107,1,107,1,107,1,107,
        1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,1,108,
        1,108,1,108,1,108,1,108,1,108,1,108,1,109,1,109,1,109,1,109,1,109,
        1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,1,109,
        1,109,1,109,1,109,1,109,1,110,1,110,1,110,1,110,1,110,1,110,1,110,
        1,110,1,110,1,110,1,110,1,111,1,111,1,111,1,111,1,111,1,111,1,111,
        1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,111,1,112,1,112,
        1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,1,112,
        1,112,1,112,1,112,1,112,1,113,1,113,1,113,1,113,1,113,1,113,1,113,
        1,113,1,114,1,114,1,114,1,114,1,115,1,115,1,115,1,115,1,115,1,116,
        1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,116,1,117,1,117,1,117,
        1,117,1,117,1,117,1,117,1,118,1,118,1,118,1,118,1,118,1,118,1,118,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,120,1,120,1,120,
        1,120,1,120,1,120,1,120,1,120,1,121,1,121,1,121,1,121,1,121,1,121,
        1,121,1,121,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,1,122,
        1,123,1,123,1,123,1,123,1,123,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,125,1,125,1,125,1,125,1,125,1,125,1,126,
        1,126,1,126,1,126,1,126,1,126,1,126,1,127,1,127,1,127,1,127,1,127,
        1,127,1,128,1,128,1,128,1,128,1,128,1,128,1,128,1,129,1,129,1,129,
        1,129,1,129,1,129,1,129,1,129,1,130,1,130,1,130,1,130,1,130,1,130,
        1,130,1,130,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,132,1,132,1,132,1,132,1,132,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,135,1,136,
        1,136,1,136,1,136,1,136,1,137,1,137,1,137,1,137,1,137,1,137,1,137,
        1,138,1,138,1,138,1,138,1,138,1,139,1,139,1,139,1,139,1,139,1,139,
        1,140,1,140,1,140,1,140,1,140,1,140,1,140,1,141,1,141,1,141,1,141,
        1,141,1,141,1,142,1,142,1,142,1,142,1,142,1,142,1,143,1,143,1,143,
        1,143,1,143,1,143,1,143,1,143,1,143,1,143,1,144,1,144,1,144,1,144,
        1,144,1,145,1,145,1,145,1,145,1,145,1,145,1,145,1,146,1,146,1,146,
        1,146,1,146,1,146,1,146,1,146,1,146,1,146,1,147,1,147,1,147,1,147,
        1,147,1,147,1,148,1,148,1,148,1,148,1,148,1,148,1,148,1,149,1,149,
        1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,149,1,150,1,150,1,150,
        1,150,1,150,1,150,1,150,1,150,1,151,1,151,1,151,1,151,1,151,1,151,
        1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,151,1,152,1,152,1,152,
        1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,152,1,153,
        1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,1,153,
        1,153,1,153,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,1,154,
        1,154,1,155,1,155,1,155,1,155,1,155,1,155,1,155,1,156,1,156,1,156,
        1,156,1,156,1,157,1,157,1,157,1,157,1,157,1,157,1,158,1,158,1,158,
        1,158,1,158,1,158,1,158,1,159,1,159,1,159,1,159,1,159,1,159,1,160,
        1,160,1,160,1,160,1,161,1,161,1,161,1,161,1,161,1,161,1,162,1,162,
        1,162,1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,163,1,164,1,164,
        1,164,1,164,1,164,1,164,1,164,1,164,1,165,1,165,1,165,1,165,1,165,
        1,166,1,166,1,166,1,166,1,166,1,166,1,167,1,167,1,167,1,167,1,167,
        1,167,1,167,1,167,1,168,1,168,1,168,1,168,1,168,1,168,1,168,1,168,
        1,168,1,168,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,1,169,
        1,169,1,169,1,170,1,170,1,170,1,170,1,170,1,171,1,171,1,171,1,171,
        1,171,1,171,1,172,1,172,1,172,1,172,1,172,1,173,1,173,1,173,1,173,
        1,173,1,173,1,173,1,173,1,174,1,174,1,174,1,174,1,174,1,174,1,175,
        1,175,1,175,1,175,1,175,1,176,1,176,1,176,1,176,1,177,1,177,1,177,
        1,177,1,178,1,178,1,178,1,178,1,178,1,178,1,179,1,179,1,179,1,179,
        1,179,1,179,1,180,1,180,1,180,1,180,1,181,1,181,1,181,1,181,1,182,
        1,182,1,182,1,182,1,183,1,183,1,183,1,183,1,183,1,183,1,184,1,184,
        1,184,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,1,185,
        1,185,1,186,1,186,1,186,1,187,1,187,1,187,1,187,1,188,1,188,1,188,
        1,188,1,188,1,188,1,189,1,189,1,189,1,189,1,189,1,189,1,189,1,189,
        1,190,1,190,1,190,1,190,1,190,1,190,1,190,1,191,1,191,1,191,1,191,
        1,191,1,191,1,191,1,192,1,192,1,192,1,192,1,193,1,193,1,193,1,193,
        1,193,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,194,1,195,1,195,
        1,195,1,195,1,195,1,196,1,196,1,196,1,197,1,197,1,197,1,197,1,197,
        1,198,1,198,1,198,1,198,1,198,1,198,1,198,1,199,1,199,1,199,1,199,
        1,199,1,199,1,199,1,199,1,199,1,200,1,200,1,200,1,200,1,200,1,201,
        1,201,1,201,1,201,1,201,1,202,1,202,1,202,1,202,1,202,1,203,1,203,
        1,203,1,203,1,203,1,204,1,204,1,204,1,204,1,204,1,204,1,204,1,204,
        1,204,1,204,1,205,1,205,1,205,1,205,1,205,1,205,1,206,1,206,1,206,
        1,206,1,206,1,207,1,207,1,207,1,207,1,207,1,207,1,208,1,208,1,208,
        1,208,1,208,1,208,1,208,1,208,1,208,1,209,1,209,1,209,1,209,1,209,
        1,209,1,209,1,209,1,210,1,210,1,210,1,210,1,210,1,210,1,210,1,210,
        1,211,1,211,1,211,1,211,1,211,1,211,1,211,1,212,1,212,1,212,1,212,
        1,212,1,212,1,212,1,213,1,213,1,213,1,213,1,213,1,213,1,213,1,213,
        1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,1,214,
        1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,215,1,216,1,216,
        1,216,1,216,1,216,1,216,1,216,1,216,1,217,1,217,1,217,1,217,1,217,
        1,217,1,218,1,218,1,218,1,218,1,218,1,218,1,218,1,219,1,219,1,219,
        1,219,1,219,1,219,1,220,1,220,1,220,1,220,1,220,1,221,1,221,1,221,
        1,221,1,221,1,221,1,221,1,221,1,222,1,222,1,222,1,222,1,222,1,222,
        1,222,1,223,1,223,1,223,1,223,1,223,1,223,1,224,1,224,1,224,1,224,
        1,224,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,225,1,226,
        1,226,1,226,1,226,1,227,1,227,1,227,1,227,1,228,1,228,1,228,1,228,
        1,228,1,228,1,228,1,228,1,229,1,229,1,229,1,229,1,229,1,229,1,229,
        1,229,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,230,1,231,1,231,
        1,231,1,231,1,231,1,231,1,231,1,232,1,232,1,232,1,232,1,232,1,232,
        1,232,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,233,1,234,
        1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,234,1,235,1,235,1,235,
        1,235,1,235,1,235,1,235,1,236,1,236,1,236,1,236,1,236,1,237,1,237,
        1,237,1,237,1,237,1,238,1,238,1,238,1,238,1,238,1,239,1,239,1,239,
        1,239,1,240,1,240,1,240,1,240,1,240,1,240,1,240,1,241,1,241,1,241,
        1,241,1,241,1,241,1,241,1,242,1,242,1,242,1,242,1,242,1,242,1,242,
        1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,243,1,244,1,244,1,244,
        1,244,1,244,1,244,1,244,1,245,1,245,1,245,1,245,1,245,1,245,1,245,
        1,245,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,246,1,247,
        1,247,1,247,1,247,1,247,1,247,1,247,1,247,1,248,1,248,1,248,1,248,
        1,248,1,248,1,249,1,249,1,249,1,249,1,249,1,249,1,250,1,250,1,250,
        1,250,1,251,1,251,1,251,1,251,1,251,1,252,1,252,1,252,1,252,1,252,
        1,253,1,253,1,253,1,253,1,253,1,253,1,253,1,253,1,253,1,254,1,254,
        1,254,1,254,1,254,1,254,1,254,1,255,1,255,1,255,1,255,1,255,1,255,
        1,256,1,256,1,256,1,256,1,256,1,256,1,257,1,257,1,257,1,257,1,257,
        1,257,1,257,1,257,1,257,1,258,1,258,1,258,1,258,1,258,1,258,1,258,
        1,259,1,259,1,259,1,259,1,259,1,259,1,259,1,260,1,260,1,260,1,260,
        1,260,1,261,1,261,1,261,1,261,1,261,1,261,1,261,1,262,1,262,1,262,
        1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,263,1,264,
        1,264,1,264,1,264,1,264,1,264,1,265,1,265,1,265,1,265,1,265,1,265,
        1,266,1,266,1,266,1,266,1,266,1,266,1,266,1,267,1,267,1,267,1,267,
        1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,268,1,269,1,269,1,269,
        1,269,1,269,1,269,1,269,1,269,1,269,1,269,1,270,1,270,1,270,1,270,
        1,270,1,270,1,270,1,270,1,270,1,271,1,271,1,271,1,271,1,271,1,272,
        1,272,1,272,1,273,1,273,1,273,1,273,1,273,1,274,1,274,1,274,1,274,
        1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,275,1,276,1,276,
        1,276,1,276,1,276,1,276,1,276,1,276,1,277,1,277,1,277,1,277,1,277,
        1,277,1,277,1,277,1,278,1,278,1,278,1,278,1,278,1,279,1,279,1,279,
        1,279,1,279,1,280,1,280,1,280,1,280,1,280,1,280,1,281,1,281,1,281,
        1,281,1,281,1,281,1,282,1,282,1,282,1,282,1,282,1,282,1,283,1,283,
        1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,1,283,
        1,283,1,283,1,283,1,284,1,284,1,284,1,284,1,284,1,284,1,284,1,284,
        1,284,1,285,1,285,1,285,1,285,1,285,1,285,1,286,1,286,1,286,1,286,
        1,286,1,286,1,286,1,286,1,286,1,287,1,287,1,287,1,287,1,287,1,287,
        1,288,1,288,1,288,1,288,1,288,1,288,1,288,1,289,1,289,1,289,1,289,
        1,289,1,289,1,289,1,289,1,289,1,290,1,290,1,290,1,290,1,290,1,290,
        1,290,1,291,1,291,1,291,1,291,1,291,1,291,1,292,1,292,1,292,1,292,
        1,292,1,292,1,292,1,292,1,292,1,293,1,293,1,293,1,293,1,293,1,293,
        1,293,1,293,1,294,1,294,1,294,1,294,1,294,1,295,1,295,1,295,1,296,
        1,296,1,296,1,296,1,296,1,297,1,297,1,297,1,297,1,298,1,298,1,298,
        1,298,1,298,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,299,1,300,
        1,300,1,300,1,301,1,301,1,301,1,301,1,301,1,301,1,301,1,302,1,302,
        1,302,1,303,1,303,1,303,1,303,1,304,1,304,1,304,1,305,1,305,1,305,
        1,305,1,305,1,305,1,306,1,306,1,306,1,306,1,307,1,307,1,307,1,307,
        1,307,1,307,1,308,1,308,1,308,1,308,1,308,1,309,1,309,1,309,1,309,
        1,309,1,309,1,309,1,309,1,310,1,310,1,310,1,310,1,310,1,310,1,310,
        1,310,1,310,1,310,1,311,1,311,1,311,1,311,1,311,1,311,1,311,1,311,
        1,312,1,312,1,312,1,312,1,313,1,313,1,313,1,313,1,313,1,313,1,313,
        1,313,1,314,1,314,1,314,1,314,1,314,1,314,1,314,1,315,1,315,1,315,
        1,315,1,315,1,315,1,315,1,315,1,315,1,316,1,316,1,316,1,316,1,316,
        1,316,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,317,1,318,1,318,
        1,318,1,318,1,318,1,318,1,319,1,319,1,319,1,319,1,319,1,320,1,320,
        1,320,1,320,1,320,1,320,1,321,1,321,1,321,1,321,1,321,1,321,1,321,
        1,322,1,322,1,322,1,322,1,322,1,322,1,323,1,323,1,323,1,323,1,323,
        1,323,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,324,1,325,
        1,325,1,325,1,325,1,325,1,325,1,325,1,326,1,326,1,326,1,326,1,327,
        1,327,1,327,1,327,1,327,1,328,1,328,1,328,1,328,1,328,1,328,1,328,
        1,329,1,329,1,329,1,329,1,329,1,329,1,329,1,330,1,330,1,330,1,330,
        1,331,1,331,1,331,1,331,1,331,1,332,1,332,1,332,1,332,1,332,1,332,
        1,332,1,332,1,333,1,333,1,333,1,333,1,333,1,334,1,334,1,334,1,334,
        1,334,1,334,1,334,1,334,1,334,1,335,1,335,1,335,1,335,1,335,1,335,
        1,336,1,336,1,336,1,336,1,336,1,336,1,336,1,337,1,337,1,337,1,337,
        1,337,1,337,1,337,1,337,1,337,1,337,1,338,1,338,1,338,1,338,1,339,
        1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,339,1,340,1,340,
        1,340,1,340,1,340,1,340,1,340,1,341,1,341,1,341,1,341,1,341,1,341,
        1,341,1,341,1,341,1,341,1,341,1,341,1,342,1,342,1,342,1,342,1,342,
        1,342,1,342,1,342,1,342,1,342,1,342,1,342,1,343,1,343,1,343,1,343,
        1,343,1,343,1,344,1,344,1,344,1,344,1,344,1,344,1,344,1,344,1,344,
        1,344,1,344,1,344,1,345,1,345,1,345,1,345,1,345,1,346,1,346,1,346,
        1,346,1,346,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,1,347,
        1,347,1,348,1,348,1,348,1,348,1,348,1,348,1,348,1,348,1,349,1,349,
        1,349,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,350,1,351,
        1,351,1,351,1,351,1,351,1,352,1,352,1,352,1,352,1,352,1,352,1,352,
        1,352,1,352,1,353,1,353,1,353,1,353,1,353,1,353,1,354,1,354,1,354,
        1,354,1,354,1,354,1,354,1,355,1,355,1,355,1,355,1,355,1,355,1,355,
        1,355,1,356,1,356,1,356,1,356,1,356,1,356,1,356,1,357,1,357,1,357,
        1,357,1,357,1,357,1,358,1,358,1,358,1,358,1,358,1,358,1,358,1,359,
        1,359,1,359,1,359,1,359,1,360,1,360,1,360,1,360,1,360,1,360,1,361,
        1,361,1,361,1,361,1,361,1,361,1,362,1,362,1,362,1,362,1,362,1,362,
        1,362,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,1,363,
        1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,364,1,365,1,365,1,365,
        1,365,1,365,1,366,1,366,1,366,1,366,1,366,1,366,1,367,1,367,1,367,
        1,367,1,367,1,367,1,367,1,368,1,368,1,368,1,368,1,368,1,369,1,369,
        1,369,1,369,1,369,1,369,1,369,1,370,1,370,1,370,1,370,1,370,1,370,
        1,370,1,370,1,371,1,371,1,371,1,371,1,371,1,372,1,372,1,373,1,373,
        1,374,1,374,1,375,1,375,1,376,1,376,1,377,1,377,1,378,1,378,1,379,
        1,379,1,380,1,380,1,381,1,381,1,382,1,382,1,383,1,383,1,384,1,384,
        1,385,1,385,1,386,1,386,1,387,1,387,1,388,1,388,1,389,1,389,1,390,
        1,390,1,391,1,391,1,392,1,392,1,393,1,393,1,394,1,394,1,395,1,395,
        1,396,1,396,1,397,1,397,1,398,1,398,1,399,1,399,1,399,1,400,1,400,
        1,400,1,401,1,401,1,402,1,402,1,403,1,403,1,403,1,404,1,404,1,404,
        3,404,3629,8,404,1,405,4,405,3632,8,405,11,405,12,405,3633,1,406,
        4,406,3637,8,406,11,406,12,406,3638,3,406,3641,8,406,1,406,1,406,
        4,406,3645,8,406,11,406,12,406,3646,1,406,4,406,3650,8,406,11,406,
        12,406,3651,1,406,1,406,1,406,1,406,4,406,3658,8,406,11,406,12,406,
        3659,3,406,3662,8,406,1,406,1,406,4,406,3666,8,406,11,406,12,406,
        3667,1,406,1,406,1,406,4,406,3673,8,406,11,406,12,406,3674,1,406,
        1,406,3,406,3679,8,406,1,407,1,407,1,408,1,408,1,409,1,409,1,410,
        1,410,5,410,3689,8,410,10,410,12,410,3692,9,410,1,411,1,411,1,411,
        1,411,1,411,1,411,5,411,3700,8,411,10,411,12,411,3703,9,411,1,411,
        1,411,1,412,1,412,3,412,3709,8,412,1,412,4,412,3712,8,412,11,412,
        12,412,3713,1,413,5,413,3717,8,413,10,413,12,413,3720,9,413,1,413,
        4,413,3723,8,413,11,413,12,413,3724,1,413,5,413,3728,8,413,10,413,
        12,413,3731,9,413,1,414,1,414,1,415,1,415,1,416,1,416,1,416,1,416,
        1,416,1,416,5,416,3743,8,416,10,416,12,416,3746,9,416,1,416,1,416,
        1,417,1,417,1,417,1,417,1,417,1,417,5,417,3756,8,417,10,417,12,417,
        3759,9,417,1,417,1,417,1,418,1,418,1,418,4,418,3766,8,418,11,418,
        12,418,3767,1,418,1,418,1,419,1,419,1,419,1,419,1,419,1,419,5,419,
        3778,8,419,10,419,12,419,3781,9,419,1,419,1,419,3,854,3718,3724,
        0,420,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,
        25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,
        47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,
        69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,44,89,45,
        91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,107,54,109,55,
        111,56,113,57,115,58,117,59,119,60,121,61,123,62,125,63,127,64,129,
        65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,145,73,147,74,
        149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,83,167,
        84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,
        187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,
        205,103,207,104,209,105,211,106,213,107,215,108,217,109,219,110,
        221,111,223,112,225,113,227,114,229,115,231,116,233,117,235,118,
        237,119,239,120,241,121,243,122,245,123,247,124,249,125,251,126,
        253,127,255,128,257,129,259,130,261,131,263,132,265,133,267,134,
        269,135,271,136,273,137,275,138,277,139,279,140,281,141,283,142,
        285,143,287,144,289,145,291,146,293,147,295,148,297,149,299,150,
        301,151,303,152,305,153,307,154,309,155,311,156,313,157,315,158,
        317,159,319,160,321,161,323,162,325,163,327,164,329,165,331,166,
        333,167,335,168,337,169,339,170,341,171,343,172,345,173,347,174,
        349,175,351,176,353,177,355,178,357,179,359,180,361,181,363,182,
        365,183,367,184,369,185,371,186,373,187,375,188,377,189,379,190,
        381,191,383,192,385,193,387,194,389,195,391,196,393,197,395,198,
        397,199,399,200,401,201,403,202,405,203,407,204,409,205,411,206,
        413,207,415,208,417,209,419,210,421,211,423,212,425,213,427,214,
        429,215,431,216,433,217,435,218,437,219,439,220,441,221,443,222,
        445,223,447,224,449,225,451,226,453,227,455,228,457,229,459,230,
        461,231,463,232,465,233,467,234,469,235,471,236,473,237,475,238,
        477,239,479,240,481,241,483,242,485,243,487,244,489,245,491,246,
        493,247,495,248,497,249,499,250,501,251,503,252,505,253,507,254,
        509,255,511,256,513,257,515,258,517,259,519,260,521,261,523,262,
        525,263,527,264,529,265,531,266,533,267,535,268,537,269,539,270,
        541,271,543,272,545,273,547,274,549,275,551,276,553,277,555,278,
        557,279,559,280,561,281,563,282,565,283,567,284,569,285,571,286,
        573,287,575,288,577,289,579,290,581,291,583,292,585,293,587,294,
        589,295,591,296,593,297,595,298,597,299,599,300,601,301,603,302,
        605,303,607,304,609,305,611,306,613,307,615,308,617,309,619,310,
        621,311,623,312,625,313,627,314,629,315,631,316,633,317,635,318,
        637,319,639,320,641,321,643,322,645,323,647,324,649,325,651,326,
        653,327,655,328,657,329,659,330,661,331,663,332,665,333,667,334,
        669,335,671,336,673,337,675,338,677,339,679,340,681,341,683,342,
        685,343,687,344,689,345,691,346,693,347,695,348,697,349,699,350,
        701,351,703,352,705,353,707,354,709,355,711,356,713,357,715,358,
        717,359,719,360,721,361,723,362,725,363,727,364,729,365,731,366,
        733,367,735,368,737,369,739,370,741,371,743,372,745,373,747,374,
        749,375,751,376,753,377,755,378,757,379,759,380,761,381,763,382,
        765,383,767,384,769,385,771,386,773,387,775,388,777,389,779,390,
        781,391,783,392,785,393,787,394,789,395,791,396,793,397,795,398,
        797,399,799,400,801,401,803,402,805,403,807,404,809,405,811,406,
        813,407,815,408,817,409,819,410,821,0,823,0,825,0,827,0,829,0,831,
        0,833,0,835,0,837,0,839,0,1,0,13,3,0,9,10,13,13,32,32,2,0,10,10,
        13,13,2,0,47,47,92,92,5,0,32,32,40,41,47,47,59,59,92,92,2,0,92,92,
        96,96,2,0,43,43,45,45,4,0,48,57,65,90,95,95,97,122,3,0,65,90,95,
        95,97,122,1,0,48,57,2,0,65,90,97,122,2,0,34,34,92,92,2,0,39,39,92,
        92,1,0,48,49,3815,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
        0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
        0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,
        0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,
        0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,
        0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,
        0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,
        0,0,69,1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,
        0,0,79,1,0,0,0,0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,
        0,0,89,1,0,0,0,0,91,1,0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,
        0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,
        0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,113,1,0,0,0,0,115,1,0,0,0,0,
        117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,1,0,0,0,0,125,1,0,
        0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,0,0,0,0,135,
        1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,0,0,
        0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,
        0,0,0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,
        163,1,0,0,0,0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,
        0,0,0,173,1,0,0,0,0,175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,
        1,0,0,0,0,183,1,0,0,0,0,185,1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,
        0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,0,0,0,0,197,1,0,0,0,0,199,1,
        0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,0,205,1,0,0,0,0,207,1,0,0,0,0,
        209,1,0,0,0,0,211,1,0,0,0,0,213,1,0,0,0,0,215,1,0,0,0,0,217,1,0,
        0,0,0,219,1,0,0,0,0,221,1,0,0,0,0,223,1,0,0,0,0,225,1,0,0,0,0,227,
        1,0,0,0,0,229,1,0,0,0,0,231,1,0,0,0,0,233,1,0,0,0,0,235,1,0,0,0,
        0,237,1,0,0,0,0,239,1,0,0,0,0,241,1,0,0,0,0,243,1,0,0,0,0,245,1,
        0,0,0,0,247,1,0,0,0,0,249,1,0,0,0,0,251,1,0,0,0,0,253,1,0,0,0,0,
        255,1,0,0,0,0,257,1,0,0,0,0,259,1,0,0,0,0,261,1,0,0,0,0,263,1,0,
        0,0,0,265,1,0,0,0,0,267,1,0,0,0,0,269,1,0,0,0,0,271,1,0,0,0,0,273,
        1,0,0,0,0,275,1,0,0,0,0,277,1,0,0,0,0,279,1,0,0,0,0,281,1,0,0,0,
        0,283,1,0,0,0,0,285,1,0,0,0,0,287,1,0,0,0,0,289,1,0,0,0,0,291,1,
        0,0,0,0,293,1,0,0,0,0,295,1,0,0,0,0,297,1,0,0,0,0,299,1,0,0,0,0,
        301,1,0,0,0,0,303,1,0,0,0,0,305,1,0,0,0,0,307,1,0,0,0,0,309,1,0,
        0,0,0,311,1,0,0,0,0,313,1,0,0,0,0,315,1,0,0,0,0,317,1,0,0,0,0,319,
        1,0,0,0,0,321,1,0,0,0,0,323,1,0,0,0,0,325,1,0,0,0,0,327,1,0,0,0,
        0,329,1,0,0,0,0,331,1,0,0,0,0,333,1,0,0,0,0,335,1,0,0,0,0,337,1,
        0,0,0,0,339,1,0,0,0,0,341,1,0,0,0,0,343,1,0,0,0,0,345,1,0,0,0,0,
        347,1,0,0,0,0,349,1,0,0,0,0,351,1,0,0,0,0,353,1,0,0,0,0,355,1,0,
        0,0,0,357,1,0,0,0,0,359,1,0,0,0,0,361,1,0,0,0,0,363,1,0,0,0,0,365,
        1,0,0,0,0,367,1,0,0,0,0,369,1,0,0,0,0,371,1,0,0,0,0,373,1,0,0,0,
        0,375,1,0,0,0,0,377,1,0,0,0,0,379,1,0,0,0,0,381,1,0,0,0,0,383,1,
        0,0,0,0,385,1,0,0,0,0,387,1,0,0,0,0,389,1,0,0,0,0,391,1,0,0,0,0,
        393,1,0,0,0,0,395,1,0,0,0,0,397,1,0,0,0,0,399,1,0,0,0,0,401,1,0,
        0,0,0,403,1,0,0,0,0,405,1,0,0,0,0,407,1,0,0,0,0,409,1,0,0,0,0,411,
        1,0,0,0,0,413,1,0,0,0,0,415,1,0,0,0,0,417,1,0,0,0,0,419,1,0,0,0,
        0,421,1,0,0,0,0,423,1,0,0,0,0,425,1,0,0,0,0,427,1,0,0,0,0,429,1,
        0,0,0,0,431,1,0,0,0,0,433,1,0,0,0,0,435,1,0,0,0,0,437,1,0,0,0,0,
        439,1,0,0,0,0,441,1,0,0,0,0,443,1,0,0,0,0,445,1,0,0,0,0,447,1,0,
        0,0,0,449,1,0,0,0,0,451,1,0,0,0,0,453,1,0,0,0,0,455,1,0,0,0,0,457,
        1,0,0,0,0,459,1,0,0,0,0,461,1,0,0,0,0,463,1,0,0,0,0,465,1,0,0,0,
        0,467,1,0,0,0,0,469,1,0,0,0,0,471,1,0,0,0,0,473,1,0,0,0,0,475,1,
        0,0,0,0,477,1,0,0,0,0,479,1,0,0,0,0,481,1,0,0,0,0,483,1,0,0,0,0,
        485,1,0,0,0,0,487,1,0,0,0,0,489,1,0,0,0,0,491,1,0,0,0,0,493,1,0,
        0,0,0,495,1,0,0,0,0,497,1,0,0,0,0,499,1,0,0,0,0,501,1,0,0,0,0,503,
        1,0,0,0,0,505,1,0,0,0,0,507,1,0,0,0,0,509,1,0,0,0,0,511,1,0,0,0,
        0,513,1,0,0,0,0,515,1,0,0,0,0,517,1,0,0,0,0,519,1,0,0,0,0,521,1,
        0,0,0,0,523,1,0,0,0,0,525,1,0,0,0,0,527,1,0,0,0,0,529,1,0,0,0,0,
        531,1,0,0,0,0,533,1,0,0,0,0,535,1,0,0,0,0,537,1,0,0,0,0,539,1,0,
        0,0,0,541,1,0,0,0,0,543,1,0,0,0,0,545,1,0,0,0,0,547,1,0,0,0,0,549,
        1,0,0,0,0,551,1,0,0,0,0,553,1,0,0,0,0,555,1,0,0,0,0,557,1,0,0,0,
        0,559,1,0,0,0,0,561,1,0,0,0,0,563,1,0,0,0,0,565,1,0,0,0,0,567,1,
        0,0,0,0,569,1,0,0,0,0,571,1,0,0,0,0,573,1,0,0,0,0,575,1,0,0,0,0,
        577,1,0,0,0,0,579,1,0,0,0,0,581,1,0,0,0,0,583,1,0,0,0,0,585,1,0,
        0,0,0,587,1,0,0,0,0,589,1,0,0,0,0,591,1,0,0,0,0,593,1,0,0,0,0,595,
        1,0,0,0,0,597,1,0,0,0,0,599,1,0,0,0,0,601,1,0,0,0,0,603,1,0,0,0,
        0,605,1,0,0,0,0,607,1,0,0,0,0,609,1,0,0,0,0,611,1,0,0,0,0,613,1,
        0,0,0,0,615,1,0,0,0,0,617,1,0,0,0,0,619,1,0,0,0,0,621,1,0,0,0,0,
        623,1,0,0,0,0,625,1,0,0,0,0,627,1,0,0,0,0,629,1,0,0,0,0,631,1,0,
        0,0,0,633,1,0,0,0,0,635,1,0,0,0,0,637,1,0,0,0,0,639,1,0,0,0,0,641,
        1,0,0,0,0,643,1,0,0,0,0,645,1,0,0,0,0,647,1,0,0,0,0,649,1,0,0,0,
        0,651,1,0,0,0,0,653,1,0,0,0,0,655,1,0,0,0,0,657,1,0,0,0,0,659,1,
        0,0,0,0,661,1,0,0,0,0,663,1,0,0,0,0,665,1,0,0,0,0,667,1,0,0,0,0,
        669,1,0,0,0,0,671,1,0,0,0,0,673,1,0,0,0,0,675,1,0,0,0,0,677,1,0,
        0,0,0,679,1,0,0,0,0,681,1,0,0,0,0,683,1,0,0,0,0,685,1,0,0,0,0,687,
        1,0,0,0,0,689,1,0,0,0,0,691,1,0,0,0,0,693,1,0,0,0,0,695,1,0,0,0,
        0,697,1,0,0,0,0,699,1,0,0,0,0,701,1,0,0,0,0,703,1,0,0,0,0,705,1,
        0,0,0,0,707,1,0,0,0,0,709,1,0,0,0,0,711,1,0,0,0,0,713,1,0,0,0,0,
        715,1,0,0,0,0,717,1,0,0,0,0,719,1,0,0,0,0,721,1,0,0,0,0,723,1,0,
        0,0,0,725,1,0,0,0,0,727,1,0,0,0,0,729,1,0,0,0,0,731,1,0,0,0,0,733,
        1,0,0,0,0,735,1,0,0,0,0,737,1,0,0,0,0,739,1,0,0,0,0,741,1,0,0,0,
        0,743,1,0,0,0,0,745,1,0,0,0,0,747,1,0,0,0,0,749,1,0,0,0,0,751,1,
        0,0,0,0,753,1,0,0,0,0,755,1,0,0,0,0,757,1,0,0,0,0,759,1,0,0,0,0,
        761,1,0,0,0,0,763,1,0,0,0,0,765,1,0,0,0,0,767,1,0,0,0,0,769,1,0,
        0,0,0,771,1,0,0,0,0,773,1,0,0,0,0,775,1,0,0,0,0,777,1,0,0,0,0,779,
        1,0,0,0,0,781,1,0,0,0,0,783,1,0,0,0,0,785,1,0,0,0,0,787,1,0,0,0,
        0,789,1,0,0,0,0,791,1,0,0,0,0,793,1,0,0,0,0,795,1,0,0,0,0,797,1,
        0,0,0,0,799,1,0,0,0,0,801,1,0,0,0,0,803,1,0,0,0,0,805,1,0,0,0,0,
        807,1,0,0,0,0,809,1,0,0,0,0,811,1,0,0,0,0,813,1,0,0,0,0,815,1,0,
        0,0,0,817,1,0,0,0,0,819,1,0,0,0,1,842,1,0,0,0,3,848,1,0,0,0,5,890,
        1,0,0,0,7,894,1,0,0,0,9,898,1,0,0,0,11,904,1,0,0,0,13,910,1,0,0,
        0,15,918,1,0,0,0,17,922,1,0,0,0,19,929,1,0,0,0,21,935,1,0,0,0,23,
        943,1,0,0,0,25,951,1,0,0,0,27,960,1,0,0,0,29,968,1,0,0,0,31,974,
        1,0,0,0,33,989,1,0,0,0,35,1000,1,0,0,0,37,1008,1,0,0,0,39,1016,1,
        0,0,0,41,1024,1,0,0,0,43,1036,1,0,0,0,45,1048,1,0,0,0,47,1057,1,
        0,0,0,49,1062,1,0,0,0,51,1071,1,0,0,0,53,1081,1,0,0,0,55,1086,1,
        0,0,0,57,1093,1,0,0,0,59,1101,1,0,0,0,61,1106,1,0,0,0,63,1117,1,
        0,0,0,65,1121,1,0,0,0,67,1130,1,0,0,0,69,1139,1,0,0,0,71,1146,1,
        0,0,0,73,1152,1,0,0,0,75,1158,1,0,0,0,77,1173,1,0,0,0,79,1183,1,
        0,0,0,81,1191,1,0,0,0,83,1201,1,0,0,0,85,1210,1,0,0,0,87,1215,1,
        0,0,0,89,1221,1,0,0,0,91,1227,1,0,0,0,93,1237,1,0,0,0,95,1244,1,
        0,0,0,97,1252,1,0,0,0,99,1258,1,0,0,0,101,1270,1,0,0,0,103,1280,
        1,0,0,0,105,1288,1,0,0,0,107,1298,1,0,0,0,109,1301,1,0,0,0,111,1306,
        1,0,0,0,113,1314,1,0,0,0,115,1318,1,0,0,0,117,1324,1,0,0,0,119,1327,
        1,0,0,0,121,1334,1,0,0,0,123,1344,1,0,0,0,125,1350,1,0,0,0,127,1358,
        1,0,0,0,129,1362,1,0,0,0,131,1367,1,0,0,0,133,1372,1,0,0,0,135,1377,
        1,0,0,0,137,1397,1,0,0,0,139,1401,1,0,0,0,141,1412,1,0,0,0,143,1421,
        1,0,0,0,145,1427,1,0,0,0,147,1432,1,0,0,0,149,1439,1,0,0,0,151,1445,
        1,0,0,0,153,1450,1,0,0,0,155,1454,1,0,0,0,157,1466,1,0,0,0,159,1477,
        1,0,0,0,161,1489,1,0,0,0,163,1497,1,0,0,0,165,1506,1,0,0,0,167,1513,
        1,0,0,0,169,1521,1,0,0,0,171,1528,1,0,0,0,173,1539,1,0,0,0,175,1545,
        1,0,0,0,177,1552,1,0,0,0,179,1559,1,0,0,0,181,1567,1,0,0,0,183,1576,
        1,0,0,0,185,1583,1,0,0,0,187,1593,1,0,0,0,189,1605,1,0,0,0,191,1617,
        1,0,0,0,193,1628,1,0,0,0,195,1636,1,0,0,0,197,1641,1,0,0,0,199,1646,
        1,0,0,0,201,1654,1,0,0,0,203,1659,1,0,0,0,205,1669,1,0,0,0,207,1678,
        1,0,0,0,209,1684,1,0,0,0,211,1695,1,0,0,0,213,1702,1,0,0,0,215,1709,
        1,0,0,0,217,1722,1,0,0,0,219,1742,1,0,0,0,221,1762,1,0,0,0,223,1773,
        1,0,0,0,225,1789,1,0,0,0,227,1806,1,0,0,0,229,1814,1,0,0,0,231,1818,
        1,0,0,0,233,1823,1,0,0,0,235,1832,1,0,0,0,237,1839,1,0,0,0,239,1846,
        1,0,0,0,241,1854,1,0,0,0,243,1862,1,0,0,0,245,1870,1,0,0,0,247,1879,
        1,0,0,0,249,1884,1,0,0,0,251,1894,1,0,0,0,253,1900,1,0,0,0,255,1907,
        1,0,0,0,257,1913,1,0,0,0,259,1920,1,0,0,0,261,1928,1,0,0,0,263,1936,
        1,0,0,0,265,1945,1,0,0,0,267,1950,1,0,0,0,269,1957,1,0,0,0,271,1969,
        1,0,0,0,273,1977,1,0,0,0,275,1982,1,0,0,0,277,1989,1,0,0,0,279,1994,
        1,0,0,0,281,2000,1,0,0,0,283,2007,1,0,0,0,285,2013,1,0,0,0,287,2019,
        1,0,0,0,289,2029,1,0,0,0,291,2034,1,0,0,0,293,2041,1,0,0,0,295,2051,
        1,0,0,0,297,2057,1,0,0,0,299,2064,1,0,0,0,301,2074,1,0,0,0,303,2082,
        1,0,0,0,305,2096,1,0,0,0,307,2109,1,0,0,0,309,2123,1,0,0,0,311,2133,
        1,0,0,0,313,2140,1,0,0,0,315,2145,1,0,0,0,317,2151,1,0,0,0,319,2158,
        1,0,0,0,321,2164,1,0,0,0,323,2168,1,0,0,0,325,2174,1,0,0,0,327,2180,
        1,0,0,0,329,2185,1,0,0,0,331,2193,1,0,0,0,333,2198,1,0,0,0,335,2204,
        1,0,0,0,337,2212,1,0,0,0,339,2222,1,0,0,0,341,2233,1,0,0,0,343,2238,
        1,0,0,0,345,2244,1,0,0,0,347,2249,1,0,0,0,349,2257,1,0,0,0,351,2263,
        1,0,0,0,353,2268,1,0,0,0,355,2272,1,0,0,0,357,2276,1,0,0,0,359,2282,
        1,0,0,0,361,2288,1,0,0,0,363,2292,1,0,0,0,365,2296,1,0,0,0,367,2300,
        1,0,0,0,369,2306,1,0,0,0,371,2309,1,0,0,0,373,2320,1,0,0,0,375,2323,
        1,0,0,0,377,2327,1,0,0,0,379,2333,1,0,0,0,381,2341,1,0,0,0,383,2348,
        1,0,0,0,385,2355,1,0,0,0,387,2359,1,0,0,0,389,2364,1,0,0,0,391,2372,
        1,0,0,0,393,2377,1,0,0,0,395,2380,1,0,0,0,397,2385,1,0,0,0,399,2392,
        1,0,0,0,401,2401,1,0,0,0,403,2406,1,0,0,0,405,2411,1,0,0,0,407,2416,
        1,0,0,0,409,2421,1,0,0,0,411,2431,1,0,0,0,413,2437,1,0,0,0,415,2442,
        1,0,0,0,417,2448,1,0,0,0,419,2457,1,0,0,0,421,2465,1,0,0,0,423,2473,
        1,0,0,0,425,2480,1,0,0,0,427,2487,1,0,0,0,429,2495,1,0,0,0,431,2506,
        1,0,0,0,433,2515,1,0,0,0,435,2523,1,0,0,0,437,2529,1,0,0,0,439,2536,
        1,0,0,0,441,2542,1,0,0,0,443,2547,1,0,0,0,445,2555,1,0,0,0,447,2562,
        1,0,0,0,449,2568,1,0,0,0,451,2573,1,0,0,0,453,2582,1,0,0,0,455,2586,
        1,0,0,0,457,2590,1,0,0,0,459,2598,1,0,0,0,461,2606,1,0,0,0,463,2614,
        1,0,0,0,465,2621,1,0,0,0,467,2628,1,0,0,0,469,2637,1,0,0,0,471,2646,
        1,0,0,0,473,2653,1,0,0,0,475,2658,1,0,0,0,477,2663,1,0,0,0,479,2668,
        1,0,0,0,481,2672,1,0,0,0,483,2679,1,0,0,0,485,2686,1,0,0,0,487,2693,
        1,0,0,0,489,2701,1,0,0,0,491,2708,1,0,0,0,493,2716,1,0,0,0,495,2725,
        1,0,0,0,497,2733,1,0,0,0,499,2739,1,0,0,0,501,2745,1,0,0,0,503,2749,
        1,0,0,0,505,2754,1,0,0,0,507,2759,1,0,0,0,509,2768,1,0,0,0,511,2775,
        1,0,0,0,513,2781,1,0,0,0,515,2787,1,0,0,0,517,2796,1,0,0,0,519,2803,
        1,0,0,0,521,2810,1,0,0,0,523,2815,1,0,0,0,525,2822,1,0,0,0,527,2825,
        1,0,0,0,529,2835,1,0,0,0,531,2841,1,0,0,0,533,2847,1,0,0,0,535,2854,
        1,0,0,0,537,2858,1,0,0,0,539,2866,1,0,0,0,541,2876,1,0,0,0,543,2885,
        1,0,0,0,545,2890,1,0,0,0,547,2893,1,0,0,0,549,2898,1,0,0,0,551,2902,
        1,0,0,0,553,2911,1,0,0,0,555,2919,1,0,0,0,557,2927,1,0,0,0,559,2932,
        1,0,0,0,561,2937,1,0,0,0,563,2943,1,0,0,0,565,2949,1,0,0,0,567,2955,
        1,0,0,0,569,2971,1,0,0,0,571,2980,1,0,0,0,573,2986,1,0,0,0,575,2995,
        1,0,0,0,577,3001,1,0,0,0,579,3008,1,0,0,0,581,3017,1,0,0,0,583,3024,
        1,0,0,0,585,3030,1,0,0,0,587,3039,1,0,0,0,589,3047,1,0,0,0,591,3052,
        1,0,0,0,593,3055,1,0,0,0,595,3060,1,0,0,0,597,3064,1,0,0,0,599,3069,
        1,0,0,0,601,3077,1,0,0,0,603,3080,1,0,0,0,605,3087,1,0,0,0,607,3090,
        1,0,0,0,609,3094,1,0,0,0,611,3097,1,0,0,0,613,3103,1,0,0,0,615,3107,
        1,0,0,0,617,3113,1,0,0,0,619,3118,1,0,0,0,621,3126,1,0,0,0,623,3136,
        1,0,0,0,625,3144,1,0,0,0,627,3148,1,0,0,0,629,3156,1,0,0,0,631,3163,
        1,0,0,0,633,3172,1,0,0,0,635,3178,1,0,0,0,637,3186,1,0,0,0,639,3192,
        1,0,0,0,641,3197,1,0,0,0,643,3203,1,0,0,0,645,3210,1,0,0,0,647,3216,
        1,0,0,0,649,3222,1,0,0,0,651,3231,1,0,0,0,653,3238,1,0,0,0,655,3242,
        1,0,0,0,657,3247,1,0,0,0,659,3254,1,0,0,0,661,3261,1,0,0,0,663,3265,
        1,0,0,0,665,3270,1,0,0,0,667,3278,1,0,0,0,669,3283,1,0,0,0,671,3292,
        1,0,0,0,673,3298,1,0,0,0,675,3305,1,0,0,0,677,3315,1,0,0,0,679,3319,
        1,0,0,0,681,3329,1,0,0,0,683,3336,1,0,0,0,685,3348,1,0,0,0,687,3360,
        1,0,0,0,689,3366,1,0,0,0,691,3378,1,0,0,0,693,3383,1,0,0,0,695,3388,
        1,0,0,0,697,3398,1,0,0,0,699,3406,1,0,0,0,701,3409,1,0,0,0,703,3418,
        1,0,0,0,705,3423,1,0,0,0,707,3432,1,0,0,0,709,3438,1,0,0,0,711,3445,
        1,0,0,0,713,3453,1,0,0,0,715,3460,1,0,0,0,717,3466,1,0,0,0,719,3473,
        1,0,0,0,721,3478,1,0,0,0,723,3484,1,0,0,0,725,3490,1,0,0,0,727,3497,
        1,0,0,0,729,3507,1,0,0,0,731,3515,1,0,0,0,733,3520,1,0,0,0,735,3526,
        1,0,0,0,737,3533,1,0,0,0,739,3538,1,0,0,0,741,3545,1,0,0,0,743,3553,
        1,0,0,0,745,3558,1,0,0,0,747,3560,1,0,0,0,749,3562,1,0,0,0,751,3564,
        1,0,0,0,753,3566,1,0,0,0,755,3568,1,0,0,0,757,3570,1,0,0,0,759,3572,
        1,0,0,0,761,3574,1,0,0,0,763,3576,1,0,0,0,765,3578,1,0,0,0,767,3580,
        1,0,0,0,769,3582,1,0,0,0,771,3584,1,0,0,0,773,3586,1,0,0,0,775,3588,
        1,0,0,0,777,3590,1,0,0,0,779,3592,1,0,0,0,781,3594,1,0,0,0,783,3596,
        1,0,0,0,785,3598,1,0,0,0,787,3600,1,0,0,0,789,3602,1,0,0,0,791,3604,
        1,0,0,0,793,3606,1,0,0,0,795,3608,1,0,0,0,797,3610,1,0,0,0,799,3612,
        1,0,0,0,801,3615,1,0,0,0,803,3618,1,0,0,0,805,3620,1,0,0,0,807,3622,
        1,0,0,0,809,3628,1,0,0,0,811,3631,1,0,0,0,813,3678,1,0,0,0,815,3680,
        1,0,0,0,817,3682,1,0,0,0,819,3684,1,0,0,0,821,3686,1,0,0,0,823,3693,
        1,0,0,0,825,3706,1,0,0,0,827,3718,1,0,0,0,829,3732,1,0,0,0,831,3734,
        1,0,0,0,833,3736,1,0,0,0,835,3749,1,0,0,0,837,3762,1,0,0,0,839,3771,
        1,0,0,0,841,843,7,0,0,0,842,841,1,0,0,0,843,844,1,0,0,0,844,842,
        1,0,0,0,844,845,1,0,0,0,845,846,1,0,0,0,846,847,6,0,0,0,847,2,1,
        0,0,0,848,849,5,47,0,0,849,850,5,42,0,0,850,854,1,0,0,0,851,853,
        9,0,0,0,852,851,1,0,0,0,853,856,1,0,0,0,854,855,1,0,0,0,854,852,
        1,0,0,0,855,857,1,0,0,0,856,854,1,0,0,0,857,858,5,42,0,0,858,859,
        5,47,0,0,859,860,1,0,0,0,860,861,6,1,0,0,861,4,1,0,0,0,862,863,5,
        45,0,0,863,866,5,45,0,0,864,866,5,35,0,0,865,862,1,0,0,0,865,864,
        1,0,0,0,866,870,1,0,0,0,867,869,8,1,0,0,868,867,1,0,0,0,869,872,
        1,0,0,0,870,868,1,0,0,0,870,871,1,0,0,0,871,878,1,0,0,0,872,870,
        1,0,0,0,873,875,5,13,0,0,874,873,1,0,0,0,874,875,1,0,0,0,875,876,
        1,0,0,0,876,879,5,10,0,0,877,879,5,0,0,1,878,874,1,0,0,0,878,877,
        1,0,0,0,879,891,1,0,0,0,880,881,5,45,0,0,881,882,5,45,0,0,882,888,
        1,0,0,0,883,885,5,13,0,0,884,883,1,0,0,0,884,885,1,0,0,0,885,886,
        1,0,0,0,886,889,5,10,0,0,887,889,5,0,0,1,888,884,1,0,0,0,888,887,
        1,0,0,0,889,891,1,0,0,0,890,865,1,0,0,0,890,880,1,0,0,0,891,892,
        1,0,0,0,892,893,6,2,0,0,893,6,1,0,0,0,894,895,5,65,0,0,895,896,5,
        68,0,0,896,897,5,68,0,0,897,8,1,0,0,0,898,899,5,65,0,0,899,900,5,
        68,0,0,900,901,5,77,0,0,901,902,5,73,0,0,902,903,5,78,0,0,903,10,
        1,0,0,0,904,905,5,65,0,0,905,906,5,70,0,0,906,907,5,84,0,0,907,908,
        5,69,0,0,908,909,5,82,0,0,909,12,1,0,0,0,910,911,5,65,0,0,911,912,
        5,78,0,0,912,913,5,65,0,0,913,914,5,76,0,0,914,915,5,89,0,0,915,
        916,5,90,0,0,916,917,5,69,0,0,917,14,1,0,0,0,918,919,5,65,0,0,919,
        920,5,83,0,0,920,921,5,67,0,0,921,16,1,0,0,0,922,923,5,66,0,0,923,
        924,5,69,0,0,924,925,5,70,0,0,925,926,5,79,0,0,926,927,5,82,0,0,
        927,928,5,69,0,0,928,18,1,0,0,0,929,930,5,66,0,0,930,931,5,89,0,
        0,931,932,5,84,0,0,932,933,5,69,0,0,933,934,5,83,0,0,934,20,1,0,
        0,0,935,936,5,67,0,0,936,937,5,65,0,0,937,938,5,83,0,0,938,939,5,
        67,0,0,939,940,5,65,0,0,940,941,5,68,0,0,941,942,5,69,0,0,942,22,
        1,0,0,0,943,944,5,67,0,0,944,945,5,65,0,0,945,946,5,84,0,0,946,947,
        5,65,0,0,947,948,5,76,0,0,948,949,5,79,0,0,949,950,5,71,0,0,950,
        24,1,0,0,0,951,952,5,67,0,0,952,953,5,65,0,0,953,954,5,84,0,0,954,
        955,5,65,0,0,955,956,5,76,0,0,956,957,5,79,0,0,957,958,5,71,0,0,
        958,959,5,83,0,0,959,26,1,0,0,0,960,961,5,67,0,0,961,962,5,69,0,
        0,962,963,5,78,0,0,963,964,5,84,0,0,964,965,5,85,0,0,965,966,5,82,
        0,0,966,967,5,89,0,0,967,28,1,0,0,0,968,969,5,67,0,0,969,970,5,72,
        0,0,970,971,5,65,0,0,971,972,5,73,0,0,972,973,5,78,0,0,973,30,1,
        0,0,0,974,975,5,67,0,0,975,976,5,72,0,0,976,977,5,65,0,0,977,978,
        5,78,0,0,978,979,5,71,0,0,979,980,5,69,0,0,980,981,5,76,0,0,981,
        982,5,79,0,0,982,983,5,71,0,0,983,984,5,95,0,0,984,985,5,77,0,0,
        985,986,5,79,0,0,986,987,5,68,0,0,987,988,5,69,0,0,988,32,1,0,0,
        0,989,990,5,67,0,0,990,991,5,72,0,0,991,992,5,65,0,0,992,993,5,82,
        0,0,993,994,5,65,0,0,994,995,5,67,0,0,995,996,5,84,0,0,996,997,5,
        69,0,0,997,998,5,82,0,0,998,999,5,83,0,0,999,34,1,0,0,0,1000,1001,
        5,67,0,0,1001,1002,5,79,0,0,1002,1003,5,77,0,0,1003,1004,5,77,0,
        0,1004,1005,5,69,0,0,1005,1006,5,78,0,0,1006,1007,5,84,0,0,1007,
        36,1,0,0,0,1008,1009,5,67,0,0,1009,1010,5,79,0,0,1010,1011,5,77,
        0,0,1011,1012,5,80,0,0,1012,1013,5,65,0,0,1013,1014,5,67,0,0,1014,
        1015,5,84,0,0,1015,38,1,0,0,0,1016,1017,5,67,0,0,1017,1018,5,79,
        0,0,1018,1019,5,76,0,0,1019,1020,5,85,0,0,1020,1021,5,77,0,0,1021,
        1022,5,78,0,0,1022,1023,5,83,0,0,1023,40,1,0,0,0,1024,1025,5,67,
        0,0,1025,1026,5,79,0,0,1026,1027,5,78,0,0,1027,1028,5,83,0,0,1028,
        1029,5,84,0,0,1029,1030,5,82,0,0,1030,1031,5,65,0,0,1031,1032,5,
        73,0,0,1032,1033,5,78,0,0,1033,1034,5,84,0,0,1034,1035,5,83,0,0,
        1035,42,1,0,0,0,1036,1037,5,67,0,0,1037,1038,5,79,0,0,1038,1039,
        5,78,0,0,1039,1040,5,83,0,0,1040,1041,5,84,0,0,1041,1042,5,82,0,
        0,1042,1043,5,85,0,0,1043,1044,5,67,0,0,1044,1045,5,84,0,0,1045,
        1046,5,79,0,0,1046,1047,5,82,0,0,1047,44,1,0,0,0,1048,1049,5,67,
        0,0,1049,1050,5,85,0,0,1050,1051,5,77,0,0,1051,1052,5,85,0,0,1052,
        1053,5,76,0,0,1053,1054,5,65,0,0,1054,1055,5,84,0,0,1055,1056,5,
        69,0,0,1056,46,1,0,0,0,1057,1058,5,68,0,0,1058,1059,5,65,0,0,1059,
        1060,5,84,0,0,1060,1061,5,65,0,0,1061,48,1,0,0,0,1062,1063,5,68,
        0,0,1063,1064,5,65,0,0,1064,1065,5,84,0,0,1065,1066,5,65,0,0,1066,
        1067,5,66,0,0,1067,1068,5,65,0,0,1068,1069,5,83,0,0,1069,1070,5,
        69,0,0,1070,50,1,0,0,0,1071,1072,5,68,0,0,1072,1073,5,65,0,0,1073,
        1074,5,84,0,0,1074,1075,5,65,0,0,1075,1076,5,66,0,0,1076,1077,5,
        65,0,0,1077,1078,5,83,0,0,1078,1079,5,69,0,0,1079,1080,5,83,0,0,
        1080,52,1,0,0,0,1081,1082,5,68,0,0,1082,1083,5,65,0,0,1083,1084,
        5,89,0,0,1084,1085,5,83,0,0,1085,54,1,0,0,0,1086,1087,5,68,0,0,1087,
        1088,5,69,0,0,1088,1089,5,67,0,0,1089,1090,5,65,0,0,1090,1091,5,
        68,0,0,1091,1092,5,69,0,0,1092,56,1,0,0,0,1093,1094,5,68,0,0,1094,
        1095,5,69,0,0,1095,1096,5,70,0,0,1096,1097,5,73,0,0,1097,1098,5,
        78,0,0,1098,1099,5,69,0,0,1099,1100,5,68,0,0,1100,58,1,0,0,0,1101,
        1102,5,68,0,0,1102,1103,5,69,0,0,1103,1104,5,83,0,0,1104,1105,5,
        67,0,0,1105,60,1,0,0,0,1106,1107,5,68,0,0,1107,1108,5,69,0,0,1108,
        1109,5,83,0,0,1109,1110,5,67,0,0,1110,1111,5,82,0,0,1111,1112,5,
        73,0,0,1112,1113,5,80,0,0,1113,1114,5,84,0,0,1114,1115,5,79,0,0,
        1115,1116,5,82,0,0,1116,62,1,0,0,0,1117,1118,5,68,0,0,1118,1119,
        5,73,0,0,1119,1120,5,86,0,0,1120,64,1,0,0,0,1121,1122,5,69,0,0,1122,
        1123,5,78,0,0,1123,1124,5,67,0,0,1124,1125,5,79,0,0,1125,1126,5,
        68,0,0,1126,1127,5,73,0,0,1127,1128,5,78,0,0,1128,1129,5,71,0,0,
        1129,66,1,0,0,0,1130,1131,5,69,0,0,1131,1132,5,78,0,0,1132,1133,
        5,70,0,0,1133,1134,5,79,0,0,1134,1135,5,82,0,0,1135,1136,5,67,0,
        0,1136,1137,5,69,0,0,1137,1138,5,68,0,0,1138,68,1,0,0,0,1139,1140,
        5,69,0,0,1140,1141,5,78,0,0,1141,1142,5,71,0,0,1142,1143,5,73,0,
        0,1143,1144,5,78,0,0,1144,1145,5,69,0,0,1145,70,1,0,0,0,1146,1147,
        5,69,0,0,1147,1148,5,80,0,0,1148,1149,5,79,0,0,1149,1150,5,67,0,
        0,1150,1151,5,72,0,0,1151,72,1,0,0,0,1152,1153,5,69,0,0,1153,1154,
        5,82,0,0,1154,1155,5,82,0,0,1155,1156,5,79,0,0,1156,1157,5,82,0,
        0,1157,74,1,0,0,0,1158,1159,5,69,0,0,1159,1160,5,83,0,0,1160,1161,
        5,84,0,0,1161,1162,5,73,0,0,1162,1163,5,77,0,0,1163,1164,5,65,0,
        0,1164,1165,5,84,0,0,1165,1166,5,69,0,0,1166,1167,5,68,0,0,1167,
        1168,5,95,0,0,1168,1169,5,67,0,0,1169,1170,5,79,0,0,1170,1171,5,
        83,0,0,1171,1172,5,84,0,0,1172,76,1,0,0,0,1173,1174,5,69,0,0,1174,
        1175,5,88,0,0,1175,1176,5,67,0,0,1176,1177,5,69,0,0,1177,1178,5,
        80,0,0,1178,1179,5,84,0,0,1179,1180,5,73,0,0,1180,1181,5,79,0,0,
        1181,1182,5,78,0,0,1182,78,1,0,0,0,1183,1184,5,69,0,0,1184,1185,
        5,88,0,0,1185,1186,5,67,0,0,1186,1187,5,76,0,0,1187,1188,5,85,0,
        0,1188,1189,5,68,0,0,1189,1190,5,69,0,0,1190,80,1,0,0,0,1191,1192,
        5,69,0,0,1192,1193,5,88,0,0,1193,1194,5,67,0,0,1194,1195,5,76,0,
        0,1195,1196,5,85,0,0,1196,1197,5,68,0,0,1197,1198,5,73,0,0,1198,
        1199,5,78,0,0,1199,1200,5,71,0,0,1200,82,1,0,0,0,1201,1202,5,69,
        0,0,1202,1203,5,88,0,0,1203,1204,5,84,0,0,1204,1205,5,69,0,0,1205,
        1206,5,78,0,0,1206,1207,5,68,0,0,1207,1208,5,69,0,0,1208,1209,5,
        68,0,0,1209,84,1,0,0,0,1210,1211,5,70,0,0,1211,1212,5,73,0,0,1212,
        1213,5,76,0,0,1213,1214,5,69,0,0,1214,86,1,0,0,0,1215,1216,5,70,
        0,0,1216,1217,5,73,0,0,1217,1218,5,78,0,0,1218,1219,5,65,0,0,1219,
        1220,5,76,0,0,1220,88,1,0,0,0,1221,1222,5,70,0,0,1222,1223,5,73,
        0,0,1223,1224,5,82,0,0,1224,1225,5,83,0,0,1225,1226,5,84,0,0,1226,
        90,1,0,0,0,1227,1228,5,70,0,0,1228,1229,5,79,0,0,1229,1230,5,76,
        0,0,1230,1231,5,76,0,0,1231,1232,5,79,0,0,1232,1233,5,87,0,0,1233,
        1234,5,73,0,0,1234,1235,5,78,0,0,1235,1236,5,71,0,0,1236,92,1,0,
        0,0,1237,1238,5,70,0,0,1238,1239,5,79,0,0,1239,1240,5,82,0,0,1240,
        1241,5,77,0,0,1241,1242,5,65,0,0,1242,1243,5,84,0,0,1243,94,1,0,
        0,0,1244,1245,5,70,0,0,1245,1246,5,79,0,0,1246,1247,5,82,0,0,1247,
        1248,5,84,0,0,1248,1249,5,82,0,0,1249,1250,5,65,0,0,1250,1251,5,
        78,0,0,1251,96,1,0,0,0,1252,1253,5,70,0,0,1253,1254,5,79,0,0,1254,
        1255,5,85,0,0,1255,1256,5,78,0,0,1256,1257,5,68,0,0,1257,98,1,0,
        0,0,1258,1259,5,70,0,0,1259,1260,5,82,0,0,1260,1261,5,65,0,0,1261,
        1262,5,67,0,0,1262,1263,5,95,0,0,1263,1264,5,83,0,0,1264,1265,5,
        69,0,0,1265,1266,5,67,0,0,1266,1267,5,79,0,0,1267,1268,5,78,0,0,
        1268,1269,5,68,0,0,1269,100,1,0,0,0,1270,1271,5,70,0,0,1271,1272,
        5,85,0,0,1272,1273,5,78,0,0,1273,1274,5,67,0,0,1274,1275,5,84,0,
        0,1275,1276,5,73,0,0,1276,1277,5,79,0,0,1277,1278,5,78,0,0,1278,
        1279,5,83,0,0,1279,102,1,0,0,0,1280,1281,5,71,0,0,1281,1282,5,69,
        0,0,1282,1283,5,78,0,0,1283,1284,5,69,0,0,1284,1285,5,82,0,0,1285,
        1286,5,65,0,0,1286,1287,5,76,0,0,1287,104,1,0,0,0,1288,1289,5,71,
        0,0,1289,1290,5,69,0,0,1290,1291,5,78,0,0,1291,1292,5,69,0,0,1292,
        1293,5,82,0,0,1293,1294,5,65,0,0,1294,1295,5,84,0,0,1295,1296,5,
        69,0,0,1296,1297,5,68,0,0,1297,106,1,0,0,0,1298,1299,5,71,0,0,1299,
        1300,5,79,0,0,1300,108,1,0,0,0,1301,1302,5,71,0,0,1302,1303,5,79,
        0,0,1303,1304,5,84,0,0,1304,1305,5,79,0,0,1305,110,1,0,0,0,1306,
        1307,5,71,0,0,1307,1308,5,82,0,0,1308,1309,5,65,0,0,1309,1310,5,
        78,0,0,1310,1311,5,84,0,0,1311,1312,5,69,0,0,1312,1313,5,68,0,0,
        1313,112,1,0,0,0,1314,1315,5,72,0,0,1315,1316,5,79,0,0,1316,1317,
        5,80,0,0,1317,114,1,0,0,0,1318,1319,5,72,0,0,1319,1320,5,79,0,0,
        1320,1321,5,85,0,0,1321,1322,5,82,0,0,1322,1323,5,83,0,0,1323,116,
        1,0,0,0,1324,1325,5,73,0,0,1325,1326,5,70,0,0,1326,118,1,0,0,0,1327,
        1328,5,73,0,0,1328,1329,5,71,0,0,1329,1330,5,78,0,0,1330,1331,5,
        79,0,0,1331,1332,5,82,0,0,1332,1333,5,69,0,0,1333,120,1,0,0,0,1334,
        1335,5,73,0,0,1335,1336,5,78,0,0,1336,1337,5,67,0,0,1337,1338,5,
        82,0,0,1338,1339,5,69,0,0,1339,1340,5,77,0,0,1340,1341,5,69,0,0,
        1341,1342,5,78,0,0,1342,1343,5,84,0,0,1343,122,1,0,0,0,1344,1345,
        5,73,0,0,1345,1346,5,78,0,0,1346,1347,5,80,0,0,1347,1348,5,85,0,
        0,1348,1349,5,84,0,0,1349,124,1,0,0,0,1350,1351,5,73,0,0,1351,1352,
        5,78,0,0,1352,1353,5,86,0,0,1353,1354,5,79,0,0,1354,1355,5,75,0,
        0,1355,1356,5,69,0,0,1356,1357,5,82,0,0,1357,126,1,0,0,0,1358,1359,
        5,74,0,0,1359,1360,5,65,0,0,1360,1361,5,82,0,0,1361,128,1,0,0,0,
        1362,1363,5,74,0,0,1363,1364,5,65,0,0,1364,1365,5,82,0,0,1365,1366,
        5,83,0,0,1366,130,1,0,0,0,1367,1368,5,74,0,0,1368,1369,5,65,0,0,
        1369,1370,5,86,0,0,1370,1371,5,65,0,0,1371,132,1,0,0,0,1372,1373,
        5,74,0,0,1373,1374,5,83,0,0,1374,1375,5,79,0,0,1375,1376,5,78,0,
        0,1376,134,1,0,0,0,1377,1378,5,74,0,0,1378,1379,5,83,0,0,1379,1380,
        5,79,0,0,1380,1381,5,78,0,0,1381,1382,5,95,0,0,1382,1383,5,69,0,
        0,1383,1384,5,88,0,0,1384,1385,5,69,0,0,1385,1386,5,67,0,0,1386,
        1387,5,85,0,0,1387,1388,5,84,0,0,1388,1389,5,73,0,0,1389,1390,5,
        79,0,0,1390,1391,5,78,0,0,1391,1392,5,95,0,0,1392,1393,5,80,0,0,
        1393,1394,5,76,0,0,1394,1395,5,65,0,0,1395,1396,5,78,0,0,1396,136,
        1,0,0,0,1397,1398,5,75,0,0,1398,1399,5,69,0,0,1399,1400,5,89,0,0,
        1400,138,1,0,0,0,1401,1402,5,75,0,0,1402,1403,5,69,0,0,1403,1404,
        5,89,0,0,1404,1405,5,95,0,0,1405,1406,5,77,0,0,1406,1407,5,69,0,
        0,1407,1408,5,77,0,0,1408,1409,5,66,0,0,1409,1410,5,69,0,0,1410,
        1411,5,82,0,0,1411,140,1,0,0,0,1412,1413,5,75,0,0,1413,1414,5,69,
        0,0,1414,1415,5,89,0,0,1415,1416,5,95,0,0,1416,1417,5,84,0,0,1417,
        1418,5,89,0,0,1418,1419,5,80,0,0,1419,1420,5,69,0,0,1420,142,1,0,
        0,0,1421,1422,5,76,0,0,1422,1423,5,65,0,0,1423,1424,5,66,0,0,1424,
        1425,5,69,0,0,1425,1426,5,76,0,0,1426,144,1,0,0,0,1427,1428,5,76,
        0,0,1428,1429,5,65,0,0,1429,1430,5,83,0,0,1430,1431,5,84,0,0,1431,
        146,1,0,0,0,1432,1433,5,76,0,0,1433,1434,5,69,0,0,1434,1435,5,78,
        0,0,1435,1436,5,71,0,0,1436,1437,5,84,0,0,1437,1438,5,72,0,0,1438,
        148,1,0,0,0,1439,1440,5,76,0,0,1440,1441,5,69,0,0,1441,1442,5,86,
        0,0,1442,1443,5,69,0,0,1443,1444,5,76,0,0,1444,150,1,0,0,0,1445,
        1446,5,76,0,0,1446,1447,5,79,0,0,1447,1448,5,65,0,0,1448,1449,5,
        68,0,0,1449,152,1,0,0,0,1450,1451,5,77,0,0,1451,1452,5,65,0,0,1452,
        1453,5,80,0,0,1453,154,1,0,0,0,1454,1455,5,77,0,0,1455,1456,5,73,
        0,0,1456,1457,5,67,0,0,1457,1458,5,82,0,0,1458,1459,5,79,0,0,1459,
        1460,5,83,0,0,1460,1461,5,69,0,0,1461,1462,5,67,0,0,1462,1463,5,
        79,0,0,1463,1464,5,78,0,0,1464,1465,5,68,0,0,1465,156,1,0,0,0,1466,
        1467,5,77,0,0,1467,1468,5,73,0,0,1468,1469,5,76,0,0,1469,1470,5,
        76,0,0,1470,1471,5,69,0,0,1471,1472,5,78,0,0,1472,1473,5,78,0,0,
        1473,1474,5,73,0,0,1474,1475,5,85,0,0,1475,1476,5,77,0,0,1476,158,
        1,0,0,0,1477,1478,5,77,0,0,1478,1479,5,73,0,0,1479,1480,5,76,0,0,
        1480,1481,5,76,0,0,1481,1482,5,73,0,0,1482,1483,5,83,0,0,1483,1484,
        5,69,0,0,1484,1485,5,67,0,0,1485,1486,5,79,0,0,1486,1487,5,78,0,
        0,1487,1488,5,68,0,0,1488,160,1,0,0,0,1489,1490,5,77,0,0,1490,1491,
        5,73,0,0,1491,1492,5,78,0,0,1492,1493,5,85,0,0,1493,1494,5,84,0,
        0,1494,1495,5,69,0,0,1495,1496,5,83,0,0,1496,162,1,0,0,0,1497,1498,
        5,77,0,0,1498,1499,5,73,0,0,1499,1500,5,78,0,0,1500,1501,5,86,0,
        0,1501,1502,5,65,0,0,1502,1503,5,76,0,0,1503,1504,5,85,0,0,1504,
        1505,5,69,0,0,1505,164,1,0,0,0,1506,1507,5,77,0,0,1507,1508,5,79,
        0,0,1508,1509,5,68,0,0,1509,1510,5,73,0,0,1510,1511,5,70,0,0,1511,
        1512,5,89,0,0,1512,166,1,0,0,0,1513,1514,5,77,0,0,1514,1515,5,79,
        0,0,1515,1516,5,68,0,0,1516,1517,5,85,0,0,1517,1518,5,76,0,0,1518,
        1519,5,69,0,0,1519,1520,5,83,0,0,1520,168,1,0,0,0,1521,1522,5,77,
        0,0,1522,1523,5,79,0,0,1523,1524,5,78,0,0,1524,1525,5,84,0,0,1525,
        1526,5,72,0,0,1526,1527,5,83,0,0,1527,170,1,0,0,0,1528,1529,5,78,
        0,0,1529,1530,5,65,0,0,1530,1531,5,78,0,0,1531,1532,5,79,0,0,1532,
        1533,5,83,0,0,1533,1534,5,69,0,0,1534,1535,5,67,0,0,1535,1536,5,
        79,0,0,1536,1537,5,78,0,0,1537,1538,5,68,0,0,1538,172,1,0,0,0,1539,
        1540,5,78,0,0,1540,1541,5,85,0,0,1541,1542,5,76,0,0,1542,1543,5,
        76,0,0,1543,1544,5,83,0,0,1544,174,1,0,0,0,1545,1546,5,78,0,0,1546,
        1547,5,85,0,0,1547,1548,5,77,0,0,1548,1549,5,66,0,0,1549,1550,5,
        69,0,0,1550,1551,5,82,0,0,1551,176,1,0,0,0,1552,1553,5,79,0,0,1553,
        1554,5,80,0,0,1554,1555,5,84,0,0,1555,1556,5,73,0,0,1556,1557,5,
        79,0,0,1557,1558,5,78,0,0,1558,178,1,0,0,0,1559,1560,5,79,0,0,1560,
        1561,5,80,0,0,1561,1562,5,84,0,0,1562,1563,5,73,0,0,1563,1564,5,
        79,0,0,1564,1565,5,78,0,0,1565,1566,5,83,0,0,1566,180,1,0,0,0,1567,
        1568,5,79,0,0,1568,1569,5,82,0,0,1569,1570,5,68,0,0,1570,1571,5,
        69,0,0,1571,1572,5,82,0,0,1572,1573,5,73,0,0,1573,1574,5,78,0,0,
        1574,1575,5,71,0,0,1575,182,1,0,0,0,1576,1577,5,79,0,0,1577,1578,
        5,85,0,0,1578,1579,5,84,0,0,1579,1580,5,80,0,0,1580,1581,5,85,0,
        0,1581,1582,5,84,0,0,1582,184,1,0,0,0,1583,1584,5,79,0,0,1584,1585,
        5,86,0,0,1585,1586,5,69,0,0,1586,1587,5,82,0,0,1587,1588,5,87,0,
        0,1588,1589,5,82,0,0,1589,1590,5,73,0,0,1590,1591,5,84,0,0,1591,
        1592,5,69,0,0,1592,186,1,0,0,0,1593,1594,5,79,0,0,1594,1595,5,86,
        0,0,1595,1596,5,69,0,0,1596,1597,5,82,0,0,1597,1598,5,87,0,0,1598,
        1599,5,82,0,0,1599,1600,5,73,0,0,1600,1601,5,84,0,0,1601,1602,5,
        73,0,0,1602,1603,5,78,0,0,1603,1604,5,71,0,0,1604,188,1,0,0,0,1605,
        1606,5,80,0,0,1606,1607,5,65,0,0,1607,1608,5,82,0,0,1608,1609,5,
        84,0,0,1609,1610,5,73,0,0,1610,1611,5,84,0,0,1611,1612,5,73,0,0,
        1612,1613,5,79,0,0,1613,1614,5,78,0,0,1614,1615,5,69,0,0,1615,1616,
        5,68,0,0,1616,190,1,0,0,0,1617,1618,5,80,0,0,1618,1619,5,65,0,0,
        1619,1620,5,82,0,0,1620,1621,5,84,0,0,1621,1622,5,73,0,0,1622,1623,
        5,84,0,0,1623,1624,5,73,0,0,1624,1625,5,79,0,0,1625,1626,5,78,0,
        0,1626,1627,5,83,0,0,1627,192,1,0,0,0,1628,1629,5,80,0,0,1629,1630,
        5,65,0,0,1630,1631,5,83,0,0,1631,1632,5,83,0,0,1632,1633,5,73,0,
        0,1633,1634,5,78,0,0,1634,1635,5,71,0,0,1635,194,1,0,0,0,1636,1637,
        5,80,0,0,1637,1638,5,65,0,0,1638,1639,5,83,0,0,1639,1640,5,84,0,
        0,1640,196,1,0,0,0,1641,1642,5,80,0,0,1642,1643,5,65,0,0,1643,1644,
        5,84,0,0,1644,1645,5,72,0,0,1645,198,1,0,0,0,1646,1647,5,80,0,0,
        1647,1648,5,76,0,0,1648,1649,5,65,0,0,1649,1650,5,67,0,0,1650,1651,
        5,73,0,0,1651,1652,5,78,0,0,1652,1653,5,71,0,0,1653,200,1,0,0,0,
        1654,1655,5,80,0,0,1655,1656,5,76,0,0,1656,1657,5,65,0,0,1657,1658,
        5,78,0,0,1658,202,1,0,0,0,1659,1660,5,80,0,0,1660,1661,5,82,0,0,
        1661,1662,5,69,0,0,1662,1663,5,67,0,0,1663,1664,5,69,0,0,1664,1665,
        5,68,0,0,1665,1666,5,73,0,0,1666,1667,5,78,0,0,1667,1668,5,71,0,
        0,1668,204,1,0,0,0,1669,1670,5,80,0,0,1670,1671,5,82,0,0,1671,1672,
        5,69,0,0,1672,1673,5,83,0,0,1673,1674,5,69,0,0,1674,1675,5,82,0,
        0,1675,1676,5,86,0,0,1676,1677,5,69,0,0,1677,206,1,0,0,0,1678,1679,
        5,80,0,0,1679,1680,5,82,0,0,1680,1681,5,73,0,0,1681,1682,5,79,0,
        0,1682,1683,5,82,0,0,1683,208,1,0,0,0,1684,1685,5,80,0,0,1685,1686,
        5,82,0,0,1686,1687,5,73,0,0,1687,1688,5,86,0,0,1688,1689,5,73,0,
        0,1689,1690,5,76,0,0,1690,1691,5,69,0,0,1691,1692,5,71,0,0,1692,
        1693,5,69,0,0,1693,1694,5,83,0,0,1694,210,1,0,0,0,1695,1696,5,80,
        0,0,1696,1697,5,85,0,0,1697,1698,5,66,0,0,1698,1699,5,76,0,0,1699,
        1700,5,73,0,0,1700,1701,5,67,0,0,1701,212,1,0,0,0,1702,1703,5,80,
        0,0,1703,1704,5,89,0,0,1704,1705,5,84,0,0,1705,1706,5,72,0,0,1706,
        1707,5,79,0,0,1707,1708,5,78,0,0,1708,214,1,0,0,0,1709,1710,5,80,
        0,0,1710,1711,5,89,0,0,1711,1712,5,84,0,0,1712,1713,5,72,0,0,1713,
        1714,5,79,0,0,1714,1715,5,78,0,0,1715,1716,5,95,0,0,1716,1717,5,
        70,0,0,1717,1718,5,73,0,0,1718,1719,5,76,0,0,1719,1720,5,69,0,0,
        1720,1721,5,83,0,0,1721,216,1,0,0,0,1722,1723,5,80,0,0,1723,1724,
        5,89,0,0,1724,1725,5,84,0,0,1725,1726,5,72,0,0,1726,1727,5,79,0,
        0,1727,1728,5,78,0,0,1728,1729,5,95,0,0,1729,1730,5,82,0,0,1730,
        1731,5,69,0,0,1731,1732,5,81,0,0,1732,1733,5,85,0,0,1733,1734,5,
        73,0,0,1734,1735,5,82,0,0,1735,1736,5,69,0,0,1736,1737,5,77,0,0,
        1737,1738,5,69,0,0,1738,1739,5,78,0,0,1739,1740,5,84,0,0,1740,1741,
        5,83,0,0,1741,218,1,0,0,0,1742,1743,5,80,0,0,1743,1744,5,89,0,0,
        1744,1745,5,84,0,0,1745,1746,5,72,0,0,1746,1747,5,79,0,0,1747,1748,
        5,78,0,0,1748,1749,5,95,0,0,1749,1750,5,68,0,0,1750,1751,5,69,0,
        0,1751,1752,5,80,0,0,1752,1753,5,69,0,0,1753,1754,5,78,0,0,1754,
        1755,5,68,0,0,1755,1756,5,69,0,0,1756,1757,5,78,0,0,1757,1758,5,
        67,0,0,1758,1759,5,73,0,0,1759,1760,5,69,0,0,1760,1761,5,83,0,0,
        1761,220,1,0,0,0,1762,1763,5,80,0,0,1763,1764,5,89,0,0,1764,1765,
        5,84,0,0,1765,1766,5,72,0,0,1766,1767,5,79,0,0,1767,1768,5,78,0,
        0,1768,1769,5,95,0,0,1769,1770,5,74,0,0,1770,1771,5,65,0,0,1771,
        1772,5,82,0,0,1772,222,1,0,0,0,1773,1774,5,80,0,0,1774,1775,5,89,
        0,0,1775,1776,5,84,0,0,1776,1777,5,72,0,0,1777,1778,5,79,0,0,1778,
        1779,5,78,0,0,1779,1780,5,95,0,0,1780,1781,5,65,0,0,1781,1782,5,
        82,0,0,1782,1783,5,67,0,0,1783,1784,5,72,0,0,1784,1785,5,73,0,0,
        1785,1786,5,86,0,0,1786,1787,5,69,0,0,1787,1788,5,83,0,0,1788,224,
        1,0,0,0,1789,1790,5,80,0,0,1790,1791,5,89,0,0,1791,1792,5,84,0,0,
        1792,1793,5,72,0,0,1793,1794,5,79,0,0,1794,1795,5,78,0,0,1795,1796,
        5,95,0,0,1796,1797,5,80,0,0,1797,1798,5,65,0,0,1798,1799,5,82,0,
        0,1799,1800,5,65,0,0,1800,1801,5,77,0,0,1801,1802,5,69,0,0,1802,
        1803,5,84,0,0,1803,1804,5,69,0,0,1804,1805,5,82,0,0,1805,226,1,0,
        0,0,1806,1807,5,81,0,0,1807,1808,5,85,0,0,1808,1809,5,65,0,0,1809,
        1810,5,82,0,0,1810,1811,5,84,0,0,1811,1812,5,69,0,0,1812,1813,5,
        82,0,0,1813,228,1,0,0,0,1814,1815,5,82,0,0,1815,1816,5,65,0,0,1816,
        1817,5,87,0,0,1817,230,1,0,0,0,1818,1819,5,82,0,0,1819,1820,5,69,
        0,0,1820,1821,5,65,0,0,1821,1822,5,68,0,0,1822,232,1,0,0,0,1823,
        1824,5,82,0,0,1824,1825,5,69,0,0,1825,1826,5,76,0,0,1826,1827,5,
        65,0,0,1827,1828,5,84,0,0,1828,1829,5,73,0,0,1829,1830,5,86,0,0,
        1830,1831,5,69,0,0,1831,234,1,0,0,0,1832,1833,5,82,0,0,1833,1834,
        5,69,0,0,1834,1835,5,77,0,0,1835,1836,5,79,0,0,1836,1837,5,86,0,
        0,1837,1838,5,69,0,0,1838,236,1,0,0,0,1839,1840,5,82,0,0,1840,1841,
        5,69,0,0,1841,1842,5,78,0,0,1842,1843,5,65,0,0,1843,1844,5,77,0,
        0,1844,1845,5,69,0,0,1845,238,1,0,0,0,1846,1847,5,82,0,0,1847,1848,
        5,69,0,0,1848,1849,5,80,0,0,1849,1850,5,76,0,0,1850,1851,5,65,0,
        0,1851,1852,5,67,0,0,1852,1853,5,69,0,0,1853,240,1,0,0,0,1854,1855,
        5,82,0,0,1855,1856,5,69,0,0,1856,1857,5,83,0,0,1857,1858,5,80,0,
        0,1858,1859,5,69,0,0,1859,1860,5,67,0,0,1860,1861,5,84,0,0,1861,
        242,1,0,0,0,1862,1863,5,82,0,0,1863,1864,5,69,0,0,1864,1865,5,83,
        0,0,1865,1866,5,84,0,0,1866,1867,5,65,0,0,1867,1868,5,82,0,0,1868,
        1869,5,84,0,0,1869,244,1,0,0,0,1870,1871,5,82,0,0,1871,1872,5,69,
        0,0,1872,1873,5,83,0,0,1873,1874,5,84,0,0,1874,1875,5,82,0,0,1875,
        1876,5,73,0,0,1876,1877,5,67,0,0,1877,1878,5,84,0,0,1878,246,1,0,
        0,0,1879,1880,5,82,0,0,1880,1881,5,79,0,0,1881,1882,5,76,0,0,1882,
        1883,5,69,0,0,1883,248,1,0,0,0,1884,1885,5,82,0,0,1885,1886,5,79,
        0,0,1886,1887,5,87,0,0,1887,1888,5,95,0,0,1888,1889,5,67,0,0,1889,
        1890,5,79,0,0,1890,1891,5,85,0,0,1891,1892,5,78,0,0,1892,1893,5,
        84,0,0,1893,250,1,0,0,0,1894,1895,5,83,0,0,1895,1896,5,67,0,0,1896,
        1897,5,65,0,0,1897,1898,5,76,0,0,1898,1899,5,65,0,0,1899,252,1,0,
        0,0,1900,1901,5,83,0,0,1901,1902,5,67,0,0,1902,1903,5,65,0,0,1903,
        1904,5,76,0,0,1904,1905,5,65,0,0,1905,1906,5,82,0,0,1906,254,1,0,
        0,0,1907,1908,5,83,0,0,1908,1909,5,67,0,0,1909,1910,5,65,0,0,1910,
        1911,5,76,0,0,1911,1912,5,69,0,0,1912,256,1,0,0,0,1913,1914,5,83,
        0,0,1914,1915,5,67,0,0,1915,1916,5,72,0,0,1916,1917,5,69,0,0,1917,
        1918,5,77,0,0,1918,1919,5,65,0,0,1919,258,1,0,0,0,1920,1921,5,83,
        0,0,1921,1922,5,69,0,0,1922,1923,5,67,0,0,1923,1924,5,79,0,0,1924,
        1925,5,78,0,0,1925,1926,5,68,0,0,1926,1927,5,83,0,0,1927,260,1,0,
        0,0,1928,1929,5,83,0,0,1929,1930,5,69,0,0,1930,1931,5,67,0,0,1931,
        1932,5,84,0,0,1932,1933,5,73,0,0,1933,1934,5,79,0,0,1934,1935,5,
        78,0,0,1935,262,1,0,0,0,1936,1937,5,83,0,0,1937,1938,5,69,0,0,1938,
        1939,5,67,0,0,1939,1940,5,85,0,0,1940,1941,5,82,0,0,1941,1942,5,
        73,0,0,1942,1943,5,84,0,0,1943,1944,5,89,0,0,1944,264,1,0,0,0,1945,
        1946,5,83,0,0,1946,1947,5,69,0,0,1947,1948,5,76,0,0,1948,1949,5,
        70,0,0,1949,266,1,0,0,0,1950,1951,5,83,0,0,1951,1952,5,69,0,0,1952,
        1953,5,82,0,0,1953,1954,5,86,0,0,1954,1955,5,69,0,0,1955,1956,5,
        82,0,0,1956,268,1,0,0,0,1957,1958,5,83,0,0,1958,1959,5,69,0,0,1959,
        1960,5,82,0,0,1960,1961,5,86,0,0,1961,1962,5,69,0,0,1962,1963,5,
        82,0,0,1963,1964,5,95,0,0,1964,1965,5,78,0,0,1965,1966,5,65,0,0,
        1966,1967,5,77,0,0,1967,1968,5,69,0,0,1968,270,1,0,0,0,1969,1970,
        5,83,0,0,1970,1971,5,69,0,0,1971,1972,5,83,0,0,1972,1973,5,83,0,
        0,1973,1974,5,73,0,0,1974,1975,5,79,0,0,1975,1976,5,78,0,0,1976,
        272,1,0,0,0,1977,1978,5,83,0,0,1978,1979,5,69,0,0,1979,1980,5,84,
        0,0,1980,1981,5,83,0,0,1981,274,1,0,0,0,1982,1983,5,83,0,0,1983,
        1984,5,73,0,0,1984,1985,5,77,0,0,1985,1986,5,80,0,0,1986,1987,5,
        76,0,0,1987,1988,5,69,0,0,1988,276,1,0,0,0,1989,1990,5,83,0,0,1990,
        1991,5,73,0,0,1991,1992,5,90,0,0,1992,1993,5,69,0,0,1993,278,1,0,
        0,0,1994,1995,5,83,0,0,1995,1996,5,76,0,0,1996,1997,5,73,0,0,1997,
        1998,5,68,0,0,1998,1999,5,69,0,0,1999,280,1,0,0,0,2000,2001,5,83,
        0,0,2001,2002,5,79,0,0,2002,2003,5,85,0,0,2003,2004,5,82,0,0,2004,
        2005,5,67,0,0,2005,2006,5,69,0,0,2006,282,1,0,0,0,2007,2008,5,83,
        0,0,2008,2009,5,80,0,0,2009,2010,5,65,0,0,2010,2011,5,67,0,0,2011,
        2012,5,69,0,0,2012,284,1,0,0,0,2013,2014,5,83,0,0,2014,2015,5,84,
        0,0,2015,2016,5,65,0,0,2016,2017,5,84,0,0,2017,2018,5,69,0,0,2018,
        286,1,0,0,0,2019,2020,5,83,0,0,2020,2021,5,84,0,0,2021,2022,5,65,
        0,0,2022,2023,5,84,0,0,2023,2024,5,69,0,0,2024,2025,5,77,0,0,2025,
        2026,5,69,0,0,2026,2027,5,78,0,0,2027,2028,5,84,0,0,2028,288,1,0,
        0,0,2029,2030,5,83,0,0,2030,2031,5,84,0,0,2031,2032,5,69,0,0,2032,
        2033,5,80,0,0,2033,290,1,0,0,0,2034,2035,5,83,0,0,2035,2036,5,84,
        0,0,2036,2037,5,82,0,0,2037,2038,5,73,0,0,2038,2039,5,78,0,0,2039,
        2040,5,71,0,0,2040,292,1,0,0,0,2041,2042,5,83,0,0,2042,2043,5,84,
        0,0,2043,2044,5,82,0,0,2044,2045,5,85,0,0,2045,2046,5,67,0,0,2046,
        2047,5,84,0,0,2047,2048,5,85,0,0,2048,2049,5,82,0,0,2049,2050,5,
        69,0,0,2050,294,1,0,0,0,2051,2052,5,83,0,0,2052,2053,5,84,0,0,2053,
        2054,5,89,0,0,2054,2055,5,76,0,0,2055,2056,5,69,0,0,2056,296,1,0,
        0,0,2057,2058,5,84,0,0,2058,2059,5,65,0,0,2059,2060,5,66,0,0,2060,
        2061,5,76,0,0,2061,2062,5,69,0,0,2062,2063,5,83,0,0,2063,298,1,0,
        0,0,2064,2065,5,84,0,0,2065,2066,5,69,0,0,2066,2067,5,77,0,0,2067,
        2068,5,80,0,0,2068,2069,5,79,0,0,2069,2070,5,82,0,0,2070,2071,5,
        65,0,0,2071,2072,5,82,0,0,2072,2073,5,89,0,0,2073,300,1,0,0,0,2074,
        2075,5,84,0,0,2075,2076,5,73,0,0,2076,2077,5,77,0,0,2077,2078,5,
        69,0,0,2078,2079,5,67,0,0,2079,2080,5,79,0,0,2080,2081,5,76,0,0,
        2081,302,1,0,0,0,2082,2083,5,84,0,0,2083,2084,5,73,0,0,2084,2085,
        5,77,0,0,2085,2086,5,69,0,0,2086,2087,5,83,0,0,2087,2088,5,84,0,
        0,2088,2089,5,65,0,0,2089,2090,5,77,0,0,2090,2091,5,80,0,0,2091,
        2092,5,95,0,0,2092,2093,5,76,0,0,2093,2094,5,84,0,0,2094,2095,5,
        90,0,0,2095,304,1,0,0,0,2096,2097,5,84,0,0,2097,2098,5,73,0,0,2098,
        2099,5,77,0,0,2099,2100,5,69,0,0,2100,2101,5,83,0,0,2101,2102,5,
        84,0,0,2102,2103,5,65,0,0,2103,2104,5,77,0,0,2104,2105,5,80,0,0,
        2105,2106,5,65,0,0,2106,2107,5,68,0,0,2107,2108,5,68,0,0,2108,306,
        1,0,0,0,2109,2110,5,84,0,0,2110,2111,5,73,0,0,2111,2112,5,77,0,0,
        2112,2113,5,69,0,0,2113,2114,5,83,0,0,2114,2115,5,84,0,0,2115,2116,
        5,65,0,0,2116,2117,5,77,0,0,2117,2118,5,80,0,0,2118,2119,5,68,0,
        0,2119,2120,5,73,0,0,2120,2121,5,70,0,0,2121,2122,5,70,0,0,2122,
        308,1,0,0,0,2123,2124,5,84,0,0,2124,2125,5,82,0,0,2125,2126,5,65,
        0,0,2126,2127,5,78,0,0,2127,2128,5,83,0,0,2128,2129,5,70,0,0,2129,
        2130,5,79,0,0,2130,2131,5,82,0,0,2131,2132,5,77,0,0,2132,310,1,0,
        0,0,2133,2134,5,84,0,0,2134,2135,5,85,0,0,2135,2136,5,77,0,0,2136,
        2137,5,66,0,0,2137,2138,5,76,0,0,2138,2139,5,69,0,0,2139,312,1,0,
        0,0,2140,2141,5,84,0,0,2141,2142,5,89,0,0,2142,2143,5,80,0,0,2143,
        2144,5,69,0,0,2144,314,1,0,0,0,2145,2146,5,85,0,0,2146,2147,5,78,
        0,0,2147,2148,5,68,0,0,2148,2149,5,69,0,0,2149,2150,5,82,0,0,2150,
        316,1,0,0,0,2151,2152,5,85,0,0,2152,2153,5,78,0,0,2153,2154,5,76,
        0,0,2154,2155,5,79,0,0,2155,2156,5,65,0,0,2156,2157,5,68,0,0,2157,
        318,1,0,0,0,2158,2159,5,85,0,0,2159,2160,5,83,0,0,2160,2161,5,65,
        0,0,2161,2162,5,71,0,0,2162,2163,5,69,0,0,2163,320,1,0,0,0,2164,
        2165,5,85,0,0,2165,2166,5,83,0,0,2166,2167,5,69,0,0,2167,322,1,0,
        0,0,2168,2169,5,85,0,0,2169,2170,5,84,0,0,2170,2171,5,70,0,0,2171,
        2172,5,49,0,0,2172,2173,5,54,0,0,2173,324,1,0,0,0,2174,2175,5,85,
        0,0,2175,2176,5,84,0,0,2176,2177,5,70,0,0,2177,2178,5,51,0,0,2178,
        2179,5,50,0,0,2179,326,1,0,0,0,2180,2181,5,85,0,0,2181,2182,5,84,
        0,0,2182,2183,5,70,0,0,2183,2184,5,56,0,0,2184,328,1,0,0,0,2185,
        2186,5,86,0,0,2186,2187,5,69,0,0,2187,2188,5,82,0,0,2188,2189,5,
        83,0,0,2189,2190,5,73,0,0,2190,2191,5,79,0,0,2191,2192,5,78,0,0,
        2192,330,1,0,0,0,2193,2194,5,86,0,0,2194,2195,5,73,0,0,2195,2196,
        5,69,0,0,2196,2197,5,87,0,0,2197,332,1,0,0,0,2198,2199,5,86,0,0,
        2199,2200,5,73,0,0,2200,2201,5,69,0,0,2201,2202,5,87,0,0,2202,2203,
        5,83,0,0,2203,334,1,0,0,0,2204,2205,5,86,0,0,2205,2206,5,73,0,0,
        2206,2207,5,82,0,0,2207,2208,5,84,0,0,2208,2209,5,85,0,0,2209,2210,
        5,65,0,0,2210,2211,5,76,0,0,2211,336,1,0,0,0,2212,2213,5,87,0,0,
        2213,2214,5,65,0,0,2214,2215,5,84,0,0,2215,2216,5,69,0,0,2216,2217,
        5,82,0,0,2217,2218,5,77,0,0,2218,2219,5,65,0,0,2219,2220,5,82,0,
        0,2220,2221,5,75,0,0,2221,338,1,0,0,0,2222,2223,5,87,0,0,2223,2224,
        5,65,0,0,2224,2225,5,84,0,0,2225,2226,5,69,0,0,2226,2227,5,82,0,
        0,2227,2228,5,77,0,0,2228,2229,5,65,0,0,2229,2230,5,82,0,0,2230,
        2231,5,75,0,0,2231,2232,5,83,0,0,2232,340,1,0,0,0,2233,2234,5,87,
        0,0,2234,2235,5,69,0,0,2235,2236,5,69,0,0,2236,2237,5,75,0,0,2237,
        342,1,0,0,0,2238,2239,5,87,0,0,2239,2240,5,69,0,0,2240,2241,5,69,
        0,0,2241,2242,5,75,0,0,2242,2243,5,83,0,0,2243,344,1,0,0,0,2244,
        2245,5,87,0,0,2245,2246,5,79,0,0,2246,2247,5,82,0,0,2247,2248,5,
        75,0,0,2248,346,1,0,0,0,2249,2250,5,87,0,0,2250,2251,5,82,0,0,2251,
        2252,5,65,0,0,2252,2253,5,80,0,0,2253,2254,5,80,0,0,2254,2255,5,
        69,0,0,2255,2256,5,82,0,0,2256,348,1,0,0,0,2257,2258,5,89,0,0,2258,
        2259,5,69,0,0,2259,2260,5,65,0,0,2260,2261,5,82,0,0,2261,2262,5,
        83,0,0,2262,350,1,0,0,0,2263,2264,5,90,0,0,2264,2265,5,79,0,0,2265,
        2266,5,78,0,0,2266,2267,5,69,0,0,2267,352,1,0,0,0,2268,2269,5,65,
        0,0,2269,2270,5,66,0,0,2270,2271,5,83,0,0,2271,354,1,0,0,0,2272,
        2273,5,65,0,0,2273,2274,5,76,0,0,2274,2275,5,76,0,0,2275,356,1,0,
        0,0,2276,2277,5,65,0,0,2277,2278,5,76,0,0,2278,2279,5,76,0,0,2279,
        2280,5,79,0,0,2280,2281,5,87,0,0,2281,358,1,0,0,0,2282,2283,5,65,
        0,0,2283,2284,5,76,0,0,2284,2285,5,84,0,0,2285,2286,5,69,0,0,2286,
        2287,5,82,0,0,2287,360,1,0,0,0,2288,2289,5,65,0,0,2289,2290,5,78,
        0,0,2290,2291,5,68,0,0,2291,362,1,0,0,0,2292,2293,5,65,0,0,2293,
        2294,5,78,0,0,2294,2295,5,89,0,0,2295,364,1,0,0,0,2296,2297,5,65,
        0,0,2297,2298,5,82,0,0,2298,2299,5,69,0,0,2299,366,1,0,0,0,2300,
        2301,5,65,0,0,2301,2302,5,82,0,0,2302,2303,5,82,0,0,2303,2304,5,
        65,0,0,2304,2305,5,89,0,0,2305,368,1,0,0,0,2306,2307,5,65,0,0,2307,
        2308,5,83,0,0,2308,370,1,0,0,0,2309,2310,5,65,0,0,2310,2311,5,83,
        0,0,2311,2312,5,89,0,0,2312,2313,5,77,0,0,2313,2314,5,77,0,0,2314,
        2315,5,69,0,0,2315,2316,5,84,0,0,2316,2317,5,82,0,0,2317,2318,5,
        73,0,0,2318,2319,5,67,0,0,2319,372,1,0,0,0,2320,2321,5,65,0,0,2321,
        2322,5,84,0,0,2322,374,1,0,0,0,2323,2324,5,65,0,0,2324,2325,5,86,
        0,0,2325,2326,5,71,0,0,2326,376,1,0,0,0,2327,2328,5,66,0,0,2328,
        2329,5,69,0,0,2329,2330,5,71,0,0,2330,2331,5,73,0,0,2331,2332,5,
        78,0,0,2332,378,1,0,0,0,2333,2334,5,66,0,0,2334,2335,5,69,0,0,2335,
        2336,5,84,0,0,2336,2337,5,87,0,0,2337,2338,5,69,0,0,2338,2339,5,
        69,0,0,2339,2340,5,78,0,0,2340,380,1,0,0,0,2341,2342,5,66,0,0,2342,
        2343,5,73,0,0,2343,2344,5,71,0,0,2344,2345,5,73,0,0,2345,2346,5,
        78,0,0,2346,2347,5,84,0,0,2347,382,1,0,0,0,2348,2349,5,66,0,0,2349,
        2350,5,73,0,0,2350,2351,5,78,0,0,2351,2352,5,65,0,0,2352,2353,5,
        82,0,0,2353,2354,5,89,0,0,2354,384,1,0,0,0,2355,2356,5,66,0,0,2356,
        2357,5,73,0,0,2357,2358,5,84,0,0,2358,386,1,0,0,0,2359,2360,5,66,
        0,0,2360,2361,5,76,0,0,2361,2362,5,79,0,0,2362,2363,5,66,0,0,2363,
        388,1,0,0,0,2364,2365,5,66,0,0,2365,2366,5,79,0,0,2366,2367,5,79,
        0,0,2367,2368,5,76,0,0,2368,2369,5,69,0,0,2369,2370,5,65,0,0,2370,
        2371,5,78,0,0,2371,390,1,0,0,0,2372,2373,5,66,0,0,2373,2374,5,79,
        0,0,2374,2375,5,84,0,0,2375,2376,5,72,0,0,2376,392,1,0,0,0,2377,
        2378,5,66,0,0,2378,2379,5,89,0,0,2379,394,1,0,0,0,2380,2381,5,67,
        0,0,2381,2382,5,65,0,0,2382,2383,5,76,0,0,2383,2384,5,76,0,0,2384,
        396,1,0,0,0,2385,2386,5,67,0,0,2386,2387,5,65,0,0,2387,2388,5,76,
        0,0,2388,2389,5,76,0,0,2389,2390,5,69,0,0,2390,2391,5,68,0,0,2391,
        398,1,0,0,0,2392,2393,5,67,0,0,2393,2394,5,65,0,0,2394,2395,5,83,
        0,0,2395,2396,5,67,0,0,2396,2397,5,65,0,0,2397,2398,5,68,0,0,2398,
        2399,5,69,0,0,2399,2400,5,68,0,0,2400,400,1,0,0,0,2401,2402,5,67,
        0,0,2402,2403,5,65,0,0,2403,2404,5,83,0,0,2404,2405,5,69,0,0,2405,
        402,1,0,0,0,2406,2407,5,67,0,0,2407,2408,5,65,0,0,2408,2409,5,83,
        0,0,2409,2410,5,84,0,0,2410,404,1,0,0,0,2411,2412,5,67,0,0,2412,
        2413,5,69,0,0,2413,2414,5,73,0,0,2414,2415,5,76,0,0,2415,406,1,0,
        0,0,2416,2417,5,67,0,0,2417,2418,5,72,0,0,2418,2419,5,65,0,0,2419,
        2420,5,82,0,0,2420,408,1,0,0,0,2421,2422,5,67,0,0,2422,2423,5,72,
        0,0,2423,2424,5,65,0,0,2424,2425,5,82,0,0,2425,2426,5,65,0,0,2426,
        2427,5,67,0,0,2427,2428,5,84,0,0,2428,2429,5,69,0,0,2429,2430,5,
        82,0,0,2430,410,1,0,0,0,2431,2432,5,67,0,0,2432,2433,5,72,0,0,2433,
        2434,5,69,0,0,2434,2435,5,67,0,0,2435,2436,5,75,0,0,2436,412,1,0,
        0,0,2437,2438,5,67,0,0,2438,2439,5,76,0,0,2439,2440,5,79,0,0,2440,
        2441,5,66,0,0,2441,414,1,0,0,0,2442,2443,5,67,0,0,2443,2444,5,76,
        0,0,2444,2445,5,79,0,0,2445,2446,5,83,0,0,2446,2447,5,69,0,0,2447,
        416,1,0,0,0,2448,2449,5,67,0,0,2449,2450,5,79,0,0,2450,2451,5,65,
        0,0,2451,2452,5,76,0,0,2452,2453,5,69,0,0,2453,2454,5,83,0,0,2454,
        2455,5,67,0,0,2455,2456,5,69,0,0,2456,418,1,0,0,0,2457,2458,5,67,
        0,0,2458,2459,5,79,0,0,2459,2460,5,76,0,0,2460,2461,5,76,0,0,2461,
        2462,5,65,0,0,2462,2463,5,84,0,0,2463,2464,5,69,0,0,2464,420,1,0,
        0,0,2465,2466,5,67,0,0,2466,2467,5,79,0,0,2467,2468,5,76,0,0,2468,
        2469,5,76,0,0,2469,2470,5,69,0,0,2470,2471,5,67,0,0,2471,2472,5,
        84,0,0,2472,422,1,0,0,0,2473,2474,5,67,0,0,2474,2475,5,79,0,0,2475,
        2476,5,76,0,0,2476,2477,5,85,0,0,2477,2478,5,77,0,0,2478,2479,5,
        78,0,0,2479,424,1,0,0,0,2480,2481,5,67,0,0,2481,2482,5,79,0,0,2482,
        2483,5,77,0,0,2483,2484,5,77,0,0,2484,2485,5,73,0,0,2485,2486,5,
        84,0,0,2486,426,1,0,0,0,2487,2488,5,67,0,0,2488,2489,5,79,0,0,2489,
        2490,5,78,0,0,2490,2491,5,78,0,0,2491,2492,5,69,0,0,2492,2493,5,
        67,0,0,2493,2494,5,84,0,0,2494,428,1,0,0,0,2495,2496,5,67,0,0,2496,
        2497,5,79,0,0,2497,2498,5,78,0,0,2498,2499,5,83,0,0,2499,2500,5,
        84,0,0,2500,2501,5,82,0,0,2501,2502,5,65,0,0,2502,2503,5,73,0,0,
        2503,2504,5,78,0,0,2504,2505,5,84,0,0,2505,430,1,0,0,0,2506,2507,
        5,67,0,0,2507,2508,5,79,0,0,2508,2509,5,78,0,0,2509,2510,5,84,0,
        0,2510,2511,5,65,0,0,2511,2512,5,73,0,0,2512,2513,5,78,0,0,2513,
        2514,5,83,0,0,2514,432,1,0,0,0,2515,2516,5,67,0,0,2516,2517,5,79,
        0,0,2517,2518,5,78,0,0,2518,2519,5,86,0,0,2519,2520,5,69,0,0,2520,
        2521,5,82,0,0,2521,2522,5,84,0,0,2522,434,1,0,0,0,2523,2524,5,67,
        0,0,2524,2525,5,79,0,0,2525,2526,5,85,0,0,2526,2527,5,78,0,0,2527,
        2528,5,84,0,0,2528,436,1,0,0,0,2529,2530,5,67,0,0,2530,2531,5,82,
        0,0,2531,2532,5,69,0,0,2532,2533,5,65,0,0,2533,2534,5,84,0,0,2534,
        2535,5,69,0,0,2535,438,1,0,0,0,2536,2537,5,67,0,0,2537,2538,5,82,
        0,0,2538,2539,5,79,0,0,2539,2540,5,83,0,0,2540,2541,5,83,0,0,2541,
        440,1,0,0,0,2542,2543,5,67,0,0,2543,2544,5,85,0,0,2544,2545,5,66,
        0,0,2545,2546,5,69,0,0,2546,442,1,0,0,0,2547,2548,5,67,0,0,2548,
        2549,5,85,0,0,2549,2550,5,82,0,0,2550,2551,5,82,0,0,2551,2552,5,
        69,0,0,2552,2553,5,78,0,0,2553,2554,5,84,0,0,2554,444,1,0,0,0,2555,
        2556,5,67,0,0,2556,2557,5,85,0,0,2557,2558,5,82,0,0,2558,2559,5,
        83,0,0,2559,2560,5,79,0,0,2560,2561,5,82,0,0,2561,446,1,0,0,0,2562,
        2563,5,67,0,0,2563,2564,5,89,0,0,2564,2565,5,67,0,0,2565,2566,5,
        76,0,0,2566,2567,5,69,0,0,2567,448,1,0,0,0,2568,2569,5,68,0,0,2569,
        2570,5,65,0,0,2570,2571,5,84,0,0,2571,2572,5,69,0,0,2572,450,1,0,
        0,0,2573,2574,5,68,0,0,2574,2575,5,65,0,0,2575,2576,5,84,0,0,2576,
        2577,5,69,0,0,2577,2578,5,84,0,0,2578,2579,5,73,0,0,2579,2580,5,
        77,0,0,2580,2581,5,69,0,0,2581,452,1,0,0,0,2582,2583,5,68,0,0,2583,
        2584,5,65,0,0,2584,2585,5,89,0,0,2585,454,1,0,0,0,2586,2587,5,68,
        0,0,2587,2588,5,69,0,0,2588,2589,5,67,0,0,2589,456,1,0,0,0,2590,
        2591,5,68,0,0,2591,2592,5,69,0,0,2592,2593,5,67,0,0,2593,2594,5,
        73,0,0,2594,2595,5,77,0,0,2595,2596,5,65,0,0,2596,2597,5,76,0,0,
        2597,458,1,0,0,0,2598,2599,5,68,0,0,2599,2600,5,69,0,0,2600,2601,
        5,67,0,0,2601,2602,5,76,0,0,2602,2603,5,65,0,0,2603,2604,5,82,0,
        0,2604,2605,5,69,0,0,2605,460,1,0,0,0,2606,2607,5,68,0,0,2607,2608,
        5,69,0,0,2608,2609,5,70,0,0,2609,2610,5,65,0,0,2610,2611,5,85,0,
        0,2611,2612,5,76,0,0,2612,2613,5,84,0,0,2613,462,1,0,0,0,2614,2615,
        5,68,0,0,2615,2616,5,69,0,0,2616,2617,5,70,0,0,2617,2618,5,73,0,
        0,2618,2619,5,78,0,0,2619,2620,5,69,0,0,2620,464,1,0,0,0,2621,2622,
        5,68,0,0,2622,2623,5,69,0,0,2623,2624,5,76,0,0,2624,2625,5,69,0,
        0,2625,2626,5,84,0,0,2626,2627,5,69,0,0,2627,466,1,0,0,0,2628,2629,
        5,68,0,0,2629,2630,5,69,0,0,2630,2631,5,83,0,0,2631,2632,5,67,0,
        0,2632,2633,5,82,0,0,2633,2634,5,73,0,0,2634,2635,5,66,0,0,2635,
        2636,5,69,0,0,2636,468,1,0,0,0,2637,2638,5,68,0,0,2638,2639,5,73,
        0,0,2639,2640,5,83,0,0,2640,2641,5,84,0,0,2641,2642,5,73,0,0,2642,
        2643,5,78,0,0,2643,2644,5,67,0,0,2644,2645,5,84,0,0,2645,470,1,0,
        0,0,2646,2647,5,68,0,0,2647,2648,5,79,0,0,2648,2649,5,85,0,0,2649,
        2650,5,66,0,0,2650,2651,5,76,0,0,2651,2652,5,69,0,0,2652,472,1,0,
        0,0,2653,2654,5,68,0,0,2654,2655,5,82,0,0,2655,2656,5,79,0,0,2656,
        2657,5,80,0,0,2657,474,1,0,0,0,2658,2659,5,69,0,0,2659,2660,5,65,
        0,0,2660,2661,5,67,0,0,2661,2662,5,72,0,0,2662,476,1,0,0,0,2663,
        2664,5,69,0,0,2664,2665,5,76,0,0,2665,2666,5,83,0,0,2666,2667,5,
        69,0,0,2667,478,1,0,0,0,2668,2669,5,69,0,0,2669,2670,5,78,0,0,2670,
        2671,5,68,0,0,2671,480,1,0,0,0,2672,2673,5,69,0,0,2673,2674,5,81,
        0,0,2674,2675,5,85,0,0,2675,2676,5,65,0,0,2676,2677,5,76,0,0,2677,
        2678,5,83,0,0,2678,482,1,0,0,0,2679,2680,5,69,0,0,2680,2681,5,83,
        0,0,2681,2682,5,67,0,0,2682,2683,5,65,0,0,2683,2684,5,80,0,0,2684,
        2685,5,69,0,0,2685,484,1,0,0,0,2686,2687,5,69,0,0,2687,2688,5,88,
        0,0,2688,2689,5,67,0,0,2689,2690,5,69,0,0,2690,2691,5,80,0,0,2691,
        2692,5,84,0,0,2692,486,1,0,0,0,2693,2694,5,69,0,0,2694,2695,5,88,
        0,0,2695,2696,5,69,0,0,2696,2697,5,67,0,0,2697,2698,5,85,0,0,2698,
        2699,5,84,0,0,2699,2700,5,69,0,0,2700,488,1,0,0,0,2701,2702,5,69,
        0,0,2702,2703,5,88,0,0,2703,2704,5,73,0,0,2704,2705,5,83,0,0,2705,
        2706,5,84,0,0,2706,2707,5,83,0,0,2707,490,1,0,0,0,2708,2709,5,69,
        0,0,2709,2710,5,88,0,0,2710,2711,5,80,0,0,2711,2712,5,76,0,0,2712,
        2713,5,65,0,0,2713,2714,5,73,0,0,2714,2715,5,78,0,0,2715,492,1,0,
        0,0,2716,2717,5,69,0,0,2717,2718,5,88,0,0,2718,2719,5,84,0,0,2719,
        2720,5,69,0,0,2720,2721,5,82,0,0,2721,2722,5,78,0,0,2722,2723,5,
        65,0,0,2723,2724,5,76,0,0,2724,494,1,0,0,0,2725,2726,5,69,0,0,2726,
        2727,5,88,0,0,2727,2728,5,84,0,0,2728,2729,5,82,0,0,2729,2730,5,
        65,0,0,2730,2731,5,67,0,0,2731,2732,5,84,0,0,2732,496,1,0,0,0,2733,
        2734,5,70,0,0,2734,2735,5,65,0,0,2735,2736,5,76,0,0,2736,2737,5,
        83,0,0,2737,2738,5,69,0,0,2738,498,1,0,0,0,2739,2740,5,70,0,0,2740,
        2741,5,76,0,0,2741,2742,5,79,0,0,2742,2743,5,65,0,0,2743,2744,5,
        84,0,0,2744,500,1,0,0,0,2745,2746,5,70,0,0,2746,2747,5,79,0,0,2747,
        2748,5,82,0,0,2748,502,1,0,0,0,2749,2750,5,70,0,0,2750,2751,5,82,
        0,0,2751,2752,5,79,0,0,2752,2753,5,77,0,0,2753,504,1,0,0,0,2754,
        2755,5,70,0,0,2755,2756,5,85,0,0,2756,2757,5,76,0,0,2757,2758,5,
        76,0,0,2758,506,1,0,0,0,2759,2760,5,70,0,0,2760,2761,5,85,0,0,2761,
        2762,5,78,0,0,2762,2763,5,67,0,0,2763,2764,5,84,0,0,2764,2765,5,
        73,0,0,2765,2766,5,79,0,0,2766,2767,5,78,0,0,2767,508,1,0,0,0,2768,
        2769,5,71,0,0,2769,2770,5,76,0,0,2770,2771,5,79,0,0,2771,2772,5,
        66,0,0,2772,2773,5,65,0,0,2773,2774,5,76,0,0,2774,510,1,0,0,0,2775,
        2776,5,71,0,0,2776,2777,5,82,0,0,2777,2778,5,65,0,0,2778,2779,5,
        78,0,0,2779,2780,5,84,0,0,2780,512,1,0,0,0,2781,2782,5,71,0,0,2782,
        2783,5,82,0,0,2783,2784,5,79,0,0,2784,2785,5,85,0,0,2785,2786,5,
        80,0,0,2786,514,1,0,0,0,2787,2788,5,71,0,0,2788,2789,5,82,0,0,2789,
        2790,5,79,0,0,2790,2791,5,85,0,0,2791,2792,5,80,0,0,2792,2793,5,
        73,0,0,2793,2794,5,78,0,0,2794,2795,5,71,0,0,2795,516,1,0,0,0,2796,
        2797,5,71,0,0,2797,2798,5,82,0,0,2798,2799,5,79,0,0,2799,2800,5,
        85,0,0,2800,2801,5,80,0,0,2801,2802,5,83,0,0,2802,518,1,0,0,0,2803,
        2804,5,72,0,0,2804,2805,5,65,0,0,2805,2806,5,86,0,0,2806,2807,5,
        73,0,0,2807,2808,5,78,0,0,2808,2809,5,71,0,0,2809,520,1,0,0,0,2810,
        2811,5,72,0,0,2811,2812,5,79,0,0,2812,2813,5,85,0,0,2813,2814,5,
        82,0,0,2814,522,1,0,0,0,2815,2816,5,73,0,0,2816,2817,5,77,0,0,2817,
        2818,5,80,0,0,2818,2819,5,79,0,0,2819,2820,5,82,0,0,2820,2821,5,
        84,0,0,2821,524,1,0,0,0,2822,2823,5,73,0,0,2823,2824,5,78,0,0,2824,
        526,1,0,0,0,2825,2826,5,73,0,0,2826,2827,5,78,0,0,2827,2828,5,67,
        0,0,2828,2829,5,76,0,0,2829,2830,5,85,0,0,2830,2831,5,68,0,0,2831,
        2832,5,73,0,0,2832,2833,5,78,0,0,2833,2834,5,71,0,0,2834,528,1,0,
        0,0,2835,2836,5,73,0,0,2836,2837,5,78,0,0,2837,2838,5,78,0,0,2838,
        2839,5,69,0,0,2839,2840,5,82,0,0,2840,530,1,0,0,0,2841,2842,5,73,
        0,0,2842,2843,5,78,0,0,2843,2844,5,79,0,0,2844,2845,5,85,0,0,2845,
        2846,5,84,0,0,2846,532,1,0,0,0,2847,2848,5,73,0,0,2848,2849,5,78,
        0,0,2849,2850,5,83,0,0,2850,2851,5,69,0,0,2851,2852,5,82,0,0,2852,
        2853,5,84,0,0,2853,534,1,0,0,0,2854,2855,5,73,0,0,2855,2856,5,78,
        0,0,2856,2857,5,84,0,0,2857,536,1,0,0,0,2858,2859,5,73,0,0,2859,
        2860,5,78,0,0,2860,2861,5,84,0,0,2861,2862,5,69,0,0,2862,2863,5,
        71,0,0,2863,2864,5,69,0,0,2864,2865,5,82,0,0,2865,538,1,0,0,0,2866,
        2867,5,73,0,0,2867,2868,5,78,0,0,2868,2869,5,84,0,0,2869,2870,5,
        69,0,0,2870,2871,5,82,0,0,2871,2872,5,83,0,0,2872,2873,5,69,0,0,
        2873,2874,5,67,0,0,2874,2875,5,84,0,0,2875,540,1,0,0,0,2876,2877,
        5,73,0,0,2877,2878,5,78,0,0,2878,2879,5,84,0,0,2879,2880,5,69,0,
        0,2880,2881,5,82,0,0,2881,2882,5,86,0,0,2882,2883,5,65,0,0,2883,
        2884,5,76,0,0,2884,542,1,0,0,0,2885,2886,5,73,0,0,2886,2887,5,78,
        0,0,2887,2888,5,84,0,0,2888,2889,5,79,0,0,2889,544,1,0,0,0,2890,
        2891,5,73,0,0,2891,2892,5,83,0,0,2892,546,1,0,0,0,2893,2894,5,74,
        0,0,2894,2895,5,79,0,0,2895,2896,5,73,0,0,2896,2897,5,78,0,0,2897,
        548,1,0,0,0,2898,2899,5,76,0,0,2899,2900,5,65,0,0,2900,2901,5,71,
        0,0,2901,550,1,0,0,0,2902,2903,5,76,0,0,2903,2904,5,65,0,0,2904,
        2905,5,78,0,0,2905,2906,5,71,0,0,2906,2907,5,85,0,0,2907,2908,5,
        65,0,0,2908,2909,5,71,0,0,2909,2910,5,69,0,0,2910,552,1,0,0,0,2911,
        2912,5,76,0,0,2912,2913,5,65,0,0,2913,2914,5,84,0,0,2914,2915,5,
        69,0,0,2915,2916,5,82,0,0,2916,2917,5,65,0,0,2917,2918,5,76,0,0,
        2918,554,1,0,0,0,2919,2920,5,76,0,0,2920,2921,5,69,0,0,2921,2922,
        5,65,0,0,2922,2923,5,68,0,0,2923,2924,5,73,0,0,2924,2925,5,78,0,
        0,2925,2926,5,71,0,0,2926,556,1,0,0,0,2927,2928,5,76,0,0,2928,2929,
        5,69,0,0,2929,2930,5,70,0,0,2930,2931,5,84,0,0,2931,558,1,0,0,0,
        2932,2933,5,76,0,0,2933,2934,5,73,0,0,2934,2935,5,75,0,0,2935,2936,
        5,69,0,0,2936,560,1,0,0,0,2937,2938,5,76,0,0,2938,2939,5,73,0,0,
        2939,2940,5,77,0,0,2940,2941,5,73,0,0,2941,2942,5,84,0,0,2942,562,
        1,0,0,0,2943,2944,5,76,0,0,2944,2945,5,79,0,0,2945,2946,5,67,0,0,
        2946,2947,5,65,0,0,2947,2948,5,76,0,0,2948,564,1,0,0,0,2949,2950,
        5,77,0,0,2950,2951,5,65,0,0,2951,2952,5,84,0,0,2952,2953,5,67,0,
        0,2953,2954,5,72,0,0,2954,566,1,0,0,0,2955,2956,5,77,0,0,2956,2957,
        5,65,0,0,2957,2958,5,84,0,0,2958,2959,5,67,0,0,2959,2960,5,72,0,
        0,2960,2961,5,95,0,0,2961,2962,5,82,0,0,2962,2963,5,69,0,0,2963,
        2964,5,67,0,0,2964,2965,5,79,0,0,2965,2966,5,71,0,0,2966,2967,5,
        78,0,0,2967,2968,5,73,0,0,2968,2969,5,90,0,0,2969,2970,5,69,0,0,
        2970,568,1,0,0,0,2971,2972,5,77,0,0,2972,2973,5,69,0,0,2973,2974,
        5,65,0,0,2974,2975,5,83,0,0,2975,2976,5,85,0,0,2976,2977,5,82,0,
        0,2977,2978,5,69,0,0,2978,2979,5,83,0,0,2979,570,1,0,0,0,2980,2981,
        5,77,0,0,2981,2982,5,69,0,0,2982,2983,5,82,0,0,2983,2984,5,71,0,
        0,2984,2985,5,69,0,0,2985,572,1,0,0,0,2986,2987,5,77,0,0,2987,2988,
        5,69,0,0,2988,2989,5,84,0,0,2989,2990,5,65,0,0,2990,2991,5,68,0,
        0,2991,2992,5,65,0,0,2992,2993,5,84,0,0,2993,2994,5,65,0,0,2994,
        574,1,0,0,0,2995,2996,5,77,0,0,2996,2997,5,73,0,0,2997,2998,5,78,
        0,0,2998,2999,5,85,0,0,2999,3000,5,83,0,0,3000,576,1,0,0,0,3001,
        3002,5,77,0,0,3002,3003,5,73,0,0,3003,3004,5,78,0,0,3004,3005,5,
        85,0,0,3005,3006,5,84,0,0,3006,3007,5,69,0,0,3007,578,1,0,0,0,3008,
        3009,5,77,0,0,3009,3010,5,79,0,0,3010,3011,5,68,0,0,3011,3012,5,
        73,0,0,3012,3013,5,70,0,0,3013,3014,5,73,0,0,3014,3015,5,69,0,0,
        3015,3016,5,83,0,0,3016,580,1,0,0,0,3017,3018,5,77,0,0,3018,3019,
        5,79,0,0,3019,3020,5,68,0,0,3020,3021,5,85,0,0,3021,3022,5,76,0,
        0,3022,3023,5,69,0,0,3023,582,1,0,0,0,3024,3025,5,77,0,0,3025,3026,
        5,79,0,0,3026,3027,5,78,0,0,3027,3028,5,84,0,0,3028,3029,5,72,0,
        0,3029,584,1,0,0,0,3030,3031,5,77,0,0,3031,3032,5,85,0,0,3032,3033,
        5,76,0,0,3033,3034,5,84,0,0,3034,3035,5,73,0,0,3035,3036,5,83,0,
        0,3036,3037,5,69,0,0,3037,3038,5,84,0,0,3038,586,1,0,0,0,3039,3040,
        5,78,0,0,3040,3041,5,65,0,0,3041,3042,5,84,0,0,3042,3043,5,85,0,
        0,3043,3044,5,82,0,0,3044,3045,5,65,0,0,3045,3046,5,76,0,0,3046,
        588,1,0,0,0,3047,3048,5,78,0,0,3048,3049,5,69,0,0,3049,3050,5,88,
        0,0,3050,3051,5,84,0,0,3051,590,1,0,0,0,3052,3053,5,78,0,0,3053,
        3054,5,79,0,0,3054,592,1,0,0,0,3055,3056,5,78,0,0,3056,3057,5,79,
        0,0,3057,3058,5,78,0,0,3058,3059,5,69,0,0,3059,594,1,0,0,0,3060,
        3061,5,78,0,0,3061,3062,5,79,0,0,3062,3063,5,84,0,0,3063,596,1,0,
        0,0,3064,3065,5,78,0,0,3065,3066,5,85,0,0,3066,3067,5,76,0,0,3067,
        3068,5,76,0,0,3068,598,1,0,0,0,3069,3070,5,78,0,0,3070,3071,5,85,
        0,0,3071,3072,5,77,0,0,3072,3073,5,69,0,0,3073,3074,5,82,0,0,3074,
        3075,5,73,0,0,3075,3076,5,67,0,0,3076,600,1,0,0,0,3077,3078,5,79,
        0,0,3078,3079,5,70,0,0,3079,602,1,0,0,0,3080,3081,5,79,0,0,3081,
        3082,5,70,0,0,3082,3083,5,70,0,0,3083,3084,5,83,0,0,3084,3085,5,
        69,0,0,3085,3086,5,84,0,0,3086,604,1,0,0,0,3087,3088,5,79,0,0,3088,
        3089,5,78,0,0,3089,606,1,0,0,0,3090,3091,5,79,0,0,3091,3092,5,78,
        0,0,3092,3093,5,69,0,0,3093,608,1,0,0,0,3094,3095,5,79,0,0,3095,
        3096,5,82,0,0,3096,610,1,0,0,0,3097,3098,5,79,0,0,3098,3099,5,82,
        0,0,3099,3100,5,68,0,0,3100,3101,5,69,0,0,3101,3102,5,82,0,0,3102,
        612,1,0,0,0,3103,3104,5,79,0,0,3104,3105,5,85,0,0,3105,3106,5,84,
        0,0,3106,614,1,0,0,0,3107,3108,5,79,0,0,3108,3109,5,85,0,0,3109,
        3110,5,84,0,0,3110,3111,5,69,0,0,3111,3112,5,82,0,0,3112,616,1,0,
        0,0,3113,3114,5,79,0,0,3114,3115,5,86,0,0,3115,3116,5,69,0,0,3116,
        3117,5,82,0,0,3117,618,1,0,0,0,3118,3119,5,79,0,0,3119,3120,5,86,
        0,0,3120,3121,5,69,0,0,3121,3122,5,82,0,0,3122,3123,5,76,0,0,3123,
        3124,5,65,0,0,3124,3125,5,89,0,0,3125,620,1,0,0,0,3126,3127,5,80,
        0,0,3127,3128,5,65,0,0,3128,3129,5,82,0,0,3129,3130,5,84,0,0,3130,
        3131,5,73,0,0,3131,3132,5,84,0,0,3132,3133,5,73,0,0,3133,3134,5,
        79,0,0,3134,3135,5,78,0,0,3135,622,1,0,0,0,3136,3137,5,80,0,0,3137,
        3138,5,65,0,0,3138,3139,5,84,0,0,3139,3140,5,84,0,0,3140,3141,5,
        69,0,0,3141,3142,5,82,0,0,3142,3143,5,78,0,0,3143,624,1,0,0,0,3144,
        3145,5,80,0,0,3145,3146,5,69,0,0,3146,3147,5,82,0,0,3147,626,1,0,
        0,0,3148,3149,5,80,0,0,3149,3150,5,69,0,0,3150,3151,5,82,0,0,3151,
        3152,5,67,0,0,3152,3153,5,69,0,0,3153,3154,5,78,0,0,3154,3155,5,
        84,0,0,3155,628,1,0,0,0,3156,3157,5,80,0,0,3157,3158,5,69,0,0,3158,
        3159,5,82,0,0,3159,3160,5,73,0,0,3160,3161,5,79,0,0,3161,3162,5,
        68,0,0,3162,630,1,0,0,0,3163,3164,5,80,0,0,3164,3165,5,79,0,0,3165,
        3166,5,83,0,0,3166,3167,5,73,0,0,3167,3168,5,84,0,0,3168,3169,5,
        73,0,0,3169,3170,5,79,0,0,3170,3171,5,78,0,0,3171,632,1,0,0,0,3172,
        3173,5,80,0,0,3173,3174,5,79,0,0,3174,3175,5,87,0,0,3175,3176,5,
        69,0,0,3176,3177,5,82,0,0,3177,634,1,0,0,0,3178,3179,5,80,0,0,3179,
        3180,5,82,0,0,3180,3181,5,73,0,0,3181,3182,5,77,0,0,3182,3183,5,
        65,0,0,3183,3184,5,82,0,0,3184,3185,5,89,0,0,3185,636,1,0,0,0,3186,
        3187,5,82,0,0,3187,3188,5,65,0,0,3188,3189,5,78,0,0,3189,3190,5,
        71,0,0,3190,3191,5,69,0,0,3191,638,1,0,0,0,3192,3193,5,82,0,0,3193,
        3194,5,65,0,0,3194,3195,5,78,0,0,3195,3196,5,75,0,0,3196,640,1,0,
        0,0,3197,3198,5,82,0,0,3198,3199,5,69,0,0,3199,3200,5,83,0,0,3200,
        3201,5,69,0,0,3201,3202,5,84,0,0,3202,642,1,0,0,0,3203,3204,5,82,
        0,0,3204,3205,5,69,0,0,3205,3206,5,86,0,0,3206,3207,5,79,0,0,3207,
        3208,5,75,0,0,3208,3209,5,69,0,0,3209,644,1,0,0,0,3210,3211,5,82,
        0,0,3211,3212,5,73,0,0,3212,3213,5,71,0,0,3213,3214,5,72,0,0,3214,
        3215,5,84,0,0,3215,646,1,0,0,0,3216,3217,5,82,0,0,3217,3218,5,76,
        0,0,3218,3219,5,73,0,0,3219,3220,5,75,0,0,3220,3221,5,69,0,0,3221,
        648,1,0,0,0,3222,3223,5,82,0,0,3223,3224,5,79,0,0,3224,3225,5,76,
        0,0,3225,3226,5,76,0,0,3226,3227,5,66,0,0,3227,3228,5,65,0,0,3228,
        3229,5,67,0,0,3229,3230,5,75,0,0,3230,650,1,0,0,0,3231,3232,5,82,
        0,0,3232,3233,5,79,0,0,3233,3234,5,76,0,0,3234,3235,5,76,0,0,3235,
        3236,5,85,0,0,3236,3237,5,80,0,0,3237,652,1,0,0,0,3238,3239,5,82,
        0,0,3239,3240,5,79,0,0,3240,3241,5,87,0,0,3241,654,1,0,0,0,3242,
        3243,5,82,0,0,3243,3244,5,79,0,0,3244,3245,5,87,0,0,3245,3246,5,
        83,0,0,3246,656,1,0,0,0,3247,3248,5,83,0,0,3248,3249,5,69,0,0,3249,
        3250,5,67,0,0,3250,3251,5,79,0,0,3251,3252,5,78,0,0,3252,3253,5,
        68,0,0,3253,658,1,0,0,0,3254,3255,5,83,0,0,3255,3256,5,69,0,0,3256,
        3257,5,76,0,0,3257,3258,5,69,0,0,3258,3259,5,67,0,0,3259,3260,5,
        84,0,0,3260,660,1,0,0,0,3261,3262,5,83,0,0,3262,3263,5,69,0,0,3263,
        3264,5,84,0,0,3264,662,1,0,0,0,3265,3266,5,83,0,0,3266,3267,5,72,
        0,0,3267,3268,5,79,0,0,3268,3269,5,87,0,0,3269,664,1,0,0,0,3270,
        3271,5,83,0,0,3271,3272,5,73,0,0,3272,3273,5,77,0,0,3273,3274,5,
        73,0,0,3274,3275,5,76,0,0,3275,3276,5,65,0,0,3276,3277,5,82,0,0,
        3277,666,1,0,0,0,3278,3279,5,83,0,0,3279,3280,5,75,0,0,3280,3281,
        5,73,0,0,3281,3282,5,80,0,0,3282,668,1,0,0,0,3283,3284,5,83,0,0,
        3284,3285,5,77,0,0,3285,3286,5,65,0,0,3286,3287,5,76,0,0,3287,3288,
        5,76,0,0,3288,3289,5,73,0,0,3289,3290,5,78,0,0,3290,3291,5,84,0,
        0,3291,670,1,0,0,0,3292,3293,5,83,0,0,3293,3294,5,84,0,0,3294,3295,
        5,65,0,0,3295,3296,5,82,0,0,3296,3297,5,84,0,0,3297,672,1,0,0,0,
        3298,3299,5,83,0,0,3299,3300,5,84,0,0,3300,3301,5,65,0,0,3301,3302,
        5,84,0,0,3302,3303,5,73,0,0,3303,3304,5,67,0,0,3304,674,1,0,0,0,
        3305,3306,5,83,0,0,3306,3307,5,85,0,0,3307,3308,5,66,0,0,3308,3309,
        5,83,0,0,3309,3310,5,84,0,0,3310,3311,5,82,0,0,3311,3312,5,73,0,
        0,3312,3313,5,78,0,0,3313,3314,5,71,0,0,3314,676,1,0,0,0,3315,3316,
        5,83,0,0,3316,3317,5,85,0,0,3317,3318,5,77,0,0,3318,678,1,0,0,0,
        3319,3320,5,83,0,0,3320,3321,5,89,0,0,3321,3322,5,77,0,0,3322,3323,
        5,77,0,0,3323,3324,5,69,0,0,3324,3325,5,84,0,0,3325,3326,5,82,0,
        0,3326,3327,5,73,0,0,3327,3328,5,67,0,0,3328,680,1,0,0,0,3329,3330,
        5,83,0,0,3330,3331,5,89,0,0,3331,3332,5,83,0,0,3332,3333,5,84,0,
        0,3333,3334,5,69,0,0,3334,3335,5,77,0,0,3335,682,1,0,0,0,3336,3337,
        5,83,0,0,3337,3338,5,89,0,0,3338,3339,5,83,0,0,3339,3340,5,84,0,
        0,3340,3341,5,69,0,0,3341,3342,5,77,0,0,3342,3343,5,95,0,0,3343,
        3344,5,84,0,0,3344,3345,5,73,0,0,3345,3346,5,77,0,0,3346,3347,5,
        69,0,0,3347,684,1,0,0,0,3348,3349,5,83,0,0,3349,3350,5,89,0,0,3350,
        3351,5,83,0,0,3351,3352,5,84,0,0,3352,3353,5,69,0,0,3353,3354,5,
        77,0,0,3354,3355,5,95,0,0,3355,3356,5,85,0,0,3356,3357,5,83,0,0,
        3357,3358,5,69,0,0,3358,3359,5,82,0,0,3359,686,1,0,0,0,3360,3361,
        5,84,0,0,3361,3362,5,65,0,0,3362,3363,5,66,0,0,3363,3364,5,76,0,
        0,3364,3365,5,69,0,0,3365,688,1,0,0,0,3366,3367,5,84,0,0,3367,3368,
        5,65,0,0,3368,3369,5,66,0,0,3369,3370,5,76,0,0,3370,3371,5,69,0,
        0,3371,3372,5,83,0,0,3372,3373,5,65,0,0,3373,3374,5,77,0,0,3374,
        3375,5,80,0,0,3375,3376,5,76,0,0,3376,3377,5,69,0,0,3377,690,1,0,
        0,0,3378,3379,5,84,0,0,3379,3380,5,72,0,0,3380,3381,5,69,0,0,3381,
        3382,5,78,0,0,3382,692,1,0,0,0,3383,3384,5,84,0,0,3384,3385,5,73,
        0,0,3385,3386,5,77,0,0,3386,3387,5,69,0,0,3387,694,1,0,0,0,3388,
        3389,5,84,0,0,3389,3390,5,73,0,0,3390,3391,5,77,0,0,3391,3392,5,
        69,0,0,3392,3393,5,83,0,0,3393,3394,5,84,0,0,3394,3395,5,65,0,0,
        3395,3396,5,77,0,0,3396,3397,5,80,0,0,3397,696,1,0,0,0,3398,3399,
        5,84,0,0,3399,3400,5,73,0,0,3400,3401,5,78,0,0,3401,3402,5,89,0,
        0,3402,3403,5,73,0,0,3403,3404,5,78,0,0,3404,3405,5,84,0,0,3405,
        698,1,0,0,0,3406,3407,5,84,0,0,3407,3408,5,79,0,0,3408,700,1,0,0,
        0,3409,3410,5,84,0,0,3410,3411,5,82,0,0,3411,3412,5,65,0,0,3412,
        3413,5,73,0,0,3413,3414,5,76,0,0,3414,3415,5,73,0,0,3415,3416,5,
        78,0,0,3416,3417,5,71,0,0,3417,702,1,0,0,0,3418,3419,5,84,0,0,3419,
        3420,5,82,0,0,3420,3421,5,85,0,0,3421,3422,5,69,0,0,3422,704,1,0,
        0,0,3423,3424,5,84,0,0,3424,3425,5,82,0,0,3425,3426,5,85,0,0,3426,
        3427,5,78,0,0,3427,3428,5,67,0,0,3428,3429,5,65,0,0,3429,3430,5,
        84,0,0,3430,3431,5,69,0,0,3431,706,1,0,0,0,3432,3433,5,85,0,0,3433,
        3434,5,78,0,0,3434,3435,5,73,0,0,3435,3436,5,79,0,0,3436,3437,5,
        78,0,0,3437,708,1,0,0,0,3438,3439,5,85,0,0,3439,3440,5,78,0,0,3440,
        3441,5,73,0,0,3441,3442,5,81,0,0,3442,3443,5,85,0,0,3443,3444,5,
        69,0,0,3444,710,1,0,0,0,3445,3446,5,85,0,0,3446,3447,5,78,0,0,3447,
        3448,5,75,0,0,3448,3449,5,78,0,0,3449,3450,5,79,0,0,3450,3451,5,
        87,0,0,3451,3452,5,78,0,0,3452,712,1,0,0,0,3453,3454,5,85,0,0,3454,
        3455,5,78,0,0,3455,3456,5,78,0,0,3456,3457,5,69,0,0,3457,3458,5,
        83,0,0,3458,3459,5,84,0,0,3459,714,1,0,0,0,3460,3461,5,85,0,0,3461,
        3462,5,80,0,0,3462,3463,5,80,0,0,3463,3464,5,69,0,0,3464,3465,5,
        82,0,0,3465,716,1,0,0,0,3466,3467,5,85,0,0,3467,3468,5,80,0,0,3468,
        3469,5,83,0,0,3469,3470,5,69,0,0,3470,3471,5,82,0,0,3471,3472,5,
        84,0,0,3472,718,1,0,0,0,3473,3474,5,85,0,0,3474,3475,5,83,0,0,3475,
        3476,5,69,0,0,3476,3477,5,82,0,0,3477,720,1,0,0,0,3478,3479,5,85,
        0,0,3479,3480,5,83,0,0,3480,3481,5,73,0,0,3481,3482,5,78,0,0,3482,
        3483,5,71,0,0,3483,722,1,0,0,0,3484,3485,5,86,0,0,3485,3486,5,65,
        0,0,3486,3487,5,76,0,0,3487,3488,5,85,0,0,3488,3489,5,69,0,0,3489,
        724,1,0,0,0,3490,3491,5,86,0,0,3491,3492,5,65,0,0,3492,3493,5,76,
        0,0,3493,3494,5,85,0,0,3494,3495,5,69,0,0,3495,3496,5,83,0,0,3496,
        726,1,0,0,0,3497,3498,5,86,0,0,3498,3499,5,65,0,0,3499,3500,5,82,
        0,0,3500,3501,5,66,0,0,3501,3502,5,73,0,0,3502,3503,5,78,0,0,3503,
        3504,5,65,0,0,3504,3505,5,82,0,0,3505,3506,5,89,0,0,3506,728,1,0,
        0,0,3507,3508,5,86,0,0,3508,3509,5,65,0,0,3509,3510,5,82,0,0,3510,
        3511,5,67,0,0,3511,3512,5,72,0,0,3512,3513,5,65,0,0,3513,3514,5,
        82,0,0,3514,730,1,0,0,0,3515,3516,5,87,0,0,3516,3517,5,72,0,0,3517,
        3518,5,69,0,0,3518,3519,5,78,0,0,3519,732,1,0,0,0,3520,3521,5,87,
        0,0,3521,3522,5,72,0,0,3522,3523,5,69,0,0,3523,3524,5,82,0,0,3524,
        3525,5,69,0,0,3525,734,1,0,0,0,3526,3527,5,87,0,0,3527,3528,5,73,
        0,0,3528,3529,5,78,0,0,3529,3530,5,68,0,0,3530,3531,5,79,0,0,3531,
        3532,5,87,0,0,3532,736,1,0,0,0,3533,3534,5,87,0,0,3534,3535,5,73,
        0,0,3535,3536,5,84,0,0,3536,3537,5,72,0,0,3537,738,1,0,0,0,3538,
        3539,5,87,0,0,3539,3540,5,73,0,0,3540,3541,5,84,0,0,3541,3542,5,
        72,0,0,3542,3543,5,73,0,0,3543,3544,5,78,0,0,3544,740,1,0,0,0,3545,
        3546,5,87,0,0,3546,3547,5,73,0,0,3547,3548,5,84,0,0,3548,3549,5,
        72,0,0,3549,3550,5,79,0,0,3550,3551,5,85,0,0,3551,3552,5,84,0,0,
        3552,742,1,0,0,0,3553,3554,5,89,0,0,3554,3555,5,69,0,0,3555,3556,
        5,65,0,0,3556,3557,5,82,0,0,3557,744,1,0,0,0,3558,3559,5,61,0,0,
        3559,746,1,0,0,0,3560,3561,5,62,0,0,3561,748,1,0,0,0,3562,3563,5,
        60,0,0,3563,750,1,0,0,0,3564,3565,5,33,0,0,3565,752,1,0,0,0,3566,
        3567,5,126,0,0,3567,754,1,0,0,0,3568,3569,5,124,0,0,3569,756,1,0,
        0,0,3570,3571,5,38,0,0,3571,758,1,0,0,0,3572,3573,5,94,0,0,3573,
        760,1,0,0,0,3574,3575,5,46,0,0,3575,762,1,0,0,0,3576,3577,5,91,0,
        0,3577,764,1,0,0,0,3578,3579,5,93,0,0,3579,766,1,0,0,0,3580,3581,
        5,40,0,0,3581,768,1,0,0,0,3582,3583,5,41,0,0,3583,770,1,0,0,0,3584,
        3585,5,123,0,0,3585,772,1,0,0,0,3586,3587,5,125,0,0,3587,774,1,0,
        0,0,3588,3589,5,44,0,0,3589,776,1,0,0,0,3590,3591,5,59,0,0,3591,
        778,1,0,0,0,3592,3593,5,64,0,0,3593,780,1,0,0,0,3594,3595,5,39,0,
        0,3595,782,1,0,0,0,3596,3597,5,34,0,0,3597,784,1,0,0,0,3598,3599,
        5,96,0,0,3599,786,1,0,0,0,3600,3601,5,58,0,0,3601,788,1,0,0,0,3602,
        3603,5,42,0,0,3603,790,1,0,0,0,3604,3605,5,95,0,0,3605,792,1,0,0,
        0,3606,3607,5,45,0,0,3607,794,1,0,0,0,3608,3609,5,43,0,0,3609,796,
        1,0,0,0,3610,3611,5,37,0,0,3611,798,1,0,0,0,3612,3613,5,124,0,0,
        3613,3614,5,124,0,0,3614,800,1,0,0,0,3615,3616,5,45,0,0,3616,3617,
        5,45,0,0,3617,802,1,0,0,0,3618,3619,5,47,0,0,3619,804,1,0,0,0,3620,
        3621,5,63,0,0,3621,806,1,0,0,0,3622,3623,5,61,0,0,3623,3624,5,62,
        0,0,3624,808,1,0,0,0,3625,3629,3,833,416,0,3626,3629,3,835,417,0,
        3627,3629,3,839,419,0,3628,3625,1,0,0,0,3628,3626,1,0,0,0,3628,3627,
        1,0,0,0,3629,810,1,0,0,0,3630,3632,3,829,414,0,3631,3630,1,0,0,0,
        3632,3633,1,0,0,0,3633,3631,1,0,0,0,3633,3634,1,0,0,0,3634,812,1,
        0,0,0,3635,3637,3,829,414,0,3636,3635,1,0,0,0,3637,3638,1,0,0,0,
        3638,3636,1,0,0,0,3638,3639,1,0,0,0,3639,3641,1,0,0,0,3640,3636,
        1,0,0,0,3640,3641,1,0,0,0,3641,3642,1,0,0,0,3642,3644,5,46,0,0,3643,
        3645,3,829,414,0,3644,3643,1,0,0,0,3645,3646,1,0,0,0,3646,3644,1,
        0,0,0,3646,3647,1,0,0,0,3647,3679,1,0,0,0,3648,3650,3,829,414,0,
        3649,3648,1,0,0,0,3650,3651,1,0,0,0,3651,3649,1,0,0,0,3651,3652,
        1,0,0,0,3652,3653,1,0,0,0,3653,3654,5,46,0,0,3654,3655,3,825,412,
        0,3655,3679,1,0,0,0,3656,3658,3,829,414,0,3657,3656,1,0,0,0,3658,
        3659,1,0,0,0,3659,3657,1,0,0,0,3659,3660,1,0,0,0,3660,3662,1,0,0,
        0,3661,3657,1,0,0,0,3661,3662,1,0,0,0,3662,3663,1,0,0,0,3663,3665,
        5,46,0,0,3664,3666,3,829,414,0,3665,3664,1,0,0,0,3666,3667,1,0,0,
        0,3667,3665,1,0,0,0,3667,3668,1,0,0,0,3668,3669,1,0,0,0,3669,3670,
        3,825,412,0,3670,3679,1,0,0,0,3671,3673,3,829,414,0,3672,3671,1,
        0,0,0,3673,3674,1,0,0,0,3674,3672,1,0,0,0,3674,3675,1,0,0,0,3675,
        3676,1,0,0,0,3676,3677,3,825,412,0,3677,3679,1,0,0,0,3678,3640,1,
        0,0,0,3678,3649,1,0,0,0,3678,3661,1,0,0,0,3678,3672,1,0,0,0,3679,
        814,1,0,0,0,3680,3681,3,837,418,0,3681,816,1,0,0,0,3682,3683,3,827,
        413,0,3683,818,1,0,0,0,3684,3685,3,821,410,0,3685,820,1,0,0,0,3686,
        3690,7,2,0,0,3687,3689,8,3,0,0,3688,3687,1,0,0,0,3689,3692,1,0,0,
        0,3690,3688,1,0,0,0,3690,3691,1,0,0,0,3691,822,1,0,0,0,3692,3690,
        1,0,0,0,3693,3701,5,96,0,0,3694,3695,5,92,0,0,3695,3700,9,0,0,0,
        3696,3697,5,96,0,0,3697,3700,5,96,0,0,3698,3700,8,4,0,0,3699,3694,
        1,0,0,0,3699,3696,1,0,0,0,3699,3698,1,0,0,0,3700,3703,1,0,0,0,3701,
        3699,1,0,0,0,3701,3702,1,0,0,0,3702,3704,1,0,0,0,3703,3701,1,0,0,
        0,3704,3705,5,96,0,0,3705,824,1,0,0,0,3706,3708,5,69,0,0,3707,3709,
        7,5,0,0,3708,3707,1,0,0,0,3708,3709,1,0,0,0,3709,3711,1,0,0,0,3710,
        3712,3,829,414,0,3711,3710,1,0,0,0,3712,3713,1,0,0,0,3713,3711,1,
        0,0,0,3713,3714,1,0,0,0,3714,826,1,0,0,0,3715,3717,7,6,0,0,3716,
        3715,1,0,0,0,3717,3720,1,0,0,0,3718,3719,1,0,0,0,3718,3716,1,0,0,
        0,3719,3722,1,0,0,0,3720,3718,1,0,0,0,3721,3723,7,7,0,0,3722,3721,
        1,0,0,0,3723,3724,1,0,0,0,3724,3725,1,0,0,0,3724,3722,1,0,0,0,3725,
        3729,1,0,0,0,3726,3728,7,6,0,0,3727,3726,1,0,0,0,3728,3731,1,0,0,
        0,3729,3727,1,0,0,0,3729,3730,1,0,0,0,3730,828,1,0,0,0,3731,3729,
        1,0,0,0,3732,3733,7,8,0,0,3733,830,1,0,0,0,3734,3735,7,9,0,0,3735,
        832,1,0,0,0,3736,3744,5,34,0,0,3737,3738,5,92,0,0,3738,3743,9,0,
        0,0,3739,3740,5,34,0,0,3740,3743,5,34,0,0,3741,3743,8,10,0,0,3742,
        3737,1,0,0,0,3742,3739,1,0,0,0,3742,3741,1,0,0,0,3743,3746,1,0,0,
        0,3744,3742,1,0,0,0,3744,3745,1,0,0,0,3745,3747,1,0,0,0,3746,3744,
        1,0,0,0,3747,3748,5,34,0,0,3748,834,1,0,0,0,3749,3757,5,39,0,0,3750,
        3751,5,92,0,0,3751,3756,9,0,0,0,3752,3753,5,39,0,0,3753,3756,5,39,
        0,0,3754,3756,8,11,0,0,3755,3750,1,0,0,0,3755,3752,1,0,0,0,3755,
        3754,1,0,0,0,3756,3759,1,0,0,0,3757,3755,1,0,0,0,3757,3758,1,0,0,
        0,3758,3760,1,0,0,0,3759,3757,1,0,0,0,3760,3761,5,39,0,0,3761,836,
        1,0,0,0,3762,3763,5,66,0,0,3763,3765,5,39,0,0,3764,3766,7,12,0,0,
        3765,3764,1,0,0,0,3766,3767,1,0,0,0,3767,3765,1,0,0,0,3767,3768,
        1,0,0,0,3768,3769,1,0,0,0,3769,3770,5,39,0,0,3770,838,1,0,0,0,3771,
        3779,5,96,0,0,3772,3773,5,92,0,0,3773,3778,9,0,0,0,3774,3775,5,96,
        0,0,3775,3778,5,96,0,0,3776,3778,8,4,0,0,3777,3772,1,0,0,0,3777,
        3774,1,0,0,0,3777,3776,1,0,0,0,3778,3781,1,0,0,0,3779,3777,1,0,0,
        0,3779,3780,1,0,0,0,3780,3782,1,0,0,0,3781,3779,1,0,0,0,3782,3783,
        5,96,0,0,3783,840,1,0,0,0,36,0,844,854,865,870,874,878,884,888,890,
        3628,3633,3638,3640,3646,3651,3659,3661,3667,3674,3678,3690,3699,
        3701,3708,3713,3718,3724,3729,3742,3744,3755,3757,3767,3777,3779,
        1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FlinkSqlLexer.__ATN) {
            FlinkSqlLexer.__ATN = new antlr.ATNDeserializer().deserialize(FlinkSqlLexer._serializedATN);
        }

        return FlinkSqlLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FlinkSqlLexer.literalNames, FlinkSqlLexer.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return FlinkSqlLexer.vocabulary;
    }

    private static readonly decisionsToDFA = FlinkSqlLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}