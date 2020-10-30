var age = 28;

function happyBirthday(years) {
  const newage = years + 1;

  return newage;
}

var names = ["Fabrizio", "Matteo", "Laura", "Lorenzo", "Daniele"];

for (let i = 0; i < names.length; i++) {
  // chiamiamo una funzione che farà qualcosa con il singolo nome
  // printName(names[i]);
}

function printName(name) {
  console.log(name);
}

function forEachManuale() {
  const people = [
    { name: "Fabrizio", role: "Teacher" },
    { name: "Matteo", role: "Student" },
    { name: "Carlotta", role: "Tutor" },
    { name: "Lorenzo", role: "Student" }
  ];

  for (let i = 0; i < people.length; i++) {
    people[i].role = "Teacher";
  }

  console.log(people);

  return people;
}

function forEachJS() {
  const people = [
    { name: "Fabrizio", role: "Teacher" },
    { name: "Matteo", role: "Student" },
    { name: "Carlotta", role: "Tutor" },
    { name: "Lorenzo", role: "Student" }
  ];

  const names = ["Fabrizio", "Matteo", "Laura", "Lorenzo", "Daniele"];

  people.forEach(person => {
    console.log(person);
  });
  names.forEach(name => {
    console.log(name + " Rossi");
  });

  console.log(people);
  console.log(names);
}

function forEachExplained(array, callback) {
  let i = 0;

  while (i < array.length) {
    const element = array[i];
    callback(element);

    i++;
  }
}

function mapJS() {
  const people = [
    { name: "Fabrizio", role: "Teacher" },
    { name: "Matteo", role: "Student" },
    { name: "Carlotta", role: "Tutor" },
    { name: "Lorenzo", role: "Student" }
  ];

  const names = ["Fabrizio", "Matteo", "Laura", "Lorenzo", "Daniele"];

  const lauraPeople = people.map(person => {
    return {
      ...person,
      name: "Laura"
    };
  });
  const rossiNames = names.map(name => {
    return name + " Rossi";
  });

  console.log(people);
  console.log(lauraPeople);
  console.log(names);
  console.log(rossiNames);
}

function main() {
  const people = [
    { name: "Fabrizio", role: "Teacher", age: 28 },
    { name: "Matteo", role: "Student", age: 18 },
    { name: "Carlotta", role: "Tutor", age: 18 },
    { name: "Lorenzo", role: "Student", age: 18 }
  ];

  const names = ["Fabrizio", "Matteo", "Laura", "Lorenzo", "Daniele"];

  //   const teachers = forEachExplained(people, person => {
  //     console.log(person);
  //   });
  //   forEachExplained(names, name => {
  //     console.log(name);
  //   });

  //   console.log(people);
  //   console.log(teachers);
  //   console.log(names);

  const lauree = mapExplained(people, person => {
    return {
      ...person,
      name: "Laura"
    };
  });

  console.log(people);
  console.log(lauree);

  //   const sum = people.reduce((accumulator, person) => {
  //     return accumulator + person.age;
  //   }, 0);

  const sum = reduceExplained(
    people,
    (accumulator, person) => {
      return accumulator + person.age;
    },
    0
  );

  console.log(sum);
}

function reduceJS() {
  const people = [
    { name: "Fabrizio", role: "Teacher", age: 28 },
    { name: "Matteo", role: "Student", age: 18 },
    { name: "Carlotta", role: "Tutor", age: 18 },
    { name: "Lorenzo", role: "Student", age: 18 }
  ];

  //   let sum = 0;

  //   for (let i = 0; i < people.length; i++) {
  //     sum += people[i].age;
  //   }

  //   people.forEach(person => {
  //     sum += person.age;
  //   });

  const ages = people.map(person => {
    return person.age;
  });

  ages.reduce((accumulator, age) => {
    return accumulator + age;
  });

  const sum = people.reduce((accumulator, person) => {
    return accumulator + person.age;
  }, 0);

  console.log(sum);
}

function mapExplained(array, callback) {
  const result = [];
  let i = 0;

  while (i < array.length) {
    const element = array[i];

    const newValue = callback(element);

    result.push(newValue);

    i++;
  }

  return result;
}

function reduceExplained(array, callback, initialValue) {
  let i = 0;
  let result = initialValue;

  while (i < array.length) {
    const element = array[i];

    result = callback(result, element);

    i++;
  }

  return result;
}

const recipes = [
  {
    id: 1,
    name: "Ricetta della torta carote",
    ingredients: [
      {
        name: "carote",
        quantity: 3
      },
      {
        name: "latte",
        quantity: 1
      },
      {
        name: "burro",
        quantity: 1
      },
      {
        name: "zucchero",
        quantity: 5
      }
    ]
  },
  {
    id: 2,
    name: "Carbonara",
    ingredients: [
      {
        // this is a joke of course
        // pasta carbonara has no panna 🤯
        name: "panna",
        quantity: 1
      },
      {
        name: "uova",
        quantity: 4
      },
      {
        name: "guanciale",
        quantity: 200
      }
    ]
  }
];

function searchByIngredients(recipes, ingredient) {
  // ritorna un array che contiene tutte le ricette
  // che hanno l'ingrediente passato come parametro
}
