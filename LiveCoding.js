let movies = [
  {
    name: "Hocus Pocus",
    description:
      "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
    dateReleased: 1993,
    genre: ["comedy", "family", "fantasy"],
    ageRating: "PG",
  },
  {
    name: "Independence Day",
    description:
      "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    dateReleased: 1996,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",
  },
  {
    name: "E.T. the Extra-Terrestrial",
    description:
      "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
    dateReleased: 1982,
    genre: ["adventure", "family", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "The Goonies",
    description:
      "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",
  },
  {
    name: "Back to the Future",
    description:
      "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    dateReleased: 1985,
    genre: ["adventure", "comedy", "sci-fi"],
    ageRating: "PG",
  },
  {
    name: "Jurassic Park",
    description:
      "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    dateReleased: 1993,
    genre: ["action", "adventure", "sci-fi"],
    ageRating: "PG-13",
  },
  {
    name: "Toy Story",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
    dateReleased: 1995,
    genre: ["animation", "adventure", "comedy"],
    ageRating: "G",
  },
  {
    name: "The Land Before Time",
    description:
      "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
    dateReleased: 1988,
    genre: ["animation", "adventure", "drama"],
    ageRating: "G",
  },
  {
    name: "Labyrinth",
    description:
      "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
    dateReleased: 1986,
    genre: ["adventure", "family", "family"],
    ageRating: "PG",
  },
  {
    name: "Cool Runnings",
    description:
      "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
    dateReleased: 1993,
    genre: ["adventure", "comedy", "family"],
    ageRating: "PG",
  },
];

//Question 1
//there is a local movie-rental store that is looking to better organize their shelves
//write a function that separates movies by ageRating
//create an empty array called familyMovies
//create an empty array called pg13Movies
//if "PG-13," push the entire movie object to the correct array
//if "PG" AND 'G' push the entire movie object to the correct array

let familyMovies = [];
let pg13Movies = [];

function organizeMovies() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].ageRating === "PG-13") {
      pg13Movies.push(movies[i]);
    } else if (movies[i].ageRating === "G" || movies[i].ageRating === "PG") {
      familyMovies.push(movies[i]);
    }
  }
}
// console.log(pg13Movies);
// console.log(familyMovies);
// organizeMovies();

//Question 2
//there is a local movie-rental store that is looking to better organize their shelves
//write a function that
//iterates the movies array
//using an array method, find movie genres that INCLUDES 'comedy' AND 'family'
//create an empty array favoritePicks
//if the movie is 'comedy' and 'family' then push the entire object to the favoritePicks array

let favoritePicks = [];

const checkGenres = () => {
  for (let i = 0; i < movies.length; i++) {
    if (
      movies[i].genre.includes("comedy") &&
      movies[i].genre.includes("family")
    ) {
      favoritePicks.push(movies[i]);
    }
  }
};

checkGenres();
console.log(favoritePicks);

//person 1 - give favorite genre (two genres)
//person 2 - give favorite genre (two genres)

//person 3 - 80s movies only! doesn't care about genre

//if there's an agreement on movie
//randomize if there is not agreement

class Movie {
  constructor(title, genre, ageRating) {
    this.title = title;
    this.genre = genre;
    this.ageRating = ageRating;
  }
}

let movieOne = new Movie(
  "Brave Little Toaster",
  ["animation", "adventure", "family"],
  "G"
);

console.log(movieOne);
