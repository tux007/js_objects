let myObject = {
    'name': 'Tom',
    'age': 48,
    'logJob': function (number) {
        console.log('Developer' + number);
    },
    'good_guy': true,
};

myObject.logJob(999);
//console.log(myObject);
console.table(myObject);
console.table(Object.keys(myObject));
//console.table(Object.values(myObject));
console.log(Object.entries(myObject));

let objKeys = Object.keys(myObject);
let ourArray = [];

for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]]);
}

console.table(ourArray);

let myObjectArray = [
    {
        "name": "Tom",
        "is_a_good_guy": true
    },
    {
        "name": "Jerry",
        "is_a_good_guy": false
    },
    {
        "name": "Spike",
        "is_a_good_guy": true
    },
    {
        "name": "Tyke",
        "is_a_good_guy": false
    }
];

console.log(
    myObjectArray.filter(element => element.is_a_good_guy === true)
);

console.log(
    myObjectArray.findIndex(element => element.name === 'Spike')
);

let library = {
    "info": {
      "name": "Stadtbibliothek",
      "location": {
        "city": "Musterstadt",
        "coordinates": { "lat": 48.1351, "lon": 11.582 }
      }
    },
    "sections": {
      "fiction": [
        {
          "shelf": 1,
          "book": {
            "title": "Die Verwandlung",
            "author": {
              "name": "Franz Kafka",
              "born": "1883-07-03",
              "died": "1924-06-03"
            },
            "year": 1915,
            "status": "ausgeliehen"
          }
        },
        {
          "shelf": 2,
          "book": {
            "title": "1984",
            "author": {
              "name": "George Orwell",
              "born": "1903-06-25",
              "died": "1950-01-21"
            },
            "year": 1949,
            "status": "verfügbar"
          }
        }
      ],
      "nonFiction": [
        {
          "shelf": 3,
          "book": {
            "title": "Eine kurze Geschichte der Zeit",
            "author": {
              "name": "Stephen Hawking",
              "born": "1942-01-08",
              "died": "2018-03-14"
            },
            "year": 1988,
            "status": "verfügbar"
          }
        }
      ]
    }
  };

  console.log(library.sections.fiction[0].book.author.name);
  console.log(library.info.location.city);
  console.log(library.sections.fiction[1].book.status);