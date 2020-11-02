const firstLetter = (s) => s[0];

const lastLetter = (s) => s[s.length - 1];

const randomLetter = (s) => {
    let randomIndex = Math.floor(Math.random(s.length));
    return s[randomIndex];
}

const substring = (s, start, length) => s.substr(start, length);


module.exports = { firstLetter, lastLetter, randomLetter }