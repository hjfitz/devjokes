import type { Jokes } from "./jokes.types";

const jokes: Jokes = [
  {
    question: "Why did the developer not eat at the conference?",
    answer: "It was a serverless function.",
  },
  {
    question: "Our team had a debate about the best name for looping variables",
    answer: "i won",
  },
  {
    question: 'What screams "I\'m insecure?"',
    answer: "http://",
  },
  {
    question: "Working with hex is cool A-F",
  },
  {
    question: "Why are 'i' and 'j' a good source of information?",
    answer: "They're always in the loop",
  },
  {
    question: "Why does every developer use a dark IDE?",
    answer: "Bugs are attracted to the light",
  },
  {
    question: JSON.stringify('Sunshine'.split(''))
    answer: "array of Sunshine",
  },
  {
    question: JSON.stringify('hip hip'.split(' ')),
    answer: 'hip hip array!'
  },
  {
    question: "Due to coronavirus, all TCP connections are being converted to UDP to avoid handshakes",
  },
  {
    question: "How did pirates collaborate before computers?"
    answer: "Pier to pier networking",
  },
];

export default jokes;
