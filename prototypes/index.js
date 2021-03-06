const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name);
    return result;
    // Annotation:

    // Write your annotation here as a comment:
    // filter the data set where the kitty color is orange
    // map the filter to insert name of the kitty that match the orange color
    // criteria in an array
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a,b) => b.age - a.age);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // sorting the kitties data by the age, from oldest to youngest
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      return {
        name: kitty.name,
        age: kitty.age + 2,
        color: kitty.color,
      };
    });
    return result;
    // Annotation:
    // Write your annotation here as a comment
    // map a new array with update object instances of a kitty where age is
    // increase by 2
  }
};








// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    let clubMembers = clubs.reduce((members, club) => {
      club.members.forEach(member => {
        if(!members.includes(member)) {
          members.push(member);
        }
      });
      return members;
    },[]);

    const result = clubMembers.reduce((acc, clubMember) => {
      acc[clubMember] = findClub(clubMember);
      return acc;
    }, {});

    function findClub(currentMember) {
      currentClub = [];
      clubs.forEach(club => {
        club.members.forEach(member => {
          if(member === currentMember) {
            currentClub.push(club.club);
          }
        });
      });
      return currentClub;
    }

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => {
      return {mod: mod.mod,
        studentsPerInstructor: mod.students/mod.instructors};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //map the mods dataset to output and object of mod # and its students to
    // instructors ratio
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => {
      return {flavor: cake.cakeFlavor,
        inStock: cake.inStock};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    //map the cake dataset and return the flavor of the cake and how many in stock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // filter cakes that are in stock.
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((acc, cake) => {
      return acc += cake.inStock;
    },0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // use reduce to add all cake in stock to one total value of total overall
    // cake in the store.
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = [];
    cakes.forEach(cake => {
      cake.toppings.forEach(topping => {
        if (!result.includes(topping)) {
          result.push(topping);
        }
      });
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // look at the cake first, then look inside the topping array
    // inside the topping array, we will look if the current topping is in the
    // result array. If not, then the topping is pushed into the array;
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    let toppings = cakes.reduce((toppingList, cake) => {
      cake.toppings.forEach(topping => {
        if(!toppingList.includes(topping)) {
          toppingList.push(topping);
        }
      });
      return toppingList;
    },[]);

    const result = toppings.reduce((needs, toppingNeed) => {
      if(!needs[toppingNeed]) {
        needs[toppingNeed] = 0;
      }
      cakes.forEach(cake => {
        cake.toppings.forEach(topping => {
          if(toppingNeed === topping) {
            needs[topping]++;
          }
        });
      });
      return needs;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // filter the classroom by the program name
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    let classSummary = {
      feCapacity: 0,
      beCapacity: 0
    };

    classrooms.forEach(classroom => {
      if(classroom.program === 'FE') {
        classSummary['feCapacity'] = classSummary['feCapacity'] + classroom.capacity;
      } else if(classroom.program === 'BE') {
        classSummary['beCapacity'] = classSummary['beCapacity'] + classroom.capacity;
      }
    });

    const result = classSummary;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a,b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    // books.filter(book => {
    //   if(!book.genre === "Horror") {
    //     return book.title;
    //   }
    // })
    // .map(book => {
    //   return book.title;
    // });

    const result = books.reduce((nonViolence, book) => {
      if(book.genre === 'Horror' || book.genre === 'True Crime') {
        return nonViolence;
      } else {
        nonViolence.push(book.title);
        return nonViolence;
      }
    },[]);

    return result;

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books.reduce((newBook, book) => {
      if(book.published > 1990) {
        newBook.push({
          title: book.title,
          year: book.published
        });
      }

      return newBook;
    },[]);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(temperature => {
      return (temperature.temperature.high + temperature.temperature.low) / 2;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.reduce((sunnyWeather, type) => {
      if(type.type.includes('sunny')) {
        sunnyWeather.push(`${type.location} is ${type.type}.`);
      }
      return sunnyWeather;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.sort((a,b) => b.humidity - a.humidity)[0];
    return result;

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    let isVisited = {
      parksToVisit: [],
      parksVisited: []
    };

    nationalParks.forEach(park => {
      if(park.visited === false) {
        isVisited['parksToVisit'].push(park.name);
      } else {
        isVisited['parksVisited'].push(park.name);
      }
    });

    const result = isVisited;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(park => {
      return {[`${park.location}`]: park.name};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((acc, park) => {
      park.activities.forEach(activity => {
        if(!acc.includes(activity)) {
          acc.push(activity);
        }
      });
      return acc;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((totalBeer, brewery) => {
      totalBeer += brewery.beers.length;
      return totalBeer;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery => {
      return {name:brewery.name, beerCount: brewery.beers.length};
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((totalBeer, brewery) => {
      brewery.beers.forEach(beer => {
        if(!totalBeer.includes(beer)) {
          totalBeer.push(beer);
        }
      });
      return totalBeer;
    }, []).sort((a,b) => b.abv - a.abv)[0];

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      return {name: instructor.name,
        studentCount: cohorts.find(cohort => instructor.module === cohort.module).studentCount};
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    let result = cohorts.reduce((acc, cohort) => {
      acc[`cohort${cohort.cohort}`] = cohort.studentCount /
      instructors.filter(instructor => cohort.module === instructor.module).length;
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    let teachers = {
      Pam: [],
      Brittany: [],
      Nathaniel: [],
      Robbie: [],
      Leta: [],
      Travis: [],
      Louisa: [],
      Christie: [],
      Will: []
    };

    instructors.forEach(instructor => {
      instructor.teaches.forEach(teach => {
        cohorts.forEach(cohort => {
          cohort.curriculum.forEach(subject => {
            if(teach === subject) {
              if(!teachers[`${instructor.name}`].includes(cohort.module)) {
                teachers[`${instructor.name}`].push(cohort.module);
              }
            }
          });
        });
      });
    });

    let teachersList = Object.keys(teachers);

    teachersList.reduce((sortTeacher, teacher) => {
      sortTeacher[teacher] = teachers[teacher].sort();
      return sortTeacher;
    }, {});

    const result = teachers;

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    let curriculumList = cohorts.reduce((curriculumList, cohort) => {
      cohort.curriculum.forEach(subject => {
        if(!curriculumList.includes(subject)) {
          curriculumList.push(subject);
        }
      });
      return curriculumList;
    },[]);

    const result = curriculumList.reduce((subjectList, subject) => {
      instructors.forEach(instructor => {
        instructor.teaches.forEach(teach => {
          if(teach === subject) {
            if(!subjectList[subject]) {
              subjectList[subject] = [];
            }
            subjectList[subject].push(instructor.name);
          }
        });
      });
      return subjectList;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    let bossesNames = Object.keys(bosses);

    const result = bossesNames.reduce((loyalty, boss) => {
      loyalty.push({bossName: bosses[boss].name,
        sidekickLoyalty: loyaltyCheck(boss)});

      function loyaltyCheck(bossName) {
        let loyatyCount = 0;
        bosses[bossName].sidekicks.forEach(bossSidekick => {
          sidekicks.forEach(sidekick => {
            if(bossSidekick.name === sidekick.name) {
              loyatyCount = loyatyCount + sidekick.loyaltyToBoss;
            }
          });
        });
        return loyatyCount;
      }

      return loyalty;
    },[]);

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = stars.filter(star => star.constellation === 'Orion');
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    let starColors = stars.reduce((colors, star) => {
      if(!colors.includes(star.color)) {
        colors.push(star.color);
      }
      return colors;
    }, []);

    const result = starColors.reduce((starInfo, color) => {
      starInfo[color] = stars.filter(star => star.color === color);

      return starInfo;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = stars.sort((a,b) => a.visualMagnitude - b.visualMagnitude).map(star => {
      return star.constellation;
    }).filter(star => star != '');

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((totalDamage, character) => {
      character.weapons.forEach(weapon => {
        totalDamage += weapons[weapon].damage
      })

      return totalDamage;
    },0)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.reduce((characterTotal, character) => {
      characterTotal.push({[character.name]: {damage: damageTotal(character.name, 'damage'), range: damageTotal(character.name, 'range')}});

      return characterTotal;
    },[]);

    function damageTotal(characterName, weapontype) {
      let total = 0;
      let characterWeapons = characters.find(character => character.name === characterName).weapons
        .forEach(weapon => {
          total += weapons[weapon][weapontype];
        });
      return total;
    }

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    let result = movies.reduce((acc, movie) => {
      acc[`${movie.title}`] = coolDino(movie);

      return acc
    },{})

    function coolDino(movie) {
      coolCount = 0;
      movie.dinos.forEach(dino => {
        if(dinosaurs[dino].isAwesome === true) {
          coolCount++
        }
      })
      return coolCount;
    }

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment

  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    // .cast.forEach(person => {
    //   if(person === human) {
    //     acc.push(human);
    //   }
    // })
    let humanNames = Object.keys(humans);

    let castActors = movies.reduce((acc, movie) => {
      acc = acc.concat(movie.cast)
      return acc
    },[])

    let inMovieHumans = [...new Set(castActors)];

    let uncastHumans = humanNames.reduce((acc, name) => {
      if(!inMovieHumans.includes(name)){
        acc.push(name);
      }
      return acc;
    }, [])
      .map(person => {
      return {name: person,
      nationality: humans[person].nationality,
      imdbStarMeterRating: humans[person].imdbStarMeterRating}
    })
      .sort((a,b) => (a.nationality > b.nationality) ? 1 : -1)

    const result = uncastHumans;
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */
    let humanNames = Object.keys(humans);

    let humansInMovies = [];

    humanNames.forEach(name => {
      movies.forEach(movie => {
        movie.cast.forEach(person => {
          if(name === person) {
            humansInMovies.push(person);
          }
        });
      });
    });

    let humanArray = humansInMovies.reduce((acc, human) => {
      if(!acc.includes(human)) {
        acc.push(human);
      }
      return acc;
    },[]);

    const result = humanArray.reduce((acc, human) => {
      acc.push({
        name: human,
        ages: ageFunction(human)
      });
      return acc;
    },[]);

    function ageFunction(name) {
      let ageArray = [];
      movies.forEach(movie => {
        movie.cast.forEach(person => {
          if (name === person) {
            ageArray.push(movie.yearReleased - humans[name].yearBorn);
          }
        });
      });
      return ageArray;
    }

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
