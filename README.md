![license](https://custom-icon-badges.demolab.com/github/license/haithamaouati/GuessTheNumber?logo=law)
![stars](https://custom-icon-badges.demolab.com/github/stars/haithamaouati/GuessTheNumber?logo=star)
![forks](https://custom-icon-badges.demolab.com/github/forks/haithamaouati/GuessTheNumber?logo=repo-forked)
![watchers](https://custom-icon-badges.demolab.com/github/watchers/haithamaouati/GuessTheNumber?logo=eye)

# Guess The Number
[Guess The Number](https://haithamaouati.github.io/GuessTheNumber/) game in HTML, CSS and JavaScript.

I am thinking of a number between 1-100.

Can you guess it?

## Table of Contents
- [Flowchart](#flowchart)
- [Author](#author)
- [License](#license)

## Flowchart
How it works?

```mermaid
graph TD;
S(Start)
S --> R[Generate random number]
R --> N((Your guess))
N --> L{Guess is low} -->|Yes| L1[Too low]
L <-->|No| G{Guess is random}
N --> G
G -->|Yes| G1[Guessed]
H <-->|No| G
N --> H{Guess is high} -->|Yes| H1[Too high]
```

## Author
Made with :hearts: by **Haitham Aouati**

## License
Guess The Number is licensed under the
[MIT License](LICENSE).
