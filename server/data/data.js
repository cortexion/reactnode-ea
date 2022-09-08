const data = [
    {
        "name": "Avengers: Endgame",
        "year": 2018,
        "genres": [
            "Adventure",
            "Sci-fi"
        ],
        "ageLimit": 12,
        "rating": 4,
        "actors": [
            {
                "firstName": "Robert",
                "lastName": " Downey Jr."
            },
            {
                "firstName": "Chris",
                "lastName": "Evans"
            },
            {
                "firstName": "Scarlett",
                "lastName": "Johansson"
            }
        ],
        "director": {
            "firstName": "Anthony",
            "lastName": "Russo"
        },
        "synopsis": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
        "name": "The Curse of the Were-Rabbit",
        "year": 2005,
        "genres": [
            "Animation",
            "Adventure",
            "Comedy"
        ],
        "ageLimit": 12,
        "rating": 4,
        "actors": [
            {
                "firstName": "Peter",
                "lastName": " Sallis"
            },
            {
                "firstName": "Ralph",
                "lastName": "Fiennes"
            }
        ],
        "director": {
            "firstName": "Steve",
            "lastName": "Box"
        },
        "synopsis": "Wallace and his loyal dog, Gromit, set out to discover the mystery behind the garden sabotage that plagues their village and threatens the annual giant vegetable growing contest."
    },
    {
        "name": "Downtown Abbey",
        "year": 2019,
        "genres": [
            "Drama"
        ],
        "ageLimit": 7,
        "rating": 3,
        "actors": [
            {
                "firstName": "Michelle",
                "lastName": " Dockery"
            },
            {
                "firstName": "Matthew",
                "lastName": "Goode"
            },
            {
                "firstName": "Tuppence",
                "lastName": "Middleton"
            }
        ],
        "director": {
            "firstName": "Michael",
            "lastName": "Enger"
        },
        "synopsis": "The continuing story of the Crawley family, wealthy owners of a large estate in the English countryside in the early 20th century."
    },
    {
        "name": "Ad Astra",
        "year": 2019,
        "genres": [
            "Adventure",
            "Drama",
            "Mystery"
        ],
        "ageLimit": 12,
        "rating": 3,
        "actors": [
            {
                "firstName": "Brad",
                "lastName": " Pitt"
            },
            {
                "firstName": "Tommy",
                "lastName": "Lee Jones"
            }
        ],
        "director": {
            "firstName": "James",
            "lastName": "Grey"
        },
        "synopsis": "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe."
    },
    {
        "name": "The Dark Crystal",
        "year": 1982,
        "genres": [
            "Adventure",
            "Familty",
            "Fantasy"
        ],
        "ageLimit": 12,
        "rating": 3,
        "actors": [
            {
                "firstName": "Jim",
                "lastName": " Henson"
            },
            {
                "firstName": "Catherine",
                "lastName": "Mullen"
            },
            {
                "firstName": "Frank",
                "lastName": "Oz"
            }
        ],
        "director": {
            "firstName": "Jim",
            "lastName": "Henson"
        },
        "synopsis": "On another planet in the distant past, a Gelfling embarks on a quest to find the missing shard of a magical crystal, and so restore order to his world."
    },
    {
        "name": "Aliens",
        "year": 1986,
        "genres": [
            "Action",
            "Adventure",
            "Sci-fi"
        ],
        "ageLimit": 16,
        "rating": 5,
        "actors": [
            {
                "firstName": "Sigourney",
                "lastName": " Weaver"
            }
        ],
        "director": {
            "firstName": "James",
            "lastName": "Cameron"
        },
        "synopsis": "Ellen Ripley is rescued by a deep salvage team after being in hypersleep for 57 years. The moon that the Nostromo visited has been colonized, but contact is lost. This time, colonial marines have impressive firepower, but will that be enough?"
    },
    {
        "name": "2001: A Space Odyssey",
        "year": 1986,
        "genres": [
            "Adventure",
            "Sci-fi"
        ],
        "ageLimit": 8,
        "rating": 5,
        "actors": [
            {
                "firstName": "Keir",
                "lastName": " Dullea"
            },
            {
                "firstName": "Gary",
                "lastName": " Lockwood"
            }
        ],
        "director": {
            "firstName": "Stanley",
            "lastName": "Kubrick"
        },
        "synopsis": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000."
    },
    {
        "name": "Tolkien",
        "year": 2019,
        "genres": [
            "Biography",
            "Drama",
            "War"
        ],
        "ageLimit": 12,
        "rating": 2,
        "actors": [
            {
                "firstName": "Nicholas",
                "lastName": " Dullea"
            },
            {
                "firstName": "Lily",
                "lastName": " Collins"
            }
        ],
        "director": {
            "firstName": "Dome",
            "lastName": "Karkukoski"
        },
        "synopsis": "The formative years of the orphaned author J.R.R. Tolkien as he finds friendship, love and artistic inspiration among a group of fellow outcasts at school."
    },
    {
        "name": "The Shape of Water",
        "year": 2017,
        "genres": [
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "ageLimit": 16,
        "rating": 4,
        "actors": [
            {
                "firstName": "Sally",
                "lastName": "Hawkins"
            },
            {
                "firstName": "Michael",
                "lastName": "Shannon"
            },
            {
                "firstName": "Octavia",
                "lastName": "Spencer"
            }
        ],
        "director": {
            "firstName": "Guillermo",
            "lastName": "del Toro"
        },
        "synopsis": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity."
    },
    {
        "name": "Vertigo",
        "year": 1958,
        "genres": [
            "Mystery",
            "Romance",
            "Thriller"
        ],
        "ageLimit": 12,
        "rating": 5,
        "actors": [
            {
                "firstName": "James",
                "lastName": "Stewart"
            },
            {
                "firstName": "Kim",
                "lastName": "Novak"
            },
            {
                "firstName": "Barbara",
                "lastName": "Bel Geddes"
            }
        ],
        "director": {
            "firstName": "Alfred",
            "lastName": "Hitchcock"
        },
        "synopsis": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman."
    },
    {
        "name": "Blade Runner 2049",
        "year": 2017,
        "genres": [
            "Action",
            "Drama",
            "Mystery"
        ],
        "ageLimit": 15,
        "rating": 5,
        "actors": [
            {
                "firstName": "Ryan",
                "lastName": "Gosling"
            },
            {
                "firstName": "Harrison",
                "lastName": "Ford"
            },
            {
                "firstName": "Robin",
                "lastName": "Wright"
            }
        ],
        "director": {
            "firstName": "Denis",
            "lastName": "Villeneuve"
        },
        "synopsis": "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years."
    },
    {
        "name": "Drive",
        "year": 2011,
        "genres": [
            "Crime",
            "Drama"
        ],
        "ageLimit": 18,
        "rating": 4,
        "actors": [
            {
                "firstName": "Ryan",
                "lastName": "Gosling"
            },
            {
                "firstName": "Carey",
                "lastName": "Mulligan"
            }
        ],
        "director": {
            "firstName": "Nicholas",
            "lastName": "Winding Refn"
        },
        "synopsis": "A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor."
    },
    {
        "name": "Dumb and Dumber",
        "year": 1994,
        "genres": [
            "Comedy"
        ],
        "ageLimit": 12,
        "rating": 3,
        "actors": [
            {
                "firstName": "Jim",
                "lastName": "Carrey"
            },
            {
                "firstName": "Jeff",
                "lastName": "Daniels"
            },
            {
                "firstName": "Lauren",
                "lastName": "Holly"
            }
        ],
        "director": {
            "firstName": "Peter",
            "lastName": "Farrelly"
        },
        "synopsis": "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen, to return the briefcase to its owner."
    },
    {
        "name": "Raiders of the Lost Ark",
        "year": 1981,
        "genres": [
            "Action",
            "Adventure"
        ],
        "ageLimit": 0,
        "rating": 4,
        "actors": [
            {
                "firstName": "Harrison",
                "lastName": "Ford"
            },
            {
                "firstName": "Karen",
                "lastName": "Allen"
            }
        ],
        "director": {
            "firstName": "Steven",
            "lastName": "Spielberg"
        },
        "synopsis": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    },
    {
        "name": "Gremlins",
        "year": 1984,
        "genres": [
            "Comedy",
            "Fantasy",
            "Horror"
        ],
        "ageLimit": 15,
        "rating": 3,
        "actors": [
            {
                "firstName": "Hoyt",
                "lastName": "Axton"
            },
            {
                "firstName": "John",
                "lastName": "Louie"
            }
        ],
        "director": {
            "firstName": "Joe",
            "lastName": "Dante"
        },
        "synopsis": "A boy inadvertently breaks three important rules concerning his new pet and unleashes a horde of malevolently mischievous monsters on a small town."
    },
    {
        "name": "The Florida Project",
        "year": 2017,
        "genres": [
            "Drama"
        ],
        "ageLimit": 15,
        "rating": 3,
        "actors": [
            {
                "firstName": "Brooklynn",
                "lastName": "Prince"
            },
            {
                "firstName": "Christopher",
                "lastName": "Rivera"
            },
            {
                "firstName": "Willem",
                "lastName": "Dafoe"
            }
        ],
        "director": {
            "firstName": "Sean",
            "lastName": "Baker"
        },
        "synopsis": "Set over one summer, the film follows precocious six-year-old Moonee as she courts mischief and adventure with her ragtag playmates and bonds with her rebellious but caring mother, all while living in the shadows of Walt Disney World."
    },
    {
        "name": "Predator",
        "year": 1987,
        "genres": [
            "Action",
            "Adventure",
            "Sci-fi"
        ],
        "ageLimit": 18,
        "rating": 4,
        "actors": [
            {
                "firstName": "Arnold",
                "lastName": "Schwarzenegger"
            },
            {
                "firstName": "Carl",
                "lastName": "Weathers"
            }
        ],
        "director": {
            "firstName": "John",
            "lastName": "McTiernan"
        },
        "synopsis": "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior."
    },
    {
        "name": "Spirited Away",
        "year": 2001,
        "genres": [
            "Animation",
            "Adventure",
            "Family"
        ],
        "ageLimit": 0,
        "rating": 5,
        "actors": [
            {
                "firstName": "Rumi",
                "lastName": "Hiiragi"
            },
            {
                "firstName": "Miyu",
                "lastName": "Irino"
            }
        ],
        "director": {
            "firstName": "Hayao",
            "lastName": "Miyazaki"
        },
        "synopsis": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
    },
    {
        "name": "Saving Private Ryan",
        "year": 1998,
        "genres": [
            "Drama",
            "War"
        ],
        "ageLimit": 15,
        "rating": 3,
        "actors": [
            {
                "firstName": "Tom",
                "lastName": "Hanks"
            },
            {
                "firstName": "Tom",
                "lastName": "Sizemore"
            },
            {
                "firstName": "Edward",
                "lastName": "Burns"
            }
        ],
        "director": {
            "firstName": "Steven",
            "lastName": "Spielberg"
        },
        "synopsis": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
    },
    {
        "name": "Rambo: Last Blood",
        "year": 2019,
        "genres": [
            "Action",
            "Adventure",
            "Thriller"
        ],
        "ageLimit": 18,
        "rating": 2,
        "actors": [
            {
                "firstName": "Sylvester",
                "lastName": "Stallone"
            },
            {
                "firstName": "Paz",
                "lastName": "Vega"
            },
            {
                "firstName": "Yvette",
                "lastName": "Monreal"
            }
        ],
        "director": {
            "firstName": "Adrian",
            "lastName": "Grunberg"
        },
        "synopsis": "Rambo must confront his past and unearth his ruthless combat skills to exact revenge in a final mission."
    }
];

module.exports = data