/*
  Anmerkung: Das ganze, kann glaub ich noch schöner geschrieben werden.
  Habe mich für Node.JS entschieden, weil ich faul bin.
  Habe mein Wissen & https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_solution angewandt um das zu lösen.

-------
  Erklärungen:
  \n => Zeilenumbruch

  ${irgendwas} ersetzt die stelle im text mit dem wert von irgendwas.
  Bsp: const irgendwas = "Logan".
  console.log(`Mein name ist ${irgendwas}.`) => Mein Name ist Logan

  readline ist eine Klasse, die userinput liest.

  require ist so ähnlich wie import.
-------

  Eigenwerbung: github.com/Logxn/ | loganthompson.de
  Datum: 19.11.2018 - 19:37
*/

const readline = require('readline');

// Brauche nen Spielzugcounter, um meine Berechnungsmethode zu verifizieren.
var zug = 1;

// erstellt i/o stream
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mit wie vielen Scheiben soll gespielt werden? => 8 (8 = antwortScheiben)
rl.question('Mit wie vielen Scheiben soll gespielt werden? =>  ', (antwortScheiben) => {
    console.log(`\n<INFO> Es werden ${berechneSpielzüge(antwortScheiben)} züge benötigt, um das Spiel zu beenden.`);

    spiele(antwortScheiben, "A", "C", "B");
});


// A wird unser Ausgangs-Stab sein, bei dem alle Scheiben der größe nach gestapelt sind
// B wird unser Ausweichs-Stab sein.
// C wird unser Eingangs-Stab sein, bei dem am ende alle Scheiben wieder sortiert erscheinen sollen
// Theoretisch hätte man das auch mit Arrays lösen können.
// Bin aber ne faule sau ¯\_(ツ)_/¯
// Prinzip: https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_solution
function spiele(anzahl, ausgangStab, eingangStab, ausweichStab){

  if(anzahl == 1)
  {
    console.log(`<ZUG: ${zug}> Wir schieben die erste Scheibe von ${ausgangStab} zu ${eingangStab}`);
  }
  else{

      spiele(anzahl-1, ausgangStab, ausweichStab, eingangStab);
      zug++;
      console.log(`<ZUG: ${zug}> Schiebe Scheibe ${anzahl} von ${ausgangStab} nach ${eingangStab}`);

      zug++;
      spiele(anzahl-1, ausweichStab, eingangStab, ausgangStab);
  }
}


function berechneSpielzüge(discs){

  // playTime gibt die Züge zurück.
  // Hiermit könnte man noch einige Sachen berechnen.
  // z.B die tatsächliche Spieldauer in Sekunden
  // Siehe: https://en.wikipedia.org/wiki/Tower_of_Hanoi#Origins
  const playTime = Math.pow(2, discs) - 1;
  return playTime;
}
