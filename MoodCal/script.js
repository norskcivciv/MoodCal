const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const STORAGE_KEY = "moodcal_personal_cards_v1";

const SPECIAL_DAYS = {
  // JANUARY
  "01-01": { emoji: "🎆", title: "New Year's Day", category: "Global", desc: "First day of the year—new pages, cold air, and reset routines." },
  "01-02": { emoji: "📚", title: "Science Fiction Day", category: "Culture", desc: "A nod to space travel, alternate timelines, and speculative stories." },
  "01-04": { emoji: "⠿", title: "World Braille Day", category: "UN", desc: "Marks Louis Braille's birthday and accessible reading through touch." },
  "01-14": { emoji: "🧠", title: "World Logic Day", category: "UNESCO", desc: "Dedication to deduction, formal reasoning, and clear thinking." },
  "01-20": { emoji: "🐧", title: "Penguin Awareness Day", category: "Nature", desc: "Focuses on penguins and coastal cold-water habitats." },
  "01-24": { emoji: "🎓", title: "International Day of Education", category: "UN", desc: "Highlights learning, classrooms, and open access to knowledge." },
  "01-28": { emoji: "🔐", title: "Data Privacy Day", category: "Tech", desc: "A reminder to check passwords, permissions, and digital privacy." },

  // FEBRUARY
  "02-02": { emoji: "🦆", title: "World Wetlands Day", category: "UN", desc: "Celebrates marshes, lakes, and wetlands that sustain wildlife." },
  "02-09": { emoji: "🍕", title: "World Pizza Day", category: "Food", desc: "Simple dough, tomato, cheese, and endless variations." },
  "02-11": { emoji: "🔬", title: "Women & Girls in Science Day", category: "UN", desc: "Recognizes women researchers, engineers, and scientists." },
  "02-13": { emoji: "📻", title: "World Radio Day", category: "UNESCO", desc: "Celebrates broadcasts, audio storytelling, and airwaves." },
  "02-14": { emoji: "💌", title: "Valentine's & Friendship Day", category: "Global", desc: "Notes, small gestures, and appreciation for people close to you." },
  "02-21": { emoji: "🗣️", title: "Mother Language Day", category: "UNESCO", desc: "Supports native languages and linguistic variety worldwide." },
  "02-27": { emoji: "🐻‍❄️", title: "International Polar Bear Day", category: "Wildlife", desc: "Draws attention to Arctic sea ice and polar bear conservation." },

  // MARCH
  "03-01": { emoji: "💬", title: "World Compliment Day", category: "Everyday", desc: "Saying something honest and encouraging without a hidden angle." },
  "03-03": { emoji: "🦊", title: "World Wildlife Day", category: "UN", desc: "Highlights wild species and habitat protection across continents." },
  "03-08": { emoji: "🌷", title: "International Women's Day", category: "UN", desc: "Marks women's contributions across work, art, science, and public life." },
  "03-14": { emoji: "🥧", title: "Pi Day", category: "Math & Culture", desc: "3.14159... circles, math puzzles, and pie slices." },
  "03-20": { emoji: "😊", title: "International Day of Happiness", category: "UN", desc: "Looks at wellbeing, balance, and everyday joy." },
  "03-21": { emoji: "🌸", title: "Spring Equinox & World Poetry Day", category: "Season · Mar 21", desc: "Spring begins in the Northern Hemisphere alongside World Poetry Day." },
  "03-22": { emoji: "💧", title: "World Water Day", category: "UN", desc: "Focuses on freshwater protection and smart water use." },
  "03-27": { emoji: "🎭", title: "World Theatre Day", category: "Arts", desc: "Stage performances, live scripts, and theater craft." },

  // APRIL
  "04-01": { emoji: "🃏", title: "April Fools' Day", category: "Tradition", desc: "Harmless jokes, clever tricks, and classic skepticism." },
  "04-07": { emoji: "🩺", title: "World Health Day", category: "WHO", desc: "Marks the founding of the World Health Organization." },
  "04-12": { emoji: "🚀", title: "Human Space Flight Day", category: "UN", desc: "Commemorates the first human flight into space in 1961." },
  "04-15": { emoji: "🎨", title: "World Art Day", category: "UNESCO", desc: "Celebrated on Leonardo da Vinci's birth date for visual arts." },
  "04-22": { emoji: "🌍", title: "Mother Earth Day", category: "UN", desc: "Global focus on ecosystems, forests, and environmental care." },
  "04-23": { emoji: "📖", title: "World Book & Copyright Day", category: "UNESCO", desc: "Books, readers, authors, and printed or digital pages." },
  "04-29": { emoji: "💃", title: "International Dance Day", category: "Arts", desc: "Movement, rhythm, and dance traditions around the world." },
  "04-30": { emoji: "🎷", title: "International Jazz Day", category: "UNESCO", desc: "Improvisation, rhythm, and jazz history." },

  // MAY
  "05-03": { emoji: "📰", title: "World Press Freedom Day", category: "UN", desc: "Independent reporting and freedom of expression." },
  "05-04": { emoji: "🌌", title: "Star Wars Day", category: "Pop Culture", desc: "May the Fourth—sci-fi marathons and space lore." },
  "05-15": { emoji: "🏡", title: "International Day of Families", category: "UN", desc: "Family ties and household support." },
  "05-18": { emoji: "🏛️", title: "International Museum Day", category: "Culture", desc: "Museums, archives, and public collections." },
  "05-20": { emoji: "🐝", title: "World Bee Day", category: "UN", desc: "Pollinators, wild flowers, and healthy ecosystems." },
  "05-22": { emoji: "🦋", title: "Biological Diversity Day", category: "UN", desc: "Variety of life across land, soil, and water." },

  // JUNE
  "06-01": { emoji: "🚲", title: "World Bicycle Day", category: "UN", desc: "Two wheels, low carbon, and open roads or bike lanes." },
  "06-05": { emoji: "🌱", title: "World Environment Day", category: "UN", desc: "Environmental action and land/water restoration." },
  "06-08": { emoji: "🌊", title: "World Oceans Day", category: "UN", desc: "Marine life, coasts, and ocean health." },
  "06-14": { emoji: "🩸", title: "World Blood Donor Day", category: "WHO", desc: "Voluntary blood donation and medical support." },
  "06-21": { emoji: "☀️", title: "Summer Solstice & World Music Day", category: "Season · Jun 21", desc: "Longest daylight of the year and street music celebrations." },
  "06-27": { emoji: "🍍", title: "International Pineapple Day", category: "Food", desc: "Sweet tropical fruit in early summer." },
  "06-30": { emoji: "☄️", title: "International Asteroid Day", category: "UN", desc: "Asteroids, near-Earth objects, and astronomy." },

  // JULY
  "07-07": { emoji: "🍫", title: "World Chocolate Day", category: "Food", desc: "Cocoa, dark chocolate, and sweet treats." },
  "07-11": { emoji: "📊", title: "World Population Day", category: "UN", desc: "Global demographics and urban planning topics." },
  "07-17": { emoji: "😎", title: "World Emoji Day", category: "Digital", desc: "July 17—the date shown on the standard calendar icon." },
  "07-20": { emoji: "🌕", title: "International Moon Day", category: "UN", desc: "Anniversary of the first crewed lunar landing in 1969." },
  "07-22": { emoji: "🥭", title: "World Mango Day", category: "Food", desc: "Summer mango season and tropical fruit tables." },
  "07-30": { emoji: "🤝", title: "International Day of Friendship", category: "UN", desc: "Friendship across borders and everyday life." },

  // AUGUST
  "08-08": { emoji: "🐱", title: "International Cat Day", category: "Animals", desc: "Cats, naps, and feline habits." },
  "08-12": { emoji: "⚡", title: "International Youth Day", category: "UN", desc: "Young people's projects, voices, and ideas." },
  "08-13": { emoji: "✍️", title: "International Left-Handers Day", category: "Culture", desc: "Left-handedness and everyday tools." },
  "08-19": { emoji: "📸", title: "World Photography Day", category: "Arts", desc: "Cameras, framing, light, and still moments." },
  "08-26": { emoji: "🐶", title: "International Dog Day", category: "Animals", desc: "Dogs and everyday companionship." },

  // SEPTEMBER
  "09-05": { emoji: "💛", title: "International Day of Charity", category: "UN", desc: "Volunteering and practical help." },
  "09-08": { emoji: "📝", title: "International Literacy Day", category: "UNESCO", desc: "Reading, writing, and basic education." },
  "09-19": { emoji: "🏴‍☠️", title: "Talk Like a Pirate Day", category: "Fun", desc: "Playful pirate slang and sea humor." },
  "09-21": { emoji: "🕊️", title: "International Day of Peace", category: "UN", desc: "Peacebuilding and conflict resolution." },
  "09-23": { emoji: "🍂", title: "Autumn Equinox", category: "Season · Sep 23", desc: "Autumn starts—equal day and night, cooler air ahead." },
  "09-27": { emoji: "🧳", title: "World Tourism Day", category: "UN", desc: "Travel, new cities, and local culture." },

  // OCTOBER
  "10-01": { emoji: "☕", title: "International Coffee Day", category: "Routine", desc: "Roasted beans, pour-overs, and morning cups." },
  "10-04": { emoji: "🐾", title: "World Animal Day", category: "Animals", desc: "Animal welfare and wildlife protection." },
  "10-05": { emoji: "🍎", title: "World Teachers' Day", category: "UNESCO", desc: "Teachers and mentors in schools and beyond." },
  "10-10": { emoji: "🧘", title: "World Mental Health Day", category: "WHO", desc: "Mental wellbeing and healthy pace." },
  "10-16": { emoji: "🍞", title: "World Food Day", category: "UN FAO", desc: "Food systems, agriculture, and nutrition." },
  "10-24": { emoji: "🇺🇳", title: "United Nations Day", category: "Global", desc: "Anniversary of the UN Charter entering into force in 1945." },
  "10-29": { emoji: "💻", title: "World Coding Day", category: "Tech", desc: "Writing code, debugging, and building small tools." },
  "10-31": { emoji: "🎃", title: "Halloween & World Cities Day", category: "Season & UN", desc: "Autumn night costumes alongside urban sustainability." },

  // NOVEMBER
  "11-05": { emoji: "🌊", title: "World Tsunami Awareness Day", category: "UN", desc: "Coastal safety and early warning systems." },
  "11-08": { emoji: "🔭", title: "World Science & STEM Day", category: "Science", desc: "Experiments, physics, math, and curiosity." },
  "11-10": { emoji: "🧪", title: "World Science Day for Peace", category: "UNESCO", desc: "Science in daily life and public benefit." },
  "11-13": { emoji: "🤗", title: "World Kindness Day", category: "Everyday", desc: "Small helpful actions without fuss." },
  "11-19": { emoji: "♟️", title: "International Chess Day", category: "Games", desc: "Board games, openings, and long-term planning." },
  "11-20": { emoji: "🧸", title: "World Children's Day", category: "UN", desc: "Children's rights, safety, and wellbeing." },
  "11-21": { emoji: "👋", title: "World Hello Day", category: "Global", desc: "A simple greeting to people you pass or message." },
  "11-26": { emoji: "🫒", title: "World Olive Tree Day", category: "UNESCO", desc: "Olive groves, harvests, and Mediterranean history." },

  // DECEMBER
  "12-05": { emoji: "🤲", title: "International Volunteer Day", category: "UN", desc: "People giving time to community work." },
  "12-10": { emoji: "⚖️", title: "Human Rights Day", category: "UN", desc: "1948 Universal Declaration of Human Rights." },
  "12-11": { emoji: "🏔️", title: "International Mountain Day", category: "UN", desc: "Mountain ranges, snowlines, and highland life." },
  "12-21": { emoji: "❄️", title: "Winter Solstice", category: "Season · Dec 21", desc: "Shortest day of the year—winter officially begins." },
  "12-25": { emoji: "🎄", title: "Christmas & Festive Lights Day", category: "Holiday", desc: "Lights on the evergreen tree and winter gatherings." },
  "12-31": { emoji: "✨", title: "New Year's Eve", category: "Countdown", desc: "Last evening of the year before the calendar turns." }
};

