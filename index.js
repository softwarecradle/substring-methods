const firstLetter = (s) => s[0];
const lastLetter = (s) => s[s.length - 1];
const randomLetter = (s) => {
    let randomIndex = Math.floor(Math.random(s.length));
    return s[randomIndex];
}

module.exports = { firstLetter, lastLetter, randomLetter }