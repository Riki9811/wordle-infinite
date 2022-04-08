<div id="top"></div>

<!-- SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Riki9811/Wordle-Infinite">
    <img src="images/logo.png" alt="Logo" height="100">
  </a>

<h3 align="center">Wordle Infinite</h3>

  <p align="center">
    Play wordle any time you want
    <br />
    <a href="https://github.com/Riki9811/Wordle-Infinite"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Riki9811/Wordle-Infinite">View Demo</a>
    ·
    <a href="https://github.com/Riki9811/Wordle-Infinite/issues">Report Bug</a>
    ·
    <a href="https://github.com/Riki9811/Wordle-Infinite/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-to-play">How To Play</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a clone of the famous Wordle game, but unlike the original this website will have some different game modes. The game modes will be:
- Classic: play once a day (just like original)
- Infinite: play as many times as you want
- Quordle: you have to guess 4 words simultaneously, one game per day
- Quordle Infinite: same as Quordle but being able to play as many times as you want

Maybe other game modes will be added in the future

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   React
-   HTML
-   CSS

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## How To Play

These are general rules valid for all the game modes.

Each game you have a number of attempts to guess a secret 5 letter word. Each guess must be a valid 5 letter word. After each guess, the color of the letters in the word you guessed will change to show how close your guess was to the secret word. The colors folow these rules:

- Gray: the secret word does not contain the letter
- Yellow: the secret word contains the letter but in another position
- Green: the secret word has the same letter in the same position

If you manage to guess the whole word in amount of attempts given you win, otherwise you lose and the secret word will be revealed to you.

[![Rules Example Screenshow][rules-screenshot]](https://example.com)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [ ] Routing to different game modes
-   [ ] Main Interface (top-bar, gameboard, digital-keyboard)
-   [ ] Word check algorithm
-   [ ] Main game loop for each game mode
-   [ ] Recording stats in localStorage
-   [ ] Stats modal
-   [ ] Settings menu
-   [ ] How to play menu

See the [open issues](https://github.com/Riki9811/Wordle-Infinite/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, you can simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Riccardo Mariotti - riccardo.mariotti98@gmail.com

Project Link: [https://github.com/Riki9811/Wordle-Infinite](https://github.com/Riki9811/Wordle-Infinite)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Riki9811/Wordle-Infinite.svg?style=for-the-badge
[contributors-url]: https://github.com/Riki9811/Wordle-Infinite/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/Riki9811/Wordle-Infinite.svg?style=for-the-badge
[stars-url]: https://github.com/Riki9811/Wordle-Infinite/stargazers
[issues-shield]: https://img.shields.io/github/issues/Riki9811/Wordle-Infinite.svg?style=for-the-badge
[issues-url]: https://github.com/Riki9811/Wordle-Infinite/issues
[license-shield]: https://img.shields.io/github/license/Riki9811/Wordle-Infinite.svg?style=for-the-badge
[license-url]: https://github.com/Riki9811/Wordle-Infinite/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
[rules-screenshot]: images/rules-screenshot.png