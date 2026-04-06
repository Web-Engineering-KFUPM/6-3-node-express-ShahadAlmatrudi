import { getRandomInt } from "./utils/random.js";

const quotes = [
  "Believe you can and you're halfway there.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Do something today that your future self will thank you for.",
  "Dream big. Start small. Act now.",
  "Stay positive, work hard, make it happen."
];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}