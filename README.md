
![](https://img.shields.io/github/issues/softwarecradle/substring-methods)
![](https://img.shields.io/github/forks/softwarecradle/substring-methods)
![](https://img.shields.io/github/stars/softwarecradle/substring-methods)

# Substring Methods
A collection of methods related to substrings in JavaScript

## Usage

```
npm install substring-methods
```

In your code
```
const { firstLetter } = require('substring-methods');

console.log(firstLetter("Test string"));
```

## Methods

### `firstLetter`
Get the first letter of a string
```
const s = firstLetter("Hello"); 
// returns "H"
```

### `lastLetter`
Get the last letter of a string
```
const s = lastLetter("Hello"); 
// returns "o"
```

### `randomLetter`
Get a random letter of a string
```
const s = randomLetter("Hello"); 
```

### `numberOfOccurrences`
Count the number of times a substring occurs inside a string
```
const s = numberOfOccurrences("The heater he ordered for them was hefty", "he");
// returns 5
```

### `allPossibleSubstrings`
Gets all possible contiguous substrings inside a string
```
const s = allPossibleSubstrings("cat");
// returns [ 'c', 'a', 't', 'ca', 'at', 'cat' ]
```

