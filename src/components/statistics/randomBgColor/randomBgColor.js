export default function getRandomBgColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}