// Varied everyday lines per day number (1..31) & season—short, natural, non-repetitive
const DAY_NOTES = {
  1: { spring: "Buds swelling after a cool night.", summer: "Bright sun right from the first hour.", autumn: "First day of the month—dry leaves at the curb.", winter: "Cold grey morning, white frost on the ground.", holiday: "December starts cold with lights already up." },
  2: { spring: "Soft light on pale green leaves.", summer: "Warm air, slow afternoon pace.", autumn: "Wind pushes scattered leaves across the path.", winter: "Pale light over snow.", holiday: "Quiet snow around the pine." },
  3: { spring: "Fresh shoots, mild breeze.", summer: "Thick green shade under high sun.", autumn: "Low amber light late in the day.", winter: "Still winter air, no rush.", holiday: "Crisp air and glowing ornaments." },
  4: { spring: "Light haze clearing by mid-morning.", summer: "Warm street heat, long daylight.", autumn: "Cooler wind—time for a jacket.", winter: "Grey sky low over white hills.", holiday: "Lights stand out against the snow." },
  5: { spring: "Petals drifting on a light gust.", summer: "Clear sky, dry warm ground.", autumn: "Rust and gold leaves piling up.", winter: "Hard frost holding on the ground.", holiday: "Warm lights against cold snow." },
  6: { spring: "Quick spring shower, wet leaves.", summer: "Late sunset, warm evening air.", autumn: "Misty morning, quiet street.", winter: "Snow resting on bare branches.", holiday: "Festive mood in cold weather." },
  7: { spring: "Clean spring light, easy walk.", summer: "Strong sun, bright horizon.", autumn: "Crunchy leaves underfoot.", winter: "Fine snow drifting down.", holiday: "Brighter lights as dusk comes early." },
  8: { spring: "Green grass coming back in patches.", summer: "Long afternoon before sundown.", autumn: "Cool autumn wind through the crown.", winter: "Frost along dark bark.", holiday: "Snow and small colored lights." },
  9: { spring: "Scattered clouds, mild air.", summer: "Warm breeze through heavy leaves.", autumn: "Deep amber and brown tones.", winter: "Weak winter sun through grey clouds.", holiday: "Gifts under the lit pine." },
  10: { spring: "Blossoms open across the branches.", summer: "Full green canopy.", autumn: "Leaves everywhere on the ground.", winter: "Grey winter day, white snow.", holiday: "Decorated pine in winter frost." },
  11: { spring: "Steady spring warmth.", summer: "Slow summer afternoon.", autumn: "Chilly breeze in the shade.", winter: "Fresh snow on the hill.", holiday: "Star on top, snow below." },
  12: { spring: "A few petals dropping in the wind.", summer: "Golden light on green leaves.", autumn: "More leaves down by evening.", winter: "Overcast grey sky, quiet snow.", holiday: "Cozy winter afternoon." },
  13: { spring: "Cool spring evening settling in.", summer: "Warm air lingers after dark.", autumn: "Dusk arrives earlier now.", winter: "Cold evening coming in fast.", holiday: "Lights glowing in the dark." },
  14: { spring: "Fresh air, clean spring smell.", summer: "Bright summer day.", autumn: "Copper and gold everywhere.", winter: "Thin snow on dark twigs.", holiday: "Snowy pine and ornaments." },
  15: { spring: "Mid-month spring color.", summer: "Mid-month sun strong overhead.", autumn: "Halfway through the month, leaves falling.", winter: "Mid-month winter chill.", holiday: "Mid-December lights and snow." },
  16: { spring: "Sunny morning, soft breeze.", summer: "Shade feels good in the afternoon.", autumn: "Brisk air, dry leaves.", winter: "Quiet snowy day.", holiday: "Winter lights and snow." },
  17: { spring: "Lively spring daylight.", summer: "Warm afternoon glow.", autumn: "Amber sun on falling leaves.", winter: "Soft snow falling.", holiday: "Ornaments catching the light." },
  18: { spring: "Gentle wind through blossoms.", summer: "Dense green foliage.", autumn: "Dry leaves rustling.", winter: "Cold grey sky.", holiday: "Soft light over white snow." },
  19: { spring: "Clear spring day.", summer: "Warm summer day.", autumn: "Rich autumn tones.", winter: "Still snowy scene.", holiday: "Festive winter scene." },
  20: { spring: "Fresh greens and blossoms.", summer: "Long daylight hours.", autumn: "Late-autumn chill.", winter: "White snow, grey sky.", holiday: "Lights over the snow." },
  21: { spring: "Spring energy in the air.", summer: "High summer sun.", autumn: "Leaves drifting down.", winter: "Frost and bare branches.", holiday: "Winter lights and snow." },
  22: { spring: "Blossoms and mild air.", summer: "Sunny day, green leaves.", autumn: "Crisp autumn day, amber leaves.", winter: "Snowy ground, cool grey sky.", holiday: "Lights on the winter pine." },
  23: { spring: "Warm spring afternoon.", summer: "Golden late sun.", autumn: "Copper and amber leaves.", winter: "Frosted winter day.", holiday: "Snow and holiday lights." },
  24: { spring: "Petals floating gently.", summer: "Warm summer breeze.", autumn: "Leaves gathered on the ground.", winter: "Quiet snow under grey sky.", holiday: "Holiday lights glowing." },
  25: { spring: "Clear spring air.", summer: "Long summer sun.", autumn: "Cool breeze, fallen leaves.", winter: "Snow across branches and hill.", holiday: "Lights, gifts, and winter snow." },
  26: { spring: "Spring blossoms and green shoots.", summer: "Warm day, bright sky.", autumn: "Amber tones on the tree.", winter: "Crisp winter frost.", holiday: "Festive colors on snow." },
  27: { spring: "Soft clouds, spring blooms.", summer: "Warm summer afternoon.", autumn: "Leaves drifting down.", winter: "Quiet snowy day.", holiday: "Warm lights over snow." },
  28: { spring: "Fresh spring air.", summer: "Bright summer sun.", autumn: "Crisp late-autumn day.", winter: "Snow and winter chill.", holiday: "Lights twinkling on snow." },
  29: { spring: "Blooming spring day.", summer: "Warm summer day.", autumn: "Golden autumn day.", winter: "Cold grey sky, white snow.", holiday: "Holiday lights on the pine." },
  30: { spring: "End of the month, soft breeze.", summer: "End of the month, warm sun.", autumn: "End of the month, leaves down.", winter: "End of the month, snow.", holiday: "Late December snow and lights." },
  31: { spring: "31st—bright spring day.", summer: "31st—long summer daylight.", autumn: "31st—crisp autumn air.", winter: "31st—snowy winter day.", holiday: "Last day of the year." }
};

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
let onlySpecialFilter = false;
let searchQuery = "";

