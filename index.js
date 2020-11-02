exports.firstLetter = (s) => s[0];

exports.lastLetter = (s) => s[s.length - 1];

exports.randomLetter = (s) => {
    let randomIndex = Math.floor(Math.random() * s.length);
    return s[randomIndex];
}

exports.substr = (s, start, length) => s.substr(start, length);

exports.substring = (s, start, end) => s.substring(start, end);

exports.numberOfOccurrences = (s, sub) => {
    if (s.indexOf(sub) < 0)
        return 0;

    let splits = s.split(sub);
    return splits.length - 1;
}

exports.allPossibleSubstrings = (s) => {
    let all = [];

    for (let i = 0; i < s.length; i += 1) {
        all.push(s[i]);
    }

    for (let i = 0; i < s.length; i += 2) {
        all.push(s[i]);
    }

    for (let i = 0; i < s.length; i += 3) {
        all.push(s[i]);
    }

    return all;
}