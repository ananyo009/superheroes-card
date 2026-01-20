import React from 'react'
import Card from './components/card'

const App = () => {

  const superheroes = [
    {
      id: 1,
      name: "Spider Man",
      powers: "Wall-crawling, Superhuman strength, Spider-Sense, Web-shooting",
      image:
        "https://i.pinimg.com/736x/86/30/94/8630943be08be6a830e3425450b9896f.jpg",
      backgroundImage:
        "https://i.pinimg.com/1200x/8e/90/1f/8e901f7e4827cac9073ae2c3131d90fa.jpg",
      likeCount: "45.2k",
      postCount: "1.2k",
      viewsCount: "150k",
    },
    {
      id: 2,
      name: "Wonder Woman",
      powers:
        "Super strength, Flight, Lasso of Truth, Indestructible bracelets",
      image:
        "https://i.pinimg.com/1200x/f6/8a/ca/f68acaf1ffcf0bf927a441f7f1437514.jpg",
      backgroundImage:
        "https://i.pinimg.com/1200x/e6/21/69/e62169c2f027b0f2fcfaa079dd2ceb64.jpg",
      likeCount: "38.9k",
      postCount: "890",
      viewsCount: "120k",
    },
    {
      id: 3,
      name: "Iron Man",
      powers:
        "Powered armor suit, Flight, Repulsor beams, Genius-level intellect",
      image:
        "https://i.pinimg.com/1200x/48/a9/30/48a930a7e31a3cdc2dcff50b9da6da99.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/a8/5f/2c/a85f2c9fb8d40d80b286c1fadfb4ce0b.jpg",
      likeCount: "52k",
      postCount: "1.5k",
      viewsCount: "200k",
    },
    {
      id: 4,
      name: "Black Panther",
      powers:
        "Enhanced senses, Superhuman agility, Vibranium suit, Expert martial artist",
      image:
        "https://i.pinimg.com/1200x/c6/d0/43/c6d0434e46f4ee38e3c96b0a05b94159.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/48/b7/9e/48b79e3fcebb89d4a9763976b975b134.jpg",
      likeCount: "41.5k",
      postCount: "760",
      viewsCount: "135k",
    },
    {
      id: 5,
      name: "Captain America",
      powers:
        "Superhuman strength, Enhanced agility, Master tactician, Vibranium shield mastery",
      image:
        "https://i.pinimg.com/736x/92/f9/9e/92f99e7bfb37560c4e8a76910679d73e.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/43/07/fa/4307fa2854ed5e03bab4a902a0af55d1.jpg",
      likeCount: "47.8k",
      postCount: "1.3k",
      viewsCount: "165k",
    },
    {
      id: 6,
      name: "Doctor Strange",
      powers:
        "Mastery of magic, Astral projection, Time manipulation, Flight via Cloak",
      image:
        "https://i.pinimg.com/736x/cc/92/02/cc9202fe1b78ab4b68c6c51fc2ef46e5.jpg",
      backgroundImage:
        "https://i.pinimg.com/1200x/99/d4/8b/99d48bb5731b74e8ddc5d91f9d3011e5.jpg",
      likeCount: "29.8k",
      postCount: "430",
      viewsCount: "110k",
    },
    {
      id: 7,
      name: "The Flash",
      powers:
        "Super speed, Phasing through objects, Time travel, Accelerated healing",
      image:
        "https://i.pinimg.com/736x/cc/9a/1c/cc9a1c31fba3f05250ee1ba75d83917b.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/e3/78/bf/e378bf03a5f52d18b9ce92c5c574d0b9.jpg",
      likeCount: "34.5k",
      postCount: "620",
      viewsCount: "125k",
    },
    {
      id: 8,
      name: "Captain Marvel",
      powers:
        "Energy absorption, Photonic blasts, Superhuman durability, Interstellar flight",
      image:
        "https://i.pinimg.com/736x/28/9c/86/289c86ed43c046f720b83ca405ed626d.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/43/eb/29/43eb29d2a433c600cb96edc8010add7e.jpg",
      likeCount: "27.6k",
      postCount: "390",
      viewsCount: "89k",
    },
    {
      id: 9,
      name: "Batman",
      powers:
        "Peak human physical condition, Master detective, High-tech gadgets, Expert tactician",
      image:
        "https://i.pinimg.com/1200x/15/cd/0d/15cd0d85f2adceae34dd23bb7606e992.jpg",
      backgroundImage:
        "https://i.pinimg.com/1200x/22/de/fa/22defad2021de3d7b8c119ba5d9e42d9.jpg",
      likeCount: "58k",
      postCount: "1.8k",
      viewsCount: "250k",
    },
    {
      id: 10,
      name: "Scarlet Witch",
      powers: "Reality warping, Chaos magic, Telekinesis, Telepathy",
      image:
        "https://i.pinimg.com/736x/90/9d/26/909d26ebd871f78345e907ebaf68110a.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/fc/f6/ac/fcf6acad512c68dc7e07f1a9d2ca59fc.jpg",
      likeCount: "36.7k",
      postCount: "510",
      viewsCount: "105k",
    },
    {
      id: 11,
      name: "Thor",
      powers:
        "Weather control, Flight via Mjolnir, Superhuman strength, Longevity",
      image:
        "https://i.pinimg.com/736x/de/74/09/de740975ccdb2bca56847fd169816175.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/c5/b5/a0/c5b5a0094b5f3128ec5be7b90c134c0d.jpg",
      likeCount: "48.5k",
      postCount: "1.1k",
      viewsCount: "180k",
    },
    {
      id: 12,
      name: "Aquaman",
      powers:
        "Marine telepathy, Underwater breathing, Superhuman swimming speed, Hydrokinesis",
      image:
        "https://i.pinimg.com/736x/83/c8/5a/83c85a9f512e30b769d866572b150d5b.jpg",
      backgroundImage:
        "https://i.pinimg.com/736x/02/4b/2f/024b2f8a595ec1e6ea2f56a2e5576b0f.jpg",
      likeCount: "32k",
      postCount: "670",
      viewsCount: "95k",
    },
  ];

  return (
    <div className="h-screen w-screen  flex justify-around  flex-wrap gap-10 p-10 mb-10">
      {superheroes.map(function (elem) {
        return <Card image={elem.image} background={elem.backgroundImage } user={elem.name} superpower = {elem.powers} like={elem.likeCount} post={elem.postCount} view={elem.viewsCount} />
      })}
    </div>
  )
}

export default App