const calendarGrid = document.getElementById("calendarGrid");
const monthYearLabel = document.getElementById("monthYearLabel");
const seasonRangeLabel = document.getElementById("seasonRangeLabel");
const seasonBadge = document.getElementById("seasonBadge");
const sceneCaption = document.getElementById("sceneCaption");
const selectedDateBadge = document.getElementById("selectedDateBadge");
const dayEmoji = document.getElementById("dayEmoji");
const dayTitle = document.getElementById("dayTitle");
const dayCategory = document.getElementById("dayCategory");
const dayDescription = document.getElementById("dayDescription");
const particlesLayer = document.getElementById("particlesLayer");

const yearProgressLabel = document.getElementById("yearProgressLabel");
const daysRemainingLabel = document.getElementById("daysRemainingLabel");
const yearProgressFill = document.getElementById("yearProgressFill");

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const onlySpecialBtn = document.getElementById("onlySpecialBtn");
const deleteCustomBtn = document.getElementById("deleteCustomBtn");
const customDayForm = document.getElementById("customDayForm");
const customEmoji = document.getElementById("customEmoji");
const customTitle = document.getElementById("customTitle");
const customNote = document.getElementById("customNote");
const customTargetHint = document.getElementById("customTargetHint");

function pad(num) {
  return String(num).padStart(2, "0");
}

