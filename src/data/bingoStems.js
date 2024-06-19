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
    words: [
        "ENTASIA", "TAENIAS", "BANTIES", "BASINET", "ACETINS", "CINEAST", "DESTAIN", "DETAINS", "INSTEAD", "NIDATES", "SAINTED", "SATINED", "STAINED", "ETESIAN", "FAINEST", "EASTING", "EATINGS", "GENISTA", "INGATES", "INGESTA", "SEATING", "TAGINES", "TEASING", "SHEITAN", "STHENIA", "ISATINE", "TAJINES", "INTAKES", "ELASTIN", "ENTAILS", "NAILSET", "SALIENT", "SALTINE", "SLAINTE", "TENAILS", "ETAMINS", "INMATES", "TAMEINS", "INANEST", "STANINE", "ATONIES", "PANTIES", "PATINES", "SAPIENT", "SPINATE", "ANESTRI", "ANTSIER", "NASTIER", "RATINES", "RETAINS", "RETINAS", "RETSINA", "STAINER", "STEARIN", "ENTASIS", "NASTIES", "SEITANS", "SESTINA", "TANSIES", "TISANES", "INSTATE", "SATINET", "AUNTIES", "SINUATE", "NAIVEST", "NATIVES", "VAINEST", "TAWNIES", "WANIEST", "ANTISEX", "SEXTAIN", "ZANIEST", "ZEATINS"],
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
},{
    id: 7,
    listName: "TONIES",
    words: [],    
    mnuemonic: "IS TO MARCH WITH PLAIN BOOT WAX"
},
{
    id: 8,
    listName: "ORATES",
    words: [],    
    mnuemonic: "ADAMENT PREACHERS CALLED BRAGGARTS"
},{
    id: 9,
    listName: "REASON",
    words: [],    
    mnuemonic: "BIG LECTURES TRIUMPH"
},{
    id: 10,
    listName: "INSERT",
    words: [],    
    mnuemonic: "WOMAN SHOVED STUCK FLAGPOLE"
},{
    id: 11,
    listName: "TONERS",
    words: [],    
    mnuemonic: "HARD PECKS OF BIG TOUGHMAN"
},
{
    id: 12,
    listName: "EASTER",
    words: [],    
    mnuemonic: "CHRIST BACK UP; GOD WILL FIX MAN"
},{
    id: 13,
    listName: "AIDERS",
    words: [],    
    mnuemonic: "HELP FIX TRUCK BOMB? NEVER!"
},{
    id: 14,
    listName: "RAINED",
    words: [],    
    mnuemonic: "DAMP RAINS BROUGHT HAVOC"
},{
    id: 15,
    listName: "LESION",
    words: [],    
    mnuemonic: "TUMOR? PAGE SKILLFUL DOCTOR"
},
{
    id: 16,
    listName: "TORIES",
    words: [],
    mnuemonic: "BUNCH OF OLD GRUMPS"
},
{
    id: 17,
    listName: "TOILES",
    words: [],    
    mnuemonic: "PREZ GOT CAUGHT HAVING MONICA"
},

{
    id: 18,
    listName: "SERIAL",
    words: ["AERIALS", "BAILERS", "CLARIES", "ECLAIRS", "SCALIER", "DERAILS", "DIALERS", "REDIALS", "REALISE", "GLAIRES", "HAILERS", "HALIERS", "SHALIER", "JAILERS", "RALLIES", "SALLIER", "MAILERS", "REALISM", "REMAILS", "ALINERS", "NAILERS", "RENAILS", "PALSIER", "RAILERS", "AIRLESS", "RESAILS", "SAILERS", "SERAILS", "SERIALS", "REALIST", "RETAILS", "SALTIER", "SALTIRE", "SLATIER", "TAILERS", "REVISAL", "WAILERS"],
    mnuemonic: "A CHANGEABLE TV DRAMA (JAWS?)"
},
{
    id: 19,
    listName: "NAILER",
    words: [],    
    mnuemonic: "VEXES SPOCK MIGHTILY"
},
{
    id: 20,
    listName: "ALIENS",
    words: [],    
    mnuemonic: "SPOCK'S VW BUG HOLD TO FORM"
},
{
    id: 21,
    listName: "IONSEA",
    words: [],    
    mnuemonic: "MIMIC ATOP GRAVEL"
},
{
    id: 22,
    listName: "SALTIE",
    words: [],    
    mnuemonic: "FIZZ BLOCKS DRIVING SHIP"
},
{
    id: 23,
    listName: "RETAIL",
    words: [],    
    mnuemonic: "CHUMPY LENDER TURNS BUCKS"
},
{
    id: 24,
    listName: "RETIES",
    words: [],    
    mnuemonic: "SHCACKLED MAZE PREVENTS ESCAPE"
},
{
    id: 25,
    listName: "ENTIRE",
    words: [],    
    mnuemonic: "IN GREAT CHUNKS"
}
];

export default sixLetterStems;