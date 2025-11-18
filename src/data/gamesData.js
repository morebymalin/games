// Central datakälla för skattjakter och escape rooms
// Lägg till nya objekt i dessa arrayer utan att röra komponentlogik.

  
// git pull
// git add .
// git commit -m "ready for GitHub Pages deploy"
// git push

// npm run deploy

export const skattjakter = [
  {
    id: 5,
    name: "SPÖKFESTEN - YNGRE BARN",
    shuffleQuestions: true,
    introImg: "/skattjakt/spokfesten1.jpg",
    questions: [
      {
        id: 1,
        type: "letters",
        img: "/skattjakt/vitaspoket.jpg",
        prompt: "Vad har det vita spöket tagit med sig?",
        answer: ["BOLLAR", "BOLL", "BOLLARNA", "BOLAR"],
        hint: "Titta på vad det håller – runda färgglada saker som man kan kasta."
      },
      {
        id: 2,
        type: "letters",
        img: "/skattjakt/rodaspoket.jpg",
        prompt: "Vad har det röda spöket tagit med sig?",
        answer: ["PUMPOR", "PUMPA", "PUMPORNA"],
        hint: "Orangea saker som brukar stå utanför hus i oktober."
      },
      {
        id: 3,
        type: "letters",
        img: "/skattjakt/orangeaspoket.jpg",
        prompt: "Vad har det orangea spöket tagit med sig?",
        answer: "GODIS",
        hint: "Färgglada bitar som man äter – finns i påsen."
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket.jpg",
        prompt: "Vad har det gröna spöket tagit med sig?",
        answer: ["HÄXHATT", "HATT", "HÄXHATTEN", "HEXHATT"],
        hint: "Sitter på huvudet – tillhör ofta en häxa."
      },
      {
        id: 5,
        type: "letters",
        img: "/skattjakt/rosaspoket.jpg",
        prompt: "Vad har det rosa spöket tagit med sig?",
        answer: ["KVASTAR", "KVAST", "KVASTEN"],
        hint: "Något som kan användas för att flyga (i sagor) eller städa."
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket.jpg",
        prompt: "Vad har det blåa spöket tagit med sig?",
        answer: ["FLADDERMÖSS", "FLADDERMUS"],
        hint: "Små svarta djur som flyger på natten."
      }
    ]
  },
  {
    id: 6,
    name: "SPÖKFESTEN - ÄLDRE BARN",
    shuffleQuestions: true,
    introImg: "/skattjakt/spokfesten2.jpg",
    questions: [
      {
        id: 1,
        type: "letters",
        img: "/skattjakt/vitaspoket2.jpg",
        prompt: "Hjälp det vita spöket med gåtan och ange koden.",
        answer: "GSUT",
        hint: "Bokstäverna finns gömda – leta noga i detaljerna."
      },
      {
        id: 2,
        type: "number",
        img: "/skattjakt/rodaspoket2.jpg",
        prompt: "Hjälp det röda spöket med gåtan och ange koden.",
        answer: "10010",
        hint: "Ett tal som ser ut som det kunde vara skrivet i binär form."
      },
      {
        id: 3,
        type: "number",
        img: "/skattjakt/orangeaspoket2.jpg",
        prompt: "Hjälp det orangea spöket med gåtan och ange koden.",
        answer: "1457",
        hint: "Fyra siffror du kan räkna fram – titta på antal saker."
      },
      {
        id: 4,
        type: "letters",
        img: "/skattjakt/gronaspoket2.jpg",
        prompt: "Hjälp det gröna spöket med gåtan och ange koden.",
        answer: "HEXAGON",
        hint: "En form med sex sidor."
      },
      {
        id: 5,
        type: "number",
        img: "/skattjakt/rosaspoket2.jpg",
        prompt: "Hjälp det rosa spöket med gåtan och ange koden.",
        answer: "35412",
        hint: "Siffrorna följer en ordning – jämför olika grupper."
      },
      {
        id: 6,
        type: "letters",
        img: "/skattjakt/blaaspoket2.jpg",
        prompt: "Hjälp det blåa spöket med gåtan och ange koden.",
        answer: "LADW",
        hint: "Ta första bokstaven från det du ser."
      }
    ]
  }
];