function loadPersonalCards() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function savePersonalCards(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function updateYearProgress() {
  const totalDays = isLeapYear(currentYear) ? 366 : 365;
  const startOfYear = new Date(currentYear, 0, 1);
  const endOfYear = new Date(currentYear + 1, 0, 1);

  const referenceDate =
    currentYear === today.getFullYear()
      ? new Date(today.getFullYear(), today.getMonth(), today.getDate())
      : new Date(currentYear, selectedDate.getMonth(), selectedDate.getDate());

  const elapsedMs = Math.max(0, Math.min(endOfYear - startOfYear, referenceDate - startOfYear));
  const dayIndex = Math.min(totalDays, Math.floor(elapsedMs / 86400000) + 1);
  const pct = ((dayIndex / totalDays) * 100).toFixed(1);
  const remaining = Math.max(0, totalDays - dayIndex);

  yearProgressLabel.textContent = `${currentYear} · ${pct}%`;
  daysRemainingLabel.textContent = `${remaining}d left`;
  yearProgressFill.style.width = `${pct}%`;
}

function getSeasonInfo(monthIndex, dayNum) {
  const m = monthIndex + 1;

  if (m === 12 && dayNum >= 24) {
    return {
      key: "holiday",
      badge: "Holiday",
      range: "Dec 21 – Mar 20",
      caption: "Pine Tree & Winter Snow",
      particle: "❄️"
    };
  }

  if ((m === 3 && dayNum >= 21) || m === 4 || m === 5 || (m === 6 && dayNum <= 20)) {
    return {
      key: "spring",
      badge: "Spring",
      range: "Mar 21 – Jun 20",
      caption: "Blossoms & Sage Hills",
      particle: "🌸"
    };
  }

  if ((m === 6 && dayNum >= 21) || m === 7 || m === 8 || (m === 9 && dayNum <= 22)) {
    return {
      key: "summer",
      badge: "Summer",
      range: "Jun 21 – Sep 22",
      caption: "Green Crown & Sun",
      particle: "✨"
    };
  }

  if ((m === 9 && dayNum >= 23) || m === 10 || m === 11 || (m === 12 && dayNum <= 20)) {
    return {
      key: "autumn",
      badge: "Autumn",
      range: "Sep 23 – Dec 20",
      caption: "Amber Leaves & Crisp Air",
      particle: "🍂"
    };
  }

  return {
    key: "winter",
    badge: "Winter",
    range: "Dec 21 – Mar 20",
    caption: "Grey Sky & Snow Branches",
    particle: "❄️"
  };
}

function getDailyNote(seasonKey, dayNum) {
  const bucket = DAY_NOTES[dayNum] || DAY_NOTES[1];
  const text = bucket[seasonKey] || bucket.autumn;
  const label = seasonKey.charAt(0).toUpperCase() + seasonKey.slice(1);
  return {
    emoji: "•",
    title: `${MONTHS[selectedDate.getMonth()]} ${dayNum}`,
    category: `${label} · Day ${dayNum}`,
    desc: text
  };
}

function renderParticles(symbol) {
  particlesLayer.innerHTML = "";
  const count = 12;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "particle";
    span.textContent = symbol;
    span.style.left = `${(i * 8.2) % 97}%`;
    span.style.animationDuration = `${8 + (i % 4) * 2}s`;
    span.style.animationDelay = `${(i % 5) * 1.1}s`;
    span.style.fontSize = `${12 + (i % 3) * 3}px`;
    particlesLayer.appendChild(span);
  }
}

