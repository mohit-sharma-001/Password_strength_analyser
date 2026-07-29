/**
 * Common / Leaked Passwords List (500 items)
 * Used by the Password Strength Analyzer to check for commonly used weak passwords.
 */
const COMMON_PASSWORDS = [
  // Top 1-50
  "123456", "password", "123456789", "12345678", "12345", "1234567", "qwerty", "1234567890", "1234", "111111",
  "123123", "abc123", "password1", "admin", "welcome", "monkey", "football", "dragon", "master", "access",
  "shadow", "sunshine", "princess", "superman", "trustno1", "iloveyou", "letmein", "computer", "solo", "secret",
  "starwars", "pass", "login", "baseball", "matrix", "monster", "123321", "654321", "picture1", "charlie",
  "jordan", "nicole", "hannah", "hunter2", "baseball1", "test", "testing", "guest", "user", "default",

  // 51-100
  "passcode", "p@ssword", "p@ssword1", "password123", "qwertyuiop", "asdfghjkl", "zxcvbnm", "iloveyou1", "hello", "forever",
  "freedom", "summer", "winter", "spring", "autumn", "chelsea", "arsenal", "liverpool", "barcelona", "realmadrid",
  "pokemon", "naruto", "super", "hacker", "system", "security", "service", "root", "toor", "god",
  "angel", "love", "family", "online", "internet", "mobile", "phone", "account", "server", "database",
  "network", "manager", "support", "business", "ashley", "bailey", "shadow1", "michael", "jessica", "andrew",

  // 101-150
  "daniel", "alexander", "anthony", "000000", "555555", "7777777", "888888", "999999", "123456789a", "qwerty123",
  "admin123", "admin1234", "admin2020", "admin2021", "admin2022", "admin2023", "admin2024", "admin2025", "admin2026", "welcome1",
  "welcome123", "pass1234", "password! ", "password01", "password11", "password12", "password2024", "password2025", "password2026", "letmein1",
  "letmein123", "monkey123", "dragon123", "sunshine1", "princess1", "superman1", "iloveyou123", "football1", "baseball123", "soccer",
  "soccer1", "hockey", "basketball", "golf", "tennis", "swimming", "runner", "fitness", "sports", "champion",

  // 151-200
  "winner", "victory", "trophy", "player", "gamer", "gaming", "xbox", "playstation", "nintendo", "steam",
  "roblox", "minecraft", "fortnite", "valorant", "league", "legend", "hero", "warrior", "ninja", "samurai",
  "knight", "wizard", "magic", "phoenix", "tiger", "lion", "panther", "wolf", "bear", "eagle",
  "falcon", "hawk", "shark", "cobra", "viper", "python", "jaguar", "leopard", "cheetah", "puppy",
  "kitten", "buddy", "max", "cooper", "rocky", "duke", "teddy", "tucker", "oliver", "milo",

  // 201-250
  "bentley", "zeus", "leo", "tobey", "jasper", "bruno", "jax", "sam", "buster", "murphy",
  "loki", "harley", "oscar", "coby", "gideon", "bandit", "diesel", "marley", "gizmo", "sammy",
  "rusty", "simba", "chance", "winston", "louie", "samson", "scout", "dexter", "hank", "jackson",
  "marlo", "ollie", "otto", "roskoe", "ziggy", "copper", "prince", "ace", "apollo", "boomer",
  "chico", "dixie", "hunter", "kobe", "luke", "mac", "maverick", "moose", "oakley", "oreo",

  // 251-300
  "peanut", "remi", "reyna", "romeo", "ruger", "sarge", "sparky", "thor", "titan", "tyson",
  "vader", "walter", "david", "james", "john", "robert", "william", "richard", "joseph", "thomas",
  "charles", "matthew", "patricia", "jennifer", "linda", "elizabeth", "barbara", "susan", "sarah", "karen",
  "nancy", "lisa", "betty", "margaret", "sandra", "kimberly", "emily", "donna", "michelle", "carol",
  "amanda", "melissa", "deborah", "stephanie", "rebecca", "sharon", "laura", "cynthia", "kathleen", "amy",

  // 301-350
  "shirley", "angela", "helen", "anna", "brenda", "pamela", "samantha", "katherine", "christine", "debra",
  "rachel", "carolyn", "janet", "catherine", "maria", "heather", "diane", "virginia", "julie", "joyce",
  "victoria", "olivia", "kelly", "christina", "lauren", "joan", "evelyn", "judith", "megan", "cheryl",
  "andrea", "martha", "jacqueline", "frances", "gloria", "ann", "teresa", "kathryn", "sara", "janice",
  "jean", "alice", "madison", "doris", "abigail", "julia", "judy", "grace", "denise", "amber",

  // 351-400
  "marilyn", "beverly", "danielle", "theresa", "sophia", "marie", "diana", "brittany", "natalie", "isabella",
  "charlotte", "rose", "alexis", "kayla", "asdf", "zxcv", "qwert", "yuiop", "ghjkl", "vbnm",
  "1qaz2wsx", "qazwsx", "edcrfv", "tgbyhn", "ujmkol", "olp098", "poiuyt", "lkjhgf", "mnbvcxz", "qweasd",
  "asdzxc", "zxcqwe", "12qwas", "123qwe", "123asd", "123zxc", "qwe123", "asd123", "zxc123", "qwaszx",
  "1q2w3e", "4r5t6y", "7u8i9o", "0p1q2w", "3e4r5t", "6y7u8i", "9o0p1q", "a1b2c3d4", "1a2b3c4d", "1qaz",

  // 401-450
  "2wsx", "3edc", "4rfv", "5tgb", "6yhn", "7ujm", "8ik", "9ol", "!@#$%", "!@#$%^&*",
  "123456!", "pass123", "changeit", "changeme", "change123", "secret123", "secret1", "123secret", "mycode", "mycode1",
  "passcode1", "p@ssw0rd", "p@ssW0rd", "p@ssW0rd1", "P@ssw0rd", "P@ssw0rd1", "Password", "Password1", "Password12", "Password123!",
  "Password!", "Password@123", "Password#123", "Admin123", "Admin1234", "Admin2024", "Admin2025", "Welcome123", "Welcome2024", "Root1234",
  "User1234", "Guest123", "Test1234", "Testing123", "Master123", "Freedom123", "Sunshine123", "Princess123", "Superman123", "Starwars1",

  // 451-500
  "Football123", "Baseball123", "Basketball1", "Soccer123", "Hockey123", "Jordan123", "Charlie123", "Michael123", "Jessica123", "Andrew123",
  "Daniel123", "David1234", "James1234", "Robert1234", "William123", "Richard123", "Joseph123", "Thomas123", "Charles123", "Matthew123",
  "Anthony123", "Jennifer123", "Elizabeth1", "Sarah1234", "Karen1234", "Emily1234", "Amanda1234", "Melissa123", "Stephanie1", "Nicole1234",
  "Samantha12", "Rachel123", "Heather123", "Victoria12", "Lauren123", "Megan1234", "Hannah123", "Amber1234", "Brittany1", "Sophia1234",
  "Isabella1", "Charlotte1", "1234567890!", "qwertyuiop!", "asdfghjkl!", "zxcvbnm!", "iloveyou1!", "welcome1!", "password2026!", "trustno1!"
];
