# Word-Guess-Command-Line-Game

![alt text](word-guess.gif "word guess demo")

## Description
This project is a hangman game that can be played on the terminal. The theme of this game is legendary pokemon.

## How To Play
Run the index.js file with node in terminal and the application will prompt the user for a letter input. If the input matches with one of the missing letter of the target word, the letter will replace the underscore line. Otherwise, user's chances will go down by one. Once the word has been guessed completely or the user's chances reach zero, the game will reset and a new random word will be generated. 

## Technologies Used
+ Javascript
+ Node
    +   inquirer package
+ Bash