function renderSearchResults() {
  const q = searchQuery.trim().toLowerCase();
  if (!q) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  const personal = loadPersonalCards();
  const matches = [];

  Object.entries(SPECIAL_DAYS).forEach(([mmdd, item]) => {
    const hay = `${mmdd} ${item.title} ${item.category} ${item.desc}`.toLowerCase();
    if (hay.includes(q)) {
      matches.push({ mmdd, emoji: item.emoji, title: item.title, tag: "Global" });
    }
  });

  Object.entries(personal).forEach(([mmdd, item]) => {
    const hay = `${mmdd} ${item.title} ${item.desc} personal`.toLowerCase();
    if (hay.includes(q)) {
      matches.push({ mmdd, emoji: item.emoji, title: item.title, tag: "Personal" });
    }
  });

  searchResults.hidden = false;
  searchResults.innerHTML = "";

  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "search-row-btn";
    empty.textContent = "No matching day.";
    searchResults.appendChild(empty);
    return;
  }

  matches.slice(0, 12).forEach((m) => {
    const [mm, dd] = m.mmdd.split("-").map(Number);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "search-row-btn";
    btn.innerHTML = `<span>${m.emoji} ${m.title}</span><span>${MONTHS[mm - 1].slice(0, 3)} ${dd} · ${m.tag}</span>`;
    btn.addEventListener("click", () => {
      currentMonth = mm - 1;
      selectedDate = new Date(currentYear, currentMonth, dd);
      renderCalendar();
    });
    searchResults.appendChild(btn);
  });
}

