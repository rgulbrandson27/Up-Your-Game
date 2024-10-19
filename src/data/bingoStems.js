/*
BINGO STEMS (ordered by probability)
1-10       TISANE, SATIRE, RETINA, ARSINE, SENIOR, SANTER, TONIES, ORATES, REASON, SINTER
11-20      TONERS, EASTER, RAISED, RAINED, LESION, TORIES, TOILES, SERIAL, NAILER, ALIENS
21-30      I-ON-SEA, SALTIE, RETAIL, RETIES, ENTIRE, SADTIE, ATONIES, SOLATE, ORALES, I-SAT-ON
31-40      SAINED, DORIES, GAINER, LISTER, ENTERES, SALTER, TIRADE, SILENT, DIALER, LADIES
41-50      DATERS, SNIDER, ADORES, SERINE, SEEN-IT, LATENS, STANED, TENAIL, TIENDS, DESIRE

FORMAT {
    id: 1,
    listName: "", 
    words: [],
    mnuemonic: "",
    length: 7        //refers to number of boxes needed in word display
}
------------------------------------------------------------
*/

const sixLetterStems = [
{
    id: 1,
    listName: "TISANE",
    words: 
    // ["ENTASIA", "TAENIAS", "BANTIES", "BASINET", "ACETINS", "CINEAST", "DESTAIN", "DETAINS", "INSTEAD", "NIDATES", "SAINTED", "SATINED", "STAINED", "ETESIAN", "FAINEST", "EASTING", "EATINGS", "GENISTA", "INGATES", "INGESTA", "SEATING", "TAGINES", "TEASING", "SHEITAN", "STHENIA", "ISATINE", "TAJINES", "INTAKES", "ELASTIN", "ENTAILS", "NAILSET", "SALIENT", "SALTINE", "SLAINTE", "TENAILS", "ETAMINS", "INMATES", "TAMEINS", "INANEST", "STANINE", "ATONIES", "PANTIES", "PATINES", "SAPIENT", "SPINATE", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "ENTASIS", "NASTIES", "SEITANS", "SESTINA", "TANSIES", "TISANES", "INSTATE", "SATINET", "AUNTIES", "SINUATE", "NAIVEST", "NATIVES", "VAINEST", "TAWNIES", "WANIEST", "ANTISEX", "SEXTAIN", "ZANIEST", "ZEATINS"],
     // SHORT LIST TO USE FOR TESTING MASTERED STATE
     ["ENTASIA", "BANTIES"],
    mnuemonic: "TUCKSHOP WIZ FIXES MEDICINAL BEVERAGE JUICE",
    length: 7
    },

{
    id: 2,
    listName: "SATIRE",
    words: ["ARISTAE", "ASTERIA", "ATRESIA", "BAITERS", "BARITES", "REBAITS", "TERBIAS", "ATRESIC", "CRISTAE", "RACIEST", "STEARIC", "ARIDEST", "ASTRIDE", "DIASTER", "DISRATE", "STAIDER", "TARDIES", "TIRADES", "AERIEST", "SERIATE", "FAIREST", "AIGRETS", "GAITERS", "SEAGIRT", "STAGIER", "TRIAGES", "HASTIER", "AIRIEST", "REALIST", "RETAILS", "SALTIER", "SALTIRE", "SLATIER", "TAILERS", "IMARETS", "MAESTRI", "MISRATE", "SMARTIE", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "PARTIES", "PASTIER", "PIASTER", "PIASTRE", "PIRATES", "PRATIES", "TRAIPSE", "ARTSIER", "TARRIES", "TARSIER", "ARTSIES", "SATIRES", "ARTIEST", "ARTISTE", "ATTIRES", "IRATEST", "RATITES", "STRIATE", "TASTIER", "RAVIEST", "VASTIER", "VERITAS", "WAISTER", "WAITERS", "WARIEST", "WASTRIE"],
    mnuemonic: "BAD SPEECH REVIEW FLAMING WIT",
    length: 7
},


{
    id: 3,
    listName: "RETINA",
    words: ["CERATIN", "CERTAIN", "CREATIN", "TACRINE", "ANTIRED", "DETRAIN", "TRAINED", "ARENITE", "RETINAE", "TRAINEE", "FAINTER", "GRANITE", "GRATINE", "INGRATE", "TANGIER", "TEARING", "HAIRNET", "INEARTH", "THERIAN", "INERTIA", "KERATIN", "LATRINE", "RATLINE", "RELIANT", "RETINAL", "TRENAIL", "MINARET", "RAIMENT", "ENTRAIN", "TRANNIE", "PAINTER", "PERTAIN", "REPAINT", "RETRAIN", "TERRAIN", "TRAINER", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "INTREAT", "ITERANT", "NATTIER", "NITRATE", "TERTIAN", "RUINATE", "TAURINE", "URANITE", "URINATE", "TAWNIER", "TINWARE"],    
    mnuemonic: "SMUG WIFE KEEPS THE CHILDREN",
    length: 7
},
{
    id: 4,
    listName: "ARSINE",
    words: ["ARCSINE", "ARSENIC", "CARNIES", "RANDIES", "SANDIER", "SARDINE", "INFARES", "EARINGS", "ERASING", "GAINERS", "REAGINS", "REGAINS", "REGINAS", "SEARING", "SERINGA", "HERNIAS", "NEARISH", "SENARII", "INJERAS", "SNAKIER", "ALINERS", "NAILERS", "RENAILS", "MARINES", "REMAINS", "SEMINAR", "INSANER", "INSNARE", "ERASION", "PANIERS", "RAPINES", "SIERRAN", "ARSINES", "SARNIES", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "RAVINES"],    
    mnuemonic: "POISON MIGHT KILL OFF THRIVING CHILD",
    length: 7
},
{
    id: 5,
    listName: "SENIOR",
    words: ["ERASION", "COINERS", "CRONIES", "ORCEINS", "RECOINS", "DINEROS", "INDORSE", "ORDINES", "ROSINED", "SORDINE", "ERINGOS", "IGNORES", "REGIONS", "SIGNORE", "HEROINS", "INSHORE", "IONISER", "IRONIES", "IRONISE", "NOISIER", "JOINERS", "REJOINS", "NEROLIS", "MERINOS", "EROSION", "ORPINES", "IRONERS", "SENIORS", "SONSIER", "NORITES", "OESTRIN", "ORIENTS", "STONIER", "URINOSE", "ENVIROS", "RENVOIS", "VERSION", "SNOWIER"],
    mnuemonic: "OLD MVP JOGS WITH A CRUTCH",
    length: 7
},

{
    id: 6,
    listName: "SANTER",
    words: ["SANTERA", "BANTERS", "CANTERS", "CARNETS", "NECTARS", "RECANTS", "SCANTER", "TANRECS", "TRANCES", "DARNEST", "STANDER", "EARNEST", "EASTERN", "NEAREST", "STERANE", "ARGENTS", "GARNETS", "STRANGE", "ANTHERS", "THENARS", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "RANKEST", "TANKERS", "ANTLERS", "RENTALS", "SALTERN", "STERNAL", "MARTENS", "SARMENT", "SMARTEN", "TANNERS", "ATONERS", "SANTERO", "SENATOR", "TREASON", "ARPENTS", "ENTRAPS", "PARENTS", "PASTERN", "TREPANS", "ERRANTS", "RANTERS", "SARSNET", "NATTERS", "RATTENS", "NATURES", "SAUNTER", "SERVANT", "TAVERNS", "VERSANT", "WANTERS"],    
    mnuemonic: "MAN WORKING OUT DEVELOPS THICK BONE",
    length: 7
},
{
    id: 7,
    listName: "TONIES",
    words: ["ATONIES", "BONIEST", "NOTICES", "SECTION", "ETHIONS", "HISTONE", "INOSITE", "ENTOILS", "ONLIEST", "MESTINO", "MOISTEN", "MONTIES", "SENTIMO", "INTONES", "TENSION", "ISOTONE", "TOONIES", "PINTOES", "POINTES", "NORITES", "OESTRIN", "ORIENTS", "STONIER", "NOSIEST", "TONIEST", "TOWNIES", "TOXINES"],    
    mnuemonic: "IS TO MARCH WITH PLAIN BOOT WAX",
    length: 7
},
{
    id: 8,
    listName: "ORATES",
    words: ["AEROSAT", "BOASTER", "BOATERS", "BORATES", "REBATOS", "SORBATE", "COASTER", "COATERS", "RECOATS", "ROASTED", "TORRSADE", "ROSEATE", "GAROTES", "ORGEATS", "STORAGE", "TOERAGS", "EARSHOT", "OLESTRA", "MAESTRO", "OVERTAS", "ATONERS", "SANTERO", "SENATOR", "TREASON", "ESPARTO", "PROTEAS", "SEAPORT", "ROASTER", "OSETRAS", "OSSETRA", "ROTATES", "TOASTER"],    
    mnuemonic: "ADAMENT PREACHERS CALLED BRAGGARTS", 
    length: 7
},{
    id: 9,
    listName: "REASON",
    words: ["BORANES", "CANOERS", "COARSEN", "CORNEAS", "NARCOSE", "ARENOSE", "ONAGERS", "ORANGES", "HOARSEN", "SENHORA", "ERASION", "LOANERS", "RELOANS", "ENAMORS", "MOANERS", "OARSMEN", "PERSONA", "SERRANO", "REASONS", "SENORAS", "ATONERS", "SANTERO", "SENATOR", "TREASON", "ARENOUS"],    
    mnuemonic: "BIG LECTURES TRIUMPH", 
    length: 7
},{
    id: 10,
    listName: "INSERT",
    words: ["ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "CISTERN", "CRETINS", "TINDERS", "ENTIRES", "ENTRIES", "RETINES", "TRIENES", "SNIFTER", "RESTING", "STINGER", "HINTERS", "REKNITS", "STINKER", "TINKERS", "LINTERS", "MINSTER", "MINTERS", "REMINTS", "INTERNS", "TINNERS", "NORITES", "OESTRIN", "ORIENTS", "STONIER", "PTERINS", "ESTRINS", "INSERTS", "SINTERS", "STRINES", "RETINTS", "STINTER", "TINTERS", "NUTSIER", "TRIUNES", "UNITERS", "INVERTS", "STRIVEN", "TWINERS", "WINTERS"],   
    mnuemonic: "WOMAN SHOVED STUCK FLAGPOLE",
    length: 7
},{
    id: 11,
    listName: "TONERS",
    words: ["ATONERS", "SANTERO", "SENATOR", "TREASON", "SORBENT", "CORNETS", "CRETONS", "RODENTS", "SNORTED", "ESTRONE", "FRONTES", "TONGERS", "HORNETS", "SHORTEN", "THRONES", "NORITES", "OESTRIN", "ORIENTS", "STONIER", "REKNOTS", "STONKER", "LORNEST", "MENTORS", "MONSTER", "TONNERS", "ENROOTS", "POSTERN", "PRONEST", "SNORTER", "NESTORS", "STONERS", "TENSORS", "STENTOR", "TENOURS", "TONSURE"],    
    mnuemonic: "HARD PECKS OF BIG TOUGHMAN", 
    length: 7
},
{
    id: 12,
    listName: "EASTER",
    words: ["AERATES", "BEATERS", "BERATES", "REBATES", "CERATES", "CREATES", "ECARTES", "DEAREST", "DERATES", "REDATES", "SEDATOR", "AFREETS", "FEASTER", "ERGATES", "RESTAGE", "AETHERS", "HEATERS", "REHEATS", "AERIEST", "SERIATE", "RETAKES", "ELATERS", "REALIST", "RELATES", "RESLATE", "STEALER", "REMATES", "RETEAMS", "STEAMER", "EARNEST", "EASTERN", "NEAREST", "STERANE", "ROSEATE", "EPATERS", "REPEATS", "RETAPES", "RETEARS", "SERRATE", "TEARERS", "EASTERS", "RESEATS", "SEAREST", "SEATERS", "TEASERS", "TESSERA", "ESTREAT", "RESTATE", "RETASTE", "AUSTERE", "SWEATER", "RETAXES"],    
    mnuemonic: "CHRIST BACK UP; GOD WILL FIX MAN", 
    length: 7
},
{
    id: 13,
    listName: "RAISED",
    words: ["ABIDERS", "BRAISED", "DARBIES", "SEABIRD", "SIDEBAR", "RADICES", "SIDECAR", "DEARIES", "READIES", "FARSIDE", "AIRSHED", "DASHIER", "DEHAIRS", "HARDIES", "SHADIER", "AIRSIDE", "DAIRIES", "DIARIES", "DAIKERS", "DARKIES", "DERAILS", "DIALERS", "REDIALS", "ADMIRES", "MISREAD", "SEDARIM", "SIDEARM", "RANDIES", "SANDIER", "SARDINE", "RADIOES", "ROADIES", "ASPIRED", "DESPAIR", "DIAPERS", "PRAISED", "RAIDERS", "ARIDEST", "ASTRIDE", "DIASTER", "DISRATE", "STAIDER", "TARDIES", "TIRADES", "RESIDUA", "ADVISER", "RADIXES"],    
    mnuemonic: "HELP FIX TRUCK BOMB? NEVER!",
    length: 7
},
{
    id: 14,
    listName: "RAINED",
    words: ["ARANEID", "BANDIER", "BRAINED", "CAIRNED", "DANCIER", "DANDIER", "DRAINED", "DERAIGN", "GRADINE", "GRAINED", "READING", "HANDIER", "DENARII", "INARMED", "NARDINE", "ANEROID", "PARDINE", "DRAINER", "RANDIER", "RANDIES", "SANDIER", "SARDINE", "ANTIRED", "DETRAIN", "TRAINED", "UNAIRED", "URANIDE", "INVADER", "RAVINED"],
    mnuemonic: "DAMP RAINS BROUGHT HAVOC",
    length: 7
},{
    id: 15,
    listName: "LESION",
    words: ["ANISOLE", "CINEOLS", "INCLOSE", "INDOLES", "OLEINES", "OLEFINS", "ELOIGNS", "LEGIONS", "LINGOES", "LONGIES", "ELISION", "ISOLINE", "LIONISE", "SONLIKE", "NIELLOS", "LOMEINS", "LOONIES", "EPSILON", "PINOLES", "NEROLIS", "INSOLES", "LESIONS", "LIONESS", "ENTOILS", "ONLIEST", "ELUSION"],    
    mnuemonic: "TUMOR? PAGE SKILLFUL DOCTOR",
    length: 7
},
{
    id: 16,
    listName: "TORIES",
    words: ["ORBIEST", "EROTICS", "EDITORS", "SORTIED", "STEROID", "STORIED", "TIRODES", "FORTIES", "GOITERS", "GOITRES", "GORIEST", "HERIOTS", "HOISTER", "SHORTIE", "ESTRIOL", "LOITERS", "TOILERS", "EROTISM", "MOISTER", "MORTISE", "TRISOME", "NORITES", "OESTRIN", "ORIENTS", "STONIER", "SOOTIER", "PROSTIE", "REPOSIT", "RIPOSTE", "ROPIEST", "RIOTERS", "ROISTER", "ROSIEST", "SORITES", "SORTIES", "STORIES", "TRIOSES", "STOURIE"],
    mnuemonic: "BUNCH OF OLD GRUMPS",
    length: 7
},
{
    id: 17,
    listName: "TOILES",
    words: ["ISOLATE", "CITOLES", "ETOILES", "LOGIEST", "EOLITHS", "HOLIEST", "HOSTILE", "LITHOES", "IOLITES", "OILIEST", "MOTILES", "ENTOILS", "ONLIEST", "OOLITES", "OSTIOLE", "STOOLIE", "PIOLETS", "PISTOLE", "ESTRIOL", "LOITERS", "TOILERS", "LITOTES", "TOILETS", "OUTLIES", "LOVIEST", "VIOLETS", "OWLIEST", "ZLOTIES"],    
    mnuemonic: "PREZ GOT CAUGHT HAVING MONICA",
    length: 7
},

{
    id: 18,
    listName: "SERIAL",
    words: ["AERIALS", "BAILERS", "CLARIES", "ECLAIRS", "SCALIER", "DERAILS", "DIALERS", "REDIALS", "REALISE", "GLAIRES", "HAILERS", "HALIERS", "SHALIER", "JAILERS", "RALLIES", "SALLIER", "MAILERS", "REALISM", "REMAILS", "ALINERS", "NAILERS", "RENAILS", "PALSIER", "RAILERS", "AIRLESS", "RESAILS", "SAILERS", "SERAILS", "SERIALS", "REALIST", "RETAILS", "SALTIER", "SALTIRE", "SLATIER", "TAILERS", "REVISAL", "WAILERS"],
    mnuemonic: "A CHANGEABLE TV DRAMA (JAWS?)",
    length: 7
},
{
    id: 19,
    listName: "NAILER",
    words: ["CARLINE", "ALIENER", "ALIGNER", "ENGRAIL", "NARGILE", "REALIGN", "REGINAL", "HERNIAL", "INHALER", "AIRLINE", "LANKIER", "RALLINE", "MANLIER", "MARLINE", "MINERAL", "RAILMEN", "AILERON", "ALIENOR", "PLAINER", "PRALINE", "ALINERS", "NAILERS", "RENAILS", "LATRINE", "RATLINE", "RELIANT", "RETINAL", "TRENAIL", "RAVELIN", "RELAXIN", "INLAYER"],    
    mnuemonic: "VEXES SPOCK MIGHTILY",
    length: 7
},
{
    id: 20,
    listName: "ALIENS",
    words: ["LESBIAN", "INLACES", "SANICLE", "SCALENI", "DENIALS", "SNAILED", "FINALES", "LEASING", "LINAGES", "SEALING", "INHALES", "ALKINES", "AINSELL", "MALINES", "MENIALS", "SEMINAL", "ANISOLE", "ALPINES", "PINEALS", "SPANIEL", "SPLENIA", "ALINERS", "NAILERS", "RENAILS", "SALINES", "SILANES", "ELASTIN", "ENTAILS", "NAILSET", "SALIENT", "SALTINE", "SLAINTE", "TENAILS", "INSULAE", "INULASE", "ALEVINS", "VALINES", "LAWINES", "ALEXINS", "ELYSIAN"],    
    mnuemonic: "SPOCK'S VW BUG HOLD TO FORM",
    length: 7
},
{
    id: 21,
    listName: "IONSEA",
    words: [],    
    mnuemonic: "MIMIC ATOP GRAVEL",
    length: 7
},
{
    id: 22,
    listName: "SALTIE",
    words: [],    
    mnuemonic: "FIZZ BLOCKS DRIVING SHIP",
    length: 7
},
{
    id: 23,
    listName: "RETAIL",
    words: [],    
    mnuemonic: "CHUMPY LENDER TURNS BUCKS",
    length: 7
},
{
    id: 24,
    listName: "RETIES",
    words: [],    
    mnuemonic: "SHCACKLED MAZE PREVENTS ESCAPE",
    length: 7
},
{
    id: 25,
    listName: "ENTIRE",
    words: [],    
    mnuemonic: "IN GREAT CHUNKS",
    length: 7
}
];

export default sixLetterStems;