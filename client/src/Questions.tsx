type Question = {
  id: string;
  text: string;
};

const Questions: Question[] = [
  {
    id: "glemt-navn",
    text: "Glemt navnet til en person som husker ditt?",
  },
  {
    id: "korona-fest",
    text: "Vært på en fest der det fantes korona?",
  },
  {
    id: "korona-fatt",
    text: "Fått korona på fest?",
  },
  {
    id: "bodis",
    text: "Vært i bodegaen utenom arbeidstiden?",
  },
  {
    id: "bodis-komfortabel",
    text: "Følt deg komfortabel i bodegaen?",
  },
  {
    id: "bodis-strippestang",
    text: "Brukt strippestengene i bodegaen?",
  },
  {
    id: "bodis-med-hjem",
    text: "Funnet deg hook i bodegaen?",
  },
  {
    id: "samfundet-arrangement",
    text: "Sneket deg på et arrangement på huset uten å være på jobb?",
  },
  {
    id: "sesam-lukket",
    text: "Prøvd å dra på sesam men det var stengt?",
  },
  {
    id: "kort-mistet",
    text: "Glemt/mistet kortet?",
  },
  {
    id: "kort-last-inne",
    text: "Låst kortet inne på et område der man trenger kort?",
  },
  {
    id: "mobil-mistet",
    text: "Glemt/mistet mobil på huset?",
  },

  {
    id: "utstyr-ødelagt",
    text: "Ødelagt noe dyrt utstyr?",
  },

  {
    id: "regi-stropp",
    text: "Tatt med en registropp hjem?",
  },
  {
    id: "stjalet",
    text: "Stjålet noe fra samfundet?",
  },
  {
    id: "teip-smakt",
    text: "Smakt på gaffateip?",
  },
  {
    id: "brukt-dassdass",
    text: "Brukt dassdass?",
  },
  {
    id: "brukt-klst-dass",
    text: "Brukt KLST toalettet?",
  },
  {
    id: "ufs-sort-uke",
    text: "Være sort på krysseliste i over en uke?",
  },
  {
    id: "ufs-kaffefilter",
    text: "Krysset på et kaffefilter?",
  },
  {
    id: "ufs-annen",
    text: "Krysset på en annen person uten å spørre?",
  },
  {
    id: "ufs-sort",
    text: "Krysset på deg selv når du var sort?",
  },
  {
    id: "hybel-regel-sprinkel",
    text: "Tatt på en sprinkel på en hybel?",
  },
  {
    id: "hybel-regel-dorstokk",
    text: "Tatt alkohol over dørstokk?",
  },
  {
    id: "hybel-regel-bilde",
    text: "Lagt ut et bilde fra en hybel?",
  },
  {
    id: "hybel-smuglet-person",
    text: "Smuglet inn noen på hyblene?",
  },

  {
    id: "kort-kortmisbrukt",
    text: "Kortmisbrukt?",
  },
  {
    id: "kort-kortmisbrukt-flere",
    text: "Kortmisbrukt over 5 ganger innen 12 timer?",
  },
  {
    id: "kort-tatt",
    text: "Tatt i kortmisbruk?",
  },
  {
    id: "gjemt-siling",
    text: "Gjemt deg eller noen under siling?",
  },
  {
    id: "taket",
    text: "Vært på taket?",
  },
  {
    id: "taket-is",
    text: "Vært på taket om vinteren?",
  },
  {
    id: "kastet-ut",
    text: "Kastet ut?",
  },
  {
    id: "disiplinary",
    text: "Hatt en disiplinærsak mot deg?",
  },

  {
    id: "hybel-berget",
    text: "Berget noe fra en hybel?",
  },
  {
    id: "hybel-anti-berget",
    text: "Antiberget noe fra en hybel?",
  },
  {
    id: "hybel-uberbart",
    text: "Berget noe fra en hybel som ikke var bergbart?",
  },
  {
    id: "hybel-berget-pling",
    text: "Berget plingen fra en annen sin hybel?",
  },
  {
    id: "knus",
    text: "Knust noe på hyblene?",
  },
  {
    id: "hybel-drikking",
    text: "Drukket alkohol på hyblene? (i teorien)",
  },

  {
    id: "holde-hender",
    text: "Holdt hender (ikke platonisk) på samfundet?",
  },
  {
    id: "kysset-huset",
    text: "Kysset på huset?",
  },
  {
    id: "klint-huset",
    text: "Klint på huset?",
  },
  {
    id: "klint-hybel",
    text: "Klint på hyblene?",
  },
  {
    id: "kysset-intern",
    text: "Kysset en annen intern?",
  },
  {
    id: "kysset-tor",
    text: "Kysset Tor (FK)?",
  },
  {
    id: "kysset-intern-gjeng",
    text: "Kysset en annen i samme gjeng?",
  },

  {
    id: "sex",
    text: "Hatt samleie på huset?",
  },
  {
    id: "sex-orgasme",
    text: "Hatt en orgasme på huset?",
  },
  {
    id: "sex-kondom",
    text: "Ikke brukt kondom under samleie på huset?",
  },
  {
    id: "sex-kondom-hentet",
    text: "Brukt en kondom hentet på huset?",
  },
  {
    id: "sex-offentlig",
    text: "Hatt samleie på huset på et offentlig areal?",
  },
  {
    id: "sex-offentlig-storsal",
    text: "Hatt samleie midt i storsalen?",
  },
  {
    id: "sex-sett-på",
    text: "Sett noen andre ha samleie på huset?",
  },
  {
    id: "sex-pa-kinorommet",
    text: "Hatt sex på kinorommet?",
  },
  {
    id: "sex-pa-fbf",
    text: "Hatt sex på fbf?",
  },
  {
    id: "sex-pa-studio",
    text: "Hatt sex på FKs studio?",
  },
  {
    id: "sex-pa-lounge",
    text: "Hatt sex på FKs lounge?",
  },
  {
    id: "sex-pa-roykerom",
    text: "Hatt sex på blackbox?",
  },
  {
    id: "k35-adventure",
    text: "Våknet opp i K35 uten å vite hvordan du endte opp der?",
  },
  {
    id: "klamma",
    text: "Fått en kjønnssykdom fra pga huset?",
  },
  {
    id: "klamma-soci",
    text: "Fått en kjønnssykdom på SOCI?",
  },
  {
    id: "sex-etter-ONS",
    text: "Jobbet med personen etter et ONS?",
  },

  {
    id: "porno",
    text: "Sett porno på huset?",
  },

  {
    id: "naken-royke",
    text: "Vært naken på akvariet for å røyke?",
  },
  {
    id: "naken",
    text: "Vært naken på en hybel med andre påkledde folk?",
  },
  {
    id: "drugs",
    text: "Brukt narkotiske stoffer på huset? (i teorien)",
  },
  {
    id: "alkohol-faked-sobriety",
    text: "Late som å være edru for å få mer drikke?",
  },
  {
    id: "pling-uten-mening",
    text: "Plinget uten å mene det?",
  },
  {
    id: "alkohol-blackout",
    text: "Blacket ut på hyblene?",
  },
  {
    id: "sorry-message",
    text: "Sendt 'sorry' dagen etterpå?",
  },
  {
    id: "spy",
    text: "Spydd på hyblene?",
  },
  {
    id: "spy-ikke-do",
    text: "Spydd på hyblene et annet sted enn en vask eller do?",
  },
  {
    id: "spy-pa-adre",
    text: "Spydd på noen andre på hyblene?",
  },

  {
    id: "bodis-dryhump",
    text: "Dryhumpet noen i bodegaen?",
  },

  {
    id: "gjengcest",
    text: "Hatt gjengcest?",
  },
];

export default Questions;