function updateAtmosphereAndDetails() {
  const selMonth = selectedDate.getMonth();
  const selDay = selectedDate.getDate();
  const selYear = selectedDate.getFullYear();

  const season = getSeasonInfo(selMonth, selDay);
  document.body.setAttribute("data-season", season.key);
  seasonBadge.textContent = season.badge;
  seasonRangeLabel.textContent = season.range;
  sceneCaption.textContent = season.caption;

  const shortDate = `${selDay} ${MONTHS[selMonth].slice(0, 3)}`;
  selectedDateBadge.textContent = `${shortDate} ${selYear}`;
  customTargetHint.textContent = shortDate;

  renderParticles(season.particle);
  updateYearProgress();

  const key = `${pad(selMonth + 1)}-${pad(selDay)}`;
  const personal = loadPersonalCards()[key];
  const special = SPECIAL_DAYS[key];

  if (personal) {
    dayEmoji.textContent = personal.emoji || "📌";
    dayTitle.textContent = personal.title;
    dayCategory.textContent = "Personal Card";
    dayDescription.textContent = personal.desc || "Saved locally in this browser.";
    deleteCustomBtn.hidden = false;
  } else if (special) {
    dayEmoji.textContent = special.emoji;
    dayTitle.textContent = special.title;
    dayCategory.textContent = special.category;
    dayDescription.textContent = special.desc;
    deleteCustomBtn.hidden = true;
  } else {
    const note = getDailyNote(season.key, selDay);
    dayEmoji.textContent = note.emoji;
    dayTitle.textContent = note.title;
    dayCategory.textContent = note.category;
    dayDescription.textContent = note.desc;
    deleteCustomBtn.hidden = true;
  }
}

