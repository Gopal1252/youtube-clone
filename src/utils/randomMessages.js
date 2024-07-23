const user = [
    "PewDiePie", "T-Series", "Cocomelon", "SETIndia", "5MinuteCrafts",
    "KondZilla", "MrBeast", "WWE", "Nastya", "DianaShow", 
    "ZeeMusic", "VladNiki", "JustinBieber", "DudePerfect", "Marshmello",
    "EdSheeran", "EminemMusic", "ArianaGrande", "Badabun", "JuegaGerman", 
    "BLACKPINK", "HolaSoyGerman", "BigHitLabels", "AlanWalker", "TaylorSwift",
    "BillieEilish", "Movieclips", "BuzzFeed", "LucasMarcus", "Fernanfloo",
    "VEGETTA777", "TheEllenShow", "ElRubiusOMG", "JamesCharles", "Smosh",
    "TonightShow", "BraveWilderness", "Dantdm", "NikkieTutorials", "Domics",
    "RyanHiga", "CollegeHumor", "Markiplier", "JennaMarbles", "SupercarBlondie",
    "LinusTechTips", "Vsauce", "CaseyNeistat", "ScreenJunkies", "SlowMoGuys",
    "UnboxTherapy", "MKBHD", "CGPGrey", "Veritasium", "HowRidiculous",
    "SmoshPit", "CorridorCrew", "GoodMythical", "RhettLink", "ShaneDawson",
    "LillySingh", "DeFranco", "EmmaChamberlain", "JoeyGraceffa", "TheOdd1sOut",
    "RosannaPansino", "Swoozie", "SafiyaNygaard", "BrandonRogers", "Jaiden",
    "ChilledCow", "BingingBabish", "GordonRamsay", "FirstWeFeast", "TryGuys",
    "BonAppetit", "SimoneGiertz", "KingRandom", "TedEd", "Vsauce2",
    "SmarterEveryDay", "CrashCourse", "MinutePhysics", "Numberphile", "SciShow",
    "Kurzgesagt", "TomScott", "Veritasium", "PhysicsGirl", "Vsauce3",
    "Computerphile", "RealEngineering", "MarkRober", "BrainScoop", "Primitive",
    "TechLinked", "AWEme", "Tested", "Engadget", "Make",
    "Blippi", "MotherGoose", "Pinkfong", "RyansWorld", "BabyBus",
    "LittleBaby", "MashaBear", "PeppaPig", "ThomasFriends", "BenHolly",
    "TheWiggles", "ChuChuTV", "RyanToys", "BlippiToys", "SuperSimple",
    "BouncePatrol", "BabyShark", "LooLooKids", "LittleAngel", "DaveAva",
    "ToyScouter", "ToyReviews", "Genevieve", "FunToys", "SurpriseEggs",
    "EthanGamer", "KajiFamily", "FGTeeV", "HobbyKidsTV", "CookieSwirl",
    "Sandaroo", "ToysAndMe", "JillianAddie", "Tiana", "CarterSharer",
    "LizzyCapri", "PapaJake", "RebeccaZamolo", "JojoSiwa", "AlexWassabi",
    "StephenSharer", "MattyBRaps", "CarlJinger", "Ohana", "Yeagers"];

    const chatMessages = [
        "How's your day going?",
        "What's up, everyone?",
        "Just saw an amazing movie!",
        "Ready for the weekend?",
        "Loving this sunny weather.",
        "Who's up for coffee?",
        "Got a new book recommendation.",
        "Enjoying a relaxing evening.",
        "Any weekend plans?",
        "Just finished a great workout.",
        "Who's up for a chat?",
        "Loving this new playlist.",
        "Ready for game night?",
        "Anyone up for brunch?",
        "Had a delicious lunch today.",
        "What's your favorite hobby?",
        "Caught a great sunset.",
        "Reading a fantastic book.",
        "Planning a road trip.",
        "Enjoying my new hobby.",
        "Who's excited for vacation?",
        "Any good movie suggestions?",
        "Just started a new project.",
        "Looking forward to the weekend.",
        "Had a fun day out.",
        "Anyone up for a walk?",
        "Cooking a new recipe tonight.",
        "Trying a new fitness routine.",
        "What's everyone watching lately?",
        "Enjoying some downtime today."
    ];
    

    
    export function generateName() {
        return user[Math.floor(Math.random() * user.length )];
     };

    export const generateMessage = () => {
        const randomIndex = Math.floor(Math.random() * chatMessages.length);
        return chatMessages[randomIndex];
    };