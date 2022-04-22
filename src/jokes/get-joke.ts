import jokes from "./jokes.db";
import type { Joke } from "./jokes.types";

export function getJoke(): Joke {
  const randIdx = ~~(jokes.length * Math.random());
  return jokes[randIdx];
}