function renderCalendar() {
  monthYearLabel.textContent = `${MONTHS[currentMonth]} ${currentYear}`;
  calendarGrid.innerHTML = "";

  const personalMap = loadPersonalCards();
  const firstDayRaw = new Date(currentYear, currentMonth, 1).getDay();
  const startOffset = (firstDayRaw + 6) % 7;
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  for (let i = 0; i < startOffset; i++) {
    const empty = document.createElement("div");
    empty.className = "day-cell empty";
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "day-cell";

    const key = `${pad(currentMonth + 1)}-${pad(day)}`;
    const personal = personalMap[key];
    const special = SPECIAL_DAYS[key];
    const activeDay = personal || special;

    if (activeDay) {
      cell.classList.add("special");
      cell.title = personal ? `${personal.title} (Personal)` : special.title;
    } else if (onlySpecialFilter) {
      cell.classList.add("dimmed");
    }

    if (personal) {
      cell.classList.add("custom-marked");
    }

    if (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    if (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    ) {
      cell.classList.add("selected");
    }

    const numSpan = document.createElement("span");
    numSpan.className = "day-num";
    numSpan.textContent = day;
    cell.appendChild(numSpan);

    if (activeDay) {
      const iconSpan = document.createElement("span");
      iconSpan.className = "day-icon";
      iconSpan.textContent = activeDay.emoji;
      cell.appendChild(iconSpan);
    }

    cell.addEventListener("click", () => {
      selectedDate = new Date(currentYear, currentMonth, day);
      renderCalendar();
      updateAtmosphereAndDetails();
    });

    calendarGrid.appendChild(cell);
  }

  updateAtmosphereAndDetails();
  renderSearchResults();
}

document.getElementById("prevMonthBtn").addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  selectedDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

document.getElementById("nextMonthBtn").addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  selectedDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

document.getElementById("prevYearBtn").addEventListener("click", () => {
  currentYear--;
  selectedDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

document.getElementById("nextYearBtn").addEventListener("click", () => {
  currentYear++;
  selectedDate = new Date(currentYear, currentMonth, 1);
  renderCalendar();
});

document.getElementById("todayBtn").addEventListener("click", () => {
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
  selectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  renderCalendar();
});

document.getElementById("randomSpecialBtn").addEventListener("click", () => {
  const keys = Object.keys(SPECIAL_DAYS);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const [mm, dd] = randomKey.split("-").map(Number);
  currentMonth = mm - 1;
  selectedDate = new Date(currentYear, currentMonth, dd);
  renderCalendar();
});

onlySpecialBtn.addEventListener("click", () => {
  onlySpecialFilter = !onlySpecialFilter;
  onlySpecialBtn.classList.toggle("active", onlySpecialFilter);
  onlySpecialBtn.setAttribute("aria-pressed", String(onlySpecialFilter));
  renderCalendar();
});

searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderSearchResults();
});

document.getElementById("clearSearchBtn").addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  renderSearchResults();
});

customDayForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleVal = customTitle.value.trim();
  if (!titleVal) return;

  const key = `${pad(selectedDate.getMonth() + 1)}-${pad(selectedDate.getDate())}`;
  const cards = loadPersonalCards();
  cards[key] = {
    emoji: (customEmoji.value || "📌").trim(),
    title: titleVal,
    desc: customNote.value.trim() || "Personal card saved for this date."
  };
  savePersonalCards(cards);

  customTitle.value = "";
  customNote.value = "";
  renderCalendar();
});

deleteCustomBtn.addEventListener("click", () => {
  const key = `${pad(selectedDate.getMonth() + 1)}-${pad(selectedDate.getDate())}`;
  const cards = loadPersonalCards();
  if (cards[key]) {
    delete cards[key];
    savePersonalCards(cards);
    renderCalendar();
  }
});

document.getElementById("copyDayBtn").addEventListener("click", () => {
  const text = `${dayEmoji.textContent} ${selectedDateBadge.textContent} — ${dayTitle.textContent}: ${dayDescription.textContent}`;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyDayBtn");
    const old = btn.textContent;
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = old;
    }, 1400);
  });
});

renderCalendar();
