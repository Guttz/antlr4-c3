// Generated from tests/FlinkSqlParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class FlinkSqlParser extends antlr.Parser {
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
    public static readonly RULE_program = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_sqlStatements = 2;
    public static readonly RULE_sqlStatement = 3;
    public static readonly RULE_nullStatement = 4;
    public static readonly RULE_ddlStatement = 5;
    public static readonly RULE_dmlStatement = 6;
    public static readonly RULE_describeStatement = 7;
    public static readonly RULE_explainStatement = 8;
    public static readonly RULE_explainDetails = 9;
    public static readonly RULE_explainDetail = 10;
    public static readonly RULE_useStatement = 11;
    public static readonly RULE_useModuleStatement = 12;
    public static readonly RULE_showStatement = 13;
    public static readonly RULE_loadStatement = 14;
    public static readonly RULE_unloadStatement = 15;
    public static readonly RULE_setStatement = 16;
    public static readonly RULE_resetStatement = 17;
    public static readonly RULE_jarStatement = 18;
    public static readonly RULE_dtAddStatement = 19;
    public static readonly RULE_dtFilePath = 20;
    public static readonly RULE_createTable = 21;
    public static readonly RULE_simpleCreateTable = 22;
    public static readonly RULE_createTableAsSelect = 23;
    public static readonly RULE_columnOptionDefinition = 24;
    public static readonly RULE_physicalColumnDefinition = 25;
    public static readonly RULE_columnName = 26;
    public static readonly RULE_columnNameList = 27;
    public static readonly RULE_columnType = 28;
    public static readonly RULE_lengthOneDimension = 29;
    public static readonly RULE_lengthTwoOptionalDimension = 30;
    public static readonly RULE_lengthTwoStringDimension = 31;
    public static readonly RULE_lengthOneTypeDimension = 32;
    public static readonly RULE_mapTypeDimension = 33;
    public static readonly RULE_rowTypeDimension = 34;
    public static readonly RULE_columnConstraint = 35;
    public static readonly RULE_commentSpec = 36;
    public static readonly RULE_metadataColumnDefinition = 37;
    public static readonly RULE_metadataKey = 38;
    public static readonly RULE_computedColumnDefinition = 39;
    public static readonly RULE_computedColumnExpression = 40;
    public static readonly RULE_watermarkDefinition = 41;
    public static readonly RULE_tableConstraint = 42;
    public static readonly RULE_constraintName = 43;
    public static readonly RULE_selfDefinitionClause = 44;
    public static readonly RULE_partitionDefinition = 45;
    public static readonly RULE_transformList = 46;
    public static readonly RULE_transform = 47;
    public static readonly RULE_transformArgument = 48;
    public static readonly RULE_likeDefinition = 49;
    public static readonly RULE_likeOption = 50;
    public static readonly RULE_createCatalog = 51;
    public static readonly RULE_createDatabase = 52;
    public static readonly RULE_createView = 53;
    public static readonly RULE_createFunction = 54;
    public static readonly RULE_usingClause = 55;
    public static readonly RULE_jarFileName = 56;
    public static readonly RULE_alterTable = 57;
    public static readonly RULE_renameDefinition = 58;
    public static readonly RULE_setKeyValueDefinition = 59;
    public static readonly RULE_addConstraint = 60;
    public static readonly RULE_dropConstraint = 61;
    public static readonly RULE_addUnique = 62;
    public static readonly RULE_notForced = 63;
    public static readonly RULE_alertView = 64;
    public static readonly RULE_alterDatabase = 65;
    public static readonly RULE_alterFunction = 66;
    public static readonly RULE_dropCatalog = 67;
    public static readonly RULE_dropTable = 68;
    public static readonly RULE_dropDatabase = 69;
    public static readonly RULE_dropView = 70;
    public static readonly RULE_dropFunction = 71;
    public static readonly RULE_insertStatement = 72;
    public static readonly RULE_insertSimpleStatement = 73;
    public static readonly RULE_insertPartitionDefinition = 74;
    public static readonly RULE_valuesDefinition = 75;
    public static readonly RULE_valuesRowDefinition = 76;
    public static readonly RULE_insertMulStatementCompatibility = 77;
    public static readonly RULE_insertMulStatement = 78;
    public static readonly RULE_queryStatement = 79;
    public static readonly RULE_valuesClause = 80;
    public static readonly RULE_withClause = 81;
    public static readonly RULE_withItem = 82;
    public static readonly RULE_withItemName = 83;
    public static readonly RULE_selectStatement = 84;
    public static readonly RULE_selectClause = 85;
    public static readonly RULE_projectItemDefinition = 86;
    public static readonly RULE_overWindowItem = 87;
    public static readonly RULE_fromClause = 88;
    public static readonly RULE_tableExpression = 89;
    public static readonly RULE_tableReference = 90;
    public static readonly RULE_tablePrimary = 91;
    public static readonly RULE_systemTimePeriod = 92;
    public static readonly RULE_dateTimeExpression = 93;
    public static readonly RULE_inlineDataValueClause = 94;
    public static readonly RULE_windoTVFClause = 95;
    public static readonly RULE_windowTVFExression = 96;
    public static readonly RULE_windoTVFName = 97;
    public static readonly RULE_windowTVFParam = 98;
    public static readonly RULE_timeIntervalParamName = 99;
    public static readonly RULE_columnDescriptor = 100;
    public static readonly RULE_joinCondition = 101;
    public static readonly RULE_whereClause = 102;
    public static readonly RULE_groupByClause = 103;
    public static readonly RULE_groupItemDefinition = 104;
    public static readonly RULE_groupingSets = 105;
    public static readonly RULE_groupingSetsNotaionName = 106;
    public static readonly RULE_groupWindowFunction = 107;
    public static readonly RULE_groupWindowFunctionName = 108;
    public static readonly RULE_timeAttrColumn = 109;
    public static readonly RULE_havingClause = 110;
    public static readonly RULE_windowClause = 111;
    public static readonly RULE_namedWindow = 112;
    public static readonly RULE_windowSpec = 113;
    public static readonly RULE_matchRecognizeClause = 114;
    public static readonly RULE_orderByClause = 115;
    public static readonly RULE_orderItemDefition = 116;
    public static readonly RULE_limitClause = 117;
    public static readonly RULE_partitionByClause = 118;
    public static readonly RULE_quantifiers = 119;
    public static readonly RULE_measuresClause = 120;
    public static readonly RULE_patternDefination = 121;
    public static readonly RULE_patternVariable = 122;
    public static readonly RULE_outputMode = 123;
    public static readonly RULE_afterMatchStrategy = 124;
    public static readonly RULE_patternVariablesDefination = 125;
    public static readonly RULE_windowFrame = 126;
    public static readonly RULE_frameBound = 127;
    public static readonly RULE_withinClause = 128;
    public static readonly RULE_expression = 129;
    public static readonly RULE_booleanExpression = 130;
    public static readonly RULE_predicate = 131;
    public static readonly RULE_likePredicate = 132;
    public static readonly RULE_valueExpression = 133;
    public static readonly RULE_primaryExpression = 134;
    public static readonly RULE_functionName = 135;
    public static readonly RULE_functionParam = 136;
    public static readonly RULE_dereferenceDefinition = 137;
    public static readonly RULE_correlationName = 138;
    public static readonly RULE_qualifiedName = 139;
    public static readonly RULE_timeIntervalExpression = 140;
    public static readonly RULE_errorCapturingMultiUnitsInterval = 141;
    public static readonly RULE_multiUnitsInterval = 142;
    public static readonly RULE_errorCapturingUnitToUnitInterval = 143;
    public static readonly RULE_unitToUnitInterval = 144;
    public static readonly RULE_intervalValue = 145;
    public static readonly RULE_columnAlias = 146;
    public static readonly RULE_tableAlias = 147;
    public static readonly RULE_errorCapturingIdentifier = 148;
    public static readonly RULE_errorCapturingIdentifierExtra = 149;
    public static readonly RULE_identifierList = 150;
    public static readonly RULE_identifierSeq = 151;
    public static readonly RULE_identifier = 152;
    public static readonly RULE_unquotedIdentifier = 153;
    public static readonly RULE_quotedIdentifier = 154;
    public static readonly RULE_whenClause = 155;
    public static readonly RULE_catalogPath = 156;
    public static readonly RULE_databasePath = 157;
    public static readonly RULE_databasePathCreate = 158;
    public static readonly RULE_tablePathCreate = 159;
    public static readonly RULE_tablePath = 160;
    public static readonly RULE_uid = 161;
    public static readonly RULE_withOption = 162;
    public static readonly RULE_ifNotExists = 163;
    public static readonly RULE_ifExists = 164;
    public static readonly RULE_tablePropertyList = 165;
    public static readonly RULE_tableProperty = 166;
    public static readonly RULE_tablePropertyKey = 167;
    public static readonly RULE_tablePropertyValue = 168;
    public static readonly RULE_logicalOperator = 169;
    public static readonly RULE_comparisonOperator = 170;
    public static readonly RULE_bitOperator = 171;
    public static readonly RULE_mathOperator = 172;
    public static readonly RULE_unaryOperator = 173;
    public static readonly RULE_constant = 174;
    public static readonly RULE_timePointLiteral = 175;
    public static readonly RULE_stringLiteral = 176;
    public static readonly RULE_decimalLiteral = 177;
    public static readonly RULE_booleanLiteral = 178;
    public static readonly RULE_setQuantifier = 179;
    public static readonly RULE_timePointUnit = 180;
    public static readonly RULE_timeIntervalUnit = 181;
    public static readonly RULE_reservedKeywordsUsedAsFuncParam = 182;
    public static readonly RULE_reservedKeywordsUsedAsFuncName = 183;
    public static readonly RULE_reservedKeywords = 184;
    public static readonly RULE_nonReservedKeywords = 185;

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
    public static readonly ruleNames = [
        "program", "statement", "sqlStatements", "sqlStatement", "nullStatement", 
        "ddlStatement", "dmlStatement", "describeStatement", "explainStatement", 
        "explainDetails", "explainDetail", "useStatement", "useModuleStatement", 
        "showStatement", "loadStatement", "unloadStatement", "setStatement", 
        "resetStatement", "jarStatement", "dtAddStatement", "dtFilePath", 
        "createTable", "simpleCreateTable", "createTableAsSelect", "columnOptionDefinition", 
        "physicalColumnDefinition", "columnName", "columnNameList", "columnType", 
        "lengthOneDimension", "lengthTwoOptionalDimension", "lengthTwoStringDimension", 
        "lengthOneTypeDimension", "mapTypeDimension", "rowTypeDimension", 
        "columnConstraint", "commentSpec", "metadataColumnDefinition", "metadataKey", 
        "computedColumnDefinition", "computedColumnExpression", "watermarkDefinition", 
        "tableConstraint", "constraintName", "selfDefinitionClause", "partitionDefinition", 
        "transformList", "transform", "transformArgument", "likeDefinition", 
        "likeOption", "createCatalog", "createDatabase", "createView", "createFunction", 
        "usingClause", "jarFileName", "alterTable", "renameDefinition", 
        "setKeyValueDefinition", "addConstraint", "dropConstraint", "addUnique", 
        "notForced", "alertView", "alterDatabase", "alterFunction", "dropCatalog", 
        "dropTable", "dropDatabase", "dropView", "dropFunction", "insertStatement", 
        "insertSimpleStatement", "insertPartitionDefinition", "valuesDefinition", 
        "valuesRowDefinition", "insertMulStatementCompatibility", "insertMulStatement", 
        "queryStatement", "valuesClause", "withClause", "withItem", "withItemName", 
        "selectStatement", "selectClause", "projectItemDefinition", "overWindowItem", 
        "fromClause", "tableExpression", "tableReference", "tablePrimary", 
        "systemTimePeriod", "dateTimeExpression", "inlineDataValueClause", 
        "windoTVFClause", "windowTVFExression", "windoTVFName", "windowTVFParam", 
        "timeIntervalParamName", "columnDescriptor", "joinCondition", "whereClause", 
        "groupByClause", "groupItemDefinition", "groupingSets", "groupingSetsNotaionName", 
        "groupWindowFunction", "groupWindowFunctionName", "timeAttrColumn", 
        "havingClause", "windowClause", "namedWindow", "windowSpec", "matchRecognizeClause", 
        "orderByClause", "orderItemDefition", "limitClause", "partitionByClause", 
        "quantifiers", "measuresClause", "patternDefination", "patternVariable", 
        "outputMode", "afterMatchStrategy", "patternVariablesDefination", 
        "windowFrame", "frameBound", "withinClause", "expression", "booleanExpression", 
        "predicate", "likePredicate", "valueExpression", "primaryExpression", 
        "functionName", "functionParam", "dereferenceDefinition", "correlationName", 
        "qualifiedName", "timeIntervalExpression", "errorCapturingMultiUnitsInterval", 
        "multiUnitsInterval", "errorCapturingUnitToUnitInterval", "unitToUnitInterval", 
        "intervalValue", "columnAlias", "tableAlias", "errorCapturingIdentifier", 
        "errorCapturingIdentifierExtra", "identifierList", "identifierSeq", 
        "identifier", "unquotedIdentifier", "quotedIdentifier", "whenClause", 
        "catalogPath", "databasePath", "databasePathCreate", "tablePathCreate", 
        "tablePath", "uid", "withOption", "ifNotExists", "ifExists", "tablePropertyList", 
        "tableProperty", "tablePropertyKey", "tablePropertyValue", "logicalOperator", 
        "comparisonOperator", "bitOperator", "mathOperator", "unaryOperator", 
        "constant", "timePointLiteral", "stringLiteral", "decimalLiteral", 
        "booleanLiteral", "setQuantifier", "timePointUnit", "timeIntervalUnit", 
        "reservedKeywordsUsedAsFuncParam", "reservedKeywordsUsedAsFuncName", 
        "reservedKeywords", "nonReservedKeywords",
    ];

    public get grammarFileName(): string { return "FlinkSqlParser.g4"; }
    public get literalNames(): (string | null)[] { return FlinkSqlParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return FlinkSqlParser.symbolicNames; }
    public get ruleNames(): string[] { return FlinkSqlParser.ruleNames; }
    public get serializedATN(): number[] { return FlinkSqlParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this._interp = new antlr.ParserATNSimulator(this, FlinkSqlParser._ATN, FlinkSqlParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
        this.enterRule(localctx, 0, FlinkSqlParser.RULE_program);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 372;
            this.statement();
            this.state = 373;
            this.match(FlinkSqlParser.EOF);
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
    public statement(): StatementContext {
        let localctx: StatementContext = new StatementContext(this._ctx, this.state);
        this.enterRule(localctx, 2, FlinkSqlParser.RULE_statement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 375;
            this.sqlStatements();
            this.state = 376;
            this.match(FlinkSqlParser.EOF);
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
    public sqlStatements(): SqlStatementsContext {
        let localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
        this.enterRule(localctx, 4, FlinkSqlParser.RULE_sqlStatements);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 382;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===4 || _la===30 || _la===76 || _la===118 || ((((_la - 159)) & ~0x1F) === 0 && ((1 << (_la - 159)) & 1075838981) !== 0) || ((((_la - 219)) & ~0x1F) === 0 && ((1 << (_la - 219)) & 168067073) !== 0) || _la===267 || ((((_la - 321)) & ~0x1F) === 0 && ((1 << (_la - 321)) & 3585) !== 0) || ((((_la - 363)) & ~0x1F) === 0 && ((1 << (_la - 363)) & 69206081) !== 0)) {
                {
                this.state = 380;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                case FlinkSqlParser.KW_ADD:
                case FlinkSqlParser.KW_DESC:
                case FlinkSqlParser.KW_LOAD:
                case FlinkSqlParser.KW_REMOVE:
                case FlinkSqlParser.KW_UNLOAD:
                case FlinkSqlParser.KW_USE:
                case FlinkSqlParser.KW_ALTER:
                case FlinkSqlParser.KW_BEGIN:
                case FlinkSqlParser.KW_CREATE:
                case FlinkSqlParser.KW_DESCRIBE:
                case FlinkSqlParser.KW_DROP:
                case FlinkSqlParser.KW_EXECUTE:
                case FlinkSqlParser.KW_EXPLAIN:
                case FlinkSqlParser.KW_INSERT:
                case FlinkSqlParser.KW_RESET:
                case FlinkSqlParser.KW_SELECT:
                case FlinkSqlParser.KW_SET:
                case FlinkSqlParser.KW_SHOW:
                case FlinkSqlParser.KW_VALUES:
                case FlinkSqlParser.KW_WITH:
                case FlinkSqlParser.LR_BRACKET:
                    {
                    this.state = 378;
                    this.sqlStatement();
                    }
                    break;
                case FlinkSqlParser.SEMICOLON:
                    {
                    this.state = 379;
                    this.nullStatement();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 384;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public sqlStatement(): SqlStatementContext {
        let localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 6, FlinkSqlParser.RULE_sqlStatement);
        try {
            this.state = 433;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 385;
                this.ddlStatement();
                this.state = 387;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
                case 1:
                    {
                    this.state = 386;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 389;
                this.dmlStatement();
                this.state = 391;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
                case 1:
                    {
                    this.state = 390;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 393;
                this.describeStatement();
                this.state = 395;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
                case 1:
                    {
                    this.state = 394;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 397;
                this.explainStatement();
                this.state = 399;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
                case 1:
                    {
                    this.state = 398;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 401;
                this.useStatement();
                this.state = 403;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
                case 1:
                    {
                    this.state = 402;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 405;
                this.showStatement();
                this.state = 407;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
                case 1:
                    {
                    this.state = 406;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 409;
                this.loadStatement();
                this.state = 411;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
                case 1:
                    {
                    this.state = 410;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 413;
                this.unloadStatement();
                this.state = 415;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
                case 1:
                    {
                    this.state = 414;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 417;
                this.setStatement();
                this.state = 419;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
                case 1:
                    {
                    this.state = 418;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 421;
                this.resetStatement();
                this.state = 423;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
                case 1:
                    {
                    this.state = 422;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 425;
                this.jarStatement();
                this.state = 427;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
                case 1:
                    {
                    this.state = 426;
                    this.match(FlinkSqlParser.SEMICOLON);
                    }
                    break;
                }
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 429;
                this.dtAddStatement();
                this.state = 431;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
                case 1:
                    {
                    this.state = 430;
                    this.match(FlinkSqlParser.SEMICOLON);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public nullStatement(): NullStatementContext {
        let localctx: NullStatementContext = new NullStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 8, FlinkSqlParser.RULE_nullStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 435;
            this.match(FlinkSqlParser.SEMICOLON);
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
    public ddlStatement(): DdlStatementContext {
        let localctx: DdlStatementContext = new DdlStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 10, FlinkSqlParser.RULE_ddlStatement);
        try {
            this.state = 451;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 437;
                this.createTable();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 438;
                this.createDatabase();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 439;
                this.createView();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 440;
                this.createFunction();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 441;
                this.createCatalog();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 442;
                this.alterTable();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 443;
                this.alertView();
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 444;
                this.alterDatabase();
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 445;
                this.alterFunction();
                }
                break;
            case 10:
                this.enterOuterAlt(localctx, 10);
                {
                this.state = 446;
                this.dropCatalog();
                }
                break;
            case 11:
                this.enterOuterAlt(localctx, 11);
                {
                this.state = 447;
                this.dropTable();
                }
                break;
            case 12:
                this.enterOuterAlt(localctx, 12);
                {
                this.state = 448;
                this.dropDatabase();
                }
                break;
            case 13:
                this.enterOuterAlt(localctx, 13);
                {
                this.state = 449;
                this.dropView();
                }
                break;
            case 14:
                this.enterOuterAlt(localctx, 14);
                {
                this.state = 450;
                this.dropFunction();
                }
                break;
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
    public dmlStatement(): DmlStatementContext {
        let localctx: DmlStatementContext = new DmlStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 12, FlinkSqlParser.RULE_dmlStatement);
        try {
            this.state = 455;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_SELECT:
            case FlinkSqlParser.KW_VALUES:
            case FlinkSqlParser.KW_WITH:
            case FlinkSqlParser.LR_BRACKET:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 453;
                this.queryStatement(0);
                }
                break;
            case FlinkSqlParser.KW_BEGIN:
            case FlinkSqlParser.KW_EXECUTE:
            case FlinkSqlParser.KW_INSERT:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 454;
                this.insertStatement();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public describeStatement(): DescribeStatementContext {
        let localctx: DescribeStatementContext = new DescribeStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 14, FlinkSqlParser.RULE_describeStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 457;
            _la = this._input.LA(1);
            if(!(_la===30 || _la===234)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 458;
            this.tablePath();
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
    public explainStatement(): ExplainStatementContext {
        let localctx: ExplainStatementContext = new ExplainStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 16, FlinkSqlParser.RULE_explainStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 460;
            this.match(FlinkSqlParser.KW_EXPLAIN);
            this.state = 464;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
                {
                this.state = 461;
                this.explainDetails();
                }
                break;
            case FlinkSqlParser.KW_PLAN:
                {
                this.state = 462;
                this.match(FlinkSqlParser.KW_PLAN);
                this.state = 463;
                this.match(FlinkSqlParser.KW_FOR);
                }
                break;
            case FlinkSqlParser.KW_STATEMENT:
            case FlinkSqlParser.KW_BEGIN:
            case FlinkSqlParser.KW_EXECUTE:
            case FlinkSqlParser.KW_INSERT:
            case FlinkSqlParser.KW_SELECT:
            case FlinkSqlParser.KW_VALUES:
            case FlinkSqlParser.KW_WITH:
            case FlinkSqlParser.LR_BRACKET:
                break;
            default:
                break;
            }
            this.state = 469;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
            case 1:
                {
                this.state = 466;
                this.dmlStatement();
                }
                break;
            case 2:
                {
                this.state = 467;
                this.insertSimpleStatement();
                }
                break;
            case 3:
                {
                this.state = 468;
                this.insertMulStatement();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public explainDetails(): ExplainDetailsContext {
        let localctx: ExplainDetailsContext = new ExplainDetailsContext(this._ctx, this.state);
        this.enterRule(localctx, 18, FlinkSqlParser.RULE_explainDetails);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 471;
            this.explainDetail();
            this.state = 476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 472;
                this.match(FlinkSqlParser.COMMA);
                this.state = 473;
                this.explainDetail();
                }
                }
                this.state = 478;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public explainDetail(): ExplainDetailContext {
        let localctx: ExplainDetailContext = new ExplainDetailContext(this._ctx, this.state);
        this.enterRule(localctx, 20, FlinkSqlParser.RULE_explainDetail);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 479;
            _la = this._input.LA(1);
            if(!(_la===16 || _la===38 || _la===68)) {
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
    public useStatement(): UseStatementContext {
        let localctx: UseStatementContext = new UseStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 22, FlinkSqlParser.RULE_useStatement);
        try {
            this.state = 487;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 481;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 482;
                this.match(FlinkSqlParser.KW_CATALOG);
                this.state = 483;
                this.catalogPath();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 484;
                this.match(FlinkSqlParser.KW_USE);
                this.state = 485;
                this.databasePath();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 486;
                this.useModuleStatement();
                }
                break;
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
    public useModuleStatement(): UseModuleStatementContext {
        let localctx: UseModuleStatementContext = new UseModuleStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 24, FlinkSqlParser.RULE_useModuleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 489;
            this.match(FlinkSqlParser.KW_USE);
            this.state = 490;
            this.match(FlinkSqlParser.KW_MODULES);
            this.state = 491;
            this.uid();
            this.state = 496;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 492;
                this.match(FlinkSqlParser.COMMA);
                this.state = 493;
                this.uid();
                }
                }
                this.state = 498;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public showStatement(): ShowStatementContext {
        let localctx: ShowStatementContext = new ShowStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 26, FlinkSqlParser.RULE_showStatement);
        let _la: number;
        try {
            this.state = 534;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 499;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 500;
                _la = this._input.LA(1);
                if(!(_la===13 || _la===26 || _la===65 || _la===167)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 501;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 502;
                this.match(FlinkSqlParser.KW_CURRENT);
                this.state = 503;
                _la = this._input.LA(1);
                if(!(_la===12 || _la===25)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 504;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 505;
                this.match(FlinkSqlParser.KW_TABLES);
                this.state = 508;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===252 || _la===263) {
                    {
                    this.state = 506;
                    _la = this._input.LA(1);
                    if(!(_la===252 || _la===263)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 507;
                    this.tablePath();
                    }
                }

                this.state = 511;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===280 || _la===298) {
                    {
                    this.state = 510;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 513;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 514;
                this.match(FlinkSqlParser.KW_COLUMNS);
                this.state = 515;
                _la = this._input.LA(1);
                if(!(_la===252 || _la===263)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 516;
                this.uid();
                this.state = 518;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===280 || _la===298) {
                    {
                    this.state = 517;
                    this.likePredicate();
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 520;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 521;
                this.match(FlinkSqlParser.KW_CREATE);
                this.state = 522;
                _la = this._input.LA(1);
                if(!(_la===166 || _la===344)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 523;
                this.uid();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 524;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 526;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===360) {
                    {
                    this.state = 525;
                    this.match(FlinkSqlParser.KW_USER);
                    }
                }

                this.state = 528;
                this.match(FlinkSqlParser.KW_FUNCTIONS);
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 529;
                this.match(FlinkSqlParser.KW_SHOW);
                this.state = 531;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===253) {
                    {
                    this.state = 530;
                    this.match(FlinkSqlParser.KW_FULL);
                    }
                }

                this.state = 533;
                this.match(FlinkSqlParser.KW_MODULES);
                }
                break;
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
    public loadStatement(): LoadStatementContext {
        let localctx: LoadStatementContext = new LoadStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 28, FlinkSqlParser.RULE_loadStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 536;
            this.match(FlinkSqlParser.KW_LOAD);
            this.state = 537;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 538;
            this.uid();
            this.state = 541;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
            case 1:
                {
                this.state = 539;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 540;
                this.tablePropertyList();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public unloadStatement(): UnloadStatementContext {
        let localctx: UnloadStatementContext = new UnloadStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 30, FlinkSqlParser.RULE_unloadStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 543;
            this.match(FlinkSqlParser.KW_UNLOAD);
            this.state = 544;
            this.match(FlinkSqlParser.KW_MODULE);
            this.state = 545;
            this.uid();
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
    public setStatement(): SetStatementContext {
        let localctx: SetStatementContext = new SetStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 32, FlinkSqlParser.RULE_setStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 547;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 549;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
            case 1:
                {
                this.state = 548;
                this.tableProperty();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public resetStatement(): ResetStatementContext {
        let localctx: ResetStatementContext = new ResetStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 34, FlinkSqlParser.RULE_resetStatement);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 551;
            this.match(FlinkSqlParser.KW_RESET);
            this.state = 553;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
            case 1:
                {
                this.state = 552;
                this.tablePropertyKey();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public jarStatement(): JarStatementContext {
        let localctx: JarStatementContext = new JarStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 36, FlinkSqlParser.RULE_jarStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 555;
            _la = this._input.LA(1);
            if(!(_la===4 || _la===118)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 556;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 557;
            this.jarFileName();
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
    public dtAddStatement(): DtAddStatementContext {
        let localctx: DtAddStatementContext = new DtAddStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 38, FlinkSqlParser.RULE_dtAddStatement);
        let _la: number;
        try {
            this.state = 599;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 559;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 560;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 561;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 562;
                this.dtFilePath();
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===185) {
                    {
                    this.state = 563;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 564;
                    this.uid();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 567;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 568;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 569;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 570;
                this.dtFilePath();
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===185) {
                    {
                    this.state = 571;
                    this.match(FlinkSqlParser.KW_AS);
                    this.state = 572;
                    this.uid();
                    }
                }

                this.state = 577;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===119) {
                    {
                    this.state = 575;
                    this.match(FlinkSqlParser.KW_RENAME);
                    this.state = 576;
                    this.uid();
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 579;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 580;
                _la = this._input.LA(1);
                if(!(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & 31) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 581;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 582;
                this.dtFilePath();
                this.state = 583;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 584;
                this.uid();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 586;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 587;
                this.match(FlinkSqlParser.KW_PYTHON_PARAMETER);
                this.state = 588;
                this.dtFilePath();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 589;
                this.match(FlinkSqlParser.KW_ADD);
                this.state = 590;
                this.match(FlinkSqlParser.KW_ENGINE);
                this.state = 591;
                this.match(FlinkSqlParser.KW_FILE);
                this.state = 592;
                this.match(FlinkSqlParser.KW_WITH);
                this.state = 593;
                this.dtFilePath();
                this.state = 594;
                this.match(FlinkSqlParser.KW_RENAME);
                this.state = 595;
                this.uid();
                this.state = 596;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 597;
                this.uid();
                }
                break;
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
    public dtFilePath(): DtFilePathContext {
        let localctx: DtFilePathContext = new DtFilePathContext(this._ctx, this.state);
        this.enterRule(localctx, 40, FlinkSqlParser.RULE_dtFilePath);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 602;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                {
                this.state = 601;
                this.match(FlinkSqlParser.SLASH_TEXT);
                }
                }
                this.state = 604;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la===410);
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
    public createTable(): CreateTableContext {
        let localctx: CreateTableContext = new CreateTableContext(this._ctx, this.state);
        this.enterRule(localctx, 42, FlinkSqlParser.RULE_createTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 608;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
            case 1:
                {
                this.state = 606;
                this.simpleCreateTable();
                }
                break;
            case 2:
                {
                this.state = 607;
                this.createTableAsSelect();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public simpleCreateTable(): SimpleCreateTableContext {
        let localctx: SimpleCreateTableContext = new SimpleCreateTableContext(this._ctx, this.state);
        this.enterRule(localctx, 44, FlinkSqlParser.RULE_simpleCreateTable);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 610;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 612;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 611;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 614;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 616;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
            case 1:
                {
                this.state = 615;
                this.ifNotExists();
                }
                break;
            }
            this.state = 618;
            this.tablePathCreate();
            this.state = 619;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 620;
            this.columnOptionDefinition();
            this.state = 625;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 621;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 622;
                    this.columnOptionDefinition();
                    }
                    }
                }
                this.state = 627;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
            }
            this.state = 630;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
            case 1:
                {
                this.state = 628;
                this.match(FlinkSqlParser.COMMA);
                this.state = 629;
                this.watermarkDefinition();
                }
                break;
            }
            this.state = 634;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
            case 1:
                {
                this.state = 632;
                this.match(FlinkSqlParser.COMMA);
                this.state = 633;
                this.tableConstraint();
                }
                break;
            }
            this.state = 638;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===388) {
                {
                this.state = 636;
                this.match(FlinkSqlParser.COMMA);
                this.state = 637;
                this.selfDefinitionClause();
                }
            }

            this.state = 640;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 642;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===18) {
                {
                this.state = 641;
                this.commentSpec();
                }
            }

            this.state = 645;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===95) {
                {
                this.state = 644;
                this.partitionDefinition();
                }
            }

            this.state = 647;
            this.withOption();
            this.state = 649;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===280) {
                {
                this.state = 648;
                this.likeDefinition();
                }
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
    public createTableAsSelect(): CreateTableAsSelectContext {
        let localctx: CreateTableAsSelectContext = new CreateTableAsSelectContext(this._ctx, this.state);
        this.enterRule(localctx, 46, FlinkSqlParser.RULE_createTableAsSelect);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 651;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 652;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 654;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
            case 1:
                {
                this.state = 653;
                this.ifNotExists();
                }
                break;
            }
            this.state = 656;
            this.tablePathCreate();
            this.state = 657;
            this.withOption();
            this.state = 660;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===185) {
                {
                this.state = 658;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 659;
                this.queryStatement(0);
                }
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
    public columnOptionDefinition(): ColumnOptionDefinitionContext {
        let localctx: ColumnOptionDefinitionContext = new ColumnOptionDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 48, FlinkSqlParser.RULE_columnOptionDefinition);
        try {
            this.state = 665;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 662;
                this.physicalColumnDefinition();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 663;
                this.metadataColumnDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 664;
                this.computedColumnDefinition();
                }
                break;
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
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
        let localctx: PhysicalColumnDefinitionContext = new PhysicalColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 50, FlinkSqlParser.RULE_physicalColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 667;
            this.columnName();
            this.state = 668;
            this.columnType();
            this.state = 670;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===215 || ((((_la - 298)) & ~0x1F) === 0 && ((1 << (_la - 298)) & 1048579) !== 0)) {
                {
                this.state = 669;
                this.columnConstraint();
                }
            }

            this.state = 673;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===18) {
                {
                this.state = 672;
                this.commentSpec();
                }
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
    public columnName(): ColumnNameContext {
        let localctx: ColumnNameContext = new ColumnNameContext(this._ctx, this.state);
        this.enterRule(localctx, 52, FlinkSqlParser.RULE_columnName);
        try {
            this.state = 677;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 675;
                this.uid();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 676;
                this.expression();
                }
                break;
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
    public columnNameList(): ColumnNameListContext {
        let localctx: ColumnNameListContext = new ColumnNameListContext(this._ctx, this.state);
        this.enterRule(localctx, 54, FlinkSqlParser.RULE_columnNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 679;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 680;
            this.columnName();
            this.state = 685;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 681;
                this.match(FlinkSqlParser.COMMA);
                this.state = 682;
                this.columnName();
                }
                }
                this.state = 687;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 688;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public columnType(): ColumnTypeContext {
        let localctx: ColumnTypeContext = new ColumnTypeContext(this._ctx, this.state);
        this.enterRule(localctx, 56, FlinkSqlParser.RULE_columnType);
        let _la: number;
        try {
            this.state = 727;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_BOOLEAN:
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 690;
                localctx._typeName = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===195 || _la===225 || _la===299)) {
                    localctx._typeName = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case FlinkSqlParser.KW_BYTES:
            case FlinkSqlParser.KW_STRING:
            case FlinkSqlParser.KW_TIMESTAMP_LTZ:
            case FlinkSqlParser.KW_BIGINT:
            case FlinkSqlParser.KW_BINARY:
            case FlinkSqlParser.KW_CHAR:
            case FlinkSqlParser.KW_DATETIME:
            case FlinkSqlParser.KW_INT:
            case FlinkSqlParser.KW_INTEGER:
            case FlinkSqlParser.KW_SMALLINT:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TINYINT:
            case FlinkSqlParser.KW_VARBINARY:
            case FlinkSqlParser.KW_VARCHAR:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 691;
                localctx._typeName = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===10 || _la===146 || _la===152 || ((((_la - 191)) & ~0x1F) === 0 && ((1 << (_la - 191)) & 8195) !== 0) || _la===226 || _la===268 || _la===269 || ((((_la - 335)) & ~0x1F) === 0 && ((1 << (_la - 335)) & 1610633217) !== 0))) {
                    localctx._typeName = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 693;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===384) {
                    {
                    this.state = 692;
                    this.lengthOneDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_TIMESTAMP:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 695;
                localctx._typeName = this.match(FlinkSqlParser.KW_TIMESTAMP);
                this.state = 697;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===384) {
                    {
                    this.state = 696;
                    this.lengthOneDimension();
                    }
                }

                this.state = 705;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===369 || _la===371) {
                    {
                    this.state = 699;
                    _la = this._input.LA(1);
                    if(!(_la===369 || _la===371)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 701;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===282) {
                        {
                        this.state = 700;
                        this.match(FlinkSqlParser.KW_LOCAL);
                        }
                    }

                    this.state = 703;
                    this.match(FlinkSqlParser.KW_TIME);
                    this.state = 704;
                    this.match(FlinkSqlParser.KW_ZONE);
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_DEC:
            case FlinkSqlParser.KW_DECIMAL:
            case FlinkSqlParser.KW_DOUBLE:
            case FlinkSqlParser.KW_FLOAT:
            case FlinkSqlParser.KW_NUMERIC:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 707;
                localctx._typeName = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4194563) !== 0) || _la===300)) {
                    localctx._typeName = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===384) {
                    {
                    this.state = 708;
                    this.lengthTwoOptionalDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_MULTISET:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 711;
                localctx._type_ = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===184 || _la===293)) {
                    localctx._type_ = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 713;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===375) {
                    {
                    this.state = 712;
                    this.lengthOneTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_MAP:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 715;
                localctx._type_ = this.match(FlinkSqlParser.KW_MAP);
                this.state = 717;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===375) {
                    {
                    this.state = 716;
                    this.mapTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_ROW:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 719;
                localctx._type_ = this.match(FlinkSqlParser.KW_ROW);
                this.state = 721;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===375) {
                    {
                    this.state = 720;
                    this.rowTypeDimension();
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_RAW:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 723;
                localctx._type_ = this.match(FlinkSqlParser.KW_RAW);
                this.state = 725;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===384) {
                    {
                    this.state = 724;
                    this.lengthTwoStringDimension();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public lengthOneDimension(): LengthOneDimensionContext {
        let localctx: LengthOneDimensionContext = new LengthOneDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 58, FlinkSqlParser.RULE_lengthOneDimension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 729;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 730;
            this.decimalLiteral();
            this.state = 731;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
        let localctx: LengthTwoOptionalDimensionContext = new LengthTwoOptionalDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 60, FlinkSqlParser.RULE_lengthTwoOptionalDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 733;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 734;
            this.decimalLiteral();
            this.state = 737;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===388) {
                {
                this.state = 735;
                this.match(FlinkSqlParser.COMMA);
                this.state = 736;
                this.decimalLiteral();
                }
            }

            this.state = 739;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
        let localctx: LengthTwoStringDimensionContext = new LengthTwoStringDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 62, FlinkSqlParser.RULE_lengthTwoStringDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 741;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 742;
            this.stringLiteral();
            this.state = 745;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===388) {
                {
                this.state = 743;
                this.match(FlinkSqlParser.COMMA);
                this.state = 744;
                this.stringLiteral();
                }
            }

            this.state = 747;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
        let localctx: LengthOneTypeDimensionContext = new LengthOneTypeDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 64, FlinkSqlParser.RULE_lengthOneTypeDimension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 749;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 750;
            this.columnType();
            this.state = 751;
            this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    public mapTypeDimension(): MapTypeDimensionContext {
        let localctx: MapTypeDimensionContext = new MapTypeDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 66, FlinkSqlParser.RULE_mapTypeDimension);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 753;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 754;
            this.columnType();
            {
            this.state = 755;
            this.match(FlinkSqlParser.COMMA);
            this.state = 756;
            this.columnType();
            }
            this.state = 758;
            this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    public rowTypeDimension(): RowTypeDimensionContext {
        let localctx: RowTypeDimensionContext = new RowTypeDimensionContext(this._ctx, this.state);
        this.enterRule(localctx, 68, FlinkSqlParser.RULE_rowTypeDimension);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 760;
            this.match(FlinkSqlParser.LESS_SYMBOL);
            this.state = 761;
            this.columnName();
            this.state = 762;
            this.columnType();
            this.state = 769;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 763;
                this.match(FlinkSqlParser.COMMA);
                this.state = 764;
                this.columnName();
                this.state = 765;
                this.columnType();
                }
                }
                this.state = 771;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 772;
            this.match(FlinkSqlParser.GREATER_SYMBOL);
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
    public columnConstraint(): ColumnConstraintContext {
        let localctx: ColumnConstraintContext = new ColumnConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 70, FlinkSqlParser.RULE_columnConstraint);
        let _la: number;
        try {
            this.state = 788;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_CONSTRAINT:
            case FlinkSqlParser.KW_PRIMARY:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 776;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===215) {
                    {
                    this.state = 774;
                    this.match(FlinkSqlParser.KW_CONSTRAINT);
                    this.state = 775;
                    this.constraintName();
                    }
                }

                this.state = 778;
                this.match(FlinkSqlParser.KW_PRIMARY);
                this.state = 779;
                this.match(FlinkSqlParser.KW_KEY);
                this.state = 782;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 780;
                    this.match(FlinkSqlParser.KW_NOT);
                    this.state = 781;
                    this.match(FlinkSqlParser.KW_ENFORCED);
                    }
                }

                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 784;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 787;
                this.match(FlinkSqlParser.KW_NULL);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public commentSpec(): CommentSpecContext {
        let localctx: CommentSpecContext = new CommentSpecContext(this._ctx, this.state);
        this.enterRule(localctx, 72, FlinkSqlParser.RULE_commentSpec);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 790;
            this.match(FlinkSqlParser.KW_COMMENT);
            this.state = 791;
            this.match(FlinkSqlParser.STRING_LITERAL);
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
    public metadataColumnDefinition(): MetadataColumnDefinitionContext {
        let localctx: MetadataColumnDefinitionContext = new MetadataColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 74, FlinkSqlParser.RULE_metadataColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 793;
            this.columnName();
            this.state = 794;
            this.columnType();
            this.state = 795;
            this.match(FlinkSqlParser.KW_METADATA);
            this.state = 798;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===252) {
                {
                this.state = 796;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 797;
                this.metadataKey();
                }
            }

            this.state = 801;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===168) {
                {
                this.state = 800;
                this.match(FlinkSqlParser.KW_VIRTUAL);
                }
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
    public metadataKey(): MetadataKeyContext {
        let localctx: MetadataKeyContext = new MetadataKeyContext(this._ctx, this.state);
        this.enterRule(localctx, 76, FlinkSqlParser.RULE_metadataKey);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 803;
            this.match(FlinkSqlParser.STRING_LITERAL);
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
    public computedColumnDefinition(): ComputedColumnDefinitionContext {
        let localctx: ComputedColumnDefinitionContext = new ComputedColumnDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 78, FlinkSqlParser.RULE_computedColumnDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 805;
            this.columnName();
            this.state = 806;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 807;
            this.computedColumnExpression();
            this.state = 809;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===18) {
                {
                this.state = 808;
                this.commentSpec();
                }
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
    public computedColumnExpression(): ComputedColumnExpressionContext {
        let localctx: ComputedColumnExpressionContext = new ComputedColumnExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 80, FlinkSqlParser.RULE_computedColumnExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 811;
            this.expression();
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
    public watermarkDefinition(): WatermarkDefinitionContext {
        let localctx: WatermarkDefinitionContext = new WatermarkDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 82, FlinkSqlParser.RULE_watermarkDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 813;
            this.match(FlinkSqlParser.KW_WATERMARK);
            this.state = 814;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 815;
            this.expression();
            this.state = 816;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 817;
            this.expression();
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
    public tableConstraint(): TableConstraintContext {
        let localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 84, FlinkSqlParser.RULE_tableConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 821;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===215) {
                {
                this.state = 819;
                this.match(FlinkSqlParser.KW_CONSTRAINT);
                this.state = 820;
                this.constraintName();
                }
            }

            this.state = 823;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 824;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 825;
            this.columnNameList();
            this.state = 826;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 827;
            this.match(FlinkSqlParser.KW_ENFORCED);
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
    public constraintName(): ConstraintNameContext {
        let localctx: ConstraintNameContext = new ConstraintNameContext(this._ctx, this.state);
        this.enterRule(localctx, 86, FlinkSqlParser.RULE_constraintName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 829;
            this.identifier();
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
    public selfDefinitionClause(): SelfDefinitionClauseContext {
        let localctx: SelfDefinitionClauseContext = new SelfDefinitionClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 88, FlinkSqlParser.RULE_selfDefinitionClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 831;
            this.match(FlinkSqlParser.KW_PERIOD);
            this.state = 832;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 833;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
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
    public partitionDefinition(): PartitionDefinitionContext {
        let localctx: PartitionDefinitionContext = new PartitionDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 90, FlinkSqlParser.RULE_partitionDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 835;
            this.match(FlinkSqlParser.KW_PARTITIONED);
            this.state = 836;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 837;
            this.transformList();
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
    public transformList(): TransformListContext {
        let localctx: TransformListContext = new TransformListContext(this._ctx, this.state);
        this.enterRule(localctx, 92, FlinkSqlParser.RULE_transformList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 839;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 840;
            this.transform();
            this.state = 845;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 841;
                this.match(FlinkSqlParser.COMMA);
                this.state = 842;
                this.transform();
                }
                }
                this.state = 847;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 848;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public transform(): TransformContext {
        let localctx: TransformContext = new TransformContext(this._ctx, this.state);
        this.enterRule(localctx, 94, FlinkSqlParser.RULE_transform);
        let _la: number;
        try {
            this.state = 863;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
            case 1:
                localctx = new IdentityTransformContext(localctx);
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 850;
                this.qualifiedName();
                }
                break;
            case 2:
                localctx = new ApplyTransformContext(localctx);
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 851;
                (localctx as ApplyTransformContext)._transformName = this.identifier();
                this.state = 852;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 853;
                this.transformArgument();
                this.state = 858;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 854;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 855;
                    this.transformArgument();
                    }
                    }
                    this.state = 860;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 861;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
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
    public transformArgument(): TransformArgumentContext {
        let localctx: TransformArgumentContext = new TransformArgumentContext(this._ctx, this.state);
        this.enterRule(localctx, 96, FlinkSqlParser.RULE_transformArgument);
        try {
            this.state = 867;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 865;
                this.qualifiedName();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 866;
                this.constant();
                }
                break;
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
    public likeDefinition(): LikeDefinitionContext {
        let localctx: LikeDefinitionContext = new LikeDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 98, FlinkSqlParser.RULE_likeDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 869;
            this.match(FlinkSqlParser.KW_LIKE);
            this.state = 870;
            this.tablePath();
            this.state = 879;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
            case 1:
                {
                this.state = 871;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 875;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===41 || _la===94 || _la===264) {
                    {
                    {
                    this.state = 872;
                    this.likeOption();
                    }
                    }
                    this.state = 877;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 878;
                this.match(FlinkSqlParser.RR_BRACKET);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public likeOption(): LikeOptionContext {
        let localctx: LikeOptionContext = new LikeOptionContext(this._ctx, this.state);
        this.enterRule(localctx, 100, FlinkSqlParser.RULE_likeOption);
        let _la: number;
        try {
            this.state = 885;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 881;
                _la = this._input.LA(1);
                if(!(_la===41 || _la===264)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 882;
                _la = this._input.LA(1);
                if(!(_la===21 || _la===96 || _la===178)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 883;
                _la = this._input.LA(1);
                if(!(_la===41 || _la===94 || _la===264)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 884;
                _la = this._input.LA(1);
                if(!(_la===53 || _la===90 || _la===170)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public createCatalog(): CreateCatalogContext {
        let localctx: CreateCatalogContext = new CreateCatalogContext(this._ctx, this.state);
        this.enterRule(localctx, 102, FlinkSqlParser.RULE_createCatalog);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 887;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 888;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 889;
            this.uid();
            this.state = 890;
            this.withOption();
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
    public createDatabase(): CreateDatabaseContext {
        let localctx: CreateDatabaseContext = new CreateDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 104, FlinkSqlParser.RULE_createDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 892;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 893;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 895;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
            case 1:
                {
                this.state = 894;
                this.ifNotExists();
                }
                break;
            }
            this.state = 897;
            this.databasePathCreate();
            this.state = 899;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===18) {
                {
                this.state = 898;
                this.commentSpec();
                }
            }

            this.state = 901;
            this.withOption();
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
    public createView(): CreateViewContext {
        let localctx: CreateViewContext = new CreateViewContext(this._ctx, this.state);
        this.enterRule(localctx, 106, FlinkSqlParser.RULE_createView);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 903;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 905;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 904;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 907;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 909;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
            case 1:
                {
                this.state = 908;
                this.ifNotExists();
                }
                break;
            }
            this.state = 911;
            this.uid();
            this.state = 913;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===384) {
                {
                this.state = 912;
                this.columnNameList();
                }
            }

            this.state = 916;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===18) {
                {
                this.state = 915;
                this.commentSpec();
                }
            }

            this.state = 918;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 919;
            this.queryStatement(0);
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
    public createFunction(): CreateFunctionContext {
        let localctx: CreateFunctionContext = new CreateFunctionContext(this._ctx, this.state);
        this.enterRule(localctx, 108, FlinkSqlParser.RULE_createFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 921;
            this.match(FlinkSqlParser.KW_CREATE);
            this.state = 925;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
            case 1:
                {
                this.state = 922;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 923;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 924;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 927;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 929;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
            case 1:
                {
                this.state = 928;
                this.ifNotExists();
                }
                break;
            }
            this.state = 931;
            this.functionName();
            this.state = 932;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 933;
            this.identifier();
            this.state = 936;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===276) {
                {
                this.state = 934;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 935;
                _la = this._input.LA(1);
                if(!(_la===66 || _la===107 || _la===126)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
            }

            this.state = 939;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===361) {
                {
                this.state = 938;
                this.usingClause();
                }
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
    public usingClause(): UsingClauseContext {
        let localctx: UsingClauseContext = new UsingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 110, FlinkSqlParser.RULE_usingClause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 941;
            this.match(FlinkSqlParser.KW_USING);
            this.state = 942;
            this.match(FlinkSqlParser.KW_JAR);
            this.state = 943;
            this.jarFileName();
            this.state = 949;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 944;
                this.match(FlinkSqlParser.COMMA);
                this.state = 945;
                this.match(FlinkSqlParser.KW_JAR);
                this.state = 946;
                this.jarFileName();
                }
                }
                this.state = 951;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public jarFileName(): JarFileNameContext {
        let localctx: JarFileNameContext = new JarFileNameContext(this._ctx, this.state);
        this.enterRule(localctx, 112, FlinkSqlParser.RULE_jarFileName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 952;
            this.match(FlinkSqlParser.STRING_LITERAL);
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
    public alterTable(): AlterTableContext {
        let localctx: AlterTableContext = new AlterTableContext(this._ctx, this.state);
        this.enterRule(localctx, 114, FlinkSqlParser.RULE_alterTable);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 954;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 955;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 957;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
            case 1:
                {
                this.state = 956;
                this.ifExists();
                }
                break;
            }
            this.state = 959;
            this.tablePath();
            this.state = 965;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
            case 1:
                {
                this.state = 960;
                this.renameDefinition();
                }
                break;
            case 2:
                {
                this.state = 961;
                this.setKeyValueDefinition();
                }
                break;
            case 3:
                {
                this.state = 962;
                this.addConstraint();
                }
                break;
            case 4:
                {
                this.state = 963;
                this.dropConstraint();
                }
                break;
            case 5:
                {
                this.state = 964;
                this.addUnique();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public renameDefinition(): RenameDefinitionContext {
        let localctx: RenameDefinitionContext = new RenameDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 116, FlinkSqlParser.RULE_renameDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 967;
            this.match(FlinkSqlParser.KW_RENAME);
            this.state = 969;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294963184) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
                {
                this.state = 968;
                this.uid();
                }
            }

            this.state = 971;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 972;
            this.uid();
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
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        let localctx: SetKeyValueDefinitionContext = new SetKeyValueDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 118, FlinkSqlParser.RULE_setKeyValueDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 974;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 975;
            this.tablePropertyList();
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
    public addConstraint(): AddConstraintContext {
        let localctx: AddConstraintContext = new AddConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 120, FlinkSqlParser.RULE_addConstraint);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 977;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 978;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 979;
            this.constraintName();
            this.state = 980;
            this.match(FlinkSqlParser.KW_PRIMARY);
            this.state = 981;
            this.match(FlinkSqlParser.KW_KEY);
            this.state = 982;
            this.columnNameList();
            this.state = 984;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===298) {
                {
                this.state = 983;
                this.notForced();
                }
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
    public dropConstraint(): DropConstraintContext {
        let localctx: DropConstraintContext = new DropConstraintContext(this._ctx, this.state);
        this.enterRule(localctx, 122, FlinkSqlParser.RULE_dropConstraint);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 986;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 987;
            this.match(FlinkSqlParser.KW_CONSTRAINT);
            this.state = 988;
            this.constraintName();
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
    public addUnique(): AddUniqueContext {
        let localctx: AddUniqueContext = new AddUniqueContext(this._ctx, this.state);
        this.enterRule(localctx, 124, FlinkSqlParser.RULE_addUnique);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 990;
            this.match(FlinkSqlParser.KW_ADD);
            this.state = 991;
            this.match(FlinkSqlParser.KW_UNIQUE);
            this.state = 992;
            this.columnNameList();
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
    public notForced(): NotForcedContext {
        let localctx: NotForcedContext = new NotForcedContext(this._ctx, this.state);
        this.enterRule(localctx, 126, FlinkSqlParser.RULE_notForced);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 994;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 995;
            this.match(FlinkSqlParser.KW_ENFORCED);
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
    public alertView(): AlertViewContext {
        let localctx: AlertViewContext = new AlertViewContext(this._ctx, this.state);
        this.enterRule(localctx, 128, FlinkSqlParser.RULE_alertView);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 997;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 998;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 999;
            this.uid();
            this.state = 1003;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_RENAME:
                {
                this.state = 1000;
                this.renameDefinition();
                }
                break;
            case FlinkSqlParser.KW_AS:
                {
                this.state = 1001;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1002;
                this.queryStatement(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public alterDatabase(): AlterDatabaseContext {
        let localctx: AlterDatabaseContext = new AlterDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 130, FlinkSqlParser.RULE_alterDatabase);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1005;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1006;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1007;
            this.databasePath();
            this.state = 1008;
            this.setKeyValueDefinition();
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
    public alterFunction(): AlterFunctionContext {
        let localctx: AlterFunctionContext = new AlterFunctionContext(this._ctx, this.state);
        this.enterRule(localctx, 132, FlinkSqlParser.RULE_alterFunction);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1010;
            this.match(FlinkSqlParser.KW_ALTER);
            this.state = 1014;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
            case 1:
                {
                this.state = 1011;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1012;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1013;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1016;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
            case 1:
                {
                this.state = 1017;
                this.ifExists();
                }
                break;
            }
            this.state = 1020;
            this.uid();
            this.state = 1021;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1022;
            this.identifier();
            this.state = 1025;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===276) {
                {
                this.state = 1023;
                this.match(FlinkSqlParser.KW_LANGUAGE);
                this.state = 1024;
                _la = this._input.LA(1);
                if(!(_la===66 || _la===107 || _la===126)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
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
    public dropCatalog(): DropCatalogContext {
        let localctx: DropCatalogContext = new DropCatalogContext(this._ctx, this.state);
        this.enterRule(localctx, 134, FlinkSqlParser.RULE_dropCatalog);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1027;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1028;
            this.match(FlinkSqlParser.KW_CATALOG);
            this.state = 1030;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
            case 1:
                {
                this.state = 1029;
                this.ifExists();
                }
                break;
            }
            this.state = 1032;
            this.catalogPath();
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
    public dropTable(): DropTableContext {
        let localctx: DropTableContext = new DropTableContext(this._ctx, this.state);
        this.enterRule(localctx, 136, FlinkSqlParser.RULE_dropTable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1034;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1036;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1035;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1038;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1040;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
            case 1:
                {
                this.state = 1039;
                this.ifExists();
                }
                break;
            }
            this.state = 1042;
            this.tablePath();
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
    public dropDatabase(): DropDatabaseContext {
        let localctx: DropDatabaseContext = new DropDatabaseContext(this._ctx, this.state);
        this.enterRule(localctx, 138, FlinkSqlParser.RULE_dropDatabase);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1044;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1045;
            this.match(FlinkSqlParser.KW_DATABASE);
            this.state = 1047;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 103, this._ctx) ) {
            case 1:
                {
                this.state = 1046;
                this.ifExists();
                }
                break;
            }
            this.state = 1049;
            this.databasePath();
            this.state = 1051;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===11 || _la===123) {
                {
                this.state = 1050;
                localctx._dropType = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===11 || _la===123)) {
                    localctx._dropType = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
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
    public dropView(): DropViewContext {
        let localctx: DropViewContext = new DropViewContext(this._ctx, this.state);
        this.enterRule(localctx, 140, FlinkSqlParser.RULE_dropView);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1053;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1055;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===150) {
                {
                this.state = 1054;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
            }

            this.state = 1057;
            this.match(FlinkSqlParser.KW_VIEW);
            this.state = 1059;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
            case 1:
                {
                this.state = 1058;
                this.ifExists();
                }
                break;
            }
            this.state = 1061;
            this.uid();
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
    public dropFunction(): DropFunctionContext {
        let localctx: DropFunctionContext = new DropFunctionContext(this._ctx, this.state);
        this.enterRule(localctx, 142, FlinkSqlParser.RULE_dropFunction);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1063;
            this.match(FlinkSqlParser.KW_DROP);
            this.state = 1067;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
            case 1:
                {
                this.state = 1064;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                }
                break;
            case 2:
                {
                this.state = 1065;
                this.match(FlinkSqlParser.KW_TEMPORARY);
                this.state = 1066;
                this.match(FlinkSqlParser.KW_SYSTEM);
                }
                break;
            }
            this.state = 1069;
            this.match(FlinkSqlParser.KW_FUNCTION);
            this.state = 1071;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 108, this._ctx) ) {
            case 1:
                {
                this.state = 1070;
                this.ifExists();
                }
                break;
            }
            this.state = 1073;
            this.functionName();
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
    public insertStatement(): InsertStatementContext {
        let localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 144, FlinkSqlParser.RULE_insertStatement);
        let _la: number;
        try {
            this.state = 1082;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1076;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===244) {
                    {
                    this.state = 1075;
                    this.match(FlinkSqlParser.KW_EXECUTE);
                    }
                }

                this.state = 1078;
                this.insertSimpleStatement();
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1079;
                this.insertMulStatementCompatibility();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1080;
                this.match(FlinkSqlParser.KW_EXECUTE);
                this.state = 1081;
                this.insertMulStatement();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public insertSimpleStatement(): InsertSimpleStatementContext {
        let localctx: InsertSimpleStatementContext = new InsertSimpleStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 146, FlinkSqlParser.RULE_insertSimpleStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1084;
            this.match(FlinkSqlParser.KW_INSERT);
            this.state = 1085;
            _la = this._input.LA(1);
            if(!(_la===93 || _la===272)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 1086;
            this.tablePath();
            this.state = 1095;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
            case 1:
                {
                this.state = 1088;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===311) {
                    {
                    this.state = 1087;
                    this.insertPartitionDefinition();
                    }
                }

                this.state = 1091;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
                case 1:
                    {
                    this.state = 1090;
                    this.columnNameList();
                    }
                    break;
                }
                this.state = 1093;
                this.queryStatement(0);
                }
                break;
            case 2:
                {
                this.state = 1094;
                this.valuesDefinition();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public insertPartitionDefinition(): InsertPartitionDefinitionContext {
        let localctx: InsertPartitionDefinitionContext = new InsertPartitionDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 148, FlinkSqlParser.RULE_insertPartitionDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1097;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1098;
            this.tablePropertyList();
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
    public valuesDefinition(): ValuesDefinitionContext {
        let localctx: ValuesDefinitionContext = new ValuesDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 150, FlinkSqlParser.RULE_valuesDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1100;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1101;
            this.valuesRowDefinition();
            this.state = 1106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1102;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1103;
                this.valuesRowDefinition();
                }
                }
                this.state = 1108;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public valuesRowDefinition(): ValuesRowDefinitionContext {
        let localctx: ValuesRowDefinitionContext = new ValuesRowDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 152, FlinkSqlParser.RULE_valuesRowDefinition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1109;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1110;
            this.constant();
            this.state = 1115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1111;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1112;
                this.constant();
                }
                }
                this.state = 1117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1118;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
        let localctx: InsertMulStatementCompatibilityContext = new InsertMulStatementCompatibilityContext(this._ctx, this.state);
        this.enterRule(localctx, 154, FlinkSqlParser.RULE_insertMulStatementCompatibility);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1120;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1121;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1122;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1123;
            this.match(FlinkSqlParser.SEMICOLON);
            this.state = 1127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                {
                this.state = 1124;
                this.insertSimpleStatement();
                this.state = 1125;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la===267);
            this.state = 1131;
            this.match(FlinkSqlParser.KW_END);
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
    public insertMulStatement(): InsertMulStatementContext {
        let localctx: InsertMulStatementContext = new InsertMulStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 156, FlinkSqlParser.RULE_insertMulStatement);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1133;
            this.match(FlinkSqlParser.KW_STATEMENT);
            this.state = 1134;
            this.match(FlinkSqlParser.KW_SET);
            this.state = 1135;
            this.match(FlinkSqlParser.KW_BEGIN);
            this.state = 1139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                {
                this.state = 1136;
                this.insertSimpleStatement();
                this.state = 1137;
                this.match(FlinkSqlParser.SEMICOLON);
                }
                }
                this.state = 1141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la===267);
            this.state = 1143;
            this.match(FlinkSqlParser.KW_END);
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

    public queryStatement(): QueryStatementContext;
    public queryStatement(_p: number): QueryStatementContext;
    public queryStatement(_p?: number): QueryStatementContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new QueryStatementContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 158;
        this.enterRecursionRule(localctx, 158, FlinkSqlParser.RULE_queryStatement, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1168;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 122, this._ctx) ) {
            case 1:
                {
                this.state = 1146;
                this.valuesClause();
                }
                break;
            case 2:
                {
                this.state = 1147;
                this.withClause();
                this.state = 1148;
                this.queryStatement(5);
                }
                break;
            case 3:
                {
                this.state = 1150;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1151;
                this.queryStatement(0);
                this.state = 1152;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                this.state = 1154;
                this.selectClause();
                this.state = 1156;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 118, this._ctx) ) {
                case 1:
                    {
                    this.state = 1155;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1159;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 119, this._ctx) ) {
                case 1:
                    {
                    this.state = 1158;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            case 5:
                {
                this.state = 1161;
                this.selectStatement();
                this.state = 1163;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 120, this._ctx) ) {
                case 1:
                    {
                    this.state = 1162;
                    this.orderByClause();
                    }
                    break;
                }
                this.state = 1166;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
                case 1:
                    {
                    this.state = 1165;
                    this.limitClause();
                    }
                    break;
                }
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1184;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    {
                    localctx = new QueryStatementContext(_parentctx, _parentState);
                    localctx._left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_queryStatement);
                    this.state = 1170;
                    if (!(this.precpred(this._ctx, 3))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                    }
                    this.state = 1171;
                    localctx._operator = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===243 || _la===270 || _la===354)) {
                        localctx._operator = this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 1173;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===178) {
                        {
                        this.state = 1172;
                        this.match(FlinkSqlParser.KW_ALL);
                        }
                    }

                    this.state = 1175;
                    localctx._right = this.queryStatement(0);
                    this.state = 1177;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1176;
                        this.orderByClause();
                        }
                        break;
                    }
                    this.state = 1180;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1179;
                        this.limitClause();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 1186;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 126, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public valuesClause(): ValuesClauseContext {
        let localctx: ValuesClauseContext = new ValuesClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 160, FlinkSqlParser.RULE_valuesClause);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1187;
            this.match(FlinkSqlParser.KW_VALUES);
            this.state = 1188;
            this.expression();
            this.state = 1193;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1189;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1190;
                    this.expression();
                    }
                    }
                }
                this.state = 1195;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 127, this._ctx);
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
    public withClause(): WithClauseContext {
        let localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 162, FlinkSqlParser.RULE_withClause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1196;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 1197;
            this.withItem();
            this.state = 1202;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1198;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1199;
                this.withItem();
                }
                }
                this.state = 1204;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public withItem(): WithItemContext {
        let localctx: WithItemContext = new WithItemContext(this._ctx, this.state);
        this.enterRule(localctx, 164, FlinkSqlParser.RULE_withItem);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1205;
            this.withItemName();
            this.state = 1217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===384) {
                {
                this.state = 1206;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1207;
                this.columnName();
                this.state = 1212;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1208;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1209;
                    this.columnName();
                    }
                    }
                    this.state = 1214;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1215;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
            }

            this.state = 1219;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1220;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1221;
            this.queryStatement(0);
            this.state = 1222;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public withItemName(): WithItemNameContext {
        let localctx: WithItemNameContext = new WithItemNameContext(this._ctx, this.state);
        this.enterRule(localctx, 166, FlinkSqlParser.RULE_withItemName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1224;
            this.identifier();
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
    public selectStatement(): SelectStatementContext {
        let localctx: SelectStatementContext = new SelectStatementContext(this._ctx, this.state);
        this.enterRule(localctx, 168, FlinkSqlParser.RULE_selectStatement);
        try {
            this.state = 1244;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 135, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1226;
                this.selectClause();
                this.state = 1227;
                this.fromClause();
                this.state = 1229;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 131, this._ctx) ) {
                case 1:
                    {
                    this.state = 1228;
                    this.whereClause();
                    }
                    break;
                }
                this.state = 1232;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 132, this._ctx) ) {
                case 1:
                    {
                    this.state = 1231;
                    this.groupByClause();
                    }
                    break;
                }
                this.state = 1235;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 133, this._ctx) ) {
                case 1:
                    {
                    this.state = 1234;
                    this.havingClause();
                    }
                    break;
                }
                this.state = 1238;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
                case 1:
                    {
                    this.state = 1237;
                    this.windowClause();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1240;
                this.selectClause();
                this.state = 1241;
                this.fromClause();
                this.state = 1242;
                this.matchRecognizeClause();
                }
                break;
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
    public selectClause(): SelectClauseContext {
        let localctx: SelectClauseContext = new SelectClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 170, FlinkSqlParser.RULE_selectClause);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1246;
            this.match(FlinkSqlParser.KW_SELECT);
            this.state = 1248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===178 || _la===235) {
                {
                this.state = 1247;
                this.setQuantifier();
                }
            }

            this.state = 1259;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 138, this._ctx) ) {
            case 1:
                {
                this.state = 1250;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 2:
                {
                this.state = 1251;
                this.projectItemDefinition();
                this.state = 1256;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1252;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1253;
                        this.projectItemDefinition();
                        }
                        }
                    }
                    this.state = 1258;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 137, this._ctx);
                }
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public projectItemDefinition(): ProjectItemDefinitionContext {
        let localctx: ProjectItemDefinitionContext = new ProjectItemDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 172, FlinkSqlParser.RULE_projectItemDefinition);
        let _la: number;
        try {
            this.state = 1269;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 141, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1261;
                this.overWindowItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1262;
                this.expression();
                this.state = 1267;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 140, this._ctx) ) {
                case 1:
                    {
                    this.state = 1264;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===185) {
                        {
                        this.state = 1263;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                    }

                    this.state = 1266;
                    this.expression();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public overWindowItem(): OverWindowItemContext {
        let localctx: OverWindowItemContext = new OverWindowItemContext(this._ctx, this.state);
        this.enterRule(localctx, 174, FlinkSqlParser.RULE_overWindowItem);
        try {
            this.state = 1283;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 142, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1271;
                this.primaryExpression(0);
                this.state = 1272;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1273;
                this.windowSpec();
                this.state = 1274;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1275;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1277;
                this.primaryExpression(0);
                this.state = 1278;
                this.match(FlinkSqlParser.KW_OVER);
                this.state = 1279;
                this.errorCapturingIdentifier();
                this.state = 1280;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1281;
                this.identifier();
                }
                break;
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
    public fromClause(): FromClauseContext {
        let localctx: FromClauseContext = new FromClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 176, FlinkSqlParser.RULE_fromClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1285;
            this.match(FlinkSqlParser.KW_FROM);
            this.state = 1286;
            this.tableExpression(0);
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

    public tableExpression(): TableExpressionContext;
    public tableExpression(_p: number): TableExpressionContext;
    public tableExpression(_p?: number): TableExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new TableExpressionContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 178;
        this.enterRecursionRule(localctx, 178, FlinkSqlParser.RULE_tableExpression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1299;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 144, this._ctx) ) {
            case 1:
                {
                this.state = 1289;
                this.tableReference();
                this.state = 1294;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
                while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                        {
                        this.state = 1290;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1291;
                        this.tableReference();
                        }
                        }
                    }
                    this.state = 1296;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input, 143, this._ctx);
                }
                }
                break;
            case 2:
                {
                this.state = 1297;
                this.inlineDataValueClause();
                }
                break;
            case 3:
                {
                this.state = 1298;
                this.windoTVFClause();
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1322;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1320;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 149, this._ctx) ) {
                    case 1:
                        {
                        localctx = new TableExpressionContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1301;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1302;
                        this.match(FlinkSqlParser.KW_CROSS);
                        this.state = 1303;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1304;
                        this.tableExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localctx = new TableExpressionContext(_parentctx, _parentState);
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_tableExpression);
                        this.state = 1305;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1307;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===294) {
                            {
                            this.state = 1306;
                            this.match(FlinkSqlParser.KW_NATURAL);
                            }
                        }

                        this.state = 1310;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 67112961) !== 0) || _la===323) {
                            {
                            this.state = 1309;
                            _la = this._input.LA(1);
                            if(!(((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 67112961) !== 0) || _la===323)) {
                            this._errHandler.recoverInline(this);
                            }
                            else {
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            }
                        }

                        this.state = 1313;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===308) {
                            {
                            this.state = 1312;
                            this.match(FlinkSqlParser.KW_OUTER);
                            }
                        }

                        this.state = 1315;
                        this.match(FlinkSqlParser.KW_JOIN);
                        this.state = 1316;
                        this.tableExpression(0);
                        this.state = 1318;
                        this._errHandler.sync(this);
                        switch ( this._interp.adaptivePredict(this._input, 148, this._ctx) ) {
                        case 1:
                            {
                            this.state = 1317;
                            this.joinCondition();
                            }
                            break;
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1324;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 150, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public tableReference(): TableReferenceContext {
        let localctx: TableReferenceContext = new TableReferenceContext(this._ctx, this.state);
        this.enterRule(localctx, 180, FlinkSqlParser.RULE_tableReference);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1325;
            this.tablePrimary();
            this.state = 1327;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 151, this._ctx) ) {
            case 1:
                {
                this.state = 1326;
                this.tableAlias();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public tablePrimary(): TablePrimaryContext {
        let localctx: TablePrimaryContext = new TablePrimaryContext(this._ctx, this.state);
        this.enterRule(localctx, 182, FlinkSqlParser.RULE_tablePrimary);
        let _la: number;
        try {
            this.state = 1370;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 158, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===344) {
                    {
                    this.state = 1329;
                    this.match(FlinkSqlParser.KW_TABLE);
                    }
                }

                this.state = 1332;
                this.tablePath();
                this.state = 1334;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 153, this._ctx) ) {
                case 1:
                    {
                    this.state = 1333;
                    this.systemTimePeriod();
                    }
                    break;
                }
                this.state = 1340;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 155, this._ctx) ) {
                case 1:
                    {
                    this.state = 1337;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la===185) {
                        {
                        this.state = 1336;
                        this.match(FlinkSqlParser.KW_AS);
                        }
                    }

                    this.state = 1339;
                    this.correlationName();
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1342;
                this.match(FlinkSqlParser.KW_LATERAL);
                this.state = 1343;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1344;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1345;
                this.functionName();
                this.state = 1346;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1347;
                this.functionParam();
                this.state = 1352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1348;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1349;
                    this.functionParam();
                    }
                    }
                    this.state = 1354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1355;
                this.match(FlinkSqlParser.RR_BRACKET);
                this.state = 1356;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===277) {
                    {
                    this.state = 1358;
                    this.match(FlinkSqlParser.KW_LATERAL);
                    }
                }

                this.state = 1361;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1362;
                this.queryStatement(0);
                this.state = 1363;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1365;
                this.match(FlinkSqlParser.KW_UNNEST);
                this.state = 1366;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1367;
                this.expression();
                this.state = 1368;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
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
    public systemTimePeriod(): SystemTimePeriodContext {
        let localctx: SystemTimePeriodContext = new SystemTimePeriodContext(this._ctx, this.state);
        this.enterRule(localctx, 184, FlinkSqlParser.RULE_systemTimePeriod);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1372;
            this.match(FlinkSqlParser.KW_FOR);
            this.state = 1373;
            this.match(FlinkSqlParser.KW_SYSTEM_TIME);
            this.state = 1374;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1375;
            this.match(FlinkSqlParser.KW_OF);
            this.state = 1376;
            this.dateTimeExpression();
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
    public dateTimeExpression(): DateTimeExpressionContext {
        let localctx: DateTimeExpressionContext = new DateTimeExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 186, FlinkSqlParser.RULE_dateTimeExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1378;
            this.expression();
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
    public inlineDataValueClause(): InlineDataValueClauseContext {
        let localctx: InlineDataValueClauseContext = new InlineDataValueClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 188, FlinkSqlParser.RULE_inlineDataValueClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1380;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1381;
            this.valuesDefinition();
            this.state = 1382;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1383;
            this.tableAlias();
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
    public windoTVFClause(): WindoTVFClauseContext {
        let localctx: WindoTVFClauseContext = new WindoTVFClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 190, FlinkSqlParser.RULE_windoTVFClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1385;
            this.match(FlinkSqlParser.KW_TABLE);
            this.state = 1386;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1387;
            this.windowTVFExression();
            this.state = 1388;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public windowTVFExression(): WindowTVFExressionContext {
        let localctx: WindowTVFExressionContext = new WindowTVFExressionContext(this._ctx, this.state);
        this.enterRule(localctx, 192, FlinkSqlParser.RULE_windowTVFExression);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1390;
            this.windoTVFName();
            this.state = 1391;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1392;
            this.windowTVFParam();
            this.state = 1397;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1393;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1394;
                this.windowTVFParam();
                }
                }
                this.state = 1399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 1400;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public windoTVFName(): WindoTVFNameContext {
        let localctx: WindoTVFNameContext = new WindoTVFNameContext(this._ctx, this.state);
        this.enterRule(localctx, 194, FlinkSqlParser.RULE_windoTVFName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1402;
            _la = this._input.LA(1);
            if(!(_la===23 || _la===57 || _la===156)) {
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
    public windowTVFParam(): WindowTVFParamContext {
        let localctx: WindowTVFParamContext = new WindowTVFParamContext(this._ctx, this.state);
        this.enterRule(localctx, 196, FlinkSqlParser.RULE_windowTVFParam);
        try {
            this.state = 1419;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 160, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1404;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1405;
                this.timeAttrColumn();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1406;
                this.columnDescriptor();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1407;
                this.timeIntervalExpression();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1408;
                this.match(FlinkSqlParser.KW_DATA);
                this.state = 1409;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1410;
                this.match(FlinkSqlParser.KW_TABLE);
                this.state = 1411;
                this.timeAttrColumn();
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1412;
                this.match(FlinkSqlParser.KW_TIMECOL);
                this.state = 1413;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1414;
                this.columnDescriptor();
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1415;
                this.timeIntervalParamName();
                this.state = 1416;
                this.match(FlinkSqlParser.DOUBLE_RIGHT_ARROW);
                this.state = 1417;
                this.timeIntervalExpression();
                }
                break;
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
    public timeIntervalParamName(): TimeIntervalParamNameContext {
        let localctx: TimeIntervalParamNameContext = new TimeIntervalParamNameContext(this._ctx, this.state);
        this.enterRule(localctx, 198, FlinkSqlParser.RULE_timeIntervalParamName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1421;
            _la = this._input.LA(1);
            if(!(_la===24 || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & 4163) !== 0) || _la===302)) {
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
    public columnDescriptor(): ColumnDescriptorContext {
        let localctx: ColumnDescriptorContext = new ColumnDescriptorContext(this._ctx, this.state);
        this.enterRule(localctx, 200, FlinkSqlParser.RULE_columnDescriptor);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1423;
            this.match(FlinkSqlParser.KW_DESCRIPTOR);
            this.state = 1424;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1425;
            this.uid();
            this.state = 1426;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public joinCondition(): JoinConditionContext {
        let localctx: JoinConditionContext = new JoinConditionContext(this._ctx, this.state);
        this.enterRule(localctx, 202, FlinkSqlParser.RULE_joinCondition);
        let _la: number;
        try {
            this.state = 1442;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_ON:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1428;
                this.match(FlinkSqlParser.KW_ON);
                this.state = 1429;
                this.booleanExpression(0);
                }
                break;
            case FlinkSqlParser.KW_USING:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1430;
                this.match(FlinkSqlParser.KW_USING);
                this.state = 1431;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1432;
                this.uid();
                this.state = 1437;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1433;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1434;
                    this.uid();
                    }
                    }
                    this.state = 1439;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1440;
                this.match(FlinkSqlParser.RR_BRACKET);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public whereClause(): WhereClauseContext {
        let localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 204, FlinkSqlParser.RULE_whereClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1444;
            this.match(FlinkSqlParser.KW_WHERE);
            this.state = 1445;
            this.booleanExpression(0);
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
    public groupByClause(): GroupByClauseContext {
        let localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 206, FlinkSqlParser.RULE_groupByClause);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1447;
            this.match(FlinkSqlParser.KW_GROUP);
            this.state = 1448;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1449;
            this.groupItemDefinition();
            this.state = 1454;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1450;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1451;
                    this.groupItemDefinition();
                    }
                    }
                }
                this.state = 1456;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 163, this._ctx);
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
    public groupItemDefinition(): GroupItemDefinitionContext {
        let localctx: GroupItemDefinitionContext = new GroupItemDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 208, FlinkSqlParser.RULE_groupItemDefinition);
        let _la: number;
        try {
            this.state = 1496;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 167, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1457;
                this.expression();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1458;
                this.groupWindowFunction();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1459;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1460;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1461;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1462;
                this.expression();
                this.state = 1467;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1463;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1464;
                    this.expression();
                    }
                    }
                    this.state = 1469;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1470;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1472;
                this.groupingSetsNotaionName();
                this.state = 1473;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1474;
                this.expression();
                this.state = 1479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1475;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1476;
                    this.expression();
                    }
                    }
                    this.state = 1481;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1482;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1484;
                this.groupingSets();
                this.state = 1485;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1486;
                this.groupItemDefinition();
                this.state = 1491;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1487;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1488;
                    this.groupItemDefinition();
                    }
                    }
                    this.state = 1493;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1494;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
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
    public groupingSets(): GroupingSetsContext {
        let localctx: GroupingSetsContext = new GroupingSetsContext(this._ctx, this.state);
        this.enterRule(localctx, 210, FlinkSqlParser.RULE_groupingSets);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1498;
            this.match(FlinkSqlParser.KW_GROUPING);
            this.state = 1499;
            this.match(FlinkSqlParser.KW_SETS);
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
    public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
        let localctx: GroupingSetsNotaionNameContext = new GroupingSetsNotaionNameContext(this._ctx, this.state);
        this.enterRule(localctx, 212, FlinkSqlParser.RULE_groupingSetsNotaionName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1501;
            _la = this._input.LA(1);
            if(!(_la===221 || _la===326)) {
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
    public groupWindowFunction(): GroupWindowFunctionContext {
        let localctx: GroupWindowFunctionContext = new GroupWindowFunctionContext(this._ctx, this.state);
        this.enterRule(localctx, 214, FlinkSqlParser.RULE_groupWindowFunction);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1503;
            this.groupWindowFunctionName();
            this.state = 1504;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1505;
            this.timeAttrColumn();
            this.state = 1506;
            this.match(FlinkSqlParser.COMMA);
            this.state = 1507;
            this.timeIntervalExpression();
            this.state = 1508;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        let localctx: GroupWindowFunctionNameContext = new GroupWindowFunctionNameContext(this._ctx, this.state);
        this.enterRule(localctx, 216, FlinkSqlParser.RULE_groupWindowFunctionName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1510;
            _la = this._input.LA(1);
            if(!(_la===57 || _la===136 || _la===156)) {
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
    public timeAttrColumn(): TimeAttrColumnContext {
        let localctx: TimeAttrColumnContext = new TimeAttrColumnContext(this._ctx, this.state);
        this.enterRule(localctx, 218, FlinkSqlParser.RULE_timeAttrColumn);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1512;
            this.uid();
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
    public havingClause(): HavingClauseContext {
        let localctx: HavingClauseContext = new HavingClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 220, FlinkSqlParser.RULE_havingClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1514;
            this.match(FlinkSqlParser.KW_HAVING);
            this.state = 1515;
            this.booleanExpression(0);
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
    public windowClause(): WindowClauseContext {
        let localctx: WindowClauseContext = new WindowClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 222, FlinkSqlParser.RULE_windowClause);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1517;
            this.match(FlinkSqlParser.KW_WINDOW);
            this.state = 1518;
            this.namedWindow();
            this.state = 1523;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 168, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1519;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1520;
                    this.namedWindow();
                    }
                    }
                }
                this.state = 1525;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public namedWindow(): NamedWindowContext {
        let localctx: NamedWindowContext = new NamedWindowContext(this._ctx, this.state);
        this.enterRule(localctx, 224, FlinkSqlParser.RULE_namedWindow);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1526;
            localctx._name = this.errorCapturingIdentifier();
            this.state = 1527;
            this.match(FlinkSqlParser.KW_AS);
            this.state = 1528;
            this.windowSpec();
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
    public windowSpec(): WindowSpecContext {
        let localctx: WindowSpecContext = new WindowSpecContext(this._ctx, this.state);
        this.enterRule(localctx, 226, FlinkSqlParser.RULE_windowSpec);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1531;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294963184) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0) || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 19) !== 0)) {
                {
                this.state = 1530;
                localctx._name = this.errorCapturingIdentifier();
                }
            }

            this.state = 1533;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1535;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===311) {
                {
                this.state = 1534;
                this.partitionByClause();
                }
            }

            this.state = 1538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===306) {
                {
                this.state = 1537;
                this.orderByClause();
                }
            }

            this.state = 1541;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===319 || _la===328) {
                {
                this.state = 1540;
                this.windowFrame();
                }
            }

            this.state = 1543;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public matchRecognizeClause(): MatchRecognizeClauseContext {
        let localctx: MatchRecognizeClauseContext = new MatchRecognizeClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 228, FlinkSqlParser.RULE_matchRecognizeClause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1545;
            this.match(FlinkSqlParser.KW_MATCH_RECOGNIZE);
            this.state = 1546;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1548;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===311) {
                {
                this.state = 1547;
                this.partitionByClause();
                }
            }

            this.state = 1551;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===306) {
                {
                this.state = 1550;
                this.orderByClause();
                }
            }

            this.state = 1554;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===285) {
                {
                this.state = 1553;
                this.measuresClause();
                }
            }

            this.state = 1557;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===178 || _la===304) {
                {
                this.state = 1556;
                this.outputMode();
                }
            }

            this.state = 1560;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===6) {
                {
                this.state = 1559;
                this.afterMatchStrategy();
                }
            }

            this.state = 1563;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===312) {
                {
                this.state = 1562;
                this.patternDefination();
                }
            }

            this.state = 1565;
            this.patternVariablesDefination();
            this.state = 1566;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1571;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 180, this._ctx) ) {
            case 1:
                {
                this.state = 1568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===185) {
                    {
                    this.state = 1567;
                    this.match(FlinkSqlParser.KW_AS);
                    }
                }

                this.state = 1570;
                this.identifier();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public orderByClause(): OrderByClauseContext {
        let localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 230, FlinkSqlParser.RULE_orderByClause);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1573;
            this.match(FlinkSqlParser.KW_ORDER);
            this.state = 1574;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1575;
            this.orderItemDefition();
            this.state = 1580;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    {
                    {
                    this.state = 1576;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1577;
                    this.orderItemDefition();
                    }
                    }
                }
                this.state = 1582;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 181, this._ctx);
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
    public orderItemDefition(): OrderItemDefitionContext {
        let localctx: OrderItemDefitionContext = new OrderItemDefitionContext(this._ctx, this.state);
        this.enterRule(localctx, 232, FlinkSqlParser.RULE_orderItemDefition);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1583;
            this.expression();
            this.state = 1585;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 182, this._ctx) ) {
            case 1:
                {
                this.state = 1584;
                localctx._ordering = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===8 || _la===30)) {
                    localctx._ordering = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            }
            this.state = 1589;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 183, this._ctx) ) {
            case 1:
                {
                this.state = 1587;
                this.match(FlinkSqlParser.KW_NULLS);
                this.state = 1588;
                localctx._nullOrder = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===45 || _la===73)) {
                    localctx._nullOrder = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public limitClause(): LimitClauseContext {
        let localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 234, FlinkSqlParser.RULE_limitClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1591;
            this.match(FlinkSqlParser.KW_LIMIT);
            this.state = 1594;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                {
                this.state = 1592;
                this.match(FlinkSqlParser.KW_ALL);
                }
                break;
            case FlinkSqlParser.KW_ADD:
            case FlinkSqlParser.KW_ADMIN:
            case FlinkSqlParser.KW_AFTER:
            case FlinkSqlParser.KW_ANALYZE:
            case FlinkSqlParser.KW_ASC:
            case FlinkSqlParser.KW_BEFORE:
            case FlinkSqlParser.KW_BYTES:
            case FlinkSqlParser.KW_CASCADE:
            case FlinkSqlParser.KW_CATALOGS:
            case FlinkSqlParser.KW_CENTURY:
            case FlinkSqlParser.KW_CHAIN:
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_CHARACTERS:
            case FlinkSqlParser.KW_COMMENT:
            case FlinkSqlParser.KW_COMPACT:
            case FlinkSqlParser.KW_COLUMNS:
            case FlinkSqlParser.KW_CONSTRAINTS:
            case FlinkSqlParser.KW_CONSTRUCTOR:
            case FlinkSqlParser.KW_CUMULATE:
            case FlinkSqlParser.KW_DATA:
            case FlinkSqlParser.KW_DATABASE:
            case FlinkSqlParser.KW_DATABASES:
            case FlinkSqlParser.KW_DAYS:
            case FlinkSqlParser.KW_DECADE:
            case FlinkSqlParser.KW_DEFINED:
            case FlinkSqlParser.KW_DESC:
            case FlinkSqlParser.KW_DESCRIPTOR:
            case FlinkSqlParser.KW_DIV:
            case FlinkSqlParser.KW_ENCODING:
            case FlinkSqlParser.KW_ENFORCED:
            case FlinkSqlParser.KW_ENGINE:
            case FlinkSqlParser.KW_ERROR:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_EXCEPTION:
            case FlinkSqlParser.KW_EXCLUDE:
            case FlinkSqlParser.KW_EXCLUDING:
            case FlinkSqlParser.KW_EXTENDED:
            case FlinkSqlParser.KW_FILE:
            case FlinkSqlParser.KW_FINAL:
            case FlinkSqlParser.KW_FIRST:
            case FlinkSqlParser.KW_FOLLOWING:
            case FlinkSqlParser.KW_FORMAT:
            case FlinkSqlParser.KW_FORTRAN:
            case FlinkSqlParser.KW_FOUND:
            case FlinkSqlParser.KW_FRAC_SECOND:
            case FlinkSqlParser.KW_FUNCTIONS:
            case FlinkSqlParser.KW_GENERAL:
            case FlinkSqlParser.KW_GENERATED:
            case FlinkSqlParser.KW_GO:
            case FlinkSqlParser.KW_GOTO:
            case FlinkSqlParser.KW_GRANTED:
            case FlinkSqlParser.KW_HOP:
            case FlinkSqlParser.KW_HOURS:
            case FlinkSqlParser.KW_IF:
            case FlinkSqlParser.KW_IGNORE:
            case FlinkSqlParser.KW_INCREMENT:
            case FlinkSqlParser.KW_INPUT:
            case FlinkSqlParser.KW_INVOKER:
            case FlinkSqlParser.KW_JAR:
            case FlinkSqlParser.KW_JARS:
            case FlinkSqlParser.KW_JAVA:
            case FlinkSqlParser.KW_JSON:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
            case FlinkSqlParser.KW_KEY:
            case FlinkSqlParser.KW_KEY_MEMBER:
            case FlinkSqlParser.KW_KEY_TYPE:
            case FlinkSqlParser.KW_LABEL:
            case FlinkSqlParser.KW_LAST:
            case FlinkSqlParser.KW_LENGTH:
            case FlinkSqlParser.KW_LEVEL:
            case FlinkSqlParser.KW_LOAD:
            case FlinkSqlParser.KW_MAP:
            case FlinkSqlParser.KW_MICROSECOND:
            case FlinkSqlParser.KW_MILLENNIUM:
            case FlinkSqlParser.KW_MILLISECOND:
            case FlinkSqlParser.KW_MINUTES:
            case FlinkSqlParser.KW_MINVALUE:
            case FlinkSqlParser.KW_MODIFY:
            case FlinkSqlParser.KW_MODULES:
            case FlinkSqlParser.KW_MONTHS:
            case FlinkSqlParser.KW_NANOSECOND:
            case FlinkSqlParser.KW_NULLS:
            case FlinkSqlParser.KW_NUMBER:
            case FlinkSqlParser.KW_OPTION:
            case FlinkSqlParser.KW_OPTIONS:
            case FlinkSqlParser.KW_ORDERING:
            case FlinkSqlParser.KW_OUTPUT:
            case FlinkSqlParser.KW_OVERWRITE:
            case FlinkSqlParser.KW_OVERWRITING:
            case FlinkSqlParser.KW_PARTITIONED:
            case FlinkSqlParser.KW_PARTITIONS:
            case FlinkSqlParser.KW_PASSING:
            case FlinkSqlParser.KW_PAST:
            case FlinkSqlParser.KW_PATH:
            case FlinkSqlParser.KW_PLACING:
            case FlinkSqlParser.KW_PLAN:
            case FlinkSqlParser.KW_PRECEDING:
            case FlinkSqlParser.KW_PRESERVE:
            case FlinkSqlParser.KW_PRIOR:
            case FlinkSqlParser.KW_PRIVILEGES:
            case FlinkSqlParser.KW_PUBLIC:
            case FlinkSqlParser.KW_PYTHON:
            case FlinkSqlParser.KW_PYTHON_FILES:
            case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
            case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
            case FlinkSqlParser.KW_PYTHON_JAR:
            case FlinkSqlParser.KW_PYTHON_ARCHIVES:
            case FlinkSqlParser.KW_PYTHON_PARAMETER:
            case FlinkSqlParser.KW_QUARTER:
            case FlinkSqlParser.KW_RAW:
            case FlinkSqlParser.KW_READ:
            case FlinkSqlParser.KW_RELATIVE:
            case FlinkSqlParser.KW_REMOVE:
            case FlinkSqlParser.KW_RENAME:
            case FlinkSqlParser.KW_REPLACE:
            case FlinkSqlParser.KW_RESPECT:
            case FlinkSqlParser.KW_RESTART:
            case FlinkSqlParser.KW_RESTRICT:
            case FlinkSqlParser.KW_ROLE:
            case FlinkSqlParser.KW_ROW_COUNT:
            case FlinkSqlParser.KW_SCALA:
            case FlinkSqlParser.KW_SCALAR:
            case FlinkSqlParser.KW_SCALE:
            case FlinkSqlParser.KW_SCHEMA:
            case FlinkSqlParser.KW_SECONDS:
            case FlinkSqlParser.KW_SECTION:
            case FlinkSqlParser.KW_SECURITY:
            case FlinkSqlParser.KW_SELF:
            case FlinkSqlParser.KW_SERVER:
            case FlinkSqlParser.KW_SERVER_NAME:
            case FlinkSqlParser.KW_SESSION:
            case FlinkSqlParser.KW_SETS:
            case FlinkSqlParser.KW_SIMPLE:
            case FlinkSqlParser.KW_SIZE:
            case FlinkSqlParser.KW_SLIDE:
            case FlinkSqlParser.KW_SOURCE:
            case FlinkSqlParser.KW_SPACE:
            case FlinkSqlParser.KW_STATE:
            case FlinkSqlParser.KW_STATEMENT:
            case FlinkSqlParser.KW_STEP:
            case FlinkSqlParser.KW_STRING:
            case FlinkSqlParser.KW_STRUCTURE:
            case FlinkSqlParser.KW_STYLE:
            case FlinkSqlParser.KW_TABLES:
            case FlinkSqlParser.KW_TEMPORARY:
            case FlinkSqlParser.KW_TIMECOL:
            case FlinkSqlParser.KW_TIMESTAMP_LTZ:
            case FlinkSqlParser.KW_TIMESTAMPADD:
            case FlinkSqlParser.KW_TIMESTAMPDIFF:
            case FlinkSqlParser.KW_TRANSFORM:
            case FlinkSqlParser.KW_TUMBLE:
            case FlinkSqlParser.KW_TYPE:
            case FlinkSqlParser.KW_UNDER:
            case FlinkSqlParser.KW_UNLOAD:
            case FlinkSqlParser.KW_USAGE:
            case FlinkSqlParser.KW_USE:
            case FlinkSqlParser.KW_UTF16:
            case FlinkSqlParser.KW_UTF32:
            case FlinkSqlParser.KW_UTF8:
            case FlinkSqlParser.KW_VERSION:
            case FlinkSqlParser.KW_VIEW:
            case FlinkSqlParser.KW_VIEWS:
            case FlinkSqlParser.KW_VIRTUAL:
            case FlinkSqlParser.KW_WATERMARK:
            case FlinkSqlParser.KW_WATERMARKS:
            case FlinkSqlParser.KW_WEEK:
            case FlinkSqlParser.KW_WORK:
            case FlinkSqlParser.KW_WRAPPER:
            case FlinkSqlParser.KW_YEARS:
            case FlinkSqlParser.KW_ZONE:
            case FlinkSqlParser.KW_ABS:
            case FlinkSqlParser.KW_ARRAY:
            case FlinkSqlParser.KW_AVG:
            case FlinkSqlParser.KW_CASE:
            case FlinkSqlParser.KW_CAST:
            case FlinkSqlParser.KW_CEIL:
            case FlinkSqlParser.KW_COALESCE:
            case FlinkSqlParser.KW_COLLECT:
            case FlinkSqlParser.KW_COUNT:
            case FlinkSqlParser.KW_DATE:
            case FlinkSqlParser.KW_DAY:
            case FlinkSqlParser.KW_EXISTS:
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_GROUPING:
            case FlinkSqlParser.KW_HOUR:
            case FlinkSqlParser.KW_INTERVAL:
            case FlinkSqlParser.KW_LAG:
            case FlinkSqlParser.KW_LEFT:
            case FlinkSqlParser.KW_MINUTE:
            case FlinkSqlParser.KW_MONTH:
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
            case FlinkSqlParser.KW_OVERLAY:
            case FlinkSqlParser.KW_POSITION:
            case FlinkSqlParser.KW_POWER:
            case FlinkSqlParser.KW_RANK:
            case FlinkSqlParser.KW_RIGHT:
            case FlinkSqlParser.KW_SECOND:
            case FlinkSqlParser.KW_SUBSTRING:
            case FlinkSqlParser.KW_SUM:
            case FlinkSqlParser.KW_TIME:
            case FlinkSqlParser.KW_TIMESTAMP:
            case FlinkSqlParser.KW_TRUE:
            case FlinkSqlParser.KW_TRUNCATE:
            case FlinkSqlParser.KW_UPPER:
            case FlinkSqlParser.KW_YEAR:
            case FlinkSqlParser.BIT_NOT_OP:
            case FlinkSqlParser.LR_BRACKET:
            case FlinkSqlParser.ASTERISK_SIGN:
            case FlinkSqlParser.HYPNEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.STRING_LITERAL:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
            case FlinkSqlParser.BIT_STRING:
            case FlinkSqlParser.ID_LITERAL:
                {
                this.state = 1593;
                localctx._limit = this.expression();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public partitionByClause(): PartitionByClauseContext {
        let localctx: PartitionByClauseContext = new PartitionByClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 236, FlinkSqlParser.RULE_partitionByClause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1596;
            this.match(FlinkSqlParser.KW_PARTITION);
            this.state = 1597;
            this.match(FlinkSqlParser.KW_BY);
            this.state = 1598;
            this.expression();
            this.state = 1603;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1599;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1600;
                this.expression();
                }
                }
                this.state = 1605;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public quantifiers(): QuantifiersContext {
        let localctx: QuantifiersContext = new QuantifiersContext(this._ctx, this.state);
        this.enterRule(localctx, 238, FlinkSqlParser.RULE_quantifiers);
        try {
            this.state = 1622;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 186, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                {
                this.state = 1606;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                {
                this.state = 1607;
                this.match(FlinkSqlParser.ADD_SIGN);
                }
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                {
                this.state = 1608;
                this.match(FlinkSqlParser.QUESTION_MARK_SIGN);
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                {
                this.state = 1609;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1610;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1611;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1612;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1613;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                {
                this.state = 1614;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1615;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1616;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1617;
                this.match(FlinkSqlParser.RB_BRACKET);
                }
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                {
                this.state = 1618;
                this.match(FlinkSqlParser.LB_BRACKET);
                this.state = 1619;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1620;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1621;
                this.match(FlinkSqlParser.RB_BRACKET);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public measuresClause(): MeasuresClauseContext {
        let localctx: MeasuresClauseContext = new MeasuresClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 240, FlinkSqlParser.RULE_measuresClause);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1624;
            this.match(FlinkSqlParser.KW_MEASURES);
            this.state = 1625;
            this.projectItemDefinition();
            this.state = 1630;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1626;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1627;
                this.projectItemDefinition();
                }
                }
                this.state = 1632;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public patternDefination(): PatternDefinationContext {
        let localctx: PatternDefinationContext = new PatternDefinationContext(this._ctx, this.state);
        this.enterRule(localctx, 242, FlinkSqlParser.RULE_patternDefination);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1633;
            this.match(FlinkSqlParser.KW_PATTERN);
            this.state = 1634;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 1636;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                {
                {
                this.state = 1635;
                this.patternVariable();
                }
                }
                this.state = 1638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while (_la===406 || _la===409);
            this.state = 1640;
            this.match(FlinkSqlParser.RR_BRACKET);
            this.state = 1642;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===370) {
                {
                this.state = 1641;
                this.withinClause();
                }
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
    public patternVariable(): PatternVariableContext {
        let localctx: PatternVariableContext = new PatternVariableContext(this._ctx, this.state);
        this.enterRule(localctx, 244, FlinkSqlParser.RULE_patternVariable);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1644;
            this.unquotedIdentifier();
            this.state = 1646;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 135681) !== 0)) {
                {
                this.state = 1645;
                this.quantifiers();
                }
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
    public outputMode(): OutputModeContext {
        let localctx: OutputModeContext = new OutputModeContext(this._ctx, this.state);
        this.enterRule(localctx, 246, FlinkSqlParser.RULE_outputMode);
        try {
            this.state = 1656;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_ALL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1648;
                this.match(FlinkSqlParser.KW_ALL);
                this.state = 1649;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1650;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1651;
                this.match(FlinkSqlParser.KW_MATCH);
                }
                break;
            case FlinkSqlParser.KW_ONE:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1652;
                this.match(FlinkSqlParser.KW_ONE);
                this.state = 1653;
                this.match(FlinkSqlParser.KW_ROW);
                this.state = 1654;
                this.match(FlinkSqlParser.KW_PER);
                this.state = 1655;
                this.match(FlinkSqlParser.KW_MATCH);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public afterMatchStrategy(): AfterMatchStrategyContext {
        let localctx: AfterMatchStrategyContext = new AfterMatchStrategyContext(this._ctx, this.state);
        this.enterRule(localctx, 248, FlinkSqlParser.RULE_afterMatchStrategy);
        try {
            this.state = 1682;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 192, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1658;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1659;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1660;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1661;
                this.match(FlinkSqlParser.KW_PAST);
                this.state = 1662;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1663;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1664;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1665;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1666;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1667;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1668;
                this.match(FlinkSqlParser.KW_NEXT);
                this.state = 1669;
                this.match(FlinkSqlParser.KW_ROW);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1670;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1671;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1672;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1673;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1674;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1675;
                this.unquotedIdentifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1676;
                this.match(FlinkSqlParser.KW_AFTER);
                this.state = 1677;
                this.match(FlinkSqlParser.KW_MATCH);
                this.state = 1678;
                this.match(FlinkSqlParser.KW_SKIP);
                this.state = 1679;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1680;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1681;
                this.unquotedIdentifier();
                }
                break;
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
    public patternVariablesDefination(): PatternVariablesDefinationContext {
        let localctx: PatternVariablesDefinationContext = new PatternVariablesDefinationContext(this._ctx, this.state);
        this.enterRule(localctx, 250, FlinkSqlParser.RULE_patternVariablesDefination);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1684;
            this.match(FlinkSqlParser.KW_DEFINE);
            this.state = 1685;
            this.projectItemDefinition();
            this.state = 1690;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 1686;
                this.match(FlinkSqlParser.COMMA);
                this.state = 1687;
                this.projectItemDefinition();
                }
                }
                this.state = 1692;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public windowFrame(): WindowFrameContext {
        let localctx: WindowFrameContext = new WindowFrameContext(this._ctx, this.state);
        this.enterRule(localctx, 252, FlinkSqlParser.RULE_windowFrame);
        try {
            this.state = 1702;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_RANGE:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1693;
                this.match(FlinkSqlParser.KW_RANGE);
                this.state = 1694;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1695;
                this.timeIntervalExpression();
                this.state = 1696;
                this.frameBound();
                }
                break;
            case FlinkSqlParser.KW_ROWS:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1698;
                this.match(FlinkSqlParser.KW_ROWS);
                this.state = 1699;
                this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1700;
                this.match(FlinkSqlParser.DIG_LITERAL);
                this.state = 1701;
                this.frameBound();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public frameBound(): FrameBoundContext {
        let localctx: FrameBoundContext = new FrameBoundContext(this._ctx, this.state);
        this.enterRule(localctx, 254, FlinkSqlParser.RULE_frameBound);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1704;
            this.match(FlinkSqlParser.KW_PRECEDING);
            this.state = 1705;
            this.match(FlinkSqlParser.KW_AND);
            this.state = 1706;
            this.match(FlinkSqlParser.KW_CURRENT);
            this.state = 1707;
            this.match(FlinkSqlParser.KW_ROW);
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
    public withinClause(): WithinClauseContext {
        let localctx: WithinClauseContext = new WithinClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 256, FlinkSqlParser.RULE_withinClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1709;
            this.match(FlinkSqlParser.KW_WITHIN);
            this.state = 1710;
            this.timeIntervalExpression();
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
    public expression(): ExpressionContext {
        let localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 258, FlinkSqlParser.RULE_expression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1712;
            this.booleanExpression(0);
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

    public booleanExpression(): BooleanExpressionContext;
    public booleanExpression(_p: number): BooleanExpressionContext;
    public booleanExpression(_p?: number): BooleanExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new BooleanExpressionContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 260;
        this.enterRecursionRule(localctx, 260, FlinkSqlParser.RULE_booleanExpression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1726;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 196, this._ctx) ) {
            case 1:
                {
                localctx = new LogicalNotContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 1715;
                this.match(FlinkSqlParser.KW_NOT);
                this.state = 1716;
                this.booleanExpression(6);
                }
                break;
            case 2:
                {
                localctx = new ExistsContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1717;
                this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1718;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1719;
                this.queryStatement(0);
                this.state = 1720;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                {
                localctx = new PredicatedContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1722;
                this.valueExpression(0);
                this.state = 1724;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 195, this._ctx) ) {
                case 1:
                    {
                    this.state = 1723;
                    this.predicate();
                    }
                    break;
                }
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1742;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1740;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 198, this._ctx) ) {
                    case 1:
                        {
                        localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
                        (localctx as LogicalBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1728;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1729;
                        (localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_AND);
                        this.state = 1730;
                        (localctx as LogicalBinaryContext)._right = this.booleanExpression(4);
                        }
                        break;
                    case 2:
                        {
                        localctx = new LogicalBinaryContext(new BooleanExpressionContext(_parentctx, _parentState));
                        (localctx as LogicalBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1731;
                        if (!(this.precpred(this._ctx, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                        }
                        this.state = 1732;
                        (localctx as LogicalBinaryContext)._operator = this.match(FlinkSqlParser.KW_OR);
                        this.state = 1733;
                        (localctx as LogicalBinaryContext)._right = this.booleanExpression(3);
                        }
                        break;
                    case 3:
                        {
                        localctx = new LogicalNestedContext(new BooleanExpressionContext(_parentctx, _parentState));
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_booleanExpression);
                        this.state = 1734;
                        if (!(this.precpred(this._ctx, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                        }
                        this.state = 1735;
                        this.match(FlinkSqlParser.KW_IS);
                        this.state = 1737;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la===298) {
                            {
                            this.state = 1736;
                            this.match(FlinkSqlParser.KW_NOT);
                            }
                        }

                        this.state = 1739;
                        (localctx as LogicalNestedContext)._kind = this._input.LT(1);
                        _la = this._input.LA(1);
                        if(!(_la===249 || _la===299 || _la===352 || _la===356)) {
                            (localctx as LogicalNestedContext)._kind = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    }
                    }
                }
                this.state = 1744;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 199, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public predicate(): PredicateContext {
        let localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
        this.enterRule(localctx, 262, FlinkSqlParser.RULE_predicate);
        let _la: number;
        try {
            this.state = 1812;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 210, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1746;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1745;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1748;
                localctx._kind = this.match(FlinkSqlParser.KW_BETWEEN);
                this.state = 1750;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===186 || _la===340) {
                    {
                    this.state = 1749;
                    _la = this._input.LA(1);
                    if(!(_la===186 || _la===340)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 1752;
                localctx._lower = this.valueExpression(0);
                this.state = 1753;
                this.match(FlinkSqlParser.KW_AND);
                this.state = 1754;
                localctx._upper = this.valueExpression(0);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1757;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1756;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1759;
                localctx._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1760;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1761;
                this.expression();
                this.state = 1766;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la===388) {
                    {
                    {
                    this.state = 1762;
                    this.match(FlinkSqlParser.COMMA);
                    this.state = 1763;
                    this.expression();
                    }
                    }
                    this.state = 1768;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1769;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1772;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1771;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1774;
                localctx._kind = this.match(FlinkSqlParser.KW_IN);
                this.state = 1775;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1776;
                this.queryStatement(0);
                this.state = 1777;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1779;
                localctx._kind = this.match(FlinkSqlParser.KW_EXISTS);
                this.state = 1780;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1781;
                this.queryStatement(0);
                this.state = 1782;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 1785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1784;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1787;
                localctx._kind = this.match(FlinkSqlParser.KW_RLIKE);
                this.state = 1788;
                localctx._pattern = this.valueExpression(0);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 1789;
                this.likePredicate();
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 1790;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1792;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1791;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1794;
                localctx._kind = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===249 || _la===299 || _la===352 || _la===356)) {
                    localctx._kind = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 1795;
                this.match(FlinkSqlParser.KW_IS);
                this.state = 1797;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1796;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1799;
                localctx._kind = this.match(FlinkSqlParser.KW_DISTINCT);
                this.state = 1800;
                this.match(FlinkSqlParser.KW_FROM);
                this.state = 1801;
                localctx._right = this.valueExpression(0);
                }
                break;
            case 9:
                this.enterOuterAlt(localctx, 9);
                {
                this.state = 1803;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1802;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1805;
                localctx._kind = this.match(FlinkSqlParser.KW_SIMILAR);
                this.state = 1806;
                this.match(FlinkSqlParser.KW_TO);
                this.state = 1807;
                localctx._right = this.valueExpression(0);
                this.state = 1810;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 209, this._ctx) ) {
                case 1:
                    {
                    this.state = 1808;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1809;
                    this.stringLiteral();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public likePredicate(): LikePredicateContext {
        let localctx: LikePredicateContext = new LikePredicateContext(this._ctx, this.state);
        this.enterRule(localctx, 264, FlinkSqlParser.RULE_likePredicate);
        let _la: number;
        try {
            this.state = 1843;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 216, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1815;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1814;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1817;
                localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1818;
                localctx._quantifier = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(_la===178 || _la===182)) {
                    localctx._quantifier = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1832;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 213, this._ctx) ) {
                case 1:
                    {
                    this.state = 1819;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1820;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                case 2:
                    {
                    this.state = 1821;
                    this.match(FlinkSqlParser.LR_BRACKET);
                    this.state = 1822;
                    this.expression();
                    this.state = 1827;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===388) {
                        {
                        {
                        this.state = 1823;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1824;
                        this.expression();
                        }
                        }
                        this.state = 1829;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 1830;
                    this.match(FlinkSqlParser.RR_BRACKET);
                    }
                    break;
                }
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1835;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 1834;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 1837;
                localctx._kind = this.match(FlinkSqlParser.KW_LIKE);
                this.state = 1838;
                localctx._pattern = this.valueExpression(0);
                this.state = 1841;
                this._errHandler.sync(this);
                switch ( this._interp.adaptivePredict(this._input, 215, this._ctx) ) {
                case 1:
                    {
                    this.state = 1839;
                    this.match(FlinkSqlParser.KW_ESCAPE);
                    this.state = 1840;
                    this.stringLiteral();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }

    public valueExpression(): ValueExpressionContext;
    public valueExpression(_p: number): ValueExpressionContext;
    public valueExpression(_p?: number): ValueExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new ValueExpressionContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 266;
        this.enterRecursionRule(localctx, 266, FlinkSqlParser.RULE_valueExpression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1849;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 217, this._ctx) ) {
            case 1:
                {
                localctx = new ValueExpressionDefaultContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 1846;
                this.primaryExpression(0);
                }
                break;
            case 2:
                {
                localctx = new ArithmeticUnaryContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1847;
                (localctx as ArithmeticUnaryContext)._operator = this._input.LT(1);
                _la = this._input.LA(1);
                if(!(((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & 3145729) !== 0))) {
                    (localctx as ArithmeticUnaryContext)._operator = this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1848;
                this.valueExpression(8);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1874;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
            while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    _prevctx = localctx;
                    {
                    this.state = 1872;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 218, this._ctx) ) {
                    case 1:
                        {
                        localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1851;
                        if (!(this.precpred(this._ctx, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
                        }
                        this.state = 1852;
                        (localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
                        _la = this._input.LA(1);
                        if(!(_la===32 || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 145) !== 0))) {
                            (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1853;
                        (localctx as ArithmeticBinaryContext)._right = this.valueExpression(8);
                        }
                        break;
                    case 2:
                        {
                        localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1854;
                        if (!(this.precpred(this._ctx, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
                        }
                        this.state = 1855;
                        (localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
                        _la = this._input.LA(1);
                        if(!(((((_la - 397)) & ~0x1F) === 0 && ((1 << (_la - 397)) & 11) !== 0))) {
                            (localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
                        }
                        else {
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1856;
                        (localctx as ArithmeticBinaryContext)._right = this.valueExpression(7);
                        }
                        break;
                    case 3:
                        {
                        localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1857;
                        if (!(this.precpred(this._ctx, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
                        }
                        this.state = 1858;
                        (localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_AND_OP);
                        this.state = 1859;
                        (localctx as ArithmeticBinaryContext)._right = this.valueExpression(6);
                        }
                        break;
                    case 4:
                        {
                        localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1860;
                        if (!(this.precpred(this._ctx, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                        }
                        this.state = 1861;
                        (localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_XOR_OP);
                        this.state = 1862;
                        (localctx as ArithmeticBinaryContext)._right = this.valueExpression(5);
                        }
                        break;
                    case 5:
                        {
                        localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1863;
                        if (!(this.precpred(this._ctx, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
                        }
                        this.state = 1864;
                        (localctx as ArithmeticBinaryContext)._operator = this.match(FlinkSqlParser.BIT_OR_OP);
                        this.state = 1865;
                        (localctx as ArithmeticBinaryContext)._right = this.valueExpression(4);
                        }
                        break;
                    case 6:
                        {
                        localctx = new ComparisonContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ComparisonContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1866;
                        if (!(this.precpred(this._ctx, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
                        }
                        this.state = 1867;
                        this.comparisonOperator();
                        this.state = 1868;
                        (localctx as ComparisonContext)._right = this.valueExpression(3);
                        }
                        break;
                    case 7:
                        {
                        localctx = new ArithmeticBinaryAlternateContext(new ValueExpressionContext(_parentctx, _parentState));
                        (localctx as ArithmeticBinaryAlternateContext)._left = _prevctx;
                        this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_valueExpression);
                        this.state = 1870;
                        if (!(this.precpred(this._ctx, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
                        }
                        this.state = 1871;
                        (localctx as ArithmeticBinaryAlternateContext)._right = this.match(FlinkSqlParser.SLASH_TEXT);
                        }
                        break;
                    }
                    }
                }
                this.state = 1876;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 219, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }

    public primaryExpression(): PrimaryExpressionContext;
    public primaryExpression(_p: number): PrimaryExpressionContext;
    public primaryExpression(_p?: number): PrimaryExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let _parentctx = this._ctx;
        let _parentState = this.state;
        let localctx = new PrimaryExpressionContext(this._ctx, _parentState);
        let _prevctx = localctx;
        let _startState = 268;
        this.enterRecursionRule(localctx, 268, FlinkSqlParser.RULE_primaryExpression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1968;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 229, this._ctx) ) {
            case 1:
                {
                localctx = new SearchedCaseContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;

                this.state = 1878;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1880;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1879;
                    this.whenClause();
                    }
                    }
                    this.state = 1882;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===366);
                this.state = 1886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===239) {
                    {
                    this.state = 1884;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1885;
                    (localctx as SearchedCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1888;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 2:
                {
                localctx = new SimpleCaseContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1890;
                this.match(FlinkSqlParser.KW_CASE);
                this.state = 1891;
                (localctx as SimpleCaseContext)._value = this.expression();
                this.state = 1893;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 1892;
                    this.whenClause();
                    }
                    }
                    this.state = 1895;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===366);
                this.state = 1899;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===239) {
                    {
                    this.state = 1897;
                    this.match(FlinkSqlParser.KW_ELSE);
                    this.state = 1898;
                    (localctx as SimpleCaseContext)._elseExpression = this.expression();
                    }
                }

                this.state = 1901;
                this.match(FlinkSqlParser.KW_END);
                }
                break;
            case 3:
                {
                localctx = new CastContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1903;
                this.match(FlinkSqlParser.KW_CAST);
                this.state = 1904;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1905;
                this.expression();
                this.state = 1906;
                this.match(FlinkSqlParser.KW_AS);
                this.state = 1907;
                this.columnType();
                this.state = 1908;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 4:
                {
                localctx = new FirstContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1910;
                this.match(FlinkSqlParser.KW_FIRST);
                this.state = 1911;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1912;
                this.expression();
                this.state = 1915;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===60) {
                    {
                    this.state = 1913;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1914;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1917;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 5:
                {
                localctx = new LastContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1919;
                this.match(FlinkSqlParser.KW_LAST);
                this.state = 1920;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1921;
                this.expression();
                this.state = 1924;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===60) {
                    {
                    this.state = 1922;
                    this.match(FlinkSqlParser.KW_IGNORE);
                    this.state = 1923;
                    this.match(FlinkSqlParser.KW_NULLS);
                    }
                }

                this.state = 1926;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 6:
                {
                localctx = new PositionContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1928;
                this.match(FlinkSqlParser.KW_POSITION);
                this.state = 1929;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1930;
                (localctx as PositionContext)._substr = this.valueExpression(0);
                this.state = 1931;
                this.match(FlinkSqlParser.KW_IN);
                this.state = 1932;
                (localctx as PositionContext)._str = this.valueExpression(0);
                this.state = 1933;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 7:
                {
                localctx = new ConstantDefaultContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1935;
                this.constant();
                }
                break;
            case 8:
                {
                localctx = new StarContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1936;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 9:
                {
                localctx = new StarContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1937;
                this.uid();
                this.state = 1938;
                this.match(FlinkSqlParser.DOT);
                this.state = 1939;
                this.match(FlinkSqlParser.ASTERISK_SIGN);
                }
                break;
            case 10:
                {
                localctx = new SubqueryExpressionContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1941;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1942;
                this.queryStatement(0);
                this.state = 1943;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 11:
                {
                localctx = new FunctionCallContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1945;
                this.functionName();
                this.state = 1946;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294963184) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 285736959) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 2688590049) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & 75514881) !== 0) || ((((_la - 271)) & ~0x1F) === 0 && ((1 << (_la - 271)) & 405012881) !== 0) || ((((_la - 310)) & ~0x1F) === 0 && ((1 << (_la - 310)) & 805840065) !== 0) || ((((_la - 347)) & ~0x1F) === 0 && ((1 << (_la - 347)) & 1107298419) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 65038337) !== 0)) {
                    {
                    this.state = 1948;
                    this._errHandler.sync(this);
                    switch ( this._interp.adaptivePredict(this._input, 226, this._ctx) ) {
                    case 1:
                        {
                        this.state = 1947;
                        this.setQuantifier();
                        }
                        break;
                    }
                    this.state = 1950;
                    this.functionParam();
                    this.state = 1955;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la===388) {
                        {
                        {
                        this.state = 1951;
                        this.match(FlinkSqlParser.COMMA);
                        this.state = 1952;
                        this.functionParam();
                        }
                        }
                        this.state = 1957;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    }
                }

                this.state = 1960;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            case 12:
                {
                localctx = new ColumnReferenceContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1962;
                this.identifier();
                }
                break;
            case 13:
                {
                localctx = new DereferenceContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1963;
                this.dereferenceDefinition();
                }
                break;
            case 14:
                {
                localctx = new ParenthesizedExpressionContext(localctx);
                this._ctx = localctx;
                _prevctx = localctx;
                this.state = 1964;
                this.match(FlinkSqlParser.LR_BRACKET);
                this.state = 1965;
                this.expression();
                this.state = 1966;
                this.match(FlinkSqlParser.RR_BRACKET);
                }
                break;
            }
            this._ctx.stop = this._input.LT(-1);
            this.state = 1977;
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
                    localctx = new SubscriptContext(new PrimaryExpressionContext(_parentctx, _parentState));
                    (localctx as SubscriptContext)._value = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, FlinkSqlParser.RULE_primaryExpression);
                    this.state = 1970;
                    if (!(this.precpred(this._ctx, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
                    }
                    this.state = 1971;
                    this.match(FlinkSqlParser.LS_BRACKET);
                    this.state = 1972;
                    (localctx as SubscriptContext)._index = this.valueExpression(0);
                    this.state = 1973;
                    this.match(FlinkSqlParser.RS_BRACKET);
                    }
                    }
                }
                this.state = 1979;
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
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return localctx;
    }
    public functionName(): FunctionNameContext {
        let localctx: FunctionNameContext = new FunctionNameContext(this._ctx, this.state);
        this.enterRule(localctx, 270, FlinkSqlParser.RULE_functionName);
        try {
            this.state = 1983;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 231, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1980;
                this.reservedKeywordsUsedAsFuncName();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1981;
                this.nonReservedKeywords();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1982;
                this.uid();
                }
                break;
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
    public functionParam(): FunctionParamContext {
        let localctx: FunctionParamContext = new FunctionParamContext(this._ctx, this.state);
        this.enterRule(localctx, 272, FlinkSqlParser.RULE_functionParam);
        try {
            this.state = 1989;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 232, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1985;
                this.reservedKeywordsUsedAsFuncParam();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1986;
                this.timeIntervalUnit();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 1987;
                this.timePointUnit();
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 1988;
                this.expression();
                }
                break;
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
    public dereferenceDefinition(): DereferenceDefinitionContext {
        let localctx: DereferenceDefinitionContext = new DereferenceDefinitionContext(this._ctx, this.state);
        this.enterRule(localctx, 274, FlinkSqlParser.RULE_dereferenceDefinition);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1991;
            this.uid();
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
    public correlationName(): CorrelationNameContext {
        let localctx: CorrelationNameContext = new CorrelationNameContext(this._ctx, this.state);
        this.enterRule(localctx, 276, FlinkSqlParser.RULE_correlationName);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1993;
            this.identifier();
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
    public qualifiedName(): QualifiedNameContext {
        let localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(localctx, 278, FlinkSqlParser.RULE_qualifiedName);
        try {
            this.state = 1997;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 233, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 1995;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 1996;
                this.dereferenceDefinition();
                }
                break;
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
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        let localctx: TimeIntervalExpressionContext = new TimeIntervalExpressionContext(this._ctx, this.state);
        this.enterRule(localctx, 280, FlinkSqlParser.RULE_timeIntervalExpression);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 1999;
            this.match(FlinkSqlParser.KW_INTERVAL);
            this.state = 2002;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 234, this._ctx) ) {
            case 1:
                {
                this.state = 2000;
                this.errorCapturingMultiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2001;
                this.errorCapturingUnitToUnitInterval();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
        let localctx: ErrorCapturingMultiUnitsIntervalContext = new ErrorCapturingMultiUnitsIntervalContext(this._ctx, this.state);
        this.enterRule(localctx, 282, FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2004;
            this.multiUnitsInterval();
            this.state = 2006;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 235, this._ctx) ) {
            case 1:
                {
                this.state = 2005;
                this.unitToUnitInterval();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        let localctx: MultiUnitsIntervalContext = new MultiUnitsIntervalContext(this._ctx, this.state);
        this.enterRule(localctx, 284, FlinkSqlParser.RULE_multiUnitsInterval);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2011;
            this._errHandler.sync(this);
            _alt = 1;
            do {
                switch (_alt) {
                case 1:
                    {
                    {
                    this.state = 2008;
                    this.intervalValue();
                    this.state = 2009;
                    this.timeIntervalUnit();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 2013;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 236, this._ctx);
            } while (_alt !== 2 && _alt !== antlr.ATN.INVALID_ALT_NUMBER);
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
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
        let localctx: ErrorCapturingUnitToUnitIntervalContext = new ErrorCapturingUnitToUnitIntervalContext(this._ctx, this.state);
        this.enterRule(localctx, 286, FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2015;
            localctx._body = this.unitToUnitInterval();
            this.state = 2018;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 237, this._ctx) ) {
            case 1:
                {
                this.state = 2016;
                localctx._error1 = this.multiUnitsInterval();
                }
                break;
            case 2:
                {
                this.state = 2017;
                localctx._error2 = this.unitToUnitInterval();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext {
        let localctx: UnitToUnitIntervalContext = new UnitToUnitIntervalContext(this._ctx, this.state);
        this.enterRule(localctx, 288, FlinkSqlParser.RULE_unitToUnitInterval);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2020;
            localctx._value = this.intervalValue();
            this.state = 2021;
            localctx._from_ = this.timeIntervalUnit();
            this.state = 2022;
            this.match(FlinkSqlParser.KW_TO);
            this.state = 2023;
            localctx._to = this.timeIntervalUnit();
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
    public intervalValue(): IntervalValueContext {
        let localctx: IntervalValueContext = new IntervalValueContext(this._ctx, this.state);
        this.enterRule(localctx, 290, FlinkSqlParser.RULE_intervalValue);
        let _la: number;
        try {
            this.state = 2030;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.HYPNEN_SIGN:
            case FlinkSqlParser.ADD_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2026;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===397 || _la===398) {
                    {
                    this.state = 2025;
                    _la = this._input.LA(1);
                    if(!(_la===397 || _la===398)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    }
                }

                this.state = 2028;
                _la = this._input.LA(1);
                if(!(_la===406 || _la===407)) {
                this._errHandler.recoverInline(this);
                }
                else {
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2029;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public columnAlias(): ColumnAliasContext {
        let localctx: ColumnAliasContext = new ColumnAliasContext(this._ctx, this.state);
        this.enterRule(localctx, 292, FlinkSqlParser.RULE_columnAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2033;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===185) {
                {
                this.state = 2032;
                this.match(FlinkSqlParser.KW_AS);
                }
            }

            this.state = 2035;
            this.identifier();
            this.state = 2037;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===384) {
                {
                this.state = 2036;
                this.identifierList();
                }
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
    public tableAlias(): TableAliasContext {
        let localctx: TableAliasContext = new TableAliasContext(this._ctx, this.state);
        this.enterRule(localctx, 294, FlinkSqlParser.RULE_tableAlias);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2040;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===185) {
                {
                this.state = 2039;
                this.match(FlinkSqlParser.KW_AS);
                }
            }

            this.state = 2042;
            this.identifier();
            this.state = 2044;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 243, this._ctx) ) {
            case 1:
                {
                this.state = 2043;
                this.identifierList();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        let localctx: ErrorCapturingIdentifierContext = new ErrorCapturingIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 296, FlinkSqlParser.RULE_errorCapturingIdentifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2046;
            this.identifier();
            this.state = 2047;
            this.errorCapturingIdentifierExtra();
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
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        let localctx: ErrorCapturingIdentifierExtraContext = new ErrorCapturingIdentifierExtraContext(this._ctx, this.state);
        this.enterRule(localctx, 298, FlinkSqlParser.RULE_errorCapturingIdentifierExtra);
        let _la: number;
        try {
            this.state = 2056;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_MINUS:
                localctx = new ErrorIdentContext(localctx);
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2051;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                    {
                    this.state = 2049;
                    this.match(FlinkSqlParser.KW_MINUS);
                    this.state = 2050;
                    this.identifier();
                    }
                    }
                    this.state = 2053;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la===288);
                }
                break;
            case FlinkSqlParser.KW_AS:
            case FlinkSqlParser.LR_BRACKET:
                localctx = new RealIdentContext(localctx);
                this.enterOuterAlt(localctx, 2);
                // tslint:disable-next-line:no-empty
                {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public identifierList(): IdentifierListContext {
        let localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
        this.enterRule(localctx, 300, FlinkSqlParser.RULE_identifierList);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2058;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2059;
            this.identifierSeq();
            this.state = 2060;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public identifierSeq(): IdentifierSeqContext {
        let localctx: IdentifierSeqContext = new IdentifierSeqContext(this._ctx, this.state);
        this.enterRule(localctx, 302, FlinkSqlParser.RULE_identifierSeq);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2062;
            this.identifier();
            this.state = 2067;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 2063;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2064;
                this.identifier();
                }
                }
                this.state = 2069;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public identifier(): IdentifierContext {
        let localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 304, FlinkSqlParser.RULE_identifier);
        try {
            this.state = 2073;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
            case FlinkSqlParser.ID_LITERAL:
                localctx = new UnquotedIdentifierAlternativeContext(localctx);
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2070;
                this.unquotedIdentifier();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                localctx = new QuotedIdentifierAlternativeContext(localctx);
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2071;
                this.quotedIdentifier();
                }
                break;
            case FlinkSqlParser.KW_ADD:
            case FlinkSqlParser.KW_ADMIN:
            case FlinkSqlParser.KW_AFTER:
            case FlinkSqlParser.KW_ANALYZE:
            case FlinkSqlParser.KW_ASC:
            case FlinkSqlParser.KW_BEFORE:
            case FlinkSqlParser.KW_BYTES:
            case FlinkSqlParser.KW_CASCADE:
            case FlinkSqlParser.KW_CATALOGS:
            case FlinkSqlParser.KW_CENTURY:
            case FlinkSqlParser.KW_CHAIN:
            case FlinkSqlParser.KW_CHANGELOG_MODE:
            case FlinkSqlParser.KW_CHARACTERS:
            case FlinkSqlParser.KW_COMMENT:
            case FlinkSqlParser.KW_COMPACT:
            case FlinkSqlParser.KW_COLUMNS:
            case FlinkSqlParser.KW_CONSTRAINTS:
            case FlinkSqlParser.KW_CONSTRUCTOR:
            case FlinkSqlParser.KW_CUMULATE:
            case FlinkSqlParser.KW_DATA:
            case FlinkSqlParser.KW_DATABASE:
            case FlinkSqlParser.KW_DATABASES:
            case FlinkSqlParser.KW_DAYS:
            case FlinkSqlParser.KW_DECADE:
            case FlinkSqlParser.KW_DEFINED:
            case FlinkSqlParser.KW_DESC:
            case FlinkSqlParser.KW_DESCRIPTOR:
            case FlinkSqlParser.KW_DIV:
            case FlinkSqlParser.KW_ENCODING:
            case FlinkSqlParser.KW_ENFORCED:
            case FlinkSqlParser.KW_ENGINE:
            case FlinkSqlParser.KW_ERROR:
            case FlinkSqlParser.KW_ESTIMATED_COST:
            case FlinkSqlParser.KW_EXCEPTION:
            case FlinkSqlParser.KW_EXCLUDE:
            case FlinkSqlParser.KW_EXCLUDING:
            case FlinkSqlParser.KW_EXTENDED:
            case FlinkSqlParser.KW_FILE:
            case FlinkSqlParser.KW_FINAL:
            case FlinkSqlParser.KW_FIRST:
            case FlinkSqlParser.KW_FOLLOWING:
            case FlinkSqlParser.KW_FORMAT:
            case FlinkSqlParser.KW_FORTRAN:
            case FlinkSqlParser.KW_FOUND:
            case FlinkSqlParser.KW_FRAC_SECOND:
            case FlinkSqlParser.KW_FUNCTIONS:
            case FlinkSqlParser.KW_GENERAL:
            case FlinkSqlParser.KW_GENERATED:
            case FlinkSqlParser.KW_GO:
            case FlinkSqlParser.KW_GOTO:
            case FlinkSqlParser.KW_GRANTED:
            case FlinkSqlParser.KW_HOP:
            case FlinkSqlParser.KW_HOURS:
            case FlinkSqlParser.KW_IF:
            case FlinkSqlParser.KW_IGNORE:
            case FlinkSqlParser.KW_INCREMENT:
            case FlinkSqlParser.KW_INPUT:
            case FlinkSqlParser.KW_INVOKER:
            case FlinkSqlParser.KW_JAR:
            case FlinkSqlParser.KW_JARS:
            case FlinkSqlParser.KW_JAVA:
            case FlinkSqlParser.KW_JSON:
            case FlinkSqlParser.KW_JSON_EXECUTION_PLAN:
            case FlinkSqlParser.KW_KEY:
            case FlinkSqlParser.KW_KEY_MEMBER:
            case FlinkSqlParser.KW_KEY_TYPE:
            case FlinkSqlParser.KW_LABEL:
            case FlinkSqlParser.KW_LAST:
            case FlinkSqlParser.KW_LENGTH:
            case FlinkSqlParser.KW_LEVEL:
            case FlinkSqlParser.KW_LOAD:
            case FlinkSqlParser.KW_MAP:
            case FlinkSqlParser.KW_MICROSECOND:
            case FlinkSqlParser.KW_MILLENNIUM:
            case FlinkSqlParser.KW_MILLISECOND:
            case FlinkSqlParser.KW_MINUTES:
            case FlinkSqlParser.KW_MINVALUE:
            case FlinkSqlParser.KW_MODIFY:
            case FlinkSqlParser.KW_MODULES:
            case FlinkSqlParser.KW_MONTHS:
            case FlinkSqlParser.KW_NANOSECOND:
            case FlinkSqlParser.KW_NULLS:
            case FlinkSqlParser.KW_NUMBER:
            case FlinkSqlParser.KW_OPTION:
            case FlinkSqlParser.KW_OPTIONS:
            case FlinkSqlParser.KW_ORDERING:
            case FlinkSqlParser.KW_OUTPUT:
            case FlinkSqlParser.KW_OVERWRITE:
            case FlinkSqlParser.KW_OVERWRITING:
            case FlinkSqlParser.KW_PARTITIONED:
            case FlinkSqlParser.KW_PARTITIONS:
            case FlinkSqlParser.KW_PASSING:
            case FlinkSqlParser.KW_PAST:
            case FlinkSqlParser.KW_PATH:
            case FlinkSqlParser.KW_PLACING:
            case FlinkSqlParser.KW_PLAN:
            case FlinkSqlParser.KW_PRECEDING:
            case FlinkSqlParser.KW_PRESERVE:
            case FlinkSqlParser.KW_PRIOR:
            case FlinkSqlParser.KW_PRIVILEGES:
            case FlinkSqlParser.KW_PUBLIC:
            case FlinkSqlParser.KW_PYTHON:
            case FlinkSqlParser.KW_PYTHON_FILES:
            case FlinkSqlParser.KW_PYTHON_REQUIREMENTS:
            case FlinkSqlParser.KW_PYTHON_DEPENDENCIES:
            case FlinkSqlParser.KW_PYTHON_JAR:
            case FlinkSqlParser.KW_PYTHON_ARCHIVES:
            case FlinkSqlParser.KW_PYTHON_PARAMETER:
            case FlinkSqlParser.KW_QUARTER:
            case FlinkSqlParser.KW_RAW:
            case FlinkSqlParser.KW_READ:
            case FlinkSqlParser.KW_RELATIVE:
            case FlinkSqlParser.KW_REMOVE:
            case FlinkSqlParser.KW_RENAME:
            case FlinkSqlParser.KW_REPLACE:
            case FlinkSqlParser.KW_RESPECT:
            case FlinkSqlParser.KW_RESTART:
            case FlinkSqlParser.KW_RESTRICT:
            case FlinkSqlParser.KW_ROLE:
            case FlinkSqlParser.KW_ROW_COUNT:
            case FlinkSqlParser.KW_SCALA:
            case FlinkSqlParser.KW_SCALAR:
            case FlinkSqlParser.KW_SCALE:
            case FlinkSqlParser.KW_SCHEMA:
            case FlinkSqlParser.KW_SECONDS:
            case FlinkSqlParser.KW_SECTION:
            case FlinkSqlParser.KW_SECURITY:
            case FlinkSqlParser.KW_SELF:
            case FlinkSqlParser.KW_SERVER:
            case FlinkSqlParser.KW_SERVER_NAME:
            case FlinkSqlParser.KW_SESSION:
            case FlinkSqlParser.KW_SETS:
            case FlinkSqlParser.KW_SIMPLE:
            case FlinkSqlParser.KW_SIZE:
            case FlinkSqlParser.KW_SLIDE:
            case FlinkSqlParser.KW_SOURCE:
            case FlinkSqlParser.KW_SPACE:
            case FlinkSqlParser.KW_STATE:
            case FlinkSqlParser.KW_STATEMENT:
            case FlinkSqlParser.KW_STEP:
            case FlinkSqlParser.KW_STRING:
            case FlinkSqlParser.KW_STRUCTURE:
            case FlinkSqlParser.KW_STYLE:
            case FlinkSqlParser.KW_TABLES:
            case FlinkSqlParser.KW_TEMPORARY:
            case FlinkSqlParser.KW_TIMECOL:
            case FlinkSqlParser.KW_TIMESTAMP_LTZ:
            case FlinkSqlParser.KW_TIMESTAMPADD:
            case FlinkSqlParser.KW_TIMESTAMPDIFF:
            case FlinkSqlParser.KW_TRANSFORM:
            case FlinkSqlParser.KW_TUMBLE:
            case FlinkSqlParser.KW_TYPE:
            case FlinkSqlParser.KW_UNDER:
            case FlinkSqlParser.KW_UNLOAD:
            case FlinkSqlParser.KW_USAGE:
            case FlinkSqlParser.KW_USE:
            case FlinkSqlParser.KW_UTF16:
            case FlinkSqlParser.KW_UTF32:
            case FlinkSqlParser.KW_UTF8:
            case FlinkSqlParser.KW_VERSION:
            case FlinkSqlParser.KW_VIEW:
            case FlinkSqlParser.KW_VIEWS:
            case FlinkSqlParser.KW_VIRTUAL:
            case FlinkSqlParser.KW_WATERMARK:
            case FlinkSqlParser.KW_WATERMARKS:
            case FlinkSqlParser.KW_WEEK:
            case FlinkSqlParser.KW_WORK:
            case FlinkSqlParser.KW_WRAPPER:
            case FlinkSqlParser.KW_YEARS:
            case FlinkSqlParser.KW_ZONE:
                localctx = new NonReservedKeywordsAlternativeContext(localctx);
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2072;
                this.nonReservedKeywords();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        let localctx: UnquotedIdentifierContext = new UnquotedIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 306, FlinkSqlParser.RULE_unquotedIdentifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2075;
            _la = this._input.LA(1);
            if(!(_la===406 || _la===409)) {
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
    public quotedIdentifier(): QuotedIdentifierContext {
        let localctx: QuotedIdentifierContext = new QuotedIdentifierContext(this._ctx, this.state);
        this.enterRule(localctx, 308, FlinkSqlParser.RULE_quotedIdentifier);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2077;
            this.match(FlinkSqlParser.STRING_LITERAL);
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
    public whenClause(): WhenClauseContext {
        let localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
        this.enterRule(localctx, 310, FlinkSqlParser.RULE_whenClause);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2079;
            this.match(FlinkSqlParser.KW_WHEN);
            this.state = 2080;
            localctx._condition = this.expression();
            this.state = 2081;
            this.match(FlinkSqlParser.KW_THEN);
            this.state = 2082;
            localctx._result = this.expression();
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
    public catalogPath(): CatalogPathContext {
        let localctx: CatalogPathContext = new CatalogPathContext(this._ctx, this.state);
        this.enterRule(localctx, 312, FlinkSqlParser.RULE_catalogPath);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2084;
            this.uid();
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
    public databasePath(): DatabasePathContext {
        let localctx: DatabasePathContext = new DatabasePathContext(this._ctx, this.state);
        this.enterRule(localctx, 314, FlinkSqlParser.RULE_databasePath);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2086;
            this.uid();
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
    public databasePathCreate(): DatabasePathCreateContext {
        let localctx: DatabasePathCreateContext = new DatabasePathCreateContext(this._ctx, this.state);
        this.enterRule(localctx, 316, FlinkSqlParser.RULE_databasePathCreate);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2088;
            this.uid();
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
    public tablePathCreate(): TablePathCreateContext {
        let localctx: TablePathCreateContext = new TablePathCreateContext(this._ctx, this.state);
        this.enterRule(localctx, 318, FlinkSqlParser.RULE_tablePathCreate);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2090;
            this.uid();
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
    public tablePath(): TablePathContext {
        let localctx: TablePathContext = new TablePathContext(this._ctx, this.state);
        this.enterRule(localctx, 320, FlinkSqlParser.RULE_tablePath);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2092;
            this.uid();
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
    public uid(): UidContext {
        let localctx: UidContext = new UidContext(this._ctx, this.state);
        this.enterRule(localctx, 322, FlinkSqlParser.RULE_uid);
        try {
            let _alt: number;
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2094;
            this.identifier();
            this.state = 2099;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
            while (_alt !== 1 && _alt !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (_alt === 1 + 1) {
                    {
                    {
                    this.state = 2095;
                    this.match(FlinkSqlParser.DOT);
                    this.state = 2096;
                    this.identifier();
                    }
                    }
                }
                this.state = 2101;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input, 248, this._ctx);
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
    public withOption(): WithOptionContext {
        let localctx: WithOptionContext = new WithOptionContext(this._ctx, this.state);
        this.enterRule(localctx, 324, FlinkSqlParser.RULE_withOption);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2102;
            this.match(FlinkSqlParser.KW_WITH);
            this.state = 2103;
            this.tablePropertyList();
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
    public ifNotExists(): IfNotExistsContext {
        let localctx: IfNotExistsContext = new IfNotExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 326, FlinkSqlParser.RULE_ifNotExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2105;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2106;
            this.match(FlinkSqlParser.KW_NOT);
            this.state = 2107;
            this.match(FlinkSqlParser.KW_EXISTS);
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
    public ifExists(): IfExistsContext {
        let localctx: IfExistsContext = new IfExistsContext(this._ctx, this.state);
        this.enterRule(localctx, 328, FlinkSqlParser.RULE_ifExists);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2109;
            this.match(FlinkSqlParser.KW_IF);
            this.state = 2110;
            this.match(FlinkSqlParser.KW_EXISTS);
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
    public tablePropertyList(): TablePropertyListContext {
        let localctx: TablePropertyListContext = new TablePropertyListContext(this._ctx, this.state);
        this.enterRule(localctx, 330, FlinkSqlParser.RULE_tablePropertyList);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2112;
            this.match(FlinkSqlParser.LR_BRACKET);
            this.state = 2113;
            this.tableProperty();
            this.state = 2118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la===388) {
                {
                {
                this.state = 2114;
                this.match(FlinkSqlParser.COMMA);
                this.state = 2115;
                this.tableProperty();
                }
                }
                this.state = 2120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 2121;
            this.match(FlinkSqlParser.RR_BRACKET);
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
    public tableProperty(): TablePropertyContext {
        let localctx: TablePropertyContext = new TablePropertyContext(this._ctx, this.state);
        this.enterRule(localctx, 332, FlinkSqlParser.RULE_tableProperty);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2123;
            localctx._key = this.tablePropertyKey();
            this.state = 2128;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la===249 || _la===352 || _la===373 || ((((_la - 405)) & ~0x1F) === 0 && ((1 << (_la - 405)) & 7) !== 0)) {
                {
                this.state = 2125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===373) {
                    {
                    this.state = 2124;
                    this.match(FlinkSqlParser.EQUAL_SYMBOL);
                    }
                }

                this.state = 2127;
                localctx._value = this.tablePropertyValue();
                }
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
    public tablePropertyKey(): TablePropertyKeyContext {
        let localctx: TablePropertyKeyContext = new TablePropertyKeyContext(this._ctx, this.state);
        this.enterRule(localctx, 334, FlinkSqlParser.RULE_tablePropertyKey);
        try {
            this.state = 2133;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 252, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2130;
                this.identifier();
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2131;
                this.dereferenceDefinition();
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2132;
                this.match(FlinkSqlParser.STRING_LITERAL);
                }
                break;
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
    public tablePropertyValue(): TablePropertyValueContext {
        let localctx: TablePropertyValueContext = new TablePropertyValueContext(this._ctx, this.state);
        this.enterRule(localctx, 336, FlinkSqlParser.RULE_tablePropertyValue);
        try {
            this.state = 2139;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2135;
                this.match(FlinkSqlParser.DIG_LITERAL);
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2136;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2137;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2138;
                this.match(FlinkSqlParser.STRING_LITERAL);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public logicalOperator(): LogicalOperatorContext {
        let localctx: LogicalOperatorContext = new LogicalOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 338, FlinkSqlParser.RULE_logicalOperator);
        try {
            this.state = 2147;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_AND:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2141;
                this.match(FlinkSqlParser.KW_AND);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2142;
                this.match(FlinkSqlParser.BIT_AND_OP);
                this.state = 2143;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.KW_OR:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2144;
                this.match(FlinkSqlParser.KW_OR);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2145;
                this.match(FlinkSqlParser.BIT_OR_OP);
                this.state = 2146;
                this.match(FlinkSqlParser.BIT_OR_OP);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public comparisonOperator(): ComparisonOperatorContext {
        let localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 340, FlinkSqlParser.RULE_comparisonOperator);
        try {
            this.state = 2163;
            this._errHandler.sync(this);
            switch ( this._interp.adaptivePredict(this._input, 255, this._ctx) ) {
            case 1:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2149;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 2:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2150;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 3:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2151;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case 4:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2152;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2153;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 5:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2154;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2155;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 6:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2156;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2157;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case 7:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2158;
                this.match(FlinkSqlParser.EXCLAMATION_SYMBOL);
                this.state = 2159;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                }
                break;
            case 8:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2160;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2161;
                this.match(FlinkSqlParser.EQUAL_SYMBOL);
                this.state = 2162;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
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
    public bitOperator(): BitOperatorContext {
        let localctx: BitOperatorContext = new BitOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 342, FlinkSqlParser.RULE_bitOperator);
        try {
            this.state = 2172;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.LESS_SYMBOL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2165;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                this.state = 2166;
                this.match(FlinkSqlParser.LESS_SYMBOL);
                }
                break;
            case FlinkSqlParser.GREATER_SYMBOL:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2167;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                this.state = 2168;
                this.match(FlinkSqlParser.GREATER_SYMBOL);
                }
                break;
            case FlinkSqlParser.BIT_AND_OP:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2169;
                this.match(FlinkSqlParser.BIT_AND_OP);
                }
                break;
            case FlinkSqlParser.BIT_XOR_OP:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2170;
                this.match(FlinkSqlParser.BIT_XOR_OP);
                }
                break;
            case FlinkSqlParser.BIT_OR_OP:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2171;
                this.match(FlinkSqlParser.BIT_OR_OP);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public mathOperator(): MathOperatorContext {
        let localctx: MathOperatorContext = new MathOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 344, FlinkSqlParser.RULE_mathOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2174;
            _la = this._input.LA(1);
            if(!(_la===32 || ((((_la - 395)) & ~0x1F) === 0 && ((1 << (_la - 395)) & 221) !== 0))) {
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
    public unaryOperator(): UnaryOperatorContext {
        let localctx: UnaryOperatorContext = new UnaryOperatorContext(this._ctx, this.state);
        this.enterRule(localctx, 346, FlinkSqlParser.RULE_unaryOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2176;
            _la = this._input.LA(1);
            if(!(_la===298 || ((((_la - 376)) & ~0x1F) === 0 && ((1 << (_la - 376)) & 6291459) !== 0))) {
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
    public constant(): ConstantContext {
        let localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
        this.enterRule(localctx, 348, FlinkSqlParser.RULE_constant);
        let _la: number;
        try {
            this.state = 2192;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
            case FlinkSqlParser.KW_INTERVAL:
                this.enterOuterAlt(localctx, 1);
                {
                this.state = 2178;
                this.timeIntervalExpression();
                }
                break;
            case FlinkSqlParser.KW_MICROSECOND:
            case FlinkSqlParser.KW_MILLISECOND:
            case FlinkSqlParser.KW_QUARTER:
            case FlinkSqlParser.KW_WEEK:
            case FlinkSqlParser.KW_DAY:
            case FlinkSqlParser.KW_HOUR:
            case FlinkSqlParser.KW_MINUTE:
            case FlinkSqlParser.KW_MONTH:
            case FlinkSqlParser.KW_SECOND:
            case FlinkSqlParser.KW_YEAR:
                this.enterOuterAlt(localctx, 2);
                {
                this.state = 2179;
                this.timePointLiteral();
                }
                break;
            case FlinkSqlParser.STRING_LITERAL:
                this.enterOuterAlt(localctx, 3);
                {
                this.state = 2180;
                this.stringLiteral();
                }
                break;
            case FlinkSqlParser.HYPNEN_SIGN:
            case FlinkSqlParser.DIG_LITERAL:
                this.enterOuterAlt(localctx, 4);
                {
                this.state = 2182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===397) {
                    {
                    this.state = 2181;
                    this.match(FlinkSqlParser.HYPNEN_SIGN);
                    }
                }

                this.state = 2184;
                this.decimalLiteral();
                }
                break;
            case FlinkSqlParser.KW_FALSE:
            case FlinkSqlParser.KW_TRUE:
                this.enterOuterAlt(localctx, 5);
                {
                this.state = 2185;
                this.booleanLiteral();
                }
                break;
            case FlinkSqlParser.REAL_LITERAL:
                this.enterOuterAlt(localctx, 6);
                {
                this.state = 2186;
                this.match(FlinkSqlParser.REAL_LITERAL);
                }
                break;
            case FlinkSqlParser.BIT_STRING:
                this.enterOuterAlt(localctx, 7);
                {
                this.state = 2187;
                this.match(FlinkSqlParser.BIT_STRING);
                }
                break;
            case FlinkSqlParser.KW_NOT:
            case FlinkSqlParser.KW_NULL:
                this.enterOuterAlt(localctx, 8);
                {
                this.state = 2189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la===298) {
                    {
                    this.state = 2188;
                    this.match(FlinkSqlParser.KW_NOT);
                    }
                }

                this.state = 2191;
                this.match(FlinkSqlParser.KW_NULL);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localctx;
    }
    public timePointLiteral(): TimePointLiteralContext {
        let localctx: TimePointLiteralContext = new TimePointLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 350, FlinkSqlParser.RULE_timePointLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2194;
            this.timePointUnit();
            this.state = 2195;
            this.stringLiteral();
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
    public stringLiteral(): StringLiteralContext {
        let localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 352, FlinkSqlParser.RULE_stringLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2197;
            this.match(FlinkSqlParser.STRING_LITERAL);
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
    public decimalLiteral(): DecimalLiteralContext {
        let localctx: DecimalLiteralContext = new DecimalLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 354, FlinkSqlParser.RULE_decimalLiteral);
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2199;
            this.match(FlinkSqlParser.DIG_LITERAL);
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
    public booleanLiteral(): BooleanLiteralContext {
        let localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
        this.enterRule(localctx, 356, FlinkSqlParser.RULE_booleanLiteral);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2201;
            _la = this._input.LA(1);
            if(!(_la===249 || _la===352)) {
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
    public setQuantifier(): SetQuantifierContext {
        let localctx: SetQuantifierContext = new SetQuantifierContext(this._ctx, this.state);
        this.enterRule(localctx, 358, FlinkSqlParser.RULE_setQuantifier);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2203;
            _la = this._input.LA(1);
            if(!(_la===178 || _la===235)) {
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
    public timePointUnit(): TimePointUnitContext {
        let localctx: TimePointUnitContext = new TimePointUnitContext(this._ctx, this.state);
        this.enterRule(localctx, 360, FlinkSqlParser.RULE_timePointUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2205;
            _la = this._input.LA(1);
            if(!(_la===78 || _la===80 || _la===114 || _la===171 || _la===227 || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2415919105) !== 0) || _la===329 || _la===372)) {
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
    public timeIntervalUnit(): TimeIntervalUnitContext {
        let localctx: TimeIntervalUnitContext = new TimeIntervalUnitContext(this._ctx, this.state);
        this.enterRule(localctx, 362, FlinkSqlParser.RULE_timeIntervalUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2207;
            _la = this._input.LA(1);
            if(!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & 4218881) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 418381825) !== 0) || _la===114 || _la===130 || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 19) !== 0) || _la===227 || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2415919105) !== 0) || _la===329 || _la===372)) {
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
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
        let localctx: ReservedKeywordsUsedAsFuncParamContext = new ReservedKeywordsUsedAsFuncParamContext(this._ctx, this.state);
        this.enterRule(localctx, 364, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2209;
            _la = this._input.LA(1);
            if(!(_la===178 || _la===196 || _la===235 || _la===278 || _la===351 || _la===395)) {
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
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
        let localctx: ReservedKeywordsUsedAsFuncNameContext = new ReservedKeywordsUsedAsFuncNameContext(this._ctx, this.state);
        this.enterRule(localctx, 366, FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2211;
            _la = this._input.LA(1);
            if(!(_la===59 || _la===77 || _la===114 || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & 2147622977) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & 4227393) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 2149711881) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 2466512897) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & 554436097) !== 0) || _la===372)) {
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
    public reservedKeywords(): ReservedKeywordsContext {
        let localctx: ReservedKeywordsContext = new ReservedKeywordsContext(this._ctx, this.state);
        this.enterRule(localctx, 368, FlinkSqlParser.RULE_reservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2213;
            _la = this._input.LA(1);
            if(!(((((_la - 177)) & ~0x1F) === 0 && ((1 << (_la - 177)) & 4294967295) !== 0) || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & 4294967295) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & 4294967293) !== 0) || ((((_la - 273)) & ~0x1F) === 0 && ((1 << (_la - 273)) & 4294967295) !== 0) || ((((_la - 305)) & ~0x1F) === 0 && ((1 << (_la - 305)) & 4294963199) !== 0) || ((((_la - 337)) & ~0x1F) === 0 && ((1 << (_la - 337)) & 4294950903) !== 0) || ((((_la - 369)) & ~0x1F) === 0 && ((1 << (_la - 369)) & 15) !== 0))) {
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
    public nonReservedKeywords(): NonReservedKeywordsContext {
        let localctx: NonReservedKeywordsContext = new NonReservedKeywordsContext(this._ctx, this.state);
        this.enterRule(localctx, 370, FlinkSqlParser.RULE_nonReservedKeywords);
        let _la: number;
        try {
            this.enterOuterAlt(localctx, 1);
            {
            this.state = 2215;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294963184) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967279) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 126975) !== 0))) {
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

    public override sempred(localctx: antlr.RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 79:
            return this.queryStatement_sempred(localctx as QueryStatementContext, predIndex);
        case 89:
            return this.tableExpression_sempred(localctx as TableExpressionContext, predIndex);
        case 130:
            return this.booleanExpression_sempred(localctx as BooleanExpressionContext, predIndex);
        case 133:
            return this.valueExpression_sempred(localctx as ValueExpressionContext, predIndex);
        case 134:
            return this.primaryExpression_sempred(localctx as PrimaryExpressionContext, predIndex);
        }
        return true;
    }
    private queryStatement_sempred(localctx: QueryStatementContext, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this._ctx, 3);
        }
        return true;
    }
    private tableExpression_sempred(localctx: TableExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this._ctx, 3);
        case 2:
            return this.precpred(this._ctx, 4);
        }
        return true;
    }
    private booleanExpression_sempred(localctx: BooleanExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 3:
            return this.precpred(this._ctx, 3);
        case 4:
            return this.precpred(this._ctx, 2);
        case 5:
            return this.precpred(this._ctx, 1);
        }
        return true;
    }
    private valueExpression_sempred(localctx: ValueExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 6:
            return this.precpred(this._ctx, 7);
        case 7:
            return this.precpred(this._ctx, 6);
        case 8:
            return this.precpred(this._ctx, 5);
        case 9:
            return this.precpred(this._ctx, 4);
        case 10:
            return this.precpred(this._ctx, 3);
        case 11:
            return this.precpred(this._ctx, 2);
        case 12:
            return this.precpred(this._ctx, 1);
        }
        return true;
    }
    private primaryExpression_sempred(localctx: PrimaryExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
        case 13:
            return this.precpred(this._ctx, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,410,2218,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,7,103,
        2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
        7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,
        2,115,7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,
        7,120,2,121,7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,
        2,126,7,126,2,127,7,127,2,128,7,128,2,129,7,129,2,130,7,130,2,131,
        7,131,2,132,7,132,2,133,7,133,2,134,7,134,2,135,7,135,2,136,7,136,
        2,137,7,137,2,138,7,138,2,139,7,139,2,140,7,140,2,141,7,141,2,142,
        7,142,2,143,7,143,2,144,7,144,2,145,7,145,2,146,7,146,2,147,7,147,
        2,148,7,148,2,149,7,149,2,150,7,150,2,151,7,151,2,152,7,152,2,153,
        7,153,2,154,7,154,2,155,7,155,2,156,7,156,2,157,7,157,2,158,7,158,
        2,159,7,159,2,160,7,160,2,161,7,161,2,162,7,162,2,163,7,163,2,164,
        7,164,2,165,7,165,2,166,7,166,2,167,7,167,2,168,7,168,2,169,7,169,
        2,170,7,170,2,171,7,171,2,172,7,172,2,173,7,173,2,174,7,174,2,175,
        7,175,2,176,7,176,2,177,7,177,2,178,7,178,2,179,7,179,2,180,7,180,
        2,181,7,181,2,182,7,182,2,183,7,183,2,184,7,184,2,185,7,185,1,0,
        1,0,1,0,1,1,1,1,1,1,1,2,1,2,5,2,381,8,2,10,2,12,2,384,9,2,1,3,1,
        3,3,3,388,8,3,1,3,1,3,3,3,392,8,3,1,3,1,3,3,3,396,8,3,1,3,1,3,3,
        3,400,8,3,1,3,1,3,3,3,404,8,3,1,3,1,3,3,3,408,8,3,1,3,1,3,3,3,412,
        8,3,1,3,1,3,3,3,416,8,3,1,3,1,3,3,3,420,8,3,1,3,1,3,3,3,424,8,3,
        1,3,1,3,3,3,428,8,3,1,3,1,3,3,3,432,8,3,3,3,434,8,3,1,4,1,4,1,5,
        1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,452,8,5,
        1,6,1,6,3,6,456,8,6,1,7,1,7,1,7,1,8,1,8,1,8,1,8,3,8,465,8,8,1,8,
        1,8,1,8,3,8,470,8,8,1,9,1,9,1,9,5,9,475,8,9,10,9,12,9,478,9,9,1,
        10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,488,8,11,1,12,1,12,1,
        12,1,12,1,12,5,12,495,8,12,10,12,12,12,498,9,12,1,13,1,13,1,13,1,
        13,1,13,1,13,1,13,1,13,1,13,3,13,509,8,13,1,13,3,13,512,8,13,1,13,
        1,13,1,13,1,13,1,13,3,13,519,8,13,1,13,1,13,1,13,1,13,1,13,1,13,
        3,13,527,8,13,1,13,1,13,1,13,3,13,532,8,13,1,13,3,13,535,8,13,1,
        14,1,14,1,14,1,14,1,14,3,14,542,8,14,1,15,1,15,1,15,1,15,1,16,1,
        16,3,16,550,8,16,1,17,1,17,3,17,554,8,17,1,18,1,18,1,18,1,18,1,19,
        1,19,1,19,1,19,1,19,1,19,3,19,566,8,19,1,19,1,19,1,19,1,19,1,19,
        1,19,3,19,574,8,19,1,19,1,19,3,19,578,8,19,1,19,1,19,1,19,1,19,1,
        19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
        19,1,19,1,19,3,19,600,8,19,1,20,4,20,603,8,20,11,20,12,20,604,1,
        21,1,21,3,21,609,8,21,1,22,1,22,3,22,613,8,22,1,22,1,22,3,22,617,
        8,22,1,22,1,22,1,22,1,22,1,22,5,22,624,8,22,10,22,12,22,627,9,22,
        1,22,1,22,3,22,631,8,22,1,22,1,22,3,22,635,8,22,1,22,1,22,3,22,639,
        8,22,1,22,1,22,3,22,643,8,22,1,22,3,22,646,8,22,1,22,1,22,3,22,650,
        8,22,1,23,1,23,1,23,3,23,655,8,23,1,23,1,23,1,23,1,23,3,23,661,8,
        23,1,24,1,24,1,24,3,24,666,8,24,1,25,1,25,1,25,3,25,671,8,25,1,25,
        3,25,674,8,25,1,26,1,26,3,26,678,8,26,1,27,1,27,1,27,1,27,5,27,684,
        8,27,10,27,12,27,687,9,27,1,27,1,27,1,28,1,28,1,28,3,28,694,8,28,
        1,28,1,28,3,28,698,8,28,1,28,1,28,3,28,702,8,28,1,28,1,28,3,28,706,
        8,28,1,28,1,28,3,28,710,8,28,1,28,1,28,3,28,714,8,28,1,28,1,28,3,
        28,718,8,28,1,28,1,28,3,28,722,8,28,1,28,1,28,3,28,726,8,28,3,28,
        728,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,738,8,30,1,
        30,1,30,1,31,1,31,1,31,1,31,3,31,746,8,31,1,31,1,31,1,32,1,32,1,
        32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,
        34,1,34,1,34,5,34,768,8,34,10,34,12,34,771,9,34,1,34,1,34,1,35,1,
        35,3,35,777,8,35,1,35,1,35,1,35,1,35,3,35,783,8,35,1,35,3,35,786,
        8,35,1,35,3,35,789,8,35,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,
        3,37,799,8,37,1,37,3,37,802,8,37,1,38,1,38,1,39,1,39,1,39,1,39,3,
        39,810,8,39,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,3,
        42,822,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,44,1,44,1,
        44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,5,46,844,8,46,10,
        46,12,46,847,9,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,5,47,857,
        8,47,10,47,12,47,860,9,47,1,47,1,47,3,47,864,8,47,1,48,1,48,3,48,
        868,8,48,1,49,1,49,1,49,1,49,5,49,874,8,49,10,49,12,49,877,9,49,
        1,49,3,49,880,8,49,1,50,1,50,1,50,1,50,3,50,886,8,50,1,51,1,51,1,
        51,1,51,1,51,1,52,1,52,1,52,3,52,896,8,52,1,52,1,52,3,52,900,8,52,
        1,52,1,52,1,53,1,53,3,53,906,8,53,1,53,1,53,3,53,910,8,53,1,53,1,
        53,3,53,914,8,53,1,53,3,53,917,8,53,1,53,1,53,1,53,1,54,1,54,1,54,
        1,54,3,54,926,8,54,1,54,1,54,3,54,930,8,54,1,54,1,54,1,54,1,54,1,
        54,3,54,937,8,54,1,54,3,54,940,8,54,1,55,1,55,1,55,1,55,1,55,1,55,
        5,55,948,8,55,10,55,12,55,951,9,55,1,56,1,56,1,57,1,57,1,57,3,57,
        958,8,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,966,8,57,1,58,1,58,3,
        58,970,8,58,1,58,1,58,1,58,1,59,1,59,1,59,1,60,1,60,1,60,1,60,1,
        60,1,60,1,60,3,60,985,8,60,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,
        62,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,3,64,1004,8,64,1,
        65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,1,66,3,66,1015,8,66,1,66,1,
        66,3,66,1019,8,66,1,66,1,66,1,66,1,66,1,66,3,66,1026,8,66,1,67,1,
        67,1,67,3,67,1031,8,67,1,67,1,67,1,68,1,68,3,68,1037,8,68,1,68,1,
        68,3,68,1041,8,68,1,68,1,68,1,69,1,69,1,69,3,69,1048,8,69,1,69,1,
        69,3,69,1052,8,69,1,70,1,70,3,70,1056,8,70,1,70,1,70,3,70,1060,8,
        70,1,70,1,70,1,71,1,71,1,71,1,71,3,71,1068,8,71,1,71,1,71,3,71,1072,
        8,71,1,71,1,71,1,72,3,72,1077,8,72,1,72,1,72,1,72,1,72,3,72,1083,
        8,72,1,73,1,73,1,73,1,73,3,73,1089,8,73,1,73,3,73,1092,8,73,1,73,
        1,73,3,73,1096,8,73,1,74,1,74,1,74,1,75,1,75,1,75,1,75,5,75,1105,
        8,75,10,75,12,75,1108,9,75,1,76,1,76,1,76,1,76,5,76,1114,8,76,10,
        76,12,76,1117,9,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
        4,77,1128,8,77,11,77,12,77,1129,1,77,1,77,1,78,1,78,1,78,1,78,1,
        78,1,78,4,78,1140,8,78,11,78,12,78,1141,1,78,1,78,1,79,1,79,1,79,
        1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,1157,8,79,1,79,3,79,
        1160,8,79,1,79,1,79,3,79,1164,8,79,1,79,3,79,1167,8,79,3,79,1169,
        8,79,1,79,1,79,1,79,3,79,1174,8,79,1,79,1,79,3,79,1178,8,79,1,79,
        3,79,1181,8,79,5,79,1183,8,79,10,79,12,79,1186,9,79,1,80,1,80,1,
        80,1,80,5,80,1192,8,80,10,80,12,80,1195,9,80,1,81,1,81,1,81,1,81,
        5,81,1201,8,81,10,81,12,81,1204,9,81,1,82,1,82,1,82,1,82,1,82,5,
        82,1211,8,82,10,82,12,82,1214,9,82,1,82,1,82,3,82,1218,8,82,1,82,
        1,82,1,82,1,82,1,82,1,83,1,83,1,84,1,84,1,84,3,84,1230,8,84,1,84,
        3,84,1233,8,84,1,84,3,84,1236,8,84,1,84,3,84,1239,8,84,1,84,1,84,
        1,84,1,84,3,84,1245,8,84,1,85,1,85,3,85,1249,8,85,1,85,1,85,1,85,
        1,85,5,85,1255,8,85,10,85,12,85,1258,9,85,3,85,1260,8,85,1,86,1,
        86,1,86,3,86,1265,8,86,1,86,3,86,1268,8,86,3,86,1270,8,86,1,87,1,
        87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1284,8,
        87,1,88,1,88,1,88,1,89,1,89,1,89,1,89,5,89,1293,8,89,10,89,12,89,
        1296,9,89,1,89,1,89,3,89,1300,8,89,1,89,1,89,1,89,1,89,1,89,1,89,
        3,89,1308,8,89,1,89,3,89,1311,8,89,1,89,3,89,1314,8,89,1,89,1,89,
        1,89,3,89,1319,8,89,5,89,1321,8,89,10,89,12,89,1324,9,89,1,90,1,
        90,3,90,1328,8,90,1,91,3,91,1331,8,91,1,91,1,91,3,91,1335,8,91,1,
        91,3,91,1338,8,91,1,91,3,91,1341,8,91,1,91,1,91,1,91,1,91,1,91,1,
        91,1,91,1,91,5,91,1351,8,91,10,91,12,91,1354,9,91,1,91,1,91,1,91,
        1,91,3,91,1360,8,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,1,91,
        3,91,1371,8,91,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,1,94,1,94,
        1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,
        5,96,1396,8,96,10,96,12,96,1399,9,96,1,96,1,96,1,97,1,97,1,98,1,
        98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,98,1,
        98,3,98,1420,8,98,1,99,1,99,1,100,1,100,1,100,1,100,1,100,1,101,
        1,101,1,101,1,101,1,101,1,101,1,101,5,101,1436,8,101,10,101,12,101,
        1439,9,101,1,101,1,101,3,101,1443,8,101,1,102,1,102,1,102,1,103,
        1,103,1,103,1,103,1,103,5,103,1453,8,103,10,103,12,103,1456,9,103,
        1,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,5,104,1466,8,104,
        10,104,12,104,1469,9,104,1,104,1,104,1,104,1,104,1,104,1,104,1,104,
        5,104,1478,8,104,10,104,12,104,1481,9,104,1,104,1,104,1,104,1,104,
        1,104,1,104,1,104,5,104,1490,8,104,10,104,12,104,1493,9,104,1,104,
        1,104,3,104,1497,8,104,1,105,1,105,1,105,1,106,1,106,1,107,1,107,
        1,107,1,107,1,107,1,107,1,107,1,108,1,108,1,109,1,109,1,110,1,110,
        1,110,1,111,1,111,1,111,1,111,5,111,1522,8,111,10,111,12,111,1525,
        9,111,1,112,1,112,1,112,1,112,1,113,3,113,1532,8,113,1,113,1,113,
        3,113,1536,8,113,1,113,3,113,1539,8,113,1,113,3,113,1542,8,113,1,
        113,1,113,1,114,1,114,1,114,3,114,1549,8,114,1,114,3,114,1552,8,
        114,1,114,3,114,1555,8,114,1,114,3,114,1558,8,114,1,114,3,114,1561,
        8,114,1,114,3,114,1564,8,114,1,114,1,114,1,114,3,114,1569,8,114,
        1,114,3,114,1572,8,114,1,115,1,115,1,115,1,115,1,115,5,115,1579,
        8,115,10,115,12,115,1582,9,115,1,116,1,116,3,116,1586,8,116,1,116,
        1,116,3,116,1590,8,116,1,117,1,117,1,117,3,117,1595,8,117,1,118,
        1,118,1,118,1,118,1,118,5,118,1602,8,118,10,118,12,118,1605,9,118,
        1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,1,119,
        1,119,1,119,1,119,1,119,1,119,3,119,1623,8,119,1,120,1,120,1,120,
        1,120,5,120,1629,8,120,10,120,12,120,1632,9,120,1,121,1,121,1,121,
        4,121,1637,8,121,11,121,12,121,1638,1,121,1,121,3,121,1643,8,121,
        1,122,1,122,3,122,1647,8,122,1,123,1,123,1,123,1,123,1,123,1,123,
        1,123,1,123,3,123,1657,8,123,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,1,124,
        1,124,1,124,1,124,1,124,1,124,1,124,1,124,3,124,1683,8,124,1,125,
        1,125,1,125,1,125,5,125,1689,8,125,10,125,12,125,1692,9,125,1,126,
        1,126,1,126,1,126,1,126,1,126,1,126,1,126,1,126,3,126,1703,8,126,
        1,127,1,127,1,127,1,127,1,127,1,128,1,128,1,128,1,129,1,129,1,130,
        1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,3,130,1725,
        8,130,3,130,1727,8,130,1,130,1,130,1,130,1,130,1,130,1,130,1,130,
        1,130,1,130,3,130,1738,8,130,1,130,5,130,1741,8,130,10,130,12,130,
        1744,9,130,1,131,3,131,1747,8,131,1,131,1,131,3,131,1751,8,131,1,
        131,1,131,1,131,1,131,1,131,3,131,1758,8,131,1,131,1,131,1,131,1,
        131,1,131,5,131,1765,8,131,10,131,12,131,1768,9,131,1,131,1,131,
        1,131,3,131,1773,8,131,1,131,1,131,1,131,1,131,1,131,1,131,1,131,
        1,131,1,131,1,131,1,131,3,131,1786,8,131,1,131,1,131,1,131,1,131,
        1,131,3,131,1793,8,131,1,131,1,131,1,131,3,131,1798,8,131,1,131,
        1,131,1,131,1,131,3,131,1804,8,131,1,131,1,131,1,131,1,131,1,131,
        3,131,1811,8,131,3,131,1813,8,131,1,132,3,132,1816,8,132,1,132,1,
        132,1,132,1,132,1,132,1,132,1,132,1,132,5,132,1826,8,132,10,132,
        12,132,1829,9,132,1,132,1,132,3,132,1833,8,132,1,132,3,132,1836,
        8,132,1,132,1,132,1,132,1,132,3,132,1842,8,132,3,132,1844,8,132,
        1,133,1,133,1,133,1,133,3,133,1850,8,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,1,133,
        1,133,1,133,1,133,1,133,1,133,1,133,5,133,1873,8,133,10,133,12,133,
        1876,9,133,1,134,1,134,1,134,4,134,1881,8,134,11,134,12,134,1882,
        1,134,1,134,3,134,1887,8,134,1,134,1,134,1,134,1,134,1,134,4,134,
        1894,8,134,11,134,12,134,1895,1,134,1,134,3,134,1900,8,134,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,3,134,1916,8,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,3,134,1925,8,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,1,134,
        1,134,1,134,1,134,1,134,3,134,1949,8,134,1,134,1,134,1,134,5,134,
        1954,8,134,10,134,12,134,1957,9,134,3,134,1959,8,134,1,134,1,134,
        1,134,1,134,1,134,1,134,1,134,1,134,3,134,1969,8,134,1,134,1,134,
        1,134,1,134,1,134,5,134,1976,8,134,10,134,12,134,1979,9,134,1,135,
        1,135,1,135,3,135,1984,8,135,1,136,1,136,1,136,1,136,3,136,1990,
        8,136,1,137,1,137,1,138,1,138,1,139,1,139,3,139,1998,8,139,1,140,
        1,140,1,140,3,140,2003,8,140,1,141,1,141,3,141,2007,8,141,1,142,
        1,142,1,142,4,142,2012,8,142,11,142,12,142,2013,1,143,1,143,1,143,
        3,143,2019,8,143,1,144,1,144,1,144,1,144,1,144,1,145,3,145,2027,
        8,145,1,145,1,145,3,145,2031,8,145,1,146,3,146,2034,8,146,1,146,
        1,146,3,146,2038,8,146,1,147,3,147,2041,8,147,1,147,1,147,3,147,
        2045,8,147,1,148,1,148,1,148,1,149,1,149,4,149,2052,8,149,11,149,
        12,149,2053,1,149,3,149,2057,8,149,1,150,1,150,1,150,1,150,1,151,
        1,151,1,151,5,151,2066,8,151,10,151,12,151,2069,9,151,1,152,1,152,
        1,152,3,152,2074,8,152,1,153,1,153,1,154,1,154,1,155,1,155,1,155,
        1,155,1,155,1,156,1,156,1,157,1,157,1,158,1,158,1,159,1,159,1,160,
        1,160,1,161,1,161,1,161,5,161,2098,8,161,10,161,12,161,2101,9,161,
        1,162,1,162,1,162,1,163,1,163,1,163,1,163,1,164,1,164,1,164,1,165,
        1,165,1,165,1,165,5,165,2117,8,165,10,165,12,165,2120,9,165,1,165,
        1,165,1,166,1,166,3,166,2126,8,166,1,166,3,166,2129,8,166,1,167,
        1,167,1,167,3,167,2134,8,167,1,168,1,168,1,168,1,168,3,168,2140,
        8,168,1,169,1,169,1,169,1,169,1,169,1,169,3,169,2148,8,169,1,170,
        1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,1,170,
        1,170,1,170,3,170,2164,8,170,1,171,1,171,1,171,1,171,1,171,1,171,
        1,171,3,171,2173,8,171,1,172,1,172,1,173,1,173,1,174,1,174,1,174,
        1,174,3,174,2183,8,174,1,174,1,174,1,174,1,174,1,174,3,174,2190,
        8,174,1,174,3,174,2193,8,174,1,175,1,175,1,175,1,176,1,176,1,177,
        1,177,1,178,1,178,1,179,1,179,1,180,1,180,1,181,1,181,1,182,1,182,
        1,183,1,183,1,184,1,184,1,185,1,185,1,185,1,2099,5,158,178,260,266,
        268,186,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
        86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
        122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
        154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,
        186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,
        218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,
        250,252,254,256,258,260,262,264,266,268,270,272,274,276,278,280,
        282,284,286,288,290,292,294,296,298,300,302,304,306,308,310,312,
        314,316,318,320,322,324,326,328,330,332,334,336,338,340,342,344,
        346,348,350,352,354,356,358,360,362,364,366,368,370,0,47,2,0,30,
        30,234,234,3,0,16,16,38,38,68,68,4,0,13,13,26,26,65,65,167,167,2,
        0,12,12,25,25,2,0,252,252,263,263,2,0,166,166,344,344,2,0,4,4,118,
        118,1,0,108,112,3,0,195,195,225,225,299,299,11,0,10,10,146,146,152,
        152,191,192,204,204,226,226,268,269,335,335,347,347,349,349,364,
        365,2,0,369,369,371,371,4,0,228,229,236,236,250,250,300,300,2,0,
        184,184,293,293,2,0,41,41,264,264,3,0,21,21,96,96,178,178,3,0,41,
        41,94,94,264,264,3,0,53,53,90,90,170,170,3,0,66,66,107,107,126,126,
        2,0,11,11,123,123,2,0,93,93,272,272,3,0,243,243,270,270,354,354,
        4,0,253,253,265,265,279,279,323,323,3,0,23,23,57,57,156,156,5,0,
        24,24,139,140,145,145,151,151,302,302,2,0,221,221,326,326,3,0,57,
        57,136,136,156,156,2,0,8,8,30,30,2,0,45,45,73,73,4,0,249,249,299,
        299,352,352,356,356,2,0,186,186,340,340,2,0,178,178,182,182,2,0,
        377,377,397,398,4,0,32,32,395,395,399,399,402,402,2,0,397,398,400,
        400,1,0,397,398,1,0,406,407,2,0,406,406,409,409,4,0,32,32,395,395,
        397,399,401,402,3,0,298,298,376,377,397,398,2,0,249,249,352,352,
        2,0,178,178,235,235,10,0,78,78,80,80,114,114,171,171,227,227,261,
        261,289,289,292,292,329,329,372,372,16,0,14,14,27,28,36,36,58,58,
        78,81,85,86,114,114,130,130,171,172,175,175,227,227,261,261,289,
        289,292,292,329,329,372,372,6,0,178,178,196,196,235,235,278,278,
        351,351,395,395,28,0,59,59,77,77,114,114,171,171,177,177,184,184,
        188,188,202,203,209,209,211,211,218,218,225,225,258,258,261,261,
        275,275,279,279,289,289,292,292,310,310,316,317,320,320,323,323,
        329,329,338,339,347,348,353,353,358,358,372,372,5,0,177,241,243,
        316,318,339,341,350,352,372,4,0,4,11,13,35,37,171,173,176,2410,0,
        372,1,0,0,0,2,375,1,0,0,0,4,382,1,0,0,0,6,433,1,0,0,0,8,435,1,0,
        0,0,10,451,1,0,0,0,12,455,1,0,0,0,14,457,1,0,0,0,16,460,1,0,0,0,
        18,471,1,0,0,0,20,479,1,0,0,0,22,487,1,0,0,0,24,489,1,0,0,0,26,534,
        1,0,0,0,28,536,1,0,0,0,30,543,1,0,0,0,32,547,1,0,0,0,34,551,1,0,
        0,0,36,555,1,0,0,0,38,599,1,0,0,0,40,602,1,0,0,0,42,608,1,0,0,0,
        44,610,1,0,0,0,46,651,1,0,0,0,48,665,1,0,0,0,50,667,1,0,0,0,52,677,
        1,0,0,0,54,679,1,0,0,0,56,727,1,0,0,0,58,729,1,0,0,0,60,733,1,0,
        0,0,62,741,1,0,0,0,64,749,1,0,0,0,66,753,1,0,0,0,68,760,1,0,0,0,
        70,788,1,0,0,0,72,790,1,0,0,0,74,793,1,0,0,0,76,803,1,0,0,0,78,805,
        1,0,0,0,80,811,1,0,0,0,82,813,1,0,0,0,84,821,1,0,0,0,86,829,1,0,
        0,0,88,831,1,0,0,0,90,835,1,0,0,0,92,839,1,0,0,0,94,863,1,0,0,0,
        96,867,1,0,0,0,98,869,1,0,0,0,100,885,1,0,0,0,102,887,1,0,0,0,104,
        892,1,0,0,0,106,903,1,0,0,0,108,921,1,0,0,0,110,941,1,0,0,0,112,
        952,1,0,0,0,114,954,1,0,0,0,116,967,1,0,0,0,118,974,1,0,0,0,120,
        977,1,0,0,0,122,986,1,0,0,0,124,990,1,0,0,0,126,994,1,0,0,0,128,
        997,1,0,0,0,130,1005,1,0,0,0,132,1010,1,0,0,0,134,1027,1,0,0,0,136,
        1034,1,0,0,0,138,1044,1,0,0,0,140,1053,1,0,0,0,142,1063,1,0,0,0,
        144,1082,1,0,0,0,146,1084,1,0,0,0,148,1097,1,0,0,0,150,1100,1,0,
        0,0,152,1109,1,0,0,0,154,1120,1,0,0,0,156,1133,1,0,0,0,158,1168,
        1,0,0,0,160,1187,1,0,0,0,162,1196,1,0,0,0,164,1205,1,0,0,0,166,1224,
        1,0,0,0,168,1244,1,0,0,0,170,1246,1,0,0,0,172,1269,1,0,0,0,174,1283,
        1,0,0,0,176,1285,1,0,0,0,178,1299,1,0,0,0,180,1325,1,0,0,0,182,1370,
        1,0,0,0,184,1372,1,0,0,0,186,1378,1,0,0,0,188,1380,1,0,0,0,190,1385,
        1,0,0,0,192,1390,1,0,0,0,194,1402,1,0,0,0,196,1419,1,0,0,0,198,1421,
        1,0,0,0,200,1423,1,0,0,0,202,1442,1,0,0,0,204,1444,1,0,0,0,206,1447,
        1,0,0,0,208,1496,1,0,0,0,210,1498,1,0,0,0,212,1501,1,0,0,0,214,1503,
        1,0,0,0,216,1510,1,0,0,0,218,1512,1,0,0,0,220,1514,1,0,0,0,222,1517,
        1,0,0,0,224,1526,1,0,0,0,226,1531,1,0,0,0,228,1545,1,0,0,0,230,1573,
        1,0,0,0,232,1583,1,0,0,0,234,1591,1,0,0,0,236,1596,1,0,0,0,238,1622,
        1,0,0,0,240,1624,1,0,0,0,242,1633,1,0,0,0,244,1644,1,0,0,0,246,1656,
        1,0,0,0,248,1682,1,0,0,0,250,1684,1,0,0,0,252,1702,1,0,0,0,254,1704,
        1,0,0,0,256,1709,1,0,0,0,258,1712,1,0,0,0,260,1726,1,0,0,0,262,1812,
        1,0,0,0,264,1843,1,0,0,0,266,1849,1,0,0,0,268,1968,1,0,0,0,270,1983,
        1,0,0,0,272,1989,1,0,0,0,274,1991,1,0,0,0,276,1993,1,0,0,0,278,1997,
        1,0,0,0,280,1999,1,0,0,0,282,2004,1,0,0,0,284,2011,1,0,0,0,286,2015,
        1,0,0,0,288,2020,1,0,0,0,290,2030,1,0,0,0,292,2033,1,0,0,0,294,2040,
        1,0,0,0,296,2046,1,0,0,0,298,2056,1,0,0,0,300,2058,1,0,0,0,302,2062,
        1,0,0,0,304,2073,1,0,0,0,306,2075,1,0,0,0,308,2077,1,0,0,0,310,2079,
        1,0,0,0,312,2084,1,0,0,0,314,2086,1,0,0,0,316,2088,1,0,0,0,318,2090,
        1,0,0,0,320,2092,1,0,0,0,322,2094,1,0,0,0,324,2102,1,0,0,0,326,2105,
        1,0,0,0,328,2109,1,0,0,0,330,2112,1,0,0,0,332,2123,1,0,0,0,334,2133,
        1,0,0,0,336,2139,1,0,0,0,338,2147,1,0,0,0,340,2163,1,0,0,0,342,2172,
        1,0,0,0,344,2174,1,0,0,0,346,2176,1,0,0,0,348,2192,1,0,0,0,350,2194,
        1,0,0,0,352,2197,1,0,0,0,354,2199,1,0,0,0,356,2201,1,0,0,0,358,2203,
        1,0,0,0,360,2205,1,0,0,0,362,2207,1,0,0,0,364,2209,1,0,0,0,366,2211,
        1,0,0,0,368,2213,1,0,0,0,370,2215,1,0,0,0,372,373,3,2,1,0,373,374,
        5,0,0,1,374,1,1,0,0,0,375,376,3,4,2,0,376,377,5,0,0,1,377,3,1,0,
        0,0,378,381,3,6,3,0,379,381,3,8,4,0,380,378,1,0,0,0,380,379,1,0,
        0,0,381,384,1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,5,1,0,0,
        0,384,382,1,0,0,0,385,387,3,10,5,0,386,388,5,389,0,0,387,386,1,0,
        0,0,387,388,1,0,0,0,388,434,1,0,0,0,389,391,3,12,6,0,390,392,5,389,
        0,0,391,390,1,0,0,0,391,392,1,0,0,0,392,434,1,0,0,0,393,395,3,14,
        7,0,394,396,5,389,0,0,395,394,1,0,0,0,395,396,1,0,0,0,396,434,1,
        0,0,0,397,399,3,16,8,0,398,400,5,389,0,0,399,398,1,0,0,0,399,400,
        1,0,0,0,400,434,1,0,0,0,401,403,3,22,11,0,402,404,5,389,0,0,403,
        402,1,0,0,0,403,404,1,0,0,0,404,434,1,0,0,0,405,407,3,26,13,0,406,
        408,5,389,0,0,407,406,1,0,0,0,407,408,1,0,0,0,408,434,1,0,0,0,409,
        411,3,28,14,0,410,412,5,389,0,0,411,410,1,0,0,0,411,412,1,0,0,0,
        412,434,1,0,0,0,413,415,3,30,15,0,414,416,5,389,0,0,415,414,1,0,
        0,0,415,416,1,0,0,0,416,434,1,0,0,0,417,419,3,32,16,0,418,420,5,
        389,0,0,419,418,1,0,0,0,419,420,1,0,0,0,420,434,1,0,0,0,421,423,
        3,34,17,0,422,424,5,389,0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,
        434,1,0,0,0,425,427,3,36,18,0,426,428,5,389,0,0,427,426,1,0,0,0,
        427,428,1,0,0,0,428,434,1,0,0,0,429,431,3,38,19,0,430,432,5,389,
        0,0,431,430,1,0,0,0,431,432,1,0,0,0,432,434,1,0,0,0,433,385,1,0,
        0,0,433,389,1,0,0,0,433,393,1,0,0,0,433,397,1,0,0,0,433,401,1,0,
        0,0,433,405,1,0,0,0,433,409,1,0,0,0,433,413,1,0,0,0,433,417,1,0,
        0,0,433,421,1,0,0,0,433,425,1,0,0,0,433,429,1,0,0,0,434,7,1,0,0,
        0,435,436,5,389,0,0,436,9,1,0,0,0,437,452,3,42,21,0,438,452,3,104,
        52,0,439,452,3,106,53,0,440,452,3,108,54,0,441,452,3,102,51,0,442,
        452,3,114,57,0,443,452,3,128,64,0,444,452,3,130,65,0,445,452,3,132,
        66,0,446,452,3,134,67,0,447,452,3,136,68,0,448,452,3,138,69,0,449,
        452,3,140,70,0,450,452,3,142,71,0,451,437,1,0,0,0,451,438,1,0,0,
        0,451,439,1,0,0,0,451,440,1,0,0,0,451,441,1,0,0,0,451,442,1,0,0,
        0,451,443,1,0,0,0,451,444,1,0,0,0,451,445,1,0,0,0,451,446,1,0,0,
        0,451,447,1,0,0,0,451,448,1,0,0,0,451,449,1,0,0,0,451,450,1,0,0,
        0,452,11,1,0,0,0,453,456,3,158,79,0,454,456,3,144,72,0,455,453,1,
        0,0,0,455,454,1,0,0,0,456,13,1,0,0,0,457,458,7,0,0,0,458,459,3,320,
        160,0,459,15,1,0,0,0,460,464,5,246,0,0,461,465,3,18,9,0,462,463,
        5,101,0,0,463,465,5,251,0,0,464,461,1,0,0,0,464,462,1,0,0,0,464,
        465,1,0,0,0,465,469,1,0,0,0,466,470,3,12,6,0,467,470,3,146,73,0,
        468,470,3,156,78,0,469,466,1,0,0,0,469,467,1,0,0,0,469,468,1,0,0,
        0,470,17,1,0,0,0,471,476,3,20,10,0,472,473,5,388,0,0,473,475,3,20,
        10,0,474,472,1,0,0,0,475,478,1,0,0,0,476,474,1,0,0,0,476,477,1,0,
        0,0,477,19,1,0,0,0,478,476,1,0,0,0,479,480,7,1,0,0,480,21,1,0,0,
        0,481,482,5,161,0,0,482,483,5,12,0,0,483,488,3,312,156,0,484,485,
        5,161,0,0,485,488,3,314,157,0,486,488,3,24,12,0,487,481,1,0,0,0,
        487,484,1,0,0,0,487,486,1,0,0,0,488,23,1,0,0,0,489,490,5,161,0,0,
        490,491,5,84,0,0,491,496,3,322,161,0,492,493,5,388,0,0,493,495,3,
        322,161,0,494,492,1,0,0,0,495,498,1,0,0,0,496,494,1,0,0,0,496,497,
        1,0,0,0,497,25,1,0,0,0,498,496,1,0,0,0,499,500,5,332,0,0,500,535,
        7,2,0,0,501,502,5,332,0,0,502,503,5,222,0,0,503,535,7,3,0,0,504,
        505,5,332,0,0,505,508,5,149,0,0,506,507,7,4,0,0,507,509,3,320,160,
        0,508,506,1,0,0,0,508,509,1,0,0,0,509,511,1,0,0,0,510,512,3,264,
        132,0,511,510,1,0,0,0,511,512,1,0,0,0,512,535,1,0,0,0,513,514,5,
        332,0,0,514,515,5,20,0,0,515,516,7,4,0,0,516,518,3,322,161,0,517,
        519,3,264,132,0,518,517,1,0,0,0,518,519,1,0,0,0,519,535,1,0,0,0,
        520,521,5,332,0,0,521,522,5,219,0,0,522,523,7,5,0,0,523,535,3,322,
        161,0,524,526,5,332,0,0,525,527,5,360,0,0,526,525,1,0,0,0,526,527,
        1,0,0,0,527,528,1,0,0,0,528,535,5,51,0,0,529,531,5,332,0,0,530,532,
        5,253,0,0,531,530,1,0,0,0,531,532,1,0,0,0,532,533,1,0,0,0,533,535,
        5,84,0,0,534,499,1,0,0,0,534,501,1,0,0,0,534,504,1,0,0,0,534,513,
        1,0,0,0,534,520,1,0,0,0,534,524,1,0,0,0,534,529,1,0,0,0,535,27,1,
        0,0,0,536,537,5,76,0,0,537,538,5,291,0,0,538,541,3,322,161,0,539,
        540,5,369,0,0,540,542,3,330,165,0,541,539,1,0,0,0,541,542,1,0,0,
        0,542,29,1,0,0,0,543,544,5,159,0,0,544,545,5,291,0,0,545,546,3,322,
        161,0,546,31,1,0,0,0,547,549,5,331,0,0,548,550,3,332,166,0,549,548,
        1,0,0,0,549,550,1,0,0,0,550,33,1,0,0,0,551,553,5,321,0,0,552,554,
        3,334,167,0,553,552,1,0,0,0,553,554,1,0,0,0,554,35,1,0,0,0,555,556,
        7,6,0,0,556,557,5,64,0,0,557,558,3,112,56,0,558,37,1,0,0,0,559,560,
        5,4,0,0,560,561,5,64,0,0,561,562,5,369,0,0,562,565,3,40,20,0,563,
        564,5,185,0,0,564,566,3,322,161,0,565,563,1,0,0,0,565,566,1,0,0,
        0,566,600,1,0,0,0,567,568,5,4,0,0,568,569,5,43,0,0,569,570,5,369,
        0,0,570,573,3,40,20,0,571,572,5,185,0,0,572,574,3,322,161,0,573,
        571,1,0,0,0,573,574,1,0,0,0,574,577,1,0,0,0,575,576,5,119,0,0,576,
        578,3,322,161,0,577,575,1,0,0,0,577,578,1,0,0,0,578,600,1,0,0,0,
        579,580,5,4,0,0,580,581,7,7,0,0,581,582,5,369,0,0,582,583,3,40,20,
        0,583,584,5,119,0,0,584,585,3,322,161,0,585,600,1,0,0,0,586,587,
        5,4,0,0,587,588,5,113,0,0,588,600,3,40,20,0,589,590,5,4,0,0,590,
        591,5,35,0,0,591,592,5,43,0,0,592,593,5,369,0,0,593,594,3,40,20,
        0,594,595,5,119,0,0,595,596,3,322,161,0,596,597,5,69,0,0,597,598,
        3,322,161,0,598,600,1,0,0,0,599,559,1,0,0,0,599,567,1,0,0,0,599,
        579,1,0,0,0,599,586,1,0,0,0,599,589,1,0,0,0,600,39,1,0,0,0,601,603,
        5,410,0,0,602,601,1,0,0,0,603,604,1,0,0,0,604,602,1,0,0,0,604,605,
        1,0,0,0,605,41,1,0,0,0,606,609,3,44,22,0,607,609,3,46,23,0,608,606,
        1,0,0,0,608,607,1,0,0,0,609,43,1,0,0,0,610,612,5,219,0,0,611,613,
        5,150,0,0,612,611,1,0,0,0,612,613,1,0,0,0,613,614,1,0,0,0,614,616,
        5,344,0,0,615,617,3,326,163,0,616,615,1,0,0,0,616,617,1,0,0,0,617,
        618,1,0,0,0,618,619,3,318,159,0,619,620,5,384,0,0,620,625,3,48,24,
        0,621,622,5,388,0,0,622,624,3,48,24,0,623,621,1,0,0,0,624,627,1,
        0,0,0,625,623,1,0,0,0,625,626,1,0,0,0,626,630,1,0,0,0,627,625,1,
        0,0,0,628,629,5,388,0,0,629,631,3,82,41,0,630,628,1,0,0,0,630,631,
        1,0,0,0,631,634,1,0,0,0,632,633,5,388,0,0,633,635,3,84,42,0,634,
        632,1,0,0,0,634,635,1,0,0,0,635,638,1,0,0,0,636,637,5,388,0,0,637,
        639,3,88,44,0,638,636,1,0,0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,
        642,5,385,0,0,641,643,3,72,36,0,642,641,1,0,0,0,642,643,1,0,0,0,
        643,645,1,0,0,0,644,646,3,90,45,0,645,644,1,0,0,0,645,646,1,0,0,
        0,646,647,1,0,0,0,647,649,3,324,162,0,648,650,3,98,49,0,649,648,
        1,0,0,0,649,650,1,0,0,0,650,45,1,0,0,0,651,652,5,219,0,0,652,654,
        5,344,0,0,653,655,3,326,163,0,654,653,1,0,0,0,654,655,1,0,0,0,655,
        656,1,0,0,0,656,657,3,318,159,0,657,660,3,324,162,0,658,659,5,185,
        0,0,659,661,3,158,79,0,660,658,1,0,0,0,660,661,1,0,0,0,661,47,1,
        0,0,0,662,666,3,50,25,0,663,666,3,74,37,0,664,666,3,78,39,0,665,
        662,1,0,0,0,665,663,1,0,0,0,665,664,1,0,0,0,666,49,1,0,0,0,667,668,
        3,52,26,0,668,670,3,56,28,0,669,671,3,70,35,0,670,669,1,0,0,0,670,
        671,1,0,0,0,671,673,1,0,0,0,672,674,3,72,36,0,673,672,1,0,0,0,673,
        674,1,0,0,0,674,51,1,0,0,0,675,678,3,322,161,0,676,678,3,258,129,
        0,677,675,1,0,0,0,677,676,1,0,0,0,678,53,1,0,0,0,679,680,5,384,0,
        0,680,685,3,52,26,0,681,682,5,388,0,0,682,684,3,52,26,0,683,681,
        1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,0,685,686,1,0,0,0,686,688,
        1,0,0,0,687,685,1,0,0,0,688,689,5,385,0,0,689,55,1,0,0,0,690,728,
        7,8,0,0,691,693,7,9,0,0,692,694,3,58,29,0,693,692,1,0,0,0,693,694,
        1,0,0,0,694,728,1,0,0,0,695,697,5,348,0,0,696,698,3,58,29,0,697,
        696,1,0,0,0,697,698,1,0,0,0,698,705,1,0,0,0,699,701,7,10,0,0,700,
        702,5,282,0,0,701,700,1,0,0,0,701,702,1,0,0,0,702,703,1,0,0,0,703,
        704,5,347,0,0,704,706,5,176,0,0,705,699,1,0,0,0,705,706,1,0,0,0,
        706,728,1,0,0,0,707,709,7,11,0,0,708,710,3,60,30,0,709,708,1,0,0,
        0,709,710,1,0,0,0,710,728,1,0,0,0,711,713,7,12,0,0,712,714,3,64,
        32,0,713,712,1,0,0,0,713,714,1,0,0,0,714,728,1,0,0,0,715,717,5,77,
        0,0,716,718,3,66,33,0,717,716,1,0,0,0,717,718,1,0,0,0,718,728,1,
        0,0,0,719,721,5,327,0,0,720,722,3,68,34,0,721,720,1,0,0,0,721,722,
        1,0,0,0,722,728,1,0,0,0,723,725,5,115,0,0,724,726,3,62,31,0,725,
        724,1,0,0,0,725,726,1,0,0,0,726,728,1,0,0,0,727,690,1,0,0,0,727,
        691,1,0,0,0,727,695,1,0,0,0,727,707,1,0,0,0,727,711,1,0,0,0,727,
        715,1,0,0,0,727,719,1,0,0,0,727,723,1,0,0,0,728,57,1,0,0,0,729,730,
        5,384,0,0,730,731,3,354,177,0,731,732,5,385,0,0,732,59,1,0,0,0,733,
        734,5,384,0,0,734,737,3,354,177,0,735,736,5,388,0,0,736,738,3,354,
        177,0,737,735,1,0,0,0,737,738,1,0,0,0,738,739,1,0,0,0,739,740,5,
        385,0,0,740,61,1,0,0,0,741,742,5,384,0,0,742,745,3,352,176,0,743,
        744,5,388,0,0,744,746,3,352,176,0,745,743,1,0,0,0,745,746,1,0,0,
        0,746,747,1,0,0,0,747,748,5,385,0,0,748,63,1,0,0,0,749,750,5,375,
        0,0,750,751,3,56,28,0,751,752,5,374,0,0,752,65,1,0,0,0,753,754,5,
        375,0,0,754,755,3,56,28,0,755,756,5,388,0,0,756,757,3,56,28,0,757,
        758,1,0,0,0,758,759,5,374,0,0,759,67,1,0,0,0,760,761,5,375,0,0,761,
        762,3,52,26,0,762,769,3,56,28,0,763,764,5,388,0,0,764,765,3,52,26,
        0,765,766,3,56,28,0,766,768,1,0,0,0,767,763,1,0,0,0,768,771,1,0,
        0,0,769,767,1,0,0,0,769,770,1,0,0,0,770,772,1,0,0,0,771,769,1,0,
        0,0,772,773,5,374,0,0,773,69,1,0,0,0,774,775,5,215,0,0,775,777,3,
        86,43,0,776,774,1,0,0,0,776,777,1,0,0,0,777,778,1,0,0,0,778,779,
        5,318,0,0,779,782,5,69,0,0,780,781,5,298,0,0,781,783,5,34,0,0,782,
        780,1,0,0,0,782,783,1,0,0,0,783,789,1,0,0,0,784,786,5,298,0,0,785,
        784,1,0,0,0,785,786,1,0,0,0,786,787,1,0,0,0,787,789,5,299,0,0,788,
        776,1,0,0,0,788,785,1,0,0,0,789,71,1,0,0,0,790,791,5,18,0,0,791,
        792,5,405,0,0,792,73,1,0,0,0,793,794,3,52,26,0,794,795,3,56,28,0,
        795,798,5,287,0,0,796,797,5,252,0,0,797,799,3,76,38,0,798,796,1,
        0,0,0,798,799,1,0,0,0,799,801,1,0,0,0,800,802,5,168,0,0,801,800,
        1,0,0,0,801,802,1,0,0,0,802,75,1,0,0,0,803,804,5,405,0,0,804,77,
        1,0,0,0,805,806,3,52,26,0,806,807,5,185,0,0,807,809,3,80,40,0,808,
        810,3,72,36,0,809,808,1,0,0,0,809,810,1,0,0,0,810,79,1,0,0,0,811,
        812,3,258,129,0,812,81,1,0,0,0,813,814,5,169,0,0,814,815,5,251,0,
        0,815,816,3,258,129,0,816,817,5,185,0,0,817,818,3,258,129,0,818,
        83,1,0,0,0,819,820,5,215,0,0,820,822,3,86,43,0,821,819,1,0,0,0,821,
        822,1,0,0,0,822,823,1,0,0,0,823,824,5,318,0,0,824,825,5,69,0,0,825,
        826,3,54,27,0,826,827,5,298,0,0,827,828,5,34,0,0,828,85,1,0,0,0,
        829,830,3,304,152,0,830,87,1,0,0,0,831,832,5,315,0,0,832,833,5,251,
        0,0,833,834,5,342,0,0,834,89,1,0,0,0,835,836,5,95,0,0,836,837,5,
        197,0,0,837,838,3,92,46,0,838,91,1,0,0,0,839,840,5,384,0,0,840,845,
        3,94,47,0,841,842,5,388,0,0,842,844,3,94,47,0,843,841,1,0,0,0,844,
        847,1,0,0,0,845,843,1,0,0,0,845,846,1,0,0,0,846,848,1,0,0,0,847,
        845,1,0,0,0,848,849,5,385,0,0,849,93,1,0,0,0,850,864,3,278,139,0,
        851,852,3,304,152,0,852,853,5,384,0,0,853,858,3,96,48,0,854,855,
        5,388,0,0,855,857,3,96,48,0,856,854,1,0,0,0,857,860,1,0,0,0,858,
        856,1,0,0,0,858,859,1,0,0,0,859,861,1,0,0,0,860,858,1,0,0,0,861,
        862,5,385,0,0,862,864,1,0,0,0,863,850,1,0,0,0,863,851,1,0,0,0,864,
        95,1,0,0,0,865,868,3,278,139,0,866,868,3,348,174,0,867,865,1,0,0,
        0,867,866,1,0,0,0,868,97,1,0,0,0,869,870,5,280,0,0,870,879,3,320,
        160,0,871,875,5,384,0,0,872,874,3,100,50,0,873,872,1,0,0,0,874,877,
        1,0,0,0,875,873,1,0,0,0,875,876,1,0,0,0,876,878,1,0,0,0,877,875,
        1,0,0,0,878,880,5,385,0,0,879,871,1,0,0,0,879,880,1,0,0,0,880,99,
        1,0,0,0,881,882,7,13,0,0,882,886,7,14,0,0,883,884,7,15,0,0,884,886,
        7,16,0,0,885,881,1,0,0,0,885,883,1,0,0,0,886,101,1,0,0,0,887,888,
        5,219,0,0,888,889,5,12,0,0,889,890,3,322,161,0,890,891,3,324,162,
        0,891,103,1,0,0,0,892,893,5,219,0,0,893,895,5,25,0,0,894,896,3,326,
        163,0,895,894,1,0,0,0,895,896,1,0,0,0,896,897,1,0,0,0,897,899,3,
        316,158,0,898,900,3,72,36,0,899,898,1,0,0,0,899,900,1,0,0,0,900,
        901,1,0,0,0,901,902,3,324,162,0,902,105,1,0,0,0,903,905,5,219,0,
        0,904,906,5,150,0,0,905,904,1,0,0,0,905,906,1,0,0,0,906,907,1,0,
        0,0,907,909,5,166,0,0,908,910,3,326,163,0,909,908,1,0,0,0,909,910,
        1,0,0,0,910,911,1,0,0,0,911,913,3,322,161,0,912,914,3,54,27,0,913,
        912,1,0,0,0,913,914,1,0,0,0,914,916,1,0,0,0,915,917,3,72,36,0,916,
        915,1,0,0,0,916,917,1,0,0,0,917,918,1,0,0,0,918,919,5,185,0,0,919,
        920,3,158,79,0,920,107,1,0,0,0,921,925,5,219,0,0,922,926,5,150,0,
        0,923,924,5,150,0,0,924,926,5,341,0,0,925,922,1,0,0,0,925,923,1,
        0,0,0,925,926,1,0,0,0,926,927,1,0,0,0,927,929,5,254,0,0,928,930,
        3,326,163,0,929,928,1,0,0,0,929,930,1,0,0,0,930,931,1,0,0,0,931,
        932,3,270,135,0,932,933,5,185,0,0,933,936,3,304,152,0,934,935,5,
        276,0,0,935,937,7,17,0,0,936,934,1,0,0,0,936,937,1,0,0,0,937,939,
        1,0,0,0,938,940,3,110,55,0,939,938,1,0,0,0,939,940,1,0,0,0,940,109,
        1,0,0,0,941,942,5,361,0,0,942,943,5,64,0,0,943,949,3,112,56,0,944,
        945,5,388,0,0,945,946,5,64,0,0,946,948,3,112,56,0,947,944,1,0,0,
        0,948,951,1,0,0,0,949,947,1,0,0,0,949,950,1,0,0,0,950,111,1,0,0,
        0,951,949,1,0,0,0,952,953,5,405,0,0,953,113,1,0,0,0,954,955,5,180,
        0,0,955,957,5,344,0,0,956,958,3,328,164,0,957,956,1,0,0,0,957,958,
        1,0,0,0,958,959,1,0,0,0,959,965,3,320,160,0,960,966,3,116,58,0,961,
        966,3,118,59,0,962,966,3,120,60,0,963,966,3,122,61,0,964,966,3,124,
        62,0,965,960,1,0,0,0,965,961,1,0,0,0,965,962,1,0,0,0,965,963,1,0,
        0,0,965,964,1,0,0,0,966,115,1,0,0,0,967,969,5,119,0,0,968,970,3,
        322,161,0,969,968,1,0,0,0,969,970,1,0,0,0,970,971,1,0,0,0,971,972,
        5,350,0,0,972,973,3,322,161,0,973,117,1,0,0,0,974,975,5,331,0,0,
        975,976,3,330,165,0,976,119,1,0,0,0,977,978,5,4,0,0,978,979,5,215,
        0,0,979,980,3,86,43,0,980,981,5,318,0,0,981,982,5,69,0,0,982,984,
        3,54,27,0,983,985,3,126,63,0,984,983,1,0,0,0,984,985,1,0,0,0,985,
        121,1,0,0,0,986,987,5,237,0,0,987,988,5,215,0,0,988,989,3,86,43,
        0,989,123,1,0,0,0,990,991,5,4,0,0,991,992,5,355,0,0,992,993,3,54,
        27,0,993,125,1,0,0,0,994,995,5,298,0,0,995,996,5,34,0,0,996,127,
        1,0,0,0,997,998,5,180,0,0,998,999,5,166,0,0,999,1003,3,322,161,0,
        1000,1004,3,116,58,0,1001,1002,5,185,0,0,1002,1004,3,158,79,0,1003,
        1000,1,0,0,0,1003,1001,1,0,0,0,1004,129,1,0,0,0,1005,1006,5,180,
        0,0,1006,1007,5,25,0,0,1007,1008,3,314,157,0,1008,1009,3,118,59,
        0,1009,131,1,0,0,0,1010,1014,5,180,0,0,1011,1015,5,150,0,0,1012,
        1013,5,150,0,0,1013,1015,5,341,0,0,1014,1011,1,0,0,0,1014,1012,1,
        0,0,0,1014,1015,1,0,0,0,1015,1016,1,0,0,0,1016,1018,5,254,0,0,1017,
        1019,3,328,164,0,1018,1017,1,0,0,0,1018,1019,1,0,0,0,1019,1020,1,
        0,0,0,1020,1021,3,322,161,0,1021,1022,5,185,0,0,1022,1025,3,304,
        152,0,1023,1024,5,276,0,0,1024,1026,7,17,0,0,1025,1023,1,0,0,0,1025,
        1026,1,0,0,0,1026,133,1,0,0,0,1027,1028,5,237,0,0,1028,1030,5,12,
        0,0,1029,1031,3,328,164,0,1030,1029,1,0,0,0,1030,1031,1,0,0,0,1031,
        1032,1,0,0,0,1032,1033,3,312,156,0,1033,135,1,0,0,0,1034,1036,5,
        237,0,0,1035,1037,5,150,0,0,1036,1035,1,0,0,0,1036,1037,1,0,0,0,
        1037,1038,1,0,0,0,1038,1040,5,344,0,0,1039,1041,3,328,164,0,1040,
        1039,1,0,0,0,1040,1041,1,0,0,0,1041,1042,1,0,0,0,1042,1043,3,320,
        160,0,1043,137,1,0,0,0,1044,1045,5,237,0,0,1045,1047,5,25,0,0,1046,
        1048,3,328,164,0,1047,1046,1,0,0,0,1047,1048,1,0,0,0,1048,1049,1,
        0,0,0,1049,1051,3,314,157,0,1050,1052,7,18,0,0,1051,1050,1,0,0,0,
        1051,1052,1,0,0,0,1052,139,1,0,0,0,1053,1055,5,237,0,0,1054,1056,
        5,150,0,0,1055,1054,1,0,0,0,1055,1056,1,0,0,0,1056,1057,1,0,0,0,
        1057,1059,5,166,0,0,1058,1060,3,328,164,0,1059,1058,1,0,0,0,1059,
        1060,1,0,0,0,1060,1061,1,0,0,0,1061,1062,3,322,161,0,1062,141,1,
        0,0,0,1063,1067,5,237,0,0,1064,1068,5,150,0,0,1065,1066,5,150,0,
        0,1066,1068,5,341,0,0,1067,1064,1,0,0,0,1067,1065,1,0,0,0,1067,1068,
        1,0,0,0,1068,1069,1,0,0,0,1069,1071,5,254,0,0,1070,1072,3,328,164,
        0,1071,1070,1,0,0,0,1071,1072,1,0,0,0,1072,1073,1,0,0,0,1073,1074,
        3,270,135,0,1074,143,1,0,0,0,1075,1077,5,244,0,0,1076,1075,1,0,0,
        0,1076,1077,1,0,0,0,1077,1078,1,0,0,0,1078,1083,3,146,73,0,1079,
        1083,3,154,77,0,1080,1081,5,244,0,0,1081,1083,3,156,78,0,1082,1076,
        1,0,0,0,1082,1079,1,0,0,0,1082,1080,1,0,0,0,1083,145,1,0,0,0,1084,
        1085,5,267,0,0,1085,1086,7,19,0,0,1086,1095,3,320,160,0,1087,1089,
        3,148,74,0,1088,1087,1,0,0,0,1088,1089,1,0,0,0,1089,1091,1,0,0,0,
        1090,1092,3,54,27,0,1091,1090,1,0,0,0,1091,1092,1,0,0,0,1092,1093,
        1,0,0,0,1093,1096,3,158,79,0,1094,1096,3,150,75,0,1095,1088,1,0,
        0,0,1095,1094,1,0,0,0,1096,147,1,0,0,0,1097,1098,5,311,0,0,1098,
        1099,3,330,165,0,1099,149,1,0,0,0,1100,1101,5,363,0,0,1101,1106,
        3,152,76,0,1102,1103,5,388,0,0,1103,1105,3,152,76,0,1104,1102,1,
        0,0,0,1105,1108,1,0,0,0,1106,1104,1,0,0,0,1106,1107,1,0,0,0,1107,
        151,1,0,0,0,1108,1106,1,0,0,0,1109,1110,5,384,0,0,1110,1115,3,348,
        174,0,1111,1112,5,388,0,0,1112,1114,3,348,174,0,1113,1111,1,0,0,
        0,1114,1117,1,0,0,0,1115,1113,1,0,0,0,1115,1116,1,0,0,0,1116,1118,
        1,0,0,0,1117,1115,1,0,0,0,1118,1119,5,385,0,0,1119,153,1,0,0,0,1120,
        1121,5,189,0,0,1121,1122,5,144,0,0,1122,1123,5,331,0,0,1123,1127,
        5,389,0,0,1124,1125,3,146,73,0,1125,1126,5,389,0,0,1126,1128,1,0,
        0,0,1127,1124,1,0,0,0,1128,1129,1,0,0,0,1129,1127,1,0,0,0,1129,1130,
        1,0,0,0,1130,1131,1,0,0,0,1131,1132,5,240,0,0,1132,155,1,0,0,0,1133,
        1134,5,144,0,0,1134,1135,5,331,0,0,1135,1139,5,189,0,0,1136,1137,
        3,146,73,0,1137,1138,5,389,0,0,1138,1140,1,0,0,0,1139,1136,1,0,0,
        0,1140,1141,1,0,0,0,1141,1139,1,0,0,0,1141,1142,1,0,0,0,1142,1143,
        1,0,0,0,1143,1144,5,240,0,0,1144,157,1,0,0,0,1145,1146,6,79,-1,0,
        1146,1169,3,160,80,0,1147,1148,3,162,81,0,1148,1149,3,158,79,5,1149,
        1169,1,0,0,0,1150,1151,5,384,0,0,1151,1152,3,158,79,0,1152,1153,
        5,385,0,0,1153,1169,1,0,0,0,1154,1156,3,170,85,0,1155,1157,3,230,
        115,0,1156,1155,1,0,0,0,1156,1157,1,0,0,0,1157,1159,1,0,0,0,1158,
        1160,3,234,117,0,1159,1158,1,0,0,0,1159,1160,1,0,0,0,1160,1169,1,
        0,0,0,1161,1163,3,168,84,0,1162,1164,3,230,115,0,1163,1162,1,0,0,
        0,1163,1164,1,0,0,0,1164,1166,1,0,0,0,1165,1167,3,234,117,0,1166,
        1165,1,0,0,0,1166,1167,1,0,0,0,1167,1169,1,0,0,0,1168,1145,1,0,0,
        0,1168,1147,1,0,0,0,1168,1150,1,0,0,0,1168,1154,1,0,0,0,1168,1161,
        1,0,0,0,1169,1184,1,0,0,0,1170,1171,10,3,0,0,1171,1173,7,20,0,0,
        1172,1174,5,178,0,0,1173,1172,1,0,0,0,1173,1174,1,0,0,0,1174,1175,
        1,0,0,0,1175,1177,3,158,79,0,1176,1178,3,230,115,0,1177,1176,1,0,
        0,0,1177,1178,1,0,0,0,1178,1180,1,0,0,0,1179,1181,3,234,117,0,1180,
        1179,1,0,0,0,1180,1181,1,0,0,0,1181,1183,1,0,0,0,1182,1170,1,0,0,
        0,1183,1186,1,0,0,0,1184,1182,1,0,0,0,1184,1185,1,0,0,0,1185,159,
        1,0,0,0,1186,1184,1,0,0,0,1187,1188,5,363,0,0,1188,1193,3,258,129,
        0,1189,1190,5,388,0,0,1190,1192,3,258,129,0,1191,1189,1,0,0,0,1192,
        1195,1,0,0,0,1193,1191,1,0,0,0,1193,1194,1,0,0,0,1194,161,1,0,0,
        0,1195,1193,1,0,0,0,1196,1197,5,369,0,0,1197,1202,3,164,82,0,1198,
        1199,5,388,0,0,1199,1201,3,164,82,0,1200,1198,1,0,0,0,1201,1204,
        1,0,0,0,1202,1200,1,0,0,0,1202,1203,1,0,0,0,1203,163,1,0,0,0,1204,
        1202,1,0,0,0,1205,1217,3,166,83,0,1206,1207,5,384,0,0,1207,1212,
        3,52,26,0,1208,1209,5,388,0,0,1209,1211,3,52,26,0,1210,1208,1,0,
        0,0,1211,1214,1,0,0,0,1212,1210,1,0,0,0,1212,1213,1,0,0,0,1213,1215,
        1,0,0,0,1214,1212,1,0,0,0,1215,1216,5,385,0,0,1216,1218,1,0,0,0,
        1217,1206,1,0,0,0,1217,1218,1,0,0,0,1218,1219,1,0,0,0,1219,1220,
        5,185,0,0,1220,1221,5,384,0,0,1221,1222,3,158,79,0,1222,1223,5,385,
        0,0,1223,165,1,0,0,0,1224,1225,3,304,152,0,1225,167,1,0,0,0,1226,
        1227,3,170,85,0,1227,1229,3,176,88,0,1228,1230,3,204,102,0,1229,
        1228,1,0,0,0,1229,1230,1,0,0,0,1230,1232,1,0,0,0,1231,1233,3,206,
        103,0,1232,1231,1,0,0,0,1232,1233,1,0,0,0,1233,1235,1,0,0,0,1234,
        1236,3,220,110,0,1235,1234,1,0,0,0,1235,1236,1,0,0,0,1236,1238,1,
        0,0,0,1237,1239,3,222,111,0,1238,1237,1,0,0,0,1238,1239,1,0,0,0,
        1239,1245,1,0,0,0,1240,1241,3,170,85,0,1241,1242,3,176,88,0,1242,
        1243,3,228,114,0,1243,1245,1,0,0,0,1244,1226,1,0,0,0,1244,1240,1,
        0,0,0,1245,169,1,0,0,0,1246,1248,5,330,0,0,1247,1249,3,358,179,0,
        1248,1247,1,0,0,0,1248,1249,1,0,0,0,1249,1259,1,0,0,0,1250,1260,
        5,395,0,0,1251,1256,3,172,86,0,1252,1253,5,388,0,0,1253,1255,3,172,
        86,0,1254,1252,1,0,0,0,1255,1258,1,0,0,0,1256,1254,1,0,0,0,1256,
        1257,1,0,0,0,1257,1260,1,0,0,0,1258,1256,1,0,0,0,1259,1250,1,0,0,
        0,1259,1251,1,0,0,0,1260,171,1,0,0,0,1261,1270,3,174,87,0,1262,1267,
        3,258,129,0,1263,1265,5,185,0,0,1264,1263,1,0,0,0,1264,1265,1,0,
        0,0,1265,1266,1,0,0,0,1266,1268,3,258,129,0,1267,1264,1,0,0,0,1267,
        1268,1,0,0,0,1268,1270,1,0,0,0,1269,1261,1,0,0,0,1269,1262,1,0,0,
        0,1270,173,1,0,0,0,1271,1272,3,268,134,0,1272,1273,5,309,0,0,1273,
        1274,3,226,113,0,1274,1275,5,185,0,0,1275,1276,3,304,152,0,1276,
        1284,1,0,0,0,1277,1278,3,268,134,0,1278,1279,5,309,0,0,1279,1280,
        3,296,148,0,1280,1281,5,185,0,0,1281,1282,3,304,152,0,1282,1284,
        1,0,0,0,1283,1271,1,0,0,0,1283,1277,1,0,0,0,1284,175,1,0,0,0,1285,
        1286,5,252,0,0,1286,1287,3,178,89,0,1287,177,1,0,0,0,1288,1289,6,
        89,-1,0,1289,1294,3,180,90,0,1290,1291,5,388,0,0,1291,1293,3,180,
        90,0,1292,1290,1,0,0,0,1293,1296,1,0,0,0,1294,1292,1,0,0,0,1294,
        1295,1,0,0,0,1295,1300,1,0,0,0,1296,1294,1,0,0,0,1297,1300,3,188,
        94,0,1298,1300,3,190,95,0,1299,1288,1,0,0,0,1299,1297,1,0,0,0,1299,
        1298,1,0,0,0,1300,1322,1,0,0,0,1301,1302,10,3,0,0,1302,1303,5,220,
        0,0,1303,1304,5,274,0,0,1304,1321,3,178,89,4,1305,1307,10,4,0,0,
        1306,1308,5,294,0,0,1307,1306,1,0,0,0,1307,1308,1,0,0,0,1308,1310,
        1,0,0,0,1309,1311,7,21,0,0,1310,1309,1,0,0,0,1310,1311,1,0,0,0,1311,
        1313,1,0,0,0,1312,1314,5,308,0,0,1313,1312,1,0,0,0,1313,1314,1,0,
        0,0,1314,1315,1,0,0,0,1315,1316,5,274,0,0,1316,1318,3,178,89,0,1317,
        1319,3,202,101,0,1318,1317,1,0,0,0,1318,1319,1,0,0,0,1319,1321,1,
        0,0,0,1320,1301,1,0,0,0,1320,1305,1,0,0,0,1321,1324,1,0,0,0,1322,
        1320,1,0,0,0,1322,1323,1,0,0,0,1323,179,1,0,0,0,1324,1322,1,0,0,
        0,1325,1327,3,182,91,0,1326,1328,3,294,147,0,1327,1326,1,0,0,0,1327,
        1328,1,0,0,0,1328,181,1,0,0,0,1329,1331,5,344,0,0,1330,1329,1,0,
        0,0,1330,1331,1,0,0,0,1331,1332,1,0,0,0,1332,1334,3,320,160,0,1333,
        1335,3,184,92,0,1334,1333,1,0,0,0,1334,1335,1,0,0,0,1335,1340,1,
        0,0,0,1336,1338,5,185,0,0,1337,1336,1,0,0,0,1337,1338,1,0,0,0,1338,
        1339,1,0,0,0,1339,1341,3,276,138,0,1340,1337,1,0,0,0,1340,1341,1,
        0,0,0,1341,1371,1,0,0,0,1342,1343,5,277,0,0,1343,1344,5,344,0,0,
        1344,1345,5,384,0,0,1345,1346,3,270,135,0,1346,1347,5,384,0,0,1347,
        1352,3,272,136,0,1348,1349,5,388,0,0,1349,1351,3,272,136,0,1350,
        1348,1,0,0,0,1351,1354,1,0,0,0,1352,1350,1,0,0,0,1352,1353,1,0,0,
        0,1353,1355,1,0,0,0,1354,1352,1,0,0,0,1355,1356,5,385,0,0,1356,1357,
        5,385,0,0,1357,1371,1,0,0,0,1358,1360,5,277,0,0,1359,1358,1,0,0,
        0,1359,1360,1,0,0,0,1360,1361,1,0,0,0,1361,1362,5,384,0,0,1362,1363,
        3,158,79,0,1363,1364,5,385,0,0,1364,1371,1,0,0,0,1365,1366,5,357,
        0,0,1366,1367,5,384,0,0,1367,1368,3,258,129,0,1368,1369,5,385,0,
        0,1369,1371,1,0,0,0,1370,1330,1,0,0,0,1370,1342,1,0,0,0,1370,1359,
        1,0,0,0,1370,1365,1,0,0,0,1371,183,1,0,0,0,1372,1373,5,251,0,0,1373,
        1374,5,342,0,0,1374,1375,5,185,0,0,1375,1376,5,301,0,0,1376,1377,
        3,186,93,0,1377,185,1,0,0,0,1378,1379,3,258,129,0,1379,187,1,0,0,
        0,1380,1381,5,384,0,0,1381,1382,3,150,75,0,1382,1383,5,385,0,0,1383,
        1384,3,294,147,0,1384,189,1,0,0,0,1385,1386,5,344,0,0,1386,1387,
        5,384,0,0,1387,1388,3,192,96,0,1388,1389,5,385,0,0,1389,191,1,0,
        0,0,1390,1391,3,194,97,0,1391,1392,5,384,0,0,1392,1397,3,196,98,
        0,1393,1394,5,388,0,0,1394,1396,3,196,98,0,1395,1393,1,0,0,0,1396,
        1399,1,0,0,0,1397,1395,1,0,0,0,1397,1398,1,0,0,0,1398,1400,1,0,0,
        0,1399,1397,1,0,0,0,1400,1401,5,385,0,0,1401,193,1,0,0,0,1402,1403,
        7,22,0,0,1403,195,1,0,0,0,1404,1405,5,344,0,0,1405,1420,3,218,109,
        0,1406,1420,3,200,100,0,1407,1420,3,280,140,0,1408,1409,5,24,0,0,
        1409,1410,5,404,0,0,1410,1411,5,344,0,0,1411,1420,3,218,109,0,1412,
        1413,5,151,0,0,1413,1414,5,404,0,0,1414,1420,3,200,100,0,1415,1416,
        3,198,99,0,1416,1417,5,404,0,0,1417,1418,3,280,140,0,1418,1420,1,
        0,0,0,1419,1404,1,0,0,0,1419,1406,1,0,0,0,1419,1407,1,0,0,0,1419,
        1408,1,0,0,0,1419,1412,1,0,0,0,1419,1415,1,0,0,0,1420,197,1,0,0,
        0,1421,1422,7,23,0,0,1422,199,1,0,0,0,1423,1424,5,31,0,0,1424,1425,
        5,384,0,0,1425,1426,3,322,161,0,1426,1427,5,385,0,0,1427,201,1,0,
        0,0,1428,1429,5,303,0,0,1429,1443,3,260,130,0,1430,1431,5,361,0,
        0,1431,1432,5,384,0,0,1432,1437,3,322,161,0,1433,1434,5,388,0,0,
        1434,1436,3,322,161,0,1435,1433,1,0,0,0,1436,1439,1,0,0,0,1437,1435,
        1,0,0,0,1437,1438,1,0,0,0,1438,1440,1,0,0,0,1439,1437,1,0,0,0,1440,
        1441,5,385,0,0,1441,1443,1,0,0,0,1442,1428,1,0,0,0,1442,1430,1,0,
        0,0,1443,203,1,0,0,0,1444,1445,5,367,0,0,1445,1446,3,260,130,0,1446,
        205,1,0,0,0,1447,1448,5,257,0,0,1448,1449,5,197,0,0,1449,1454,3,
        208,104,0,1450,1451,5,388,0,0,1451,1453,3,208,104,0,1452,1450,1,
        0,0,0,1453,1456,1,0,0,0,1454,1452,1,0,0,0,1454,1455,1,0,0,0,1455,
        207,1,0,0,0,1456,1454,1,0,0,0,1457,1497,3,258,129,0,1458,1497,3,
        214,107,0,1459,1460,5,384,0,0,1460,1497,5,385,0,0,1461,1462,5,384,
        0,0,1462,1467,3,258,129,0,1463,1464,5,388,0,0,1464,1466,3,258,129,
        0,1465,1463,1,0,0,0,1466,1469,1,0,0,0,1467,1465,1,0,0,0,1467,1468,
        1,0,0,0,1468,1470,1,0,0,0,1469,1467,1,0,0,0,1470,1471,5,385,0,0,
        1471,1497,1,0,0,0,1472,1473,3,212,106,0,1473,1474,5,384,0,0,1474,
        1479,3,258,129,0,1475,1476,5,388,0,0,1476,1478,3,258,129,0,1477,
        1475,1,0,0,0,1478,1481,1,0,0,0,1479,1477,1,0,0,0,1479,1480,1,0,0,
        0,1480,1482,1,0,0,0,1481,1479,1,0,0,0,1482,1483,5,385,0,0,1483,1497,
        1,0,0,0,1484,1485,3,210,105,0,1485,1486,5,384,0,0,1486,1491,3,208,
        104,0,1487,1488,5,388,0,0,1488,1490,3,208,104,0,1489,1487,1,0,0,
        0,1490,1493,1,0,0,0,1491,1489,1,0,0,0,1491,1492,1,0,0,0,1492,1494,
        1,0,0,0,1493,1491,1,0,0,0,1494,1495,5,385,0,0,1495,1497,1,0,0,0,
        1496,1457,1,0,0,0,1496,1458,1,0,0,0,1496,1459,1,0,0,0,1496,1461,
        1,0,0,0,1496,1472,1,0,0,0,1496,1484,1,0,0,0,1497,209,1,0,0,0,1498,
        1499,5,258,0,0,1499,1500,5,137,0,0,1500,211,1,0,0,0,1501,1502,7,
        24,0,0,1502,213,1,0,0,0,1503,1504,3,216,108,0,1504,1505,5,384,0,
        0,1505,1506,3,218,109,0,1506,1507,5,388,0,0,1507,1508,3,280,140,
        0,1508,1509,5,385,0,0,1509,215,1,0,0,0,1510,1511,7,25,0,0,1511,217,
        1,0,0,0,1512,1513,3,322,161,0,1513,219,1,0,0,0,1514,1515,5,260,0,
        0,1515,1516,3,260,130,0,1516,221,1,0,0,0,1517,1518,5,368,0,0,1518,
        1523,3,224,112,0,1519,1520,5,388,0,0,1520,1522,3,224,112,0,1521,
        1519,1,0,0,0,1522,1525,1,0,0,0,1523,1521,1,0,0,0,1523,1524,1,0,0,
        0,1524,223,1,0,0,0,1525,1523,1,0,0,0,1526,1527,3,296,148,0,1527,
        1528,5,185,0,0,1528,1529,3,226,113,0,1529,225,1,0,0,0,1530,1532,
        3,296,148,0,1531,1530,1,0,0,0,1531,1532,1,0,0,0,1532,1533,1,0,0,
        0,1533,1535,5,384,0,0,1534,1536,3,236,118,0,1535,1534,1,0,0,0,1535,
        1536,1,0,0,0,1536,1538,1,0,0,0,1537,1539,3,230,115,0,1538,1537,1,
        0,0,0,1538,1539,1,0,0,0,1539,1541,1,0,0,0,1540,1542,3,252,126,0,
        1541,1540,1,0,0,0,1541,1542,1,0,0,0,1542,1543,1,0,0,0,1543,1544,
        5,385,0,0,1544,227,1,0,0,0,1545,1546,5,284,0,0,1546,1548,5,384,0,
        0,1547,1549,3,236,118,0,1548,1547,1,0,0,0,1548,1549,1,0,0,0,1549,
        1551,1,0,0,0,1550,1552,3,230,115,0,1551,1550,1,0,0,0,1551,1552,1,
        0,0,0,1552,1554,1,0,0,0,1553,1555,3,240,120,0,1554,1553,1,0,0,0,
        1554,1555,1,0,0,0,1555,1557,1,0,0,0,1556,1558,3,246,123,0,1557,1556,
        1,0,0,0,1557,1558,1,0,0,0,1558,1560,1,0,0,0,1559,1561,3,248,124,
        0,1560,1559,1,0,0,0,1560,1561,1,0,0,0,1561,1563,1,0,0,0,1562,1564,
        3,242,121,0,1563,1562,1,0,0,0,1563,1564,1,0,0,0,1564,1565,1,0,0,
        0,1565,1566,3,250,125,0,1566,1571,5,385,0,0,1567,1569,5,185,0,0,
        1568,1567,1,0,0,0,1568,1569,1,0,0,0,1569,1570,1,0,0,0,1570,1572,
        3,304,152,0,1571,1568,1,0,0,0,1571,1572,1,0,0,0,1572,229,1,0,0,0,
        1573,1574,5,306,0,0,1574,1575,5,197,0,0,1575,1580,3,232,116,0,1576,
        1577,5,388,0,0,1577,1579,3,232,116,0,1578,1576,1,0,0,0,1579,1582,
        1,0,0,0,1580,1578,1,0,0,0,1580,1581,1,0,0,0,1581,231,1,0,0,0,1582,
        1580,1,0,0,0,1583,1585,3,258,129,0,1584,1586,7,26,0,0,1585,1584,
        1,0,0,0,1585,1586,1,0,0,0,1586,1589,1,0,0,0,1587,1588,5,87,0,0,1588,
        1590,7,27,0,0,1589,1587,1,0,0,0,1589,1590,1,0,0,0,1590,233,1,0,0,
        0,1591,1594,5,281,0,0,1592,1595,5,178,0,0,1593,1595,3,258,129,0,
        1594,1592,1,0,0,0,1594,1593,1,0,0,0,1595,235,1,0,0,0,1596,1597,5,
        311,0,0,1597,1598,5,197,0,0,1598,1603,3,258,129,0,1599,1600,5,388,
        0,0,1600,1602,3,258,129,0,1601,1599,1,0,0,0,1602,1605,1,0,0,0,1603,
        1601,1,0,0,0,1603,1604,1,0,0,0,1604,237,1,0,0,0,1605,1603,1,0,0,
        0,1606,1623,5,395,0,0,1607,1623,5,398,0,0,1608,1623,5,403,0,0,1609,
        1610,5,386,0,0,1610,1611,5,406,0,0,1611,1612,5,388,0,0,1612,1613,
        5,406,0,0,1613,1623,5,387,0,0,1614,1615,5,386,0,0,1615,1616,5,406,
        0,0,1616,1617,5,388,0,0,1617,1623,5,387,0,0,1618,1619,5,386,0,0,
        1619,1620,5,388,0,0,1620,1621,5,406,0,0,1621,1623,5,387,0,0,1622,
        1606,1,0,0,0,1622,1607,1,0,0,0,1622,1608,1,0,0,0,1622,1609,1,0,0,
        0,1622,1614,1,0,0,0,1622,1618,1,0,0,0,1623,239,1,0,0,0,1624,1625,
        5,285,0,0,1625,1630,3,172,86,0,1626,1627,5,388,0,0,1627,1629,3,172,
        86,0,1628,1626,1,0,0,0,1629,1632,1,0,0,0,1630,1628,1,0,0,0,1630,
        1631,1,0,0,0,1631,241,1,0,0,0,1632,1630,1,0,0,0,1633,1634,5,312,
        0,0,1634,1636,5,384,0,0,1635,1637,3,244,122,0,1636,1635,1,0,0,0,
        1637,1638,1,0,0,0,1638,1636,1,0,0,0,1638,1639,1,0,0,0,1639,1640,
        1,0,0,0,1640,1642,5,385,0,0,1641,1643,3,256,128,0,1642,1641,1,0,
        0,0,1642,1643,1,0,0,0,1643,243,1,0,0,0,1644,1646,3,306,153,0,1645,
        1647,3,238,119,0,1646,1645,1,0,0,0,1646,1647,1,0,0,0,1647,245,1,
        0,0,0,1648,1649,5,178,0,0,1649,1650,5,328,0,0,1650,1651,5,313,0,
        0,1651,1657,5,283,0,0,1652,1653,5,304,0,0,1653,1654,5,327,0,0,1654,
        1655,5,313,0,0,1655,1657,5,283,0,0,1656,1648,1,0,0,0,1656,1652,1,
        0,0,0,1657,247,1,0,0,0,1658,1659,5,6,0,0,1659,1660,5,283,0,0,1660,
        1661,5,334,0,0,1661,1662,5,98,0,0,1662,1663,5,73,0,0,1663,1683,5,
        327,0,0,1664,1665,5,6,0,0,1665,1666,5,283,0,0,1666,1667,5,334,0,
        0,1667,1668,5,350,0,0,1668,1669,5,295,0,0,1669,1683,5,327,0,0,1670,
        1671,5,6,0,0,1671,1672,5,283,0,0,1672,1673,5,334,0,0,1673,1674,5,
        350,0,0,1674,1675,5,73,0,0,1675,1683,3,306,153,0,1676,1677,5,6,0,
        0,1677,1678,5,283,0,0,1678,1679,5,334,0,0,1679,1680,5,350,0,0,1680,
        1681,5,45,0,0,1681,1683,3,306,153,0,1682,1658,1,0,0,0,1682,1664,
        1,0,0,0,1682,1670,1,0,0,0,1682,1676,1,0,0,0,1683,249,1,0,0,0,1684,
        1685,5,232,0,0,1685,1690,3,172,86,0,1686,1687,5,388,0,0,1687,1689,
        3,172,86,0,1688,1686,1,0,0,0,1689,1692,1,0,0,0,1690,1688,1,0,0,0,
        1690,1691,1,0,0,0,1691,251,1,0,0,0,1692,1690,1,0,0,0,1693,1694,5,
        319,0,0,1694,1695,5,190,0,0,1695,1696,3,280,140,0,1696,1697,3,254,
        127,0,1697,1703,1,0,0,0,1698,1699,5,328,0,0,1699,1700,5,190,0,0,
        1700,1701,5,406,0,0,1701,1703,3,254,127,0,1702,1693,1,0,0,0,1702,
        1698,1,0,0,0,1703,253,1,0,0,0,1704,1705,5,102,0,0,1705,1706,5,181,
        0,0,1706,1707,5,222,0,0,1707,1708,5,327,0,0,1708,255,1,0,0,0,1709,
        1710,5,370,0,0,1710,1711,3,280,140,0,1711,257,1,0,0,0,1712,1713,
        3,260,130,0,1713,259,1,0,0,0,1714,1715,6,130,-1,0,1715,1716,5,298,
        0,0,1716,1727,3,260,130,6,1717,1718,5,245,0,0,1718,1719,5,384,0,
        0,1719,1720,3,158,79,0,1720,1721,5,385,0,0,1721,1727,1,0,0,0,1722,
        1724,3,266,133,0,1723,1725,3,262,131,0,1724,1723,1,0,0,0,1724,1725,
        1,0,0,0,1725,1727,1,0,0,0,1726,1714,1,0,0,0,1726,1717,1,0,0,0,1726,
        1722,1,0,0,0,1727,1742,1,0,0,0,1728,1729,10,3,0,0,1729,1730,5,181,
        0,0,1730,1741,3,260,130,4,1731,1732,10,2,0,0,1732,1733,5,305,0,0,
        1733,1741,3,260,130,3,1734,1735,10,1,0,0,1735,1737,5,273,0,0,1736,
        1738,5,298,0,0,1737,1736,1,0,0,0,1737,1738,1,0,0,0,1738,1739,1,0,
        0,0,1739,1741,7,28,0,0,1740,1728,1,0,0,0,1740,1731,1,0,0,0,1740,
        1734,1,0,0,0,1741,1744,1,0,0,0,1742,1740,1,0,0,0,1742,1743,1,0,0,
        0,1743,261,1,0,0,0,1744,1742,1,0,0,0,1745,1747,5,298,0,0,1746,1745,
        1,0,0,0,1746,1747,1,0,0,0,1747,1748,1,0,0,0,1748,1750,5,190,0,0,
        1749,1751,7,29,0,0,1750,1749,1,0,0,0,1750,1751,1,0,0,0,1751,1752,
        1,0,0,0,1752,1753,3,266,133,0,1753,1754,5,181,0,0,1754,1755,3,266,
        133,0,1755,1813,1,0,0,0,1756,1758,5,298,0,0,1757,1756,1,0,0,0,1757,
        1758,1,0,0,0,1758,1759,1,0,0,0,1759,1760,5,263,0,0,1760,1761,5,384,
        0,0,1761,1766,3,258,129,0,1762,1763,5,388,0,0,1763,1765,3,258,129,
        0,1764,1762,1,0,0,0,1765,1768,1,0,0,0,1766,1764,1,0,0,0,1766,1767,
        1,0,0,0,1767,1769,1,0,0,0,1768,1766,1,0,0,0,1769,1770,5,385,0,0,
        1770,1813,1,0,0,0,1771,1773,5,298,0,0,1772,1771,1,0,0,0,1772,1773,
        1,0,0,0,1773,1774,1,0,0,0,1774,1775,5,263,0,0,1775,1776,5,384,0,
        0,1776,1777,3,158,79,0,1777,1778,5,385,0,0,1778,1813,1,0,0,0,1779,
        1780,5,245,0,0,1780,1781,5,384,0,0,1781,1782,3,158,79,0,1782,1783,
        5,385,0,0,1783,1813,1,0,0,0,1784,1786,5,298,0,0,1785,1784,1,0,0,
        0,1785,1786,1,0,0,0,1786,1787,1,0,0,0,1787,1788,5,324,0,0,1788,1813,
        3,266,133,0,1789,1813,3,264,132,0,1790,1792,5,273,0,0,1791,1793,
        5,298,0,0,1792,1791,1,0,0,0,1792,1793,1,0,0,0,1793,1794,1,0,0,0,
        1794,1813,7,28,0,0,1795,1797,5,273,0,0,1796,1798,5,298,0,0,1797,
        1796,1,0,0,0,1797,1798,1,0,0,0,1798,1799,1,0,0,0,1799,1800,5,235,
        0,0,1800,1801,5,252,0,0,1801,1813,3,266,133,0,1802,1804,5,298,0,
        0,1803,1802,1,0,0,0,1803,1804,1,0,0,0,1804,1805,1,0,0,0,1805,1806,
        5,333,0,0,1806,1807,5,350,0,0,1807,1810,3,266,133,0,1808,1809,5,
        242,0,0,1809,1811,3,352,176,0,1810,1808,1,0,0,0,1810,1811,1,0,0,
        0,1811,1813,1,0,0,0,1812,1746,1,0,0,0,1812,1757,1,0,0,0,1812,1772,
        1,0,0,0,1812,1779,1,0,0,0,1812,1785,1,0,0,0,1812,1789,1,0,0,0,1812,
        1790,1,0,0,0,1812,1795,1,0,0,0,1812,1803,1,0,0,0,1813,263,1,0,0,
        0,1814,1816,5,298,0,0,1815,1814,1,0,0,0,1815,1816,1,0,0,0,1816,1817,
        1,0,0,0,1817,1818,5,280,0,0,1818,1832,7,30,0,0,1819,1820,5,384,0,
        0,1820,1833,5,385,0,0,1821,1822,5,384,0,0,1822,1827,3,258,129,0,
        1823,1824,5,388,0,0,1824,1826,3,258,129,0,1825,1823,1,0,0,0,1826,
        1829,1,0,0,0,1827,1825,1,0,0,0,1827,1828,1,0,0,0,1828,1830,1,0,0,
        0,1829,1827,1,0,0,0,1830,1831,5,385,0,0,1831,1833,1,0,0,0,1832,1819,
        1,0,0,0,1832,1821,1,0,0,0,1833,1844,1,0,0,0,1834,1836,5,298,0,0,
        1835,1834,1,0,0,0,1835,1836,1,0,0,0,1836,1837,1,0,0,0,1837,1838,
        5,280,0,0,1838,1841,3,266,133,0,1839,1840,5,242,0,0,1840,1842,3,
        352,176,0,1841,1839,1,0,0,0,1841,1842,1,0,0,0,1842,1844,1,0,0,0,
        1843,1815,1,0,0,0,1843,1835,1,0,0,0,1844,265,1,0,0,0,1845,1846,6,
        133,-1,0,1846,1850,3,268,134,0,1847,1848,7,31,0,0,1848,1850,3,266,
        133,8,1849,1845,1,0,0,0,1849,1847,1,0,0,0,1850,1874,1,0,0,0,1851,
        1852,10,7,0,0,1852,1853,7,32,0,0,1853,1873,3,266,133,8,1854,1855,
        10,6,0,0,1855,1856,7,33,0,0,1856,1873,3,266,133,7,1857,1858,10,5,
        0,0,1858,1859,5,379,0,0,1859,1873,3,266,133,6,1860,1861,10,4,0,0,
        1861,1862,5,380,0,0,1862,1873,3,266,133,5,1863,1864,10,3,0,0,1864,
        1865,5,378,0,0,1865,1873,3,266,133,4,1866,1867,10,2,0,0,1867,1868,
        3,340,170,0,1868,1869,3,266,133,3,1869,1873,1,0,0,0,1870,1871,10,
        1,0,0,1871,1873,5,410,0,0,1872,1851,1,0,0,0,1872,1854,1,0,0,0,1872,
        1857,1,0,0,0,1872,1860,1,0,0,0,1872,1863,1,0,0,0,1872,1866,1,0,0,
        0,1872,1870,1,0,0,0,1873,1876,1,0,0,0,1874,1872,1,0,0,0,1874,1875,
        1,0,0,0,1875,267,1,0,0,0,1876,1874,1,0,0,0,1877,1878,6,134,-1,0,
        1878,1880,5,201,0,0,1879,1881,3,310,155,0,1880,1879,1,0,0,0,1881,
        1882,1,0,0,0,1882,1880,1,0,0,0,1882,1883,1,0,0,0,1883,1886,1,0,0,
        0,1884,1885,5,239,0,0,1885,1887,3,258,129,0,1886,1884,1,0,0,0,1886,
        1887,1,0,0,0,1887,1888,1,0,0,0,1888,1889,5,240,0,0,1889,1969,1,0,
        0,0,1890,1891,5,201,0,0,1891,1893,3,258,129,0,1892,1894,3,310,155,
        0,1893,1892,1,0,0,0,1894,1895,1,0,0,0,1895,1893,1,0,0,0,1895,1896,
        1,0,0,0,1896,1899,1,0,0,0,1897,1898,5,239,0,0,1898,1900,3,258,129,
        0,1899,1897,1,0,0,0,1899,1900,1,0,0,0,1900,1901,1,0,0,0,1901,1902,
        5,240,0,0,1902,1969,1,0,0,0,1903,1904,5,202,0,0,1904,1905,5,384,
        0,0,1905,1906,3,258,129,0,1906,1907,5,185,0,0,1907,1908,3,56,28,
        0,1908,1909,5,385,0,0,1909,1969,1,0,0,0,1910,1911,5,45,0,0,1911,
        1912,5,384,0,0,1912,1915,3,258,129,0,1913,1914,5,60,0,0,1914,1916,
        5,87,0,0,1915,1913,1,0,0,0,1915,1916,1,0,0,0,1916,1917,1,0,0,0,1917,
        1918,5,385,0,0,1918,1969,1,0,0,0,1919,1920,5,73,0,0,1920,1921,5,
        384,0,0,1921,1924,3,258,129,0,1922,1923,5,60,0,0,1923,1925,5,87,
        0,0,1924,1922,1,0,0,0,1924,1925,1,0,0,0,1925,1926,1,0,0,0,1926,1927,
        5,385,0,0,1927,1969,1,0,0,0,1928,1929,5,316,0,0,1929,1930,5,384,
        0,0,1930,1931,3,266,133,0,1931,1932,5,263,0,0,1932,1933,3,266,133,
        0,1933,1934,5,385,0,0,1934,1969,1,0,0,0,1935,1969,3,348,174,0,1936,
        1969,5,395,0,0,1937,1938,3,322,161,0,1938,1939,5,381,0,0,1939,1940,
        5,395,0,0,1940,1969,1,0,0,0,1941,1942,5,384,0,0,1942,1943,3,158,
        79,0,1943,1944,5,385,0,0,1944,1969,1,0,0,0,1945,1946,3,270,135,0,
        1946,1958,5,384,0,0,1947,1949,3,358,179,0,1948,1947,1,0,0,0,1948,
        1949,1,0,0,0,1949,1950,1,0,0,0,1950,1955,3,272,136,0,1951,1952,5,
        388,0,0,1952,1954,3,272,136,0,1953,1951,1,0,0,0,1954,1957,1,0,0,
        0,1955,1953,1,0,0,0,1955,1956,1,0,0,0,1956,1959,1,0,0,0,1957,1955,
        1,0,0,0,1958,1948,1,0,0,0,1958,1959,1,0,0,0,1959,1960,1,0,0,0,1960,
        1961,5,385,0,0,1961,1969,1,0,0,0,1962,1969,3,304,152,0,1963,1969,
        3,274,137,0,1964,1965,5,384,0,0,1965,1966,3,258,129,0,1966,1967,
        5,385,0,0,1967,1969,1,0,0,0,1968,1877,1,0,0,0,1968,1890,1,0,0,0,
        1968,1903,1,0,0,0,1968,1910,1,0,0,0,1968,1919,1,0,0,0,1968,1928,
        1,0,0,0,1968,1935,1,0,0,0,1968,1936,1,0,0,0,1968,1937,1,0,0,0,1968,
        1941,1,0,0,0,1968,1945,1,0,0,0,1968,1962,1,0,0,0,1968,1963,1,0,0,
        0,1968,1964,1,0,0,0,1969,1977,1,0,0,0,1970,1971,10,4,0,0,1971,1972,
        5,382,0,0,1972,1973,3,266,133,0,1973,1974,5,383,0,0,1974,1976,1,
        0,0,0,1975,1970,1,0,0,0,1976,1979,1,0,0,0,1977,1975,1,0,0,0,1977,
        1978,1,0,0,0,1978,269,1,0,0,0,1979,1977,1,0,0,0,1980,1984,3,366,
        183,0,1981,1984,3,370,185,0,1982,1984,3,322,161,0,1983,1980,1,0,
        0,0,1983,1981,1,0,0,0,1983,1982,1,0,0,0,1984,271,1,0,0,0,1985,1990,
        3,364,182,0,1986,1990,3,362,181,0,1987,1990,3,360,180,0,1988,1990,
        3,258,129,0,1989,1985,1,0,0,0,1989,1986,1,0,0,0,1989,1987,1,0,0,
        0,1989,1988,1,0,0,0,1990,273,1,0,0,0,1991,1992,3,322,161,0,1992,
        275,1,0,0,0,1993,1994,3,304,152,0,1994,277,1,0,0,0,1995,1998,3,304,
        152,0,1996,1998,3,274,137,0,1997,1995,1,0,0,0,1997,1996,1,0,0,0,
        1998,279,1,0,0,0,1999,2002,5,271,0,0,2000,2003,3,282,141,0,2001,
        2003,3,286,143,0,2002,2000,1,0,0,0,2002,2001,1,0,0,0,2002,2003,1,
        0,0,0,2003,281,1,0,0,0,2004,2006,3,284,142,0,2005,2007,3,288,144,
        0,2006,2005,1,0,0,0,2006,2007,1,0,0,0,2007,283,1,0,0,0,2008,2009,
        3,290,145,0,2009,2010,3,362,181,0,2010,2012,1,0,0,0,2011,2008,1,
        0,0,0,2012,2013,1,0,0,0,2013,2011,1,0,0,0,2013,2014,1,0,0,0,2014,
        285,1,0,0,0,2015,2018,3,288,144,0,2016,2019,3,284,142,0,2017,2019,
        3,288,144,0,2018,2016,1,0,0,0,2018,2017,1,0,0,0,2018,2019,1,0,0,
        0,2019,287,1,0,0,0,2020,2021,3,290,145,0,2021,2022,3,362,181,0,2022,
        2023,5,350,0,0,2023,2024,3,362,181,0,2024,289,1,0,0,0,2025,2027,
        7,34,0,0,2026,2025,1,0,0,0,2026,2027,1,0,0,0,2027,2028,1,0,0,0,2028,
        2031,7,35,0,0,2029,2031,5,405,0,0,2030,2026,1,0,0,0,2030,2029,1,
        0,0,0,2031,291,1,0,0,0,2032,2034,5,185,0,0,2033,2032,1,0,0,0,2033,
        2034,1,0,0,0,2034,2035,1,0,0,0,2035,2037,3,304,152,0,2036,2038,3,
        300,150,0,2037,2036,1,0,0,0,2037,2038,1,0,0,0,2038,293,1,0,0,0,2039,
        2041,5,185,0,0,2040,2039,1,0,0,0,2040,2041,1,0,0,0,2041,2042,1,0,
        0,0,2042,2044,3,304,152,0,2043,2045,3,300,150,0,2044,2043,1,0,0,
        0,2044,2045,1,0,0,0,2045,295,1,0,0,0,2046,2047,3,304,152,0,2047,
        2048,3,298,149,0,2048,297,1,0,0,0,2049,2050,5,288,0,0,2050,2052,
        3,304,152,0,2051,2049,1,0,0,0,2052,2053,1,0,0,0,2053,2051,1,0,0,
        0,2053,2054,1,0,0,0,2054,2057,1,0,0,0,2055,2057,1,0,0,0,2056,2051,
        1,0,0,0,2056,2055,1,0,0,0,2057,299,1,0,0,0,2058,2059,5,384,0,0,2059,
        2060,3,302,151,0,2060,2061,5,385,0,0,2061,301,1,0,0,0,2062,2067,
        3,304,152,0,2063,2064,5,388,0,0,2064,2066,3,304,152,0,2065,2063,
        1,0,0,0,2066,2069,1,0,0,0,2067,2065,1,0,0,0,2067,2068,1,0,0,0,2068,
        303,1,0,0,0,2069,2067,1,0,0,0,2070,2074,3,306,153,0,2071,2074,3,
        308,154,0,2072,2074,3,370,185,0,2073,2070,1,0,0,0,2073,2071,1,0,
        0,0,2073,2072,1,0,0,0,2074,305,1,0,0,0,2075,2076,7,36,0,0,2076,307,
        1,0,0,0,2077,2078,5,405,0,0,2078,309,1,0,0,0,2079,2080,5,366,0,0,
        2080,2081,3,258,129,0,2081,2082,5,346,0,0,2082,2083,3,258,129,0,
        2083,311,1,0,0,0,2084,2085,3,322,161,0,2085,313,1,0,0,0,2086,2087,
        3,322,161,0,2087,315,1,0,0,0,2088,2089,3,322,161,0,2089,317,1,0,
        0,0,2090,2091,3,322,161,0,2091,319,1,0,0,0,2092,2093,3,322,161,0,
        2093,321,1,0,0,0,2094,2099,3,304,152,0,2095,2096,5,381,0,0,2096,
        2098,3,304,152,0,2097,2095,1,0,0,0,2098,2101,1,0,0,0,2099,2100,1,
        0,0,0,2099,2097,1,0,0,0,2100,323,1,0,0,0,2101,2099,1,0,0,0,2102,
        2103,5,369,0,0,2103,2104,3,330,165,0,2104,325,1,0,0,0,2105,2106,
        5,59,0,0,2106,2107,5,298,0,0,2107,2108,5,245,0,0,2108,327,1,0,0,
        0,2109,2110,5,59,0,0,2110,2111,5,245,0,0,2111,329,1,0,0,0,2112,2113,
        5,384,0,0,2113,2118,3,332,166,0,2114,2115,5,388,0,0,2115,2117,3,
        332,166,0,2116,2114,1,0,0,0,2117,2120,1,0,0,0,2118,2116,1,0,0,0,
        2118,2119,1,0,0,0,2119,2121,1,0,0,0,2120,2118,1,0,0,0,2121,2122,
        5,385,0,0,2122,331,1,0,0,0,2123,2128,3,334,167,0,2124,2126,5,373,
        0,0,2125,2124,1,0,0,0,2125,2126,1,0,0,0,2126,2127,1,0,0,0,2127,2129,
        3,336,168,0,2128,2125,1,0,0,0,2128,2129,1,0,0,0,2129,333,1,0,0,0,
        2130,2134,3,304,152,0,2131,2134,3,274,137,0,2132,2134,5,405,0,0,
        2133,2130,1,0,0,0,2133,2131,1,0,0,0,2133,2132,1,0,0,0,2134,335,1,
        0,0,0,2135,2140,5,406,0,0,2136,2140,5,407,0,0,2137,2140,3,356,178,
        0,2138,2140,5,405,0,0,2139,2135,1,0,0,0,2139,2136,1,0,0,0,2139,2137,
        1,0,0,0,2139,2138,1,0,0,0,2140,337,1,0,0,0,2141,2148,5,181,0,0,2142,
        2143,5,379,0,0,2143,2148,5,379,0,0,2144,2148,5,305,0,0,2145,2146,
        5,378,0,0,2146,2148,5,378,0,0,2147,2141,1,0,0,0,2147,2142,1,0,0,
        0,2147,2144,1,0,0,0,2147,2145,1,0,0,0,2148,339,1,0,0,0,2149,2164,
        5,373,0,0,2150,2164,5,374,0,0,2151,2164,5,375,0,0,2152,2153,5,375,
        0,0,2153,2164,5,373,0,0,2154,2155,5,374,0,0,2155,2164,5,373,0,0,
        2156,2157,5,375,0,0,2157,2164,5,374,0,0,2158,2159,5,376,0,0,2159,
        2164,5,373,0,0,2160,2161,5,375,0,0,2161,2162,5,373,0,0,2162,2164,
        5,374,0,0,2163,2149,1,0,0,0,2163,2150,1,0,0,0,2163,2151,1,0,0,0,
        2163,2152,1,0,0,0,2163,2154,1,0,0,0,2163,2156,1,0,0,0,2163,2158,
        1,0,0,0,2163,2160,1,0,0,0,2164,341,1,0,0,0,2165,2166,5,375,0,0,2166,
        2173,5,375,0,0,2167,2168,5,374,0,0,2168,2173,5,374,0,0,2169,2173,
        5,379,0,0,2170,2173,5,380,0,0,2171,2173,5,378,0,0,2172,2165,1,0,
        0,0,2172,2167,1,0,0,0,2172,2169,1,0,0,0,2172,2170,1,0,0,0,2172,2171,
        1,0,0,0,2173,343,1,0,0,0,2174,2175,7,37,0,0,2175,345,1,0,0,0,2176,
        2177,7,38,0,0,2177,347,1,0,0,0,2178,2193,3,280,140,0,2179,2193,3,
        350,175,0,2180,2193,3,352,176,0,2181,2183,5,397,0,0,2182,2181,1,
        0,0,0,2182,2183,1,0,0,0,2183,2184,1,0,0,0,2184,2193,3,354,177,0,
        2185,2193,3,356,178,0,2186,2193,5,407,0,0,2187,2193,5,408,0,0,2188,
        2190,5,298,0,0,2189,2188,1,0,0,0,2189,2190,1,0,0,0,2190,2191,1,0,
        0,0,2191,2193,5,299,0,0,2192,2178,1,0,0,0,2192,2179,1,0,0,0,2192,
        2180,1,0,0,0,2192,2182,1,0,0,0,2192,2185,1,0,0,0,2192,2186,1,0,0,
        0,2192,2187,1,0,0,0,2192,2189,1,0,0,0,2193,349,1,0,0,0,2194,2195,
        3,360,180,0,2195,2196,3,352,176,0,2196,351,1,0,0,0,2197,2198,5,405,
        0,0,2198,353,1,0,0,0,2199,2200,5,406,0,0,2200,355,1,0,0,0,2201,2202,
        7,39,0,0,2202,357,1,0,0,0,2203,2204,7,40,0,0,2204,359,1,0,0,0,2205,
        2206,7,41,0,0,2206,361,1,0,0,0,2207,2208,7,42,0,0,2208,363,1,0,0,
        0,2209,2210,7,43,0,0,2210,365,1,0,0,0,2211,2212,7,44,0,0,2212,367,
        1,0,0,0,2213,2214,7,45,0,0,2214,369,1,0,0,0,2215,2216,7,46,0,0,2216,
        371,1,0,0,0,260,380,382,387,391,395,399,403,407,411,415,419,423,
        427,431,433,451,455,464,469,476,487,496,508,511,518,526,531,534,
        541,549,553,565,573,577,599,604,608,612,616,625,630,634,638,642,
        645,649,654,660,665,670,673,677,685,693,697,701,705,709,713,717,
        721,725,727,737,745,769,776,782,785,788,798,801,809,821,845,858,
        863,867,875,879,885,895,899,905,909,913,916,925,929,936,939,949,
        957,965,969,984,1003,1014,1018,1025,1030,1036,1040,1047,1051,1055,
        1059,1067,1071,1076,1082,1088,1091,1095,1106,1115,1129,1141,1156,
        1159,1163,1166,1168,1173,1177,1180,1184,1193,1202,1212,1217,1229,
        1232,1235,1238,1244,1248,1256,1259,1264,1267,1269,1283,1294,1299,
        1307,1310,1313,1318,1320,1322,1327,1330,1334,1337,1340,1352,1359,
        1370,1397,1419,1437,1442,1454,1467,1479,1491,1496,1523,1531,1535,
        1538,1541,1548,1551,1554,1557,1560,1563,1568,1571,1580,1585,1589,
        1594,1603,1622,1630,1638,1642,1646,1656,1682,1690,1702,1724,1726,
        1737,1740,1742,1746,1750,1757,1766,1772,1785,1792,1797,1803,1810,
        1812,1815,1827,1832,1835,1841,1843,1849,1872,1874,1882,1886,1895,
        1899,1915,1924,1948,1955,1958,1968,1977,1983,1989,1997,2002,2006,
        2013,2018,2026,2030,2033,2037,2040,2044,2053,2056,2067,2073,2099,
        2118,2125,2128,2133,2139,2147,2163,2172,2182,2189,2192
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!FlinkSqlParser.__ATN) {
            FlinkSqlParser.__ATN = new antlr.ATNDeserializer().deserialize(FlinkSqlParser._serializedATN);
        }

        return FlinkSqlParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(FlinkSqlParser.literalNames, FlinkSqlParser.symbolicNames, []);

    public override getVocabulary(): antlr.Vocabulary {
        return FlinkSqlParser.vocabulary;
    }

    private static readonly decisionsToDFA = FlinkSqlParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext {
        return this.getTypedRuleContext(StatementContext, 0);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EOF, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_program;
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlStatements(): SqlStatementsContext {
        return this.getTypedRuleContext(SqlStatementsContext, 0);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EOF, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_statement;
    }
}


export class SqlStatementsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public sqlStatement__list(): SqlStatementContext[] {
        return this.getTypedRuleContexts(SqlStatementContext);
    }
    public sqlStatement(i: number): SqlStatementContext {
        return this.getTypedRuleContext(SqlStatementContext, i);
    }
    public nullStatement__list(): NullStatementContext[] {
        return this.getTypedRuleContexts(NullStatementContext);
    }
    public nullStatement(i: number): NullStatementContext {
        return this.getTypedRuleContext(NullStatementContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_sqlStatements;
    }
}


export class SqlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ddlStatement(): DdlStatementContext {
        return this.getTypedRuleContext(DdlStatementContext, 0);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0);
    }
    public dmlStatement(): DmlStatementContext {
        return this.getTypedRuleContext(DmlStatementContext, 0);
    }
    public describeStatement(): DescribeStatementContext {
        return this.getTypedRuleContext(DescribeStatementContext, 0);
    }
    public explainStatement(): ExplainStatementContext {
        return this.getTypedRuleContext(ExplainStatementContext, 0);
    }
    public useStatement(): UseStatementContext {
        return this.getTypedRuleContext(UseStatementContext, 0);
    }
    public showStatement(): ShowStatementContext {
        return this.getTypedRuleContext(ShowStatementContext, 0);
    }
    public loadStatement(): LoadStatementContext {
        return this.getTypedRuleContext(LoadStatementContext, 0);
    }
    public unloadStatement(): UnloadStatementContext {
        return this.getTypedRuleContext(UnloadStatementContext, 0);
    }
    public setStatement(): SetStatementContext {
        return this.getTypedRuleContext(SetStatementContext, 0);
    }
    public resetStatement(): ResetStatementContext {
        return this.getTypedRuleContext(ResetStatementContext, 0);
    }
    public jarStatement(): JarStatementContext {
        return this.getTypedRuleContext(JarStatementContext, 0);
    }
    public dtAddStatement(): DtAddStatementContext {
        return this.getTypedRuleContext(DtAddStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_sqlStatement;
    }
}


export class NullStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMICOLON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SEMICOLON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_nullStatement;
    }
}


export class DdlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public createTable(): CreateTableContext {
        return this.getTypedRuleContext(CreateTableContext, 0);
    }
    public createDatabase(): CreateDatabaseContext {
        return this.getTypedRuleContext(CreateDatabaseContext, 0);
    }
    public createView(): CreateViewContext {
        return this.getTypedRuleContext(CreateViewContext, 0);
    }
    public createFunction(): CreateFunctionContext {
        return this.getTypedRuleContext(CreateFunctionContext, 0);
    }
    public createCatalog(): CreateCatalogContext {
        return this.getTypedRuleContext(CreateCatalogContext, 0);
    }
    public alterTable(): AlterTableContext {
        return this.getTypedRuleContext(AlterTableContext, 0);
    }
    public alertView(): AlertViewContext {
        return this.getTypedRuleContext(AlertViewContext, 0);
    }
    public alterDatabase(): AlterDatabaseContext {
        return this.getTypedRuleContext(AlterDatabaseContext, 0);
    }
    public alterFunction(): AlterFunctionContext {
        return this.getTypedRuleContext(AlterFunctionContext, 0);
    }
    public dropCatalog(): DropCatalogContext {
        return this.getTypedRuleContext(DropCatalogContext, 0);
    }
    public dropTable(): DropTableContext {
        return this.getTypedRuleContext(DropTableContext, 0);
    }
    public dropDatabase(): DropDatabaseContext {
        return this.getTypedRuleContext(DropDatabaseContext, 0);
    }
    public dropView(): DropViewContext {
        return this.getTypedRuleContext(DropViewContext, 0);
    }
    public dropFunction(): DropFunctionContext {
        return this.getTypedRuleContext(DropFunctionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ddlStatement;
    }
}


export class DmlStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public insertStatement(): InsertStatementContext {
        return this.getTypedRuleContext(InsertStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dmlStatement;
    }
}


export class DescribeStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public KW_DESCRIBE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
    }
    public KW_DESC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_describeStatement;
    }
}


export class ExplainStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_EXPLAIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0);
    }
    public dmlStatement(): DmlStatementContext {
        return this.getTypedRuleContext(DmlStatementContext, 0);
    }
    public insertSimpleStatement(): InsertSimpleStatementContext {
        return this.getTypedRuleContext(InsertSimpleStatementContext, 0);
    }
    public insertMulStatement(): InsertMulStatementContext {
        return this.getTypedRuleContext(InsertMulStatementContext, 0);
    }
    public explainDetails(): ExplainDetailsContext {
        return this.getTypedRuleContext(ExplainDetailsContext, 0);
    }
    public KW_PLAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainStatement;
    }
}


export class ExplainDetailsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public explainDetail__list(): ExplainDetailContext[] {
        return this.getTypedRuleContexts(ExplainDetailContext);
    }
    public explainDetail(i: number): ExplainDetailContext {
        return this.getTypedRuleContext(ExplainDetailContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainDetails;
    }
}


export class ExplainDetailContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CHANGELOG_MODE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
    }
    public KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
    }
    public KW_ESTIMATED_COST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_explainDetail;
    }
}


export class UseStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public catalogPath(): CatalogPathContext {
        return this.getTypedRuleContext(CatalogPathContext, 0);
    }
    public databasePath(): DatabasePathContext {
        return this.getTypedRuleContext(DatabasePathContext, 0);
    }
    public useModuleStatement(): UseModuleStatementContext {
        return this.getTypedRuleContext(UseModuleStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_useStatement;
    }
}


export class UseModuleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    public KW_MODULES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    public uid__list(): UidContext[] {
        return this.getTypedRuleContexts(UidContext);
    }
    public uid(i: number): UidContext {
        return this.getTypedRuleContext(UidContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_useModuleStatement;
    }
}


export class ShowStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SHOW, 0);
    }
    public KW_CATALOGS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
    }
    public KW_DATABASES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
    }
    public KW_VIEWS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
    }
    public KW_JARS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public KW_TABLES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLES, 0);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public likePredicate(): LikePredicateContext {
        return this.getTypedRuleContext(LikePredicateContext, 0);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public KW_FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
    }
    public KW_USER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USER, 0);
    }
    public KW_MODULES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    public KW_FULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_showStatement;
    }
}


export class LoadStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0);
    }
    public KW_MODULE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getTypedRuleContext(TablePropertyListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_loadStatement;
    }
}


export class UnloadStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_UNLOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
    }
    public KW_MODULE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unloadStatement;
    }
}


export class SetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    public tableProperty(): TablePropertyContext {
        return this.getTypedRuleContext(TablePropertyContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setStatement;
    }
}


export class ResetStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RESET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESET, 0);
    }
    public tablePropertyKey(): TablePropertyKeyContext {
        return this.getTypedRuleContext(TablePropertyKeyContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_resetStatement;
    }
}


export class JarStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    public jarFileName(): JarFileNameContext {
        return this.getTypedRuleContext(JarFileNameContext, 0);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_REMOVE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jarStatement;
    }
}


export class DtAddStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public dtFilePath(): DtFilePathContext {
        return this.getTypedRuleContext(DtFilePathContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public uid__list(): UidContext[] {
        return this.getTypedRuleContexts(UidContext);
    }
    public uid(i: number): UidContext {
        return this.getTypedRuleContext(UidContext, i);
    }
    public KW_FILE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    public KW_PYTHON_FILES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    public KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    public KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    public KW_PYTHON_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    public KW_PYTHON_ARCHIVES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    public KW_PYTHON_PARAMETER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    public KW_ENGINE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dtAddStatement;
    }
}


export class DtFilePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SLASH_TEXT__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.SLASH_TEXT);
    }
    public SLASH_TEXT(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SLASH_TEXT, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dtFilePath;
    }
}


export class CreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public simpleCreateTable(): SimpleCreateTableContext {
        return this.getTypedRuleContext(SimpleCreateTableContext, 0);
    }
    public createTableAsSelect(): CreateTableAsSelectContext {
        return this.getTypedRuleContext(CreateTableAsSelectContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createTable;
    }
}


export class SimpleCreateTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getTypedRuleContext(TablePathCreateContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public columnOptionDefinition__list(): ColumnOptionDefinitionContext[] {
        return this.getTypedRuleContexts(ColumnOptionDefinitionContext);
    }
    public columnOptionDefinition(i: number): ColumnOptionDefinitionContext {
        return this.getTypedRuleContext(ColumnOptionDefinitionContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public withOption(): WithOptionContext {
        return this.getTypedRuleContext(WithOptionContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext {
        return this.getTypedRuleContext(IfNotExistsContext, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public watermarkDefinition(): WatermarkDefinitionContext {
        return this.getTypedRuleContext(WatermarkDefinitionContext, 0);
    }
    public tableConstraint(): TableConstraintContext {
        return this.getTypedRuleContext(TableConstraintContext, 0);
    }
    public selfDefinitionClause(): SelfDefinitionClauseContext {
        return this.getTypedRuleContext(SelfDefinitionClauseContext, 0);
    }
    public commentSpec(): CommentSpecContext {
        return this.getTypedRuleContext(CommentSpecContext, 0);
    }
    public partitionDefinition(): PartitionDefinitionContext {
        return this.getTypedRuleContext(PartitionDefinitionContext, 0);
    }
    public likeDefinition(): LikeDefinitionContext {
        return this.getTypedRuleContext(LikeDefinitionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_simpleCreateTable;
    }
}


export class CreateTableAsSelectContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public tablePathCreate(): TablePathCreateContext {
        return this.getTypedRuleContext(TablePathCreateContext, 0);
    }
    public withOption(): WithOptionContext {
        return this.getTypedRuleContext(WithOptionContext, 0);
    }
    public ifNotExists(): IfNotExistsContext {
        return this.getTypedRuleContext(IfNotExistsContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createTableAsSelect;
    }
}


export class ColumnOptionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public physicalColumnDefinition(): PhysicalColumnDefinitionContext {
        return this.getTypedRuleContext(PhysicalColumnDefinitionContext, 0);
    }
    public metadataColumnDefinition(): MetadataColumnDefinitionContext {
        return this.getTypedRuleContext(MetadataColumnDefinitionContext, 0);
    }
    public computedColumnDefinition(): ComputedColumnDefinitionContext {
        return this.getTypedRuleContext(ComputedColumnDefinitionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnOptionDefinition;
    }
}


export class PhysicalColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, 0);
    }
    public columnType(): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, 0);
    }
    public columnConstraint(): ColumnConstraintContext {
        return this.getTypedRuleContext(ColumnConstraintContext, 0);
    }
    public commentSpec(): CommentSpecContext {
        return this.getTypedRuleContext(CommentSpecContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_physicalColumnDefinition;
    }
}


export class ColumnNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnName;
    }
}


export class ColumnNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public columnName__list(): ColumnNameContext[] {
        return this.getTypedRuleContexts(ColumnNameContext);
    }
    public columnName(i: number): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnNameList;
    }
}


export class ColumnTypeContext extends antlr.ParserRuleContext {
    public _typeName!: Token;
    public _type_!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_CHAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHAR, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
    }
    public KW_STRING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STRING, 0);
    }
    public KW_BINARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BINARY, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
    }
    public KW_BYTES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BYTES, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
    }
    public KW_INT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP_LTZ(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
    }
    public KW_DATETIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
    }
    public lengthOneDimension(): LengthOneDimensionContext {
        return this.getTypedRuleContext(LengthOneDimensionContext, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_ZONE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public KW_LOCAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
    }
    public KW_DEC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEC, 0);
    }
    public KW_NUMERIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
    }
    public lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext {
        return this.getTypedRuleContext(LengthTwoOptionalDimensionContext, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_MULTISET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
    }
    public lengthOneTypeDimension(): LengthOneTypeDimensionContext {
        return this.getTypedRuleContext(LengthOneTypeDimensionContext, 0);
    }
    public KW_MAP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public mapTypeDimension(): MapTypeDimensionContext {
        return this.getTypedRuleContext(MapTypeDimensionContext, 0);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public rowTypeDimension(): RowTypeDimensionContext {
        return this.getTypedRuleContext(RowTypeDimensionContext, 0);
    }
    public KW_RAW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RAW, 0);
    }
    public lengthTwoStringDimension(): LengthTwoStringDimensionContext {
        return this.getTypedRuleContext(LengthTwoStringDimensionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnType;
    }
}


export class LengthOneDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public decimalLiteral(): DecimalLiteralContext {
        return this.getTypedRuleContext(DecimalLiteralContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthOneDimension;
    }
}


export class LengthTwoOptionalDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public decimalLiteral__list(): DecimalLiteralContext[] {
        return this.getTypedRuleContexts(DecimalLiteralContext);
    }
    public decimalLiteral(i: number): DecimalLiteralContext {
        return this.getTypedRuleContext(DecimalLiteralContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthTwoOptionalDimension;
    }
}


export class LengthTwoStringDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public stringLiteral__list(): StringLiteralContext[] {
        return this.getTypedRuleContexts(StringLiteralContext);
    }
    public stringLiteral(i: number): StringLiteralContext {
        return this.getTypedRuleContext(StringLiteralContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthTwoStringDimension;
    }
}


export class LengthOneTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public columnType(): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, 0);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_lengthOneTypeDimension;
    }
}


export class MapTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public columnType__list(): ColumnTypeContext[] {
        return this.getTypedRuleContexts(ColumnTypeContext);
    }
    public columnType(i: number): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, i);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_mapTypeDimension;
    }
}


export class RowTypeDimensionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public columnName__list(): ColumnNameContext[] {
        return this.getTypedRuleContexts(ColumnNameContext);
    }
    public columnName(i: number): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, i);
    }
    public columnType__list(): ColumnTypeContext[] {
        return this.getTypedRuleContexts(ColumnTypeContext);
    }
    public columnType(i: number): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, i);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_rowTypeDimension;
    }
}


export class ColumnConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext {
        return this.getTypedRuleContext(ConstraintNameContext, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnConstraint;
    }
}


export class CommentSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_commentSpec;
    }
}


export class MetadataColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, 0);
    }
    public columnType(): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, 0);
    }
    public KW_METADATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_METADATA, 0);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public metadataKey(): MetadataKeyContext {
        return this.getTypedRuleContext(MetadataKeyContext, 0);
    }
    public KW_VIRTUAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_metadataColumnDefinition;
    }
}


export class MetadataKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_metadataKey;
    }
}


export class ComputedColumnDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public columnName(): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public computedColumnExpression(): ComputedColumnExpressionContext {
        return this.getTypedRuleContext(ComputedColumnExpressionContext, 0);
    }
    public commentSpec(): CommentSpecContext {
        return this.getTypedRuleContext(CommentSpecContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_computedColumnDefinition;
    }
}


export class ComputedColumnExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_computedColumnExpression;
    }
}


export class WatermarkDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WATERMARK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WATERMARK, 0);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_watermarkDefinition;
    }
}


export class TableConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public columnNameList(): ColumnNameListContext {
        return this.getTypedRuleContext(ColumnNameListContext, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext {
        return this.getTypedRuleContext(ConstraintNameContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableConstraint;
    }
}


export class ConstraintNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_constraintName;
    }
}


export class SelfDefinitionClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PERIOD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PERIOD, 0);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selfDefinitionClause;
    }
}


export class PartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITIONED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    public transformList(): TransformListContext {
        return this.getTypedRuleContext(TransformListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_partitionDefinition;
    }
}


export class TransformListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public transform__list(): TransformContext[] {
        return this.getTypedRuleContexts(TransformContext);
    }
    public transform(i: number): TransformContext {
        return this.getTypedRuleContext(TransformContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transformList;
    }
}


export class TransformContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transform;
    }
    public override copyFrom(ctx: TransformContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentityTransformContext extends TransformContext {
    public constructor(ctx: TransformContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getTypedRuleContext(QualifiedNameContext, 0);
    }
}
export class ApplyTransformContext extends TransformContext {
    public _transformName!: IdentifierContext;
    public constructor(ctx: TransformContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public transformArgument__list(): TransformArgumentContext[] {
        return this.getTypedRuleContexts(TransformArgumentContext);
    }
    public transformArgument(i: number): TransformArgumentContext {
        return this.getTypedRuleContext(TransformArgumentContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
}


export class TransformArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getTypedRuleContext(QualifiedNameContext, 0);
    }
    public constant(): ConstantContext {
        return this.getTypedRuleContext(ConstantContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_transformArgument;
    }
}


export class LikeDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public likeOption__list(): LikeOptionContext[] {
        return this.getTypedRuleContexts(LikeOptionContext);
    }
    public likeOption(i: number): LikeOptionContext {
        return this.getTypedRuleContext(LikeOptionContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likeDefinition;
    }
}


export class LikeOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INCLUDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
    }
    public KW_OVERWRITING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    public KW_WATERMARKS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likeOption;
    }
}


export class CreateCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public withOption(): WithOptionContext {
        return this.getTypedRuleContext(WithOptionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createCatalog;
    }
}


export class CreateDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public databasePathCreate(): DatabasePathCreateContext {
        return this.getTypedRuleContext(DatabasePathCreateContext, 0);
    }
    public withOption(): WithOptionContext {
        return this.getTypedRuleContext(WithOptionContext, 0);
    }
    public ifNotExists(): IfNotExistsContext {
        return this.getTypedRuleContext(IfNotExistsContext, 0);
    }
    public commentSpec(): CommentSpecContext {
        return this.getTypedRuleContext(CommentSpecContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createDatabase;
    }
}


export class CreateViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifNotExists(): IfNotExistsContext {
        return this.getTypedRuleContext(IfNotExistsContext, 0);
    }
    public columnNameList(): ColumnNameListContext {
        return this.getTypedRuleContext(ColumnNameListContext, 0);
    }
    public commentSpec(): CommentSpecContext {
        return this.getTypedRuleContext(CommentSpecContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createView;
    }
}


export class CreateFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    public functionName(): FunctionNameContext {
        return this.getTypedRuleContext(FunctionNameContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifNotExists(): IfNotExistsContext {
        return this.getTypedRuleContext(IfNotExistsContext, 0);
    }
    public KW_LANGUAGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    public usingClause(): UsingClauseContext {
        return this.getTypedRuleContext(UsingClauseContext, 0);
    }
    public KW_JAVA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_SCALA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_createFunction;
    }
}


export class UsingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    public KW_JAR__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.KW_JAR);
    }
    public KW_JAR(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAR, i);
    }
    public jarFileName__list(): JarFileNameContext[] {
        return this.getTypedRuleContexts(JarFileNameContext);
    }
    public jarFileName(i: number): JarFileNameContext {
        return this.getTypedRuleContext(JarFileNameContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_usingClause;
    }
}


export class JarFileNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_jarFileName;
    }
}


export class AlterTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public renameDefinition(): RenameDefinitionContext {
        return this.getTypedRuleContext(RenameDefinitionContext, 0);
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0);
    }
    public addConstraint(): AddConstraintContext {
        return this.getTypedRuleContext(AddConstraintContext, 0);
    }
    public dropConstraint(): DropConstraintContext {
        return this.getTypedRuleContext(DropConstraintContext, 0);
    }
    public addUnique(): AddUniqueContext {
        return this.getTypedRuleContext(AddUniqueContext, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterTable;
    }
}


export class RenameDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public uid__list(): UidContext[] {
        return this.getTypedRuleContexts(UidContext);
    }
    public uid(i: number): UidContext {
        return this.getTypedRuleContext(UidContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_renameDefinition;
    }
}


export class SetKeyValueDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getTypedRuleContext(TablePropertyListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setKeyValueDefinition;
    }
}


export class AddConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext {
        return this.getTypedRuleContext(ConstraintNameContext, 0);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public columnNameList(): ColumnNameListContext {
        return this.getTypedRuleContext(ColumnNameListContext, 0);
    }
    public notForced(): NotForcedContext {
        return this.getTypedRuleContext(NotForcedContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_addConstraint;
    }
}


export class DropConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public constraintName(): ConstraintNameContext {
        return this.getTypedRuleContext(ConstraintNameContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropConstraint;
    }
}


export class AddUniqueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_UNIQUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNIQUE, 0);
    }
    public columnNameList(): ColumnNameListContext {
        return this.getTypedRuleContext(ColumnNameListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_addUnique;
    }
}


export class NotForcedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_notForced;
    }
}


export class AlertViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public renameDefinition(): RenameDefinitionContext {
        return this.getTypedRuleContext(RenameDefinitionContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alertView;
    }
}


export class AlterDatabaseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public databasePath(): DatabasePathContext {
        return this.getTypedRuleContext(DatabasePathContext, 0);
    }
    public setKeyValueDefinition(): SetKeyValueDefinitionContext {
        return this.getTypedRuleContext(SetKeyValueDefinitionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterDatabase;
    }
}


export class AlterFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public KW_LANGUAGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    public KW_JAVA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_SCALA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_alterFunction;
    }
}


export class DropCatalogContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_CATALOG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOG, 0);
    }
    public catalogPath(): CatalogPathContext {
        return this.getTypedRuleContext(CatalogPathContext, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropCatalog;
    }
}


export class DropTableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropTable;
    }
}


export class DropDatabaseContext extends antlr.ParserRuleContext {
    public _dropType!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public databasePath(): DatabasePathContext {
        return this.getTypedRuleContext(DatabasePathContext, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropDatabase;
    }
}


export class DropViewContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropView;
    }
}


export class DropFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    public functionName(): FunctionNameContext {
        return this.getTypedRuleContext(FunctionNameContext, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public ifExists(): IfExistsContext {
        return this.getTypedRuleContext(IfExistsContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dropFunction;
    }
}


export class InsertStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public insertSimpleStatement(): InsertSimpleStatementContext {
        return this.getTypedRuleContext(InsertSimpleStatementContext, 0);
    }
    public KW_EXECUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
    }
    public insertMulStatementCompatibility(): InsertMulStatementCompatibilityContext {
        return this.getTypedRuleContext(InsertMulStatementCompatibilityContext, 0);
    }
    public insertMulStatement(): InsertMulStatementContext {
        return this.getTypedRuleContext(InsertMulStatementContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertStatement;
    }
}


export class InsertSimpleStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INSERT, 0);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTO, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public valuesDefinition(): ValuesDefinitionContext {
        return this.getTypedRuleContext(ValuesDefinitionContext, 0);
    }
    public insertPartitionDefinition(): InsertPartitionDefinitionContext {
        return this.getTypedRuleContext(InsertPartitionDefinitionContext, 0);
    }
    public columnNameList(): ColumnNameListContext {
        return this.getTypedRuleContext(ColumnNameListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertSimpleStatement;
    }
}


export class InsertPartitionDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getTypedRuleContext(TablePropertyListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertPartitionDefinition;
    }
}


export class ValuesDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0);
    }
    public valuesRowDefinition__list(): ValuesRowDefinitionContext[] {
        return this.getTypedRuleContexts(ValuesRowDefinitionContext);
    }
    public valuesRowDefinition(i: number): ValuesRowDefinitionContext {
        return this.getTypedRuleContext(ValuesRowDefinitionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesDefinition;
    }
}


export class ValuesRowDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public constant__list(): ConstantContext[] {
        return this.getTypedRuleContexts(ConstantContext);
    }
    public constant(i: number): ConstantContext {
        return this.getTypedRuleContext(ConstantContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesRowDefinition;
    }
}


export class InsertMulStatementCompatibilityContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BEGIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
    }
    public KW_STATEMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    public SEMICOLON__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.SEMICOLON);
    }
    public SEMICOLON(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SEMICOLON, i);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    public insertSimpleStatement__list(): InsertSimpleStatementContext[] {
        return this.getTypedRuleContexts(InsertSimpleStatementContext);
    }
    public insertSimpleStatement(i: number): InsertSimpleStatementContext {
        return this.getTypedRuleContext(InsertSimpleStatementContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertMulStatementCompatibility;
    }
}


export class InsertMulStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_STATEMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    public KW_BEGIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    public insertSimpleStatement__list(): InsertSimpleStatementContext[] {
        return this.getTypedRuleContexts(InsertSimpleStatementContext);
    }
    public insertSimpleStatement(i: number): InsertSimpleStatementContext {
        return this.getTypedRuleContext(InsertSimpleStatementContext, i);
    }
    public SEMICOLON__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.SEMICOLON);
    }
    public SEMICOLON(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SEMICOLON, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_insertMulStatement;
    }
}


export class QueryStatementContext extends antlr.ParserRuleContext {
    public _left!: QueryStatementContext;
    public _operator!: Token;
    public _right!: QueryStatementContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valuesClause(): ValuesClauseContext {
        return this.getTypedRuleContext(ValuesClauseContext, 0);
    }
    public withClause(): WithClauseContext {
        return this.getTypedRuleContext(WithClauseContext, 0);
    }
    public queryStatement__list(): QueryStatementContext[] {
        return this.getTypedRuleContexts(QueryStatementContext);
    }
    public queryStatement(i: number): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, i);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public selectClause(): SelectClauseContext {
        return this.getTypedRuleContext(SelectClauseContext, 0);
    }
    public orderByClause(): OrderByClauseContext {
        return this.getTypedRuleContext(OrderByClauseContext, 0);
    }
    public limitClause(): LimitClauseContext {
        return this.getTypedRuleContext(LimitClauseContext, 0);
    }
    public selectStatement(): SelectStatementContext {
        return this.getTypedRuleContext(SelectStatementContext, 0);
    }
    public KW_INTERSECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
    }
    public KW_UNION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNION, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_queryStatement;
    }
}


export class ValuesClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valuesClause;
    }
}


export class WithClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public withItem__list(): WithItemContext[] {
        return this.getTypedRuleContexts(WithItemContext);
    }
    public withItem(i: number): WithItemContext {
        return this.getTypedRuleContext(WithItemContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withClause;
    }
}


export class WithItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public withItemName(): WithItemNameContext {
        return this.getTypedRuleContext(WithItemNameContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public LR_BRACKET__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.LR_BRACKET);
    }
    public LR_BRACKET(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, i);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public RR_BRACKET__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.RR_BRACKET);
    }
    public RR_BRACKET(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, i);
    }
    public columnName__list(): ColumnNameContext[] {
        return this.getTypedRuleContexts(ColumnNameContext);
    }
    public columnName(i: number): ColumnNameContext {
        return this.getTypedRuleContext(ColumnNameContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withItem;
    }
}


export class WithItemNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withItemName;
    }
}


export class SelectStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public selectClause(): SelectClauseContext {
        return this.getTypedRuleContext(SelectClauseContext, 0);
    }
    public fromClause(): FromClauseContext {
        return this.getTypedRuleContext(FromClauseContext, 0);
    }
    public whereClause(): WhereClauseContext {
        return this.getTypedRuleContext(WhereClauseContext, 0);
    }
    public groupByClause(): GroupByClauseContext {
        return this.getTypedRuleContext(GroupByClauseContext, 0);
    }
    public havingClause(): HavingClauseContext {
        return this.getTypedRuleContext(HavingClauseContext, 0);
    }
    public windowClause(): WindowClauseContext {
        return this.getTypedRuleContext(WindowClauseContext, 0);
    }
    public matchRecognizeClause(): MatchRecognizeClauseContext {
        return this.getTypedRuleContext(MatchRecognizeClauseContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selectStatement;
    }
}


export class SelectClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SELECT, 0);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public projectItemDefinition__list(): ProjectItemDefinitionContext[] {
        return this.getTypedRuleContexts(ProjectItemDefinitionContext);
    }
    public projectItemDefinition(i: number): ProjectItemDefinitionContext {
        return this.getTypedRuleContext(ProjectItemDefinitionContext, i);
    }
    public setQuantifier(): SetQuantifierContext {
        return this.getTypedRuleContext(SetQuantifierContext, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_selectClause;
    }
}


export class ProjectItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public overWindowItem(): OverWindowItemContext {
        return this.getTypedRuleContext(OverWindowItemContext, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_projectItemDefinition;
    }
}


export class OverWindowItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVER, 0);
    }
    public windowSpec(): WindowSpecContext {
        return this.getTypedRuleContext(WindowSpecContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_overWindowItem;
    }
}


export class FromClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public tableExpression(): TableExpressionContext {
        return this.getTypedRuleContext(TableExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_fromClause;
    }
}


export class TableExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tableReference__list(): TableReferenceContext[] {
        return this.getTypedRuleContexts(TableReferenceContext);
    }
    public tableReference(i: number): TableReferenceContext {
        return this.getTypedRuleContext(TableReferenceContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public inlineDataValueClause(): InlineDataValueClauseContext {
        return this.getTypedRuleContext(InlineDataValueClauseContext, 0);
    }
    public windoTVFClause(): WindoTVFClauseContext {
        return this.getTypedRuleContext(WindoTVFClauseContext, 0);
    }
    public tableExpression__list(): TableExpressionContext[] {
        return this.getTypedRuleContexts(TableExpressionContext);
    }
    public tableExpression(i: number): TableExpressionContext {
        return this.getTypedRuleContext(TableExpressionContext, i);
    }
    public KW_CROSS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CROSS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JOIN, 0);
    }
    public KW_NATURAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
    }
    public KW_OUTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OUTER, 0);
    }
    public joinCondition(): JoinConditionContext {
        return this.getTypedRuleContext(JoinConditionContext, 0);
    }
    public KW_LEFT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    public KW_FULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    public KW_INNER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INNER, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableExpression;
    }
}


export class TableReferenceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePrimary(): TablePrimaryContext {
        return this.getTypedRuleContext(TablePrimaryContext, 0);
    }
    public tableAlias(): TableAliasContext {
        return this.getTypedRuleContext(TableAliasContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableReference;
    }
}


export class TablePrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePath(): TablePathContext {
        return this.getTypedRuleContext(TablePathContext, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public systemTimePeriod(): SystemTimePeriodContext {
        return this.getTypedRuleContext(SystemTimePeriodContext, 0);
    }
    public correlationName(): CorrelationNameContext {
        return this.getTypedRuleContext(CorrelationNameContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public KW_LATERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
    }
    public LR_BRACKET__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.LR_BRACKET);
    }
    public LR_BRACKET(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, i);
    }
    public functionName(): FunctionNameContext {
        return this.getTypedRuleContext(FunctionNameContext, 0);
    }
    public functionParam__list(): FunctionParamContext[] {
        return this.getTypedRuleContexts(FunctionParamContext);
    }
    public functionParam(i: number): FunctionParamContext {
        return this.getTypedRuleContext(FunctionParamContext, i);
    }
    public RR_BRACKET__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.RR_BRACKET);
    }
    public RR_BRACKET(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public KW_UNNEST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePrimary;
    }
}


export class SystemTimePeriodContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public KW_OF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OF, 0);
    }
    public dateTimeExpression(): DateTimeExpressionContext {
        return this.getTypedRuleContext(DateTimeExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_systemTimePeriod;
    }
}


export class DateTimeExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dateTimeExpression;
    }
}


export class InlineDataValueClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public valuesDefinition(): ValuesDefinitionContext {
        return this.getTypedRuleContext(ValuesDefinitionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public tableAlias(): TableAliasContext {
        return this.getTypedRuleContext(TableAliasContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_inlineDataValueClause;
    }
}


export class WindoTVFClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public windowTVFExression(): WindowTVFExressionContext {
        return this.getTypedRuleContext(WindowTVFExressionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windoTVFClause;
    }
}


export class WindowTVFExressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public windoTVFName(): WindoTVFNameContext {
        return this.getTypedRuleContext(WindoTVFNameContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public windowTVFParam__list(): WindowTVFParamContext[] {
        return this.getTypedRuleContexts(WindowTVFParamContext);
    }
    public windowTVFParam(i: number): WindowTVFParamContext {
        return this.getTypedRuleContext(WindowTVFParamContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFExression;
    }
}


export class WindoTVFNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windoTVFName;
    }
}


export class WindowTVFParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public timeAttrColumn(): TimeAttrColumnContext {
        return this.getTypedRuleContext(TimeAttrColumnContext, 0);
    }
    public columnDescriptor(): ColumnDescriptorContext {
        return this.getTypedRuleContext(ColumnDescriptorContext, 0);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getTypedRuleContext(TimeIntervalExpressionContext, 0);
    }
    public KW_DATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public DOUBLE_RIGHT_ARROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DOUBLE_RIGHT_ARROW, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public timeIntervalParamName(): TimeIntervalParamNameContext {
        return this.getTypedRuleContext(TimeIntervalParamNameContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowTVFParam;
    }
}


export class TimeIntervalParamNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public KW_SIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
    }
    public KW_STEP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalParamName;
    }
}


export class ColumnDescriptorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnDescriptor;
    }
}


export class JoinConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public uid__list(): UidContext[] {
        return this.getTypedRuleContexts(UidContext);
    }
    public uid(i: number): UidContext {
        return this.getTypedRuleContext(UidContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_joinCondition;
    }
}


export class WhereClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WHERE, 0);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_whereClause;
    }
}


export class GroupByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUP, 0);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    public groupItemDefinition__list(): GroupItemDefinitionContext[] {
        return this.getTypedRuleContexts(GroupItemDefinitionContext);
    }
    public groupItemDefinition(i: number): GroupItemDefinitionContext {
        return this.getTypedRuleContext(GroupItemDefinitionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupByClause;
    }
}


export class GroupItemDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public groupWindowFunction(): GroupWindowFunctionContext {
        return this.getTypedRuleContext(GroupWindowFunctionContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public groupingSetsNotaionName(): GroupingSetsNotaionNameContext {
        return this.getTypedRuleContext(GroupingSetsNotaionNameContext, 0);
    }
    public groupingSets(): GroupingSetsContext {
        return this.getTypedRuleContext(GroupingSetsContext, 0);
    }
    public groupItemDefinition__list(): GroupItemDefinitionContext[] {
        return this.getTypedRuleContexts(GroupItemDefinitionContext);
    }
    public groupItemDefinition(i: number): GroupItemDefinitionContext {
        return this.getTypedRuleContext(GroupItemDefinitionContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupItemDefinition;
    }
}


export class GroupingSetsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    public KW_SETS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SETS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupingSets;
    }
}


export class GroupingSetsNotaionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_CUBE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CUBE, 0);
    }
    public KW_ROLLUP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupingSetsNotaionName;
    }
}


export class GroupWindowFunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public groupWindowFunctionName(): GroupWindowFunctionNameContext {
        return this.getTypedRuleContext(GroupWindowFunctionNameContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public timeAttrColumn(): TimeAttrColumnContext {
        return this.getTypedRuleContext(TimeAttrColumnContext, 0);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getTypedRuleContext(TimeIntervalExpressionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupWindowFunction;
    }
}


export class GroupWindowFunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TUMBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_HOP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_groupWindowFunctionName;
    }
}


export class TimeAttrColumnContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeAttrColumn;
    }
}


export class HavingClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HAVING, 0);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_havingClause;
    }
}


export class WindowClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WINDOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WINDOW, 0);
    }
    public namedWindow__list(): NamedWindowContext[] {
        return this.getTypedRuleContexts(NamedWindowContext);
    }
    public namedWindow(i: number): NamedWindowContext {
        return this.getTypedRuleContext(NamedWindowContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowClause;
    }
}


export class NamedWindowContext extends antlr.ParserRuleContext {
    public _name!: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public windowSpec(): WindowSpecContext {
        return this.getTypedRuleContext(WindowSpecContext, 0);
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_namedWindow;
    }
}


export class WindowSpecContext extends antlr.ParserRuleContext {
    public _name!: ErrorCapturingIdentifierContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public partitionByClause(): PartitionByClauseContext {
        return this.getTypedRuleContext(PartitionByClauseContext, 0);
    }
    public orderByClause(): OrderByClauseContext {
        return this.getTypedRuleContext(OrderByClauseContext, 0);
    }
    public windowFrame(): WindowFrameContext {
        return this.getTypedRuleContext(WindowFrameContext, 0);
    }
    public errorCapturingIdentifier(): ErrorCapturingIdentifierContext {
        return this.getTypedRuleContext(ErrorCapturingIdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowSpec;
    }
}


export class MatchRecognizeClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public patternVariablesDefination(): PatternVariablesDefinationContext {
        return this.getTypedRuleContext(PatternVariablesDefinationContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public partitionByClause(): PartitionByClauseContext {
        return this.getTypedRuleContext(PartitionByClauseContext, 0);
    }
    public orderByClause(): OrderByClauseContext {
        return this.getTypedRuleContext(OrderByClauseContext, 0);
    }
    public measuresClause(): MeasuresClauseContext {
        return this.getTypedRuleContext(MeasuresClauseContext, 0);
    }
    public outputMode(): OutputModeContext {
        return this.getTypedRuleContext(OutputModeContext, 0);
    }
    public afterMatchStrategy(): AfterMatchStrategyContext {
        return this.getTypedRuleContext(AfterMatchStrategyContext, 0);
    }
    public patternDefination(): PatternDefinationContext {
        return this.getTypedRuleContext(PatternDefinationContext, 0);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_matchRecognizeClause;
    }
}


export class OrderByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ORDER, 0);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    public orderItemDefition__list(): OrderItemDefitionContext[] {
        return this.getTypedRuleContexts(OrderItemDefitionContext);
    }
    public orderItemDefition(i: number): OrderItemDefitionContext {
        return this.getTypedRuleContext(OrderItemDefitionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_orderByClause;
    }
}


export class OrderItemDefitionContext extends antlr.ParserRuleContext {
    public _ordering!: Token;
    public _nullOrder!: Token;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public KW_NULLS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public KW_ASC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    public KW_DESC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_orderItemDefition;
    }
}


export class LimitClauseContext extends antlr.ParserRuleContext {
    public _limit!: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIMIT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIMIT, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_limitClause;
    }
}


export class PartitionByClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_partitionByClause;
    }
}


export class QuantifiersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public QUESTION_MARK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.QUESTION_MARK_SIGN, 0);
    }
    public LB_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LB_BRACKET, 0);
    }
    public DIG_LITERAL__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.DIG_LITERAL);
    }
    public DIG_LITERAL(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, i);
    }
    public COMMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, 0);
    }
    public RB_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RB_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_quantifiers;
    }
}


export class MeasuresClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MEASURES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MEASURES, 0);
    }
    public projectItemDefinition__list(): ProjectItemDefinitionContext[] {
        return this.getTypedRuleContexts(ProjectItemDefinitionContext);
    }
    public projectItemDefinition(i: number): ProjectItemDefinitionContext {
        return this.getTypedRuleContext(ProjectItemDefinitionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_measuresClause;
    }
}


export class PatternDefinationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PATTERN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PATTERN, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public patternVariable__list(): PatternVariableContext[] {
        return this.getTypedRuleContexts(PatternVariableContext);
    }
    public patternVariable(i: number): PatternVariableContext {
        return this.getTypedRuleContext(PatternVariableContext, i);
    }
    public withinClause(): WithinClauseContext {
        return this.getTypedRuleContext(WithinClauseContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternDefination;
    }
}


export class PatternVariableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getTypedRuleContext(UnquotedIdentifierContext, 0);
    }
    public quantifiers(): QuantifiersContext {
        return this.getTypedRuleContext(QuantifiersContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternVariable;
    }
}


export class OutputModeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_ROWS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public KW_PER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PER, 0);
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0);
    }
    public KW_ONE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ONE, 0);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_outputMode;
    }
}


export class AfterMatchStrategyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AFTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0);
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0);
    }
    public KW_SKIP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SKIP, 0);
    }
    public KW_PAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public KW_NEXT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NEXT, 0);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getTypedRuleContext(UnquotedIdentifierContext, 0);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_afterMatchStrategy;
    }
}


export class PatternVariablesDefinationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DEFINE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEFINE, 0);
    }
    public projectItemDefinition__list(): ProjectItemDefinitionContext[] {
        return this.getTypedRuleContexts(ProjectItemDefinitionContext);
    }
    public projectItemDefinition(i: number): ProjectItemDefinitionContext {
        return this.getTypedRuleContext(ProjectItemDefinitionContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_patternVariablesDefination;
    }
}


export class WindowFrameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_RANGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RANGE, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getTypedRuleContext(TimeIntervalExpressionContext, 0);
    }
    public frameBound(): FrameBoundContext {
        return this.getTypedRuleContext(FrameBoundContext, 0);
    }
    public KW_ROWS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_windowFrame;
    }
}


export class FrameBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_PRECEDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_frameBound;
    }
}


export class WithinClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITHIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITHIN, 0);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getTypedRuleContext(TimeIntervalExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withinClause;
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_expression;
    }
}


export class BooleanExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_booleanExpression;
    }
    public override copyFrom(ctx: BooleanExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class LogicalNotContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
}
export class PredicatedContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, 0);
    }
    public predicate(): PredicateContext {
        return this.getTypedRuleContext(PredicateContext, 0);
    }
}
export class ExistsContext extends BooleanExpressionContext {
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
}
export class LogicalNestedContext extends BooleanExpressionContext {
    public _kind!: Token;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression(): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, 0);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    public KW_TRUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
}
export class LogicalBinaryContext extends BooleanExpressionContext {
    public _left!: BooleanExpressionContext;
    public _operator!: Token;
    public _right!: BooleanExpressionContext;
    public constructor(ctx: BooleanExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public booleanExpression__list(): BooleanExpressionContext[] {
        return this.getTypedRuleContexts(BooleanExpressionContext);
    }
    public booleanExpression(i: number): BooleanExpressionContext {
        return this.getTypedRuleContext(BooleanExpressionContext, i);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
}


export class PredicateContext extends antlr.ParserRuleContext {
    public _kind!: Token;
    public _lower!: ValueExpressionContext;
    public _upper!: ValueExpressionContext;
    public _pattern!: ValueExpressionContext;
    public _right!: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
    }
    public valueExpression__list(): ValueExpressionContext[] {
        return this.getTypedRuleContexts(ValueExpressionContext);
    }
    public valueExpression(i: number): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, i);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_ASYMMETRIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
    }
    public KW_SYMMETRIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYMMETRIC, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
    }
    public likePredicate(): LikePredicateContext {
        return this.getTypedRuleContext(LikePredicateContext, 0);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    public KW_TRUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public KW_SIMILAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getTypedRuleContext(StringLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_predicate;
    }
}


export class LikePredicateContext extends antlr.ParserRuleContext {
    public _kind!: Token;
    public _quantifier!: Token;
    public _pattern!: ValueExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0);
    }
    public KW_ANY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ANY, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, 0);
    }
    public KW_ESCAPE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ESCAPE, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getTypedRuleContext(StringLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_likePredicate;
    }
}


export class ValueExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_valueExpression;
    }
    public override copyFrom(ctx: ValueExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
}
export class ComparisonContext extends ValueExpressionContext {
    public _left!: ValueExpressionContext;
    public _right!: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public comparisonOperator(): ComparisonOperatorContext {
        return this.getTypedRuleContext(ComparisonOperatorContext, 0);
    }
    public valueExpression__list(): ValueExpressionContext[] {
        return this.getTypedRuleContexts(ValueExpressionContext);
    }
    public valueExpression(i: number): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, i);
    }
}
export class ArithmeticBinaryAlternateContext extends ValueExpressionContext {
    public _left!: ValueExpressionContext;
    public _right!: Token;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, 0);
    }
    public SLASH_TEXT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SLASH_TEXT, 0);
    }
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
    public _left!: ValueExpressionContext;
    public _operator!: Token;
    public _right!: ValueExpressionContext;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression__list(): ValueExpressionContext[] {
        return this.getTypedRuleContexts(ValueExpressionContext);
    }
    public valueExpression(i: number): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, i);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public SLASH_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    public PENCENT_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public DOUBLE_VERTICAL_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DOUBLE_VERTICAL_SIGN, 0);
    }
    public BIT_AND_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    public BIT_XOR_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
}
export class ArithmeticUnaryContext extends ValueExpressionContext {
    public _operator!: Token;
    public constructor(ctx: ValueExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public BIT_NOT_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
}


export class PrimaryExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_primaryExpression;
    }
    public override copyFrom(ctx: PrimaryExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class DereferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        return this.getTypedRuleContext(DereferenceDefinitionContext, 0);
    }
}
export class SimpleCaseContext extends PrimaryExpressionContext {
    public _value!: ExpressionContext;
    public _elseExpression!: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASE, 0);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public whenClause__list(): WhenClauseContext[] {
        return this.getTypedRuleContexts(WhenClauseContext);
    }
    public whenClause(i: number): WhenClauseContext {
        return this.getTypedRuleContext(WhenClauseContext, i);
    }
    public KW_ELSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
}
export class LastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
}
export class StarContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DOT, 0);
    }
}
export class SubscriptContext extends PrimaryExpressionContext {
    public _value!: PrimaryExpressionContext;
    public _index!: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LS_BRACKET, 0);
    }
    public RS_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RS_BRACKET, 0);
    }
    public primaryExpression(): PrimaryExpressionContext {
        return this.getTypedRuleContext(PrimaryExpressionContext, 0);
    }
    public valueExpression(): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, 0);
    }
}
export class SubqueryExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public queryStatement(): QueryStatementContext {
        return this.getTypedRuleContext(QueryStatementContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
}
export class CastContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public columnType(): ColumnTypeContext {
        return this.getTypedRuleContext(ColumnTypeContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
}
export class ConstantDefaultContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public constant(): ConstantContext {
        return this.getTypedRuleContext(ConstantContext, 0);
    }
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
}
export class FunctionCallContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public functionName(): FunctionNameContext {
        return this.getTypedRuleContext(FunctionNameContext, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public functionParam__list(): FunctionParamContext[] {
        return this.getTypedRuleContexts(FunctionParamContext);
    }
    public functionParam(i: number): FunctionParamContext {
        return this.getTypedRuleContext(FunctionParamContext, i);
    }
    public setQuantifier(): SetQuantifierContext {
        return this.getTypedRuleContext(SetQuantifierContext, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
}
export class SearchedCaseContext extends PrimaryExpressionContext {
    public _elseExpression!: ExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASE, 0);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    public whenClause__list(): WhenClauseContext[] {
        return this.getTypedRuleContexts(WhenClauseContext);
    }
    public whenClause(i: number): WhenClauseContext {
        return this.getTypedRuleContext(WhenClauseContext, i);
    }
    public KW_ELSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
}
export class PositionContext extends PrimaryExpressionContext {
    public _substr!: ValueExpressionContext;
    public _str!: ValueExpressionContext;
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public valueExpression__list(): ValueExpressionContext[] {
        return this.getTypedRuleContexts(ValueExpressionContext);
    }
    public valueExpression(i: number): ValueExpressionContext {
        return this.getTypedRuleContext(ValueExpressionContext, i);
    }
}
export class FirstContext extends PrimaryExpressionContext {
    public constructor(ctx: PrimaryExpressionContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_NULLS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
}


export class FunctionNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncName(): ReservedKeywordsUsedAsFuncNameContext {
        return this.getTypedRuleContext(ReservedKeywordsUsedAsFuncNameContext, 0);
    }
    public nonReservedKeywords(): NonReservedKeywordsContext {
        return this.getTypedRuleContext(NonReservedKeywordsContext, 0);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionName;
    }
}


export class FunctionParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public reservedKeywordsUsedAsFuncParam(): ReservedKeywordsUsedAsFuncParamContext {
        return this.getTypedRuleContext(ReservedKeywordsUsedAsFuncParamContext, 0);
    }
    public timeIntervalUnit(): TimeIntervalUnitContext {
        return this.getTypedRuleContext(TimeIntervalUnitContext, 0);
    }
    public timePointUnit(): TimePointUnitContext {
        return this.getTypedRuleContext(TimePointUnitContext, 0);
    }
    public expression(): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_functionParam;
    }
}


export class DereferenceDefinitionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_dereferenceDefinition;
    }
}


export class CorrelationNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_correlationName;
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        return this.getTypedRuleContext(DereferenceDefinitionContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_qualifiedName;
    }
}


export class TimeIntervalExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTERVAL, 0);
    }
    public errorCapturingMultiUnitsInterval(): ErrorCapturingMultiUnitsIntervalContext {
        return this.getTypedRuleContext(ErrorCapturingMultiUnitsIntervalContext, 0);
    }
    public errorCapturingUnitToUnitInterval(): ErrorCapturingUnitToUnitIntervalContext {
        return this.getTypedRuleContext(ErrorCapturingUnitToUnitIntervalContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalExpression;
    }
}


export class ErrorCapturingMultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        return this.getTypedRuleContext(MultiUnitsIntervalContext, 0);
    }
    public unitToUnitInterval(): UnitToUnitIntervalContext {
        return this.getTypedRuleContext(UnitToUnitIntervalContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingMultiUnitsInterval;
    }
}


export class MultiUnitsIntervalContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public intervalValue__list(): IntervalValueContext[] {
        return this.getTypedRuleContexts(IntervalValueContext);
    }
    public intervalValue(i: number): IntervalValueContext {
        return this.getTypedRuleContext(IntervalValueContext, i);
    }
    public timeIntervalUnit__list(): TimeIntervalUnitContext[] {
        return this.getTypedRuleContexts(TimeIntervalUnitContext);
    }
    public timeIntervalUnit(i: number): TimeIntervalUnitContext {
        return this.getTypedRuleContext(TimeIntervalUnitContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_multiUnitsInterval;
    }
}


export class ErrorCapturingUnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _body!: UnitToUnitIntervalContext;
    public _error1!: MultiUnitsIntervalContext;
    public _error2!: UnitToUnitIntervalContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unitToUnitInterval__list(): UnitToUnitIntervalContext[] {
        return this.getTypedRuleContexts(UnitToUnitIntervalContext);
    }
    public unitToUnitInterval(i: number): UnitToUnitIntervalContext {
        return this.getTypedRuleContext(UnitToUnitIntervalContext, i);
    }
    public multiUnitsInterval(): MultiUnitsIntervalContext {
        return this.getTypedRuleContext(MultiUnitsIntervalContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingUnitToUnitInterval;
    }
}


export class UnitToUnitIntervalContext extends antlr.ParserRuleContext {
    public _value!: IntervalValueContext;
    public _from_!: TimeIntervalUnitContext;
    public _to!: TimeIntervalUnitContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public intervalValue(): IntervalValueContext {
        return this.getTypedRuleContext(IntervalValueContext, 0);
    }
    public timeIntervalUnit__list(): TimeIntervalUnitContext[] {
        return this.getTypedRuleContexts(TimeIntervalUnitContext);
    }
    public timeIntervalUnit(i: number): TimeIntervalUnitContext {
        return this.getTypedRuleContext(TimeIntervalUnitContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unitToUnitInterval;
    }
}


export class IntervalValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_intervalValue;
    }
}


export class ColumnAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifierList(): IdentifierListContext {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_columnAlias;
    }
}


export class TableAliasContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public identifierList(): IdentifierListContext {
        return this.getTypedRuleContext(IdentifierListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableAlias;
    }
}


export class ErrorCapturingIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public errorCapturingIdentifierExtra(): ErrorCapturingIdentifierExtraContext {
        return this.getTypedRuleContext(ErrorCapturingIdentifierExtraContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingIdentifier;
    }
}


export class ErrorCapturingIdentifierExtraContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_errorCapturingIdentifierExtra;
    }
    public override copyFrom(ctx: ErrorCapturingIdentifierExtraContext): void {
        super.copyFrom(ctx);
    }
}
export class ErrorIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public KW_MINUS__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.KW_MINUS);
    }
    public KW_MINUS(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUS, i);
    }
    public identifier__list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext);
    }
    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
}
export class RealIdentContext extends ErrorCapturingIdentifierExtraContext {
    public constructor(ctx: ErrorCapturingIdentifierExtraContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
}


export class IdentifierListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public identifierSeq(): IdentifierSeqContext {
        return this.getTypedRuleContext(IdentifierSeqContext, 0);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_identifierList;
    }
}


export class IdentifierSeqContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier__list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext);
    }
    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_identifierSeq;
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_identifier;
    }
    public override copyFrom(ctx: IdentifierContext): void {
        super.copyFrom(ctx);
    }
}
export class QuotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public quotedIdentifier(): QuotedIdentifierContext {
        return this.getTypedRuleContext(QuotedIdentifierContext, 0);
    }
}
export class NonReservedKeywordsAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public nonReservedKeywords(): NonReservedKeywordsContext {
        return this.getTypedRuleContext(NonReservedKeywordsContext, 0);
    }
}
export class UnquotedIdentifierAlternativeContext extends IdentifierContext {
    public constructor(ctx: IdentifierContext) {
        super(ctx.parentCtx as antlr.ParserRuleContext, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public unquotedIdentifier(): UnquotedIdentifierContext {
        return this.getTypedRuleContext(UnquotedIdentifierContext, 0);
    }
}


export class UnquotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public ID_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ID_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unquotedIdentifier;
    }
}


export class QuotedIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_quotedIdentifier;
    }
}


export class WhenClauseContext extends antlr.ParserRuleContext {
    public _condition!: ExpressionContext;
    public _result!: ExpressionContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WHEN, 0);
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_THEN, 0);
    }
    public expression__list(): ExpressionContext[] {
        return this.getTypedRuleContexts(ExpressionContext);
    }
    public expression(i: number): ExpressionContext {
        return this.getTypedRuleContext(ExpressionContext, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_whenClause;
    }
}


export class CatalogPathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_catalogPath;
    }
}


export class DatabasePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_databasePath;
    }
}


export class DatabasePathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_databasePathCreate;
    }
}


export class TablePathCreateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePathCreate;
    }
}


export class TablePathContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public uid(): UidContext {
        return this.getTypedRuleContext(UidContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePath;
    }
}


export class UidContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier__list(): IdentifierContext[] {
        return this.getTypedRuleContexts(IdentifierContext);
    }
    public identifier(i: number): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, i);
    }
    public DOT__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.DOT);
    }
    public DOT(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DOT, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_uid;
    }
}


export class WithOptionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public tablePropertyList(): TablePropertyListContext {
        return this.getTypedRuleContext(TablePropertyListContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_withOption;
    }
}


export class IfNotExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ifNotExists;
    }
}


export class IfExistsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_ifExists;
    }
}


export class TablePropertyListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LR_BRACKET, 0);
    }
    public tableProperty__list(): TablePropertyContext[] {
        return this.getTypedRuleContexts(TablePropertyContext);
    }
    public tableProperty(i: number): TablePropertyContext {
        return this.getTypedRuleContext(TablePropertyContext, i);
    }
    public RR_BRACKET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.RR_BRACKET, 0);
    }
    public COMMA__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.COMMA);
    }
    public COMMA(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.COMMA, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyList;
    }
}


export class TablePropertyContext extends antlr.ParserRuleContext {
    public _key!: TablePropertyKeyContext;
    public _value!: TablePropertyValueContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public tablePropertyKey(): TablePropertyKeyContext {
        return this.getTypedRuleContext(TablePropertyKeyContext, 0);
    }
    public tablePropertyValue(): TablePropertyValueContext {
        return this.getTypedRuleContext(TablePropertyValueContext, 0);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tableProperty;
    }
}


export class TablePropertyKeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getTypedRuleContext(IdentifierContext, 0);
    }
    public dereferenceDefinition(): DereferenceDefinitionContext {
        return this.getTypedRuleContext(DereferenceDefinitionContext, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyKey;
    }
}


export class TablePropertyValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public booleanLiteral(): BooleanLiteralContext {
        return this.getTypedRuleContext(BooleanLiteralContext, 0);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_tablePropertyValue;
    }
}


export class LogicalOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public BIT_AND_OP__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.BIT_AND_OP);
    }
    public BIT_AND_OP(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, i);
    }
    public KW_OR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    public BIT_OR_OP__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.BIT_OR_OP);
    }
    public BIT_OR_OP(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, i);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_logicalOperator;
    }
}


export class ComparisonOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQUAL_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EQUAL_SYMBOL, 0);
    }
    public GREATER_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, 0);
    }
    public LESS_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, 0);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_comparisonOperator;
    }
}


export class BitOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LESS_SYMBOL__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.LESS_SYMBOL);
    }
    public LESS_SYMBOL(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.LESS_SYMBOL, i);
    }
    public GREATER_SYMBOL__list(): antlr.TerminalNode[] {
            return this.getTokens(FlinkSqlParser.GREATER_SYMBOL);
    }
    public GREATER_SYMBOL(i: number): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.GREATER_SYMBOL, i);
    }
    public BIT_AND_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_AND_OP, 0);
    }
    public BIT_XOR_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_XOR_OP, 0);
    }
    public BIT_OR_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_OR_OP, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_bitOperator;
    }
}


export class MathOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public SLASH_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.SLASH_SIGN, 0);
    }
    public PENCENT_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.PENCENT_SIGN, 0);
    }
    public KW_DIV(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public DOUBLE_HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DOUBLE_HYPNEN_SIGN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_mathOperator;
    }
}


export class UnaryOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EXCLAMATION_SYMBOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.EXCLAMATION_SYMBOL, 0);
    }
    public BIT_NOT_OP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_NOT_OP, 0);
    }
    public ADD_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ADD_SIGN, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_unaryOperator;
    }
}


export class ConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timeIntervalExpression(): TimeIntervalExpressionContext {
        return this.getTypedRuleContext(TimeIntervalExpressionContext, 0);
    }
    public timePointLiteral(): TimePointLiteralContext {
        return this.getTypedRuleContext(TimePointLiteralContext, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getTypedRuleContext(StringLiteralContext, 0);
    }
    public decimalLiteral(): DecimalLiteralContext {
        return this.getTypedRuleContext(DecimalLiteralContext, 0);
    }
    public HYPNEN_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.HYPNEN_SIGN, 0);
    }
    public booleanLiteral(): BooleanLiteralContext {
        return this.getTypedRuleContext(BooleanLiteralContext, 0);
    }
    public REAL_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.REAL_LITERAL, 0);
    }
    public BIT_STRING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.BIT_STRING, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_constant;
    }
}


export class TimePointLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public timePointUnit(): TimePointUnitContext {
        return this.getTypedRuleContext(TimePointUnitContext, 0);
    }
    public stringLiteral(): StringLiteralContext {
        return this.getTypedRuleContext(StringLiteralContext, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timePointLiteral;
    }
}


export class StringLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.STRING_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_stringLiteral;
    }
}


export class DecimalLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DIG_LITERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.DIG_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_decimalLiteral;
    }
}


export class BooleanLiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_TRUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_booleanLiteral;
    }
}


export class SetQuantifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_setQuantifier;
    }
}


export class TimePointUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_YEAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_WEEK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_DAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    public KW_HOUR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_SECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timePointUnit;
    }
}


export class TimeIntervalUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    public KW_DECADE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    public KW_YEAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public KW_YEARS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_MONTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    public KW_WEEK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_WEEKS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WEEKS, 0);
    }
    public KW_DAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    public KW_DAYS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_HOURS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    public KW_SECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    public KW_EPOCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EPOCH, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_timeIntervalUnit;
    }
}


export class ReservedKeywordsUsedAsFuncParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LEADING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEADING, 0);
    }
    public KW_TRAILING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRAILING, 0);
    }
    public KW_BOTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BOTH, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public ASTERISK_SIGN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.ASTERISK_SIGN, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncParam;
    }
}


export class ReservedKeywordsUsedAsFuncNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ABS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ABS, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_AVG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AVG, 0);
    }
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    public KW_CEIL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CEIL, 0);
    }
    public KW_COALESCE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
    }
    public KW_COLLECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
    }
    public KW_COUNT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COUNT, 0);
    }
    public KW_DATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    public KW_HOUR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    public KW_LAG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAG, 0);
    }
    public KW_LEFT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    public KW_MAP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_OVERLAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    public KW_POWER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_POWER, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_RANK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RANK, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    public KW_SECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
    }
    public KW_SUM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SUM, 0);
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_TRUNCATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
    }
    public KW_UPPER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UPPER, 0);
    }
    public KW_WEEK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_YEAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywordsUsedAsFuncName;
    }
}


export class ReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ABS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ABS, 0);
    }
    public KW_ALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALL, 0);
    }
    public KW_ALLOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALLOW, 0);
    }
    public KW_ALTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ALTER, 0);
    }
    public KW_AND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AND, 0);
    }
    public KW_ANY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ANY, 0);
    }
    public KW_ARE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ARE, 0);
    }
    public KW_ARRAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ARRAY, 0);
    }
    public KW_AS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AS, 0);
    }
    public KW_ASYMMETRIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ASYMMETRIC, 0);
    }
    public KW_AT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AT, 0);
    }
    public KW_AVG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AVG, 0);
    }
    public KW_BEGIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEGIN, 0);
    }
    public KW_BETWEEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BETWEEN, 0);
    }
    public KW_BIGINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BIGINT, 0);
    }
    public KW_BINARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BINARY, 0);
    }
    public KW_BIT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BIT, 0);
    }
    public KW_BLOB(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BLOB, 0);
    }
    public KW_BOOLEAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BOOLEAN, 0);
    }
    public KW_BOTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BOTH, 0);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BY, 0);
    }
    public KW_CALL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CALL, 0);
    }
    public KW_CALLED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CALLED, 0);
    }
    public KW_CASCADED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASCADED, 0);
    }
    public KW_CASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASE, 0);
    }
    public KW_CAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CAST, 0);
    }
    public KW_CEIL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CEIL, 0);
    }
    public KW_CHAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHAR, 0);
    }
    public KW_CHARACTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHARACTER, 0);
    }
    public KW_CHECK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHECK, 0);
    }
    public KW_CLOB(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CLOB, 0);
    }
    public KW_CLOSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CLOSE, 0);
    }
    public KW_COALESCE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COALESCE, 0);
    }
    public KW_COLLATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLLATE, 0);
    }
    public KW_COLLECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLLECT, 0);
    }
    public KW_COLUMN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLUMN, 0);
    }
    public KW_COMMIT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COMMIT, 0);
    }
    public KW_CONNECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONNECT, 0);
    }
    public KW_CONSTRAINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINT, 0);
    }
    public KW_CONTAINS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONTAINS, 0);
    }
    public KW_CONVERT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONVERT, 0);
    }
    public KW_COUNT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COUNT, 0);
    }
    public KW_CREATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CREATE, 0);
    }
    public KW_CROSS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CROSS, 0);
    }
    public KW_CUBE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CUBE, 0);
    }
    public KW_CURRENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CURRENT, 0);
    }
    public KW_CURSOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CURSOR, 0);
    }
    public KW_CYCLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CYCLE, 0);
    }
    public KW_DATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATE, 0);
    }
    public KW_DATETIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATETIME, 0);
    }
    public KW_DAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DAY, 0);
    }
    public KW_DEC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEC, 0);
    }
    public KW_DECIMAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DECIMAL, 0);
    }
    public KW_DECLARE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DECLARE, 0);
    }
    public KW_DEFAULT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEFAULT, 0);
    }
    public KW_DEFINE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEFINE, 0);
    }
    public KW_DELETE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DELETE, 0);
    }
    public KW_DESCRIBE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESCRIBE, 0);
    }
    public KW_DISTINCT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DISTINCT, 0);
    }
    public KW_DOUBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DOUBLE, 0);
    }
    public KW_DROP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DROP, 0);
    }
    public KW_EACH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EACH, 0);
    }
    public KW_ELSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ELSE, 0);
    }
    public KW_END(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_END, 0);
    }
    public KW_EQUALS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EQUALS, 0);
    }
    public KW_EXCEPT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCEPT, 0);
    }
    public KW_EXECUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXECUTE, 0);
    }
    public KW_EXISTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXISTS, 0);
    }
    public KW_EXPLAIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXPLAIN, 0);
    }
    public KW_EXTERNAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXTERNAL, 0);
    }
    public KW_EXTRACT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXTRACT, 0);
    }
    public KW_FALSE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FALSE, 0);
    }
    public KW_FLOAT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FLOAT, 0);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOR, 0);
    }
    public KW_FROM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FROM, 0);
    }
    public KW_FULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FULL, 0);
    }
    public KW_FUNCTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTION, 0);
    }
    public KW_GLOBAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GLOBAL, 0);
    }
    public KW_GRANT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GRANT, 0);
    }
    public KW_GROUP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUP, 0);
    }
    public KW_GROUPING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUPING, 0);
    }
    public KW_GROUPS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GROUPS, 0);
    }
    public KW_HAVING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HAVING, 0);
    }
    public KW_HOUR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOUR, 0);
    }
    public KW_IMPORT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IMPORT, 0);
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IN, 0);
    }
    public KW_INCLUDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INCLUDING, 0);
    }
    public KW_INNER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INNER, 0);
    }
    public KW_INOUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INOUT, 0);
    }
    public KW_INSERT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INSERT, 0);
    }
    public KW_INT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INT, 0);
    }
    public KW_INTEGER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTEGER, 0);
    }
    public KW_INTERSECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTERSECT, 0);
    }
    public KW_INTERVAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTERVAL, 0);
    }
    public KW_INTO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INTO, 0);
    }
    public KW_IS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IS, 0);
    }
    public KW_JOIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JOIN, 0);
    }
    public KW_LAG(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAG, 0);
    }
    public KW_LANGUAGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LANGUAGE, 0);
    }
    public KW_LATERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LATERAL, 0);
    }
    public KW_LEADING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEADING, 0);
    }
    public KW_LEFT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEFT, 0);
    }
    public KW_LIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIKE, 0);
    }
    public KW_LIMIT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LIMIT, 0);
    }
    public KW_LOCAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LOCAL, 0);
    }
    public KW_MATCH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH, 0);
    }
    public KW_MATCH_RECOGNIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MATCH_RECOGNIZE, 0);
    }
    public KW_MEASURES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MEASURES, 0);
    }
    public KW_MERGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MERGE, 0);
    }
    public KW_METADATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_METADATA, 0);
    }
    public KW_MINUS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUS, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTE, 0);
    }
    public KW_MODIFIES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODIFIES, 0);
    }
    public KW_MODULE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTH, 0);
    }
    public KW_MULTISET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MULTISET, 0);
    }
    public KW_NATURAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NATURAL, 0);
    }
    public KW_NEXT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NEXT, 0);
    }
    public KW_NO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NO, 0);
    }
    public KW_NONE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NONE, 0);
    }
    public KW_NOT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NOT, 0);
    }
    public KW_NULL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULL, 0);
    }
    public KW_NUMERIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NUMERIC, 0);
    }
    public KW_OF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OF, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OFFSET, 0);
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ON, 0);
    }
    public KW_ONE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ONE, 0);
    }
    public KW_OR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OR, 0);
    }
    public KW_ORDER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ORDER, 0);
    }
    public KW_OUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OUT, 0);
    }
    public KW_OUTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OUTER, 0);
    }
    public KW_OVER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVER, 0);
    }
    public KW_OVERLAY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERLAY, 0);
    }
    public KW_PARTITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITION, 0);
    }
    public KW_PATTERN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PATTERN, 0);
    }
    public KW_PER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PER, 0);
    }
    public KW_PERCENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PERCENT, 0);
    }
    public KW_PERIOD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PERIOD, 0);
    }
    public KW_POSITION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_POSITION, 0);
    }
    public KW_PRIMARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIMARY, 0);
    }
    public KW_RANGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RANGE, 0);
    }
    public KW_RANK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RANK, 0);
    }
    public KW_RESET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESET, 0);
    }
    public KW_REVOKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_REVOKE, 0);
    }
    public KW_RIGHT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RIGHT, 0);
    }
    public KW_RLIKE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RLIKE, 0);
    }
    public KW_ROLLBACK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROLLBACK, 0);
    }
    public KW_ROLLUP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROLLUP, 0);
    }
    public KW_ROW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW, 0);
    }
    public KW_ROWS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROWS, 0);
    }
    public KW_SECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECOND, 0);
    }
    public KW_SELECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SELECT, 0);
    }
    public KW_SET(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SET, 0);
    }
    public KW_SHOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SHOW, 0);
    }
    public KW_SIMILAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SIMILAR, 0);
    }
    public KW_SKIP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SKIP, 0);
    }
    public KW_SMALLINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SMALLINT, 0);
    }
    public KW_START(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_START, 0);
    }
    public KW_STATIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATIC, 0);
    }
    public KW_SUBSTRING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SUBSTRING, 0);
    }
    public KW_SUM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SUM, 0);
    }
    public KW_SYSTEM_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_TIME, 0);
    }
    public KW_SYSTEM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM, 0);
    }
    public KW_SYSTEM_USER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SYSTEM_USER, 0);
    }
    public KW_TABLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLE, 0);
    }
    public KW_TABLESAMPLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLESAMPLE, 0);
    }
    public KW_THEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_THEN, 0);
    }
    public KW_TIME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP, 0);
    }
    public KW_TINYINT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TINYINT, 0);
    }
    public KW_TO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TO, 0);
    }
    public KW_TRUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUE, 0);
    }
    public KW_TRUNCATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRUNCATE, 0);
    }
    public KW_UNION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNION, 0);
    }
    public KW_UNIQUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNIQUE, 0);
    }
    public KW_UNKNOWN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNKNOWN, 0);
    }
    public KW_UNNEST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNNEST, 0);
    }
    public KW_UPPER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UPPER, 0);
    }
    public KW_UPSERT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UPSERT, 0);
    }
    public KW_USER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USER, 0);
    }
    public KW_USING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USING, 0);
    }
    public KW_VALUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUE, 0);
    }
    public KW_VALUES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VALUES, 0);
    }
    public KW_VARBINARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VARBINARY, 0);
    }
    public KW_VARCHAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VARCHAR, 0);
    }
    public KW_WHEN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WHEN, 0);
    }
    public KW_WHERE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WHERE, 0);
    }
    public KW_WINDOW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WINDOW, 0);
    }
    public KW_WITH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITH, 0);
    }
    public KW_WITHIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITHIN, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WITHOUT, 0);
    }
    public KW_YEAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEAR, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_reservedKeywords;
    }
}


export class NonReservedKeywordsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADD, 0);
    }
    public KW_ADMIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ADMIN, 0);
    }
    public KW_AFTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_AFTER, 0);
    }
    public KW_ANALYZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ANALYZE, 0);
    }
    public KW_ASC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ASC, 0);
    }
    public KW_BEFORE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BEFORE, 0);
    }
    public KW_BYTES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_BYTES, 0);
    }
    public KW_CASCADE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CASCADE, 0);
    }
    public KW_CATALOGS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CATALOGS, 0);
    }
    public KW_CENTURY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CENTURY, 0);
    }
    public KW_CHAIN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHAIN, 0);
    }
    public KW_CHANGELOG_MODE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHANGELOG_MODE, 0);
    }
    public KW_CHARACTERS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CHARACTERS, 0);
    }
    public KW_COMMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COMMENT, 0);
    }
    public KW_COMPACT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COMPACT, 0);
    }
    public KW_COLUMNS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_COLUMNS, 0);
    }
    public KW_CONSTRAINTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRAINTS, 0);
    }
    public KW_CONSTRUCTOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CONSTRUCTOR, 0);
    }
    public KW_CUMULATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_CUMULATE, 0);
    }
    public KW_DATA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATA, 0);
    }
    public KW_DATABASE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASE, 0);
    }
    public KW_DATABASES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DATABASES, 0);
    }
    public KW_DAYS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DAYS, 0);
    }
    public KW_DECADE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DECADE, 0);
    }
    public KW_DEFINED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DEFINED, 0);
    }
    public KW_DESC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESC, 0);
    }
    public KW_DESCRIPTOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DESCRIPTOR, 0);
    }
    public KW_DIV(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_DIV, 0);
    }
    public KW_ENCODING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENCODING, 0);
    }
    public KW_ENFORCED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENFORCED, 0);
    }
    public KW_ENGINE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ENGINE, 0);
    }
    public KW_ERROR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ERROR, 0);
    }
    public KW_ESTIMATED_COST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ESTIMATED_COST, 0);
    }
    public KW_EXCEPTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCEPTION, 0);
    }
    public KW_EXCLUDE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCLUDE, 0);
    }
    public KW_EXCLUDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXCLUDING, 0);
    }
    public KW_EXTENDED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_EXTENDED, 0);
    }
    public KW_FILE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FILE, 0);
    }
    public KW_FINAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FINAL, 0);
    }
    public KW_FIRST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FIRST, 0);
    }
    public KW_FOLLOWING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOLLOWING, 0);
    }
    public KW_FORMAT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FORMAT, 0);
    }
    public KW_FORTRAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FORTRAN, 0);
    }
    public KW_FOUND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FOUND, 0);
    }
    public KW_FRAC_SECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FRAC_SECOND, 0);
    }
    public KW_FUNCTIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_FUNCTIONS, 0);
    }
    public KW_GENERAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GENERAL, 0);
    }
    public KW_GENERATED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GENERATED, 0);
    }
    public KW_GO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GO, 0);
    }
    public KW_GOTO(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GOTO, 0);
    }
    public KW_GRANTED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_GRANTED, 0);
    }
    public KW_HOP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOP, 0);
    }
    public KW_HOURS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_HOURS, 0);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IF, 0);
    }
    public KW_IGNORE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_IGNORE, 0);
    }
    public KW_INCREMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INCREMENT, 0);
    }
    public KW_INPUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INPUT, 0);
    }
    public KW_INVOKER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_INVOKER, 0);
    }
    public KW_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAR, 0);
    }
    public KW_JARS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JARS, 0);
    }
    public KW_JAVA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JAVA, 0);
    }
    public KW_JSON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JSON, 0);
    }
    public KW_JSON_EXECUTION_PLAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_JSON_EXECUTION_PLAN, 0);
    }
    public KW_KEY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY, 0);
    }
    public KW_KEY_MEMBER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY_MEMBER, 0);
    }
    public KW_KEY_TYPE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_KEY_TYPE, 0);
    }
    public KW_LABEL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LABEL, 0);
    }
    public KW_LAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LAST, 0);
    }
    public KW_LENGTH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LENGTH, 0);
    }
    public KW_LEVEL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LEVEL, 0);
    }
    public KW_LOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_LOAD, 0);
    }
    public KW_MAP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MAP, 0);
    }
    public KW_MICROSECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MICROSECOND, 0);
    }
    public KW_MILLENNIUM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MILLENNIUM, 0);
    }
    public KW_MILLISECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MILLISECOND, 0);
    }
    public KW_MINUTES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINUTES, 0);
    }
    public KW_MINVALUE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MINVALUE, 0);
    }
    public KW_MODIFY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODIFY, 0);
    }
    public KW_MODULES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MODULES, 0);
    }
    public KW_MONTHS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_MONTHS, 0);
    }
    public KW_NANOSECOND(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NANOSECOND, 0);
    }
    public KW_NULLS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NULLS, 0);
    }
    public KW_NUMBER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_NUMBER, 0);
    }
    public KW_OPTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OPTION, 0);
    }
    public KW_OPTIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OPTIONS, 0);
    }
    public KW_ORDERING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ORDERING, 0);
    }
    public KW_OUTPUT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OUTPUT, 0);
    }
    public KW_OVERWRITE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERWRITE, 0);
    }
    public KW_OVERWRITING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_OVERWRITING, 0);
    }
    public KW_PARTITIONED(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITIONED, 0);
    }
    public KW_PARTITIONS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PARTITIONS, 0);
    }
    public KW_PASSING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PASSING, 0);
    }
    public KW_PAST(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PAST, 0);
    }
    public KW_PATH(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PATH, 0);
    }
    public KW_PLACING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PLACING, 0);
    }
    public KW_PLAN(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PLAN, 0);
    }
    public KW_PRECEDING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRECEDING, 0);
    }
    public KW_PRESERVE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRESERVE, 0);
    }
    public KW_PRIOR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIOR, 0);
    }
    public KW_PRIVILEGES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PRIVILEGES, 0);
    }
    public KW_PUBLIC(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PUBLIC, 0);
    }
    public KW_PYTHON(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON, 0);
    }
    public KW_PYTHON_FILES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_FILES, 0);
    }
    public KW_PYTHON_REQUIREMENTS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_REQUIREMENTS, 0);
    }
    public KW_PYTHON_DEPENDENCIES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_DEPENDENCIES, 0);
    }
    public KW_PYTHON_JAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_JAR, 0);
    }
    public KW_PYTHON_ARCHIVES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_ARCHIVES, 0);
    }
    public KW_PYTHON_PARAMETER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_PYTHON_PARAMETER, 0);
    }
    public KW_QUARTER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_QUARTER, 0);
    }
    public KW_RAW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RAW, 0);
    }
    public KW_READ(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_READ, 0);
    }
    public KW_RELATIVE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RELATIVE, 0);
    }
    public KW_REMOVE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_REMOVE, 0);
    }
    public KW_RENAME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RENAME, 0);
    }
    public KW_REPLACE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_REPLACE, 0);
    }
    public KW_RESPECT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESPECT, 0);
    }
    public KW_RESTART(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESTART, 0);
    }
    public KW_RESTRICT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_RESTRICT, 0);
    }
    public KW_ROLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROLE, 0);
    }
    public KW_ROW_COUNT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ROW_COUNT, 0);
    }
    public KW_SCALA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCALA, 0);
    }
    public KW_SCALAR(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCALAR, 0);
    }
    public KW_SCALE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCALE, 0);
    }
    public KW_SCHEMA(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SCHEMA, 0);
    }
    public KW_SECONDS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECONDS, 0);
    }
    public KW_SECTION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECTION, 0);
    }
    public KW_SECURITY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SECURITY, 0);
    }
    public KW_SELF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SELF, 0);
    }
    public KW_SERVER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SERVER, 0);
    }
    public KW_SERVER_NAME(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SERVER_NAME, 0);
    }
    public KW_SESSION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SESSION, 0);
    }
    public KW_SETS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SETS, 0);
    }
    public KW_SIMPLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SIMPLE, 0);
    }
    public KW_SIZE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SIZE, 0);
    }
    public KW_SLIDE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SLIDE, 0);
    }
    public KW_SOURCE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SOURCE, 0);
    }
    public KW_SPACE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_SPACE, 0);
    }
    public KW_STATE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATE, 0);
    }
    public KW_STATEMENT(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STATEMENT, 0);
    }
    public KW_STEP(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STEP, 0);
    }
    public KW_STRING(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STRING, 0);
    }
    public KW_STRUCTURE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STRUCTURE, 0);
    }
    public KW_STYLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_STYLE, 0);
    }
    public KW_TABLES(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TABLES, 0);
    }
    public KW_TEMPORARY(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TEMPORARY, 0);
    }
    public KW_TIMECOL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMECOL, 0);
    }
    public KW_TIMESTAMP_LTZ(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMP_LTZ, 0);
    }
    public KW_TIMESTAMPADD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMPADD, 0);
    }
    public KW_TIMESTAMPDIFF(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TIMESTAMPDIFF, 0);
    }
    public KW_TRANSFORM(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TRANSFORM, 0);
    }
    public KW_TUMBLE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TUMBLE, 0);
    }
    public KW_TYPE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_TYPE, 0);
    }
    public KW_UNDER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNDER, 0);
    }
    public KW_UNLOAD(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UNLOAD, 0);
    }
    public KW_USAGE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USAGE, 0);
    }
    public KW_USE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_USE, 0);
    }
    public KW_UTF16(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UTF16, 0);
    }
    public KW_UTF32(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UTF32, 0);
    }
    public KW_UTF8(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_UTF8, 0);
    }
    public KW_VERSION(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VERSION, 0);
    }
    public KW_VIEW(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEW, 0);
    }
    public KW_VIEWS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIEWS, 0);
    }
    public KW_VIRTUAL(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_VIRTUAL, 0);
    }
    public KW_WATERMARK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WATERMARK, 0);
    }
    public KW_WATERMARKS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WATERMARKS, 0);
    }
    public KW_WEEK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WEEK, 0);
    }
    public KW_WORK(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WORK, 0);
    }
    public KW_WRAPPER(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_WRAPPER, 0);
    }
    public KW_YEARS(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_YEARS, 0);
    }
    public KW_ZONE(): antlr.TerminalNode {
        return this.getToken(FlinkSqlParser.KW_ZONE, 0);
    }
    public override get ruleIndex(): number {
        return FlinkSqlParser.RULE_nonReservedKeywords;
    }
}
