export function getRandomNumberInRange(start, end) {
  if (start > end) {
    throw new Error("Start should be less than or equal to end");
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
