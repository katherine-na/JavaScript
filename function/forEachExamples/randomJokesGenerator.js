// forEach devuelve una broma por cada elemento del array jokes

const jokes = [
  "A Pen is worth a thousand docs",
  "Be the developer your linter thinks you are",
  "How do you comfort a JavaScript bug? You console it!",
  "How would you React if I said I love Vue?",
  "If a groundhog inspects their Web Component, do they see their Shadow DOM?",
];

const jokesArray = jokes.forEach((joke, index) => {
  console.log(index, joke);
});