export const escapeGames = [

  // Advent Escape Games
  {
    id: 7,
    name: "Advent hos familjen Juliusson - Första advent",
    category: "advent",
    win: "Härligt! Nu kan vi börja julpynta!",
    rooms: [
      { id: 1, name: "Dörren till vinden", img: "/escape/adventhosjuliusson/vindsdorren1.jpg", type: "number", answer: "43785", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Byrån", img: "/escape/adventhosjuliusson/byran.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["heart", "square", "triangle", "circle"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 3, name: "Bruna lådan", img: "/escape/adventhosjuliusson/brunaladan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "triangle"], answerSequence: ["triangle", "square", "star", "circle", "heart"], instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 4, name: "Dörren ut från vinden", img: "/escape/adventhosjuliusson/vindsdorren2.jpg", type: "colors", allowedColors: ["brown", "black", "orange", "red", "yellow", "blue"], answerSequence: ["blue", "brown", "orange", "red", "black"] },
      { id: 5, name: "Julkartong", img: "/escape/adventhosjuliusson/julkartong1.jpg", type: "letters", answer: "EADB", instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 6, name: "Kistan", img: "/escape/adventhosjuliusson/kistan.jpg", type: "colors", allowedColors: ["green", "brown", "orange", "red", "yellow", "blue"], answerSequence: ["green", "blue", "yellow", "brown"], instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 7, name: "Julkartong", img: "/escape/adventhosjuliusson/julkartong2.jpg", type: "letters", answer: "PMHDV", instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 8, name: "Jullådor", img: "/escape/adventhosjuliusson/jullador.jpg", type: "number", answer: "2154", instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 9, name: "Gammalt skåp", img: "/escape/adventhosjuliusson/gammaltskap.jpg", type: "colors", allowedColors: ["black", "grey", "white", "brown", "red"], answerSequence: ["white", "black", "red", "grey", "white", "brown", "red"], instruction: "Bra jobbat! Ta ledtråd 6" }
    ]
  },

  {
    id: 8,
    name: "Advent hos familjen Juliusson - Andra advent",
    category: "advent",
    win: "Vad skönt! Nu är julklapparna inhandlade och vi kan åka hem och slå in dem.",
    rooms: [
      { id: 1, name: "Köpcentrum", img: "/escape/adventhosjuliusson/kopcentrum.jpg", type: "letters", answer: "START", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Skoaffären", img: "/escape/adventhosjuliusson/skoaffar.jpg", type: "symbols", allowedSymbols: ["circle", "four leaf clover", "star", "heart", "triangle", "cross"], answerSequence: ["star", "cross", "heart", "four leaf clover"], instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 3, name: "Leksaksaffären", img: "/escape/adventhosjuliusson/leksaksaffar.jpg", type: "symbols", allowedSymbols: ["circle", "square", "hexagon", "heart", "triangle", "diamond"], answerSequence: ["square", "diamond", "circle", "triangle", "hexagon"], instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 4, name: "Klädaffären", img: "/escape/adventhosjuliusson/kladaffar.jpg", type: "colors", allowedColors: ["brown", "green", "pink", "red", "yellow", "blue"], answerSequence: ["blue", "pink", "brown", "yellow", "red", "green"], instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 5, name: "Smyckesaffären", img: "/escape/adventhosjuliusson/smyckesaffar.jpg", type: "letters", answer: "INGÅNG", instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 6, name: "Parkeringen", img: "/escape/adventhosjuliusson/parkering.jpg", type: "colors", allowedColors: ["green", "brown", "pink", "red", "yellow", "blue"], answerSequence: ["blue", "pink", "green", "yellow"] },
      { id: 7, name: "Pysselaffären", img: "/escape/adventhosjuliusson/pysselaffar.jpg", type: "letters", answer: "NRTR", instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 8, name: "Bokhandeln", img: "/escape/adventhosjuliusson/bokhandel.jpg", type: "number", answer: "798", instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 9, name: "Godisaffären", img: "/escape/adventhosjuliusson/godisaffar.jpg", type: "number", answer: "25423836", instruction: "Bra jobbat! Ta ledtråd 5" }
    ]
  },

  
  {
    id: 9,
    name: "Advent hos familjen Juliusson - Tredje advent",
    category: "advent",
    win: "Åh nej! Vi är inlåsta här inne. Tänk om tjuvarna kommer tillbaka?! Och snart är det jul. Vi måste komma ut...",
    rooms: [
      { id: 1, name: "Grannen i hus #8", img: "/escape/adventhosjuliusson/husnummer8.jpg", type: "letters", answer: "SURK", instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 2, name: "Lekpark", img: "/escape/adventhosjuliusson/lekpark.jpg", type: "symbols", allowedSymbols: ["circle", "four leaf clover", "star", "heart", "triangle", "square"], answerSequence: ["heart", "star", "circle", "square"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 3, name: "Övergiven byggnad", img: "/escape/adventhosjuliusson/overgivenbyggnad.jpg", type: "symbols", allowedSymbols: ["circle", "square", "hexagon", "heart", "triangle", "rectangle"], answerSequence: ["hexagon", "square", "rectangle", "triangle", "circle"], instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 4, name: "Hus #2", img: "/escape/adventhosjuliusson/husnummer2.jpg", type: "colors", allowedColors: ["purple", "green", "pink", "red", "white", "blue"], answerSequence: ["white", "purple", "red", "green"], instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 5, name: "Ingång övergiven byggnad", img: "/escape/adventhosjuliusson/ingangovergivenbyggnad.jpg", type: "letters", answer: "EHHLN", instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 6, name: "Grannen i hus #6", img: "/escape/adventhosjuliusson/husnummer6.jpg", type: "colors", allowedColors: ["green", "white", "pink", "red", "yellow", "blue"], answerSequence: ["red", "white", "pink", "red", "pink"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 7, name: "Gatan", img: "/escape/adventhosjuliusson/gatan.jpg", type: "number", answer: "47945", instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 8, name: "Grannen i hus #4", img: "/escape/adventhosjuliusson/husnummer4.jpg", type: "number", answer: "8264", instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 9, name: "Hall i byggnaden", img: "/escape/adventhosjuliusson/hallibyggnad.jpg", type: "number", answer: "3148342" }
    ]
  },

  {
    id: 10,
    name: "Advent hos familjen Juliusson - Fjärde advent",
    category: "advent",
    win: "Åh, vi tog oss ut! Vilken lycka! Nu ska vi ta med oss alla julklappar hem och vila upp oss för att orka fira jul snart. Det här var inte den julen som vi tänkte oss, men vi har varandra och vi kommer att få fira jul tillsammans. Vi i familjen Juliusson önskar er alla en god jul!",
    rooms: [
      { id: 1, name: "Vitt skåp", img: "/escape/adventhosjuliusson/vittskap.jpg", type: "letters", answer: "LXXIV", instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 2, name: "Dörren ut", img: "/escape/adventhosjuliusson/dorrenut.jpg", type: "number", answer: "1345" },
      { id: 3, name: "Brun dörr", img: "/escape/adventhosjuliusson/brundorr.jpg", type: "symbols", allowedSymbols: ["circle", "hexagon", "star", "heart", "triangle", "square"], answerSequence: ["heart", "triangle", "circle", "square", "hexagon"], instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 4, name: "Kassaskåpet", img: "/escape/adventhosjuliusson/kassaskap.jpg", type: "symbols", allowedSymbols: ["circle", "square", "hexagon", "heart", "triangle", "diamond"], answerSequence: ["circle", "triangle", "square", "hexagon"], instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 5, name: "Ventilationsluckan", img: "/escape/adventhosjuliusson/ventilationslucka.jpg", type: "colors", allowedColors: ["brown", "green", "pink", "red", "yellow", "blue"], answerSequence: ["red", "yellow", "blue", "green"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 6, name: "Elskåpet", img: "/escape/adventhosjuliusson/elskap.jpg", type: "letters", answer: "BJKEST", instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 7, name: "Kontorslådorna", img: "/escape/adventhosjuliusson/kontorslador.jpg", type: "colors", allowedColors: ["green", "purple", "pink", "red", "yellow", "blue"], answerSequence: ["blue", "purple", "red"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 8, name: "Hall i byggnaden", img: "/escape/adventhosjuliusson/hallibyggnad2.jpg", type: "number", answer: "3092182365", instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 9, name: "Skrivbordet", img: "/escape/adventhosjuliusson/skrivbordet1.jpg", type: "colors", allowedColors: ["brown", "green", "pink", "red", "yellow", "blue"], answerSequence: ["blue", "pink", "red", "green", "yellow"], instruction: "Bra jobbat! Ta ledtråd 2" }
    ]
  },

  
  {
    id: 1,
    name: "Familjen Juliusson reser iväg - Första advent",
    category: "advent",
    win: "Familjen Juliusson är nu redo för en avkopplande och stillsam semester!",
    rooms: [
      { id: 1, name: "Garderoben", img: "/escape/juliussonreserivag/garderoben.jpg", type: "letters", answer: "PTRL", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Skohyllan", img: "/escape/juliussonreserivag/skohyllan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["square", "rectangle", "star", "heart", "circle"], instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 3, name: "Passen", img: "/escape/juliussonreserivag/passen.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "rectangle"], answerSequence: ["circle", "flower", "star", "heart"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 4, name: "Mediciner", img: "/escape/juliussonreserivag/medicin.jpg", type: "number", answer: "32353841", instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 5, name: "Necessärer", img: "/escape/juliussonreserivag/necessar.jpg", type: "colors", allowedColors: ["yellow", "green", "orange", "red", "pink", "blue"], answerSequence: ["blue", "green", "red"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 6, name: "Julklappar", img: "/escape/juliussonreserivag/julklappar.jpg", type: "number", answer: "131121", instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 7, name: "Bokhyllan", img: "/escape/juliussonreserivag/bokhyllan1.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "purple"], answerSequence: ["pink", "green", "orange", "blue"], instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 8, name: "Accessoarer", img: "/escape/juliussonreserivag/accessoarer.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "purple"], answerSequence: ["red", "orange", "blue"], instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 9, name: "Djurvakt", img: "/escape/juliussonreserivag/djurvakt.jpg", type: "letters", answer: "GRANSKOG" }
    ]
  },

  {
    id: 2,
    name: "Familjen Juliusson reser iväg - Andra advent",
    category: "advent",
    win: "Familjen Juliusson hann med planet och reser iväg mot avkoppling!",
    rooms: [
      { id: 1, name: "Halldörren", img: "/escape/juliussonreserivag/halldorren1.jpg", type: "number", answer: "24816", instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 2, name: "Restaurangen", img: "/escape/juliussonreserivag/restaurangen.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["circle", "square", "rectangle", "heart"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 3, name: "Check-In", img: "/escape/juliussonreserivag/checkin.jpg", type: "letters", answer: "GSRA", instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 4, name: "Taxin", img: "/escape/juliussonreserivag/taxi.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "rectangle"], answerSequence: ["circle", "rectangle", "circle", "rectangle"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 5, name: "Flygplanet", img: "/escape/juliussonreserivag/flygplanet.jpg", type: "number", answer: "23371622" },
      { id: 6, name: "Väskinlämningen", img: "/escape/juliussonreserivag/vaskinlamning.jpg", type: "colors", allowedColors: ["yellow", "green", "purple", "red", "pink", "blue"], answerSequence: ["purple", "pink", "red", "blue", "green"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 7, name: "Säkerheten", img: "/escape/juliussonreserivag/sakerheten.jpg", type: "letters", answer: "CBAD", instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 8, name: "Gaten", img: "/escape/juliussonreserivag/gaten.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "yellow"], answerSequence: ["green", "yellow", "pink", "red"], instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 9, name: "TAXFREE", img: "/escape/juliussonreserivag/affarer.jpg", type: "number", answer: "31179", instruction: "Bra jobbat! Ta ledtråd 8" }
    ]
  },

    {
    id: 4,
    name: "Familjen Juliusson reser iväg - Tredje advent",
    category: "advent",
    win: "Hela familjen Juliusson är nu återförenade, om än inte under de bästa förutsättningarna. Återigen är de inlåsta och måste ta sig ut ur källaren…",
    rooms: [
      { id: 1, name: "Havet", img: "/escape/juliussonreserivag/havet.jpg", type: "number", answer: "41014", instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 2, name: "Spa", img: "/escape/juliussonreserivag/spa.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["circle", "star", "triangle", "heart", "rectangle"], instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 3, name: "Restaurangen", img: "/escape/juliussonreserivag/restaurangen1.jpg", type: "letters", answer: "EFTERLYSNING", instruction: "Bra jobbat! Ta ledtråd 9" },
      { id: 4, name: "Baren", img: "/escape/juliussonreserivag/baren.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "cloud", "rectangle"], answerSequence: ["heart", "square", "star", "circle", "cloud"], instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 5, name: "Källaren", img: "/escape/juliussonreserivag/kallaren.jpg", type: "number", answer: "98518" },
      { id: 6, name: "Hotellrummet", img: "/escape/juliussonreserivag/hotellrummet.jpg", type: "colors", allowedColors: ["yellow", "green", "purple", "red", "pink", "blue"], answerSequence: ["yellow", "blue", "red"], instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 7, name: "Receptionen", img: "/escape/juliussonreserivag/receptionen.jpg", type: "letters", answer: "XLSMXSL", instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 8, name: "Gymmet", img: "/escape/juliussonreserivag/gymmet.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "yellow"], answerSequence: ["pink", "green", "blue", "yellow"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 9, name: "Poolen", img: "/escape/juliussonreserivag/poolen.jpg", type: "letters", answer: "DGSWEGTAX", instruction: "Bra jobbat! Ta ledtråd 3" }
    ]
  },

  {
    id: 5,
    name: "Familjen Juliusson reser iväg - Fjärde advent",
    category: "advent",
    win: "Äntligen tog sig familjen Juliusson ut från källaren och kan börja fira jul tillsammans. Nu hoppas de på att resten av semestern blir lugn! Familjen Juliusson önskar er alla en riktigt god jul!",
    rooms: [
      { id: 1, name: "Dörren ut", img: "/escape/juliussonreserivag/dorrlas.jpg", type: "number", answer: "82379" },
      { id: 2, name: "Kassaskåpet", img: "/escape/juliussonreserivag/kassaskapet.jpg", type: "symbols", allowedSymbols: ["circle", "flower", "star", "heart", "triangle", "rectangle"], answerSequence: ["flower", "triangle", "star", "circle", "heart"], instruction: "Bra jobbat! Ta ledtråd 8" },
      { id: 3, name: "Hotellsäng", img: "/escape/juliussonreserivag/hotellsangen.jpg", type: "letters", answer: "HTVD", instruction: "Bra jobbat! Ta ledtråd 4" },
      { id: 4, name: "Elskåpet", img: "/escape/juliussonreserivag/elskapet.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "triangle"], answerSequence: ["triangle", "heart", "circle", "square", "star"], instruction: "Bra jobbat! Ta ledtråd 3" },
      { id: 5, name: "Stort skåp", img: "/escape/juliussonreserivag/stortskap.jpg", type: "number", answer: "42266830", instruction: "Bra jobbat! Ta ledtråd 7" },
      { id: 6, name: "Fönstren", img: "/escape/juliussonreserivag/fonstren.jpg", type: "colors", allowedColors: ["yellow", "green", "purple", "red", "pink", "blue"], answerSequence: ["green", "blue", "yellow"], instruction: "Bra jobbat! Ta ledtråd 2" },
      { id: 7, name: "Resväskan", img: "/escape/juliussonreserivag/resvaskan.jpg", type: "letters", answer: "YWBPG", instruction: "Bra jobbat! Ta ledtråd 6" },
      { id: 8, name: "Skrivbordet", img: "/escape/juliussonreserivag/skrivbordet2.jpg", type: "colors", allowedColors: ["blue", "green", "orange", "red", "pink", "yellow"], answerSequence: ["yellow", "red", "blue"], instruction: "Bra jobbat! Ta ledtråd 5" },
      { id: 9, name: "Handväskan", img: "/escape/juliussonreserivag/handvaskan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "flower", "triangle"], answerSequence: ["square", "circle", "star", "flower"], instruction: "Bra jobbat! Ta ledtråd 9" }
    ]
  },



  {
    id: 6,
    name: "LÄGENHETEN - kommer snart!",
    win: "Ni lyckades fly från lägenheten!",
    rooms: [
      { id: 1, name: "Toalettdörren", img: "/escape/toalettdorren.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "rectangle"], answerSequence: ["heart", "circle", "rectangle", "triangle"], instruction: "Bra jobbat2!" },
      { id: 2, name: "Soffan", img: "/escape/soffan.jpg", type: "number", answer: "104271", instruction: "Bra jobbat!" },
      { id: 3, name: "Sängen", img: "/escape/sangen.jpg", type: "letters", answer: "GFGH", instruction: "Bra jobbat!" },
      { id: 4, name: "Köket", img: "/escape/koket.jpg", type: "symbols", allowedSymbols: ["circle", "square", "star", "heart", "triangle", "cloud"], answerSequence: ["circle", "star", "heart", "cloud", "heart"], instruction: "Bra jobbat!" },
      { id: 5, name: "Bokhyllan", img: "/escape/bokhyllan.jpg", type: "symbols", allowedSymbols: ["circle", "square", "cloud", "heart", "triangle"], answerSequence: ["heart", "circle", "square", "cloud"], instruction: "Bra jobbat!" },
      { id: 6, name: "Garderoben", img: "/escape/garderoben.jpg", type: "number", answer: "90090", instruction: "Bra jobbat!" },
      { id: 7, name: "TV:n", img: "/escape/tvn.jpg", type: "colors", allowedColors: ["yellow", "green", "orange", "red", "pink", "purple"], answerSequence: ["pink", "green", "orange", "purple"] },
      { id: 8, name: "Skrivbordet", img: "/escape/skrivbordet.jpg", type: "number", answer: "8431" },
      { id: 9, name: "Fönstret", img: "/escape/fonstret.jpg", type: "colors", allowedColors: ["yellow", "brown", "blue", "red", "pink", "purple"], answerSequence: ["blue", "yellow", "red", "pink", "brown"] },
      { id: 10, name: "Halldörren", img: "/escape/halldorren.jpg", type: "letters", answer: "DENOFI" }
    ]
  },





];

// Utility för att skapa nya ID
export const nextId = (arr) => arr.length === 0 ? 1 : Math.max(...arr.map(o => o.id)) + 1;
