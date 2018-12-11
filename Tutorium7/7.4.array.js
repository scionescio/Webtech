// // Dies ist ein beispielhaftes Personen-Array, welches den Aufbau verdeutlicht // Es enthält weitere Arrays mit [name, birthYear, status, sex].

class Person {
  constructor(name, birthYear, status, sex) {
    this.name = name;
    this.birthYear = birthYear;
    this.status = status;
    this.sex = sex;
    this.age = 2018 - birthYear;
  }
}

const person1 = new Person("Max", 1967, 2, "m");
const person11 = new Person("Maxi", 1967, 2, "m");
const person2 = new Person("Maria", 1990, 1, "f");
const person3 = new Person("Meik", 1982, 2, "m");
const person4 = new Person("Mareike", 1985, 3, "f");
const person5 = new Person("Mervin", 1971, 1, "m");
const person6 = new Person("Magdalena", 1979, 1, "f");
const person7 = new Person("Magdaleneon", 1997, 2, "n");

const persons = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person11
];

// // Diese Funktion filtert das übergebene Array nach dem Geschlecht
// // Rückgabe: ein Array, das alle Personen des ursprünglichen Arrays enthält, bei denen das // Geschlecht dem übergebenen Parameter entspricht; Wenn kein Eintrag vorhanden ist,
// // dann wird ein leeres Array zurückgegeben
// // Zum Beispiel: filterSex(persons, 'f')
// // Bsp-Rückgabe:
// // [ [ 'Maria', 1990, 1, 'f' ], [ 'Mareike', 1995, 3, 'f' ],
// // [ 'Magdalena', 1979, 1, 'f' ] ]
function filterSex(personsArray, sex) {
  return personsArray.filter(x => x.sex == sex);
}

console.log("filterSex: ");
console.log(filterSex(persons, "m"));

// // Diese Funktion berechnet das Alter jeder Person
// // Zum Beispiel: getAge(persons)
// // Bsp-Rückgabe:
// // [ [ 'Max', 50 ], [ 'Maria', 27 ], [ 'Meik', 35 ], [ 'Mareike', 32 ], // [ 'Mervin', 46 ], [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
  return personsArray.map(x => {
    return [(name = x.name), (age = 2018 - x.birthYear)];
  });
}

console.log("getAge: " + getAge(persons));

// // Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person // und sortiert das Array (höchster Status zuerst, bei
// // gleichem Status: nach Namen alphabetisch)
// // für String-Vergleiche in der Mozilla Referenz nachschauen
// // Zum Beispiel: getSortedStatus(persons)
// // Bsp-Rückgabe:
// // [ [ 'Max', 100 ], [ 'Mareike', 96 ], [ 'Meik', 70 ],
// // [ 'Mervin', 46 ], [ 'Magdalena', 38 ], [ 'Maria', 27 ] ]
function getSortedStatus(personsArray) {
  return personsArray
    .map(x => {
      return { name: x.name, ageStatus: (2018 - x.birthYear) * x.status };
    })
    .sort((x, y) => {
      return x.ageStatus === y.ageStatus && x.name.length > y.name.length
        ? 1
        : x.ageStatus > y.ageStatus
        ? -1
        : 1;
    });
}

console.log("getSortedStatus: ");
console.log(getSortedStatus(persons));

// // Diese Funktion gibt ein Array mit den Namen aller Personen zurück // Zum Beispiel: getNames(persons)
// // Bsp-Rückgabe:
// // [ 'Max', 'Maria', 'Meik', 'Mareike', 'Mervin', 'Magdalena' ]
function getNames(personsArray) {
  return personsArray.map(x => x.name);
}

console.log("getNames: " + getNames(persons));

// // Diese Funktion gibt das addierte Alter aller Personen zurück // Zum Beispiel: getAggregatedAge(persons)
// // Bsp-Rückgabe:
// // 228
function getAggregatedAge(personsArray) {
  return personsArray.reduce((accumulator, x) => accumulator + x.age, 0);
}

console.log("getAggregatedAge: " + getAggregatedAge(persons));

// Diese Funktion zählt die Geschlechter der Personen und gruppiert diese in einer Map. // (siehe http://eloquentjavascript.net/06_object.html#h_gAcc11EHzV).
// Achtung: Man kann nicht davon ausgehen, dass nur 'f' und 'm' vorkommen!
// Bsp-Rückgabe für persons:
// Map { 'f' => 3, 'm' => 3 }

function getAmount(personsArray) {
  var b = new Map();
  return personsArray
    .map(x => x.sex)
    .reduce(
      (mapp, y) =>
        mapp.has(y) === true ? mapp.set(y, mapp.get(y) + 1) : mapp.set(y, 1),
      new Map()
    );
}

console.log("getAmount: ");
console.log(getAmount(persons));
